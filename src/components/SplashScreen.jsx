import { useState, useEffect } from 'react'
import './SplashScreen.css'

function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show splash for 3 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true)
      // Complete after fade out animation (1 second)
      setTimeout(onComplete, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo">
          <div className="logo-icon">⚖️</div>
          <h1 className="app-title">זכויות בשרשרת</h1>
          <div className="app-subtitle">למד זכויות אדם בכיף</div>
        </div>
        
        <div className="made-by">
          <p className="made-by-text">Made by</p>
          <p className="creators-names">Daniel & David</p>
        </div>

        <div className="loading-animation">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
