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
  const audioRef = useRef(null)

  const story = storiesData.find(s => s.id === storyId)

  // Background music control
  useEffect(() => {
    if (story?.backgroundMusic && audioRef.current) {
      audioRef.current.volume = 0.3 // Keep it subtle
      audioRef.current.loop = true
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked:', e))
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [story])

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
    if (currentFrame.question && !selectedAnswer) {
      soundManager.playWrong()
      alert('בחר תשובה כדי להמשיך')
      return
    }

    soundManager.playButton()

    if (isLastFrame) {
      // Complete story
      if (currentFrame.reward) {
        addCoins(currentFrame.reward.coins)
        completeLesson(storyId, 1, 1)
        soundManager.playComplete()
      }
      setTimeout(() => navigate('/stories'), 1500)
    } else {
      setCurrentFrameIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
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

  return (
    <div className="story-player">
      {/* Background Music */}
      {story?.backgroundMusic && (
        <audio ref={audioRef} src={story.backgroundMusic} preload="auto" />
      )}
      
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

        {/* Reward Display */}
        {currentFrame.reward && isLastFrame && (
          <div className="reward-display bounce-in">
            <div className="reward-icon">🎉</div>
            <div className="reward-text">קיבלת {currentFrame.reward.coins} מטבעות!</div>
            <div className="reward-xp">+{currentFrame.reward.xp} XP</div>
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
