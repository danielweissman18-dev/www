// Utility function to shuffle array for randomizing answer order
export const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const lessonsData = [
  {
    id: 'lesson-1',
    title: 'חופש הביטוי',
    description: 'למד על הזכות להגיד מה שאתה חושב',
    icon: '💬',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה זה חופש הביטוי?',
        options: [
          'הזכות להגיד מה שאני רוצה',
          'הזכות לאכול מה שאני רוצה',
          'הזכות ללכת לאן שאני רוצה',
          'הזכות ללבוש מה שאני רוצה'
        ],
        correct: 0,
        explanation: 'חופש הביטוי הוא הזכות של כל אדם להביע את דעותיו ומחשבותיו בחופשיות.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'חופש הביטוי מאפשר לנו לדבר רק על דברים שכולם מסכימים איתם.',
        correct: false,
        explanation: 'חופש הביטוי מאפשר לנו להביע גם דעות שונות ולא פופולריות.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'איזה מהדברים הבאים מוגן על ידי חופש הביטוי?',
        options: [
          'לכתוב מאמר בעיתון',
          'להכות מישהו',
          'לגנוב',
          'לשבור חלון'
        ],
        correct: 0,
        explanation: 'חופש הביטוי מגן על הזכות לכתוב, לדבר ולהביע דעות - לא על פעולות אלימות.'
      },
      {
        id: 'q4',
        type: 'word-order',
        question: 'סדר את המילים ליצירת המשפט הנכון:',
        words: ['כל', 'אדם', 'זכאי', 'לחופש', 'ביטוי'],
        correct: 'כל אדם זכאי לחופש ביטוי',
        explanation: 'כל אדם זכאי לחופש ביטוי - זכות יסוד בדמוקרטיה.'
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'האם חופש הביטוי מאפשר לפגוע באחרים?',
        options: [
          'לא, חופש הביטוי לא כולל הסתה או פגיעה באחרים',
          'כן, אפשר להגיד כל מה שרוצים',
          'רק בשבת',
          'רק אם אף אחד לא שומע'
        ],
        correct: 0,
        explanation: 'חופש הביטוי מוגבל כאשר הוא פוגע באחרים או כולל הסתה לאלימות.'
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'שוויון לפני החוק',
    description: 'כולם שווים - ללא קשר למוצא, מין או דת',
    icon: '⚖️',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה משמעות "שוויון לפני החוק"?',
        options: [
          'כולם צריכים לקבל את אותו עונש על אותה עבירה',
          'רק עשירים מקבלים צדק',
          'החוק חל רק על ילדים',
          'אין חוקים בכלל'
        ],
        correct: 0,
        explanation: 'שוויון לפני החוק אומר שהחוק חל באופן שווה על כל האנשים, ללא הבדל.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'לנשים ולגברים יש אותן זכויות לפי החוק.',
        correct: true,
        explanation: 'בדמוקרטיה מודרנית, לנשים ולגברים יש שוויון זכויות מלא.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'איזו מהאפשרויות מפרה את עקרון השוויון?',
        options: [
          'לתת עבודה למישהו בגלל כישוריו',
          'לסרב לתת עבודה בגלל צבע העור',
          'לבחור את הטוב ביותר',
          'לראיין כמה מועמדים'
        ],
        correct: 1,
        explanation: 'אפליה על בסיס גזע, מין, דת או מוצא מפרה את עקרון השוויון.'
      },
      {
        id: 'q4',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'בני', 'האדם', 'נולדו', 'שווים'],
        correct: 'כל בני האדם נולדו שווים',
        explanation: 'זהו עיקרון הבסיס של זכויות האדם.'
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'מותר לאפלות אנשים על בסיס דתם.',
        correct: false,
        explanation: 'אסור לאפלות אנשים על בסיס דת, גזע, מין או כל מאפיין אחר.'
      }
    ]
  },
  {
    id: 'lesson-3',
    title: 'הזכות לפרטיות',
    description: 'המידע האישי שלך שייך לך',
    icon: '🔒',
    difficulty: 'בינוני',
    xp: 75,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה כוללת הזכות לפרטיות?',
        options: [
          'הזכות לשמור מידע אישי בסוד',
          'הזכות לאכול בבית',
          'הזכות ללכת לבד',
          'הזכות לישון'
        ],
        correct: 0,
        explanation: 'הזכות לפרטיות כוללת שמירה על מידע אישי, התכתבויות וחיי הפרט.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'המדינה יכולה לקרוא את המיילים שלי בלי סיבה.',
        correct: false,
        explanation: 'המדינה זקוקה לאישור שיפוטי (צו) כדי לפגוע בפרטיות אזרחיה.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'באיזה מקרה מותר לפגוע בפרטיות?',
        options: [
          'כשיש צו מבית משפט',
          'כשמישהו סקרן',
          'תמיד מותר',
          'אף פעם'
        ],
        correct: 0,
        explanation: 'ניתן לפגוע בפרטיות רק במקרים מיוחדים ועם אישור משפטי.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'אני חייב לשתף את הסיסמאות שלי עם המורה.',
        correct: false,
        explanation: 'סיסמאות הן חלק מהפרטיות שלך ואתה לא חייב לשתף אותן עם אף אחד.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'אדם', 'זכאי', 'לפרטיות'],
        correct: 'כל אדם זכאי לפרטיות',
        explanation: 'הזכות לפרטיות היא זכות יסוד של כל אדם.'
      }
    ]
  },
  {
    id: 'lesson-4',
    title: 'חופש התנועה',
    description: 'הזכות לנוע בחופשיות',
    icon: '🚶',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה זה חופש תנועה?',
        options: [
          'הזכות לנוע בחופשיות בתוך המדינה',
          'הזכות לרוץ מהר',
          'הזכות לרכב על אופניים',
          'הזכות לרקוד'
        ],
        correct: 0,
        explanation: 'חופש התנועה הוא הזכות לנוע בחופשיות ולבחור את מקום המגורים.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'אני יכול לעבור לגור בכל עיר שארצה בארץ.',
        correct: true,
        explanation: 'חופש התנועה כולל את הזכות לבחור את מקום המגורים.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מתי מותר להגביל חופש תנועה?',
        options: [
          'במצבי חירום מיוחדים',
          'תמיד',
          'אף פעם',
          'בשבת'
        ],
        correct: 0,
        explanation: 'רק במצבים מיוחדים כמו מצב חירום ניתן להגביל חופש תנועה.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'המשטרה יכולה לעצור אותי בלי סיבה ולא לתת לי לזוז.',
        correct: false,
        explanation: 'המשטרה צריכה סיבה חוקית טובה כדי להגביל את חופש התנועה שלך.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'אדם', 'רשאי', 'לנוע', 'בחופשיות'],
        correct: 'כל אדם רשאי לנוע בחופשיות',
        explanation: 'זכות בסיסית של כל אדם במדינה דמוקרטית.'
      }
    ]
  },
  {
    id: 'lesson-5',
    title: 'חופש הדת',
    description: 'כל אחד יכול להאמין במה שהוא רוצה',
    icon: '🕌',
    difficulty: 'בינוני',
    xp: 75,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה זה חופש הדת?',
        options: [
          'הזכות לבחור במה להאמין',
          'הזכות לאכול מה שרוצים',
          'הזכות ללבוש מה שרוצים',
          'הזכות לדבר בחופשיות'
        ],
        correct: 0,
        explanation: 'חופש הדת הוא הזכות של כל אדם לבחור את אמונתו או לא להאמין כלל.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'המדינה יכולה להכריח אותי להאמין בדת מסוימת.',
        correct: false,
        explanation: 'אף אחד לא יכול להכריח אותך להאמין או לא להאמין - זו בחירה אישית.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'איזו מהאפשרויות מפרה חופש דת?',
        options: [
          'לאפשר לכל אחד לתפלל',
          'לאסור על דת מסוימת',
          'לבנות בתי תפילה',
          'ללמד על דתות שונות'
        ],
        correct: 1,
        explanation: 'חופש הדת כולל את הזכות של כל דת להתקיים ולהתפלל בחופשיות.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'אני יכול לבחור שלא להאמין בכלל (אתאיזם).',
        correct: true,
        explanation: 'חופש הדת כולל גם את הזכות לא להאמין בשום דת.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['לכל', 'אדם', 'זכות', 'לחופש', 'דת'],
        correct: 'לכל אדם זכות לחופש דת',
        explanation: 'זכות יסוד המוכרת בכל מדינה דמוקרטית.'
      }
    ]
  },
  {
    id: 'lesson-6',
    title: 'הזכות לחינוך',
    description: 'כל ילד זכאי ללמוד ולהתפתח',
    icon: '📚',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה כוללת הזכות לחינוך?',
        options: [
          'הזכות ללמוד בבית ספר',
          'הזכות לשחק כל היום',
          'הזכות לא ללמוד',
          'הזכות לישון'
        ],
        correct: 0,
        explanation: 'הזכות לחינוך כוללת גישה לחינוך איכותי וחינם לכל ילד.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'החינוך היסודי צריך להיות חינם לכולם.',
        correct: true,
        explanation: 'זכויות האדם קובעות שהחינוך היסודי חייב להיות חינם וזמין לכולם.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'למה חינוך חשוב?',
        options: [
          'הוא עוזר לילדים להצליח בחיים',
          'זה רק כדי לעבור זמן',
          'כדי שההורים ינוחו',
          'זה לא חשוב'
        ],
        correct: 0,
        explanation: 'חינוך נותן לילדים כלים להצליח, לפתח חשיבה ולממש את הפוטנציאל שלהם.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'רק ילדים עשירים זכאים לחינוך.',
        correct: false,
        explanation: 'כל ילד זכאי לחינוך, ללא קשר למצב הכלכלי של המשפחה.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['חינוך', 'הוא', 'זכות', 'של', 'כולם'],
        correct: 'חינוך הוא זכות של כולם',
        explanation: 'חינוך איכותי הוא זכות בסיסית של כל ילד.'
      }
    ]
  },
  {
    id: 'lesson-7',
    title: 'זכויות ילדים',
    description: 'גם לילדים יש זכויות מיוחדות',
    icon: '👶',
    difficulty: 'בינוני',
    xp: 75,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'איזו זכות מיוחדת יש לילדים?',
        options: [
          'הזכות להגנה מפני התעללות',
          'הזכות לעבוד במפעל',
          'הזכות לנהוג ברכב',
          'הזכות להצביע בבחירות'
        ],
        correct: 0,
        explanation: 'ילדים זכאים להגנה מיוחדת מפני התעללות, הזנחה וניצול.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'מותר להעסיק ילדים בעבודות מסוכנות.',
        correct: false,
        explanation: 'ילדים מוגנים מפני עבודת ילדים ועבודות מסוכנות.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מה חשוב ביותר בזכויות ילדים?',
        options: [
          'טובת הילד תמיד במרכז',
          'מה שנוח להורים',
          'מה שזול יותר',
          'מה שמהיר יותר'
        ],
        correct: 0,
        explanation: 'בכל החלטה הנוגעת לילד, טובתו חייבת להיות השיקול המרכזי.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'לילדים יש זכות להשמיע את דעתם בנושאים שנוגעים אליהם.',
        correct: true,
        explanation: 'ילדים זכאים להביע את דעתם ולהישמע בהחלטות המשפיעות עליהם.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'ילד', 'זכאי', 'להגנה', 'ולאהבה'],
        correct: 'כל ילד זכאי להגנה ולאהבה',
        explanation: 'זכויות הילד מבטיחות הגנה, חינוך ואהבה לכל ילד.'
      }
    ]
  },
  {
    id: 'lesson-8',
    title: 'זכות הבחירה',
    description: 'הזכות לבחור את מנהיגינו',
    icon: '🗳️',
    difficulty: 'בינוני',
    xp: 75,
    category: 'advanced',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה זה זכות הבחירה?',
        options: [
          'הזכות להצביע בבחירות',
          'הזכות לבחור מה לאכול',
          'הזכות לבחור חברים',
          'הזכות לבחור בגדים'
        ],
        correct: 0,
        explanation: 'זכות הבחירה היא הזכות של כל אזרח להצביע ולבחור את נציגיו.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'בבחירות דמוקרטיות, כל קול שווה.',
        correct: true,
        explanation: 'בדמוקרטיה, הקול של כל אזרח שווה בערכו - עשיר או עני, צעיר או מבוגר.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'למה בחירות חשובות?',
        options: [
          'הן נותנות לאזרחים כוח להחליט',
          'כדי שיהיה יום חופש',
          'זה רק מסורת',
          'זה לא חשוב'
        ],
        correct: 0,
        explanation: 'בחירות מאפשרות לאזרחים לקבוע מי ינהיג אותם ואיזו מדיניות תנוהל.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'ההצבעה צריכה להיות חשאית.',
        correct: true,
        explanation: 'הצבעה חשאית מגנה על האזרחים מפני לחצים ומאיומים.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['בחירות', 'חופשיות', 'הן', 'בסיס', 'הדמוקרטיה'],
        correct: 'בחירות חופשיות הן בסיס הדמוקרטיה',
        explanation: 'בחירות חופשיות והוגנות הן אבן היסוד של כל דמוקרטיה.'
      }
    ]
  },
  {
    id: 'lesson-9',
    title: 'זכויות דיגיטליות',
    description: 'הזכויות שלך באינטרנט',
    icon: '💻',
    difficulty: 'מתקדם',
    xp: 100,
    category: 'advanced',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה כולל פרטיות באינטרנט?',
        options: [
          'המידע שלי לא יופץ בלי הסכמתי',
          'כולם יכולים לראות הכל',
          'אין פרטיות באינטרנט',
          'רק המשטרה רואה'
        ],
        correct: 0,
        explanation: 'גם באינטרנט יש לך זכות לפרטיות - חברות לא יכולות להשתמש במידע שלך בלי אישורך.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'אתר אינטרנט יכול למכור את המידע שלי בלי לספר לי.',
        correct: false,
        explanation: 'חוקי פרטיות מחייבים אתרים לקבל הסכמה לפני שימוש או מכירת מידע אישי.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מה זה "זכות לשכחה" באינטרנט?',
        options: [
          'הזכות למחוק מידע ישן עליי',
          'הזכות לשכוח סיסמאות',
          'הזכות להתנתק מהרשת',
          'אין דבר כזה'
        ],
        correct: 0,
        explanation: 'זכות לשכחה מאפשרת לאנשים לבקש מחיקת מידע מיושן או לא רלוונטי עליהם.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'יש לי חופש ביטוי גם ברשתות חברתיות.',
        correct: true,
        explanation: 'חופש הביטוי חל גם באינטרנט, אבל עדיין אסור להסית או לפגוע באחרים.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['זכויות', 'אדם', 'חלות', 'גם', 'באינטרנט'],
        correct: 'זכויות אדם חלות גם באינטרנט',
        explanation: 'כל הזכויות שיש לך בעולם האמיתי קיימות גם בעולם הדיגיטלי.'
      }
    ]
  },
  {
    id: 'lesson-10',
    title: 'זכויות בעבודה',
    description: 'מה מגיע לך כעובד',
    icon: '👔',
    difficulty: 'מתקדם',
    xp: 100,
    category: 'advanced',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה כוללות זכויות עובדים?',
        options: [
          'שכר הוגן ותנאי עבודה בטוחים',
          'לעבוד 24 שעות ביום',
          'לקבל שכר מינימום בלבד',
          'לעבוד בלי הפסקות'
        ],
        correct: 0,
        explanation: 'עובדים זכאים לשכר הוגן, תנאי עבודה בטוחים, הפסקות ומנוחה.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'מעסיק יכול לפטר עובד בגלל דעותיו הפוליטיות.',
        correct: false,
        explanation: 'אסור לאפלות עובדים בגלל דעות, דת, מין או גזע.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מהי הזכות להתאגדות?',
        options: [
          'הזכות להקים או להצטרף לאיגוד עובדים',
          'הזכות לעבוד לבד',
          'הזכות לא לעבוד',
          'הזכות לשנות עבודה'
        ],
        correct: 0,
        explanation: 'עובדים יכולים להתאגד כדי להגן על זכויותיהם ולשפר תנאי עבודה.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'עובדים זכאים למנוחה ולחופשה בתשלום.',
        correct: true,
        explanation: 'זכויות עובדים כוללות ימי מנוחה שבועיים וחופשה שנתית בתשלום.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['עבודה', 'הוגנת', 'היא', 'זכות', 'אנושית'],
        correct: 'עבודה הוגנת היא זכות אנושית',
        explanation: 'כל אדם זכאי לעבוד בתנאים הוגנים ובטוחים.'
      }
    ]
  },
  {
    id: 'lesson-11',
    title: 'הזכות לחיים וביטחון',
    description: 'הזכות הבסיסית ביותר של כל אדם',
    icon: '🛡️',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מהי הזכות הבסיסית ביותר של כל אדם?',
        options: [
          'הזכות לחיים',
          'הזכות לכסף',
          'הזכות לטלפון',
          'הזכות לחופשה'
        ],
        correct: 0,
        explanation: 'הזכות לחיים היא הזכות הבסיסית והראשונה - בלעדיה אין משמעות לזכויות אחרות.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'המדינה חייבת להגן על חיי אזרחיה.',
        correct: true,
        explanation: 'זו אחת החובות המרכזיות של המדינה - להבטיח את ביטחון וחיי אזרחיה.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מה כוללת הזכות לביטחון אישי?',
        options: [
          'הגנה מפני אלימות ופגיעה',
          'רק אבטחה בבנק',
          'רק משמר בלילה',
          'רק ביטוח בריאות'
        ],
        correct: 0,
        explanation: 'הזכות לביטחון כוללת הגנה מפני כל סוגי האלימות והפגיעה, פיזית ונפשית.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'אף אחד לא רשאי לקחת את חיי אדם אחר.',
        correct: true,
        explanation: 'הזכות לחיים מוגנת בחוק - אסור לפגוע בחיי אדם אחר.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['החיים', 'הם', 'הזכות', 'הבסיסית', 'ביותר'],
        correct: 'החיים הם הזכות הבסיסית ביותר',
        explanation: 'כל זכויות האדם נשענות על הזכות הבסיסית לחיים.'
      }
    ]
  },
  {
    id: 'lesson-12',
    title: 'זכויות תלמידים',
    description: 'הזכויות שלך בבית הספר',
    icon: '👩‍🏫',
    difficulty: 'בינוני',
    xp: 75,
    category: 'students',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'איזו זכות יש לך בבית הספר?',
        options: [
          'הזכות לסביבה לימודית בטוחה',
          'הזכות לא ללמוד',
          'הזכות להפריע לשיעור',
          'הזכות לפגוע באחרים'
        ],
        correct: 0,
        explanation: 'כל תלמיד זכאי ללמוד בסביבה בטוחה, נקייה מאלימות והטרדות.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'יש לך זכות להביע את דעתך בשיעור בצורה מכבדת.',
        correct: true,
        explanation: 'תלמידים זכאים להביע דעות ולהשתתף בדיונים, כמובן בכבוד ובתרבות.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מה כוללת הזכות לפרטיות בבית הספר?',
        options: [
          'המורה לא יכול לשתף ציונים שלי בפומבי',
          'כולם יכולים לראות את הציונים שלי',
          'המורה חייב לספר להורים של חברים',
          'אין פרטיות בבית ספר'
        ],
        correct: 0,
        explanation: 'המידע האישי שלך, כולל ציונים, הוא פרטי ולא ניתן לשתף אותו בפומבי.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'מותר למורה להפלות תלמיד בגלל דתו או מוצאו.',
        correct: false,
        explanation: 'אפליה אסורה בהחלט - כל תלמיד זכאי לשוויון הזדמנויות.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'תלמיד', 'זכאי', 'לביטחון', 'בבית', 'הספר'],
        correct: 'כל תלמיד זכאי לביטחון בבית הספר',
        explanation: 'ביטחון התלמידים הוא אחריות המערכת החינוכית.'
      }
    ]
  },
  {
    id: 'lesson-13',
    title: 'זכויות חולים',
    description: 'הזכויות שלך במערכת הבריאות',
    icon: '🏥',
    difficulty: 'מתקדם',
    xp: 100,
    category: 'health',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מהי "הסכמה מדעת"?',
        options: [
          'הזכות לקבל הסבר מלא לפני טיפול',
          'רק לחתום על טופס',
          'לעשות מה שהרופא אומר בלי שאלות',
          'להסכים לכל דבר'
        ],
        correct: 0,
        explanation: 'הסכמה מדעת פירושה שהרופא חייב להסביר לך את הטיפול, הסיכונים והחלופות.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'יש לך זכות לסרב לטיפול רפואי.',
        correct: true,
        explanation: 'חולה מודע יכול לסרב לטיפול, למעט מצבים מיוחדים שבהם חייו בסכנה.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מה כוללת הזכות לפרטיות רפואית?',
        options: [
          'המידע הרפואי שלי חסוי ולא יועבר בלי אישורי',
          'כולם יכולים לדעת על המחלות שלי',
          'הרופא יכול לספר לכולם',
          'אין סודיות רפואית'
        ],
        correct: 0,
        explanation: 'סודיות רפואית היא זכות מוגנת - רק אתה מחליט מי יקבל מידע רפואי עליך.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'כל אדם זכאי לטיפול רפואי שוויוני, ללא קשר למצבו הכלכלי.',
        correct: true,
        explanation: 'מערכת הבריאות חייבת לטפל בכולם באופן שווה, ללא אפליה.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['לכל', 'חולה', 'יש', 'זכות', 'לבחור', 'רופא'],
        correct: 'לכל חולה יש זכות לבחור רופא',
        explanation: 'חלק מזכויות החולה הוא הזכות לבחור את הרופא המטפל.'
      }
    ]
  },
  {
    id: 'lesson-14',
    title: 'חופש העיתונות',
    description: 'למה חשובה עיתונות חופשית',
    icon: '📰',
    difficulty: 'בינוני',
    xp: 75,
    category: 'media',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מהו חופש העיתונות?',
        options: [
          'הזכות לפרסם מידע ודעות בלי צנזורה',
          'רק לעיתונאים מותר לדבר',
          'אפשר לפרסם רק דברים טובים על הממשלה',
          'העיתונות חייבת לקבל אישור'
        ],
        correct: 0,
        explanation: 'חופש העיתונות מאפשר לתקשורת לפרסם מידע ולבקר את השלטון בלי פחד.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'עיתונות חופשית עוזרת לחשוף שחיתות.',
        correct: true,
        explanation: 'תפקיד חשוב של העיתונות הוא לפקח על השלטון ולחשוף עוולות.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'למה חופש העיתונות חשוב בדמוקרטיה?',
        options: [
          'כדי שהציבור יקבל מידע אמין ויוכל להחליט',
          'כדי שיהיו יותר עיתונים',
          'זה לא חשוב',
          'רק כדי לבדר'
        ],
        correct: 0,
        explanation: 'עיתונות חופשית מספקת לאזרחים מידע שהם צריכים כדי לקבל החלטות מושכלות.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'הממשלה יכולה לסגור עיתון שמבקר אותה.',
        correct: false,
        explanation: 'בדמוקרטיה, הממשלה לא יכולה לסגור תקשורת רק בגלל ביקורת.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['עיתונות', 'חופשית', 'היא', 'עמוד', 'התווך', 'של', 'הדמוקרטיה'],
        correct: 'עיתונות חופשית היא עמוד התווך של הדמוקרטיה',
        explanation: 'ללא עיתונות חופשית, קשה לשמור על דמוקרטיה בריאה.'
      }
    ]
  },
  {
    id: 'lesson-15',
    title: 'הזכות למשפט הוגן',
    description: 'צדק וחוק לכולם',
    icon: '⚖️',
    difficulty: 'מתקדם',
    xp: 100,
    category: 'legal',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה זה משפט הוגן?',
        options: [
          'שופט בלתי תלוי שומע את שני הצדדים',
          'שופט שתמיד מאמין למשטרה',
          'משפט מהיר בלי עורך דין',
          'אין זכות להגן על עצמך'
        ],
        correct: 0,
        explanation: 'משפט הוגן כולל שופט ניטרלי, זכות להגנה, וזכות להישמע.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'כל אדם זכאי לעורך דין, גם אם אין לו כסף.',
        correct: true,
        explanation: 'המדינה חייבת לספק עורך דין לאנשים שלא יכולים לשלם.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'מהו עקרון "חזקת החפות"?',
        options: [
          'כל אדם נחשב חף מפשע עד שמוכח אחרת',
          'כל חשוד אשם',
          'רק אנשים עשירים חפים מפשע',
          'המשטרה תמיד צודקת'
        ],
        correct: 0,
        explanation: 'חזקת החפות היא עיקרון יסוד - אתה חף מפשע עד שבית המשפט מוכיח שאתה אשם.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'יש לך זכות לשתוק בחקירה ולא להפליל את עצמך.',
        correct: true,
        explanation: 'הזכות לשתוק מגנה עליך מפני הפללה עצמית - אתה לא חייב לענות על שאלות.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['צדק', 'דורש', 'משפט', 'הוגן', 'ושוויוני'],
        correct: 'צדק דורש משפט הוגן ושוויוני',
        explanation: 'משפט הוגן הוא התשתית לחברה צודקת.'
      }
    ]
  },
  {
    id: 'lesson-16',
    title: 'הזכות לכבוד',
    description: 'כל אדם ראוי לכבוד',
    icon: '🤝',
    difficulty: 'קל',
    xp: 50,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מה משמעות הזכות לכבוד?',
        options: [
          'לא לפגוע בשמו הטוב או בכבודו של אדם',
          'רק אנשים חשובים זכאים לכבוד',
          'אפשר לפגוע באנשים שאנחנו לא אוהבים',
          'כבוד זה רק תואר'
        ],
        correct: 0,
        explanation: 'כל אדם זכאי שיתייחסו אליו בכבוד ולא יפגעו בשמו או באישיותו.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'לשון הרע היא פגיעה בזכות לכבוד.',
        correct: true,
        explanation: 'לשון הרע ודיבה פוגעות בכבוד האדם ובשמו הטוב ואסורות בחוק.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'איזה מהדברים הבאים פוגע בכבוד אדם?',
        options: [
          'להעליב אותו בפומבי',
          'לתת לו מחמאה',
          'להקשיב לו',
          'לכבד את דעתו'
        ],
        correct: 0,
        explanation: 'העלבה, השפלה ופגיעה בשם הטוב הן פגיעות בכבוד האדם.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'ברשתות חברתיות מותר לפגוע בכבוד אנשים.',
        correct: false,
        explanation: 'הזכות לכבוד חלה גם באינטרנט - אסור לפגוע באנשים ברשתות חברתיות.'
      },
      {
        id: 'q5',
        type: 'word-order',
        question: 'סדר את המילים:',
        words: ['כל', 'אדם', 'ראוי', 'לכבוד', 'ולהערכה'],
        correct: 'כל אדם ראוי לכבוד ולהערכה',
        explanation: 'כבוד האדם הוא ערך יסוד בחברה מתוקנת.'
      }
    ]
  }
]
