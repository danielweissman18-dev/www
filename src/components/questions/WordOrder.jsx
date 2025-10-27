import { useState, useEffect } from 'react'
import './WordOrder.css'

// Shuffle array function
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function WordOrder({ question, selectedAnswer, showResult, onAnswer }) {
  const [orderedWords, setOrderedWords] = useState([])
  const [availableWords, setAvailableWords] = useState([])

  // Shuffle words on mount or when question changes
  useEffect(() => {
    setOrderedWords([])
    setAvailableWords(shuffleArray([...question.words]))
  }, [question])

  const handleWordClick = (word, fromAvailable = true) => {
    if (showResult) return

    if (fromAvailable) {
      setOrderedWords([...orderedWords, word])
      setAvailableWords(availableWords.filter(w => w !== word))
    } else {
      setAvailableWords([...availableWords, word])
      setOrderedWords(orderedWords.filter(w => w !== word))
    }
  }

  const handleSubmit = () => {
    if (orderedWords.length === question.words.length) {
      const answer = orderedWords.join(' ')
      onAnswer(answer)
    }
  }

  const handleReset = () => {
    setOrderedWords([])
    setAvailableWords(shuffleArray([...question.words]))
  }

  return (
    <div className="word-order">
      <div className="answer-area">
        {orderedWords.length === 0 ? (
          <div className="empty-message">גרור מילים לכאן או לחץ עליהן</div>
        ) : (
          <div className="ordered-words">
            {orderedWords.map((word, index) => (
              <button
                key={index}
                className="word-chip ordered"
                onClick={() => !showResult && handleWordClick(word, false)}
                disabled={showResult}
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="available-words">
        {availableWords.map((word, index) => (
          <button
            key={index}
            className="word-chip available"
            onClick={() => handleWordClick(word, true)}
            disabled={showResult}
          >
            {word}
          </button>
        ))}
      </div>

      {!showResult && (
        <div className="word-order-actions">
          <button 
            className="btn btn-secondary"
            onClick={handleReset}
            disabled={orderedWords.length === 0}
          >
            אפס 🔄
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={orderedWords.length !== question.words.length}
          >
            בדוק תשובה ✓
          </button>
        </div>
      )}

      {showResult && (
        <div className="correct-answer">
          <strong>התשובה הנכונה:</strong> {question.correct}
        </div>
      )}
    </div>
  )
}

export default WordOrder
