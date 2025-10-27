import { useState } from 'react'
import { useUser } from '../context/UserContext'
import './Store.css'

const ADMIN_CODE = 'דניאל המלך'

const storeItems = [
  {
    id: 'hearts-1',
    name: 'לב אחד',
    description: 'קבל לב אחד נוסף',
    icon: '❤️',
    price: 10,
    type: 'hearts',
    amount: 1
  },
  {
    id: 'hearts-5',
    name: '5 לבבות',
    description: 'טען מחדש את כל הלבבות',
    icon: '❤️❤️',
    price: 40,
    type: 'hearts',
    amount: 5,
    popular: true
  },
  {
    id: 'streak-freeze',
    name: 'הקפאת רצף',
    description: 'שומר על הרצף גם אם תדלג יום',
    icon: '🧊',
    price: 100,
    type: 'power-up'
  },
  {
    id: 'double-xp',
    name: 'XP כפול',
    description: 'קבל XP כפול למשך 24 שעות',
    icon: '⚡',
    price: 150,
    type: 'power-up'
  },
  {
    id: 'hint-pack',
    name: 'חבילת רמזים',
    description: '5 רמזים לשאלות קשות',
    icon: '💡',
    price: 75,
    type: 'power-up'
  },
  {
    id: 'avatar-1',
    name: 'אווטר מיוחד',
    description: 'שדרג את האווטר שלך',
    icon: '🎨',
    price: 200,
    type: 'cosmetic',
    disabled: true
  }
]

