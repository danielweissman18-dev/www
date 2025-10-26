import './TrueFalse.css'

function TrueFalse({ question, selectedAnswer, showResult, onAnswer }) {
  const options = [
    { value: true, label: 'נכון ✓', icon: '✓' },
    { value: false, label: 'לא נכון ✗', icon: '✗' }
  ]

  return (
    <div className="true-false">
      {options.map((option) => {
        const isSelected = selectedAnswer === option.value
        const isCorrect = option.value === question.correct
        
        let className = 'tf-btn'
        if (option.value) {
          className += ' true-btn'
        } else {
          className += ' false-btn'
        }
        
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
            key={option.value.toString()}
            className={className}
            onClick={() => !showResult && onAnswer(option.value)}
            disabled={showResult}
          >
            <span className="tf-icon">{option.icon}</span>
            <span className="tf-label">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default TrueFalse
