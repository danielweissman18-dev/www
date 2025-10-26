import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { lessonsData, shuffleArray } from '../data/lessons'
import { soundManager } from '../utils/sounds'
import MultipleChoice from '../components/questions/MultipleChoice'
import TrueFalse from '../components/questions/TrueFalse'
import WordOrder from '../components/questions/WordOrder'
import PhysicalChallenge from '../components/PhysicalChallenge'
import './Lesson.css'

function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { user, answerQuestion, completeLesson } = useUser()
  
  const lesson = lessonsData.find(l => l.id === lessonId)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showPhysicalChallenge, setShowPhysicalChallenge] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  // Shuffle questions and options on mount
  useEffect(() => {
    if (lesson) {
      const questionsWithShuffledOptions = lesson.questions.map(q => {
        if (q.type === 'multiple-choice') {
          // Create array of options with their original indices
          const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }))
          // Shuffle the options
          const shuffled = shuffleArray(optionsWithIndex)
          // Find the new index of the correct answer
          const newCorrectIndex = shuffled.findIndex(opt => opt.originalIndex === q.correct)
          return {
            ...q,
            shuffledOptions: shuffled.map(opt => opt.text),
            shuffledCorrectIndex: newCorrectIndex
          }
        }
        return q
      })
      setShuffledQuestions(questionsWithShuffledOptions)
    }
  }, [lesson])

  if (!lesson || shuffledQuestions.length === 0) {
    return (
      <div className="container">
        <div className="error-message">שיעור לא נמצא</div>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / lesson.questions.length) * 100

  const handleAnswer = (answer) => {
    if (showResult) return
    
    soundManager.playClick()
    setSelectedAnswer(answer)
    
    let correct = false
    if (currentQuestion.type === 'multiple-choice') {
      correct = answer === currentQuestion.shuffledCorrectIndex
    } else if (currentQuestion.type === 'true-false') {
      correct = answer === currentQuestion.correct
    } else if (currentQuestion.type === 'word-order') {
      correct = answer === currentQuestion.correct
    }
    
    setIsCorrect(correct)
    setShowResult(true)
    
    // Play sound effect
    setTimeout(() => {
      if (correct) {
        soundManager.playCorrect()
        setCorrectCount(prev => prev + 1)
      } else {
        soundManager.playWrong()
        soundManager.playHeartLost()
      }
    }, 100)
    
    answerQuestion(correct)
    
    // Check if hearts ran out
    if (!correct && user.hearts <= 1) {
      setTimeout(() => {
        setShowPhysicalChallenge(true)
      }, 1500)
    }
  }

  const handleNext = () => {
    soundManager.playButton()
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowExplanation(false)
    } else {
      // Lesson completed
      soundManager.playComplete()
      completeLesson(lessonId, correctCount + (isCorrect ? 1 : 0), lesson.questions.length)
      setTimeout(() => {
        navigate('/learn')
      }, 500)
    }
  }

  const handlePhysicalChallengeComplete = () => {
    soundManager.playCoin()
    setShowPhysicalChallenge(false)
    // Give back a heart
    setUser(prev => ({
      ...prev,
      hearts: Math.min(prev.maxHearts, prev.hearts + 1)
    }))
  }

  const handlePhysicalChallengeSkip = () => {
    setShowPhysicalChallenge(false)
    navigate('/store')
  }

  const handleQuit = () => {
    if (window.confirm('האם אתה בטוח שאתה רוצה לצאת? ההתקדמות לא תישמר.')) {
      navigate('/learn')
    }
  }

  return (
    <div className="lesson-container">
      {showPhysicalChallenge && (
        <PhysicalChallenge 
          onComplete={handlePhysicalChallengeComplete}
          onSkip={handlePhysicalChallengeSkip}
        />
      )}
      <div className="lesson-header">
        <button className="quit-btn" onClick={handleQuit}>✕</button>
        <div className="lesson-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-text">{currentQuestionIndex + 1}/{lesson.questions.length}</span>
        </div>
        <div className="hearts-display">
          {Array.from({ length: user.maxHearts }).map((_, i) => (
            <span key={i} className="heart">{i < user.hearts ? '❤️' : '🤍'}</span>
          ))}
        </div>
      </div>

      <div className="lesson-content container">
        <div className="question-card card slide-up">
          <div className="question-header">
            <h2 className="question-number">שאלה {currentQuestionIndex + 1}</h2>
            <span className="question-type-badge">
              {currentQuestion.type === 'multiple-choice' && '📝 בחירה'}
              {currentQuestion.type === 'true-false' && '✓✗ נכון/לא נכון'}
              {currentQuestion.type === 'word-order' && '🔤 סידור מילים'}
            </span>
          </div>
          
          <h3 className="question-text">{currentQuestion.question}</h3>

          {currentQuestion.type === 'multiple-choice' && (
            <MultipleChoice
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === 'true-false' && (
            <TrueFalse
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              onAnswer={handleAnswer}
            />
          )}

          {currentQuestion.type === 'word-order' && (
            <WordOrder
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              onAnswer={handleAnswer}
            />
          )}

          {showResult && (
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'} slide-up`}>
              <div className="result-icon">
                {isCorrect ? '🎉' : '😞'}
              </div>
              <div className="result-text">
                {isCorrect ? 'מעולה! תשובה נכונה!' : 'אופס! תשובה לא נכונה'}
              </div>
              {!isCorrect && (
                <div className="hearts-lost">איבדת לב! ❤️</div>
              )}
              
              <button 
                className="explanation-toggle"
                onClick={() => setShowExplanation(!showExplanation)}
              >
                {showExplanation ? '▲' : '▼'} הסבר
              </button>
              
              {showExplanation && (
                <div className="explanation slide-up">
                  💡 {currentQuestion.explanation}
                </div>
              )}

              <button 
                className="btn btn-primary btn-large"
                onClick={handleNext}
              >
                {currentQuestionIndex < lesson.questions.length - 1 ? 'המשך ➡️' : 'סיים שיעור 🎓'}
              </button>
            </div>
          )}
        </div>

        <div className="lesson-footer">
          <div className="lesson-info">
            <span className="lesson-icon">{lesson.icon}</span>
            <span className="lesson-title">{lesson.title}</span>
          </div>
          <div className="score-display">
            ניקוד: {correctCount}/{currentQuestionIndex + (showResult ? 1 : 0)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lesson
