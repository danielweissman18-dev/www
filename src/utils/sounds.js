// Sound effects using Web Audio API
class SoundManager {
  constructor() {
    this.audioContext = null
    this.enabled = true
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
  }

  playSound(frequency, duration, type = 'sine') {
    if (!this.enabled) return

    try {
      this.init()
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + duration
      )

      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + duration)
    } catch (error) {
      console.log('Sound not available:', error)
    }
  }

  // Correct answer sound
  playCorrect() {
    this.playSound(523.25, 0.2) // C5
    setTimeout(() => this.playSound(659.25, 0.2), 100) // E5
    setTimeout(() => this.playSound(783.99, 0.3), 200) // G5
  }

  // Wrong answer sound
  playWrong() {
    this.playSound(220, 0.15, 'square') // A3
    setTimeout(() => this.playSound(196, 0.3, 'square'), 100) // G3
  }

  // Click/tap sound
  playClick() {
    this.playSound(800, 0.05)
  }

  // Coin collect sound
  playCoin() {
    this.playSound(1000, 0.1)
    setTimeout(() => this.playSound(1200, 0.1), 50)
    setTimeout(() => this.playSound(1400, 0.15), 100)
  }

  // Level complete sound
  playComplete() {
    this.playSound(523.25, 0.15) // C5
    setTimeout(() => this.playSound(659.25, 0.15), 100) // E5
    setTimeout(() => this.playSound(783.99, 0.15), 200) // G5
    setTimeout(() => this.playSound(1046.50, 0.4), 300) // C6
  }

  // Heart lost sound
  playHeartLost() {
    this.playSound(400, 0.2, 'sawtooth')
    setTimeout(() => this.playSound(300, 0.3, 'sawtooth'), 150)
  }

  // Button press sound
  playButton() {
    this.playSound(600, 0.08)
  }

  toggle() {
    this.enabled = !this.enabled
    return this.enabled
  }
}

export const soundManager = new SoundManager()
