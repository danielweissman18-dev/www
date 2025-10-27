// Utility function to shuffle array for randomizing answer order
export const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Complex scenario-based lessons
export const complexLessonsData = [
  {
    id: 'lesson-1',
    title: 'חופש הביטוי - סיטואציות מורכבות',
    description: 'מקרים מהחיים על גבולות חופש הביטוי',
    icon: '💬',
    difficulty: 'מאתגר',
    xp: 100,
    category: 'basic',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'תלמיד פרסם בפייסבוק ביקורת חריפה על מדיניות בית הספר. המנהל דורש שהפוסט יוסר ומאיים בהשעיה. מה הנכון?',
        options: [
          'חופש הביטוי מגן על ביקורת, אך בית הספר יכול להגביל אם יש הפרעה משמעותית',
          'בית הספר תמיד יכול לצנזר כל דבר',
          'תלמידים לא זכאים לחופש ביטוי בכלל',
          'אפשר לומר כל דבר ללא מגבלות'
        ],
        correct: 0,
        explanation: 'חופש הביטוי חל גם על תלמידים, אך בתי ספר יכולים להגביל ביטוי שמפריע באופן ממשי לתהליך החינוכי או לבטיחות. ביקורת לגיטימית מוגנת.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'עיתונאי חושף שחיתות של ראש עיר. ראש העיר מאיים לתבוע אותו בגין לשון הרע. העיתונאי חייב להסיר את הכתבה מיד.',
        correct: false,
        explanation: 'עיתונות חופשית מוגנת במיוחד בדמוקרטיה. חשיפת מידע ציבורי חשוב מוגנת, ותביעות נגד עיתונאים דורשות הוכחת זדון או רשלנות חמורה.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'קבוצת מפגינים חוסמת כביש ראשי למשך 3 שעות בשיא התנועה. המשטרה מפזרת אותם. האם זה לגיטימי?',
        options: [
          'כן - חופש ההפגנה לא כולל זכות לפגוע בזכויות אחרים באופן לא פרופורציונלי',
          'לא - אסור בכלל לפזר הפגנות',
          'תלוי אם המפגינים תומכים בממשלה',
          'תלוי בזהות המפגינים'
        ],
        correct: 0,
        explanation: 'חופש ההפגנה חשוב, אך מאוזן מול צרכים ציבוריים. חסימה ממושכת של כביש ראשי עשויה להצדיק פיזור, במיוחד אם מונעת גישה לשירותים חיוניים. יש לשקול פרופורציה.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'אדם מפיץ שמועות שקריות על חולה קורונה בשכונה, וגורם לפאניקה. חופש הביטוי מגן עליו במלואו.',
        correct: false,
        explanation: 'הפצת מידע כוזב המסכן בריאות הציבור או גורם לפאניקה אינה מוגנת במסגרת חופש הביטוי. יש גבולות כאשר הדיבור יוצר סכנה ממשית.'
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'שכן מתלונן שעובד ציבורי לוקח שוחד. הוא מפרסם זאת ברשת חברתית. מתברר שהטענה שגויה. מה הסטטוס המשפטי?',
        options: [
          'ייתכן שזו הוצאת דיבה - יש להוכיח שהאמין בתום לב או לחלופין שהנזק מוצדק לאור חשיבות הנושא',
          'חופש הביטוי מגן על כל דעה',
          'אסור לפרסם דבר על אף אחד',
          'רק עיתונאים רשאים לפרסם ביקורת'
        ],
        correct: 0,
        explanation: 'הפצת מידע שקרי הפוגע במוניטין עשויה להיות לשון הרע. הגנות: אמת, תום לב סביר, או עניין ציבורי לגיטימי. ביקורת על עובדי ציבור נהנית מהגנה רחבה יותר, אך לא מוחלטת.'
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'שוויון וא-אפליה - דילמות יומיומיות',
    description: 'מקרי גבול באפליה ושוויון',
    icon: '⚖️',
    difficulty: 'מאתגר',
    xp: 100,
    category: 'basic',
    locked: true,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'מעסיק לא מגייס נשים לתפקיד נהג משאית כי "זה עבודה קשה". האם זו אפליה?',
        options: [
          'כן - אפליה על בסיס מגדר אסורה; יש לבחון כל מועמד לפי יכולותיו',
          'לא - נשים לא מתאימות לעבודה קשה',
          'תלוי מה הנשים רוצות',
          'מותר אם יש סיבה כלשהי'
        ],
        correct: 0,
        explanation: 'סירוב לגייס על בסיס מגדר הוא אפליה בלתי חוקית. יש להעריך כל אדם לפי כישוריו וכושרו הפרטני, לא לפי סטריאוטיפים על קבוצה.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'שני עובדים עושים אותה עבודה באותה רמה. אחד מרוויח 20% יותר מהשני בגלל ותק. זו אפליה בלתי חוקית.',
        correct: false,
        explanation: 'הבדלי שכר מוצדקים בגורמים לגיטימיים כמו ותק, ניסיון או ביצועים. אפליה היא כאשר ההבדל נובע ממגדר, גזע, דת וכו\' ללא הצדקה עניינית.'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'בית קולנוע מציע הנחה לקשישים ולחיילים, אך לא לאחרים. האם זה מפר שוויון?',
        options: [
          'לא בהכרח - אפליה מתקנת או מחירים דיפרנציאליים לקבוצות מוגדרות לגיטימית בדרך כלל',
          'כן - כולם חייבים לשלם אותו מחיר',
          'תלוי אם זה ביום שישי',
          'תלוי מה מוקרן'
        ],
        correct: 0,
        explanation: 'הנחות לקבוצות מסוימות (קשישים, חיילים, סטודנטים) הן נפוצות וחוקיות. אלו אינן אפליה אסורה כל עוד אין בהן כוונת פגיעה או השפלה ויש להן הצדקה סבירה.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'מסעדה מסרבת לשרת לקוחות בגלל דתם. בעל המסעדה טוען שזו עסק פרטי והוא רשאי לבחור. הטענה נכונה.',
        correct: false,
        explanation: 'עסק הפתוח לקהל הרחב חייב לשרת את כולם ללא אפליה על בסיס דת, גזע או מוצא. היותו עסק פרטי אינו מקנה זכות לאפלות.'
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'בית ספר מפריד בין בנים ובנות בשיעורי ספורט. הורים מתלוננים על אפליה מגדרית. מה הנכון?',
        options: [
          'זה תלוי בהקשר - הפרדה לצורכי צניעות או בטיחות עשויה להיות לגיטימית; הפרדה שרירותית לא',
          'כל הפרדה אסורה',
          'הפרדה תמיד חובה',
          'זה לא קשור לזכויות אדם'
        ],
        correct: 0,
        explanation: 'הפרדה מגדרית אינה תמיד אפליה. בהקשרים מסוימים (למשל, צניעות, בטיחות, פרטיות) יש הצדקה. החוק בוחן אם ההפרדה משרתת מטרה לגיטימית ואינה מבוססת על סטריאוטיפים.'
      }
    ]
  }
]
