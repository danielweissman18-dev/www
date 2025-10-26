import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { soundManager } from '../utils/sounds'
import './TopBar.css'

function TopBar() {
  const { user } = useUser()
  const [soundEnabled, setSoundEnabled] = useState(true)

  const toggleSound = () => {
    const newState = soundManager.toggle()
    setSoundEnabled(newState)
  }

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="user-info">
          <div className="user-avatar">{user.avatar || '👤'}</div>
          <div className="username">👋 {user.username}</div>
        </div>
        
        <div className="top-bar-stats">
          <button className="sound-toggle" onClick={toggleSound} title={soundEnabled ? 'השתק צלילים' : 'הפעל צלילים'}>
            {soundEnabled ? '🔊' : '🔇'}
          </button>
          
          <div className="stat-item">
            <span className="stat-icon">❤️</span>
            <span className="stat-value">{user.hearts}/{user.maxHearts}</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{user.streak}</span>
          </div>
          
          <div className="stat-item coins">
            <span className="stat-icon">🪙</span>
            <span className="stat-value">{user.coins}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
