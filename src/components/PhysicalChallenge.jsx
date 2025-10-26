import { useState, useEffect } from 'react'
import './PhysicalChallenge.css'

const challenges = [
  {
    id: 'plank',
    name: 'פלאנק',
    icon: '🏋️',
    duration: 60,
    description: 'החזק פלאנק למשך דקה שלמה!'
  },
  {
    id: 'pushups',
    name: 'שכיבות סמיכה',
    icon: '💪',
    reps: 10,
    description: 'עשה 10 שכיבות סמיכה'
  },
  {
    id: 'squats',
    name: 'סקוואטים',
    icon: '🦵',
    reps: 15,
    description: 'עשה 15 סקוואטים'
  },
  {
    id: 'jumping-jacks',
    name: 'קפיצות ג\'מפינג ג\'קס',
    icon: '🤸',
    reps: 20,
    description: 'עשה 20 קפיצות ג\'מפינג ג\'קס'
  },
  {
    id: 'high-knees',
    name: 'ריצה במקום',
    icon: '🏃',
    duration: 30,
    description: 'רוץ במקום עם ברכיים גבוהות למשך 30 שניות'
  },
  {
    id: 'wall-sit',
    name: 'ישיבה בקיר',
    icon: '🧘',
    duration: 45,
    description: 'שב ליד הקיר למשך 45 שניות'
  }
]

function PhysicalChallenge({ onComplete, onSkip }) {
  const [challenge, setChallenge] = useState(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    // Pick a random challenge
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]
    setChallenge(randomChallenge)
    if (randomChallenge.duration) {
      setTimeLeft(randomChallenge.duration)
    }
  }, [])

  useEffect(() => {
    let interval = null
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false)
            setCompleted(true)
            return 0
          }
          return time - 1
        })
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      setCompleted(true)
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft])

  const startChallenge = () => {
    setIsActive(true)
  }

  const completeRepsChallenge = () => {
    setCompleted(true)
  }

  const handleComplete = () => {
    onComplete()
  }

  const handleSkip = () => {
    if (window.confirm('בטוח שאתה רוצה לדלג? יהיה עליך לקנות לבבות בחנות...')) {
      onSkip()
    }
  }

  if (!challenge) return null

  return (
    <div className="physical-challenge-overlay">
      <div className="physical-challenge-modal card">
        <div className="challenge-header">
          <h2>🏃 אתגר פיזי!</h2>
          <p className="challenge-subtitle">אין לך לבבות? בוא נתאמן קצת!</p>
        </div>

        <div className="challenge-icon-large">{challenge.icon}</div>
        
        <h3 className="challenge-name">{challenge.name}</h3>
        <p className="challenge-description">{challenge.description}</p>

        {challenge.duration && (
          <div className="timer-section">
            {!isActive && !completed && (
              <button className="btn btn-primary btn-large" onClick={startChallenge}>
                התחל טיימר ⏱️
              </button>
            )}
            
            {isActive && (
              <div className="timer-display">
                <div className="timer-circle">
                  <div className="timer-number">{timeLeft}</div>
                  <div className="timer-label">שניות</div>
                </div>
                <div className="encouragement pulse">
                  {timeLeft > 30 && 'אתה יכול! 💪'}
                  {timeLeft <= 30 && timeLeft > 10 && 'כמעט שם! 🔥'}
                  {timeLeft <= 10 && 'עוד קצת! 🚀'}
                </div>
              </div>
            )}
          </div>
        )}

        {challenge.reps && !completed && (
          <div className="reps-section">
            <div className="reps-display">{challenge.reps}</div>
            <button className="btn btn-primary btn-large" onClick={completeRepsChallenge}>
              סיימתי! ✓
            </button>
          </div>
        )}

        {completed && (
          <div className="challenge-complete slide-up">
            <div className="complete-icon bounce">🎉</div>
            <h3>כל הכבוד! השלמת את האתגר!</h3>
            <p>קיבלת לב חדש! ❤️</p>
            <button className="btn btn-accent btn-large" onClick={handleComplete}>
              המשך ללמוד 🚀
            </button>
          </div>
        )}

        {!completed && (
          <div className="challenge-actions">
            <button className="btn-text-only" onClick={handleSkip}>
              דלג (קנה לבבות בחנות)
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhysicalChallenge
