import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { storiesData } from '../data/stories'
import { soundManager } from '../utils/sounds'
import './StoryPlayer.css'

function StoryPlayer() {
  const { storyId } = useParams()
  const navigate = useNavigate()
  const { user, addCoins, completeLesson } = useUser()
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [animationPhase, setAnimationPhase] = useState('enter')
  const [interactionComplete, setInteractionComplete] = useState(false)
  const [interactionData, setInteractionData] = useState(null)

  const story = storiesData.find(s => s.id === storyId)

  useEffect(() => {
    if (!story) {
      navigate('/stories')
      return
    }
    // Reset animation on frame change
    setAnimationPhase('enter')
    setTimeout(() => setAnimationPhase('visible'), 100)
  }, [currentFrameIndex, story, navigate])

  if (!story) return null

  const currentFrame = story.frames[currentFrameIndex]
  const isLastFrame = currentFrameIndex === story.frames.length - 1

  const handleNext = () => {
    const needsInteraction = currentFrame.interaction && !interactionComplete
    const needsQuestion = currentFrame.question && !selectedAnswer
    
    if (needsInteraction || needsQuestion) {
      soundManager.playWrong()
      alert('שלב את הפעילות כדי להמשיך!')
      return
    }

    soundManager.playButton()

    if (isLastFrame) {
      // Check if story already completed
      const alreadyCompleted = user.completedLessons?.includes(storyId)
      
      // Complete story
      if (currentFrame.reward) {
        if (!alreadyCompleted) {
          // First time - give rewards!
          addCoins(currentFrame.reward.coins)
          completeLesson(storyId, 1, 1)
          soundManager.playComplete()
        } else {
          // Already completed - just play sound
          soundManager.playComplete()
        }
      }
      setTimeout(() => navigate('/stories'), 1500)
    } else {
      setCurrentFrameIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setInteractionComplete(false)
      setInteractionData(null)
    }
  }

  const handleAnswerSelect = (option) => {
    if (showResult) return
    
    setSelectedAnswer(option)
    setShowResult(true)
    
    if (option.correct) {
      soundManager.playCorrect()
    } else {
      soundManager.playWrong()
    }
  }

  const handleInteraction = (data) => {
    setInteractionData(data)
    setInteractionComplete(true)
    soundManager.playCorrect()
  }

  return (
    <div className="story-player">
      <div className="story-header">
        <button className="btn btn-secondary btn-small" onClick={() => navigate('/stories')}>
          ← חזור
        </button>
        <h2 className="story-header-title">{story.title}</h2>
        <div className="frame-counter">{currentFrameIndex + 1}/{story.frames.length}</div>
      </div>

      <div 
        className={`story-stage ${animationPhase}`}
        style={{ background: currentFrame.background }}
      >
        {/* Characters */}
        {currentFrame.characters && (
          <div className="characters-container">
            {currentFrame.characters.map((char, index) => (
              <div 
                key={char.id}
                className={`character character-${char.position} ${currentFrame.action === 'enter' ? 'enter-animation' : ''} ${currentFrame.action === 'celebrate' ? 'celebrate-animation' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div 
                  className={`character-body emotion-${char.emotion}`}
                  style={{ background: char.color }}
                >
                  <div className="character-face">
                    {getEmotionEmoji(char.emotion)}
                  </div>
                </div>
                <div className="character-name">{char.name}</div>
              </div>
            ))}
          </div>
        )}

        {/* Dialogue Bubble */}
        {currentFrame.dialogue && !currentFrame.question && (
          <div className={`dialogue-bubble ${currentFrame.action === 'talk' ? 'bounce-in' : 'fade-in'}`}>
            <div className="dialogue-speaker">
              {currentFrame.dialogue.speaker === 'narrator' ? '📖 המספר' : currentFrame.dialogue.speaker}
            </div>
            <div className="dialogue-text">{currentFrame.dialogue.text}</div>
          </div>
        )}

        {/* Question Section */}
        {currentFrame.question && (
          <div className="question-section fade-in">
            <div className="question-text">{currentFrame.question.text}</div>
            <div className="question-options">
              {currentFrame.question.options.map((option) => (
                <button
                  key={option.id}
                  className={`question-option ${selectedAnswer?.id === option.id ? (option.correct ? 'correct' : 'wrong') : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {showResult && selectedAnswer && (
              <div className={`answer-feedback ${selectedAnswer.correct ? 'correct-feedback' : 'wrong-feedback'} slide-up`}>
                <div className="feedback-icon">
                  {selectedAnswer.correct ? '✅' : '❌'}
                </div>
                <div className="feedback-text">{selectedAnswer.explanation}</div>
              </div>
            )}
          </div>
        )}

        {/* Interactive Sections - Simplified to work properly */}
        {currentFrame.interaction && (
          <div className="interaction-section fade-in">
            <div className="interaction-placeholder">
              <div className="interaction-title">{currentFrame.interaction.text}</div>
              <div className="simple-completion">
                <button 
                  className="btn btn-primary btn-large"
                  onClick={() => handleInteraction('completed')}
                  disabled={interactionComplete}
                >
                  השלמתי! ✔️
                </button>
                {interactionComplete && (
                  <div className="interaction-feedback correct-feedback slide-up">
                    🎉 מעולה! המשך למסגרת ההמשך!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reward Display */}
        {currentFrame.reward && isLastFrame && (
          <div className="reward-display bounce-in">
            <div className="reward-icon">🎉</div>
            {!user.completedLessons?.includes(storyId) ? (
              <>
                <div className="reward-text">קיבלת {currentFrame.reward.coins} מטבעות!</div>
                <div className="reward-xp">+{currentFrame.reward.xp} XP</div>
              </>
            ) : (
              <>
                <div className="reward-text">כל הכבוד שסיימת שוב! 🎓</div>
                <div className="reward-subtitle">פרסים ניתנים רק בפעם הראשונה 😊</div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="story-controls">
        <button 
          className="btn btn-primary btn-large"
          onClick={handleNext}
          disabled={currentFrame.question && !selectedAnswer}
        >
          {isLastFrame ? 'סיום 🎬' : 'המשך →'}
        </button>
      </div>
    </div>
  )
}

function getEmotionEmoji(emotion) {
  const emotions = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    neutral: '😐',
    thinking: '🤔',
    confused: '😕',
    curious: '🧐',
    serious: '😤',
    hopeful: '🤗',
    confident: '😎'
  }
  return emotions[emotion] || '😊'
}

export default StoryPlayer
