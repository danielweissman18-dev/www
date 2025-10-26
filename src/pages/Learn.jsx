import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { lessonsData } from '../data/lessons'
import './Learn.css'

function Learn() {
  const navigate = useNavigate()
  const { user } = useUser()

  const handleLessonClick = (lesson) => {
    if (lesson.locked && !user.completedLessons.includes(getPreviousLessonId(lesson.id))) {
      alert('השלם את השיעור הקודם כדי לפתוח שיעור זה!')
      return
    }
    
    if (user.hearts === 0) {
      alert('אין לך לבבות! קנה לבבות או חכה לטעינה.')
      return
    }
    
    navigate(`/lesson/${lesson.id}`)
  }

  const getPreviousLessonId = (currentId) => {
    const currentIndex = lessonsData.findIndex(l => l.id === currentId)
    return currentIndex > 0 ? lessonsData[currentIndex - 1].id : null
  }

  const isLessonUnlocked = (lesson) => {
    if (!lesson.locked) return true
    const prevId = getPreviousLessonId(lesson.id)
    return prevId ? user.completedLessons.includes(prevId) : true
  }

  return (
    <div className="container learn-page">
      <div className="page-header slide-up">
        <h1 className="page-title">📚 שיעורים</h1>
        <p className="page-subtitle">בחר שיעור והתחל ללמוד!</p>
      </div>

      <div className="lessons-path">
        {lessonsData.map((lesson, index) => {
          const isCompleted = user.completedLessons.includes(lesson.id)
          const isUnlocked = isLessonUnlocked(lesson)
          const isCurrent = !isCompleted && isUnlocked

          return (
            <div key={lesson.id} className="lesson-node-wrapper">
              {index > 0 && <div className={`path-connector ${isCompleted ? 'completed' : ''}`}></div>}
              
              <div 
                className={`lesson-node card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''} ${isCurrent ? 'current pulse' : ''}`}
                onClick={() => handleLessonClick(lesson)}
              >
                <div className="lesson-icon">{isUnlocked ? lesson.icon : '🔒'}</div>
                <div className="lesson-details">
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <p className="lesson-description">{lesson.description}</p>
                  <div className="lesson-meta">
                    <span className="lesson-difficulty">{lesson.difficulty}</span>
                    <span className="lesson-xp">+{lesson.xp} XP</span>
                  </div>
                </div>
                {isCompleted && <div className="completion-badge">✅</div>}
                {!isUnlocked && <div className="lock-badge">🔒</div>}
              </div>
            </div>
          )
        })}
      </div>

      <div className="learning-tips card">
        <h3>💡 טיפים ללמידה יעילה</h3>
        <ul>
          <li>למד 5 דקות כל יום במקום שעה בשבוע</li>
          <li>חזור על שיעורים שטעית בהם</li>
          <li>נסה להשיג ציון מושלם בכל שיעור</li>
          <li>שמור על רצף יומי לפרסים מיוחדים</li>
        </ul>
      </div>
    </div>
  )
}

export default Learn
