import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { soundManager } from '../utils/sounds'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const { user, claimMissionReward } = useUser()

  const handleStartLearning = () => {
    soundManager.playButton()
    if (user.hearts > 0) {
      navigate('/learn')
    } else {
      soundManager.playWrong()
      alert('אין לך לבבות! קנה לבבות מהחנות או חכה לטעינה מחדש.')
    }
  }

  const handleClaimReward = (mission) => {
    if (mission.completed && !mission.claimed) {
      soundManager.playCoin()
      claimMissionReward(mission.id)
    }
  }

  return (
    <div className="container home-page">
      <div className="welcome-section slide-up">
        <h1 className="page-title">ברוך הבא לזכויות בשרשרת! 🎉</h1>
        <p className="page-subtitle">למד זכויות אדם בכיף ובמשחק</p>
      </div>

      <div className="daily-missions card slide-up">
        <h2 className="section-title">המשימות שלי להיום 🎯</h2>
        <div className="missions-list">
          {user.missions.map(mission => (
            <div key={mission.id} className={`mission-item ${mission.completed ? 'completed' : ''}`}>
              <div className="mission-content">
                <div className="mission-header">
                  <span className="mission-icon">{mission.completed ? '✅' : '⭕'}</span>
                  <span className="mission-title">{mission.title}</span>
                </div>
                <div className="mission-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(mission.progress / mission.target) * 100}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{mission.progress}/{mission.target}</span>
                </div>
              </div>
              <div className="mission-reward">
                {mission.completed && !mission.claimed ? (
                  <button 
                    className="btn btn-accent btn-small pulse"
                    onClick={() => handleClaimReward(mission)}
                  >
                    קבל {mission.reward} 🪙
                  </button>
                ) : (
                  <span className="reward-text">+{mission.reward} 🪙</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="btn btn-primary btn-large start-learning-btn bounce"
        onClick={handleStartLearning}
        disabled={user.hearts === 0}
      >
        <span style={{ fontSize: '24px' }}>🚀</span>
        התחל ללמוד
      </button>

      <div className="stats-grid">
        <div className="stat-card card">
          <div className="stat-icon-large">📖</div>
          <div className="stat-number">{user.completedLessons.length}</div>
          <div className="stat-label">שיעורים הושלמו</div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-large">✨</div>
          <div className="stat-number">
            {user.totalQuestions > 0 
              ? Math.round((user.correctAnswers / user.totalQuestions) * 100) 
              : 0}%
          </div>
          <div className="stat-label">דיוק</div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-large">🔥</div>
          <div className="stat-number">{user.streak}</div>
          <div className="stat-label">ימים ברצף</div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon-large">🏅</div>
          <div className="stat-number">{user.league}</div>
          <div className="stat-label">ליגה</div>
        </div>
      </div>

      <div className="info-section card">
        <h3>💡 טיפ היום</h3>
        <p>למידה עקבית של 5 דקות ביום עדיפה על שעה אחת בשבוע. התמדה היא המפתח להצלחה!</p>
      </div>
    </div>
  )
}

export default Home
