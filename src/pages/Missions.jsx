import { useUser } from '../context/UserContext'
import './Missions.css'

function Missions() {
  const { user, claimMissionReward } = useUser()

  const handleClaimReward = (mission) => {
    if (mission.completed && !mission.claimed) {
      claimMissionReward(mission.id)
    }
  }

  const completedCount = user.missions.filter(m => m.completed).length
  const totalRewards = user.missions.reduce((sum, m) => sum + (m.completed && !m.claimed ? m.reward : 0), 0)

  return (
    <div className="container missions-page">
      <div className="page-header slide-up">
        <h1 className="page-title">🎯 משימות יומיות</h1>
        <p className="page-subtitle">השלם משימות וקבל פרסים מדהימים!</p>
      </div>

      <div className="missions-summary card">
        <div className="summary-item">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <div className="summary-value">{completedCount}/{user.missions.length}</div>
            <div className="summary-label">משימות הושלמו</div>
          </div>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-item">
          <div className="summary-icon">🪙</div>
          <div className="summary-content">
            <div className="summary-value">{totalRewards}</div>
            <div className="summary-label">מטבעות לאיסוף</div>
          </div>
        </div>
      </div>

      <div className="missions-list">
        <h2 className="section-title">המשימות שלך</h2>
        
        {user.missions.map((mission) => {
          const progressPercent = (mission.progress / mission.target) * 100

          return (
            <div 
              key={mission.id} 
              className={`mission-card card ${mission.completed ? 'completed' : ''} ${mission.claimed ? 'claimed' : ''}`}
            >
              <div className="mission-icon-large">
                {mission.completed ? '✅' : '🎯'}
              </div>
              
              <div className="mission-content">
                <h3 className="mission-title-large">{mission.title}</h3>
                
                <div className="mission-progress-section">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${Math.min(progressPercent, 100)}%` }}
                    ></div>
                  </div>
                  <span className="progress-label">
                    {mission.progress}/{mission.target}
                  </span>
                </div>

                <div className="mission-reward-section">
                  <div className="reward-amount">
                    <span className="reward-icon">🪙</span>
                    <span className="reward-value">{mission.reward}</span>
                  </div>
                  
                  {mission.completed && !mission.claimed ? (
                    <button 
                      className="btn btn-accent pulse"
                      onClick={() => handleClaimReward(mission)}
                    >
                      קבל פרס! 🎁
                    </button>
                  ) : mission.claimed ? (
                    <div className="claimed-badge">נאסף ✓</div>
                  ) : (
                    <div className="in-progress-badge">בתהליך...</div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="streak-challenge card">
        <div className="streak-header">
          <h3>🔥 אתגר הרצף</h3>
          <div className="streak-count">{user.streak} ימים</div>
        </div>
        
        <div className="streak-milestones">
          <div className={`milestone ${user.streak >= 7 ? 'achieved' : ''}`}>
            <div className="milestone-icon">🌟</div>
            <div className="milestone-label">7 ימים</div>
            <div className="milestone-reward">+50 🪙</div>
          </div>
          <div className={`milestone ${user.streak >= 30 ? 'achieved' : ''}`}>
            <div className="milestone-icon">⭐</div>
            <div className="milestone-label">30 ימים</div>
            <div className="milestone-reward">+200 🪙</div>
          </div>
          <div className={`milestone ${user.streak >= 100 ? 'achieved' : ''}`}>
            <div className="milestone-icon">💎</div>
            <div className="milestone-label">100 ימים</div>
            <div className="milestone-reward">+1000 🪙</div>
          </div>
        </div>
      </div>

      <div className="missions-tips card">
        <h3>💡 טיפים למשימות</h3>
        <ul>
          <li>המשימות מתחדשות כל יום בחצות</li>
          <li>השלם משימות כדי לצבור מטבעות מהר</li>
          <li>שמור על רצף יומי לפרסים מיוחדים</li>
          <li>ככל שתשלים יותר משימות, כך תקבל יותר פרסים</li>
        </ul>
      </div>
    </div>
  )
}

export default Missions
