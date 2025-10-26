import { createContext, useState, useContext, useEffect } from 'react'
import { upsertLeaderboardUser } from '../services/leaderboardService'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

const INITIAL_USER_STATE = {
  username: 'תלמיד',
  avatar: '👤',
  isLoggedIn: false,
  hearts: 5,
  maxHearts: 5,
  lastHeartRefill: Date.now(),
  coins: 0,
  streak: 0,
  lastStudyDate: null,
  league: 'ברונזה',
  leaguePosition: 0,
  weeklyScore: 0,
  completedLessons: [],
  unlockedLessons: ['lesson-1'],
  totalQuestions: 0,
  correctAnswers: 0,
  missions: [
    { id: 'daily-1', title: 'סיים 3 שיעורים', progress: 0, target: 3, reward: 10, completed: false },
    { id: 'daily-2', title: 'ענה על 20 שאלות', progress: 0, target: 20, reward: 15, completed: false },
    { id: 'daily-3', title: 'למד 3 ימים ברצף', progress: 0, target: 3, reward: 20, completed: false }
  ],
  achievements: [],
  powerUps: {
    streakFreeze: 0,
    doubleXP: { active: false, expiresAt: null },
    hints: 0
  }
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('rightsChainUser')
    return saved ? JSON.parse(saved) : INITIAL_USER_STATE
  })

  useEffect(() => {
    localStorage.setItem('rightsChainUser', JSON.stringify(user))
    
    // Sync to Supabase if user is logged in
    if (user.isLoggedIn) {
      syncToSupabase()
    }
  }, [user])

  const syncToSupabase = async () => {
    if (!user.isLoggedIn) return
    
    await upsertLeaderboardUser({
      username: user.username,
      avatar: user.avatar,
      coins: user.coins,
      weeklyScore: user.weeklyScore,
      streak: user.streak,
      hearts: user.hearts,
      completedLessons: user.completedLessons
    })
  }

  // Heart refill logic (every 4 hours)
  useEffect(() => {
    const checkHeartRefill = () => {
      const now = Date.now()
      const timeSinceRefill = now - user.lastHeartRefill
      const hoursPasssed = Math.floor(timeSinceRefill / (1000 * 60 * 60 * 4))
      
      if (hoursPasssed > 0 && user.hearts < user.maxHearts) {
        setUser(prev => ({
          ...prev,
          hearts: Math.min(prev.maxHearts, prev.hearts + hoursPasssed),
          lastHeartRefill: now
        }))
      }
    }

    const interval = setInterval(checkHeartRefill, 60000) // Check every minute
    checkHeartRefill() // Check immediately

    return () => clearInterval(interval)
  }, [user.hearts, user.lastHeartRefill, user.maxHearts])

  const loseHeart = () => {
    setUser(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1)
    }))
  }

  const buyHearts = (amount) => {
    const cost = amount * 10
    if (user.coins >= cost) {
      setUser(prev => ({
        ...prev,
        hearts: Math.min(prev.maxHearts, prev.hearts + amount),
        coins: prev.coins - cost
      }))
      return true
    }
    return false
  }

  const addCoins = (amount) => {
    setUser(prev => ({
      ...prev,
      coins: prev.coins + amount
    }))
  }

  const completeLesson = (lessonId, correctCount, totalCount) => {
    const today = new Date().toDateString()
    const wasStudiedToday = user.lastStudyDate === today
    
    setUser(prev => {
      const newUser = { ...prev }
      
      // Add to completed lessons
      if (!newUser.completedLessons.includes(lessonId)) {
        newUser.completedLessons = [...newUser.completedLessons, lessonId]
      }
      
      // Update streak
      if (!wasStudiedToday) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const wasYesterday = prev.lastStudyDate === yesterday.toDateString()
        
        newUser.streak = wasYesterday ? prev.streak + 1 : 1
        newUser.lastStudyDate = today
      }
      
      // Add coins (5 per lesson + bonus for perfect score)
      const coinReward = 5 + (correctCount === totalCount ? 5 : 0)
      newUser.coins = prev.coins + coinReward
      
      // Update stats
      newUser.totalQuestions = prev.totalQuestions + totalCount
      newUser.correctAnswers = prev.correctAnswers + correctCount
      newUser.weeklyScore = prev.weeklyScore + (correctCount * 10)
      
      // Update missions
      newUser.missions = prev.missions.map(mission => {
        if (mission.id === 'daily-1' && !mission.completed) {
          const newProgress = mission.progress + 1
          return {
            ...mission,
            progress: newProgress,
            completed: newProgress >= mission.target
          }
        }
        if (mission.id === 'daily-3' && !mission.completed) {
          return {
            ...mission,
            progress: newUser.streak,
            completed: newUser.streak >= mission.target
          }
        }
        return mission
      })
      
      return newUser
    })
  }

  const answerQuestion = (correct) => {
    setUser(prev => ({
      ...prev,
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
      missions: prev.missions.map(mission => {
        if (mission.id === 'daily-2' && !mission.completed) {
          const newProgress = mission.progress + 1
          return {
            ...mission,
            progress: newProgress,
            completed: newProgress >= mission.target
          }
        }
        return mission
      })
    }))
    
    if (!correct) {
      loseHeart()
    }
  }

  const claimMissionReward = (missionId) => {
    setUser(prev => ({
      ...prev,
      missions: prev.missions.map(mission => {
        if (mission.id === missionId && mission.completed) {
          return { ...mission, claimed: true }
        }
        return mission
      }),
      coins: prev.coins + (prev.missions.find(m => m.id === missionId)?.reward || 0)
    }))
  }

  const resetDailyMissions = () => {
    setUser(prev => ({
      ...prev,
      missions: INITIAL_USER_STATE.missions
    }))
  }

  const buyPowerUp = (itemId, price, effect) => {
    if (user.coins < price) return { success: false, message: 'אין מספיק מטבעות' }

    setUser(prev => {
      const newUser = { ...prev, coins: prev.coins - price }
      
      switch (itemId) {
        case 'streak-freeze':
          newUser.powerUps = {
            ...prev.powerUps,
            streakFreeze: prev.powerUps.streakFreeze + 1
          }
          break
        case 'double-xp':
          newUser.powerUps = {
            ...prev.powerUps,
            doubleXP: {
              active: true,
              expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
            }
          }
          break
        case 'hint-pack':
          newUser.powerUps = {
            ...prev.powerUps,
            hints: prev.powerUps.hints + 5
          }
          break
      }
      
      return newUser
    })
    
    return { success: true, message: 'נרכש בהצלחה!' }
  }

  const useHint = () => {
    if (user.powerUps.hints > 0) {
      setUser(prev => ({
        ...prev,
        powerUps: {
          ...prev.powerUps,
          hints: prev.powerUps.hints - 1
        }
      }))
      return true
    }
    return false
  }

  const value = {
    user,
    setUser,
    loseHeart,
    buyHearts,
    addCoins,
    completeLesson,
    answerQuestion,
    claimMissionReward,
    resetDailyMissions,
    buyPowerUp,
    useHint
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
