import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { getLeaderboard, resetWeeklyScores, clearLeaderboard } from '../services/leaderboardService'
import { TEACHER_PIN } from '../config/supabase'
import './Leaderboard.css'

// Mock leaderboard data
const generateLeaderboard = (currentUser) => {
  const names = [
    'יוסי', 'שרה', 'דניאל', 'מיכל', 'אבי', 'רונית', 'עומר', 'נועה', 'תום', 'יעל',
    'אורי', 'טל', 'ליאור', 'מאיה', 'רועי'
  ]
  
  const avatars = ['👨', '👩', '🧑', '👦', '👧', '🧒', '👨‍🎓', '👩‍🎓', '🧑‍🎓', '🦸‍♂️', '🦸‍♀️', '🧙‍♂️', '🧙‍♀️', '🧑‍💻', '👤']
  
  const leaderboard = names.map((name, index) => ({
    id: index + 1,
    name: name,
    score: Math.floor(Math.random() * 500) + 100,
    streak: Math.floor(Math.random() * 30),
    avatar: avatars[index % avatars.length]
  }))
  
  // Add current user
  leaderboard.push({
    id: 'me',
    name: currentUser.username,
    score: currentUser.weeklyScore,
    streak: currentUser.streak,
    avatar: currentUser.avatar || '👤',
    isCurrentUser: true
  })
  
  // Sort by score
  leaderboard.sort((a, b) => b.score - a.score)
  
  // Add positions
  return leaderboard.map((user, index) => ({
    ...user,
    position: index + 1
  }))
}

const getMedalEmoji = (position) => {
  if (position === 1) return '🥇'
  if (position === 2) return '🥈'
  if (position === 3) return '🥉'
  return `#${position}`
}

function Leaderboard() {
  const { user } = useUser()
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)
  const [showResetModal, setShowResetModal] = useState(false)
  const [pin, setPin] = useState('')
  const [resetType, setResetType] = useState('soft') // 'soft' or 'hard'
  const [error, setError] = useState('')

  useEffect(() => {
    loadLeaderboard()
    
    // Refresh leaderboard every 30 seconds
    const interval = setInterval(loadLeaderboard, 30000)
    return () => clearInterval(interval)
  }, [])

  const loadLeaderboard = async () => {
    setLoading(true)
    const result = await getLeaderboard(50)
    if (result.success && result.data) {
      setLeaderboard(result.data.map((user, index) => ({
        id: user.id,
        name: user.username,
        score: user.weekly_score || 0,
        streak: user.streak || 0,
        avatar: user.avatar || '👤',
        position: index + 1,
        isCurrentUser: user.username === user.username
      })))
    }
    setLoading(false)
  }

  const handleResetClick = () => {
    setShowResetModal(true)
    setPin('')
    setError('')
  }

  const handleResetConfirm = async () => {
    if (pin !== TEACHER_PIN) {
      setError('קוד PIN שגוי!')
      return
    }

    setLoading(true)
    setError('')
    
    const result = resetType === 'soft' 
      ? await resetWeeklyScores() 
      : await clearLeaderboard()
    
    if (result.success) {
      await loadLeaderboard()
      setShowResetModal(false)
      alert(resetType === 'soft' ? 'ציוני השבוע אופסו בהצלחה! ✅' : 'הלידרבורד נמחק בהצלחה! ✅')
    } else {
      console.error('Reset error:', result.error)
      setError(`שגיאה: ${result.error?.message || 'נסה שוב או בדוק את החיבור ל-Supabase'}`)
    }
    setLoading(false)
  }

  const currentUserPosition = leaderboard.find(u => u.name === user.username)

  return (
    <div className="container leaderboard-page">
      <div className="page-header slide-up">
        <h1 className="page-title">🏆 לוח מובילים</h1>
        <p className="page-subtitle">תחרות שבועית - מי יגיע לראש?</p>
      </div>

      <div className="league-info card">
        <div className="league-badge">
          <div className="league-icon">🏅</div>
          <div className="league-name">ליגת {user.league}</div>
        </div>
        <div className="user-position">
          <div className="position-label">המיקום שלך</div>
          <div className="position-value">{currentUserPosition ? getMedalEmoji(currentUserPosition.position) : '-'}</div>
          <div className="position-score">{user.weeklyScore} נקודות</div>
        </div>
      </div>

      {loading ? (
        <div className="loading-state card">
          <div className="loading-spinner">⏳</div>
          <p>טוען לוח מובילים...</p>
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="empty-state card">
          <div className="empty-icon">🏆</div>
          <p>אין עדיין משתתפים בלידרבורד</p>
          <p>היה הראשון להירשם!</p>
        </div>
      ) : (
        <>
        <div className="podium">
        {leaderboard.slice(0, 3).map((player, index) => (
          <div key={player.id} className={`podium-place place-${index + 1}`}>
            <div className="podium-medal">{getMedalEmoji(player.position)}</div>
            <div className="podium-avatar">
              <div className="avatar-circle">{player.avatar}</div>
            </div>
            <div className="podium-name">{player.name}</div>
            <div className="podium-score">{player.score}</div>
          </div>
        ))}
      </div>

      <div className="leaderboard-list">
        {leaderboard.map((player, index) => (
          <div 
            key={player.id} 
            className={`leaderboard-item card ${player.name === user.username ? 'current-user' : ''} ${index < 3 ? 'top-three' : ''}`}
          >
            <div className="player-position">
              {getMedalEmoji(player.position)}
            </div>
            <div className="player-avatar">
              <div className="avatar-circle-small">{player.avatar}</div>
            </div>
            <div className="player-info">
              <div className="player-name">
                {player.name}
                {player.name === user.username && <span className="you-badge">אתה</span>}
              </div>
              <div className="player-streak">🔥 {player.streak} ימים</div>
            </div>
            <div className="player-score">{player.score}</div>
          </div>
        ))}
      </div>
      </>
      )}

      <div className="league-info-section card">
        <h3>📊 איך עובדת הליגה?</h3>
        <ul>
          <li>כל שבוע מתחילה תחרות חדשה</li>
          <li>צבור נקודות על ידי השלמת שיעורים ותשובות נכונות</li>
          <li>3 המובילים מקבלים פרסים מיוחדים!</li>
          <li>בסוף השבוע - המובילים עולים לליגה גבוהה יותר</li>
        </ul>
      </div>

      <div className="teacher-controls card">
        <button className="btn btn-secondary" onClick={handleResetClick}>
          🔒 איפוס לידרבורד (מורה בלבד)
        </button>
      </div>

      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>🔒 איפוס לידרבורד</h2>
            <p>הכנס את קוד ה-PIN של המורה:</p>
            
            <input
              type="password"
              className="pin-input"
              placeholder="הכנס PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={6}
            />

            <div className="reset-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="resetType"
                  value="soft"
                  checked={resetType === 'soft'}
                  onChange={(e) => setResetType(e.target.value)}
                />
                <span>איפוס ציוני שבוע (שמור משתמשים)</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="resetType"
                  value="hard"
                  checked={resetType === 'hard'}
                  onChange={(e) => setResetType(e.target.value)}
                />
                <span>מחיקה מלאה (הסר את כולם)</span>
              </label>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="modal-actions">
              <button className="btn btn-primary" onClick={handleResetConfirm} disabled={loading}>
                {loading ? '⏳ מאפס...' : 'אפס'}
              </button>
              <button className="btn btn-secondary" onClick={() => setShowResetModal(false)}>
                ביטול
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Leaderboard
