// Animated Stories Data - Educational scenarios for children
// 10-Minute Extended Animated Stories for Children
// Rich, engaging narratives with multiple characters and scenes

export const storiesData = [
  {
    id: 'story-1',
    title: 'חופש הביטוי - ההרפתקה של דנה ואבי',
    description: 'דנה ואבי לומדים איך להביע דעה נכונה',
    icon: '💬',
    category: 'expression',
    duration: '~10 דקות',
    xp: 50,
    backgroundMusic: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
    frames: [
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [{ id: 'narrator', name: 'המספר', position: 'center', emotion: 'happy', color: '#8B7355' }],
        dialogue: { speaker: 'narrator', text: '🌅 בוקר יפה בבית הספר! היום דנה ואבי ילמדו על חופש הביטוי...' },
        action: 'fade-in'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'excited', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'happy', color: '#9B8772' }
        ],
        dialogue: { speaker: 'dana', text: 'שלום אבי! איזה יום מדהים היום! 😊' },
        action: 'enter'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'neutral', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'curious', color: '#9B8772' }
        ],
        dialogue: { speaker: 'avi', text: 'שלום דנה! שמעת על החוק החדש? 🤔' },
        action: 'talk'
      },
      {
        id: 'f4',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'curious', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'thinking', color: '#9B8772' }
        ],
        dialogue: { speaker: 'dana', text: 'איזה חוק? ספר לי!' },
        action: 'talk'
      },
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'surprised', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'serious', color: '#9B8772' }
        ],
        dialogue: { speaker: 'avi', text: 'המנהל החליט שאסור להשתמש בטלפון נייד בהפסקות! 📵' },
        action: 'talk'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'upset', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'confused', color: '#9B8772' }
        ],
        dialogue: { speaker: 'dana', text: 'מה?! זה לא הוגן! אני צריכה את הטלפון! 😠' },
        action: 'talk'
      },
      {
        id: 'f7',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'thinking', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'hopeful', color: '#9B8772' }
        ],
        dialogue: { speaker: 'avi', text: 'אולי נוכל להביע את דעתנו בצורה מכבדת?' },
        action: 'talk'
      },
      {
        id: 'f8',
        background: '#F5F1ED',
        question: {
          text: 'איך דנה צריכה להביע את דעתה?',
          options: [
            { id: 'opt1', text: 'לכתוב פוסט: \"המנהל טיפש והחוק שלו מטומטם!\"', correct: false, explanation: '❌ זו דרך לא מכבדת! עלבון אינו חלק מחופש הביטוי.' },
            { id: 'opt2', text: 'לכתוב מכתב מנומק למנהל עם הסבר למה זה קשה', correct: true, explanation: '✅ נכון! זו דרך מכבדת ומנומקת להביע דעה!' }
          ]
        },
        action: 'question'
      }
    ]
  },
  {
    id: 'story-2',
    title: 'פרטיות - התמונה של נועה',
    description: 'מישהו צילם את נועה בלי רשות. מה עושים?',
    icon: '📱',
    category: 'privacy',
    xp: 20,
    frames: [
      {
        id: 'frame-1',
        background: '#F5F1ED',
        characters: [
          {
            id: 'noa',
            name: 'נועה',
            position: 'left',
            emotion: 'sad',
            color: '#8B7355'
          },
          {
            id: 'tom',
            name: 'תום',
            position: 'right',
            emotion: 'neutral',
            color: '#6B5A47'
          }
        ],
        dialogue: {
          speaker: 'noa',
          text: 'תום, למה פרסמת תמונה שלי בלי לשאול אותי?!'
        },
        action: 'enter'
      },
      {
        id: 'frame-2',
        background: '#F5F1ED',
        characters: [
          {
            id: 'noa',
            name: 'נועה',
            position: 'left',
            emotion: 'angry',
            color: '#8B7355'
          },
          {
            id: 'tom',
            name: 'תום',
            position: 'right',
            emotion: 'confused',
            color: '#6B5A47'
          }
        ],
        dialogue: {
          speaker: 'tom',
          text: 'אבל זו רק תמונה מהטיול... מה הבעיה?'
        },
        action: 'talk'
      },
      {
        id: 'frame-3',
        background: '#F5F1ED',
        characters: [
          {
            id: 'noa',
            name: 'נועה',
            position: 'left',
            emotion: 'serious',
            color: '#8B7355'
          },
          {
            id: 'tom',
            name: 'תום',
            position: 'right',
            emotion: 'thinking',
            color: '#6B5A47'
          }
        ],
        dialogue: {
          speaker: 'noa',
          text: 'זו התמונה שלי! יש לי זכות לפרטיות.'
        },
        action: 'talk'
      },
      {
        id: 'frame-4',
        background: '#F5F1ED',
        question: {
          text: 'מה תום צריך לעשות?',
          options: [
            {
              id: 'option-1',
              text: 'למחוק את התמונה ולהתנצל',
              correct: true,
              explanation: 'נכון! כל אחד שולט על התמונות שלו. צריך רשות לפני פרסום.'
            },
            {
              id: 'option-2',
              text: 'להשאיר את התמונה, זה לא נורא',
              correct: false,
              explanation: 'לא נכון. הזכות לפרטיות כוללת שליטה על תמונות שלנו.'
            }
          ]
        },
        action: 'question'
      },
      {
        id: 'frame-5',
        background: '#F5F1ED',
        characters: [
          {
            id: 'noa',
            name: 'נועה',
            position: 'left',
            emotion: 'happy',
            color: '#8B7355'
          },
          {
            id: 'tom',
            name: 'תום',
            position: 'right',
            emotion: 'happy',
            color: '#6B5A47'
          }
        ],
        dialogue: {
          speaker: 'narrator',
          text: 'תום למד ששואלים רשות לפני שמפרסמים תמונות של אחרים! 📱'
        },
        reward: {
          coins: 5,
          xp: 20
        },
        action: 'celebrate'
      }
    ]
  },
  {
    id: 'story-3',
    title: 'שוויון - הקבוצה של יוסי',
    description: 'יוסי רוצה להצטרף לקבוצה. האם יקבלו אותו?',
    icon: '⚽',
    category: 'equality',
    xp: 20,
    frames: [
      {
        id: 'frame-1',
        background: '#F5F1ED',
        characters: [
          {
            id: 'yossi',
            name: 'יוסי',
            position: 'left',
            emotion: 'hopeful',
            color: '#D4A574'
          },
          {
            id: 'maya',
            name: 'מאיה',
            position: 'right',
            emotion: 'neutral',
            color: '#9B8772'
          }
        ],
        dialogue: {
          speaker: 'yossi',
          text: 'מאיה, אני יכול להצטרף לקבוצת הכדורגל שלכם?'
        },
        action: 'enter'
      },
      {
        id: 'frame-2',
        background: '#F5F1ED',
        characters: [
          {
            id: 'yossi',
            name: 'יוסי',
            position: 'left',
            emotion: 'neutral',
            color: '#D4A574'
          },
          {
            id: 'maya',
            name: 'מאיה',
            position: 'right',
            emotion: 'thinking',
            color: '#9B8772'
          }
        ],
        dialogue: {
          speaker: 'maya',
          text: 'אבל אתה משתמש בכיסא גלגלים... איך תוכל לשחק?'
        },
        action: 'talk'
      },
      {
        id: 'frame-3',
        background: '#F5F1ED',
        characters: [
          {
            id: 'yossi',
            name: 'יוסי',
            position: 'left',
            emotion: 'confident',
            color: '#D4A574'
          },
          {
            id: 'maya',
            name: 'מאיה',
            position: 'right',
            emotion: 'curious',
            color: '#9B8772'
          }
        ],
        dialogue: {
          speaker: 'yossi',
          text: 'יש כדורגל בכיסאות גלגלים! או שנוכל להתאים את המשחק.'
        },
        action: 'talk'
      },
      {
        id: 'frame-4',
        background: '#F5F1ED',
        question: {
          text: 'איך מאיה צריכה להגיב?',
          options: [
            {
              id: 'option-1',
              text: 'לקבל את יוסי ולמצוא דרך שכולם יוכלו לשחק',
              correct: true,
              explanation: 'מצוין! שוויון פירושו לתת לכולם הזדמנות שווה.'
            },
            {
              id: 'option-2',
              text: 'לומר לו שהקבוצה מלאה',
              correct: false,
              explanation: 'לא נכון. זו אפליה על בסיס מוגבלות.'
            }
          ]
        },
        action: 'question'
      },
      {
        id: 'frame-5',
        background: '#F5F1ED',
        characters: [
          {
            id: 'yossi',
            name: 'יוסי',
            position: 'left',
            emotion: 'happy',
            color: '#D4A574'
          },
          {
            id: 'maya',
            name: 'מאיה',
            position: 'right',
            emotion: 'happy',
            color: '#9B8772'
          }
        ],
        dialogue: {
          speaker: 'narrator',
          text: 'מאיה למדה שלכולם מגיע הזדמנות שווה! ⚽'
        },
        reward: {
          coins: 5,
          xp: 20
        },
        action: 'celebrate'
      }
    ]
  }
]
