import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { storiesData } from '../data/stories'
import './Stories.css'

function Stories() {
  const navigate = useNavigate()
  const { user } = useUser()

  const handleStoryClick = (story) => {
    navigate(`/story/${story.id}`)
  }

  return (
    <div className="container stories-page">
      <div className="page-header slide-up">
        <h1 className="page-title">🎬 סיפורים מונפשים</h1>
        <p className="page-subtitle">למד זכויות אדם דרך סיפורים מצוירים!</p>
      </div>

      <div className="stories-intro card">
        <h3>💡 איך זה עובד?</h3>
        <p>כל סיפור מציג דמויות בסיטואציה מהחיים. תלמד מה מותר ומה אסור!</p>
      </div>

      <div className="stories-grid">
        {storiesData.map((story) => {
          const isCompleted = user.completedLessons?.includes(story.id)
          
          return (
            <div 
              key={story.id}
              className={`story-card card ${isCompleted ? 'completed' : ''}`}
              onClick={() => handleStoryClick(story)}
            >
              <div className="story-card-header">
                <div className="story-icon">{story.icon}</div>
                {isCompleted && <div className="completion-badge">✅</div>}
              </div>
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
              <div className="story-meta">
                <span className="story-xp">+{story.xp} XP</span>
                <span className="story-category">{getCategoryName(story.category)}</span>
              </div>
              <button className="btn btn-primary btn-small">
                {isCompleted ? 'צפה שוב' : 'התחל סיפור'}
              </button>
            </div>
          )
        })}
      </div>

      <div className="attribution-footer">
        <p>הדמויות מעוצבות בהשראת אומנות ידידותית לילדים 🎨</p>
      </div>
    </div>
  )
}

function getCategoryName(category) {
  const categories = {
    expression: 'חופש ביטוי',
    privacy: 'פרטיות',
    equality: 'שוויון'
  }
  return categories[category] || category
}

export default Stories
