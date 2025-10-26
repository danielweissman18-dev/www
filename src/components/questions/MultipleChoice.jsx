import './MultipleChoice.css'

function MultipleChoice({ question, selectedAnswer, showResult, onAnswer }) {
  const options = question.shuffledOptions || question.options
  const correctIndex = question.shuffledCorrectIndex !== undefined ? question.shuffledCorrectIndex : question.correct
  
  return (
    <div className="multiple-choice">
      {options.map((option, index) => {
        const isSelected = selectedAnswer === index
        const isCorrect = index === correctIndex
        
        let className = 'option-btn'
        if (showResult) {
          if (isCorrect) {
            className += ' correct'
          } else if (isSelected && !isCorrect) {
            className += ' incorrect'
          } else {
            className += ' disabled'
          }
        } else if (isSelected) {
          className += ' selected'
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => !showResult && onAnswer(index)}
            disabled={showResult}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option}</span>
            {showResult && isCorrect && <span className="check-icon">✓</span>}
            {showResult && isSelected && !isCorrect && <span className="x-icon">✗</span>}
          </button>
        )
      })}
    </div>
  )
}

export default MultipleChoice
