// Extended 10-minute animated stories for children
// Each story has 15-20 frames for deeper engagement

export const storiesData = [
  {
    id: 'story-1',
    title: 'חופש הביטוי - ההרפתקה של דנה',
    description: 'דנה לומדת איך להביע דעה בצורה נכונה',
    icon: '💬',
    category: 'expression',
    duration: '10 דקות',
    xp: 50,
    backgroundMusic: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
    frames: [
      // Part 1: Introduction (3 frames)
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'center', emotion: 'excited', color: '#D4A574' }
        ],
        dialogue: {
          speaker: 'narrator',
          text: '🌅 בוקר טוב! זו דנה, ילדה חכמה וסקרנית. היום היא תלמד משהו חשוב מאוד...'
        },
        action: 'enter'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'thinking', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'happy', color: '#9B8772' }
        ],
        dialogue: {
          speaker: 'dana',
          text: 'שלום אבי! שמעת על החוק החדש בבית הספר? 📋'
        },
        action: 'talk'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'curious', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'curious', color: '#9B8772' }
        ],
        dialogue: {
          speaker: 'avi',
          text: 'כן! החוק שאומר שאסור להשתמש בטלפון בהפסקה. מה אתה חושב?'
        },
        action: 'talk'
      },
      // Part 2: The Dilemma (4 frames)
      {
        id: 'f4',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'upset', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'neutral', color: '#9B8772' }
        ],
        dialogue: {
          speaker: 'dana',
          text: 'אני לא מסכימה! אני צריכה את הטלפון כדי להתקשר לאמא! 😠'
        },
        action: 'talk'
      },
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'thinking', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'thinking', color: '#9B8772' },
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'neutral', color: '#8B7355' }
        ],
        dialogue: {
          speaker: 'teacher',
          text: 'ילדים, אתם יכולים להביע את דעתכם על החוק. זה נקרא \"חופש ביטוי\"! 🗣️'
        },
        action: 'enter'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'hopeful', color: '#D4A574' },
          { id: 'teacher', name: 'המורה', position: 'right', emotion: 'happy', color: '#8B7355' }
        ],
        dialogue: {
          speaker: 'dana',
          text: 'באמת? אז אני יכולה לומר מה אני חושבת? 🤔'
        },
        action: 'talk'
      },
      {
        id: 'f7',
        background: '#F5F1ED',
        characters: [
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'teaching', color: '#8B7355' }
        ],
        dialogue: {
          speaker: 'teacher',
          text: 'כן! אבל יש דרך נכונה ודרך לא נכונה להביע דעה. בואי נלמד יחד! 📚'
        },
        action: 'talk'
      }
    ]
  }
]
