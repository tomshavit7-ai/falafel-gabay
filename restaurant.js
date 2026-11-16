/* =========================================================
   פלאפל גבאי, בוגרשוב 25, תל אביב. קובץ התוכן של האתר.
   מקורות: גוגל (12.11.2026), האתר שלהם falafelgabay.co.il,
   התפריט המלא, המחירים והתמונות מוולט (16.11.2026).
   איסוף עצמי: הזמנה ותשלום באתר. משלוחים: דרך וולט (deliveryUrl).
   חסר: וואטסאפ.
   מנה בלי img = ריבוע צבעוני עם סמל הקטגוריה.
   ========================================================= */
window.RESTAURANT = {
  embedMap: true,
  name: "פלאפל גבאי",
  fullName: "פלאפל גבאי",
  city: "תל אביב",
  address: "בוגרשוב 25, תל אביב-יפו",
  phone: "03-629-7060",
  whatsapp: "",
  deliveryUrl: "https://wolt.com/he/isr/tel-aviv/restaurant/falafel-gabai",
  deliveryLabel: "משלוח בוולט",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("פלאפל גבאי, בוגרשוב 25, תל אביב"),
  mapQuery: "פלאפל גבאי, בוגרשוב 25, תל אביב",
  google: { rating: 4.5, reviews: "1,890" },

  hero: {
    title: "פלאפל\nגבאי",
    sub: "פלאפל, חומוס, מרקים ואוכל ביתי ישראלי בבוגרשוב 25. כשר. מזמינים באתר ואוספים מהדלפק, או משלוח בוולט.",
    image: "img/salad-bar.jpg",
    stickerText: "מוסד תל אביבי",
  },

  story: null,
  gallery: [],

  // לוח המודעות: ביקורות אמיתיות מגוגל (מקוצרות במקומות שמסומנים ב־…) + תמונות של לקוחות מגוגל
  board: [
    { name: "Ana Assuncao", stars: 5, text: "זול, מהיר, איכותי וכמותי! לא יכולתי להיות יותר מאושר. בהחלט אחזור. יש תור אבל זה הולך מהר. … זה היה כל כך טעים! אפשרויות טבעוניות וצמחוניות וגם לחובבי בשר." },
    { photo: "img/falafel-pita.jpg", caption: "פלאפל בפיתה" },
    { name: "Zoltán Mihalszky", stars: 5, text: "היו מוכנים לתור ארוך, אבל שווה לחכות. … האוכל מצוין, המחירים בסדר. יש כמה כתבות עיתונאיות על הבעלים והשף על הקיר בפנים." },
    { photo: "img/tray.jpg", caption: "פלאפל וחומוס" },
    { name: "Ben Bain", stars: 5, text: "המקום מלא, וכן, קצת כאוטי בהמתנה להזמנה, אבל זה היה שווה את זה. … לא זול, אבל בגודל טוב, ובהחלט יצאתי מפה מלאה." },
    { photo: "img/challah-schnitzel.jpg", caption: "החלה של גבאי" },
    { name: "Łukasz", stars: 5, text: "מקום נחמד מאוד לארוחת צהריים בלב תל אביב. אוכל מזרח תיכוני מסורתי וטוב (חומוס, פלאפל, ירקות צלויים, סלט ירקות) מוגש במקום. הכל טרי וטעים מאוד. … אני ממליץ." },
    { photo: "img/dishes.jpg", caption: "אוכל ביתי" },
    { name: "Nhan Tran", stars: 5, text: "ארוחה נהדרת בצד הרחוב. … המנות ענקיות. … מנה אחת יכולה בקלות להאכיל שני אנשים. מקווה שתהיה לי הזדמנות לנסות פריטים אחרים בתפריט בפעם הבאה שאבקר." },
    { photo: "img/hummus-meat.jpg", caption: "צלחת מהדלפק" },
  ],

  // באתר: איסוף עצמי בלבד. משלוחים: דרך וולט (deliveryUrl)
  delivery: null,
  deliveryArea: "תל אביב",
  pickupTime: "",

  // מגוגל (12.11.2026): א׳–ה׳ 11:00–21:30, ו׳ 11:00–17:00, שבת סגור. באתר שלהם כתוב א׳–ה׳ 10:30–22:30
  hours: [0,1,2,3,4].map(d => ({ day: d, open: "11:00", close: "21:30" })).concat([{ day: 5, open: "11:00", close: "17:00" }]),

  demoNote: "",
  options: {},

  // התפריט בוולט, מילה במילה, עם המחירים של וולט (16.11.2026). לבדוק מול מחירי הדלפק
  menu: [
    { id: "pita", title: "גבאי בפיתה", color: "#0F6B3E", icon: "balls", items: [
      { name: "פלאפל בפיתה", desc: "מוגש בפיתה עם בחירה של סלטים בפנים", price: 31, img: "img/w-pita-falafel.jpg" },
      { name: "פיתה חזה עוף", desc: "מוגש בפיתה עם בחירה של סלטים בפנים", price: 49, img: "img/w-pita-chicken.jpg" },
      { name: "סטייק פרגית בפיתה", desc: "פיתה פרגית עם סלטים לבחירה.", price: 55 },
    ]},
    { id: "special", title: "המיוחדים של גבאי", color: "#C92A63", icon: "flame", items: [
      { name: "החלה של גבאי", desc: "חלת שניצל, מטבוחה, חצילים, תפו״א וחריף מוגש לצד חמוצים וטחינה.", price: 65, img: "img/w-challah-gabay.jpg" },
      { name: "חלה טבעונית", desc: "חלה המוגשת עם מטבוחה, חצילים, תפוח אדמה קריספי ופלפל חריף.", price: 50, img: "img/w-challah-vegan.jpg", tags: ["טבעוני"] },
      { name: "חומוס גבאי", desc: "חומוס גרגרים עם טחינה ומוגש עם פיתות", price: 42, img: "img/w-hummus-gabay.jpg" },
      { name: "אורז עם שעועית", desc: "שעועית ברוטב עגבניות, מוגשת על אורז. המנה בשרית.", price: 45, img: "img/w-rice-beans.jpg" },
      { name: "אורז עם שעועית ובשר", desc: "שעועית ובשר בבישול ארוך ברוטב עגבניות, מוגש על אורז", price: 69, img: "img/w-rice-beans-meat.jpg" },
    ]},
    { id: "plate", title: "גבאי בצלחת", color: "#14211A", icon: "flame", note: "כל המנות מגיעות בליווי סלט ירקות קטן, חומוס הבית, חמוצים ופיתה", items: [
      { name: "שניצל בצלחת", desc: "חזה עוף טרי מצופה בפרורי לחם", price: 75, img: "img/w-plate-schnitzel.jpg" },
      { name: "סטייק פרגית בצלחת", desc: "שני שיפודי פרגית בתיבול ביתי ובצל מטוגן", price: 88, img: "img/w-plate-pargit.jpg" },
    ]},
    { id: "soups", title: "מרקים", color: "#C92A63", icon: "bowl", items: [
      { name: "מרק קובה סלק", desc: "", price: 59, img: "img/w-kubbeh-selek.jpg" },
      { name: "מרק שעועית עם בשר", desc: "", price: 59, img: "img/w-bean-soup-meat.jpg" },
      { name: "מרק גונדי", desc: "", price: 59, img: "img/w-gondi.jpg" },
      { name: "מרק חרירה", desc: "", price: 42, img: "img/w-harira.jpg" },
      { name: "מרק לחשו", desc: "מרק מרוקאי צמחוני על בסיס סולט כוסברה ושום", price: 42, img: "img/w-lachshu.jpg" },
      { name: "מרק שעועית על ציר בשר", desc: "מרק שעועית על בסיס ציר בשר, מוגש ללא חתיכות בשר.", price: 42, img: "img/w-bean-soup.jpg" },
      { name: "מרק ירקות", desc: "", price: 42, img: "img/w-veg-soup.jpg" },
      { name: "מרק בצל", desc: "", price: 42 },
    ]},
    { id: "salads", title: "סלטים", color: "#0F6B3E", icon: "leaf", items: [
      { name: "סלט הבית", desc: "ירקות טריים, עגבניות חריפות, בצל, פטרוזיליה, כרוב לבן וגרגרי חומוס. מגיע לצד טחינה", price: 45, img: "img/w-salad-house.jpg" },
      { name: "סלט חזה עוף", desc: "חסה, מלפפון, עגבניה, בצל, פטרוזיליה, סלט חריף וכרוב לבן עם נתחי חזה עוף", price: 72, img: "img/w-salad-chicken.jpg" },
      { name: "הסלט של בן (שניצל)", desc: "מלפפון, עגבניה, בצל, פטרוזיליה, כרוב לבן, פלפל חריף ושניצל קריספי", price: 72 },
    ]},
    { id: "starters", title: "פותחים שולחן", color: "#C92A63", icon: "balls", items: [
      { name: "6 כדורי פלאפל", desc: "", price: 18, img: "img/w-falafel6.jpg" },
      { name: "10 כדורי פלאפל", desc: "", price: 30, img: "img/w-falafel10.jpg" },
      { name: "קובה", desc: "", price: 18, img: "img/w-kubbeh.jpg" },
      { name: "4 קציצות תפוחי אדמה קריספי", desc: "4 קציצות תפוחי אדמה בהכנה ביתית, קריספיות מבחוץ ונימוחות מבפנים.", price: 22 },
      { name: "סמבוסק עיראקי", desc: "סמבוסק עיראקי ממולא חומוס, צמחוני", price: 16, img: "img/w-sambusak1.jpg" },
      { name: "2 סמבוסק עיראקי", desc: "שני סמבוסק עיראקי ממולא חומוס, צמחוני", price: 22, img: "img/w-sambusak2.jpg" },
      { name: "3 סמבוסק עיראקי", desc: "סמבוסק עיראקי ממולא בחומוס, צמחוני", price: 33, img: "img/w-sambusak3.jpg" },
      { name: "3 פיתות", desc: "", price: 15, img: "img/w-pitas.jpg" },
      { name: "החלות של גבאי", desc: "5 חלות טריות", price: 45, img: "img/w-challot.jpg" },
    ]},
    { id: "byweight", title: "אוכל במשקל", color: "#14211A", icon: "bowl", items: [
      { name: "שניצל במשקל", desc: "שניצלים קריספיים במשקל, 500 גרם", price: 99, img: "img/w-kg-schnitzel.jpg" },
      { name: "אורז במשקל", desc: "", price: 20, img: "img/w-kg-rice.jpg" },
      { name: "סלט כרוב במשקל", desc: "", price: 30, img: "img/w-kg-cabbage.jpg" },
      { name: "סלט ירקות במשקל", desc: "", price: 30, img: "img/w-kg-veg.jpg" },
      { name: "חומוס ביתי במשקל", desc: "", price: 22, img: "img/w-kg-hummus.jpg" },
      { name: "טחינה ביתית במשקל", desc: "", price: 17, img: "img/w-kg-tahini.jpg" },
      { name: "מטבוחה ביתית במשקל", desc: "", price: 25, img: "img/w-kg-matbucha.jpg" },
      { name: "סחוג במשקל", desc: "סחוג (סלט חריף ירוק) במשקל", price: 30, img: "img/w-kg-schug.jpg", tags: ["חריף"] },
    ]},
    { id: "drinks", title: "שתייה", color: "#0F6B3E", icon: "bottle", items: [
      { name: "קוקה קולה", desc: "330 מ״ל", price: 13, img: "img/w-coke.jpg" },
      { name: "קוקה קולה זירו", desc: "330 מ״ל", price: 13, img: "img/w-coke-zero.jpg" },
      { name: "ספרייט", desc: "330 מ״ל", price: 13, img: "img/w-sprite.jpg" },
      { name: "ספרייט זירו", desc: "330 מ״ל", price: 13, img: "img/w-sprite-zero.jpg" },
      { name: "פאנטה", desc: "330 מ״ל", price: 13, img: "img/w-fanta.jpg" },
      { name: "פיוז-טי אפרסק", desc: "330 מ״ל", price: 15, img: "img/w-fuze.jpg" },
      { name: "ספרינג נקטר מנגו", desc: "פחית 330 מ״ל", price: 13, img: "img/w-mango.jpg" },
      { name: "שוופס תות", desc: "פחית 330 מ״ל", price: 13, img: "img/w-schweppes-straw.jpg" },
      { name: "שוויפס מוגז בטעם ענבים", desc: "330 מ״ל", price: 13, img: "img/w-schweppes-grape.jpg" },
      { name: "שוופס WATER תפוח", desc: "500 מ״ל", price: 13, img: "img/w-schweppes-apple.jpg" },
      { name: "תפוזינה תפוזים", desc: "330 מ״ל", price: 13, img: "img/w-tapuzina-orange.jpg" },
      { name: "תפוזינה אשכוליות", desc: "330 מ״ל", price: 13, img: "img/w-tapuzina-grapefruit.jpg" },
      { name: "תפוזינה ענבים", desc: "330 מ״ל", price: 13, img: "img/w-tapuzina-grape.jpg" },
      { name: "סודה", desc: "250 מ״ל", price: 12, img: "img/w-soda.jpg" },
      { name: "סודה שוופס", desc: "250 מ״ל", price: 12, img: "img/w-schweppes-soda.jpg" },
      { name: "מים מינרליים עין גדי", desc: "500 מ״ל", price: 11, img: "img/w-water.jpg" },
      { name: "בירה שחורה", desc: "330 מ״ל", price: 13, img: "img/w-black-beer.jpg" },
      { name: "קרלסברג", desc: "בקבוק 330 מ״ל. מגיל 18", price: 24, img: "img/w-carlsberg.jpg" },
    ]},
  ],
};
