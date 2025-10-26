import { useState } from 'react'
import { useUser } from '../context/UserContext'
import './Store.css'

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
  const { user, buyHearts, buyPowerUp } = useUser()
  const [message, setMessage] = useState('')

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
    </div>
  )
}

export default Store
