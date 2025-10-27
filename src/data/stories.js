// Interactive Stories for Children - Simple & Working
// Each story has 15-20 frames with 5-6 multiple choice interactions

export const storiesData = [
  {
    id: 'story-1',
    title: 'חופש הביטוי - דנה לומדת להביע דעה',
    description: 'דנה רוצה להתנגד לחוק חדש. איך עושים את זה נכון?',
    icon: '💬',
    category: 'expression',
    duration: '~10 דקות',
    xp: 100,
    frames: [
      // Introduction
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [{ id: 'narrator', name: 'המספר', position: 'center', emotion: 'happy', color: '#8B7355' }],
        dialogue: { speaker: 'narrator', text: '🌅 בוקר חדש בבית הספר! היום דנה תלמד משהו חשוב על חופש הביטוי...' },
        action: 'fade-in'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'excited', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'happy', color: '#9B8772' }
        ],
        dialogue: { speaker: 'dana', text: 'שלום אבי! איזה יום מדהים! מוכן לשיעור? 😊' },
        action: 'enter'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'curious', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'serious', color: '#9B8772' }
        ],
        dialogue: { speaker: 'avi', text: 'דנה, שמעת? המנהל הכריז על חוק חדש - אסור להשתמש בטלפון נייד בהפסקות! 📵' },
        action: 'talk'
      },
      
      // INTERACTION 1
      {
        id: 'f4',
        background: '#F5F1ED',
        question: {
          text: '🤔 איך לדעתך דנה מרגישה כשהיא שומעת על החוק?',
          options: [
            { id: 'opt1', text: 'כועסת ומאוכזבת 😠', correct: true, explanation: 'נכון! זה תגובה טבעית. עכשיו נלמד איך להגיב בצורה נכונה.' },
            { id: 'opt2', text: 'שמחה ומרוצה 😊', correct: false, explanation: 'כנראה שלא... דנה צריכה את הטלפון. בואו נמשיך.' }
          ]
        },
        action: 'question'
      },
      
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'upset', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'thinking', color: '#9B8772' }
        ],
        dialogue: { speaker: 'dana', text: 'זה לא הוגן! אני צריכה את הטלפון כדי להתקשר לאמא! 😤' },
        action: 'talk'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'thinking', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'hopeful', color: '#9B8772' },
          { id: 'teacher', name: 'המורה רונית', position: 'center', emotion: 'calm', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'ילדים, אני שומעת שאתם לא מרוצים. יש לכם זכות להביע דעה - זה נקרא חופש ביטוי! 🗣️' },
        action: 'enter'
      },
      
      // INTERACTION 2
      {
        id: 'f7',
        background: '#F5F1ED',
        question: {
          text: '💭 מה זה \"חופש ביטוי\"?',
          options: [
            { id: 'opt1', text: 'הזכות להגיד מה שבא לי, גם אם זה פוגע באחרים', correct: false, explanation: 'לא נכון! חופש ביטוי לא כולל עלבונות או פגיעה באחרים.' },
            { id: 'opt2', text: 'הזכות להביע דעה בצורה מכבדת', correct: true, explanation: '✅ מצוין! חופש ביטוי זו זכות חשובה, אבל צריך להשתמש בה בחכמה ובכבוד.' }
          ]
        },
        action: 'question'
      },
      
      {
        id: 'f8',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'curious', color: '#D4A574' },
          { id: 'teacher', name: 'המורה רונית', position: 'right', emotion: 'teaching', color: '#8B7355' }
        ],
        dialogue: { speaker: 'dana', text: 'אז איך אני יכולה להביע את דעתי על החוק בצורה נכונה?' },
        action: 'talk'
      },
      {
        id: 'f9',
        background: '#F5F1ED',
        characters: [
          { id: 'teacher', name: 'המורה רונית', position: 'center', emotion: 'happy', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'שאלה מצוינת! בואי נחשוב על כמה דרכים... 🤔' },
        action: 'talk'
      },
      
      // INTERACTION 3
      {
        id: 'f10',
        background: '#F5F1ED',
        question: {
          text: '🛤️ איזו דרך הכי נכונה להביע את הדעה?',
          options: [
            { id: 'opt1', text: 'לפרסם בפייסבוק: \"המנהל טיפש והחוק מטומטם!\"', correct: false, explanation: '❌ לא! זה לא מכבד ויכול להוביל לבעיות. חופש ביטוי לא אומר עלבון!' },
            { id: 'opt2', text: 'לכתוב מכתב מנומק למנהל עם הסבר למה זה קשה', correct: true, explanation: '✅ מעולה! זו הדרך הטובה ביותר - מכבדת, מנומקת ואפקטיבית!' }
          ]
        },
        action: 'question'
      },
      
      {
        id: 'f11',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'center', emotion: 'determined', color: '#D4A574' }
        ],
        dialogue: { speaker: 'narrator', text: '📝 דנה מתיישבת לכתוב מכתב מכבד למנהל בית הספר...' },
        action: 'talk'
      },
      
      // INTERACTION 4
      {
        id: 'f12',
        background: '#F5F1ED',
        question: {
          text: '✍️ באיזה משפט דנה צריכה להתחיל את המכתב?',
          options: [
            { id: 'opt1', text: '\"שלום רב, אני כותבת כדי להביע את דעתי על החוק החדש\"', correct: true, explanation: '✅ נכון! התחלה מכבדת ומקצועית.' },
            { id: 'opt2', text: '\"אני חייבת להגיד לך שהחוק הזה ממש לא הגיוני\"', correct: false, explanation: 'לא רע, אבל אפשר יותר מכבד. נסה שוב!' }
          ]
        },
        action: 'question'
      },
      
      {
        id: 'f13',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'confident', color: '#D4A574' },
          { id: 'principal', name: 'המנהל', position: 'right', emotion: 'impressed', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'principal', text: 'דנה, קראתי את המכתב שלך. אני מתרשם מאוד! 👏' },
        action: 'enter'
      },
      {
        id: 'f14',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'hopeful', color: '#D4A574' },
          { id: 'principal', name: 'המנהל', position: 'right', emotion: 'thinking', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'principal', text: 'הבעת את דעתך בצורה מכבדת ומנומקת. בואי נמצא פתרון ביחד! 🤝' },
        action: 'talk'
      },
      
      // INTERACTION 5
      {
        id: 'f15',
        background: '#F5F1ED',
        question: {
          text: '🤝 מה דנה למדה?',
          options: [
            { id: 'opt1', text: 'שאפשר להביע דעה רק אם המבוגרים מסכימים', correct: false, explanation: 'לא! יש לך זכות להביע דעה תמיד, אבל צריך לעשות זאת נכון.' },
            { id: 'opt2', text: 'שחופש ביטוי זו זכות, אבל צריך להשתמש בה בצורה מכבדת', correct: true, explanation: '🎯 בול! זה בדיוק מה שדנה למדה!' }
          ]
        },
        action: 'question'
      },
      
      {
        id: 'f16',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'left', emotion: 'happy', color: '#D4A574' },
          { id: 'avi', name: 'אבי', position: 'right', emotion: 'happy', color: '#9B8772' },
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'proud', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'כל הכבוד דנה! הצלחת להשתמש בחופש הביטוי בצורה חכמה! 🎓' },
        action: 'celebrate'
      },
      
      // INTERACTION 6 - Final check
      {
        id: 'f17',
        background: '#F5F1ED',
        question: {
          text: '🎓 שאלה אחרונה: האם חופש ביטוי אומר שאפשר לומר כל דבר?',
          options: [
            { id: 'opt1', text: 'כן, אפשר להגיד כל דבר שרוצים', correct: false, explanation: 'לא נכון! חופש ביטוי לא כולל עלבונות, שקרים או דברי שנאה.' },
            { id: 'opt2', text: 'לא, צריך להביע דעה בצורה מכבדת ואחראית', correct: true, explanation: '🌟 מושלם! הבנת את העיקרון!' }
          ]
        },
        action: 'question'
      },
      
      // Ending
      {
        id: 'f18',
        background: '#F5F1ED',
        characters: [
          { id: 'dana', name: 'דנה', position: 'center', emotion: 'happy', color: '#D4A574' }
        ],
        dialogue: {
          speaker: 'narrator',
          text: '🎉 סיפור נגמר! דנה למדה שחופש הביטוי הוא זכות חשובה, אבל צריך להשתמש בה בחכמה ובכבוד!'
        },
        reward: { coins: 10, xp: 100 },
        action: 'celebrate'
      }
    ]
  },
  
  {
    id: 'story-2',
    title: 'פרטיות - התמונה של נועה',
    description: 'תום פרסם תמונה של נועה בלי רשות. מה עושים?',
    icon: '📱',
    category: 'privacy',
    duration: '~10 דקות',
    xp: 100,
    frames: [
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [{ id: 'narrator', name: 'המספר', position: 'center', emotion: 'happy', color: '#8B7355' }],
        dialogue: { speaker: 'narrator', text: '📸 סיפור על פרטיות ותמונות באינטרנט...' },
        action: 'fade-in'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'happy', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'excited', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'tom', text: 'נועה, הטיול היה מדהים! תראי כמה תמונות יפות צילמתי! 📸' },
        action: 'enter'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'curious', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'happy', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'noa', text: 'וואו, באמת יפות! אתה מצלם טוב! 😊' },
        action: 'talk'
      },
      {
        id: 'f4',
        background: '#F5F1ED',
        question: {
          text: '🤔 מה תום צריך לעשות לפני שהוא מפרסם את התמונות ברשתות?',
          options: [
            { id: 'opt1', text: 'לפרסם ישר - הן תמונות יפות!', correct: false, explanation: '❌ לא! צריך לבדוק משהו חשוב קודם...' },
            { id: 'opt2', text: 'לשאול רשות מכל מי שמופיע בתמונות', correct: true, explanation: '✅ נכון! זו הזכות לפרטיות - כל אחד שולט על התמונות שלו.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'tom', name: 'תום', position: 'center', emotion: 'thinking', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'narrator', text: '💭 אבל תום שכח... הוא פרסם את התמונות בלי לשאול!' },
        action: 'talk'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'angry', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'confused', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'noa', text: 'תום! למה פרסמת תמונה שלי בלי לשאול אותי?! 😡' },
        action: 'talk'
      },
      {
        id: 'f7',
        background: '#F5F1ED',
        question: {
          text: '🤷 למה נועה כועסת?',
          options: [
            { id: 'opt1', text: 'כי התמונה לא יפה', correct: false, explanation: 'לא בגלל זה... יש סיבה חשובה יותר!' },
            { id: 'opt2', text: 'כי תום פגע בזכות שלה לפרטיות', correct: true, explanation: '✅ נכון! כל אחד שולט על התמונות שלו - זו הזכות לפרטיות.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f8',
        background: '#F5F1ED',
        characters: [
          { id: 'tom', name: 'תום', position: 'center', emotion: 'sad', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'tom', text: 'אני מצטער נועה... לא חשבתי שזה כל כך חשוב. 😔' },
        action: 'talk'
      },
      {
        id: 'f9',
        background: '#F5F1ED',
        question: {
          text: '🔧 מה תום צריך לעשות עכשיו?',
          options: [
            { id: 'opt1', text: 'להשאיר את התמונה - כבר פרסם', correct: false, explanation: '❌ לא! זה ימשיך לפגוע בנועה.' },
            { id: 'opt2', text: 'למחוק את התמונה ולהתנצל', correct: true, explanation: '✅ נכון! זו הדרך לתקן את הטעות.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f10',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'neutral', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'hopeful', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'tom', text: 'מחקתי את התמונה. אני באמת מצטער. מעכשיו תמיד אשאל רשות! 🙏' },
        action: 'talk'
      },
      {
        id: 'f11',
        background: '#F5F1ED',
        question: {
          text: '📱 איזה כלל חשוב למדנו?',
          options: [
            { id: 'opt1', text: 'לא לצלם בכלל', correct: false, explanation: 'לא! אפשר לצלם, אבל...' },
            { id: 'opt2', text: 'תמיד לשאול רשות לפני פרסום תמונות של אחרים', correct: true, explanation: '🎯 מצוין! זה הכלל הזהב של פרטיות!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f12',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'happy', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'happy', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'noa', text: 'תודה שהבנת תום. עכשיו אנחנו שוב חברים! 😊' },
        action: 'talk'
      },
      {
        id: 'f13',
        background: '#F5F1ED',
        question: {
          text: '🎓 מה זו \"הזכות לפרטיות\"?',
          options: [
            { id: 'opt1', text: 'הזכות להיות לבד', correct: false, explanation: 'זה חלק ממנה, אבל יש עוד...' },
            { id: 'opt2', text: 'הזכות לשלוט על המידע והתמונות שלי', correct: true, explanation: '✅ מושלם! זו הזכות לפרטיות - אתה שולט על המידע שלך.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f14',
        background: '#F5F1ED',
        characters: [
          { id: 'noa', name: 'נועה', position: 'left', emotion: 'happy', color: '#8B7355' },
          { id: 'tom', name: 'תום', position: 'right', emotion: 'happy', color: '#6B5A47' }
        ],
        dialogue: {
          speaker: 'narrator',
          text: '🎉 תום למד שתמיד צריך לשאול רשות לפני פרסום תמונות! זו הזכות לפרטיות!'
        },
        reward: { coins: 10, xp: 100 },
        action: 'celebrate'
      }
    ]
  },
  
  {
    id: 'story-3',
    title: 'שוויון - החידון של כל הכיתה',
    description: 'המורה לא נתנה לדני להשתתף בחידון. האם זה הוגן?',
    icon: '⚖️',
    category: 'equality',
    duration: '~10 דקות',
    xp: 100,
    frames: [
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [{ id: 'narrator', name: 'המספר', position: 'center', emotion: 'happy', color: '#8B7355' }],
        dialogue: { speaker: 'narrator', text: '🏆 היום יש חידון ידע בכיתה! כולם מתרגשים...' },
        action: 'fade-in'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'left', emotion: 'excited', color: '#D4A574' },
          { id: 'maya', name: 'מיה', position: 'right', emotion: 'happy', color: '#9B8772' }
        ],
        dialogue: { speaker: 'danny', text: 'מיה, אני כל כך מתרגש מהחידון! למדתי המון! 📚' },
        action: 'enter'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'left', emotion: 'happy', color: '#D4A574' },
          { id: 'maya', name: 'מיה', position: 'right', emotion: 'excited', color: '#9B8772' },
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'happy', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'ילדים, החידון מתחיל! כולם יכולים להשתתף... רגע, דני, את לא. 🤔' },
        action: 'talk'
      },
      {
        id: 'f4',
        background: '#F5F1ED',
        question: {
          text: '🤔 איך דני מרגיש כשהמורה לא נותנת לו להשתתף?',
          options: [
            { id: 'opt1', text: 'עצוב ופגוע 😢', correct: true, explanation: 'נכון! זה מרגיש מאוד לא הוגן ופוגע.' },
            { id: 'opt2', text: 'שמח שלא צריך להשתתף', correct: false, explanation: 'לא... דני רצה מאוד להשתתף!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'left', emotion: 'sad', color: '#D4A574' },
          { id: 'teacher', name: 'המורה', position: 'right', emotion: 'neutral', color: '#8B7355' }
        ],
        dialogue: { speaker: 'danny', text: 'למה אני לא יכול להשתתף? גם אני למדתי! 😞' },
        action: 'talk'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'thinking', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'כי... כי... למה בעצם? 🤨' },
        action: 'talk'
      },
      {
        id: 'f7',
        background: '#F5F1ED',
        question: {
          text: '⚖️ מהי "זכות השוויון"?',
          options: [
            { id: 'opt1', text: 'לכולם מותר לעשות את אותו הדבר', correct: false, explanation: 'לא בדיוק... זה יותר מורכב מזה.' },
            { id: 'opt2', text: 'לכולם מגיעות אותן ההזדמנויות, ללא אפליה', correct: true, explanation: '✅ נכון! שוויון = הזדמנויות שוות לכולם, ללא הבדלים מיותרים.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f8',
        background: '#F5F1ED',
        characters: [
          { id: 'maya', name: 'מיה', position: 'left', emotion: 'determined', color: '#9B8772' },
          { id: 'teacher', name: 'המורה', position: 'right', emotion: 'listening', color: '#8B7355' }
        ],
        dialogue: { speaker: 'maya', text: 'גברת, זה לא הוגן! דני צריך להשתתף כמו כולם! 💪' },
        action: 'talk'
      },
      {
        id: 'f9',
        background: '#F5F1ED',
        question: {
          text: '👥 מתי מותר לטפל באנשים באופן שונה?',
          options: [
            { id: 'opt1', text: 'אף פעם! תמיד צריך לטפל בכולם אותו הדבר', correct: false, explanation: 'לא נכון! לפעמים יש צורך בהתאמות מיוחדות.' },
            { id: 'opt2', text: 'רק כשיש סיבה הוגנת, כמו התאמות לצרכים מיוחדים', correct: true, explanation: '✅ נכון! שוויון לא אומר זהות - אומר הוגנות והזדמנויות שוות.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f10',
        background: '#F5F1ED',
        characters: [
          { id: 'teacher', name: 'המורה', position: 'center', emotion: 'thinking', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'את צודקת מיה... אני טעיתי. אין לי סיבה הוגנת להדיר את דני. 😔' },
        action: 'talk'
      },
      {
        id: 'f11',
        background: '#F5F1ED',
        question: {
          text: '🌟 מה המורה צריכה לעשות עכשיו?',
          options: [
            { id: 'opt1', text: 'להמשיך בחידון בלי דני - כבר התחילה', correct: false, explanation: '❌ לא! צריך לתקן טעויות, גם אם כבר התחלנו.' },
            { id: 'opt2', text: 'להתנצל ולאפשר לדני להשתתף', correct: true, explanation: '✅ נכון! תמיד אפשר לתקן טעות ולפעול בהוגנות.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f12',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'left', emotion: 'hopeful', color: '#D4A574' },
          { id: 'teacher', name: 'המורה', position: 'right', emotion: 'apologetic', color: '#8B7355' }
        ],
        dialogue: { speaker: 'teacher', text: 'דני, אני מתנצלת. כמובן שאתה משתתף! כולם שווים כאן! 🙏' },
        action: 'talk'
      },
      {
        id: 'f13',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'left', emotion: 'happy', color: '#D4A574' },
          { id: 'maya', name: 'מיה', position: 'center', emotion: 'happy', color: '#9B8772' },
          { id: 'teacher', name: 'המורה', position: 'right', emotion: 'happy', color: '#8B7355' }
        ],
        dialogue: { speaker: 'danny', text: 'תודה! אני מוכן! 😊' },
        action: 'talk'
      },
      {
        id: 'f14',
        background: '#F5F1ED',
        question: {
          text: '🎓 למה שוויון זו זכות חשובה?',
          options: [
            { id: 'opt1', text: 'כדי שכולם יהיו אותו הדבר', correct: false, explanation: 'לא! שוויון לא אומר שכולם זהים.' },
            { id: 'opt2', text: 'כדי שלכולם תהיה אותה ההזדמנות להצליח', correct: true, explanation: '🎯 מצוין! שוויון נותן לכולם סיכוי הוגן!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f15',
        background: '#F5F1ED',
        characters: [
          { id: 'danny', name: 'דני', position: 'center', emotion: 'happy', color: '#D4A574' }
        ],
        dialogue: {
          speaker: 'narrator',
          text: '🎉 דני למד על זכות השוויון - כולם מגיעות הזדמנויות שוות, ללא הפליה!'
        },
        reward: { coins: 10, xp: 100 },
        action: 'celebrate'
      }
    ]
  },
  
  {
    id: 'story-4',
    title: 'חינוך - הזכות של כולם ללמוד',
    description: 'המנהל לא נתן לשרה להירשם לבית הספר. האם זה חוקי?',
    icon: '📚',
    category: 'education',
    duration: '~10 דקות',
    xp: 100,
    frames: [
      {
        id: 'f1',
        background: '#F5F1ED',
        characters: [{ id: 'narrator', name: 'המספר', position: 'center', emotion: 'happy', color: '#8B7355' }],
        dialogue: { speaker: 'narrator', text: '🏫 שרה ומשפחתה עברו לעיר חדשה. הגיע הזמן להירשם לבית ספר...' },
        action: 'fade-in'
      },
      {
        id: 'f2',
        background: '#F5F1ED',
        characters: [
          { id: 'sara', name: 'שרה', position: 'left', emotion: 'excited', color: '#D4A574' },
          { id: 'mom', name: 'אמא', position: 'right', emotion: 'happy', color: '#9B8772' }
        ],
        dialogue: { speaker: 'sara', text: 'אמא, אני כל כך מתרגשת לבית הספר החדש! 🎒' },
        action: 'enter'
      },
      {
        id: 'f3',
        background: '#F5F1ED',
        characters: [
          { id: 'sara', name: 'שרה', position: 'left', emotion: 'hopeful', color: '#D4A574' },
          { id: 'principal', name: 'המנהל', position: 'right', emotion: 'stern', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'principal', text: 'מצטער, אבל לא נוכל לרשום אותך לבית הספר שלנו. 😐' },
        action: 'talk'
      },
      {
        id: 'f4',
        background: '#F5F1ED',
        question: {
          text: '🤔 איך שרה מרגישה?',
          options: [
            { id: 'opt1', text: 'עצובה ומבולבלת 😢', correct: true, explanation: 'כן, זה מאוד עצוב. בואו נבין למה זה לא בסדר.' },
            { id: 'opt2', text: 'שמחה שלא צריכה ללכת לבית הספר', correct: false, explanation: 'לא! שרה רוצה ללמוד!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f5',
        background: '#F5F1ED',
        characters: [
          { id: 'mom', name: 'אמא', position: 'left', emotion: 'angry', color: '#9B8772' },
          { id: 'principal', name: 'המנהל', position: 'right', emotion: 'defensive', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'mom', text: 'למה לא?! לכל ילד יש זכות לחינוך! 😡' },
        action: 'talk'
      },
      {
        id: 'f6',
        background: '#F5F1ED',
        characters: [
          { id: 'principal', name: 'המנהל', position: 'center', emotion: 'uncomfortable', color: '#6B5A47' }
        ],
        dialogue: { speaker: 'principal', text: 'אבל... אבל... בית הספר מלא... 😬' },
        action: 'talk'
      },
      {
        id: 'f7',
        background: '#F5F1ED',
        question: {
          text: '📚 מהי "הזכות לחינוך"?',
          options: [
            { id: 'opt1', text: 'רק ילדים עשירים יכולים ללמוד', correct: false, explanation: '❌ לא! זו לא הזכות לחינוך!' },
            { id: 'opt2', text: 'כל ילד זכאי לחינוך חינמי ואיכותי', correct: true, explanation: '✅ נכון! חינוך הוא זכות יסוד של כל ילד!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f8',
        background: '#F5F1ED',
        characters: [
          { id: 'mom', name: 'אמא', position: 'left', emotion: 'determined', color: '#9B8772' },
          { id: 'lawyer', name: 'עורכת דין', position: 'right', emotion: 'professional', color: '#8B7355' }
        ],
        dialogue: { speaker: 'lawyer', text: 'שלום, אני עורכת דין לזכויות אדם. בואו נבדוק את המצב. ⚖️' },
        action: 'enter'
      },
      {
        id: 'f9',
        background: '#F5F1ED',
        question: {
          text: '⚖️ האם המנהל מותר לסרב?',
          options: [
            { id: 'opt1', text: 'כן, זה בית הספר שלו והוא מחליט', correct: false, explanation: '❌ לא נכון! יש חוקים שמגינים על זכות החינוך.' },
            { id: 'opt2', text: 'לא, הוא חייב למצוא פתרון לכל ילד', correct: true, explanation: '✅ נכון! המדינה חייבת לספק חינוך לכל ילד.' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f10',
        background: '#F5F1ED',
        characters: [
          { id: 'lawyer', name: 'עורכת דין', position: 'center', emotion: 'explaining', color: '#8B7355' }
        ],
        dialogue: { speaker: 'lawyer', text: 'החוק ברור - כל ילד זכאי לחינוך. אם בית הספר מלא, צריך למצוא פתרון! 📋' },
        action: 'talk'
      },
      {
        id: 'f11',
        background: '#F5F1ED',
        question: {
          text: '💡 מה הפתרון הנכון?',
          options: [
            { id: 'opt1', text: 'לשלוח את שרה הביתה', correct: false, explanation: '❌ לא! זה לא פתרון. שרה זכאית לחינוך!' },
            { id: 'opt2', text: 'לפתוח כיתה נוספת או למצוא בית ספר אחר', correct: true, explanation: '✅ מצוין! המערכת חייבת למצוא פתרון!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f12',
        background: '#F5F1ED',
        characters: [
          { id: 'principal', name: 'המנהל', position: 'left', emotion: 'understanding', color: '#6B5A47' },
          { id: 'sara', name: 'שרה', position: 'right', emotion: 'hopeful', color: '#D4A574' }
        ],
        dialogue: { speaker: 'principal', text: 'הבנתי את הטעות שלי. נפתח כיתה נוספת! שרה, ברוכה הבאה! 🎓' },
        action: 'talk'
      },
      {
        id: 'f13',
        background: '#F5F1ED',
        characters: [
          { id: 'sara', name: 'שרה', position: 'left', emotion: 'happy', color: '#D4A574' },
          { id: 'mom', name: 'אמא', position: 'center', emotion: 'proud', color: '#9B8772' },
          { id: 'lawyer', name: 'עורכת דין', position: 'right', emotion: 'happy', color: '#8B7355' }
        ],
        dialogue: { speaker: 'sara', text: 'תודה! לא יכולתי לחכות להתחיל ללמוד! 📖' },
        action: 'talk'
      },
      {
        id: 'f14',
        background: '#F5F1ED',
        question: {
          text: '🎓 למה חינוך הוא זכות כל כך חשובה?',
          options: [
            { id: 'opt1', text: 'כי בלעדיו לא נוכל להשתכר', correct: false, explanation: 'יש בזה אמת, אבל הסיבה עמוקה יותר...' },
            { id: 'opt2', text: 'כי חינוך נותן לנו כלים להצליח ולממש את עצמנו', correct: true, explanation: '🌟 מושלם! חינוך פותח דלתות ומאפשר לנו לממש את הפוטנציאל!' }
          ]
        },
        action: 'question'
      },
      {
        id: 'f15',
        background: '#F5F1ED',
        characters: [
          { id: 'sara', name: 'שרה', position: 'center', emotion: 'happy', color: '#D4A574' }
        ],
        dialogue: {
          speaker: 'narrator',
          text: '🎉 שרה למדה שחינוך הוא זכות יסוד - כל ילד זכאי ללמוד ולהתפתח!'
        },
        reward: { coins: 10, xp: 100 },
        action: 'celebrate'
      }
    ]
  }
]
