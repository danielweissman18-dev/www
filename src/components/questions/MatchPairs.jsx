import { useState } from 'react'
import { soundManager } from '../../utils/sounds'
import './MatchPairs.css'

function MatchPairs({ question, selectedAnswer, showResult, onAnswer }) {
  const [selectedLeft, setSelectedLeft] = useState(null)
  const [selectedRight, setSelectedRight] = useState(null)
  const [matches, setMatches] = useState([])
  const [completed, setCompleted] = useState(false)

  const handleLeftClick = (index) => {
    if (showResult || matches.some(m => m.left === index)) return
    soundManager.playClick()
    setSelectedLeft(index)
    
    if (selectedRight !== null) {
      checkMatch(index, selectedRight)
    }
  }

  const handleRightClick = (index) => {
    if (showResult || matches.some(m => m.right === index)) return
    soundManager.playClick()
    setSelectedRight(index)
    
    if (selectedLeft !== null) {
      checkMatch(selectedLeft, index)
    }
  }

  const checkMatch = (leftIdx, rightIdx) => {
    const isCorrect = question.pairs[leftIdx].match === rightIdx
    const newMatches = [...matches, { left: leftIdx, right: rightIdx, correct: isCorrect }]
    setMatches(newMatches)
    
    setSelectedLeft(null)
    setSelectedRight(null)

    if (newMatches.length === question.pairs.length) {
      const allCorrect = newMatches.every(m => m.correct)
      setTimeout(() => {
        setCompleted(true)
        onAnswer(allCorrect)
      }, 500)
    }
  }

  const isMatched = (side, index) => {
    return matches.some(m => side === 'left' ? m.left === index : m.right === index)
  }

  const getMatchStatus = (side, index) => {
    const match = matches.find(m => side === 'left' ? m.left === index : m.right === index)
    return match ? (match.correct ? 'correct' : 'incorrect') : ''
  }

  return (
    <div className="match-pairs">
      <p className="match-instruction">התאם כל משפט לזכות המתאימה</p>
      
      <div className="pairs-container">
        <div className="left-column">
          {question.pairs.map((pair, index) => (
            <button
              key={index}
              className={`pair-item ${selectedLeft === index ? 'selected' : ''} ${isMatched('left', index) ? 'matched' : ''} ${getMatchStatus('left', index)}`}
              onClick={() => handleLeftClick(index)}
              disabled={showResult || isMatched('left', index)}
            >
              {pair.left}
              {isMatched('left', index) && getMatchStatus('left', index) === 'correct' && <span className="match-icon">✓</span>}
              {isMatched('left', index) && getMatchStatus('left', index) === 'incorrect' && <span className="match-icon">✗</span>}
            </button>
          ))}
        </div>

        <div className="connector-lines">
          {matches.map((match, index) => (
            <div 
              key={index} 
              className={`connection-line ${match.correct ? 'correct' : 'incorrect'}`}
            />
          ))}
        </div>

        <div className="right-column">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`pair-item ${selectedRight === index ? 'selected' : ''} ${isMatched('right', index) ? 'matched' : ''} ${getMatchStatus('right', index)}`}
              onClick={() => handleRightClick(index)}
              disabled={showResult || isMatched('right', index)}
            >
              {option}
              {isMatched('right', index) && getMatchStatus('right', index) === 'correct' && <span className="match-icon">✓</span>}
              {isMatched('right', index) && getMatchStatus('right', index) === 'incorrect' && <span className="match-icon">✗</span>}
            </button>
          ))}
        </div>
      </div>

      {completed && (
        <div className="match-feedback">
          {matches.every(m => m.correct) ? (
            <div className="feedback-message success">🎉 מעולה! כל ההתאמות נכונות!</div>
          ) : (
            <div className="feedback-message error">😞 יש כמה טעויות, נסה שוב בפעם הבאה</div>
          )}
        </div>
      )}
    </div>
  )
}

export default MatchPairs