function Store() {
  const { user, buyHearts, buyPowerUp, setUser } = useUser()
  const [message, setMessage] = useState('')
  const [showCheatModal, setShowCheatModal] = useState(false)
  const [cheatCode, setCheatCode] = useState('')

  const handlePurchase = (item) => {
    if (item.disabled) {
      setMessage('פריט זה יהיה זמין בקרוב! 🔜')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    if (user.coins < item.price) {
      setMessage('אין לך מספיק מטבעות! 😞')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    if (item.type === 'hearts') {
      const success = buyHearts(item.amount)
      if (success) {
        setMessage(`נרכש בהצלחה! קיבלת ${item.amount} לבבות! ❤️`)
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('הלבבות שלך כבר מלאים! 💖')
        setTimeout(() => setMessage(''), 3000)
      }
    } else if (item.type === 'power-up') {
      const result = buyPowerUp(item.id, item.price)
      if (result.success) {
        let successMsg = ''
        switch(item.id) {
          case 'streak-freeze':
            successMsg = `נרכש בהצלחה! יש לך עכשיו ${user.powerUps.streakFreeze + 1} הקפאות רצף! 🧊`
            break
          case 'double-xp':
            successMsg = 'XP כפול פעיל ל-24 שעות! ⚡'
            break
          case 'hint-pack':
            successMsg = `נרכש בהצלחה! יש לך ${user.powerUps.hints + 5} רמזים! 💡`
            break
        }
        setMessage(successMsg)
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage(result.message)
        setTimeout(() => setMessage(''), 3000)
      }
    }
  }

  return (
    <div className="container store-page">
      <div className="page-header slide-up">
        <h1 className="page-title">🛒 חנות</h1>
        <p className="page-subtitle">השתמש במטבעות שלך לקניית פריטים מיוחדים</p>
      </div>

      <div className="coins-balance card">
        <div className="balance-icon">🪙</div>
        <div className="balance-content">
          <div className="balance-label">המטבעות שלך</div>
          <div className="balance-value">{user.coins}</div>
        </div>
      </div>

      {message && (
        <div className="store-message slide-up">
          {message}
        </div>
      )}

      <div className="store-categories">
        <div className="category-section">
          <h2 className="category-title">❤️ לבבות</h2>
          <div className="items-grid">
            {storeItems.filter(item => item.type === 'hearts').map(item => (
              <div key={item.id} className={`store-item card ${item.popular ? 'popular' : ''}`}>
                {item.popular && <div className="popular-badge">פופולרי!</div>}
                <div className="item-icon">{item.icon}</div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">
                  <span className="price-icon">🪙</span>
                  <span className="price-value">{item.price}</span>
                </div>
                <button 
                  className={`btn ${item.popular ? 'btn-accent' : 'btn-primary'} btn-large`}
                  onClick={() => handlePurchase(item)}
                  disabled={user.coins < item.price}
                >
                  קנה עכשיו
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="category-section">
          <h2 className="category-title">⚡ שדרוגים</h2>
          <div className="items-grid">
            {storeItems.filter(item => item.type === 'power-up').map(item => (
              <div key={item.id} className={`store-item card ${item.disabled ? 'disabled' : ''}`}>
                {item.disabled && <div className="coming-soon-badge">בקרוב</div>}
                <div className="item-icon">{item.icon}</div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">
                  <span className="price-icon">🪙</span>
                  <span className="price-value">{item.price}</span>
                </div>
                <button 
                  className="btn btn-secondary btn-large"
                  onClick={() => handlePurchase(item)}
                  disabled={user.coins < item.price}
                >
                  קנה עכשיו
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="category-section">
          <h2 className="category-title">🎨 עיצובים</h2>
          <div className="items-grid">
            {storeItems.filter(item => item.type === 'cosmetic').map(item => (
              <div key={item.id} className={`store-item card ${item.disabled ? 'disabled' : ''}`}>
                {item.disabled && <div className="coming-soon-badge">בקרוב</div>}
                <div className="item-icon">{item.icon}</div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">
                  <span className="price-icon">🪙</span>
                  <span className="price-value">{item.price}</span>
                </div>
                <button 
                  className="btn btn-secondary btn-large"
                  onClick={() => handlePurchase(item)}
                  disabled={item.disabled || user.coins < item.price}
                >
                  {item.disabled ? 'בקרוב' : 'קנה עכשיו'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="earn-coins-section card">
        <h3>💰 איך להרוויח מטבעות?</h3>
        <ul>
          <li><strong>השלם שיעורים:</strong> +5 מטבעות לכל שיעור (+5 נוספים על ציון מושלם)</li>
          <li><strong>השלם משימות יומיות:</strong> עד 45 מטבעות ליום</li>
          <li><strong>שמור על רצף:</strong> פרסים מיוחדים אחרי 7, 30, 100 ימים</li>
          <li><strong>תרגל שיעורים:</strong> +5 מטבעות לכל תרגול</li>
        </ul>
      </div>

      {/* Secret cheat button */}
      <button 
        className="secret-cheat-btn"
        onClick={() => setShowCheatModal(true)}
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          left: '20px', 
          width: '50px', 
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
          zIndex: 1000
        }}
      >
        👑
      </button>

      {/* Cheat code modal */}
      {showCheatModal && (
        <div className="modal-overlay" onClick={() => setShowCheatModal(false)}>
          <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>👑 קוד מנהל</h2>
            <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
              הכנס קוד לקבלת פרסים מיוחדים
            </p>
            <input
              type="text"
              className="form-input"
              placeholder="הכנס קוד..."
              value={cheatCode}
              onChange={(e) => setCheatCode(e.target.value)}
              style={{ marginBottom: '20px', textAlign: 'center', fontSize: '18px' }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setShowCheatModal(false)
                  setCheatCode('')
                }}
                style={{ flex: 1 }}
              >
                ביטול
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  if (cheatCode === ADMIN_CODE) {
                    // Activate admin mode!
                    setUser(prev => ({
                      ...prev,
                      coins: prev.coins + 200,
                      streak: 7,
                      hearts: prev.maxHearts,
                      weeklyScore: prev.weeklyScore + 1000,
                      completedLessons: [
                        'lesson-1', 'lesson-2', 'lesson-3', 'lesson-4',
                        'lesson-5', 'lesson-6', 'lesson-7', 'lesson-8',
                        'lesson-9', 'lesson-10', 'lesson-11', 'lesson-12',
                        'lesson-13', 'lesson-14', 'lesson-15', 'lesson-16'
                      ],
                      totalQuestions: prev.totalQuestions + 80,
                      correctAnswers: prev.correctAnswers + 80,
                      league: 'יהלום',
                      powerUps: {
                        streakFreeze: prev.powerUps.streakFreeze + 5,
                        doubleXP: { active: true, expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000) },
                        hints: prev.powerUps.hints + 20
                      }
                    }))
                    setMessage('🎉 קוד מנהל הופעל! קיבלת 200 מטבעות, כל השיעורים ופרסים מיוחדים! 👑')
                    setTimeout(() => setMessage(''), 5000)
                    setShowCheatModal(false)
                    setCheatCode('')
                  } else {
                    setMessage('❌ קוד שגוי! נסה שוב')
                    setTimeout(() => setMessage(''), 3000)
                    setCheatCode('')
                  }
                }}
                style={{ flex: 1 }}
              >
                אישור
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Store
