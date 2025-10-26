import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { soundManager } from '../utils/sounds'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [username, setUsername] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [avatar, setAvatar] = useState('👤')

  const avatars = ['👤', '👨', '👩', '🧑', '👦', '👧', '🧒', '👨‍🎓', '👩‍🎓', '🧑‍🎓', '🦸‍♂️', '🦸‍♀️', '🧙‍♂️', '🧙‍♀️', '🧑‍💻']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim().length < 2) {
      soundManager.playWrong()
      alert('השם חייב להיות לפחות 2 תווים')
      return
    }

    soundManager.playComplete()
    
    // Update user with the username and avatar
    setUser(prev => ({
      ...prev,
      username: username.trim(),
      avatar: avatar,
      isLoggedIn: true
    }))

    // Navigate to home
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  const handleAvatarSelect = (selectedAvatar) => {
    soundManager.playClick()
    setAvatar(selectedAvatar)
  }

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="login-container">
        <div className="login-card card slide-up">
          <div className="login-header">
            <div className="app-logo bounce">📚⚖️</div>
            <h1 className="app-title">זכויות בשרשרת</h1>
            <p className="app-tagline">למד זכויות אדם בכיף ובמשחק</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">בחר אווטר</label>
              <div className="avatar-selector">
                {avatars.map((av, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`avatar-option ${avatar === av ? 'selected' : ''}`}
                    onClick={() => handleAvatarSelect(av)}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">שם משתמש</label>
              <input
                type="text"
                className="form-input"
                placeholder="הכנס את שמך..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={20}
                autoFocus
              />
            </div>

            <button type="submit" className="btn btn-primary btn-large pulse">
              התחל ללמוד! 🚀
            </button>
          </form>

          <div className="login-features">
            <div className="feature-item">
              <span className="feature-icon">🎮</span>
              <span className="feature-text">משחקי ולמידה</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <span className="feature-text">תחרויות וליגות</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💪</span>
              <span className="feature-text">אתגרים פיזיים</span>
            </div>
          </div>
        </div>

        <div className="login-footer">
          <p>ללא פרסומות • חינמי לחלוטין • לומדים בכיף</p>
        </div>
      </div>
    </div>
  )
}

export default Login
