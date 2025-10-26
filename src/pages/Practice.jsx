import { useUser } from '../context/UserContext'
import { lessonsData } from '../data/lessons'
import { useNavigate } from 'react-router-dom'
import './Practice.css'

function Practice() {
  const { user } = useUser()
  const navigate = useNavigate()

  const completedLessons = lessonsData.filter(lesson => 
    user.completedLessons.includes(lesson.id)
  )

  const handlePractice = (lessonId) => {
    if (user.hearts === 0) {
      alert('אין לך לבבות! קנה לבבות או חכה לטעינה.')
      return
    }
    navigate(`/lesson/${lessonId}`)
  }

  return (
    <div className="container practice-page">
      <div className="page-header slide-up">
        <h1 className="page-title">💪 תרגול</h1>
        <p className="page-subtitle">חזור על שיעורים שהשלמת וחזק את הידע!</p>
      </div>

      {completedLessons.length === 0 ? (
        <div className="empty-state card">
          <div className="empty-icon">📚</div>
          <h2>עדיין לא השלמת שיעורים</h2>
          <p>התחל ללמוד שיעורים כדי שיופיעו כאן לתרגול</p>
          <button className="btn btn-primary" onClick={() => navigate('/learn')}>
            התחל ללמוד
          </button>
        </div>
      ) : (
        <>
          <div className="stats-overview card">
            <div className="stat">
              <div className="stat-value">{completedLessons.length}</div>
              <div className="stat-label">שיעורים הושלמו</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                {user.totalQuestions > 0 
                  ? Math.round((user.correctAnswers / user.totalQuestions) * 100) 
                  : 0}%
              </div>
              <div className="stat-label">דיוק כללי</div>
            </div>
            <div className="stat">
              <div className="stat-value">{user.totalQuestions}</div>
              <div className="stat-label">שאלות נענו</div>
            </div>
          </div>

          <div className="practice-lessons">
            <h2 className="section-title">בחר שיעור לתרגול</h2>
            <div className="lessons-grid">
              {completedLessons.map(lesson => (
                <div 
                  key={lesson.id} 
                  className="practice-card card"
                  onClick={() => handlePractice(lesson.id)}
                >
                  <div className="practice-icon">{lesson.icon}</div>
                  <h3 className="practice-title">{lesson.title}</h3>
                  <p className="practice-desc">{lesson.description}</p>
                  <div className="practice-meta">
                    <span className="practice-questions">
                      {lesson.questions.length} שאלות
                    </span>
                    <span className="practice-xp">+{lesson.xp} XP</span>
                  </div>
                  <button className="btn btn-primary btn-small">
                    תרגל עכשיו
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="practice-tips card">
            <h3>💡 למה חשוב לתרגל?</h3>
            <ul>
              <li><strong>חיזוק הזיכרון:</strong> חזרה עוזרת לשמור את המידע לזמן ארוך</li>
              <li><strong>מטבעות נוספים:</strong> כל תרגול מזכה אותך במטבעות</li>
              <li><strong>שיפור הדיוק:</strong> תרגול משפר את אחוז ההצלחה שלך</li>
              <li><strong>בניית ביטחון:</strong> ככל שתתרגל יותר, תרגיש יותר בטוח בידע שלך</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default Practice
