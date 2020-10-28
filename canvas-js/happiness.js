/*--------------------------------------------------------------------------*/
/*  HAPPINESS.JS							    */
/*    Routines to calculate libMIT happiness scores			    */
/* 									    */
/*- Modification History: --------------------------------------------------*/
/*  When:	Who:			Comments:			    */
/* 									    */
/*  03-Feb-13	Christopher G. Healey	Converted from ANEW.JS		    */
/*  29-Oct-18	Christopher G. Healey	Cleaned up duplicated, added stem   */
/*					terms				    */
/*--------------------------------------------------------------------------*/

//  Module global variables

//  Happiness description structure:
//  - key, full term
//  - dict, dictionary
//  - word, full term
//  - stem, stemmed term
//  - avg, happiness average
//  - std, happiness standard deviation
//
//  Happiness terms are not stemmed, because the original dataset was
//  specifically designed not to conflate terms

var  happy_term = {
  "won": {
    dict: "happiness", word: "won", stem: "won", anew: "win",
    avg: [ 7.72, 8.1 ], std: [ 2.16, 1.22 ], fq: 50
  },
  "sweetest": {
    dict: "happiness", word: "sweetest", stem: "sweetest", anew: "angel",
    avg: [ 4.83, 7.92 ], std: [ 2.63, 1.29 ], fq: 50
  },
  "funniest": {
    dict: "happiness", word: "funniest", stem: "funniest", anew: "suspicious",
    avg: [ 6.25, 7.76 ], std: [ 1.59, 1.56 ], fq: 50
  },
  "honour": {
    dict: "happiness", word: "honour", stem: "honour", anew: "respectful",
    avg: [ 4.6, 7.7 ], std: [ 2.67, 1.25 ], fq: 50
  },
  "cutest": {
    dict: "happiness", word: "cutest", stem: "cutest", anew: "cute",
    avg: [ 5.53, 7.62 ], std: [ 2.71, 1.09 ], fq: 50
  },
  "easier": {
    dict: "happiness", word: "easier", stem: "easier", anew: "leisurely",
    avg: [ 3.8, 7.56 ], std: [ 2.38, 1.15 ], fq: 50
  },
  "wow": {
    dict: "happiness", word: "wow", stem: "wow", anew: "riot",
    avg: [ 6.39, 7.46 ], std: [ 2.63, 1.45 ], fq: 50
  },
  "perfectly": {
    dict: "happiness", word: "perfectly", stem: "perfectli", anew: "dead",
    avg: [ 5.73, 7.28 ], std: [ 2.73, 1.59 ], fq: 50
  },
  "greatest": {
    dict: "happiness", word: "greatest", stem: "greatest", anew: "outstanding",
    avg: [ 6.24, 7.26 ], std: [ 2.59, 1.52 ], fq: 50
  },
  "sweeter": {
    dict: "happiness", word: "sweeter", stem: "sweeter", anew: "angel",
    avg: [ 4.83, 7.22 ], std: [ 2.63, 1.11 ], fq: 50
  },
  "discount": {
    dict: "happiness", word: "discount", stem: "discount", anew: "ignorance",
    avg: [ 4.39, 7.2 ], std: [ 2.49, 1.29 ], fq: 50
  },
  "best": {
    dict: "happiness", word: "best", stem: "best", anew: "respectful",
    avg: [ 4.6, 7.18 ], std: [ 2.67, 1.69 ], fq: 50
  },
  "favourite": {
    dict: "happiness", word: "favourite", stem: "favourit", anew: "pet",
    avg: [ 5.1, 7.16 ], std: [ 2.59, 1.36 ], fq: 50
  },
  "brighter": {
    dict: "happiness", word: "brighter", stem: "brighter", anew: "bright",
    avg: [ 5.4, 7.14 ], std: [ 2.33, 1.32 ], fq: 50
  },
  "paid": {
    dict: "happiness", word: "paid", stem: "paid", anew: "devoted",
    avg: [ 5.23, 7.14 ], std: [ 2.21, 1.71 ], fq: 50
  },
  "stronger": {
    dict: "happiness", word: "stronger", stem: "stronger", anew: "hard",
    avg: [ 5.12, 7.12 ], std: [ 2.19, 1.08 ], fq: 50
  },
  "women": {
    dict: "happiness", word: "women", stem: "women", anew: "woman",
    avg: [ 5.32, 7.12 ], std: [ 2.59, 1.47 ], fq: 50
  },
  "dearest": {
    dict: "happiness", word: "dearest", stem: "dearest", anew: "good",
    avg: [ 5.43, 7.1 ], std: [ 2.85, 1.28 ], fq: 50
  },
  "shopping": {
    dict: "happiness", word: "shopping", stem: "shop", anew: "grass",
    avg: [ 4.14, 7.1 ], std: [ 2.11, 1.54 ], fq: 50
  },
  "true": {
    dict: "happiness", word: "true", stem: "true", anew: "honest",
    avg: [ 5.32, 7.08 ], std: [ 1.92, 1.1 ], fq: 50
  },
  "colours": {
    dict: "happiness", word: "colours", stem: "colour", anew: "color",
    avg: [ 4.73, 7.02 ], std: [ 2.64, 1.38 ], fq: 50
  },
  "easily": {
    dict: "happiness", word: "easily", stem: "easili", anew: "easy",
    avg: [ 4.48, 7.02 ], std: [ 2.82, 1.63 ], fq: 50
  },
  "better": {
    dict: "happiness", word: "better", stem: "better", anew: "respectful",
    avg: [ 4.6, 7 ], std: [ 2.67, 1.28 ], fq: 50
  },
  "gentlemen": {
    dict: "happiness", word: "gentlemen", stem: "gentlemen", anew: "man",
    avg: [ 5.24, 7 ], std: [ 2.31, 1.43 ], fq: 50
  },
  "plenty": {
    dict: "happiness", word: "plenty", stem: "plenti", anew: "mountain",
    avg: [ 5.49, 6.98 ], std: [ 2.43, 1.22 ], fq: 50
  },
  "dear": {
    dict: "happiness", word: "dear", stem: "dear", anew: "lamb",
    avg: [ 3.36, 6.94 ], std: [ 2.18, 1.54 ], fq: 50
  },
  "favour": {
    dict: "happiness", word: "favour", stem: "favour", anew: "favor",
    avg: [ 4.54, 6.92 ], std: [ 1.86, 1.53 ], fq: 50
  },
  "superstar": {
    dict: "happiness", word: "superstar", stem: "superstar", anew: "champion",
    avg: [ 5.85, 6.86 ], std: [ 3.15, 1.97 ], fq: 50
  },
  "experienced": {
    dict: "happiness", word: "experienced", stem: "experienc", anew: "lively",
    avg: [ 5.53, 6.82 ], std: [ 2.9, 1.17 ], fq: 50
  },
  "gains": {
    dict: "happiness", word: "gains", stem: "gain", anew: "win",
    avg: [ 7.72, 6.82 ], std: [ 2.16, 1.48 ], fq: 50
  },
  "prevail": {
    dict: "happiness", word: "prevail", stem: "prevail", anew: "triumph",
    avg: [ 5.78, 6.82 ], std: [ 2.6, 1.73 ], fq: 50
  },
  "medal": {
    dict: "happiness", word: "medal", stem: "medal", anew: "decorate",
    avg: [ 5.14, 6.78 ], std: [ 2.39, 1.43 ], fq: 50
  },
  "top": {
    dict: "happiness", word: "top", stem: "top", anew: "crown",
    avg: [ 4.28, 6.76 ], std: [ 2.53, 1.52 ], fq: 50
  },
  "prepared": {
    dict: "happiness", word: "prepared", stem: "prepar", anew: "machine",
    avg: [ 3.82, 6.74 ], std: [ 2.4, 1.07 ], fq: 50
  },
  "technology": {
    dict: "happiness", word: "technology", stem: "technolog", anew: "engine",
    avg: [ 3.98, 6.74 ], std: [ 2.33, 1.5 ], fq: 50
  },
  "greater": {
    dict: "happiness", word: "greater", stem: "greater", anew: "outstanding",
    avg: [ 6.24, 6.68 ], std: [ 2.59, 1.32 ], fq: 50
  },
  "novel": {
    dict: "happiness", word: "novel", stem: "novel", anew: "refreshment",
    avg: [ 4.45, 6.68 ], std: [ 2.7, 1.46 ], fq: 50
  },
  "privilege": {
    dict: "happiness", word: "privilege", stem: "privileg", anew: "favor",
    avg: [ 4.54, 6.68 ], std: [ 1.86, 1.65 ], fq: 50
  },
  "theatre": {
    dict: "happiness", word: "theatre", stem: "theatr", anew: "house",
    avg: [ 4.56, 6.68 ], std: [ 2.41, 1.53 ], fq: 50
  },
  "high": {
    dict: "happiness", word: "high", stem: "high", anew: "luxury",
    avg: [ 4.75, 6.64 ], std: [ 2.91, 1.21 ], fq: 50
  },
  "leading": {
    dict: "happiness", word: "leading", stem: "lead", anew: "star",
    avg: [ 5.83, 6.64 ], std: [ 2.44, 1.51 ], fq: 50
  },
  "attained": {
    dict: "happiness", word: "attained", stem: "attain", anew: "hit",
    avg: [ 5.73, 6.62 ], std: [ 2.09, 1.4 ], fq: 50
  },
  "chatting": {
    dict: "happiness", word: "chatting", stem: "chat", anew: "gossip",
    avg: [ 5.74, 6.62 ], std: [ 2.38, 1.24 ], fq: 50
  },
  "kitty": {
    dict: "happiness", word: "kitty", stem: "kitti", anew: "kitten",
    avg: [ 5.08, 6.62 ], std: [ 2.45, 1.86 ], fq: 50
  },
  "offer": {
    dict: "happiness", word: "offer", stem: "offer", anew: "tender",
    avg: [ 4.88, 6.62 ], std: [ 2.3, 1.03 ], fq: 50
  },
  "slept": {
    dict: "happiness", word: "slept", stem: "slept", anew: "sleep",
    avg: [ 2.8, 6.62 ], std: [ 2.66, 1.56 ], fq: 50
  },
  "suitable": {
    dict: "happiness", word: "suitable", stem: "suitabl", anew: "desire",
    avg: [ 7.35, 6.6 ], std: [ 1.76, 0.89 ], fq: 50
  },
  "beam": {
    dict: "happiness", word: "beam", stem: "beam", anew: "radiator",
    avg: [ 4.02, 6.6 ], std: [ 1.94, 1.37 ], fq: 50
  },
  "captain": {
    dict: "happiness", word: "captain", stem: "captain", anew: "masterful",
    avg: [ 5.2, 6.6 ], std: [ 2.85, 1.63 ], fq: 50
  },
  "vocals": {
    dict: "happiness", word: "vocals", stem: "vocal", anew: "song",
    avg: [ 6.07, 6.59 ], std: [ 2.42, 1.46 ], fq: 50
  },
  "saviour": {
    dict: "happiness", word: "saviour", stem: "saviour", anew: "savior",
    avg: [ 5.8, 6.57 ], std: [ 3.01, 1.53 ], fq: 50
  },
  "worldwide": {
    dict: "happiness", word: "worldwide", stem: "worldwid", anew: "world",
    avg: [ 5.32, 6.56 ], std: [ 2.39, 1.26 ], fq: 50
  },
  "done": {
    dict: "happiness", word: "done", stem: "done", anew: "execution",
    avg: [ 5.71, 6.54 ], std: [ 2.74, 1.43 ], fq: 50
  },
  "found": {
    dict: "happiness", word: "found", stem: "found", anew: "wit",
    avg: [ 5.42, 6.54 ], std: [ 2.44, 1.18 ], fq: 50
  },
  "rising": {
    dict: "happiness", word: "rising", stem: "rise", anew: "revolt",
    avg: [ 6.56, 6.54 ], std: [ 2.34, 1.11 ], fq: 50
  },
  "ethics": {
    dict: "happiness", word: "ethics", stem: "ethic", anew: "moral",
    avg: [ 4.49, 6.52 ], std: [ 2.28, 1.36 ], fq: 50
  },
  "fries": {
    dict: "happiness", word: "fries", stem: "fri", anew: "child",
    avg: [ 5.55, 6.52 ], std: [ 2.29, 1.37 ], fq: 50
  },
  "sang": {
    dict: "happiness", word: "sang", stem: "sang", anew: "whistle",
    avg: [ 4.69, 6.52 ], std: [ 1.99, 1.31 ], fq: 50
  },
  "eden": {
    dict: "happiness", word: "eden", stem: "eden", anew: "heaven",
    avg: [ 5.61, 6.51 ], std: [ 3.2, 1.56 ], fq: 50
  },
  "eaten": {
    dict: "happiness", word: "eaten", stem: "eaten", anew: "eat",
    avg: [ 5.69, 6.5 ], std: [ 2.51, 1.22 ], fq: 50
  },
  "leadership": {
    dict: "happiness", word: "leadership", stem: "leadership", anew: "leader",
    avg: [ 6.27, 6.5 ], std: [ 2.18, 1.59 ], fq: 50
  },
  "newest": {
    dict: "happiness", word: "newest", stem: "newest", anew: "young",
    avg: [ 5.64, 6.5 ], std: [ 2.51, 1.56 ], fq: 50
  },
  "roast": {
    dict: "happiness", word: "roast", stem: "roast", anew: "ridicule",
    avg: [ 5.83, 6.5 ], std: [ 2.73, 1.45 ], fq: 50
  },
  "rays": {
    dict: "happiness", word: "rays", stem: "ray", anew: "radiator",
    avg: [ 4.02, 6.49 ], std: [ 1.94, 1.42 ], fq: 50
  },
  "restored": {
    dict: "happiness", word: "restored", stem: "restor", anew: "doctor",
    avg: [ 5.86, 6.48 ], std: [ 2.7, 1.22 ], fq: 50
  },
  "cultivated": {
    dict: "happiness", word: "cultivated", stem: "cultiv", anew: "nature",
    avg: [ 4.37, 6.46 ], std: [ 2.51, 1.36 ], fq: 50
  },
  "prime": {
    dict: "happiness", word: "prime", stem: "prime", anew: "flower",
    avg: [ 4, 6.46 ], std: [ 2.44, 1.28 ], fq: 50
  },
  "prospect": {
    dict: "happiness", word: "prospect", stem: "prospect", anew: "chance",
    avg: [ 5.38, 6.46 ], std: [ 2.58, 1.5 ], fq: 50
  },
  "fast": {
    dict: "happiness", word: "fast", stem: "fast", anew: "loyal",
    avg: [ 5.16, 6.44 ], std: [ 2.42, 1.23 ], fq: 50
  },
  "wage": {
    dict: "happiness", word: "wage", stem: "wage", anew: "engaged",
    avg: [ 6.77, 6.44 ], std: [ 2.07, 1.3 ], fq: 50
  },
  "curves": {
    dict: "happiness", word: "curves", stem: "curv", anew: "cut",
    avg: [ 5, 6.42 ], std: [ 2.32, 1.23 ], fq: 50
  },
  "delivered": {
    dict: "happiness", word: "delivered", stem: "deliv", anew: "save",
    avg: [ 4.95, 6.42 ], std: [ 2.19, 1.2 ], fq: 50
  },
  "pics": {
    dict: "happiness", word: "pics", stem: "pic", anew: "movie",
    avg: [ 4.93, 6.4 ], std: [ 2.54, 1.36 ], fq: 50
  },
  "resolved": {
    dict: "happiness", word: "resolved", stem: "resolv", anew: "answer",
    avg: [ 5.41, 6.4 ], std: [ 2.43, 1.47 ], fq: 50
  },
  "studies": {
    dict: "happiness", word: "studies", stem: "studi", anew: "field",
    avg: [ 4.08, 6.4 ], std: [ 2.41, 1.37 ], fq: 50
  },
  "twins": {
    dict: "happiness", word: "twins", stem: "twin", anew: "couple",
    avg: [ 6.39, 6.4 ], std: [ 2.31, 1.65 ], fq: 50
  },
  "younger": {
    dict: "happiness", word: "younger", stem: "younger", anew: "young",
    avg: [ 5.64, 6.4 ], std: [ 2.51, 1.5 ], fq: 50
  },
  "bigger": {
    dict: "happiness", word: "bigger", stem: "bigger", anew: "adult",
    avg: [ 4.76, 6.38 ], std: [ 1.95, 1.4 ], fq: 50
  },
  "faster": {
    dict: "happiness", word: "faster", stem: "faster", anew: "loyal",
    avg: [ 5.16, 6.38 ], std: [ 2.42, 1.35 ], fq: 50
  },
  "sung": {
    dict: "happiness", word: "sung", stem: "sung", anew: "whistle",
    avg: [ 4.69, 6.38 ], std: [ 1.99, 1.24 ], fq: 50
  },
  "acquire": {
    dict: "happiness", word: "acquire", stem: "acquir", anew: "win",
    avg: [ 7.72, 6.36 ], std: [ 2.16, 1.32 ], fq: 50
  },
  "branches": {
    dict: "happiness", word: "branches", stem: "branch", anew: "fork",
    avg: [ 3.96, 6.35 ], std: [ 1.94, 1.2 ], fq: 50
  },
  "lord": {
    dict: "happiness", word: "lord", stem: "lord", anew: "masterful",
    avg: [ 5.2, 6.34 ], std: [ 2.85, 1.83 ], fq: 50
  },
  "soon": {
    dict: "happiness", word: "soon", stem: "soon", anew: "present",
    avg: [ 5.12, 6.34 ], std: [ 2.39, 0.89 ], fq: 50
  },
  "kin": {
    dict: "happiness", word: "kin", stem: "kin", anew: "family",
    avg: [ 4.8, 6.32 ], std: [ 2.71, 1.5 ], fq: 50
  },
  "newspaper": {
    dict: "happiness", word: "newspaper", stem: "newspap", anew: "paper",
    avg: [ 2.5, 6.32 ], std: [ 1.85, 1.35 ], fq: 50
  },
  "worship": {
    dict: "happiness", word: "worship", stem: "worship", anew: "reverent",
    avg: [ 4, 6.32 ], std: [ 1.6, 1.48 ], fq: 50
  },
  "volumes": {
    dict: "happiness", word: "volumes", stem: "volum", anew: "book",
    avg: [ 4.17, 6.31 ], std: [ 2.49, 1.29 ], fq: 50
  },
  "bought": {
    dict: "happiness", word: "bought", stem: "bought", anew: "corrupt",
    avg: [ 4.67, 6.3 ], std: [ 2.35, 1.23 ], fq: 50
  },
  "flowing": {
    dict: "happiness", word: "flowing", stem: "flow", anew: "fall",
    avg: [ 4.7, 6.3 ], std: [ 2.48, 1.37 ], fq: 50
  },
  "joined": {
    dict: "happiness", word: "joined", stem: "join", anew: "couple",
    avg: [ 6.39, 6.3 ], std: [ 2.31, 1.09 ], fq: 50
  },
  "cheeks": {
    dict: "happiness", word: "cheeks", stem: "cheek", anew: "bold",
    avg: [ 5.6, 6.29 ], std: [ 2.21, 1.53 ], fq: 50
  },
  "rum": {
    dict: "happiness", word: "rum", stem: "rum", anew: "odd",
    avg: [ 4.27, 6.29 ], std: [ 2.46, 2.09 ], fq: 50
  },
  "fairly": {
    dict: "happiness", word: "fairly", stem: "fairli", anew: "pretty",
    avg: [ 6.03, 6.28 ], std: [ 2.22, 1.16 ], fq: 50
  },
  "introduced": {
    dict: "happiness", word: "introduced", stem: "introduc", anew: "present",
    avg: [ 5.12, 6.28 ], std: [ 2.39, 1.36 ], fq: 50
  },
  "lots": {
    dict: "happiness", word: "lots", stem: "lot", anew: "mountain",
    avg: [ 5.49, 6.28 ], std: [ 2.43, 1.43 ], fq: 50
  },
  "monkey": {
    dict: "happiness", word: "monkey", stem: "monkey", anew: "tamper",
    avg: [ 4.95, 6.28 ], std: [ 2.01, 1.71 ], fq: 50
  },
  "themes": {
    dict: "happiness", word: "themes", stem: "theme", anew: "idea",
    avg: [ 5.86, 6.28 ], std: [ 1.81, 1.25 ], fq: 50
  },
  "regards": {
    dict: "happiness", word: "regards", stem: "regard", anew: "wish",
    avg: [ 5.16, 6.27 ], std: [ 2.62, 1.33 ], fq: 50
  },
  "gave": {
    dict: "happiness", word: "gave", stem: "gave", anew: "devoted",
    avg: [ 5.23, 6.26 ], std: [ 2.21, 1.29 ], fq: 50
  },
  "leap": {
    dict: "happiness", word: "leap", stem: "leap", anew: "spring",
    avg: [ 5.67, 6.26 ], std: [ 2.51, 1.29 ], fq: 50
  },
  "prominent": {
    dict: "happiness", word: "prominent", stem: "promin", anew: "outstanding",
    avg: [ 6.24, 6.26 ], std: [ 2.59, 1.1 ], fq: 50
  },
  "built": {
    dict: "happiness", word: "built", stem: "built", anew: "building",
    avg: [ 3.92, 6.24 ], std: [ 1.94, 1.19 ], fq: 50
  },
  "flying": {
    dict: "happiness", word: "flying", stem: "fli", anew: "quick",
    avg: [ 6.57, 6.24 ], std: [ 1.78, 1.65 ], fq: 50
  },
  "show": {
    dict: "happiness", word: "show", stem: "show", anew: "present",
    avg: [ 5.12, 6.24 ], std: [ 2.39, 1.49 ], fq: 50
  },
  "big": {
    dict: "happiness", word: "big", stem: "big", anew: "adult",
    avg: [ 4.76, 6.22 ], std: [ 1.95, 1.5 ], fq: 50
  },
  "foundations": {
    dict: "happiness", word: "foundations", stem: "foundat", anew: "foot",
    avg: [ 3.27, 6.22 ], std: [ 1.98, 1.17 ], fq: 50
  },
  "knight": {
    dict: "happiness", word: "knight", stem: "knight", anew: "horse",
    avg: [ 3.89, 6.22 ], std: [ 2.17, 1.46 ], fq: 50
  },
  "dough": {
    dict: "happiness", word: "dough", stem: "dough", anew: "sugar",
    avg: [ 5.64, 6.2 ], std: [ 2.18, 1.46 ], fq: 50
  },
  "jacket": {
    dict: "happiness", word: "jacket", stem: "jacket", anew: "crown",
    avg: [ 4.28, 6.2 ], std: [ 2.53, 1.12 ], fq: 50
  },
  "lifted": {
    dict: "happiness", word: "lifted", stem: "lift", anew: "pinch",
    avg: [ 4.59, 6.2 ], std: [ 2.1, 1.23 ], fq: 50
  },
  "copper": {
    dict: "happiness", word: "copper", stem: "copper", anew: "pig",
    avg: [ 4.2, 6.18 ], std: [ 2.42, 1.6 ], fq: 50
  },
  "ate": {
    dict: "happiness", word: "ate", stem: "ate", anew: "eat",
    avg: [ 5.69, 6.18 ], std: [ 2.51, 1.45 ], fq: 50
  },
  "certificate": {
    dict: "happiness", word: "certificate", stem: "certif", anew: "secure",
    avg: [ 3.14, 6.18 ], std: [ 2.47, 1.14 ], fq: 50
  },
  "chief": {
    dict: "happiness", word: "chief", stem: "chief", anew: "masterful",
    avg: [ 5.2, 6.18 ], std: [ 2.85, 1.16 ], fq: 50
  },
  "established": {
    dict: "happiness", word: "established", stem: "establish", anew: "nature",
    avg: [ 4.37, 6.18 ], std: [ 2.51, 1.17 ], fq: 50
  },
  "resolution": {
    dict: "happiness", word: "resolution", stem: "resolut", anew: "answer",
    avg: [ 5.41, 6.18 ], std: [ 2.43, 1.29 ], fq: 50
  },
  "victor": {
    dict: "happiness", word: "victor", stem: "victor", anew: "masterful",
    avg: [ 5.2, 6.18 ], std: [ 2.85, 1.72 ], fq: 50
  },
  "applying": {
    dict: "happiness", word: "applying", stem: "appli", anew: "employment",
    avg: [ 5.28, 6.16 ], std: [ 2.12, 1.16 ], fq: 50
  },
  "crop": {
    dict: "happiness", word: "crop", stem: "crop", anew: "dress",
    avg: [ 4.05, 6.16 ], std: [ 1.89, 1.25 ], fq: 50
  },
  "automobile": {
    dict: "happiness", word: "automobile", stem: "automobil", anew: "machine",
    avg: [ 3.82, 6.16 ], std: [ 2.4, 1.38 ], fq: 50
  },
  "polish": {
    dict: "happiness", word: "polish", stem: "polish", anew: "smooth",
    avg: [ 4.91, 6.16 ], std: [ 2.57, 1.39 ], fq: 50
  },
  "turkey": {
    dict: "happiness", word: "turkey", stem: "turkey", anew: "bomb",
    avg: [ 7.15, 6.16 ], std: [ 2.4, 1.81 ], fq: 50
  },
  "conscious": {
    dict: "happiness", word: "conscious", stem: "consciou", anew: "wit",
    avg: [ 5.42, 6.14 ], std: [ 2.44, 1.39 ], fq: 50
  },
  "kindle": {
    dict: "happiness", word: "kindle", stem: "kindl", anew: "fire",
    avg: [ 7.17, 6.14 ], std: [ 2.06, 1.25 ], fq: 50
  },
  "places": {
    dict: "happiness", word: "places", stem: "place", anew: "seat",
    avg: [ 2.95, 6.14 ], std: [ 1.72, 1.16 ], fq: 50
  },
  "strongly": {
    dict: "happiness", word: "strongly", stem: "strongli", anew: "powerful",
    avg: [ 5.83, 6.14 ], std: [ 2.69, 1.28 ], fq: 50
  },
  "exclusively": {
    dict: "happiness", word: "exclusively", stem: "exclus", anew: "alone",
    avg: [ 4.83, 6.12 ], std: [ 2.66, 1.44 ], fq: 50
  },
  "outcomes": {
    dict: "happiness", word: "outcomes", stem: "outcom", anew: "event",
    avg: [ 5.1, 6.12 ], std: [ 2.4, 1.44 ], fq: 50
  },
  "quicker": {
    dict: "happiness", word: "quicker", stem: "quicker", anew: "agility",
    avg: [ 4.85, 6.12 ], std: [ 1.8, 1.15 ], fq: 50
  },
  "boulevard": {
    dict: "happiness", word: "boulevard", stem: "boulevard", anew: "avenue",
    avg: [ 4.12, 6.12 ], std: [ 2.01, 1.26 ], fq: 50
  },
  "dish": {
    dict: "happiness", word: "dish", stem: "dish", anew: "sweetheart",
    avg: [ 5.5, 6.12 ], std: [ 2.73, 1.41 ], fq: 50
  },
  "ensure": {
    dict: "happiness", word: "ensure", stem: "ensur", anew: "controlling",
    avg: [ 6.1, 6.12 ], std: [ 2.19, 1.36 ], fq: 50
  },
  "nearer": {
    dict: "happiness", word: "nearer", stem: "nearer", anew: "good",
    avg: [ 5.43, 6.1 ], std: [ 2.85, 1.18 ], fq: 50
  },
  "cattle": {
    dict: "happiness", word: "cattle", stem: "cattl", anew: "cow",
    avg: [ 3.49, 6.1 ], std: [ 2.13, 1.39 ], fq: 50
  },
  "increasingly": {
    dict: "happiness", word: "increasingly", stem: "increasingli", anew: "progress",
    avg: [ 6.02, 6.1 ], std: [ 2.58, 1.34 ], fq: 50
  },
  "shade": {
    dict: "happiness", word: "shade", stem: "shade", anew: "shadow",
    avg: [ 4.3, 6.1 ], std: [ 2.26, 1.68 ], fq: 50
  },
  "throne": {
    dict: "happiness", word: "throne", stem: "throne", anew: "stool",
    avg: [ 4, 6.08 ], std: [ 2.14, 2.11 ], fq: 50
  },
  "acquainted": {
    dict: "happiness", word: "acquainted", stem: "acquaint", anew: "present",
    avg: [ 5.12, 6.08 ], std: [ 2.39, 1.55 ], fq: 50
  },
  "boots": {
    dict: "happiness", word: "boots", stem: "boot", anew: "thrill",
    avg: [ 8.02, 6.08 ], std: [ 1.65, 1.37 ], fq: 50
  },
  "coat": {
    dict: "happiness", word: "coat", stem: "coat", anew: "cake",
    avg: [ 5, 6.08 ], std: [ 2.37, 1.24 ], fq: 50
  },
  "grown": {
    dict: "happiness", word: "grown", stem: "grown", anew: "farm",
    avg: [ 3.9, 6.08 ], std: [ 1.95, 1.24 ], fq: 50
  },
  "instant": {
    dict: "happiness", word: "instant", stem: "instant", anew: "wink",
    avg: [ 5.44, 6.08 ], std: [ 2.68, 1.12 ], fq: 50
  },
  "introduction": {
    dict: "happiness", word: "introduction", stem: "introduct", anew: "present",
    avg: [ 5.12, 6.08 ], std: [ 2.39, 1.01 ], fq: 50
  },
  "picked": {
    dict: "happiness", word: "picked", stem: "pick", anew: "foot",
    avg: [ 3.27, 6.08 ], std: [ 1.98, 1.21 ], fq: 50
  },
  "reached": {
    dict: "happiness", word: "reached", stem: "reach", anew: "hit",
    avg: [ 5.73, 6.08 ], std: [ 2.09, 1.26 ], fq: 50
  },
  "fluid": {
    dict: "happiness", word: "fluid", stem: "fluid", anew: "smooth",
    avg: [ 4.91, 6.06 ], std: [ 2.57, 1.23 ], fq: 50
  },
  "composition": {
    dict: "happiness", word: "composition", stem: "composit", anew: "paper",
    avg: [ 2.5, 6.06 ], std: [ 1.85, 1.19 ], fq: 50
  },
  "dimes": {
    dict: "happiness", word: "dimes", stem: "dime", anew: "blind",
    avg: [ 4.39, 6.06 ], std: [ 2.36, 1.22 ], fq: 50
  },
  "harbor": {
    dict: "happiness", word: "harbor", stem: "harbor", anew: "nurse",
    avg: [ 4.84, 6.06 ], std: [ 2.04, 1.45 ], fq: 50
  },
  "influences": {
    dict: "happiness", word: "influences", stem: "influenc", anew: "charm",
    avg: [ 5.16, 6.06 ], std: [ 2.25, 1.22 ], fq: 50
  },
  "servings": {
    dict: "happiness", word: "servings", stem: "serv", anew: "answer",
    avg: [ 5.41, 6.06 ], std: [ 2.43, 1.41 ], fq: 50
  },
  "straight": {
    dict: "happiness", word: "straight", stem: "straight", anew: "square",
    avg: [ 3.18, 6.06 ], std: [ 1.76, 1.06 ], fq: 50
  },
  "alumni": {
    dict: "happiness", word: "alumni", stem: "alumni", anew: "graduate",
    avg: [ 7.25, 6.04 ], std: [ 2.25, 1.03 ], fq: 50
  },
  "points": {
    dict: "happiness", word: "points", stem: "point", anew: "detail",
    avg: [ 4.1, 6.04 ], std: [ 2.24, 1.47 ], fq: 50
  },
  "prevention": {
    dict: "happiness", word: "prevention", stem: "prevent", anew: "bar",
    avg: [ 5, 6.04 ], std: [ 2.83, 1.23 ], fq: 50
  },
  "signing": {
    dict: "happiness", word: "signing", stem: "sign", anew: "bless",
    avg: [ 4.05, 6.04 ], std: [ 2.59, 1.48 ], fq: 50
  },
  "union": {
    dict: "happiness", word: "union", stem: "union", anew: "unit",
    avg: [ 3.75, 6.04 ], std: [ 2.49, 1.4 ], fq: 50
  },
  "words": {
    dict: "happiness", word: "words", stem: "word", anew: "news",
    avg: [ 5.17, 6.04 ], std: [ 2.11, 1.19 ], fq: 50
  },
  "nearest": {
    dict: "happiness", word: "nearest", stem: "nearest", anew: "good",
    avg: [ 5.43, 6.02 ], std: [ 2.85, 1.25 ], fq: 50
  },
  "cards": {
    dict: "happiness", word: "cards", stem: "card", anew: "wit",
    avg: [ 5.42, 6.02 ], std: [ 2.44, 1.3 ], fq: 50
  },
  "delivery": {
    dict: "happiness", word: "delivery", stem: "deliveri", anew: "rescue",
    avg: [ 6.53, 6.02 ], std: [ 2.56, 1.44 ], fq: 50
  },
  "jam": {
    dict: "happiness", word: "jam", stem: "jam", anew: "crushed",
    avg: [ 5.52, 6.02 ], std: [ 2.87, 2.03 ], fq: 50
  },
  "records": {
    dict: "happiness", word: "records", stem: "record", anew: "memory",
    avg: [ 5.42, 6.02 ], std: [ 2.25, 1.29 ], fq: 50
  },
  "try": {
    dict: "happiness", word: "try", stem: "tri", anew: "stress",
    avg: [ 7.45, 6.02 ], std: [ 2.38, 0.94 ], fq: 50
  },
  "unwind": {
    dict: "happiness", word: "unwind", stem: "unwind", anew: "relaxed",
    avg: [ 2.39, 6.02 ], std: [ 2.13, 1.85 ], fq: 50
  },
  "biggest": {
    dict: "happiness", word: "biggest", stem: "biggest", anew: "adult",
    avg: [ 4.76, 6 ], std: [ 1.95, 1.32 ], fq: 50
  },
  "crimson": {
    dict: "happiness", word: "crimson", stem: "crimson", anew: "violent",
    avg: [ 6.89, 6 ], std: [ 2.47, 1.51 ], fq: 50
  },
  "global": {
    dict: "happiness", word: "global", stem: "global", anew: "world",
    avg: [ 5.32, 6 ], std: [ 2.39, 1.48 ], fq: 50
  },
  "sites": {
    dict: "happiness", word: "sites", stem: "site", anew: "seat",
    avg: [ 2.95, 6 ], std: [ 1.72, 1.16 ], fq: 50
  },
  "sponsor": {
    dict: "happiness", word: "sponsor", stem: "sponsor", anew: "present",
    avg: [ 5.12, 6 ], std: [ 2.39, 1.41 ], fq: 50
  },
  "stores": {
    dict: "happiness", word: "stores", stem: "store", anew: "memory",
    avg: [ 5.42, 6 ], std: [ 2.25, 0.97 ], fq: 50
  },
  "action": {
    dict: "happiness", word: "action", stem: "action", anew: "execution",
    avg: [ 5.71, 5.98 ], std: [ 2.74, 1.42 ], fq: 50
  },
  "august": {
    dict: "happiness", word: "august", stem: "august", anew: "reverent",
    avg: [ 4, 5.98 ], std: [ 1.6, 1.44 ], fq: 50
  },
  "biography": {
    dict: "happiness", word: "biography", stem: "biographi", anew: "life",
    avg: [ 6.02, 5.98 ], std: [ 2.62, 1.45 ], fq: 50
  },
  "broadcast": {
    dict: "happiness", word: "broadcast", stem: "broadcast", anew: "air",
    avg: [ 4.12, 5.98 ], std: [ 2.3, 1.29 ], fq: 50
  },
  "explained": {
    dict: "happiness", word: "explained", stem: "explain", anew: "excuse",
    avg: [ 4.48, 5.98 ], std: [ 2.29, 1.32 ], fq: 50
  },
  "flash": {
    dict: "happiness", word: "flash", stem: "flash", anew: "wink",
    avg: [ 5.44, 5.98 ], std: [ 2.68, 1.04 ], fq: 50
  },
  "lessons": {
    dict: "happiness", word: "lessons", stem: "lesson", anew: "moral",
    avg: [ 4.49, 5.98 ], std: [ 2.28, 1.38 ], fq: 50
  },
  "looks": {
    dict: "happiness", word: "looks", stem: "look", anew: "spirit",
    avg: [ 5.56, 5.98 ], std: [ 2.62, 1.38 ], fq: 50
  },
  "national": {
    dict: "happiness", word: "national", stem: "nation", anew: "home",
    avg: [ 4.21, 5.98 ], std: [ 2.94, 1.15 ], fq: 50
  },
  "pairs": {
    dict: "happiness", word: "pairs", stem: "pair", anew: "couple",
    avg: [ 6.39, 5.98 ], std: [ 2.31, 1.17 ], fq: 50
  },
  "represented": {
    dict: "happiness", word: "represented", stem: "repres", anew: "present",
    avg: [ 5.12, 5.98 ], std: [ 2.39, 1.17 ], fq: 50
  },
  "refer": {
    dict: "happiness", word: "refer", stem: "refer", anew: "name",
    avg: [ 4.25, 5.98 ], std: [ 2.47, 1.11 ], fq: 50
  },
  "convinced": {
    dict: "happiness", word: "convinced", stem: "convinc", anew: "confident",
    avg: [ 6.22, 5.96 ], std: [ 2.41, 0.97 ], fq: 50
  },
  "head": {
    dict: "happiness", word: "head", stem: "head", anew: "mind",
    avg: [ 5, 5.96 ], std: [ 2.68, 1.07 ], fq: 50
  },
  "heels": {
    dict: "happiness", word: "heels", stem: "heel", anew: "dog",
    avg: [ 5.76, 5.96 ], std: [ 2.5, 1.12 ], fq: 50
  },
  "made": {
    dict: "happiness", word: "made", stem: "made", anew: "urine",
    avg: [ 4.2, 5.96 ], std: [ 2.18, 1.07 ], fq: 50
  },
  "net": {
    dict: "happiness", word: "net", stem: "net", anew: "profit",
    avg: [ 6.68, 5.96 ], std: [ 1.78, 1.03 ], fq: 50
  },
  "stadium": {
    dict: "happiness", word: "stadium", stem: "stadium", anew: "bowl",
    avg: [ 3.47, 5.96 ], std: [ 2.12, 1.58 ], fq: 50
  },
  "taught": {
    dict: "happiness", word: "taught", stem: "taught", anew: "learn",
    avg: [ 5.39, 5.96 ], std: [ 2.22, 1.46 ], fq: 50
  },
  "spreading": {
    dict: "happiness", word: "spreading", stem: "spread", anew: "air",
    avg: [ 4.12, 5.96 ], std: [ 2.3, 1.31 ], fq: 50
  },
  "exhibit": {
    dict: "happiness", word: "exhibit", stem: "exhibit", anew: "present",
    avg: [ 5.12, 5.96 ], std: [ 2.39, 1.25 ], fq: 50
  },
  "fiddle": {
    dict: "happiness", word: "fiddle", stem: "fiddl", anew: "toy",
    avg: [ 5.11, 5.96 ], std: [ 2.84, 1.73 ], fq: 50
  },
  "alternative": {
    dict: "happiness", word: "alternative", stem: "altern", anew: "option",
    avg: [ 4.74, 5.94 ], std: [ 2.23, 1.39 ], fq: 50
  },
  "chick": {
    dict: "happiness", word: "chick", stem: "chick", anew: "doll",
    avg: [ 4.24, 5.94 ], std: [ 2.43, 1.65 ], fq: 50
  },
  "diary": {
    dict: "happiness", word: "diary", stem: "diari", anew: "journal",
    avg: [ 4.05, 5.94 ], std: [ 1.96, 1.15 ], fq: 50
  },
  "framework": {
    dict: "happiness", word: "framework", stem: "framework", anew: "fabric",
    avg: [ 4.14, 5.94 ], std: [ 1.98, 1.06 ], fq: 50
  },
  "frank": {
    dict: "happiness", word: "frank", stem: "frank", anew: "dog",
    avg: [ 5.76, 5.94 ], std: [ 2.5, 1.3 ], fq: 50
  },
  "knew": {
    dict: "happiness", word: "knew", stem: "knew", anew: "loved",
    avg: [ 6.38, 5.94 ], std: [ 2.68, 1.3 ], fq: 50
  },
  "member": {
    dict: "happiness", word: "member", stem: "member", anew: "penis",
    avg: [ 5.54, 5.94 ], std: [ 2.63, 1.11 ], fq: 50
  },
  "men": {
    dict: "happiness", word: "men", stem: "men", anew: "humane",
    avg: [ 4.5, 5.94 ], std: [ 1.91, 1.39 ], fq: 50
  },
  "reality": {
    dict: "happiness", word: "reality", stem: "realiti", anew: "world",
    avg: [ 5.32, 5.94 ], std: [ 2.39, 1.65 ], fq: 50
  },
  "trends": {
    dict: "happiness", word: "trends", stem: "trend", anew: "cut",
    avg: [ 5, 5.94 ], std: [ 2.32, 1.28 ], fq: 50
  },
  "processing": {
    dict: "happiness", word: "processing", stem: "process", anew: "treat",
    avg: [ 5.62, 5.94 ], std: [ 2.25, 1.41 ], fq: 50
  },
  "bank": {
    dict: "happiness", word: "bank", stem: "bank", anew: "trust",
    avg: [ 5.3, 5.92 ], std: [ 2.66, 1.63 ], fq: 50
  },
  "boobs": {
    dict: "happiness", word: "boobs", stem: "boob", anew: "dummy",
    avg: [ 4.35, 5.92 ], std: [ 2.25, 2.14 ], fq: 50
  },
  "covered": {
    dict: "happiness", word: "covered", stem: "cover", anew: "hide",
    avg: [ 5.28, 5.92 ], std: [ 2.51, 1.01 ], fq: 50
  },
  "shown": {
    dict: "happiness", word: "shown", stem: "shown", anew: "present",
    avg: [ 5.12, 5.92 ], std: [ 2.39, 1.07 ], fq: 50
  },
  "solid": {
    dict: "happiness", word: "solid", stem: "solid", anew: "square",
    avg: [ 3.18, 5.92 ], std: [ 1.76, 1.12 ], fq: 50
  },
  "gin": {
    dict: "happiness", word: "gin", stem: "gin", anew: "noose",
    avg: [ 4.39, 5.9 ], std: [ 2.08, 1.81 ], fq: 50
  },
  "grew": {
    dict: "happiness", word: "grew", stem: "grew", anew: "farm",
    avg: [ 3.9, 5.9 ], std: [ 1.95, 1.33 ], fq: 50
  },
  "pass": {
    dict: "happiness", word: "pass", stem: "pass", anew: "fall",
    avg: [ 4.7, 5.9 ], std: [ 2.48, 1.43 ], fq: 50
  },
  "ratings": {
    dict: "happiness", word: "ratings", stem: "rate", anew: "betray",
    avg: [ 7.24, 5.9 ], std: [ 2.06, 1.27 ], fq: 50
  },
  "settlement": {
    dict: "happiness", word: "settlement", stem: "settlement", anew: "village",
    avg: [ 4.08, 5.9 ], std: [ 1.87, 1.5 ], fq: 50
  },
  "angle": {
    dict: "happiness", word: "angle", stem: "angl", anew: "fish",
    avg: [ 4, 5.9 ], std: [ 2.19, 1.36 ], fq: 50
  },
  "dolly": {
    dict: "happiness", word: "dolly", stem: "dolli", anew: "doll",
    avg: [ 4.24, 5.9 ], std: [ 2.43, 1.34 ], fq: 50
  },
  "puppet": {
    dict: "happiness", word: "puppet", stem: "puppet", anew: "tool",
    avg: [ 4.33, 5.9 ], std: [ 1.78, 1.76 ], fq: 50
  },
  "evidently": {
    dict: "happiness", word: "evidently", stem: "evid", anew: "plain",
    avg: [ 3.52, 5.88 ], std: [ 2.05, 1.35 ], fq: 50
  },
  "founder": {
    dict: "happiness", word: "founder", stem: "founder", anew: "father",
    avg: [ 5.92, 5.88 ], std: [ 2.6, 1.12 ], fq: 50
  },
  "mood": {
    dict: "happiness", word: "mood", stem: "mood", anew: "humor",
    avg: [ 5.5, 5.88 ], std: [ 2.91, 1.64 ], fq: 50
  },
  "primary": {
    dict: "happiness", word: "primary", stem: "primari", anew: "masterful",
    avg: [ 5.2, 5.88 ], std: [ 2.85, 1.12 ], fq: 50
  },
  "printed": {
    dict: "happiness", word: "printed", stem: "print", anew: "impressed",
    avg: [ 5.42, 5.88 ], std: [ 2.65, 0.96 ], fq: 50
  },
  "scout": {
    dict: "happiness", word: "scout", stem: "scout", anew: "watch",
    avg: [ 4.1, 5.88 ], std: [ 2.12, 1.1 ], fq: 50
  },
  "sequence": {
    dict: "happiness", word: "sequence", stem: "sequenc", anew: "success",
    avg: [ 6.11, 5.88 ], std: [ 2.65, 1.32 ], fq: 50
  },
  "sustained": {
    dict: "happiness", word: "sustained", stem: "sustain", anew: "nourish",
    avg: [ 4.29, 5.88 ], std: [ 2.51, 1.41 ], fq: 50
  },
  "whole": {
    dict: "happiness", word: "whole", stem: "whole", anew: "unit",
    avg: [ 3.75, 5.88 ], std: [ 2.49, 1.33 ], fq: 50
  },
  "demonstration": {
    dict: "happiness", word: "demonstration", stem: "demonstr", anew: "present",
    avg: [ 5.12, 5.88 ], std: [ 2.39, 1.22 ], fq: 50
  },
  "flex": {
    dict: "happiness", word: "flex", stem: "flex", anew: "deformed",
    avg: [ 4.07, 5.87 ], std: [ 2.34, 1.16 ], fq: 50
  },
  "arrangement": {
    dict: "happiness", word: "arrangement", stem: "arrang", anew: "agreement",
    avg: [ 5.02, 5.86 ], std: [ 2.24, 1.12 ], fq: 50
  },
  "bear": {
    dict: "happiness", word: "bear", stem: "bear", anew: "acceptance",
    avg: [ 5.4, 5.86 ], std: [ 2.7, 1.85 ], fq: 50
  },
  "figures": {
    dict: "happiness", word: "figures", stem: "figur", anew: "computer",
    avg: [ 4.75, 5.86 ], std: [ 1.93, 1.18 ], fq: 50
  },
  "hotter": {
    dict: "happiness", word: "hotter", stem: "hotter", anew: "blister",
    avg: [ 4.1, 5.86 ], std: [ 2.34, 1.54 ], fq: 50
  },
  "nut": {
    dict: "happiness", word: "nut", stem: "nut", anew: "addicted",
    avg: [ 4.81, 5.86 ], std: [ 2.46, 1.5 ], fq: 50
  },
  "president": {
    dict: "happiness", word: "president", stem: "presid", anew: "chair",
    avg: [ 3.15, 5.86 ], std: [ 1.77, 2.11 ], fq: 50
  },
  "variations": {
    dict: "happiness", word: "variations", stem: "variat", anew: "mutation",
    avg: [ 4.84, 5.86 ], std: [ 2.52, 1.2 ], fq: 50
  },
  "viewers": {
    dict: "happiness", word: "viewers", stem: "viewer", anew: "wit",
    avg: [ 5.42, 5.86 ], std: [ 2.44, 1.28 ], fq: 50
  },
  "wrapped": {
    dict: "happiness", word: "wrapped", stem: "wrap", anew: "clothing",
    avg: [ 4.78, 5.86 ], std: [ 2.88, 1.31 ], fq: 50
  },
  "autonomy": {
    dict: "happiness", word: "autonomy", stem: "autonomi", anew: "liberty",
    avg: [ 5.6, 5.86 ], std: [ 2.65, 1.59 ], fq: 50
  },
  "deeper": {
    dict: "happiness", word: "deeper", stem: "deeper", anew: "riches",
    avg: [ 6.17, 5.86 ], std: [ 2.7, 1.34 ], fq: 50
  },
  "construct": {
    dict: "happiness", word: "construct", stem: "construct", anew: "fabric",
    avg: [ 4.14, 5.85 ], std: [ 1.98, 1.52 ], fq: 50
  },
  "arena": {
    dict: "happiness", word: "arena", stem: "arena", anew: "sphere",
    avg: [ 3.88, 5.84 ], std: [ 1.99, 1.02 ], fq: 50
  },
  "classes": {
    dict: "happiness", word: "classes", stem: "class", anew: "family",
    avg: [ 4.8, 5.84 ], std: [ 2.71, 1.33 ], fq: 50
  },
  "coming": {
    dict: "happiness", word: "coming", stem: "come", anew: "orgasm",
    avg: [ 8.1, 5.84 ], std: [ 1.45, 1.2 ], fq: 50
  },
  "curry": {
    dict: "happiness", word: "curry", stem: "curri", anew: "dress",
    avg: [ 4.05, 5.84 ], std: [ 1.89, 1.82 ], fq: 50
  },
  "gravity": {
    dict: "happiness", word: "gravity", stem: "graviti", anew: "solemn",
    avg: [ 3.56, 5.84 ], std: [ 1.95, 1.58 ], fq: 50
  },
  "puff": {
    dict: "happiness", word: "puff", stem: "puff", anew: "comfort",
    avg: [ 3.93, 5.84 ], std: [ 2.85, 1.48 ], fq: 50
  },
  "really": {
    dict: "happiness", word: "really", stem: "realli", anew: "rattle",
    avg: [ 4.36, 5.84 ], std: [ 2.18, 1.49 ], fq: 50
  },
  "sample": {
    dict: "happiness", word: "sample", stem: "sampl", anew: "taste",
    avg: [ 5.22, 5.84 ], std: [ 2.38, 0.93 ], fq: 50
  },
  "stages": {
    dict: "happiness", word: "stages", stem: "stage", anew: "rat",
    avg: [ 4.95, 5.84 ], std: [ 2.36, 1.54 ], fq: 50
  },
  "absorption": {
    dict: "happiness", word: "absorption", stem: "absorpt", anew: "concentrate",
    avg: [ 4.65, 5.84 ], std: [ 2.13, 1.36 ], fq: 50
  },
  "examples": {
    dict: "happiness", word: "examples", stem: "exampl", anew: "exercise",
    avg: [ 6.84, 5.84 ], std: [ 2.06, 1.46 ], fq: 50
  },
  "emphasized": {
    dict: "happiness", word: "emphasized", stem: "emphas", anew: "stress",
    avg: [ 7.45, 5.82 ], std: [ 2.38, 1.44 ], fq: 50
  },
  "endowment": {
    dict: "happiness", word: "endowment", stem: "endow", anew: "talent",
    avg: [ 6.27, 5.82 ], std: [ 1.8, 1.51 ], fq: 50
  },
  "homey": {
    dict: "happiness", word: "homey", stem: "homey", anew: "home",
    avg: [ 4.21, 5.82 ], std: [ 2.94, 2.06 ], fq: 50
  },
  "involved": {
    dict: "happiness", word: "involved", stem: "involv", anew: "affection",
    avg: [ 6.21, 5.82 ], std: [ 2.75, 1.34 ], fq: 50
  },
  "met": {
    dict: "happiness", word: "met", stem: "met", anew: "satisfied",
    avg: [ 4.94, 5.82 ], std: [ 2.63, 0.92 ], fq: 50
  },
  "quickly": {
    dict: "happiness", word: "quickly", stem: "quickli", anew: "quick",
    avg: [ 6.57, 5.82 ], std: [ 1.78, 1.45 ], fq: 50
  },
  "sum": {
    dict: "happiness", word: "sum", stem: "sum", anew: "heart",
    avg: [ 6.34, 5.82 ], std: [ 2.25, 1.14 ], fq: 50
  },
  "acquisition": {
    dict: "happiness", word: "acquisition", stem: "acquisit", anew: "learn",
    avg: [ 5.39, 5.8 ], std: [ 2.22, 1.53 ], fq: 50
  },
  "double": {
    dict: "happiness", word: "double", stem: "doubl", anew: "fork",
    avg: [ 3.96, 5.8 ], std: [ 1.94, 1.37 ], fq: 50
  },
  "interior": {
    dict: "happiness", word: "interior", stem: "interior", anew: "home",
    avg: [ 4.21, 5.8 ], std: [ 2.94, 0.88 ], fq: 50
  },
  "known": {
    dict: "happiness", word: "known", stem: "known", anew: "loved",
    avg: [ 6.38, 5.8 ], std: [ 2.68, 1.39 ], fq: 50
  },
  "outside": {
    dict: "happiness", word: "outside", stem: "outsid", anew: "outdoors",
    avg: [ 5.92, 5.8 ], std: [ 2.55, 1.68 ], fq: 50
  },
  "pardon": {
    dict: "happiness", word: "pardon", stem: "pardon", anew: "excuse",
    avg: [ 4.48, 5.8 ], std: [ 2.29, 1.63 ], fq: 50
  },
  "practice": {
    dict: "happiness", word: "practice", stem: "practic", anew: "useful",
    avg: [ 4.26, 5.8 ], std: [ 2.47, 1.34 ], fq: 50
  },
  "rubber": {
    dict: "happiness", word: "rubber", stem: "rubber", anew: "safe",
    avg: [ 3.86, 5.8 ], std: [ 2.72, 1.36 ], fq: 50
  },
  "shaped": {
    dict: "happiness", word: "shaped", stem: "shape", anew: "mold",
    avg: [ 4.07, 5.8 ], std: [ 1.98, 1.21 ], fq: 50
  },
  "manufacture": {
    dict: "happiness", word: "manufacture", stem: "manufactur", anew: "fabric",
    avg: [ 4.14, 5.8 ], std: [ 1.98, 1.43 ], fq: 50
  },
  "arch": {
    dict: "happiness", word: "arch", stem: "arch", anew: "wicked",
    avg: [ 6.09, 5.79 ], std: [ 2.44, 1.31 ], fq: 50
  },
  "containing": {
    dict: "happiness", word: "containing", stem: "contain", anew: "controlling",
    avg: [ 6.1, 5.78 ], std: [ 2.19, 1 ], fq: 50
  },
  "fed": {
    dict: "happiness", word: "fed", stem: "fed", anew: "eat",
    avg: [ 5.69, 5.78 ], std: [ 2.51, 1.49 ], fq: 50
  },
  "hottest": {
    dict: "happiness", word: "hottest", stem: "hottest", anew: "blister",
    avg: [ 4.1, 5.78 ], std: [ 2.34, 2.19 ], fq: 50
  },
  "link": {
    dict: "happiness", word: "link", stem: "link", anew: "unit",
    avg: [ 3.75, 5.78 ], std: [ 2.49, 1.11 ], fq: 50
  },
  "plates": {
    dict: "happiness", word: "plates", stem: "plate", anew: "home",
    avg: [ 4.21, 5.78 ], std: [ 2.94, 1.33 ], fq: 50
  },
  "respond": {
    dict: "happiness", word: "respond", stem: "respond", anew: "answer",
    avg: [ 5.41, 5.78 ], std: [ 2.43, 1.06 ], fq: 50
  },
  "shuttle": {
    dict: "happiness", word: "shuttle", stem: "shuttl", anew: "bird",
    avg: [ 3.17, 5.78 ], std: [ 2.23, 0.93 ], fq: 50
  },
  "various": {
    dict: "happiness", word: "various", stem: "variou", anew: "respectful",
    avg: [ 4.6, 5.78 ], std: [ 2.67, 0.86 ], fq: 50
  },
  "sober": {
    dict: "happiness", word: "sober", stem: "sober", anew: "solemn",
    avg: [ 3.56, 5.78 ], std: [ 1.95, 1.98 ], fq: 50
  },
  "components": {
    dict: "happiness", word: "components", stem: "compon", anew: "part",
    avg: [ 3.82, 5.78 ], std: [ 2.24, 1.37 ], fq: 50
  },
  "describes": {
    dict: "happiness", word: "describes", stem: "describ", anew: "key",
    avg: [ 3.7, 5.76 ], std: [ 2.18, 1.08 ], fq: 50
  },
  "facilities": {
    dict: "happiness", word: "facilities", stem: "facil", anew: "quick",
    avg: [ 6.57, 5.76 ], std: [ 1.78, 1.45 ], fq: 50
  },
  "functions": {
    dict: "happiness", word: "functions", stem: "function", anew: "useful",
    avg: [ 4.26, 5.76 ], std: [ 2.47, 1.24 ], fq: 50
  },
  "probability": {
    dict: "happiness", word: "probability", stem: "probabl", anew: "chance",
    avg: [ 5.38, 5.76 ], std: [ 2.58, 1.25 ], fq: 50
  },
  "selling": {
    dict: "happiness", word: "selling", stem: "sell", anew: "betray",
    avg: [ 7.24, 5.76 ], std: [ 2.06, 1.59 ], fq: 50
  },
  "slide": {
    dict: "happiness", word: "slide", stem: "slide", anew: "coast",
    avg: [ 4.59, 5.76 ], std: [ 2.31, 1.22 ], fq: 50
  },
  "thoroughly": {
    dict: "happiness", word: "thoroughly", stem: "thoroughli", anew: "good",
    avg: [ 5.43, 5.76 ], std: [ 2.85, 1.44 ], fq: 50
  },
  "catch": {
    dict: "happiness", word: "catch", stem: "catch", anew: "fascinate",
    avg: [ 5.83, 5.74 ], std: [ 2.73, 1.38 ], fq: 50
  },
  "deep": {
    dict: "happiness", word: "deep", stem: "deep", anew: "riches",
    avg: [ 6.17, 5.74 ], std: [ 2.7, 1.4 ], fq: 50
  },
  "fundamental": {
    dict: "happiness", word: "fundamental", stem: "fundament", anew: "key",
    avg: [ 3.7, 5.74 ], std: [ 2.18, 0.96 ], fq: 50
  },
  "given": {
    dict: "happiness", word: "given", stem: "given", anew: "mind",
    avg: [ 5, 5.74 ], std: [ 2.68, 1.44 ], fq: 50
  },
  "kept": {
    dict: "happiness", word: "kept", stem: "kept", anew: "save",
    avg: [ 4.95, 5.74 ], std: [ 2.19, 1.1 ], fq: 50
  },
  "screen": {
    dict: "happiness", word: "screen", stem: "screen", anew: "blind",
    avg: [ 4.39, 5.74 ], std: [ 2.36, 1.26 ], fq: 50
  },
  "settled": {
    dict: "happiness", word: "settled", stem: "settl", anew: "fall",
    avg: [ 4.7, 5.74 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "spare": {
    dict: "happiness", word: "spare", stem: "spare", anew: "plain",
    avg: [ 3.52, 5.74 ], std: [ 2.05, 1.51 ], fq: 50
  },
  "swag": {
    dict: "happiness", word: "swag", stem: "swag", anew: "flag",
    avg: [ 4.6, 5.74 ], std: [ 2.35, 1.19 ], fq: 50
  },
  "thin": {
    dict: "happiness", word: "thin", stem: "thin", anew: "cut",
    avg: [ 5, 5.74 ], std: [ 2.32, 1.38 ], fq: 50
  },
  "wives": {
    dict: "happiness", word: "wives", stem: "wive", anew: "wife",
    avg: [ 4.93, 5.74 ], std: [ 2.22, 1.95 ], fq: 50
  },
  "pose": {
    dict: "happiness", word: "pose", stem: "pose", anew: "manner",
    avg: [ 4.56, 5.72 ], std: [ 1.78, 1.19 ], fq: 50
  },
  "apt": {
    dict: "happiness", word: "apt", stem: "apt", anew: "mind",
    avg: [ 5, 5.72 ], std: [ 2.68, 1.18 ], fq: 50
  },
  "click": {
    dict: "happiness", word: "click", stem: "click", anew: "dawn",
    avg: [ 4.39, 5.72 ], std: [ 2.81, 1.03 ], fq: 50
  },
  "funky": {
    dict: "happiness", word: "funky", stem: "funki", anew: "stink",
    avg: [ 4.26, 5.72 ], std: [ 2.1, 1.68 ], fq: 50
  },
  "happening": {
    dict: "happiness", word: "happening", stem: "happen", anew: "material",
    avg: [ 4.05, 5.72 ], std: [ 2.34, 1.01 ], fq: 50
  },
  "hypothesis": {
    dict: "happiness", word: "hypothesis", stem: "hypothesi", anew: "theory",
    avg: [ 4.62, 5.72 ], std: [ 1.94, 1.54 ], fq: 50
  },
  "implementation": {
    dict: "happiness", word: "implementation", stem: "implement", anew: "execution",
    avg: [ 5.71, 5.72 ], std: [ 2.74, 1.28 ], fq: 50
  },
  "move": {
    dict: "happiness", word: "move", stem: "move", anew: "travel",
    avg: [ 6.21, 5.72 ], std: [ 2.51, 1.36 ], fq: 50
  },
  "near": {
    dict: "happiness", word: "near", stem: "near", anew: "good",
    avg: [ 5.43, 5.72 ], std: [ 2.85, 1.6 ], fq: 50
  },
  "quietly": {
    dict: "happiness", word: "quietly", stem: "quietli", anew: "quiet",
    avg: [ 2.82, 5.72 ], std: [ 2.13, 1.4 ], fq: 50
  },
  "roles": {
    dict: "happiness", word: "roles", stem: "role", anew: "useful",
    avg: [ 4.26, 5.72 ], std: [ 2.47, 1.4 ], fq: 50
  },
  "script": {
    dict: "happiness", word: "script", stem: "script", anew: "book",
    avg: [ 4.17, 5.72 ], std: [ 2.49, 1.74 ], fq: 50
  },
  "source": {
    dict: "happiness", word: "source", stem: "sourc", anew: "germs",
    avg: [ 4.49, 5.72 ], std: [ 2.24, 1.21 ], fq: 50
  },
  "uses": {
    dict: "happiness", word: "uses", stem: "use", anew: "useful",
    avg: [ 4.26, 5.72 ], std: [ 2.47, 1.16 ], fq: 50
  },
  "scope": {
    dict: "happiness", word: "scope", stem: "scope", anew: "ambition",
    avg: [ 5.61, 5.71 ], std: [ 2.92, 1.41 ], fq: 50
  },
  "soil": {
    dict: "happiness", word: "soil", stem: "soil", anew: "filth",
    avg: [ 5.12, 5.71 ], std: [ 2.32, 1.65 ], fq: 50
  },
  "timber": {
    dict: "happiness", word: "timber", stem: "timber", anew: "quality",
    avg: [ 4.48, 5.71 ], std: [ 2.12, 1.5 ], fq: 50
  },
  "appointed": {
    dict: "happiness", word: "appointed", stem: "appoint", anew: "name",
    avg: [ 4.25, 5.7 ], std: [ 2.47, 1.42 ], fq: 50
  },
  "fill": {
    dict: "happiness", word: "fill", stem: "fill", anew: "satisfied",
    avg: [ 4.94, 5.7 ], std: [ 2.63, 1.23 ], fq: 50
  },
  "mild": {
    dict: "happiness", word: "mild", stem: "mild", anew: "soft",
    avg: [ 4.63, 5.7 ], std: [ 2.61, 1.5 ], fq: 50
  },
  "rally": {
    dict: "happiness", word: "rally", stem: "ralli", anew: "mobility",
    avg: [ 5, 5.7 ], std: [ 2.18, 1.25 ], fq: 50
  },
  "rolling": {
    dict: "happiness", word: "rolling", stem: "roll", anew: "revolver",
    avg: [ 5.55, 5.7 ], std: [ 2.39, 1.25 ], fq: 50
  },
  "thumb": {
    dict: "happiness", word: "thumb", stem: "thumb", anew: "finger",
    avg: [ 3.78, 5.7 ], std: [ 2.42, 1.36 ], fq: 50
  },
  "want": {
    dict: "happiness", word: "want", stem: "want", anew: "wish",
    avg: [ 5.16, 5.7 ], std: [ 2.62, 1.34 ], fq: 50
  },
  "written": {
    dict: "happiness", word: "written", stem: "written", anew: "save",
    avg: [ 4.95, 5.7 ], std: [ 2.19, 1.27 ], fq: 50
  },
  "dusk": {
    dict: "happiness", word: "dusk", stem: "dusk", anew: "fall",
    avg: [ 4.7, 5.69 ], std: [ 2.48, 1.63 ], fq: 50
  },
  "direct": {
    dict: "happiness", word: "direct", stem: "direct", anew: "engine",
    avg: [ 3.98, 5.68 ], std: [ 2.33, 1.33 ], fq: 50
  },
  "emphasis": {
    dict: "happiness", word: "emphasis", stem: "emphasi", anew: "stress",
    avg: [ 7.45, 5.68 ], std: [ 2.38, 1 ], fq: 50
  },
  "foreign": {
    dict: "happiness", word: "foreign", stem: "foreign", anew: "alien",
    avg: [ 5.45, 5.68 ], std: [ 2.15, 1.7 ], fq: 50
  },
  "grounds": {
    dict: "happiness", word: "grounds", stem: "ground", anew: "earth",
    avg: [ 4.24, 5.68 ], std: [ 2.49, 1.24 ], fq: 50
  },
  "publicity": {
    dict: "happiness", word: "publicity", stem: "public", anew: "promotion",
    avg: [ 6.44, 5.68 ], std: [ 2.58, 1.38 ], fq: 50
  },
  "pursue": {
    dict: "happiness", word: "pursue", stem: "pursu", anew: "engaged",
    avg: [ 6.77, 5.68 ], std: [ 2.07, 1.48 ], fq: 50
  },
  "sitting": {
    dict: "happiness", word: "sitting", stem: "sit", anew: "seat",
    avg: [ 2.95, 5.68 ], std: [ 1.72, 1.1 ], fq: 50
  },
  "suggests": {
    dict: "happiness", word: "suggests", stem: "suggest", anew: "intimate",
    avg: [ 6.98, 5.68 ], std: [ 2.21, 0.94 ], fq: 50
  },
  "saddle": {
    dict: "happiness", word: "saddle", stem: "saddl", anew: "burdened",
    avg: [ 5.63, 5.67 ], std: [ 2.07, 1.45 ], fq: 50
  },
  "tail": {
    dict: "happiness", word: "tail", stem: "tail", anew: "shadow",
    avg: [ 4.3, 5.67 ], std: [ 2.26, 1.51 ], fq: 50
  },
  "absorbed": {
    dict: "happiness", word: "absorbed", stem: "absorb", anew: "engaged",
    avg: [ 6.77, 5.66 ], std: [ 2.07, 1.48 ], fq: 50
  },
  "aspect": {
    dict: "happiness", word: "aspect", stem: "aspect", anew: "face",
    avg: [ 5.04, 5.66 ], std: [ 2.18, 1.06 ], fq: 50
  },
  "auto": {
    dict: "happiness", word: "auto", stem: "auto", anew: "machine",
    avg: [ 3.82, 5.66 ], std: [ 2.4, 1.59 ], fq: 50
  },
  "digest": {
    dict: "happiness", word: "digest", stem: "digest", anew: "concentrate",
    avg: [ 4.65, 5.66 ], std: [ 2.13, 1.49 ], fq: 50
  },
  "follow": {
    dict: "happiness", word: "follow", stem: "follow", anew: "watch",
    avg: [ 4.1, 5.66 ], std: [ 2.12, 1.17 ], fq: 50
  },
  "occupy": {
    dict: "happiness", word: "occupy", stem: "occupi", anew: "engaged",
    avg: [ 6.77, 5.66 ], std: [ 2.07, 1.56 ], fq: 50
  },
  "rode": {
    dict: "happiness", word: "rode", stem: "rode", anew: "tease",
    avg: [ 5.87, 5.66 ], std: [ 2.56, 1.12 ], fq: 50
  },
  "rugged": {
    dict: "happiness", word: "rugged", stem: "rug", anew: "broken",
    avg: [ 5.43, 5.66 ], std: [ 2.42, 1.67 ], fq: 50
  },
  "sake": {
    dict: "happiness", word: "sake", stem: "sake", anew: "interest",
    avg: [ 5.66, 5.66 ], std: [ 2.26, 1.47 ], fq: 50
  },
  "verse": {
    dict: "happiness", word: "verse", stem: "vers", anew: "poetry",
    avg: [ 4, 5.66 ], std: [ 2.85, 1.36 ], fq: 50
  },
  "doorway": {
    dict: "happiness", word: "doorway", stem: "doorway", anew: "door",
    avg: [ 3.8, 5.65 ], std: [ 2.29, 1.15 ], fq: 50
  },
  "height": {
    dict: "happiness", word: "height", stem: "height", anew: "elevator",
    avg: [ 4.16, 5.65 ], std: [ 1.99, 1.41 ], fq: 50
  },
  "asterisk": {
    dict: "happiness", word: "asterisk", stem: "asterisk", anew: "star",
    avg: [ 5.83, 5.64 ], std: [ 2.44, 1.21 ], fq: 50
  },
  "commons": {
    dict: "happiness", word: "commons", stem: "common", anew: "green",
    avg: [ 4.28, 5.64 ], std: [ 2.46, 1.35 ], fq: 50
  },
  "competition": {
    dict: "happiness", word: "competition", stem: "competit", anew: "contents",
    avg: [ 4.32, 5.64 ], std: [ 2.14, 1.7 ], fq: 50
  },
  "entitled": {
    dict: "happiness", word: "entitled", stem: "entitl", anew: "gentle",
    avg: [ 3.21, 5.64 ], std: [ 2.57, 1.51 ], fq: 50
  },
  "guess": {
    dict: "happiness", word: "guess", stem: "guess", anew: "imagine",
    avg: [ 5.98, 5.64 ], std: [ 2.14, 1.08 ], fq: 50
  },
  "layer": {
    dict: "happiness", word: "layer", stem: "layer", anew: "bed",
    avg: [ 3.61, 5.64 ], std: [ 2.56, 1.16 ], fq: 50
  },
  "lit": {
    dict: "happiness", word: "lit", stem: "lit", anew: "fall",
    avg: [ 4.7, 5.64 ], std: [ 2.48, 1.31 ], fq: 50
  },
  "portions": {
    dict: "happiness", word: "portions", stem: "portion", anew: "part",
    avg: [ 3.82, 5.64 ], std: [ 2.24, 1.26 ], fq: 50
  },
  "sheets": {
    dict: "happiness", word: "sheets", stem: "sheet", anew: "plane",
    avg: [ 6.14, 5.64 ], std: [ 2.39, 1.06 ], fq: 50
  },
  "venture": {
    dict: "happiness", word: "venture", stem: "ventur", anew: "adventure",
    avg: [ 6.98, 5.64 ], std: [ 2.15, 1.32 ], fq: 50
  },
  "wrote": {
    dict: "happiness", word: "wrote", stem: "wrote", anew: "save",
    avg: [ 4.95, 5.64 ], std: [ 2.19, 1.34 ], fq: 50
  },
  "comments": {
    dict: "happiness", word: "comments", stem: "comment", anew: "gossip",
    avg: [ 5.74, 5.62 ], std: [ 2.38, 1.05 ], fq: 50
  },
  "leaves": {
    dict: "happiness", word: "leaves", stem: "leav", anew: "part",
    avg: [ 3.82, 5.62 ], std: [ 2.24, 1.79 ], fq: 50
  },
  "pitch": {
    dict: "happiness", word: "pitch", stem: "pitch", anew: "sky",
    avg: [ 4.27, 5.62 ], std: [ 2.17, 1.35 ], fq: 50
  },
  "poll": {
    dict: "happiness", word: "poll", stem: "poll", anew: "crown",
    avg: [ 4.28, 5.62 ], std: [ 2.53, 1.34 ], fq: 50
  },
  "apparent": {
    dict: "happiness", word: "apparent", stem: "appar", anew: "patent",
    avg: [ 3.5, 5.6 ], std: [ 1.84, 1.07 ], fq: 50
  },
  "assembly": {
    dict: "happiness", word: "assembly", stem: "assembl", anew: "fabric",
    avg: [ 4.14, 5.6 ], std: [ 1.98, 1.09 ], fq: 50
  },
  "centers": {
    dict: "happiness", word: "centers", stem: "center", anew: "heart",
    avg: [ 6.34, 5.6 ], std: [ 2.25, 0.9 ], fq: 50
  },
  "central": {
    dict: "happiness", word: "central", stem: "central", anew: "key",
    avg: [ 3.7, 5.6 ], std: [ 2.18, 0.88 ], fq: 50
  },
  "combined": {
    dict: "happiness", word: "combined", stem: "combin", anew: "unit",
    avg: [ 3.75, 5.6 ], std: [ 2.49, 1.11 ], fq: 50
  },
  "entirely": {
    dict: "happiness", word: "entirely", stem: "entir", anew: "alone",
    avg: [ 4.83, 5.6 ], std: [ 2.66, 1.14 ], fq: 50
  },
  "got": {
    dict: "happiness", word: "got", stem: "got", anew: "father",
    avg: [ 5.92, 5.6 ], std: [ 2.6, 1.46 ], fq: 50
  },
  "immediate": {
    dict: "happiness", word: "immediate", stem: "immedi", anew: "quick",
    avg: [ 6.57, 5.6 ], std: [ 1.78, 1.67 ], fq: 50
  },
  "level": {
    dict: "happiness", word: "level", stem: "level", anew: "plane",
    avg: [ 6.14, 5.6 ], std: [ 2.39, 0.99 ], fq: 50
  },
  "stand": {
    dict: "happiness", word: "stand", stem: "stand", anew: "stomach",
    avg: [ 3.93, 5.6 ], std: [ 2.49, 1.11 ], fq: 50
  },
  "utilities": {
    dict: "happiness", word: "utilities", stem: "util", anew: "useful",
    avg: [ 4.26, 5.6 ], std: [ 2.47, 1.7 ], fq: 50
  },
  "constituted": {
    dict: "happiness", word: "constituted", stem: "constitut", anew: "plant",
    avg: [ 3.62, 5.59 ], std: [ 2.25, 1.14 ], fq: 50
  },
  "client": {
    dict: "happiness", word: "client", stem: "client", anew: "custom",
    avg: [ 4.66, 5.58 ], std: [ 2.12, 1.18 ], fq: 50
  },
  "feet": {
    dict: "happiness", word: "feet", stem: "feet", anew: "foot",
    avg: [ 3.27, 5.58 ], std: [ 1.98, 1.26 ], fq: 50
  },
  "formed": {
    dict: "happiness", word: "formed", stem: "form", anew: "spring",
    avg: [ 5.67, 5.58 ], std: [ 2.51, 1.16 ], fq: 50
  },
  "front": {
    dict: "happiness", word: "front", stem: "front", anew: "face",
    avg: [ 5.04, 5.58 ], std: [ 2.18, 1.07 ], fq: 50
  },
  "identify": {
    dict: "happiness", word: "identify", stem: "identifi", anew: "name",
    avg: [ 4.25, 5.58 ], std: [ 2.47, 1.36 ], fq: 50
  },
  "intro": {
    dict: "happiness", word: "intro", stem: "intro", anew: "present",
    avg: [ 5.12, 5.58 ], std: [ 2.39, 0.95 ], fq: 50
  },
  "pot": {
    dict: "happiness", word: "pot", stem: "pot", anew: "stool",
    avg: [ 4, 5.58 ], std: [ 2.14, 1.53 ], fq: 50
  },
  "pursuit": {
    dict: "happiness", word: "pursuit", stem: "pursuit", anew: "interest",
    avg: [ 5.66, 5.58 ], std: [ 2.26, 1.79 ], fq: 50
  },
  "returning": {
    dict: "happiness", word: "returning", stem: "return", anew: "fall",
    avg: [ 4.7, 5.58 ], std: [ 2.48, 1.47 ], fq: 50
  },
  "rooms": {
    dict: "happiness", word: "rooms", stem: "room", anew: "board",
    avg: [ 3.36, 5.58 ], std: [ 2.12, 0.91 ], fq: 50
  },
  "set": {
    dict: "happiness", word: "set", stem: "set", anew: "dress",
    avg: [ 4.05, 5.58 ], std: [ 1.89, 1.2 ], fq: 50
  },
  "shortly": {
    dict: "happiness", word: "shortly", stem: "shortli", anew: "present",
    avg: [ 5.12, 5.58 ], std: [ 2.39, 1.31 ], fq: 50
  },
  "solely": {
    dict: "happiness", word: "solely", stem: "sole", anew: "alone",
    avg: [ 4.83, 5.58 ], std: [ 2.66, 1.34 ], fq: 50
  },
  "stuff": {
    dict: "happiness", word: "stuff", stem: "stuff", anew: "material",
    avg: [ 4.05, 5.58 ], std: [ 2.34, 1.5 ], fq: 50
  },
  "density": {
    dict: "happiness", word: "density", stem: "densiti", anew: "concentrate",
    avg: [ 4.65, 5.57 ], std: [ 2.13, 1.2 ], fq: 50
  },
  "illusion": {
    dict: "happiness", word: "illusion", stem: "illus", anew: "fantasy",
    avg: [ 5.14, 5.56 ], std: [ 2.82, 1.5 ], fq: 50
  },
  "cap": {
    dict: "happiness", word: "cap", stem: "cap", anew: "crown",
    avg: [ 4.28, 5.56 ], std: [ 2.53, 0.93 ], fq: 50
  },
  "pan": {
    dict: "happiness", word: "pan", stem: "pan", anew: "trash",
    avg: [ 4.16, 5.56 ], std: [ 2.16, 0.84 ], fq: 50
  },
  "range": {
    dict: "happiness", word: "range", stem: "rang", anew: "stove",
    avg: [ 4.51, 5.56 ], std: [ 2.14, 1.01 ], fq: 50
  },
  "solo": {
    dict: "happiness", word: "solo", stem: "solo", anew: "alone",
    avg: [ 4.83, 5.56 ], std: [ 2.66, 1.37 ], fq: 50
  },
  "stepping": {
    dict: "happiness", word: "stepping", stem: "step", anew: "abuse",
    avg: [ 6.83, 5.56 ], std: [ 2.7, 0.99 ], fq: 50
  },
  "substance": {
    dict: "happiness", word: "substance", stem: "substanc", anew: "heart",
    avg: [ 6.34, 5.56 ], std: [ 2.25, 1.11 ], fq: 50
  },
  "woke": {
    dict: "happiness", word: "woke", stem: "woke", anew: "aroused",
    avg: [ 6.63, 5.56 ], std: [ 2.7, 1.42 ], fq: 50
  },
  "working": {
    dict: "happiness", word: "working", stem: "work", anew: "mold",
    avg: [ 4.07, 5.56 ], std: [ 1.98, 1.76 ], fq: 50
  },
  "calculations": {
    dict: "happiness", word: "calculations", stem: "calcul", anew: "computer",
    avg: [ 4.75, 5.55 ], std: [ 1.93, 1.6 ], fq: 50
  },
  "adam": {
    dict: "happiness", word: "adam", stem: "adam", anew: "ecstasy",
    avg: [ 7.38, 5.54 ], std: [ 1.92, 1.27 ], fq: 50
  },
  "box": {
    dict: "happiness", word: "box", stem: "box", anew: "corner",
    avg: [ 3.91, 5.54 ], std: [ 1.92, 0.89 ], fq: 50
  },
  "chest": {
    dict: "happiness", word: "chest", stem: "chest", anew: "breast",
    avg: [ 5.37, 5.54 ], std: [ 2.39, 0.97 ], fq: 50
  },
  "domain": {
    dict: "happiness", word: "domain", stem: "domain", anew: "sphere",
    avg: [ 3.88, 5.54 ], std: [ 1.99, 1.11 ], fq: 50
  },
  "firmly": {
    dict: "happiness", word: "firmly", stem: "firmli", anew: "secure",
    avg: [ 3.14, 5.54 ], std: [ 2.47, 1.23 ], fq: 50
  },
  "frame": {
    dict: "happiness", word: "frame", stem: "frame", anew: "building",
    avg: [ 3.92, 5.54 ], std: [ 1.94, 1.54 ], fq: 50
  },
  "handle": {
    dict: "happiness", word: "handle", stem: "handl", anew: "treat",
    avg: [ 5.62, 5.54 ], std: [ 2.25, 1.05 ], fq: 50
  },
  "lap": {
    dict: "happiness", word: "lap", stem: "lap", anew: "circle",
    avg: [ 3.86, 5.54 ], std: [ 2.13, 1.28 ], fq: 50
  },
  "mount": {
    dict: "happiness", word: "mount", stem: "mount", anew: "mountain",
    avg: [ 5.49, 5.54 ], std: [ 2.43, 1.27 ], fq: 50
  },
  "obviously": {
    dict: "happiness", word: "obviously", stem: "obvious", anew: "plain",
    avg: [ 3.52, 5.54 ], std: [ 2.05, 1.27 ], fq: 50
  },
  "panel": {
    dict: "happiness", word: "panel", stem: "panel", anew: "board",
    avg: [ 3.36, 5.54 ], std: [ 2.12, 1.28 ], fq: 50
  },
  "particular": {
    dict: "happiness", word: "particular", stem: "particular", anew: "detail",
    avg: [ 4.1, 5.54 ], std: [ 2.24, 1.13 ], fq: 50
  },
  "posted": {
    dict: "happiness", word: "posted", stem: "post", anew: "mail",
    avg: [ 5.63, 5.54 ], std: [ 2.36, 1.13 ], fq: 50
  },
  "regions": {
    dict: "happiness", word: "regions", stem: "region", anew: "part",
    avg: [ 3.82, 5.54 ], std: [ 2.24, 1.11 ], fq: 50
  },
  "round": {
    dict: "happiness", word: "round", stem: "round", anew: "circle",
    avg: [ 3.86, 5.54 ], std: [ 2.13, 0.95 ], fq: 50
  },
  "abstract": {
    dict: "happiness", word: "abstract", stem: "abstract", anew: "pinch",
    avg: [ 4.59, 5.53 ], std: [ 2.1, 1.44 ], fq: 50
  },
  "pipe": {
    dict: "happiness", word: "pipe", stem: "pipe", anew: "shriek",
    avg: [ 5.36, 5.53 ], std: [ 2.91, 1.39 ], fq: 50
  },
  "rely": {
    dict: "happiness", word: "rely", stem: "reli", anew: "trust",
    avg: [ 5.3, 5.53 ], std: [ 2.66, 1.46 ], fq: 50
  },
  "blazing": {
    dict: "happiness", word: "blazing", stem: "blaze", anew: "blind",
    avg: [ 4.39, 5.52 ], std: [ 2.36, 2.06 ], fq: 50
  },
  "categories": {
    dict: "happiness", word: "categories", stem: "categori", anew: "family",
    avg: [ 4.8, 5.52 ], std: [ 2.71, 1.23 ], fq: 50
  },
  "josh": {
    dict: "happiness", word: "josh", stem: "josh", anew: "jolly",
    avg: [ 5.57, 5.52 ], std: [ 2.8, 1.37 ], fq: 50
  },
  "summit": {
    dict: "happiness", word: "summit", stem: "summit", anew: "crown",
    avg: [ 4.28, 5.52 ], std: [ 2.53, 1.62 ], fq: 50
  },
  "usage": {
    dict: "happiness", word: "usage", stem: "usag", anew: "employment",
    avg: [ 5.28, 5.52 ], std: [ 2.12, 1.5 ], fq: 50
  },
  "account": {
    dict: "happiness", word: "account", stem: "account", anew: "history",
    avg: [ 3.93, 5.5 ], std: [ 2.29, 0.95 ], fq: 50
  },
  "capacity": {
    dict: "happiness", word: "capacity", stem: "capac", anew: "contents",
    avg: [ 4.32, 5.5 ], std: [ 2.14, 1.42 ], fq: 50
  },
  "chairwoman": {
    dict: "happiness", word: "chairwoman", stem: "chairwoman", anew: "chair",
    avg: [ 3.15, 5.5 ], std: [ 1.77, 1.18 ], fq: 50
  },
  "clay": {
    dict: "happiness", word: "clay", stem: "clay", anew: "corpse",
    avg: [ 4.74, 5.5 ], std: [ 2.94, 1.33 ], fq: 50
  },
  "genetic": {
    dict: "happiness", word: "genetic", stem: "genet", anew: "family",
    avg: [ 4.8, 5.5 ], std: [ 2.71, 1.25 ], fq: 50
  },
  "manifest": {
    dict: "happiness", word: "manifest", stem: "manifest", anew: "patent",
    avg: [ 3.5, 5.5 ], std: [ 1.84, 1.36 ], fq: 50
  },
  "minute": {
    dict: "happiness", word: "minute", stem: "minut", anew: "moment",
    avg: [ 3.83, 5.5 ], std: [ 2.29, 0.93 ], fq: 50
  },
  "ran": {
    dict: "happiness", word: "ran", stem: "ran", anew: "execution",
    avg: [ 5.71, 5.5 ], std: [ 2.74, 1.46 ], fq: 50
  },
  "skin": {
    dict: "happiness", word: "skin", stem: "skin", anew: "hide",
    avg: [ 5.28, 5.5 ], std: [ 2.51, 1.56 ], fq: 50
  },
  "tie": {
    dict: "happiness", word: "tie", stem: "tie", anew: "wedding",
    avg: [ 5.97, 5.5 ], std: [ 2.85, 1.18 ], fq: 50
  },
  "transmission": {
    dict: "happiness", word: "transmission", stem: "transmiss", anew: "infection",
    avg: [ 5.03, 5.5 ], std: [ 2.77, 1.33 ], fq: 50
  },
  "wild": {
    dict: "happiness", word: "wild", stem: "wild", anew: "waste",
    avg: [ 4.14, 5.5 ], std: [ 2.3, 1.81 ], fq: 50
  },
  "flame": {
    dict: "happiness", word: "flame", stem: "flame", anew: "fire",
    avg: [ 7.17, 5.49 ], std: [ 2.06, 1.73 ], fq: 50
  },
  "demo": {
    dict: "happiness", word: "demo", stem: "demo", anew: "present",
    avg: [ 5.12, 5.48 ], std: [ 2.39, 1.31 ], fq: 50
  },
  "encountered": {
    dict: "happiness", word: "encountered", stem: "encount", anew: "chance",
    avg: [ 5.38, 5.48 ], std: [ 2.58, 1.33 ], fq: 50
  },
  "felt": {
    dict: "happiness", word: "felt", stem: "felt", anew: "finger",
    avg: [ 3.78, 5.48 ], std: [ 2.42, 1.37 ], fq: 50
  },
  "led": {
    dict: "happiness", word: "led", stem: "led", anew: "chair",
    avg: [ 3.15, 5.48 ], std: [ 1.77, 1.13 ], fq: 50
  },
  "mark": {
    dict: "happiness", word: "mark", stem: "mark", anew: "scar",
    avg: [ 4.79, 5.48 ], std: [ 2.11, 1.3 ], fq: 50
  },
  "nose": {
    dict: "happiness", word: "nose", stem: "nose", anew: "intruder",
    avg: [ 6.86, 5.48 ], std: [ 2.41, 1.23 ], fq: 50
  },
  "tweet": {
    dict: "happiness", word: "tweet", stem: "tweet", anew: "pinch",
    avg: [ 4.59, 5.48 ], std: [ 2.1, 1.59 ], fq: 50
  },
  "dwell": {
    dict: "happiness", word: "dwell", stem: "dwell", anew: "lie",
    avg: [ 5.96, 5.47 ], std: [ 2.63, 1.66 ], fq: 50
  },
  "grip": {
    dict: "happiness", word: "grip", stem: "grip", anew: "fascinate",
    avg: [ 5.83, 5.47 ], std: [ 2.73, 1.71 ], fq: 50
  },
  "loaded": {
    dict: "happiness", word: "loaded", stem: "load", anew: "money",
    avg: [ 5.7, 5.47 ], std: [ 2.66, 1.84 ], fq: 50
  },
  "caption": {
    dict: "happiness", word: "caption", stem: "caption", anew: "legend",
    avg: [ 4.88, 5.46 ], std: [ 1.76, 0.84 ], fq: 50
  },
  "cavalry": {
    dict: "happiness", word: "cavalry", stem: "cavalri", anew: "horse",
    avg: [ 3.89, 5.46 ], std: [ 2.17, 1.73 ], fq: 50
  },
  "contract": {
    dict: "happiness", word: "contract", stem: "contract", anew: "cut",
    avg: [ 5, 5.46 ], std: [ 2.32, 1.11 ], fq: 50
  },
  "fox": {
    dict: "happiness", word: "fox", stem: "fox", anew: "confused",
    avg: [ 6.03, 5.46 ], std: [ 1.88, 1.72 ], fq: 50
  },
  "index": {
    dict: "happiness", word: "index", stem: "index", anew: "powerful",
    avg: [ 5.83, 5.46 ], std: [ 2.69, 1.23 ], fq: 50
  },
  "list": {
    dict: "happiness", word: "list", stem: "list", anew: "name",
    avg: [ 4.25, 5.46 ], std: [ 2.47, 0.86 ], fq: 50
  },
  "sent": {
    dict: "happiness", word: "sent", stem: "sent", anew: "mail",
    avg: [ 5.63, 5.46 ], std: [ 2.36, 0.91 ], fq: 50
  },
  "stacks": {
    dict: "happiness", word: "stacks", stem: "stack", anew: "mountain",
    avg: [ 5.49, 5.46 ], std: [ 2.43, 1.33 ], fq: 50
  },
  "notions": {
    dict: "happiness", word: "notions", stem: "notion", anew: "impressed",
    avg: [ 5.42, 5.46 ], std: [ 2.65, 1.13 ], fq: 50
  },
  "unfold": {
    dict: "happiness", word: "unfold", stem: "unfold", anew: "blossom",
    avg: [ 5.03, 5.46 ], std: [ 2.65, 1.32 ], fq: 50
  },
  "situations": {
    dict: "happiness", word: "situations", stem: "situat", anew: "office",
    avg: [ 4.08, 5.45 ], std: [ 1.92, 1.14 ], fq: 50
  },
  "sway": {
    dict: "happiness", word: "sway", stem: "sway", anew: "rock",
    avg: [ 4.52, 5.45 ], std: [ 2.37, 1.21 ], fq: 50
  },
  "drawers": {
    dict: "happiness", word: "drawers", stem: "drawer", anew: "boxer",
    avg: [ 5.12, 5.45 ], std: [ 2.26, 1.32 ], fq: 50
  },
  "area": {
    dict: "happiness", word: "area", stem: "area", anew: "field",
    avg: [ 4.08, 5.44 ], std: [ 2.41, 0.88 ], fq: 50
  },
  "assigned": {
    dict: "happiness", word: "assigned", stem: "assign", anew: "arrogant",
    avg: [ 5.65, 5.44 ], std: [ 2.23, 1.23 ], fq: 50
  },
  "bob": {
    dict: "happiness", word: "bob", stem: "bob", anew: "cork",
    avg: [ 3.8, 5.44 ], std: [ 2.18, 1.16 ], fq: 50
  },
  "centres": {
    dict: "happiness", word: "centres", stem: "centr", anew: "heart",
    avg: [ 6.34, 5.44 ], std: [ 2.25, 1.23 ], fq: 50
  },
  "charter": {
    dict: "happiness", word: "charter", stem: "charter", anew: "engaged",
    avg: [ 6.77, 5.44 ], std: [ 2.07, 0.93 ], fq: 50
  },
  "company": {
    dict: "happiness", word: "company", stem: "compani", anew: "party",
    avg: [ 6.69, 5.44 ], std: [ 2.84, 1.58 ], fq: 50
  },
  "deck": {
    dict: "happiness", word: "deck", stem: "deck", anew: "decorate",
    avg: [ 5.14, 5.44 ], std: [ 2.39, 1.39 ], fq: 50
  },
  "mass": {
    dict: "happiness", word: "mass", stem: "mass", anew: "mountain",
    avg: [ 5.49, 5.44 ], std: [ 2.43, 1.11 ], fq: 50
  },
  "saw": {
    dict: "happiness", word: "saw", stem: "saw", anew: "controlling",
    avg: [ 6.1, 5.44 ], std: [ 2.19, 0.81 ], fq: 50
  },
  "sept": {
    dict: "happiness", word: "sept", stem: "sept", anew: "family",
    avg: [ 4.8, 5.44 ], std: [ 2.71, 1.03 ], fq: 50
  },
  "storage": {
    dict: "happiness", word: "storage", stem: "storag", anew: "memory",
    avg: [ 5.42, 5.44 ], std: [ 2.25, 1.07 ], fq: 50
  },
  "subject": {
    dict: "happiness", word: "subject", stem: "subject", anew: "contents",
    avg: [ 4.32, 5.44 ], std: [ 2.14, 1.03 ], fq: 50
  },
  "tone": {
    dict: "happiness", word: "tone", stem: "tone", anew: "quality",
    avg: [ 4.48, 5.44 ], std: [ 2.12, 0.86 ], fq: 50
  },
  "trunk": {
    dict: "happiness", word: "trunk", stem: "trunk", anew: "trunk",
    avg: [ 4.18, 5.44 ], std: [ 2.19, 0.97 ], fq: 50
  },
  "yen": {
    dict: "happiness", word: "yen", stem: "yen", anew: "ache",
    avg: [ 5, 5.44 ], std: [ 2.45, 1.43 ], fq: 50
  },
  "modes": {
    dict: "happiness", word: "modes", stem: "mode", anew: "manner",
    avg: [ 4.56, 5.43 ], std: [ 1.78, 1.21 ], fq: 50
  },
  "came": {
    dict: "happiness", word: "came", stem: "came", anew: "fall",
    avg: [ 4.7, 5.42 ], std: [ 2.48, 1.42 ], fq: 50
  },
  "course": {
    dict: "happiness", word: "course", stem: "cours", anew: "nature",
    avg: [ 4.37, 5.42 ], std: [ 2.51, 1.37 ], fq: 50
  },
  "crow": {
    dict: "happiness", word: "crow", stem: "crow", anew: "triumph",
    avg: [ 5.78, 5.42 ], std: [ 2.6, 1.68 ], fq: 50
  },
  "derived": {
    dict: "happiness", word: "derived", stem: "deriv", anew: "education",
    avg: [ 5.74, 5.42 ], std: [ 2.46, 1.21 ], fq: 50
  },
  "floors": {
    dict: "happiness", word: "floors", stem: "floor", anew: "dump",
    avg: [ 4.12, 5.42 ], std: [ 2.36, 0.84 ], fq: 50
  },
  "gotten": {
    dict: "happiness", word: "gotten", stem: "gotten", anew: "father",
    avg: [ 5.92, 5.42 ], std: [ 2.6, 1.39 ], fq: 50
  },
  "inner": {
    dict: "happiness", word: "inner", stem: "inner", anew: "intimate",
    avg: [ 6.98, 5.42 ], std: [ 2.21, 1.03 ], fq: 50
  },
  "mentioned": {
    dict: "happiness", word: "mentioned", stem: "mention", anew: "name",
    avg: [ 4.25, 5.42 ], std: [ 2.47, 1.11 ], fq: 50
  },
  "nowadays": {
    dict: "happiness", word: "nowadays", stem: "nowaday", anew: "present",
    avg: [ 5.12, 5.42 ], std: [ 2.39, 1.46 ], fq: 50
  },
  "peter": {
    dict: "happiness", word: "peter", stem: "peter", anew: "prick",
    avg: [ 4.7, 5.42 ], std: [ 2.59, 1.05 ], fq: 50
  },
  "tell": {
    dict: "happiness", word: "tell", stem: "tell", anew: "severe",
    avg: [ 5.26, 5.42 ], std: [ 2.36, 1.03 ], fq: 50
  },
  "toss": {
    dict: "happiness", word: "toss", stem: "toss", anew: "sky",
    avg: [ 4.27, 5.42 ], std: [ 2.17, 1.37 ], fq: 50
  },
  "boldface": {
    dict: "happiness", word: "boldface", stem: "boldfac", anew: "bold",
    avg: [ 5.6, 5.4 ], std: [ 2.21, 1.09 ], fq: 50
  },
  "cast": {
    dict: "happiness", word: "cast", stem: "cast", anew: "mold",
    avg: [ 4.07, 5.4 ], std: [ 1.98, 1.37 ], fq: 50
  },
  "claimed": {
    dict: "happiness", word: "claimed", stem: "claim", anew: "arrogant",
    avg: [ 5.65, 5.4 ], std: [ 2.23, 1.18 ], fq: 50
  },
  "consecutive": {
    dict: "happiness", word: "consecutive", stem: "consecut", anew: "success",
    avg: [ 6.11, 5.4 ], std: [ 2.65, 1.16 ], fq: 50
  },
  "document": {
    dict: "happiness", word: "document", stem: "document", anew: "paper",
    avg: [ 2.5, 5.4 ], std: [ 1.85, 1.23 ], fq: 50
  },
  "estimate": {
    dict: "happiness", word: "estimate", stem: "estim", anew: "idea",
    avg: [ 5.86, 5.4 ], std: [ 1.81, 0.99 ], fq: 50
  },
  "fuel": {
    dict: "happiness", word: "fuel", stem: "fuel", anew: "fire",
    avg: [ 7.17, 5.4 ], std: [ 2.06, 1.18 ], fq: 50
  },
  "intent": {
    dict: "happiness", word: "intent", stem: "intent", anew: "spirit",
    avg: [ 5.56, 5.4 ], std: [ 2.62, 1.46 ], fq: 50
  },
  "main": {
    dict: "happiness", word: "main", stem: "main", anew: "masterful",
    avg: [ 5.2, 5.4 ], std: [ 2.85, 1.21 ], fq: 50
  },
  "putting": {
    dict: "happiness", word: "putting", stem: "put", anew: "invest",
    avg: [ 5.12, 5.4 ], std: [ 2.42, 1.09 ], fq: 50
  },
  "seen": {
    dict: "happiness", word: "seen", stem: "seen", anew: "controlling",
    avg: [ 6.1, 5.4 ], std: [ 2.19, 1.2 ], fq: 50
  },
  "tap": {
    dict: "happiness", word: "tap", stem: "tap", anew: "hydrant",
    avg: [ 3.71, 5.4 ], std: [ 1.75, 1.23 ], fq: 50
  },
  "basis": {
    dict: "happiness", word: "basis", stem: "basi", anew: "foot",
    avg: [ 3.27, 5.38 ], std: [ 1.98, 1.01 ], fq: 50
  },
  "rope": {
    dict: "happiness", word: "rope", stem: "rope", anew: "circle",
    avg: [ 3.86, 5.38 ], std: [ 2.13, 1.26 ], fq: 50
  },
  "second": {
    dict: "happiness", word: "second", stem: "second", anew: "moment",
    avg: [ 3.83, 5.38 ], std: [ 2.29, 1.19 ], fq: 50
  },
  "standards": {
    dict: "happiness", word: "standards", stem: "standard", anew: "banner",
    avg: [ 3.83, 5.38 ], std: [ 1.95, 1.09 ], fq: 50
  },
  "tricks": {
    dict: "happiness", word: "tricks", stem: "trick", anew: "magical",
    avg: [ 5.95, 5.38 ], std: [ 2.36, 1.52 ], fq: 50
  },
  "clip": {
    dict: "happiness", word: "clip", stem: "clip", anew: "dress",
    avg: [ 4.05, 5.36 ], std: [ 1.89, 1.26 ], fq: 50
  },
  "edit": {
    dict: "happiness", word: "edit", stem: "edit", anew: "cut",
    avg: [ 5, 5.36 ], std: [ 2.32, 1.17 ], fq: 50
  },
  "heard": {
    dict: "happiness", word: "heard", stem: "heard", anew: "learn",
    avg: [ 5.39, 5.36 ], std: [ 2.22, 0.8 ], fq: 50
  },
  "liquor": {
    dict: "happiness", word: "liquor", stem: "liquor", anew: "spirit",
    avg: [ 5.56, 5.36 ], std: [ 2.62, 2.28 ], fq: 50
  },
  "press": {
    dict: "happiness", word: "press", stem: "press", anew: "pressure",
    avg: [ 6.07, 5.36 ], std: [ 2.26, 1.22 ], fq: 50
  },
  "principal": {
    dict: "happiness", word: "principal", stem: "princip", anew: "star",
    avg: [ 5.83, 5.36 ], std: [ 2.44, 1.4 ], fq: 50
  },
  "sold": {
    dict: "happiness", word: "sold", stem: "sold", anew: "betray",
    avg: [ 7.24, 5.36 ], std: [ 2.06, 1.29 ], fq: 50
  },
  "loot": {
    dict: "happiness", word: "loot", stem: "loot", anew: "sugar",
    avg: [ 5.64, 5.35 ], std: [ 2.18, 2.09 ], fq: 50
  },
  "backs": {
    dict: "happiness", word: "backs", stem: "back", anew: "game",
    avg: [ 5.89, 5.34 ], std: [ 2.37, 1.44 ], fq: 50
  },
  "campaign": {
    dict: "happiness", word: "campaign", stem: "campaign", anew: "fight",
    avg: [ 7.15, 5.34 ], std: [ 2.19, 1.55 ], fq: 50
  },
  "crossing": {
    dict: "happiness", word: "crossing", stem: "cross", anew: "frustrated",
    avg: [ 5.61, 5.34 ], std: [ 2.76, 1.33 ], fq: 50
  },
  "currently": {
    dict: "happiness", word: "currently", stem: "current", anew: "present",
    avg: [ 5.12, 5.34 ], std: [ 2.39, 0.82 ], fq: 50
  },
  "drank": {
    dict: "happiness", word: "drank", stem: "drank", anew: "salute",
    avg: [ 5.31, 5.34 ], std: [ 2.23, 1.47 ], fq: 50
  },
  "editorial": {
    dict: "happiness", word: "editorial", stem: "editori", anew: "column",
    avg: [ 3.62, 5.34 ], std: [ 1.91, 1.36 ], fq: 50
  },
  "flick": {
    dict: "happiness", word: "flick", stem: "flick", anew: "movie",
    avg: [ 4.93, 5.34 ], std: [ 2.54, 1.36 ], fq: 50
  },
  "middle": {
    dict: "happiness", word: "middle", stem: "middl", anew: "heart",
    avg: [ 6.34, 5.34 ], std: [ 2.25, 0.72 ], fq: 50
  },
  "moderate": {
    dict: "happiness", word: "moderate", stem: "moder", anew: "controlling",
    avg: [ 6.1, 5.34 ], std: [ 2.19, 1.27 ], fq: 50
  },
  "physician": {
    dict: "happiness", word: "physician", stem: "physician", anew: "doctor",
    avg: [ 5.86, 5.34 ], std: [ 2.7, 1.84 ], fq: 50
  },
  "transmitted": {
    dict: "happiness", word: "transmitted", stem: "transmit", anew: "family",
    avg: [ 4.8, 5.34 ], std: [ 2.71, 1.57 ], fq: 50
  },
  "blink": {
    dict: "happiness", word: "blink", stem: "blink", anew: "wink",
    avg: [ 5.44, 5.33 ], std: [ 2.68, 1.43 ], fq: 50
  },
  "threshold": {
    dict: "happiness", word: "threshold", stem: "threshold", anew: "door",
    avg: [ 3.8, 5.33 ], std: [ 2.29, 1.48 ], fq: 50
  },
  "deepest": {
    dict: "happiness", word: "deepest", stem: "deepest", anew: "riches",
    avg: [ 6.17, 5.32 ], std: [ 2.7, 1.45 ], fq: 50
  },
  "firm": {
    dict: "happiness", word: "firm", stem: "firm", anew: "house",
    avg: [ 4.56, 5.32 ], std: [ 2.41, 1.17 ], fq: 50
  },
  "measure": {
    dict: "happiness", word: "measure", stem: "measur", anew: "bar",
    avg: [ 5, 5.32 ], std: [ 2.83, 1.1 ], fq: 50
  },
  "partly": {
    dict: "happiness", word: "partly", stem: "partli", anew: "part",
    avg: [ 3.82, 5.32 ], std: [ 2.24, 1.17 ], fq: 50
  },
  "rebounds": {
    dict: "happiness", word: "rebounds", stem: "rebound", anew: "spring",
    avg: [ 5.67, 5.32 ], std: [ 2.51, 1.32 ], fq: 50
  },
  "review": {
    dict: "happiness", word: "review", stem: "review", anew: "refreshment",
    avg: [ 4.45, 5.32 ], std: [ 2.7, 1.02 ], fq: 50
  },
  "skip": {
    dict: "happiness", word: "skip", stem: "skip", anew: "cut",
    avg: [ 5, 5.32 ], std: [ 2.32, 1.46 ], fq: 50
  },
  "taking": {
    dict: "happiness", word: "taking", stem: "take", anew: "learn",
    avg: [ 5.39, 5.32 ], std: [ 2.22, 1.3 ], fq: 50
  },
  "turning": {
    dict: "happiness", word: "turning", stem: "turn", anew: "deformed",
    avg: [ 4.07, 5.32 ], std: [ 2.34, 1.02 ], fq: 50
  },
  "consume": {
    dict: "happiness", word: "consume", stem: "consum", anew: "waste",
    avg: [ 4.14, 5.31 ], std: [ 2.3, 1.88 ], fq: 50
  },
  "heed": {
    dict: "happiness", word: "heed", stem: "heed", anew: "mind",
    avg: [ 5, 5.31 ], std: [ 2.68, 1.21 ], fq: 50
  },
  "chairman": {
    dict: "happiness", word: "chairman", stem: "chairman", anew: "chair",
    avg: [ 3.15, 5.3 ], std: [ 1.77, 1.47 ], fq: 50
  },
  "circuits": {
    dict: "happiness", word: "circuits", stem: "circuit", anew: "circle",
    avg: [ 3.86, 5.3 ], std: [ 2.13, 0.76 ], fq: 50
  },
  "md": {
    dict: "happiness", word: "md", stem: "md", anew: "doctor",
    avg: [ 5.86, 5.3 ], std: [ 2.7, 1.13 ], fq: 50
  },
  "miles": {
    dict: "happiness", word: "miles", stem: "mile", anew: "knot",
    avg: [ 4.07, 5.3 ], std: [ 2.15, 1.17 ], fq: 50
  },
  "patch": {
    dict: "happiness", word: "patch", stem: "patch", anew: "bandage",
    avg: [ 3.9, 5.3 ], std: [ 2.07, 1.04 ], fq: 50
  },
  "pounds": {
    dict: "happiness", word: "pounds", stem: "pound", anew: "hammer",
    avg: [ 4.58, 5.3 ], std: [ 2.02, 1.82 ], fq: 50
  },
  "randy": {
    dict: "happiness", word: "randy", stem: "randi", anew: "aroused",
    avg: [ 6.63, 5.3 ], std: [ 2.7, 1.36 ], fq: 50
  },
  "singular": {
    dict: "happiness", word: "singular", stem: "singular", anew: "odd",
    avg: [ 4.27, 5.3 ], std: [ 2.46, 1.45 ], fq: 50
  },
  "somebody": {
    dict: "happiness", word: "somebody", stem: "somebodi", anew: "person",
    avg: [ 4.19, 5.3 ], std: [ 2.45, 1.13 ], fq: 50
  },
  "someone": {
    dict: "happiness", word: "someone", stem: "someon", anew: "person",
    avg: [ 4.19, 5.3 ], std: [ 2.45, 1.17 ], fq: 50
  },
  "transition": {
    dict: "happiness", word: "transition", stem: "transit", anew: "passage",
    avg: [ 4.36, 5.3 ], std: [ 2.13, 1.36 ], fq: 50
  },
  "trump": {
    dict: "happiness", word: "trump", stem: "trump", anew: "trumpet",
    avg: [ 4.97, 5.3 ], std: [ 2.13, 1.71 ], fq: 50
  },
  "ways": {
    dict: "happiness", word: "ways", stem: "way", anew: "manner",
    avg: [ 4.56, 5.3 ], std: [ 1.78, 1.17 ], fq: 50
  },
  "held": {
    dict: "happiness", word: "held", stem: "held", anew: "controlling",
    avg: [ 6.1, 5.28 ], std: [ 2.19, 1.28 ], fq: 50
  },
  "institute": {
    dict: "happiness", word: "institute", stem: "institut", anew: "plant",
    avg: [ 3.62, 5.28 ], std: [ 2.25, 1.41 ], fq: 50
  },
  "james": {
    dict: "happiness", word: "james", stem: "jame", anew: "crushed",
    avg: [ 5.52, 5.28 ], std: [ 2.87, 1.07 ], fq: 50
  },
  "section": {
    dict: "happiness", word: "section", stem: "section", anew: "part",
    avg: [ 3.82, 5.28 ], std: [ 2.24, 0.83 ], fq: 50
  },
  "sort": {
    dict: "happiness", word: "sort", stem: "sort", anew: "kindness",
    avg: [ 4.3, 5.28 ], std: [ 2.62, 0.83 ], fq: 50
  },
  "tracks": {
    dict: "happiness", word: "tracks", stem: "track", anew: "dog",
    avg: [ 5.76, 5.28 ], std: [ 2.5, 1.11 ], fq: 50
  },
  "wandering": {
    dict: "happiness", word: "wandering", stem: "wander", anew: "mobility",
    avg: [ 5, 5.28 ], std: [ 2.18, 1.73 ], fq: 50
  },
  "agency": {
    dict: "happiness", word: "agency", stem: "agenc", anew: "office",
    avg: [ 4.08, 5.26 ], std: [ 1.92, 0.92 ], fq: 50
  },
  "bid": {
    dict: "happiness", word: "bid", stem: "bid", anew: "wish",
    avg: [ 5.16, 5.26 ], std: [ 2.62, 1.19 ], fq: 50
  },
  "goes": {
    dict: "happiness", word: "goes", stem: "goe", anew: "ecstasy",
    avg: [ 7.38, 5.26 ], std: [ 1.92, 1.12 ], fq: 50
  },
  "lines": {
    dict: "happiness", word: "lines", stem: "line", anew: "melody",
    avg: [ 4.98, 5.26 ], std: [ 2.52, 1.01 ], fq: 50
  },
  "nearly": {
    dict: "happiness", word: "nearly", stem: "nearli", anew: "intimate",
    avg: [ 6.98, 5.26 ], std: [ 2.21, 1.24 ], fq: 50
  },
  "piece": {
    dict: "happiness", word: "piece", stem: "piec", anew: "part",
    avg: [ 3.82, 5.26 ], std: [ 2.24, 1.07 ], fq: 50
  },
  "plot": {
    dict: "happiness", word: "plot", stem: "plot", anew: "game",
    avg: [ 5.89, 5.26 ], std: [ 2.37, 1.38 ], fq: 50
  },
  "shift": {
    dict: "happiness", word: "shift", stem: "shift", anew: "fault",
    avg: [ 4.07, 5.26 ], std: [ 1.69, 1.05 ], fq: 50
  },
  "spot": {
    dict: "happiness", word: "spot", stem: "spot", anew: "office",
    avg: [ 4.08, 5.26 ], std: [ 1.92, 1.47 ], fq: 50
  },
  "partially": {
    dict: "happiness", word: "partially", stem: "partial", anew: "part",
    avg: [ 3.82, 5.24 ], std: [ 2.24, 1.3 ], fq: 50
  },
  "sat": {
    dict: "happiness", word: "sat", stem: "sat", anew: "seat",
    avg: [ 2.95, 5.24 ], std: [ 1.72, 1.33 ], fq: 50
  },
  "wee": {
    dict: "happiness", word: "wee", stem: "wee", anew: "urine",
    avg: [ 4.2, 5.24 ], std: [ 2.18, 1.52 ], fq: 50
  },
  "bits": {
    dict: "happiness", word: "bits", stem: "bit", anew: "moment",
    avg: [ 3.83, 5.22 ], std: [ 2.29, 0.86 ], fq: 50
  },
  "cause": {
    dict: "happiness", word: "cause", stem: "caus", anew: "lawsuit",
    avg: [ 4.93, 5.22 ], std: [ 2.44, 1.06 ], fq: 50
  },
  "pump": {
    dict: "happiness", word: "pump", stem: "pump", anew: "heart",
    avg: [ 6.34, 5.22 ], std: [ 2.25, 1.07 ], fq: 50
  },
  "swallow": {
    dict: "happiness", word: "swallow", stem: "swallow", anew: "acceptance",
    avg: [ 5.4, 5.22 ], std: [ 2.7, 1.58 ], fq: 50
  },
  "trance": {
    dict: "happiness", word: "trance", stem: "tranc", anew: "fascinate",
    avg: [ 5.83, 5.22 ], std: [ 2.73, 1.72 ], fq: 50
  },
  "twist": {
    dict: "happiness", word: "twist", stem: "twist", anew: "pervert",
    avg: [ 6.26, 5.21 ], std: [ 2.61, 1.38 ], fq: 50
  },
  "cab": {
    dict: "happiness", word: "cab", stem: "cab", anew: "taxi",
    avg: [ 3.41, 5.2 ], std: [ 2.14, 1.53 ], fq: 50
  },
  "internal": {
    dict: "happiness", word: "internal", stem: "intern", anew: "intimate",
    avg: [ 6.98, 5.2 ], std: [ 2.21, 1.31 ], fq: 50
  },
  "jaw": {
    dict: "happiness", word: "jaw", stem: "jaw", anew: "gossip",
    avg: [ 5.74, 5.2 ], std: [ 2.38, 1.34 ], fq: 50
  },
  "percentage": {
    dict: "happiness", word: "percentage", stem: "percentag", anew: "part",
    avg: [ 3.82, 5.2 ], std: [ 2.24, 0.81 ], fq: 50
  },
  "snap": {
    dict: "happiness", word: "snap", stem: "snap", anew: "breeze",
    avg: [ 4.37, 5.2 ], std: [ 2.32, 1.63 ], fq: 50
  },
  "tighter": {
    dict: "happiness", word: "tighter", stem: "tighter", anew: "nasty",
    avg: [ 4.89, 5.2 ], std: [ 2.5, 1.44 ], fq: 50
  },
  "basement": {
    dict: "happiness", word: "basement", stem: "basement", anew: "cellar",
    avg: [ 4.39, 5.18 ], std: [ 2.33, 1.02 ], fq: 50
  },
  "collar": {
    dict: "happiness", word: "collar", stem: "collar", anew: "pinch",
    avg: [ 4.59, 5.18 ], std: [ 2.1, 1.32 ], fq: 50
  },
  "horn": {
    dict: "happiness", word: "horn", stem: "horn", anew: "trumpet",
    avg: [ 4.97, 5.18 ], std: [ 2.13, 1.42 ], fq: 50
  },
  "plug": {
    dict: "happiness", word: "plug", stem: "plug", anew: "secure",
    avg: [ 3.14, 5.18 ], std: [ 2.47, 1.02 ], fq: 50
  },
  "urge": {
    dict: "happiness", word: "urge", stem: "urg", anew: "inspired",
    avg: [ 6.02, 5.18 ], std: [ 2.67, 1.3 ], fq: 50
  },
  "spine": {
    dict: "happiness", word: "spine", stem: "spine", anew: "thorn",
    avg: [ 5.14, 5.16 ], std: [ 2.14, 1.28 ], fq: 50
  },
  "dos": {
    dict: "happiness", word: "dos", stem: "do", anew: "execution",
    avg: [ 5.71, 5.16 ], std: [ 2.74, 1.33 ], fq: 50
  },
  "notice": {
    dict: "happiness", word: "notice", stem: "notic", anew: "poster",
    avg: [ 3.93, 5.16 ], std: [ 2.56, 1.5 ], fq: 50
  },
  "remaining": {
    dict: "happiness", word: "remaining", stem: "remain", anew: "odd",
    avg: [ 4.27, 5.16 ], std: [ 2.46, 1.28 ], fq: 50
  },
  "posterior": {
    dict: "happiness", word: "posterior", stem: "posterior", anew: "seat",
    avg: [ 2.95, 5.15 ], std: [ 1.72, 1.44 ], fq: 50
  },
  "hypnotized": {
    dict: "happiness", word: "hypnotized", stem: "hypnot", anew: "fascinate",
    avg: [ 5.83, 5.14 ], std: [ 2.73, 1.46 ], fq: 50
  },
  "shake": {
    dict: "happiness", word: "shake", stem: "shake", anew: "excitement",
    avg: [ 7.67, 5.14 ], std: [ 1.91, 1.2 ], fq: 50
  },
  "still": {
    dict: "happiness", word: "still", stem: "still", anew: "smooth",
    avg: [ 4.91, 5.14 ], std: [ 2.57, 1.12 ], fq: 50
  },
  "supposed": {
    dict: "happiness", word: "supposed", stem: "suppos", anew: "imagine",
    avg: [ 5.98, 5.14 ], std: [ 2.14, 1.12 ], fq: 50
  },
  "wet": {
    dict: "happiness", word: "wet", stem: "wet", anew: "stiff",
    avg: [ 4.02, 5.14 ], std: [ 2.41, 1.41 ], fq: 50
  },
  "yearning": {
    dict: "happiness", word: "yearning", stem: "yearn", anew: "ache",
    avg: [ 5, 5.14 ], std: [ 2.45, 1.57 ], fq: 50
  },
  "bare": {
    dict: "happiness", word: "bare", stem: "bare", anew: "naked",
    avg: [ 5.8, 5.12 ], std: [ 2.8, 1.72 ], fq: 50
  },
  "cops": {
    dict: "happiness", word: "cops", stem: "cop", anew: "pig",
    avg: [ 4.2, 5.12 ], std: [ 2.42, 1.85 ], fq: 50
  },
  "rear": {
    dict: "happiness", word: "rear", stem: "rear", anew: "seat",
    avg: [ 2.95, 5.12 ], std: [ 1.72, 1.47 ], fq: 50
  },
  "side": {
    dict: "happiness", word: "side", stem: "side", anew: "face",
    avg: [ 5.04, 5.12 ], std: [ 2.18, 0.72 ], fq: 50
  },
  "single": {
    dict: "happiness", word: "single", stem: "singl", anew: "ace",
    avg: [ 5.5, 5.12 ], std: [ 2.66, 1.52 ], fq: 50
  },
  "bases": {
    dict: "happiness", word: "bases", stem: "base", anew: "foot",
    avg: [ 3.27, 5.1 ], std: [ 1.98, 1.04 ], fq: 50
  },
  "butt": {
    dict: "happiness", word: "butt", stem: "butt", anew: "seat",
    avg: [ 2.95, 5.1 ], std: [ 1.72, 1.85 ], fq: 50
  },
  "consumption": {
    dict: "happiness", word: "consumption", stem: "consumpt", anew: "useful",
    avg: [ 4.26, 5.1 ], std: [ 2.47, 1.8 ], fq: 50
  },
  "dealt": {
    dict: "happiness", word: "dealt", stem: "dealt", anew: "treat",
    avg: [ 5.62, 5.1 ], std: [ 2.25, 1.25 ], fq: 50
  },
  "merger": {
    dict: "happiness", word: "merger", stem: "merger", anew: "unit",
    avg: [ 3.75, 5.1 ], std: [ 2.49, 1.02 ], fq: 50
  },
  "pin": {
    dict: "happiness", word: "pin", stem: "pin", anew: "flag",
    avg: [ 4.6, 5.1 ], std: [ 2.35, 0.89 ], fq: 50
  },
  "hump": {
    dict: "happiness", word: "hump", stem: "hump", anew: "loved",
    avg: [ 6.38, 5.08 ], std: [ 2.68, 1.74 ], fq: 50
  },
  "trace": {
    dict: "happiness", word: "trace", stem: "trace", anew: "shadow",
    avg: [ 4.3, 5.08 ], std: [ 2.26, 1.22 ], fq: 50
  },
  "assuming": {
    dict: "happiness", word: "assuming", stem: "assum", anew: "acceptance",
    avg: [ 5.4, 5.08 ], std: [ 2.7, 1.41 ], fq: 50
  },
  "neutral": {
    dict: "happiness", word: "neutral", stem: "neutral", anew: "indifferent",
    avg: [ 3.18, 5.08 ], std: [ 1.85, 1.11 ], fq: 50
  },
  "admitted": {
    dict: "happiness", word: "admitted", stem: "admit", anew: "acceptance",
    avg: [ 5.4, 5.08 ], std: [ 2.7, 1.35 ], fq: 50
  },
  "buss": {
    dict: "happiness", word: "buss", stem: "buss", anew: "kiss",
    avg: [ 7.32, 5.08 ], std: [ 2.03, 1.37 ], fq: 50
  },
  "john": {
    dict: "happiness", word: "john", stem: "john", anew: "bathroom",
    avg: [ 3.88, 5.08 ], std: [ 1.72, 1.16 ], fq: 50
  },
  "might": {
    dict: "happiness", word: "might", stem: "might", anew: "mighty",
    avg: [ 5.61, 5.08 ], std: [ 2.38, 1.23 ], fq: 50
  },
  "noted": {
    dict: "happiness", word: "noted", stem: "note", anew: "fame",
    avg: [ 6.55, 5.08 ], std: [ 2.46, 1.01 ], fq: 50
  },
  "squeeze": {
    dict: "happiness", word: "squeeze", stem: "squeez", anew: "pressure",
    avg: [ 6.07, 5.08 ], std: [ 2.26, 1.7 ], fq: 50
  },
  "tag": {
    dict: "happiness", word: "tag", stem: "tag", anew: "dog",
    avg: [ 5.76, 5.08 ], std: [ 2.5, 1.28 ], fq: 50
  },
  "told": {
    dict: "happiness", word: "told", stem: "told", anew: "severe",
    avg: [ 5.26, 5.08 ], std: [ 2.36, 1.38 ], fq: 50
  },
  "aus": {
    dict: "happiness", word: "aus", stem: "au", anew: "gold",
    avg: [ 5.76, 5.06 ], std: [ 2.79, 1 ], fq: 50
  },
  "bend": {
    dict: "happiness", word: "bend", stem: "bend", anew: "deformed",
    avg: [ 4.07, 5.06 ], std: [ 2.34, 1.32 ], fq: 50
  },
  "chill": {
    dict: "happiness", word: "chill", stem: "chill", anew: "thrill",
    avg: [ 8.02, 5.06 ], std: [ 1.65, 2.1 ], fq: 50
  },
  "primitive": {
    dict: "happiness", word: "primitive", stem: "primit", anew: "rude",
    avg: [ 6.31, 5.06 ], std: [ 2.47, 1.54 ], fq: 50
  },
  "ruth": {
    dict: "happiness", word: "ruth", stem: "ruth", anew: "pity",
    avg: [ 3.72, 5.06 ], std: [ 2.02, 1.28 ], fq: 50
  },
  "stones": {
    dict: "happiness", word: "stones", stem: "stone", anew: "rock",
    avg: [ 4.52, 5.06 ], std: [ 2.37, 1.25 ], fq: 50
  },
  "streak": {
    dict: "happiness", word: "streak", stem: "streak", anew: "bar",
    avg: [ 5, 5.06 ], std: [ 2.83, 1.41 ], fq: 50
  },
  "judgement": {
    dict: "happiness", word: "judgement", stem: "judgement", anew: "mind",
    avg: [ 5, 5.04 ], std: [ 2.68, 1.57 ], fq: 50
  },
  "conquer": {
    dict: "happiness", word: "conquer", stem: "conquer", anew: "subdued",
    avg: [ 2.9, 5.04 ], std: [ 1.81, 2.22 ], fq: 50
  },
  "advertising": {
    dict: "happiness", word: "advertising", stem: "advertis", anew: "promotion",
    avg: [ 6.44, 5.04 ], std: [ 2.58, 1.58 ], fq: 50
  },
  "biz": {
    dict: "happiness", word: "biz", stem: "biz", anew: "game",
    avg: [ 5.89, 5.04 ], std: [ 2.37, 1.37 ], fq: 50
  },
  "break": {
    dict: "happiness", word: "break", stem: "break", anew: "fault",
    avg: [ 4.07, 5.04 ], std: [ 1.69, 1.82 ], fq: 50
  },
  "charged": {
    dict: "happiness", word: "charged", stem: "charg", anew: "excitement",
    avg: [ 7.67, 5.04 ], std: [ 1.91, 1.59 ], fq: 50
  },
  "doc": {
    dict: "happiness", word: "doc", stem: "doc", anew: "doctor",
    avg: [ 5.86, 5.04 ], std: [ 2.7, 1.48 ], fq: 50
  },
  "fleet": {
    dict: "happiness", word: "fleet", stem: "fleet", anew: "swift",
    avg: [ 5.39, 5.04 ], std: [ 2.53, 1.37 ], fq: 50
  },
  "mash": {
    dict: "happiness", word: "mash", stem: "mash", anew: "flirt",
    avg: [ 6.91, 5.02 ], std: [ 1.69, 1.73 ], fq: 50
  },
  "administrator": {
    dict: "happiness", word: "administrator", stem: "administr", anew: "execution",
    avg: [ 5.71, 5.02 ], std: [ 2.74, 1.33 ], fq: 50
  },
  "case": {
    dict: "happiness", word: "case", stem: "case", anew: "face",
    avg: [ 5.04, 5.02 ], std: [ 2.18, 1.3 ], fq: 50
  },
  "flat": {
    dict: "happiness", word: "flat", stem: "flat", anew: "bland",
    avg: [ 3.29, 5.02 ], std: [ 1.89, 1.24 ], fq: 50
  },
  "flip": {
    dict: "happiness", word: "flip", stem: "flip", anew: "sky",
    avg: [ 4.27, 5.02 ], std: [ 2.17, 1.3 ], fq: 50
  },
  "hot": {
    dict: "happiness", word: "hot", stem: "hot", anew: "blister",
    avg: [ 4.1, 5.02 ], std: [ 2.34, 1.92 ], fq: 50
  },
  "mi": {
    dict: "happiness", word: "mi", stem: "mi", anew: "knot",
    avg: [ 4.07, 5.02 ], std: [ 2.15, 0.91 ], fq: 50
  },
  "phantom": {
    dict: "happiness", word: "phantom", stem: "phantom", anew: "shadow",
    avg: [ 4.3, 5.02 ], std: [ 2.26, 1.61 ], fq: 50
  },
  "sleeve": {
    dict: "happiness", word: "sleeve", stem: "sleev", anew: "arm",
    avg: [ 3.59, 5.02 ], std: [ 2.4, 1.36 ], fq: 50
  },
  "slice": {
    dict: "happiness", word: "slice", stem: "slice", anew: "cut",
    avg: [ 5, 5.02 ], std: [ 2.32, 1.49 ], fq: 50
  },
  "stake": {
    dict: "happiness", word: "stake", stem: "stake", anew: "adventure",
    avg: [ 6.98, 5.02 ], std: [ 2.15, 1.19 ], fq: 50
  },
  "veil": {
    dict: "happiness", word: "veil", stem: "veil", anew: "hide",
    avg: [ 5.28, 5.02 ], std: [ 2.51, 1.44 ], fq: 50
  },
  "binding": {
    dict: "happiness", word: "binding", stem: "bind", anew: "bandage",
    avg: [ 3.9, 5.01 ], std: [ 2.07, 1.6 ], fq: 50
  },
  "assess": {
    dict: "happiness", word: "assess", stem: "assess", anew: "seat",
    avg: [ 2.95, 5 ], std: [ 1.72, 1.37 ], fq: 50
  },
  "commands": {
    dict: "happiness", word: "commands", stem: "command", anew: "controlling",
    avg: [ 6.1, 5 ], std: [ 2.19, 1.57 ], fq: 50
  },
  "hush": {
    dict: "happiness", word: "hush", stem: "hush", anew: "quiet",
    avg: [ 2.82, 5 ], std: [ 2.13, 1.5 ], fq: 50
  },
  "peculiar": {
    dict: "happiness", word: "peculiar", stem: "peculiar", anew: "odd",
    avg: [ 4.27, 5 ], std: [ 2.46, 1.71 ], fq: 50
  },
  "price": {
    dict: "happiness", word: "price", stem: "price", anew: "damage",
    avg: [ 5.57, 5 ], std: [ 2.26, 1.4 ], fq: 50
  },
  "reports": {
    dict: "happiness", word: "reports", stem: "report", anew: "paper",
    avg: [ 2.5, 5 ], std: [ 1.85, 1.51 ], fq: 50
  },
  "stir": {
    dict: "happiness", word: "stir", stem: "stir", anew: "excitement",
    avg: [ 7.67, 5 ], std: [ 1.91, 1.29 ], fq: 50
  },
  "throw": {
    dict: "happiness", word: "throw", stem: "throw", anew: "confused",
    avg: [ 6.03, 5 ], std: [ 1.88, 1.55 ], fq: 50
  },
  "cloudy": {
    dict: "happiness", word: "cloudy", stem: "cloudi", anew: "muddy",
    avg: [ 4.13, 4.98 ], std: [ 2.13, 1.86 ], fq: 50
  },
  "nails": {
    dict: "happiness", word: "nails", stem: "nail", anew: "ace",
    avg: [ 5.5, 4.98 ], std: [ 2.66, 1.48 ], fq: 50
  },
  "stared": {
    dict: "happiness", word: "stared", stem: "stare", anew: "star",
    avg: [ 5.83, 4.98 ], std: [ 2.44, 1.44 ], fq: 50
  },
  "borders": {
    dict: "happiness", word: "borders", stem: "border", anew: "mold",
    avg: [ 4.07, 4.96 ], std: [ 1.98, 1.52 ], fq: 50
  },
  "drops": {
    dict: "happiness", word: "drops", stem: "drop", anew: "fall",
    avg: [ 4.7, 4.96 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "fe": {
    dict: "happiness", word: "fe", stem: "fe", anew: "iron",
    avg: [ 3.76, 4.96 ], std: [ 2.06, 1.32 ], fq: 50
  },
  "alibi": {
    dict: "happiness", word: "alibi", stem: "alibi", anew: "excuse",
    avg: [ 4.48, 4.94 ], std: [ 2.29, 1.74 ], fq: 50
  },
  "banging": {
    dict: "happiness", word: "banging", stem: "bang", anew: "loved",
    avg: [ 6.38, 4.94 ], std: [ 2.68, 2.14 ], fq: 50
  },
  "dip": {
    dict: "happiness", word: "dip", stem: "dip", anew: "fall",
    avg: [ 4.7, 4.94 ], std: [ 2.48, 1.28 ], fq: 50
  },
  "hooked": {
    dict: "happiness", word: "hooked", stem: "hook", anew: "addicted",
    avg: [ 4.81, 4.94 ], std: [ 2.46, 1.2 ], fq: 50
  },
  "mo": {
    dict: "happiness", word: "mo", stem: "mo", anew: "moment",
    avg: [ 3.83, 4.94 ], std: [ 2.29, 1.32 ], fq: 50
  },
  "row": {
    dict: "happiness", word: "row", stem: "row", anew: "quarrel",
    avg: [ 6.29, 4.94 ], std: [ 2.56, 1.2 ], fq: 50
  },
  "stood": {
    dict: "happiness", word: "stood", stem: "stood", anew: "stomach",
    avg: [ 3.93, 4.94 ], std: [ 2.49, 1.08 ], fq: 50
  },
  "swell": {
    dict: "happiness", word: "swell", stem: "swell", anew: "cork",
    avg: [ 3.8, 4.94 ], std: [ 2.18, 2.01 ], fq: 50
  },
  "crave": {
    dict: "happiness", word: "crave", stem: "crave", anew: "lust",
    avg: [ 6.88, 4.92 ], std: [ 1.85, 1.6 ], fq: 50
  },
  "strip": {
    dict: "happiness", word: "strip", stem: "strip", anew: "rifle",
    avg: [ 6.35, 4.92 ], std: [ 2.04, 1.66 ], fq: 50
  },
  "fog": {
    dict: "happiness", word: "fog", stem: "fog", anew: "clouds",
    avg: [ 3.3, 4.9 ], std: [ 2.08, 1.89 ], fq: 50
  },
  "sector": {
    dict: "happiness", word: "sector", stem: "sector", anew: "sphere",
    avg: [ 3.88, 4.9 ], std: [ 1.99, 1.23 ], fq: 50
  },
  "chuck": {
    dict: "happiness", word: "chuck", stem: "chuck", anew: "sickness",
    avg: [ 5.61, 4.88 ], std: [ 2.67, 1.39 ], fq: 50
  },
  "cited": {
    dict: "happiness", word: "cited", stem: "cite", anew: "name",
    avg: [ 4.25, 4.88 ], std: [ 2.47, 1.41 ], fq: 50
  },
  "went": {
    dict: "happiness", word: "went", stem: "went", anew: "travel",
    avg: [ 6.21, 4.88 ], std: [ 2.51, 1.45 ], fq: 50
  },
  "substitute": {
    dict: "happiness", word: "substitute", stem: "substitut", anew: "reserved",
    avg: [ 3.27, 4.88 ], std: [ 2.05, 1.47 ], fq: 50
  },
  "nous": {
    dict: "happiness", word: "nous", stem: "nou", anew: "mind",
    avg: [ 5, 4.88 ], std: [ 2.68, 1.16 ], fq: 50
  },
  "circumstances": {
    dict: "happiness", word: "circumstances", stem: "circumst", anew: "context",
    avg: [ 4.22, 4.86 ], std: [ 2.24, 1.11 ], fq: 50
  },
  "divisions": {
    dict: "happiness", word: "divisions", stem: "divis", anew: "part",
    avg: [ 3.82, 4.86 ], std: [ 2.24, 1.48 ], fq: 50
  },
  "ft": {
    dict: "happiness", word: "ft", stem: "ft", anew: "foot",
    avg: [ 3.27, 4.86 ], std: [ 1.98, 0.78 ], fq: 50
  },
  "ira": {
    dict: "happiness", word: "ira", stem: "ira", anew: "anger",
    avg: [ 7.63, 4.86 ], std: [ 1.91, 1.4 ], fq: 50
  },
  "missy": {
    dict: "happiness", word: "missy", stem: "missi", anew: "girl",
    avg: [ 4.29, 4.86 ], std: [ 2.69, 1.55 ], fq: 50
  },
  "tract": {
    dict: "happiness", word: "tract", stem: "tract", anew: "pamphlet",
    avg: [ 3.62, 4.86 ], std: [ 2.02, 1.25 ], fq: 50
  },
  "geld": {
    dict: "happiness", word: "geld", stem: "geld", anew: "cut",
    avg: [ 5, 4.86 ], std: [ 2.32, 1.59 ], fq: 50
  },
  "maintenance": {
    dict: "happiness", word: "maintenance", stem: "mainten", anew: "alimony",
    avg: [ 4.3, 4.84 ], std: [ 2.29, 1.6 ], fq: 50
  },
  "secret": {
    dict: "happiness", word: "secret", stem: "secret", anew: "mystic",
    avg: [ 4.84, 4.84 ], std: [ 2.57, 1.61 ], fq: 50
  },
  "hid": {
    dict: "happiness", word: "hid", stem: "hid", anew: "hide",
    avg: [ 5.28, 4.82 ], std: [ 2.51, 1.12 ], fq: 50
  },
  "impact": {
    dict: "happiness", word: "impact", stem: "impact", anew: "affection",
    avg: [ 6.21, 4.82 ], std: [ 2.75, 1.32 ], fq: 50
  },
  "nerve": {
    dict: "happiness", word: "nerve", stem: "nerv", anew: "heart",
    avg: [ 6.34, 4.82 ], std: [ 2.25, 1.48 ], fq: 50
  },
  "cock": {
    dict: "happiness", word: "cock", stem: "cock", anew: "prick",
    avg: [ 4.7, 4.8 ], std: [ 2.59, 2 ], fq: 50
  },
  "el": {
    dict: "happiness", word: "el", stem: "el", anew: "elevator",
    avg: [ 4.16, 4.8 ], std: [ 1.99, 1.12 ], fq: 50
  },
  "passive": {
    dict: "happiness", word: "passive", stem: "passiv", anew: "peace",
    avg: [ 2.95, 4.8 ], std: [ 2.55, 1.77 ], fq: 50
  },
  "belly": {
    dict: "happiness", word: "belly", stem: "belli", anew: "stomach",
    avg: [ 3.93, 4.78 ], std: [ 2.49, 1.46 ], fq: 50
  },
  "conditions": {
    dict: "happiness", word: "conditions", stem: "condit", anew: "statue",
    avg: [ 3.46, 4.78 ], std: [ 1.72, 1.47 ], fq: 50
  },
  "reversed": {
    dict: "happiness", word: "reversed", stem: "revers", anew: "vacation",
    avg: [ 5.64, 4.78 ], std: [ 2.99, 1.43 ], fq: 50
  },
  "suddenly": {
    dict: "happiness", word: "suddenly", stem: "suddenli", anew: "dead",
    avg: [ 5.73, 4.78 ], std: [ 2.73, 1.31 ], fq: 50
  },
  "gas": {
    dict: "happiness", word: "gas", stem: "ga", anew: "gun",
    avg: [ 7.02, 4.76 ], std: [ 1.84, 1.65 ], fq: 50
  },
  "repair": {
    dict: "happiness", word: "repair", stem: "repair", anew: "doctor",
    avg: [ 5.86, 4.76 ], std: [ 2.7, 1.82 ], fq: 50
  },
  "somewhat": {
    dict: "happiness", word: "somewhat", stem: "somewhat", anew: "pretty",
    avg: [ 6.03, 4.76 ], std: [ 2.22, 1.33 ], fq: 50
  },
  "spent": {
    dict: "happiness", word: "spent", stem: "spent", anew: "fatigued",
    avg: [ 2.64, 4.76 ], std: [ 2.19, 1.55 ], fq: 50
  },
  "took": {
    dict: "happiness", word: "took", stem: "took", anew: "learn",
    avg: [ 5.39, 4.76 ], std: [ 2.22, 1.02 ], fq: 50
  },
  "wore": {
    dict: "happiness", word: "wore", stem: "wore", anew: "fatigued",
    avg: [ 2.64, 4.76 ], std: [ 2.19, 1.36 ], fq: 50
  },
  "heavily": {
    dict: "happiness", word: "heavily", stem: "heavili", anew: "hard",
    avg: [ 5.12, 4.74 ], std: [ 2.19, 1.12 ], fq: 50
  },
  "smaller": {
    dict: "happiness", word: "smaller", stem: "smaller", anew: "modest",
    avg: [ 3.98, 4.74 ], std: [ 2.24, 1.48 ], fq: 50
  },
  "bent": {
    dict: "happiness", word: "bent", stem: "bent", anew: "deformed",
    avg: [ 4.07, 4.72 ], std: [ 2.34, 1.57 ], fq: 50
  },
  "offset": {
    dict: "happiness", word: "offset", stem: "offset", anew: "runner",
    avg: [ 4.76, 4.72 ], std: [ 2.4, 1.2 ], fq: 50
  },
  "hound": {
    dict: "happiness", word: "hound", stem: "hound", anew: "dog",
    avg: [ 5.76, 4.7 ], std: [ 2.5, 1.58 ], fq: 50
  },
  "rocky": {
    dict: "happiness", word: "rocky", stem: "rocki", anew: "rough",
    avg: [ 5.33, 4.7 ], std: [ 2.04, 1.73 ], fq: 50
  },
  "curb": {
    dict: "happiness", word: "curb", stem: "curb", anew: "controlling",
    avg: [ 6.1, 4.68 ], std: [ 2.19, 1.28 ], fq: 50
  },
  "dun": {
    dict: "happiness", word: "dun", stem: "dun", anew: "frustrated",
    avg: [ 5.61, 4.68 ], std: [ 2.76, 1.39 ], fq: 50
  },
  "knives": {
    dict: "happiness", word: "knives", stem: "knive", anew: "knife",
    avg: [ 5.8, 4.68 ], std: [ 2, 2.09 ], fq: 50
  },
  "ruling": {
    dict: "happiness", word: "ruling", stem: "rule", anew: "opinion",
    avg: [ 4.89, 4.68 ], std: [ 2.46, 1.45 ], fq: 50
  },
  "threw": {
    dict: "happiness", word: "threw", stem: "threw", anew: "confused",
    avg: [ 6.03, 4.68 ], std: [ 1.88, 1.06 ], fq: 50
  },
  "bump": {
    dict: "happiness", word: "bump", stem: "bump", anew: "chance",
    avg: [ 5.38, 4.67 ], std: [ 2.58, 1.42 ], fq: 50
  },
  "flesh": {
    dict: "happiness", word: "flesh", stem: "flesh", anew: "building",
    avg: [ 3.92, 4.67 ], std: [ 1.94, 1.56 ], fq: 50
  },
  "tumble": {
    dict: "happiness", word: "tumble", stem: "tumbl", anew: "fall",
    avg: [ 4.7, 4.67 ], std: [ 2.48, 1.7 ], fq: 50
  },
  "minor": {
    dict: "happiness", word: "minor", stem: "minor", anew: "modest",
    avg: [ 3.98, 4.66 ], std: [ 2.24, 1.26 ], fq: 50
  },
  "pile": {
    dict: "happiness", word: "pile", stem: "pile", anew: "mountain",
    avg: [ 5.49, 4.66 ], std: [ 2.43, 0.89 ], fq: 50
  },
  "wolves": {
    dict: "happiness", word: "wolves", stem: "wolv", anew: "beast",
    avg: [ 5.57, 4.65 ], std: [ 2.61, 2.28 ], fq: 50
  },
  "dry": {
    dict: "happiness", word: "dry", stem: "dri", anew: "iron",
    avg: [ 3.76, 4.64 ], std: [ 2.06, 1.26 ], fq: 50
  },
  "fucking": {
    dict: "happiness", word: "fucking", stem: "fuck", anew: "loved",
    avg: [ 6.38, 4.64 ], std: [ 2.68, 2.93 ], fq: 50
  },
  "left": {
    dict: "happiness", word: "left", stem: "left", anew: "odd",
    avg: [ 4.27, 4.64 ], std: [ 2.46, 1.44 ], fq: 50
  },
  "slit": {
    dict: "happiness", word: "slit", stem: "slit", anew: "prick",
    avg: [ 4.7, 4.64 ], std: [ 2.59, 1.51 ], fq: 50
  },
  "bureau": {
    dict: "happiness", word: "bureau", stem: "bureau", anew: "office",
    avg: [ 4.08, 4.62 ], std: [ 1.92, 1.29 ], fq: 50
  },
  "lease": {
    dict: "happiness", word: "lease", stem: "leas", anew: "engaged",
    avg: [ 6.77, 4.62 ], std: [ 2.07, 1.26 ], fq: 50
  },
  "daze": {
    dict: "happiness", word: "daze", stem: "daze", anew: "dazzle",
    avg: [ 6.33, 4.61 ], std: [ 2.02, 1.44 ], fq: 50
  },
  "bound": {
    dict: "happiness", word: "bound", stem: "bound", anew: "spring",
    avg: [ 5.67, 4.6 ], std: [ 2.51, 1.36 ], fq: 50
  },
  "sack": {
    dict: "happiness", word: "sack", stem: "sack", anew: "fire",
    avg: [ 7.17, 4.6 ], std: [ 2.06, 1.5 ], fq: 50
  },
  "sticky": {
    dict: "happiness", word: "sticky", stem: "sticki", anew: "embarrassed",
    avg: [ 5.87, 4.6 ], std: [ 2.55, 1.32 ], fq: 50
  },
  "tight": {
    dict: "happiness", word: "tight", stem: "tight", anew: "nasty",
    avg: [ 4.89, 4.6 ], std: [ 2.5, 1.25 ], fq: 50
  },
  "trigger": {
    dict: "happiness", word: "trigger", stem: "trigger", anew: "activate",
    avg: [ 4.86, 4.6 ], std: [ 2.56, 1.95 ], fq: 50
  },
  "busy": {
    dict: "happiness", word: "busy", stem: "busi", anew: "engaged",
    avg: [ 6.77, 4.58 ], std: [ 2.07, 1.83 ], fq: 50
  },
  "fighter": {
    dict: "happiness", word: "fighter", stem: "fighter", anew: "champion",
    avg: [ 5.85, 4.58 ], std: [ 3.15, 1.65 ], fq: 50
  },
  "lock": {
    dict: "happiness", word: "lock", stem: "lock", anew: "engaged",
    avg: [ 6.77, 4.58 ], std: [ 2.07, 1.01 ], fq: 50
  },
  "stops": {
    dict: "happiness", word: "stops", stem: "stop", anew: "bar",
    avg: [ 5, 4.58 ], std: [ 2.83, 1.21 ], fq: 50
  },
  "blocks": {
    dict: "happiness", word: "blocks", stem: "block", anew: "hinder",
    avg: [ 4.12, 4.54 ], std: [ 2.01, 1.42 ], fq: 50
  },
  "terms": {
    dict: "happiness", word: "terms", stem: "term", anew: "foot",
    avg: [ 3.27, 4.54 ], std: [ 1.98, 1.05 ], fq: 50
  },
  "chains": {
    dict: "happiness", word: "chains", stem: "chain", anew: "iron",
    avg: [ 3.76, 4.53 ], std: [ 2.06, 1.77 ], fq: 50
  },
  "waits": {
    dict: "happiness", word: "waits", stem: "wait", anew: "delayed",
    avg: [ 5.62, 4.53 ], std: [ 2.39, 1.24 ], fq: 50
  },
  "blew": {
    dict: "happiness", word: "blew", stem: "blew", anew: "waste",
    avg: [ 4.14, 4.52 ], std: [ 2.3, 1.47 ], fq: 50
  },
  "muss": {
    dict: "happiness", word: "muss", stem: "muss", anew: "messy",
    avg: [ 3.34, 4.52 ], std: [ 2.37, 1.07 ], fq: 50
  },
  "small": {
    dict: "happiness", word: "small", stem: "small", anew: "modest",
    avg: [ 3.98, 4.52 ], std: [ 2.24, 1.36 ], fq: 50
  },
  "utterly": {
    dict: "happiness", word: "utterly", stem: "utterli", anew: "dead",
    avg: [ 5.73, 4.52 ], std: [ 2.73, 1.71 ], fq: 50
  },
  "disposed": {
    dict: "happiness", word: "disposed", stem: "dispos", anew: "mind",
    avg: [ 5, 4.5 ], std: [ 2.68, 1.73 ], fq: 50
  },
  "goo": {
    dict: "happiness", word: "goo", stem: "goo", anew: "slime",
    avg: [ 5.36, 4.49 ], std: [ 2.63, 1.59 ], fq: 50
  },
  "despite": {
    dict: "happiness", word: "despite", stem: "despit", anew: "scornful",
    avg: [ 5.04, 4.48 ], std: [ 2.56, 1.34 ], fq: 50
  },
  "hidden": {
    dict: "happiness", word: "hidden", stem: "hidden", anew: "hide",
    avg: [ 5.28, 4.48 ], std: [ 2.51, 1.43 ], fq: 50
  },
  "thrown": {
    dict: "happiness", word: "thrown", stem: "thrown", anew: "confused",
    avg: [ 6.03, 4.46 ], std: [ 1.88, 1.16 ], fq: 50
  },
  "blank": {
    dict: "happiness", word: "blank", stem: "blank", anew: "space",
    avg: [ 5.14, 4.44 ], std: [ 2.54, 0.84 ], fq: 50
  },
  "harder": {
    dict: "happiness", word: "harder", stem: "harder", anew: "hard",
    avg: [ 5.12, 4.44 ], std: [ 2.19, 1.47 ], fq: 50
  },
  "push": {
    dict: "happiness", word: "push", stem: "push", anew: "promotion",
    avg: [ 6.44, 4.44 ], std: [ 2.58, 1.47 ], fq: 50
  },
  "rag": {
    dict: "happiness", word: "rag", stem: "rag", anew: "irritate",
    avg: [ 5.76, 4.44 ], std: [ 2.15, 1.26 ], fq: 50
  },
  "weed": {
    dict: "happiness", word: "weed", stem: "weed", anew: "grass",
    avg: [ 4.14, 4.44 ], std: [ 2.11, 2.1 ], fq: 50
  },
  "longing": {
    dict: "happiness", word: "longing", stem: "long", anew: "hungry",
    avg: [ 5.13, 4.43 ], std: [ 2.44, 1.7 ], fq: 50
  },
  "behind": {
    dict: "happiness", word: "behind", stem: "behind", anew: "slow",
    avg: [ 3.39, 4.42 ], std: [ 2.22, 1.21 ], fq: 50
  },
  "beats": {
    dict: "happiness", word: "beats", stem: "beat", anew: "crushed",
    avg: [ 5.52, 4.4 ], std: [ 2.87, 1.93 ], fq: 50
  },
  "effing": {
    dict: "happiness", word: "effing", stem: "ef", anew: "loved",
    avg: [ 6.38, 4.38 ], std: [ 2.68, 1.4 ], fq: 50
  },
  "frozen": {
    dict: "happiness", word: "frozen", stem: "frozen", anew: "frigid",
    avg: [ 4.75, 4.38 ], std: [ 2.56, 1.54 ], fq: 50
  },
  "slips": {
    dict: "happiness", word: "slips", stem: "slip", anew: "mistake",
    avg: [ 5.18, 4.38 ], std: [ 2.42, 1.47 ], fq: 50
  },
  "custody": {
    dict: "happiness", word: "custody", stem: "custodi", anew: "hand",
    avg: [ 4.4, 4.36 ], std: [ 2.07, 1.7 ], fq: 50
  },
  "divided": {
    dict: "happiness", word: "divided", stem: "divid", anew: "part",
    avg: [ 3.82, 4.36 ], std: [ 2.24, 1.27 ], fq: 50
  },
  "end": {
    dict: "happiness", word: "end", stem: "end", anew: "death",
    avg: [ 4.59, 4.36 ], std: [ 3.07, 1.74 ], fq: 50
  },
  "reducing": {
    dict: "happiness", word: "reducing", stem: "reduc", anew: "concentrate",
    avg: [ 4.65, 4.36 ], std: [ 2.13, 1.48 ], fq: 50
  },
  "sharply": {
    dict: "happiness", word: "sharply", stem: "sharpli", anew: "aggressive",
    avg: [ 5.83, 4.36 ], std: [ 2.33, 1.64 ], fq: 50
  },
  "blown": {
    dict: "happiness", word: "blown", stem: "blown", anew: "waste",
    avg: [ 4.14, 4.34 ], std: [ 2.3, 1.39 ], fq: 50
  },
  "icy": {
    dict: "happiness", word: "icy", stem: "ici", anew: "frigid",
    avg: [ 4.75, 4.34 ], std: [ 2.56, 1.85 ], fq: 50
  },
  "shook": {
    dict: "happiness", word: "shook", stem: "shook", anew: "excitement",
    avg: [ 7.67, 4.34 ], std: [ 1.91, 1.42 ], fq: 50
  },
  "eff": {
    dict: "happiness", word: "eff", stem: "eff", anew: "loved",
    avg: [ 6.38, 4.32 ], std: [ 2.68, 1.57 ], fq: 50
  },
  "howling": {
    dict: "happiness", word: "howling", stem: "howl", anew: "terrific",
    avg: [ 6.23, 4.32 ], std: [ 2.73, 1.83 ], fq: 50
  },
  "slowly": {
    dict: "happiness", word: "slowly", stem: "slowli", anew: "slow",
    avg: [ 3.39, 4.32 ], std: [ 2.22, 1.43 ], fq: 50
  },
  "blunt": {
    dict: "happiness", word: "blunt", stem: "blunt", anew: "crude",
    avg: [ 5.07, 4.31 ], std: [ 2.37, 1.52 ], fq: 50
  },
  "sneak": {
    dict: "happiness", word: "sneak", stem: "sneak", anew: "pinch",
    avg: [ 4.59, 4.3 ], std: [ 2.1, 1.54 ], fq: 50
  },
  "mortal": {
    dict: "happiness", word: "mortal", stem: "mortal", anew: "person",
    avg: [ 4.19, 4.29 ], std: [ 2.45, 2.03 ], fq: 50
  },
  "rebellion": {
    dict: "happiness", word: "rebellion", stem: "rebellion", anew: "revolt",
    avg: [ 6.56, 4.29 ], std: [ 2.34, 1.68 ], fq: 50
  },
  "swore": {
    dict: "happiness", word: "swore", stem: "swore", anew: "trust",
    avg: [ 5.3, 4.28 ], std: [ 2.66, 1.58 ], fq: 50
  },
  "taken": {
    dict: "happiness", word: "taken", stem: "taken", anew: "learn",
    avg: [ 5.39, 4.28 ], std: [ 2.22, 1.47 ], fq: 50
  },
  "outlaw": {
    dict: "happiness", word: "outlaw", stem: "outlaw", anew: "criminal",
    avg: [ 4.79, 4.26 ], std: [ 2.51, 1.7 ], fq: 50
  },
  "split": {
    dict: "happiness", word: "split", stem: "split", anew: "part",
    avg: [ 3.82, 4.26 ], std: [ 2.24, 1.5 ], fq: 50
  },
  "concerning": {
    dict: "happiness", word: "concerning", stem: "concern", anew: "interest",
    avg: [ 5.66, 4.24 ], std: [ 2.26, 1.69 ], fq: 50
  },
  "lower": {
    dict: "happiness", word: "lower", stem: "lower", anew: "blue",
    avg: [ 4.31, 4.24 ], std: [ 2.2, 1.08 ], fq: 50
  },
  "raw": {
    dict: "happiness", word: "raw", stem: "raw", anew: "cut",
    avg: [ 5, 4.24 ], std: [ 2.32, 1.29 ], fq: 50
  },
  "smash": {
    dict: "happiness", word: "smash", stem: "smash", anew: "hit",
    avg: [ 5.73, 4.24 ], std: [ 2.09, 1.57 ], fq: 50
  },
  "worn": {
    dict: "happiness", word: "worn", stem: "worn", anew: "fatigued",
    avg: [ 2.64, 4.23 ], std: [ 2.19, 1.1 ], fq: 50
  },
  "blast": {
    dict: "happiness", word: "blast", stem: "blast", anew: "crucify",
    avg: [ 6.47, 4.22 ], std: [ 2.47, 2.12 ], fq: 50
  },
  "grind": {
    dict: "happiness", word: "grind", stem: "grind", anew: "grateful",
    avg: [ 4.58, 4.22 ], std: [ 2.14, 1.37 ], fq: 50
  },
  "scratch": {
    dict: "happiness", word: "scratch", stem: "scratch", anew: "scar",
    avg: [ 4.79, 4.22 ], std: [ 2.11, 1.37 ], fq: 50
  },
  "screw": {
    dict: "happiness", word: "screw", stem: "screw", anew: "loved",
    avg: [ 6.38, 4.2 ], std: [ 2.68, 1.85 ], fq: 50
  },
  "capture": {
    dict: "happiness", word: "capture", stem: "captur", anew: "fascinate",
    avg: [ 5.83, 4.18 ], std: [ 2.73, 1.7 ], fq: 50
  },
  "heat": {
    dict: "happiness", word: "heat", stem: "heat", anew: "passion",
    avg: [ 7.26, 4.16 ], std: [ 2.57, 1.82 ], fq: 50
  },
  "stranger": {
    dict: "happiness", word: "stranger", stem: "stranger", anew: "alien",
    avg: [ 5.45, 4.16 ], std: [ 2.15, 0.96 ], fq: 50
  },
  "pee": {
    dict: "happiness", word: "pee", stem: "pee", anew: "urine",
    avg: [ 4.2, 4.14 ], std: [ 2.18, 1.53 ], fq: 50
  },
  "decrease": {
    dict: "happiness", word: "decrease", stem: "decreas", anew: "fall",
    avg: [ 4.7, 4.12 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "bother": {
    dict: "happiness", word: "bother", stem: "bother", anew: "irritate",
    avg: [ 5.76, 4.12 ], std: [ 2.15, 1.62 ], fq: 50
  },
  "rush": {
    dict: "happiness", word: "rush", stem: "rush", anew: "kick",
    avg: [ 4.9, 4.12 ], std: [ 2.35, 1.36 ], fq: 50
  },
  "heavy": {
    dict: "happiness", word: "heavy", stem: "heavi", anew: "hard",
    avg: [ 5.12, 4.1 ], std: [ 2.19, 1.42 ], fq: 50
  },
  "hung": {
    dict: "happiness", word: "hung", stem: "hung", anew: "fall",
    avg: [ 4.7, 4.08 ], std: [ 2.48, 1.63 ], fq: 50
  },
  "wont": {
    dict: "happiness", word: "wont", stem: "wont", anew: "habit",
    avg: [ 3.95, 4.08 ], std: [ 2.11, 1.05 ], fq: 50
  },
  "colder": {
    dict: "happiness", word: "colder", stem: "colder", anew: "frigid",
    avg: [ 4.75, 4.04 ], std: [ 2.56, 1.96 ], fq: 50
  },
  "unknown": {
    dict: "happiness", word: "unknown", stem: "unknown", anew: "alien",
    avg: [ 5.45, 4.04 ], std: [ 2.15, 1.51 ], fq: 50
  },
  "worm": {
    dict: "happiness", word: "worm", stem: "worm", anew: "louse",
    avg: [ 4.98, 4.04 ], std: [ 2.03, 1.67 ], fq: 50
  },
  "distant": {
    dict: "happiness", word: "distant", stem: "distant", anew: "aloof",
    avg: [ 4.28, 4.02 ], std: [ 2.1, 1.53 ], fq: 50
  },
  "roughly": {
    dict: "happiness", word: "roughly", stem: "roughli", anew: "rough",
    avg: [ 5.33, 4 ], std: [ 2.04, 1.21 ], fq: 50
  },
  "twit": {
    dict: "happiness", word: "twit", stem: "twit", anew: "tease",
    avg: [ 5.87, 4 ], std: [ 2.56, 1.76 ], fq: 50
  },
  "loose": {
    dict: "happiness", word: "loose", stem: "loos", anew: "easy",
    avg: [ 4.48, 3.96 ], std: [ 2.82, 1.65 ], fq: 50
  },
  "tough": {
    dict: "happiness", word: "tough", stem: "tough", anew: "hard",
    avg: [ 5.12, 3.96 ], std: [ 2.19, 1.41 ], fq: 50
  },
  "darker": {
    dict: "happiness", word: "darker", stem: "darker", anew: "color",
    avg: [ 4.73, 3.94 ], std: [ 2.64, 1.9 ], fq: 50
  },
  "omitted": {
    dict: "happiness", word: "omitted", stem: "omit", anew: "neglect",
    avg: [ 4.83, 3.92 ], std: [ 2.31, 1.21 ], fq: 50
  },
  "misses": {
    dict: "happiness", word: "misses", stem: "miss", anew: "girl",
    avg: [ 4.29, 3.9 ], std: [ 2.69, 1.37 ], fq: 50
  },
  "drunk": {
    dict: "happiness", word: "drunk", stem: "drunk", anew: "salute",
    avg: [ 5.31, 3.88 ], std: [ 2.23, 2.25 ], fq: 50
  },
  "shout": {
    dict: "happiness", word: "shout", stem: "shout", anew: "abuse",
    avg: [ 6.83, 3.88 ], std: [ 2.7, 1.38 ], fq: 50
  },
  "artillery": {
    dict: "happiness", word: "artillery", stem: "artilleri", anew: "weapon",
    avg: [ 6.03, 3.88 ], std: [ 1.89, 1.54 ], fq: 50
  },
  "ass": {
    dict: "happiness", word: "ass", stem: "ass", anew: "seat",
    avg: [ 2.95, 3.86 ], std: [ 1.72, 1.86 ], fq: 50
  },
  "rent": {
    dict: "happiness", word: "rent", stem: "rent", anew: "engaged",
    avg: [ 6.77, 3.84 ], std: [ 2.07, 1.48 ], fq: 50
  },
  "snatch": {
    dict: "happiness", word: "snatch", stem: "snatch", anew: "abduction",
    avg: [ 5.53, 3.84 ], std: [ 2.43, 1.63 ], fq: 50
  },
  "ghosts": {
    dict: "happiness", word: "ghosts", stem: "ghost", anew: "obsession",
    avg: [ 6.41, 3.84 ], std: [ 2.13, 1.98 ], fq: 50
  },
  "hardest": {
    dict: "happiness", word: "hardest", stem: "hardest", anew: "hard",
    avg: [ 5.12, 3.82 ], std: [ 2.19, 1.62 ], fq: 50
  },
  "thirst": {
    dict: "happiness", word: "thirst", stem: "thirst", anew: "lust",
    avg: [ 6.88, 3.82 ], std: [ 1.85, 1.72 ], fq: 50
  },
  "interment": {
    dict: "happiness", word: "interment", stem: "inter", anew: "burial",
    avg: [ 5.08, 3.8 ], std: [ 2.4, 1.83 ], fq: 50
  },
  "pale": {
    dict: "happiness", word: "pale", stem: "pale", anew: "sickness",
    avg: [ 5.61, 3.8 ], std: [ 2.67, 1.09 ], fq: 50
  },
  "thirsty": {
    dict: "happiness", word: "thirsty", stem: "thirsti", anew: "hungry",
    avg: [ 5.13, 3.79 ], std: [ 2.44, 1.46 ], fq: 50
  },
  "risks": {
    dict: "happiness", word: "risks", stem: "risk", anew: "danger",
    avg: [ 7.32, 3.78 ], std: [ 2.07, 1.76 ], fq: 50
  },
  "resigned": {
    dict: "happiness", word: "resigned", stem: "resign", anew: "vacation",
    avg: [ 5.64, 3.76 ], std: [ 2.99, 1.59 ], fq: 50
  },
  "boo": {
    dict: "happiness", word: "boo", stem: "boo", anew: "bird",
    avg: [ 3.17, 3.74 ], std: [ 2.23, 1.76 ], fq: 50
  },
  "removed": {
    dict: "happiness", word: "removed", stem: "remov", anew: "murderer",
    avg: [ 7.47, 3.72 ], std: [ 2.18, 1.39 ], fq: 50
  },
  "withdrawal": {
    dict: "happiness", word: "withdrawal", stem: "withdraw", anew: "detached",
    avg: [ 4.26, 3.72 ], std: [ 2.57, 1.84 ], fq: 50
  },
  "hustler": {
    dict: "happiness", word: "hustler", stem: "hustler", anew: "hooker",
    avg: [ 4.93, 3.69 ], std: [ 2.82, 1.76 ], fq: 50
  },
  "low": {
    dict: "happiness", word: "low", stem: "low", anew: "depression",
    avg: [ 4.54, 3.66 ], std: [ 3.19, 1.12 ], fq: 50
  },
  "sorry": {
    dict: "happiness", word: "sorry", stem: "sorri", anew: "regretful",
    avg: [ 5.74, 3.66 ], std: [ 2.32, 1.76 ], fq: 50
  },
  "darkest": {
    dict: "happiness", word: "darkest", stem: "darkest", anew: "color",
    avg: [ 4.73, 3.64 ], std: [ 2.64, 2.12 ], fq: 50
  },
  "haunt": {
    dict: "happiness", word: "haunt", stem: "haunt", anew: "obsession",
    avg: [ 6.41, 3.62 ], std: [ 2.13, 1.64 ], fq: 50
  },
  "mistaken": {
    dict: "happiness", word: "mistaken", stem: "mistaken", anew: "FALSE",
    avg: [ 3.43, 3.6 ], std: [ 2.09, 1.43 ], fq: 50
  },
  "caught": {
    dict: "happiness", word: "caught", stem: "caught", anew: "fascinate",
    avg: [ 5.83, 3.54 ], std: [ 2.73, 1.79 ], fq: 50
  },
  "forsaken": {
    dict: "happiness", word: "forsaken", stem: "forsaken", anew: "deserter",
    avg: [ 5.5, 3.54 ], std: [ 2.55, 1.94 ], fq: 50
  },
  "fallen": {
    dict: "happiness", word: "fallen", stem: "fallen", anew: "fall",
    avg: [ 4.7, 3.52 ], std: [ 2.48, 1.42 ], fq: 50
  },
  "dope": {
    dict: "happiness", word: "dope", stem: "dope", anew: "grass",
    avg: [ 4.14, 3.5 ], std: [ 2.11, 1.71 ], fq: 50
  },
  "struck": {
    dict: "happiness", word: "struck", stem: "struck", anew: "fall",
    avg: [ 4.7, 3.5 ], std: [ 2.48, 1.4 ], fq: 50
  },
  "diss": {
    dict: "happiness", word: "diss", stem: "diss", anew: "insult",
    avg: [ 6, 3.43 ], std: [ 2.46, 1.88 ], fq: 50
  },
  "gone": {
    dict: "happiness", word: "gone", stem: "gone", anew: "travel",
    avg: [ 6.21, 3.42 ], std: [ 2.51, 1.74 ], fq: 50
  },
  "torn": {
    dict: "happiness", word: "torn", stem: "torn", anew: "mangle",
    avg: [ 5.44, 3.37 ], std: [ 2.1, 1.47 ], fq: 50
  },
  "busted": {
    dict: "happiness", word: "busted", stem: "bust", anew: "broken",
    avg: [ 5.43, 3.36 ], std: [ 2.42, 1.31 ], fq: 50
  },
  "burnt": {
    dict: "happiness", word: "burnt", stem: "burnt", anew: "cut",
    avg: [ 5, 3.34 ], std: [ 2.32, 1.93 ], fq: 50
  },
  "savage": {
    dict: "happiness", word: "savage", stem: "savag", anew: "crucify",
    avg: [ 6.47, 3.31 ], std: [ 2.47, 1.95 ], fq: 50
  },
  "lowest": {
    dict: "happiness", word: "lowest", stem: "lowest", anew: "blue",
    avg: [ 4.31, 3.3 ], std: [ 2.2, 1.17 ], fq: 50
  },
  "damned": {
    dict: "happiness", word: "damned", stem: "damn", anew: "bless",
    avg: [ 4.05, 3.26 ], std: [ 2.59, 1.97 ], fq: 50
  },
  "fell": {
    dict: "happiness", word: "fell", stem: "fell", anew: "hide",
    avg: [ 5.28, 3.22 ], std: [ 2.51, 1.47 ], fq: 50
  },
  "false": {
    dict: "happiness", word: "false", stem: "fals", anew: "FALSE",
    avg: [ 3.43, 3.18 ], std: [ 2.09, 1.35 ], fq: 50
  },
  "incorrectly": {
    dict: "happiness", word: "incorrectly", stem: "incorrectli", anew: "FALSE",
    avg: [ 3.43, 3.14 ], std: [ 2.09, 1.03 ], fq: 50
  },
  "fought": {
    dict: "happiness", word: "fought", stem: "fought", anew: "fight",
    avg: [ 7.15, 3.1 ], std: [ 2.19, 1.39 ], fq: 50
  },
  "cries": {
    dict: "happiness", word: "cries", stem: "cri", anew: "scream",
    avg: [ 7.04, 2.92 ], std: [ 1.96, 1.59 ], fq: 50
  },
  "badly": {
    dict: "happiness", word: "badly", stem: "badli", anew: "illness",
    avg: [ 4.71, 2.88 ], std: [ 2.24, 1.61 ], fq: 50
  },
  "unholy": {
    dict: "happiness", word: "unholy", stem: "unholi", anew: "demon",
    avg: [ 6.76, 2.73 ], std: [ 2.68, 1.4 ], fq: 50
  },
  "worse": {
    dict: "happiness", word: "worse", stem: "wors", anew: "regretful",
    avg: [ 5.74, 2.7 ], std: [ 2.32, 1.42 ], fq: 50
  },
  "beaten": {
    dict: "happiness", word: "beaten", stem: "beaten", anew: "crushed",
    avg: [ 5.52, 2.62 ], std: [ 2.87, 1.59 ], fq: 50
  },
  "stroke": {
    dict: "happiness", word: "stroke", stem: "stroke", anew: "accident",
    avg: [ 6.26, 2.58 ], std: [ 2.87, 1.6 ], fq: 50
  },
  "broke": {
    dict: "happiness", word: "broke", stem: "broke", anew: "bankrupt",
    avg: [ 6.21, 2.54 ], std: [ 2.79, 1.28 ], fq: 50
  },
  "thieves": {
    dict: "happiness", word: "thieves", stem: "thiev", anew: "thief",
    avg: [ 6.89, 2.29 ], std: [ 2.13, 1.31 ], fq: 50
  },
  "worst": {
    dict: "happiness", word: "worst", stem: "worst", anew: "regretful",
    avg: [ 5.74, 2.1 ], std: [ 2.32, 1.34 ], fq: 50
  }
};


var  happy_stem = {
  "perfectli": {
    dict: "happiness", word: "perfectly", stem: "perfectli", anew: "dead",
    avg: [ 5.73, 7.28 ], std: [ 2.73, 1.59 ], fq: 50
  },
  "favourit": {
    dict: "happiness", word: "favourite", stem: "favourit", anew: "pet",
    avg: [ 5.1, 7.16 ], std: [ 2.59, 1.36 ], fq: 50
  },
  "shop": {
    dict: "happiness", word: "shopping", stem: "shop", anew: "grass",
    avg: [ 4.14, 7.1 ], std: [ 2.11, 1.54 ], fq: 50
  },
  "colour": {
    dict: "happiness", word: "colours", stem: "colour", anew: "color",
    avg: [ 4.73, 7.02 ], std: [ 2.64, 1.38 ], fq: 50
  },
  "easili": {
    dict: "happiness", word: "easily", stem: "easili", anew: "easy",
    avg: [ 4.48, 7.02 ], std: [ 2.82, 1.63 ], fq: 50
  },
  "plenti": {
    dict: "happiness", word: "plenty", stem: "plenti", anew: "mountain",
    avg: [ 5.49, 6.98 ], std: [ 2.43, 1.22 ], fq: 50
  },
  "experienc": {
    dict: "happiness", word: "experienced", stem: "experienc", anew: "lively",
    avg: [ 5.53, 6.82 ], std: [ 2.9, 1.17 ], fq: 50
  },
  "gain": {
    dict: "happiness", word: "gains", stem: "gain", anew: "win",
    avg: [ 7.72, 6.82 ], std: [ 2.16, 1.48 ], fq: 50
  },
  "prepar": {
    dict: "happiness", word: "prepared", stem: "prepar", anew: "machine",
    avg: [ 3.82, 6.74 ], std: [ 2.4, 1.07 ], fq: 50
  },
  "technolog": {
    dict: "happiness", word: "technology", stem: "technolog", anew: "engine",
    avg: [ 3.98, 6.74 ], std: [ 2.33, 1.5 ], fq: 50
  },
  "privileg": {
    dict: "happiness", word: "privilege", stem: "privileg", anew: "favor",
    avg: [ 4.54, 6.68 ], std: [ 1.86, 1.65 ], fq: 50
  },
  "theatr": {
    dict: "happiness", word: "theatre", stem: "theatr", anew: "house",
    avg: [ 4.56, 6.68 ], std: [ 2.41, 1.53 ], fq: 50
  },
  "lead": {
    dict: "happiness", word: "leading", stem: "lead", anew: "star",
    avg: [ 5.83, 6.64 ], std: [ 2.44, 1.51 ], fq: 50
  },
  "attain": {
    dict: "happiness", word: "attained", stem: "attain", anew: "hit",
    avg: [ 5.73, 6.62 ], std: [ 2.09, 1.4 ], fq: 50
  },
  "chat": {
    dict: "happiness", word: "chatting", stem: "chat", anew: "gossip",
    avg: [ 5.74, 6.62 ], std: [ 2.38, 1.24 ], fq: 50
  },
  "kitti": {
    dict: "happiness", word: "kitty", stem: "kitti", anew: "kitten",
    avg: [ 5.08, 6.62 ], std: [ 2.45, 1.86 ], fq: 50
  },
  "suitabl": {
    dict: "happiness", word: "suitable", stem: "suitabl", anew: "desire",
    avg: [ 7.35, 6.6 ], std: [ 1.76, 0.89 ], fq: 50
  },
  "vocal": {
    dict: "happiness", word: "vocals", stem: "vocal", anew: "song",
    avg: [ 6.07, 6.59 ], std: [ 2.42, 1.46 ], fq: 50
  },
  "worldwid": {
    dict: "happiness", word: "worldwide", stem: "worldwid", anew: "world",
    avg: [ 5.32, 6.56 ], std: [ 2.39, 1.26 ], fq: 50
  },
  "rise": {
    dict: "happiness", word: "rising", stem: "rise", anew: "revolt",
    avg: [ 6.56, 6.54 ], std: [ 2.34, 1.11 ], fq: 50
  },
  "ethic": {
    dict: "happiness", word: "ethics", stem: "ethic", anew: "moral",
    avg: [ 4.49, 6.52 ], std: [ 2.28, 1.36 ], fq: 50
  },
  "fri": {
    dict: "happiness", word: "fries", stem: "fri", anew: "child",
    avg: [ 5.55, 6.52 ], std: [ 2.29, 1.37 ], fq: 50
  },
  "ray": {
    dict: "happiness", word: "rays", stem: "ray", anew: "radiator",
    avg: [ 4.02, 6.49 ], std: [ 1.94, 1.42 ], fq: 50
  },
  "restor": {
    dict: "happiness", word: "restored", stem: "restor", anew: "doctor",
    avg: [ 5.86, 6.48 ], std: [ 2.7, 1.22 ], fq: 50
  },
  "cultiv": {
    dict: "happiness", word: "cultivated", stem: "cultiv", anew: "nature",
    avg: [ 4.37, 6.46 ], std: [ 2.51, 1.36 ], fq: 50
  },
  "curv": {
    dict: "happiness", word: "curves", stem: "curv", anew: "cut",
    avg: [ 5, 6.42 ], std: [ 2.32, 1.23 ], fq: 50
  },
  "deliv": {
    dict: "happiness", word: "delivered", stem: "deliv", anew: "save",
    avg: [ 4.95, 6.42 ], std: [ 2.19, 1.2 ], fq: 50
  },
  "pic": {
    dict: "happiness", word: "pics", stem: "pic", anew: "movie",
    avg: [ 4.93, 6.4 ], std: [ 2.54, 1.36 ], fq: 50
  },
  "resolv": {
    dict: "happiness", word: "resolved", stem: "resolv", anew: "answer",
    avg: [ 5.41, 6.4 ], std: [ 2.43, 1.47 ], fq: 50
  },
  "studi": {
    dict: "happiness", word: "studies", stem: "studi", anew: "field",
    avg: [ 4.08, 6.4 ], std: [ 2.41, 1.37 ], fq: 50
  },
  "twin": {
    dict: "happiness", word: "twins", stem: "twin", anew: "couple",
    avg: [ 6.39, 6.4 ], std: [ 2.31, 1.65 ], fq: 50
  },
  "acquir": {
    dict: "happiness", word: "acquire", stem: "acquir", anew: "win",
    avg: [ 7.72, 6.36 ], std: [ 2.16, 1.32 ], fq: 50
  },
  "branch": {
    dict: "happiness", word: "branches", stem: "branch", anew: "fork",
    avg: [ 3.96, 6.35 ], std: [ 1.94, 1.2 ], fq: 50
  },
  "newspap": {
    dict: "happiness", word: "newspaper", stem: "newspap", anew: "paper",
    avg: [ 2.5, 6.32 ], std: [ 1.85, 1.35 ], fq: 50
  },
  "volum": {
    dict: "happiness", word: "volumes", stem: "volum", anew: "book",
    avg: [ 4.17, 6.31 ], std: [ 2.49, 1.29 ], fq: 50
  },
  "flow": {
    dict: "happiness", word: "flowing", stem: "flow", anew: "fall",
    avg: [ 4.7, 6.3 ], std: [ 2.48, 1.37 ], fq: 50
  },
  "join": {
    dict: "happiness", word: "joined", stem: "join", anew: "couple",
    avg: [ 6.39, 6.3 ], std: [ 2.31, 1.09 ], fq: 50
  },
  "cheek": {
    dict: "happiness", word: "cheeks", stem: "cheek", anew: "bold",
    avg: [ 5.6, 6.29 ], std: [ 2.21, 1.53 ], fq: 50
  },
  "fairli": {
    dict: "happiness", word: "fairly", stem: "fairli", anew: "pretty",
    avg: [ 6.03, 6.28 ], std: [ 2.22, 1.16 ], fq: 50
  },
  "introduc": {
    dict: "happiness", word: "introduced", stem: "introduc", anew: "present",
    avg: [ 5.12, 6.28 ], std: [ 2.39, 1.36 ], fq: 50
  },
  "lot": {
    dict: "happiness", word: "lots", stem: "lot", anew: "mountain",
    avg: [ 5.49, 6.28 ], std: [ 2.43, 1.43 ], fq: 50
  },
  "theme": {
    dict: "happiness", word: "themes", stem: "theme", anew: "idea",
    avg: [ 5.86, 6.28 ], std: [ 1.81, 1.25 ], fq: 50
  },
  "regard": {
    dict: "happiness", word: "regards", stem: "regard", anew: "wish",
    avg: [ 5.16, 6.27 ], std: [ 2.62, 1.33 ], fq: 50
  },
  "promin": {
    dict: "happiness", word: "prominent", stem: "promin", anew: "outstanding",
    avg: [ 6.24, 6.26 ], std: [ 2.59, 1.1 ], fq: 50
  },
  "fli": {
    dict: "happiness", word: "flying", stem: "fli", anew: "quick",
    avg: [ 6.57, 6.24 ], std: [ 1.78, 1.65 ], fq: 50
  },
  "foundat": {
    dict: "happiness", word: "foundations", stem: "foundat", anew: "foot",
    avg: [ 3.27, 6.22 ], std: [ 1.98, 1.17 ], fq: 50
  },
  "lift": {
    dict: "happiness", word: "lifted", stem: "lift", anew: "pinch",
    avg: [ 4.59, 6.2 ], std: [ 2.1, 1.23 ], fq: 50
  },
  "certif": {
    dict: "happiness", word: "certificate", stem: "certif", anew: "secure",
    avg: [ 3.14, 6.18 ], std: [ 2.47, 1.14 ], fq: 50
  },
  "establish": {
    dict: "happiness", word: "established", stem: "establish", anew: "nature",
    avg: [ 4.37, 6.18 ], std: [ 2.51, 1.17 ], fq: 50
  },
  "resolut": {
    dict: "happiness", word: "resolution", stem: "resolut", anew: "answer",
    avg: [ 5.41, 6.18 ], std: [ 2.43, 1.29 ], fq: 50
  },
  "appli": {
    dict: "happiness", word: "applying", stem: "appli", anew: "employment",
    avg: [ 5.28, 6.16 ], std: [ 2.12, 1.16 ], fq: 50
  },
  "automobil": {
    dict: "happiness", word: "automobile", stem: "automobil", anew: "machine",
    avg: [ 3.82, 6.16 ], std: [ 2.4, 1.38 ], fq: 50
  },
  "consciou": {
    dict: "happiness", word: "conscious", stem: "consciou", anew: "wit",
    avg: [ 5.42, 6.14 ], std: [ 2.44, 1.39 ], fq: 50
  },
  "kindl": {
    dict: "happiness", word: "kindle", stem: "kindl", anew: "fire",
    avg: [ 7.17, 6.14 ], std: [ 2.06, 1.25 ], fq: 50
  },
  "place": {
    dict: "happiness", word: "places", stem: "place", anew: "seat",
    avg: [ 2.95, 6.14 ], std: [ 1.72, 1.16 ], fq: 50
  },
  "strongli": {
    dict: "happiness", word: "strongly", stem: "strongli", anew: "powerful",
    avg: [ 5.83, 6.14 ], std: [ 2.69, 1.28 ], fq: 50
  },
  "exclus": {
    dict: "happiness", word: "exclusively", stem: "exclus", anew: "alone",
    avg: [ 4.83, 6.12 ], std: [ 2.66, 1.44 ], fq: 50
  },
  "outcom": {
    dict: "happiness", word: "outcomes", stem: "outcom", anew: "event",
    avg: [ 5.1, 6.12 ], std: [ 2.4, 1.44 ], fq: 50
  },
  "ensur": {
    dict: "happiness", word: "ensure", stem: "ensur", anew: "controlling",
    avg: [ 6.1, 6.12 ], std: [ 2.19, 1.36 ], fq: 50
  },
  "cattl": {
    dict: "happiness", word: "cattle", stem: "cattl", anew: "cow",
    avg: [ 3.49, 6.1 ], std: [ 2.13, 1.39 ], fq: 50
  },
  "increasingli": {
    dict: "happiness", word: "increasingly", stem: "increasingli", anew: "progress",
    avg: [ 6.02, 6.1 ], std: [ 2.58, 1.34 ], fq: 50
  },
  "acquaint": {
    dict: "happiness", word: "acquainted", stem: "acquaint", anew: "present",
    avg: [ 5.12, 6.08 ], std: [ 2.39, 1.55 ], fq: 50
  },
  "boot": {
    dict: "happiness", word: "boots", stem: "boot", anew: "thrill",
    avg: [ 8.02, 6.08 ], std: [ 1.65, 1.37 ], fq: 50
  },
  "introduct": {
    dict: "happiness", word: "introduction", stem: "introduct", anew: "present",
    avg: [ 5.12, 6.08 ], std: [ 2.39, 1.01 ], fq: 50
  },
  "pick": {
    dict: "happiness", word: "picked", stem: "pick", anew: "foot",
    avg: [ 3.27, 6.08 ], std: [ 1.98, 1.21 ], fq: 50
  },
  "reach": {
    dict: "happiness", word: "reached", stem: "reach", anew: "hit",
    avg: [ 5.73, 6.08 ], std: [ 2.09, 1.26 ], fq: 50
  },
  "composit": {
    dict: "happiness", word: "composition", stem: "composit", anew: "paper",
    avg: [ 2.5, 6.06 ], std: [ 1.85, 1.19 ], fq: 50
  },
  "dime": {
    dict: "happiness", word: "dimes", stem: "dime", anew: "blind",
    avg: [ 4.39, 6.06 ], std: [ 2.36, 1.22 ], fq: 50
  },
  "influenc": {
    dict: "happiness", word: "influences", stem: "influenc", anew: "charm",
    avg: [ 5.16, 6.06 ], std: [ 2.25, 1.22 ], fq: 50
  },
  "serv": {
    dict: "happiness", word: "servings", stem: "serv", anew: "answer",
    avg: [ 5.41, 6.06 ], std: [ 2.43, 1.41 ], fq: 50
  },
  "point": {
    dict: "happiness", word: "points", stem: "point", anew: "detail",
    avg: [ 4.1, 6.04 ], std: [ 2.24, 1.47 ], fq: 50
  },
  "prevent": {
    dict: "happiness", word: "prevention", stem: "prevent", anew: "bar",
    avg: [ 5, 6.04 ], std: [ 2.83, 1.23 ], fq: 50
  },
  "sign": {
    dict: "happiness", word: "signing", stem: "sign", anew: "bless",
    avg: [ 4.05, 6.04 ], std: [ 2.59, 1.48 ], fq: 50
  },
  "word": {
    dict: "happiness", word: "words", stem: "word", anew: "news",
    avg: [ 5.17, 6.04 ], std: [ 2.11, 1.19 ], fq: 50
  },
  "card": {
    dict: "happiness", word: "cards", stem: "card", anew: "wit",
    avg: [ 5.42, 6.02 ], std: [ 2.44, 1.3 ], fq: 50
  },
  "deliveri": {
    dict: "happiness", word: "delivery", stem: "deliveri", anew: "rescue",
    avg: [ 6.53, 6.02 ], std: [ 2.56, 1.44 ], fq: 50
  },
  "record": {
    dict: "happiness", word: "records", stem: "record", anew: "memory",
    avg: [ 5.42, 6.02 ], std: [ 2.25, 1.29 ], fq: 50
  },
  "tri": {
    dict: "happiness", word: "try", stem: "tri", anew: "stress",
    avg: [ 7.45, 6.02 ], std: [ 2.38, 0.94 ], fq: 50
  },
  "site": {
    dict: "happiness", word: "sites", stem: "site", anew: "seat",
    avg: [ 2.95, 6 ], std: [ 1.72, 1.16 ], fq: 50
  },
  "store": {
    dict: "happiness", word: "stores", stem: "store", anew: "memory",
    avg: [ 5.42, 6 ], std: [ 2.25, 0.97 ], fq: 50
  },
  "biographi": {
    dict: "happiness", word: "biography", stem: "biographi", anew: "life",
    avg: [ 6.02, 5.98 ], std: [ 2.62, 1.45 ], fq: 50
  },
  "explain": {
    dict: "happiness", word: "explained", stem: "explain", anew: "excuse",
    avg: [ 4.48, 5.98 ], std: [ 2.29, 1.32 ], fq: 50
  },
  "lesson": {
    dict: "happiness", word: "lessons", stem: "lesson", anew: "moral",
    avg: [ 4.49, 5.98 ], std: [ 2.28, 1.38 ], fq: 50
  },
  "look": {
    dict: "happiness", word: "looks", stem: "look", anew: "spirit",
    avg: [ 5.56, 5.98 ], std: [ 2.62, 1.38 ], fq: 50
  },
  "nation": {
    dict: "happiness", word: "national", stem: "nation", anew: "home",
    avg: [ 4.21, 5.98 ], std: [ 2.94, 1.15 ], fq: 50
  },
  "pair": {
    dict: "happiness", word: "pairs", stem: "pair", anew: "couple",
    avg: [ 6.39, 5.98 ], std: [ 2.31, 1.17 ], fq: 50
  },
  "repres": {
    dict: "happiness", word: "represented", stem: "repres", anew: "present",
    avg: [ 5.12, 5.98 ], std: [ 2.39, 1.17 ], fq: 50
  },
  "convinc": {
    dict: "happiness", word: "convinced", stem: "convinc", anew: "confident",
    avg: [ 6.22, 5.96 ], std: [ 2.41, 0.97 ], fq: 50
  },
  "heel": {
    dict: "happiness", word: "heels", stem: "heel", anew: "dog",
    avg: [ 5.76, 5.96 ], std: [ 2.5, 1.12 ], fq: 50
  },
  "spread": {
    dict: "happiness", word: "spreading", stem: "spread", anew: "air",
    avg: [ 4.12, 5.96 ], std: [ 2.3, 1.31 ], fq: 50
  },
  "fiddl": {
    dict: "happiness", word: "fiddle", stem: "fiddl", anew: "toy",
    avg: [ 5.11, 5.96 ], std: [ 2.84, 1.73 ], fq: 50
  },
  "altern": {
    dict: "happiness", word: "alternative", stem: "altern", anew: "option",
    avg: [ 4.74, 5.94 ], std: [ 2.23, 1.39 ], fq: 50
  },
  "diari": {
    dict: "happiness", word: "diary", stem: "diari", anew: "journal",
    avg: [ 4.05, 5.94 ], std: [ 1.96, 1.15 ], fq: 50
  },
  "realiti": {
    dict: "happiness", word: "reality", stem: "realiti", anew: "world",
    avg: [ 5.32, 5.94 ], std: [ 2.39, 1.65 ], fq: 50
  },
  "trend": {
    dict: "happiness", word: "trends", stem: "trend", anew: "cut",
    avg: [ 5, 5.94 ], std: [ 2.32, 1.28 ], fq: 50
  },
  "process": {
    dict: "happiness", word: "processing", stem: "process", anew: "treat",
    avg: [ 5.62, 5.94 ], std: [ 2.25, 1.41 ], fq: 50
  },
  "boob": {
    dict: "happiness", word: "boobs", stem: "boob", anew: "dummy",
    avg: [ 4.35, 5.92 ], std: [ 2.25, 2.14 ], fq: 50
  },
  "cover": {
    dict: "happiness", word: "covered", stem: "cover", anew: "hide",
    avg: [ 5.28, 5.92 ], std: [ 2.51, 1.01 ], fq: 50
  },
  "rate": {
    dict: "happiness", word: "ratings", stem: "rate", anew: "betray",
    avg: [ 7.24, 5.9 ], std: [ 2.06, 1.27 ], fq: 50
  },
  "angl": {
    dict: "happiness", word: "angle", stem: "angl", anew: "fish",
    avg: [ 4, 5.9 ], std: [ 2.19, 1.36 ], fq: 50
  },
  "dolli": {
    dict: "happiness", word: "dolly", stem: "dolli", anew: "doll",
    avg: [ 4.24, 5.9 ], std: [ 2.43, 1.34 ], fq: 50
  },
  "evid": {
    dict: "happiness", word: "evidently", stem: "evid", anew: "plain",
    avg: [ 3.52, 5.88 ], std: [ 2.05, 1.35 ], fq: 50
  },
  "primari": {
    dict: "happiness", word: "primary", stem: "primari", anew: "masterful",
    avg: [ 5.2, 5.88 ], std: [ 2.85, 1.12 ], fq: 50
  },
  "print": {
    dict: "happiness", word: "printed", stem: "print", anew: "impressed",
    avg: [ 5.42, 5.88 ], std: [ 2.65, 0.96 ], fq: 50
  },
  "sequenc": {
    dict: "happiness", word: "sequence", stem: "sequenc", anew: "success",
    avg: [ 6.11, 5.88 ], std: [ 2.65, 1.32 ], fq: 50
  },
  "sustain": {
    dict: "happiness", word: "sustained", stem: "sustain", anew: "nourish",
    avg: [ 4.29, 5.88 ], std: [ 2.51, 1.41 ], fq: 50
  },
  "demonstr": {
    dict: "happiness", word: "demonstration", stem: "demonstr", anew: "present",
    avg: [ 5.12, 5.88 ], std: [ 2.39, 1.22 ], fq: 50
  },
  "arrang": {
    dict: "happiness", word: "arrangement", stem: "arrang", anew: "agreement",
    avg: [ 5.02, 5.86 ], std: [ 2.24, 1.12 ], fq: 50
  },
  "figur": {
    dict: "happiness", word: "figures", stem: "figur", anew: "computer",
    avg: [ 4.75, 5.86 ], std: [ 1.93, 1.18 ], fq: 50
  },
  "presid": {
    dict: "happiness", word: "president", stem: "presid", anew: "chair",
    avg: [ 3.15, 5.86 ], std: [ 1.77, 2.11 ], fq: 50
  },
  "variat": {
    dict: "happiness", word: "variations", stem: "variat", anew: "mutation",
    avg: [ 4.84, 5.86 ], std: [ 2.52, 1.2 ], fq: 50
  },
  "viewer": {
    dict: "happiness", word: "viewers", stem: "viewer", anew: "wit",
    avg: [ 5.42, 5.86 ], std: [ 2.44, 1.28 ], fq: 50
  },
  "wrap": {
    dict: "happiness", word: "wrapped", stem: "wrap", anew: "clothing",
    avg: [ 4.78, 5.86 ], std: [ 2.88, 1.31 ], fq: 50
  },
  "autonomi": {
    dict: "happiness", word: "autonomy", stem: "autonomi", anew: "liberty",
    avg: [ 5.6, 5.86 ], std: [ 2.65, 1.59 ], fq: 50
  },
  "class": {
    dict: "happiness", word: "classes", stem: "class", anew: "family",
    avg: [ 4.8, 5.84 ], std: [ 2.71, 1.33 ], fq: 50
  },
  "come": {
    dict: "happiness", word: "coming", stem: "come", anew: "orgasm",
    avg: [ 8.1, 5.84 ], std: [ 1.45, 1.2 ], fq: 50
  },
  "curri": {
    dict: "happiness", word: "curry", stem: "curri", anew: "dress",
    avg: [ 4.05, 5.84 ], std: [ 1.89, 1.82 ], fq: 50
  },
  "graviti": {
    dict: "happiness", word: "gravity", stem: "graviti", anew: "solemn",
    avg: [ 3.56, 5.84 ], std: [ 1.95, 1.58 ], fq: 50
  },
  "realli": {
    dict: "happiness", word: "really", stem: "realli", anew: "rattle",
    avg: [ 4.36, 5.84 ], std: [ 2.18, 1.49 ], fq: 50
  },
  "sampl": {
    dict: "happiness", word: "sample", stem: "sampl", anew: "taste",
    avg: [ 5.22, 5.84 ], std: [ 2.38, 0.93 ], fq: 50
  },
  "stage": {
    dict: "happiness", word: "stages", stem: "stage", anew: "rat",
    avg: [ 4.95, 5.84 ], std: [ 2.36, 1.54 ], fq: 50
  },
  "absorpt": {
    dict: "happiness", word: "absorption", stem: "absorpt", anew: "concentrate",
    avg: [ 4.65, 5.84 ], std: [ 2.13, 1.36 ], fq: 50
  },
  "exampl": {
    dict: "happiness", word: "examples", stem: "exampl", anew: "exercise",
    avg: [ 6.84, 5.84 ], std: [ 2.06, 1.46 ], fq: 50
  },
  "emphas": {
    dict: "happiness", word: "emphasized", stem: "emphas", anew: "stress",
    avg: [ 7.45, 5.82 ], std: [ 2.38, 1.44 ], fq: 50
  },
  "endow": {
    dict: "happiness", word: "endowment", stem: "endow", anew: "talent",
    avg: [ 6.27, 5.82 ], std: [ 1.8, 1.51 ], fq: 50
  },
  "involv": {
    dict: "happiness", word: "involved", stem: "involv", anew: "affection",
    avg: [ 6.21, 5.82 ], std: [ 2.75, 1.34 ], fq: 50
  },
  "quickli": {
    dict: "happiness", word: "quickly", stem: "quickli", anew: "quick",
    avg: [ 6.57, 5.82 ], std: [ 1.78, 1.45 ], fq: 50
  },
  "acquisit": {
    dict: "happiness", word: "acquisition", stem: "acquisit", anew: "learn",
    avg: [ 5.39, 5.8 ], std: [ 2.22, 1.53 ], fq: 50
  },
  "doubl": {
    dict: "happiness", word: "double", stem: "doubl", anew: "fork",
    avg: [ 3.96, 5.8 ], std: [ 1.94, 1.37 ], fq: 50
  },
  "outsid": {
    dict: "happiness", word: "outside", stem: "outsid", anew: "outdoors",
    avg: [ 5.92, 5.8 ], std: [ 2.55, 1.68 ], fq: 50
  },
  "practic": {
    dict: "happiness", word: "practice", stem: "practic", anew: "useful",
    avg: [ 4.26, 5.8 ], std: [ 2.47, 1.34 ], fq: 50
  },
  "shape": {
    dict: "happiness", word: "shaped", stem: "shape", anew: "mold",
    avg: [ 4.07, 5.8 ], std: [ 1.98, 1.21 ], fq: 50
  },
  "manufactur": {
    dict: "happiness", word: "manufacture", stem: "manufactur", anew: "fabric",
    avg: [ 4.14, 5.8 ], std: [ 1.98, 1.43 ], fq: 50
  },
  "contain": {
    dict: "happiness", word: "containing", stem: "contain", anew: "controlling",
    avg: [ 6.1, 5.78 ], std: [ 2.19, 1 ], fq: 50
  },
  "plate": {
    dict: "happiness", word: "plates", stem: "plate", anew: "home",
    avg: [ 4.21, 5.78 ], std: [ 2.94, 1.33 ], fq: 50
  },
  "shuttl": {
    dict: "happiness", word: "shuttle", stem: "shuttl", anew: "bird",
    avg: [ 3.17, 5.78 ], std: [ 2.23, 0.93 ], fq: 50
  },
  "variou": {
    dict: "happiness", word: "various", stem: "variou", anew: "respectful",
    avg: [ 4.6, 5.78 ], std: [ 2.67, 0.86 ], fq: 50
  },
  "compon": {
    dict: "happiness", word: "components", stem: "compon", anew: "part",
    avg: [ 3.82, 5.78 ], std: [ 2.24, 1.37 ], fq: 50
  },
  "describ": {
    dict: "happiness", word: "describes", stem: "describ", anew: "key",
    avg: [ 3.7, 5.76 ], std: [ 2.18, 1.08 ], fq: 50
  },
  "facil": {
    dict: "happiness", word: "facilities", stem: "facil", anew: "quick",
    avg: [ 6.57, 5.76 ], std: [ 1.78, 1.45 ], fq: 50
  },
  "function": {
    dict: "happiness", word: "functions", stem: "function", anew: "useful",
    avg: [ 4.26, 5.76 ], std: [ 2.47, 1.24 ], fq: 50
  },
  "probabl": {
    dict: "happiness", word: "probability", stem: "probabl", anew: "chance",
    avg: [ 5.38, 5.76 ], std: [ 2.58, 1.25 ], fq: 50
  },
  "sell": {
    dict: "happiness", word: "selling", stem: "sell", anew: "betray",
    avg: [ 7.24, 5.76 ], std: [ 2.06, 1.59 ], fq: 50
  },
  "thoroughli": {
    dict: "happiness", word: "thoroughly", stem: "thoroughli", anew: "good",
    avg: [ 5.43, 5.76 ], std: [ 2.85, 1.44 ], fq: 50
  },
  "fundament": {
    dict: "happiness", word: "fundamental", stem: "fundament", anew: "key",
    avg: [ 3.7, 5.74 ], std: [ 2.18, 0.96 ], fq: 50
  },
  "settl": {
    dict: "happiness", word: "settled", stem: "settl", anew: "fall",
    avg: [ 4.7, 5.74 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "wive": {
    dict: "happiness", word: "wives", stem: "wive", anew: "wife",
    avg: [ 4.93, 5.74 ], std: [ 2.22, 1.95 ], fq: 50
  },
  "funki": {
    dict: "happiness", word: "funky", stem: "funki", anew: "stink",
    avg: [ 4.26, 5.72 ], std: [ 2.1, 1.68 ], fq: 50
  },
  "happen": {
    dict: "happiness", word: "happening", stem: "happen", anew: "material",
    avg: [ 4.05, 5.72 ], std: [ 2.34, 1.01 ], fq: 50
  },
  "hypothesi": {
    dict: "happiness", word: "hypothesis", stem: "hypothesi", anew: "theory",
    avg: [ 4.62, 5.72 ], std: [ 1.94, 1.54 ], fq: 50
  },
  "implement": {
    dict: "happiness", word: "implementation", stem: "implement", anew: "execution",
    avg: [ 5.71, 5.72 ], std: [ 2.74, 1.28 ], fq: 50
  },
  "quietli": {
    dict: "happiness", word: "quietly", stem: "quietli", anew: "quiet",
    avg: [ 2.82, 5.72 ], std: [ 2.13, 1.4 ], fq: 50
  },
  "role": {
    dict: "happiness", word: "roles", stem: "role", anew: "useful",
    avg: [ 4.26, 5.72 ], std: [ 2.47, 1.4 ], fq: 50
  },
  "sourc": {
    dict: "happiness", word: "source", stem: "sourc", anew: "germs",
    avg: [ 4.49, 5.72 ], std: [ 2.24, 1.21 ], fq: 50
  },
  "use": {
    dict: "happiness", word: "uses", stem: "use", anew: "useful",
    avg: [ 4.26, 5.72 ], std: [ 2.47, 1.16 ], fq: 50
  },
  "appoint": {
    dict: "happiness", word: "appointed", stem: "appoint", anew: "name",
    avg: [ 4.25, 5.7 ], std: [ 2.47, 1.42 ], fq: 50
  },
  "ralli": {
    dict: "happiness", word: "rally", stem: "ralli", anew: "mobility",
    avg: [ 5, 5.7 ], std: [ 2.18, 1.25 ], fq: 50
  },
  "roll": {
    dict: "happiness", word: "rolling", stem: "roll", anew: "revolver",
    avg: [ 5.55, 5.7 ], std: [ 2.39, 1.25 ], fq: 50
  },
  "emphasi": {
    dict: "happiness", word: "emphasis", stem: "emphasi", anew: "stress",
    avg: [ 7.45, 5.68 ], std: [ 2.38, 1 ], fq: 50
  },
  "ground": {
    dict: "happiness", word: "grounds", stem: "ground", anew: "earth",
    avg: [ 4.24, 5.68 ], std: [ 2.49, 1.24 ], fq: 50
  },
  "public": {
    dict: "happiness", word: "publicity", stem: "public", anew: "promotion",
    avg: [ 6.44, 5.68 ], std: [ 2.58, 1.38 ], fq: 50
  },
  "pursu": {
    dict: "happiness", word: "pursue", stem: "pursu", anew: "engaged",
    avg: [ 6.77, 5.68 ], std: [ 2.07, 1.48 ], fq: 50
  },
  "sit": {
    dict: "happiness", word: "sitting", stem: "sit", anew: "seat",
    avg: [ 2.95, 5.68 ], std: [ 1.72, 1.1 ], fq: 50
  },
  "suggest": {
    dict: "happiness", word: "suggests", stem: "suggest", anew: "intimate",
    avg: [ 6.98, 5.68 ], std: [ 2.21, 0.94 ], fq: 50
  },
  "saddl": {
    dict: "happiness", word: "saddle", stem: "saddl", anew: "burdened",
    avg: [ 5.63, 5.67 ], std: [ 2.07, 1.45 ], fq: 50
  },
  "absorb": {
    dict: "happiness", word: "absorbed", stem: "absorb", anew: "engaged",
    avg: [ 6.77, 5.66 ], std: [ 2.07, 1.48 ], fq: 50
  },
  "occupi": {
    dict: "happiness", word: "occupy", stem: "occupi", anew: "engaged",
    avg: [ 6.77, 5.66 ], std: [ 2.07, 1.56 ], fq: 50
  },
  "rug": {
    dict: "happiness", word: "rugged", stem: "rug", anew: "broken",
    avg: [ 5.43, 5.66 ], std: [ 2.42, 1.67 ], fq: 50
  },
  "vers": {
    dict: "happiness", word: "verse", stem: "vers", anew: "poetry",
    avg: [ 4, 5.66 ], std: [ 2.85, 1.36 ], fq: 50
  },
  "common": {
    dict: "happiness", word: "commons", stem: "common", anew: "green",
    avg: [ 4.28, 5.64 ], std: [ 2.46, 1.35 ], fq: 50
  },
  "competit": {
    dict: "happiness", word: "competition", stem: "competit", anew: "contents",
    avg: [ 4.32, 5.64 ], std: [ 2.14, 1.7 ], fq: 50
  },
  "entitl": {
    dict: "happiness", word: "entitled", stem: "entitl", anew: "gentle",
    avg: [ 3.21, 5.64 ], std: [ 2.57, 1.51 ], fq: 50
  },
  "portion": {
    dict: "happiness", word: "portions", stem: "portion", anew: "part",
    avg: [ 3.82, 5.64 ], std: [ 2.24, 1.26 ], fq: 50
  },
  "sheet": {
    dict: "happiness", word: "sheets", stem: "sheet", anew: "plane",
    avg: [ 6.14, 5.64 ], std: [ 2.39, 1.06 ], fq: 50
  },
  "ventur": {
    dict: "happiness", word: "venture", stem: "ventur", anew: "adventure",
    avg: [ 6.98, 5.64 ], std: [ 2.15, 1.32 ], fq: 50
  },
  "comment": {
    dict: "happiness", word: "comments", stem: "comment", anew: "gossip",
    avg: [ 5.74, 5.62 ], std: [ 2.38, 1.05 ], fq: 50
  },
  "leav": {
    dict: "happiness", word: "leaves", stem: "leav", anew: "part",
    avg: [ 3.82, 5.62 ], std: [ 2.24, 1.79 ], fq: 50
  },
  "appar": {
    dict: "happiness", word: "apparent", stem: "appar", anew: "patent",
    avg: [ 3.5, 5.6 ], std: [ 1.84, 1.07 ], fq: 50
  },
  "assembl": {
    dict: "happiness", word: "assembly", stem: "assembl", anew: "fabric",
    avg: [ 4.14, 5.6 ], std: [ 1.98, 1.09 ], fq: 50
  },
  "center": {
    dict: "happiness", word: "centers", stem: "center", anew: "heart",
    avg: [ 6.34, 5.6 ], std: [ 2.25, 0.9 ], fq: 50
  },
  "combin": {
    dict: "happiness", word: "combined", stem: "combin", anew: "unit",
    avg: [ 3.75, 5.6 ], std: [ 2.49, 1.11 ], fq: 50
  },
  "entir": {
    dict: "happiness", word: "entirely", stem: "entir", anew: "alone",
    avg: [ 4.83, 5.6 ], std: [ 2.66, 1.14 ], fq: 50
  },
  "immedi": {
    dict: "happiness", word: "immediate", stem: "immedi", anew: "quick",
    avg: [ 6.57, 5.6 ], std: [ 1.78, 1.67 ], fq: 50
  },
  "util": {
    dict: "happiness", word: "utilities", stem: "util", anew: "useful",
    avg: [ 4.26, 5.6 ], std: [ 2.47, 1.7 ], fq: 50
  },
  "constitut": {
    dict: "happiness", word: "constituted", stem: "constitut", anew: "plant",
    avg: [ 3.62, 5.59 ], std: [ 2.25, 1.14 ], fq: 50
  },
  "form": {
    dict: "happiness", word: "formed", stem: "form", anew: "spring",
    avg: [ 5.67, 5.58 ], std: [ 2.51, 1.16 ], fq: 50
  },
  "identifi": {
    dict: "happiness", word: "identify", stem: "identifi", anew: "name",
    avg: [ 4.25, 5.58 ], std: [ 2.47, 1.36 ], fq: 50
  },
  "return": {
    dict: "happiness", word: "returning", stem: "return", anew: "fall",
    avg: [ 4.7, 5.58 ], std: [ 2.48, 1.47 ], fq: 50
  },
  "room": {
    dict: "happiness", word: "rooms", stem: "room", anew: "board",
    avg: [ 3.36, 5.58 ], std: [ 2.12, 0.91 ], fq: 50
  },
  "shortli": {
    dict: "happiness", word: "shortly", stem: "shortli", anew: "present",
    avg: [ 5.12, 5.58 ], std: [ 2.39, 1.31 ], fq: 50
  },
  "sole": {
    dict: "happiness", word: "solely", stem: "sole", anew: "alone",
    avg: [ 4.83, 5.58 ], std: [ 2.66, 1.34 ], fq: 50
  },
  "densiti": {
    dict: "happiness", word: "density", stem: "densiti", anew: "concentrate",
    avg: [ 4.65, 5.57 ], std: [ 2.13, 1.2 ], fq: 50
  },
  "illus": {
    dict: "happiness", word: "illusion", stem: "illus", anew: "fantasy",
    avg: [ 5.14, 5.56 ], std: [ 2.82, 1.5 ], fq: 50
  },
  "rang": {
    dict: "happiness", word: "range", stem: "rang", anew: "stove",
    avg: [ 4.51, 5.56 ], std: [ 2.14, 1.01 ], fq: 50
  },
  "step": {
    dict: "happiness", word: "stepping", stem: "step", anew: "abuse",
    avg: [ 6.83, 5.56 ], std: [ 2.7, 0.99 ], fq: 50
  },
  "substanc": {
    dict: "happiness", word: "substance", stem: "substanc", anew: "heart",
    avg: [ 6.34, 5.56 ], std: [ 2.25, 1.11 ], fq: 50
  },
  "work": {
    dict: "happiness", word: "working", stem: "work", anew: "mold",
    avg: [ 4.07, 5.56 ], std: [ 1.98, 1.76 ], fq: 50
  },
  "calcul": {
    dict: "happiness", word: "calculations", stem: "calcul", anew: "computer",
    avg: [ 4.75, 5.55 ], std: [ 1.93, 1.6 ], fq: 50
  },
  "firmli": {
    dict: "happiness", word: "firmly", stem: "firmli", anew: "secure",
    avg: [ 3.14, 5.54 ], std: [ 2.47, 1.23 ], fq: 50
  },
  "handl": {
    dict: "happiness", word: "handle", stem: "handl", anew: "treat",
    avg: [ 5.62, 5.54 ], std: [ 2.25, 1.05 ], fq: 50
  },
  "obvious": {
    dict: "happiness", word: "obviously", stem: "obvious", anew: "plain",
    avg: [ 3.52, 5.54 ], std: [ 2.05, 1.27 ], fq: 50
  },
  "post": {
    dict: "happiness", word: "posted", stem: "post", anew: "mail",
    avg: [ 5.63, 5.54 ], std: [ 2.36, 1.13 ], fq: 50
  },
  "region": {
    dict: "happiness", word: "regions", stem: "region", anew: "part",
    avg: [ 3.82, 5.54 ], std: [ 2.24, 1.11 ], fq: 50
  },
  "reli": {
    dict: "happiness", word: "rely", stem: "reli", anew: "trust",
    avg: [ 5.3, 5.53 ], std: [ 2.66, 1.46 ], fq: 50
  },
  "blaze": {
    dict: "happiness", word: "blazing", stem: "blaze", anew: "blind",
    avg: [ 4.39, 5.52 ], std: [ 2.36, 2.06 ], fq: 50
  },
  "categori": {
    dict: "happiness", word: "categories", stem: "categori", anew: "family",
    avg: [ 4.8, 5.52 ], std: [ 2.71, 1.23 ], fq: 50
  },
  "usag": {
    dict: "happiness", word: "usage", stem: "usag", anew: "employment",
    avg: [ 5.28, 5.52 ], std: [ 2.12, 1.5 ], fq: 50
  },
  "capac": {
    dict: "happiness", word: "capacity", stem: "capac", anew: "contents",
    avg: [ 4.32, 5.5 ], std: [ 2.14, 1.42 ], fq: 50
  },
  "genet": {
    dict: "happiness", word: "genetic", stem: "genet", anew: "family",
    avg: [ 4.8, 5.5 ], std: [ 2.71, 1.25 ], fq: 50
  },
  "minut": {
    dict: "happiness", word: "minute", stem: "minut", anew: "moment",
    avg: [ 3.83, 5.5 ], std: [ 2.29, 0.93 ], fq: 50
  },
  "transmiss": {
    dict: "happiness", word: "transmission", stem: "transmiss", anew: "infection",
    avg: [ 5.03, 5.5 ], std: [ 2.77, 1.33 ], fq: 50
  },
  "encount": {
    dict: "happiness", word: "encountered", stem: "encount", anew: "chance",
    avg: [ 5.38, 5.48 ], std: [ 2.58, 1.33 ], fq: 50
  },
  "load": {
    dict: "happiness", word: "loaded", stem: "load", anew: "money",
    avg: [ 5.7, 5.47 ], std: [ 2.66, 1.84 ], fq: 50
  },
  "cavalri": {
    dict: "happiness", word: "cavalry", stem: "cavalri", anew: "horse",
    avg: [ 3.89, 5.46 ], std: [ 2.17, 1.73 ], fq: 50
  },
  "stack": {
    dict: "happiness", word: "stacks", stem: "stack", anew: "mountain",
    avg: [ 5.49, 5.46 ], std: [ 2.43, 1.33 ], fq: 50
  },
  "notion": {
    dict: "happiness", word: "notions", stem: "notion", anew: "impressed",
    avg: [ 5.42, 5.46 ], std: [ 2.65, 1.13 ], fq: 50
  },
  "situat": {
    dict: "happiness", word: "situations", stem: "situat", anew: "office",
    avg: [ 4.08, 5.45 ], std: [ 1.92, 1.14 ], fq: 50
  },
  "drawer": {
    dict: "happiness", word: "drawers", stem: "drawer", anew: "boxer",
    avg: [ 5.12, 5.45 ], std: [ 2.26, 1.32 ], fq: 50
  },
  "assign": {
    dict: "happiness", word: "assigned", stem: "assign", anew: "arrogant",
    avg: [ 5.65, 5.44 ], std: [ 2.23, 1.23 ], fq: 50
  },
  "centr": {
    dict: "happiness", word: "centres", stem: "centr", anew: "heart",
    avg: [ 6.34, 5.44 ], std: [ 2.25, 1.23 ], fq: 50
  },
  "compani": {
    dict: "happiness", word: "company", stem: "compani", anew: "party",
    avg: [ 6.69, 5.44 ], std: [ 2.84, 1.58 ], fq: 50
  },
  "storag": {
    dict: "happiness", word: "storage", stem: "storag", anew: "memory",
    avg: [ 5.42, 5.44 ], std: [ 2.25, 1.07 ], fq: 50
  },
  "mode": {
    dict: "happiness", word: "modes", stem: "mode", anew: "manner",
    avg: [ 4.56, 5.43 ], std: [ 1.78, 1.21 ], fq: 50
  },
  "cours": {
    dict: "happiness", word: "course", stem: "cours", anew: "nature",
    avg: [ 4.37, 5.42 ], std: [ 2.51, 1.37 ], fq: 50
  },
  "deriv": {
    dict: "happiness", word: "derived", stem: "deriv", anew: "education",
    avg: [ 5.74, 5.42 ], std: [ 2.46, 1.21 ], fq: 50
  },
  "floor": {
    dict: "happiness", word: "floors", stem: "floor", anew: "dump",
    avg: [ 4.12, 5.42 ], std: [ 2.36, 0.84 ], fq: 50
  },
  "mention": {
    dict: "happiness", word: "mentioned", stem: "mention", anew: "name",
    avg: [ 4.25, 5.42 ], std: [ 2.47, 1.11 ], fq: 50
  },
  "nowaday": {
    dict: "happiness", word: "nowadays", stem: "nowaday", anew: "present",
    avg: [ 5.12, 5.42 ], std: [ 2.39, 1.46 ], fq: 50
  },
  "boldfac": {
    dict: "happiness", word: "boldface", stem: "boldfac", anew: "bold",
    avg: [ 5.6, 5.4 ], std: [ 2.21, 1.09 ], fq: 50
  },
  "claim": {
    dict: "happiness", word: "claimed", stem: "claim", anew: "arrogant",
    avg: [ 5.65, 5.4 ], std: [ 2.23, 1.18 ], fq: 50
  },
  "consecut": {
    dict: "happiness", word: "consecutive", stem: "consecut", anew: "success",
    avg: [ 6.11, 5.4 ], std: [ 2.65, 1.16 ], fq: 50
  },
  "estim": {
    dict: "happiness", word: "estimate", stem: "estim", anew: "idea",
    avg: [ 5.86, 5.4 ], std: [ 1.81, 0.99 ], fq: 50
  },
  "put": {
    dict: "happiness", word: "putting", stem: "put", anew: "invest",
    avg: [ 5.12, 5.4 ], std: [ 2.42, 1.09 ], fq: 50
  },
  "basi": {
    dict: "happiness", word: "basis", stem: "basi", anew: "foot",
    avg: [ 3.27, 5.38 ], std: [ 1.98, 1.01 ], fq: 50
  },
  "standard": {
    dict: "happiness", word: "standards", stem: "standard", anew: "banner",
    avg: [ 3.83, 5.38 ], std: [ 1.95, 1.09 ], fq: 50
  },
  "trick": {
    dict: "happiness", word: "tricks", stem: "trick", anew: "magical",
    avg: [ 5.95, 5.38 ], std: [ 2.36, 1.52 ], fq: 50
  },
  "princip": {
    dict: "happiness", word: "principal", stem: "princip", anew: "star",
    avg: [ 5.83, 5.36 ], std: [ 2.44, 1.4 ], fq: 50
  },
  "back": {
    dict: "happiness", word: "backs", stem: "back", anew: "game",
    avg: [ 5.89, 5.34 ], std: [ 2.37, 1.44 ], fq: 50
  },
  "cross": {
    dict: "happiness", word: "crossing", stem: "cross", anew: "frustrated",
    avg: [ 5.61, 5.34 ], std: [ 2.76, 1.33 ], fq: 50
  },
  "current": {
    dict: "happiness", word: "currently", stem: "current", anew: "present",
    avg: [ 5.12, 5.34 ], std: [ 2.39, 0.82 ], fq: 50
  },
  "editori": {
    dict: "happiness", word: "editorial", stem: "editori", anew: "column",
    avg: [ 3.62, 5.34 ], std: [ 1.91, 1.36 ], fq: 50
  },
  "middl": {
    dict: "happiness", word: "middle", stem: "middl", anew: "heart",
    avg: [ 6.34, 5.34 ], std: [ 2.25, 0.72 ], fq: 50
  },
  "moder": {
    dict: "happiness", word: "moderate", stem: "moder", anew: "controlling",
    avg: [ 6.1, 5.34 ], std: [ 2.19, 1.27 ], fq: 50
  },
  "transmit": {
    dict: "happiness", word: "transmitted", stem: "transmit", anew: "family",
    avg: [ 4.8, 5.34 ], std: [ 2.71, 1.57 ], fq: 50
  },
  "measur": {
    dict: "happiness", word: "measure", stem: "measur", anew: "bar",
    avg: [ 5, 5.32 ], std: [ 2.83, 1.1 ], fq: 50
  },
  "partli": {
    dict: "happiness", word: "partly", stem: "partli", anew: "part",
    avg: [ 3.82, 5.32 ], std: [ 2.24, 1.17 ], fq: 50
  },
  "rebound": {
    dict: "happiness", word: "rebounds", stem: "rebound", anew: "spring",
    avg: [ 5.67, 5.32 ], std: [ 2.51, 1.32 ], fq: 50
  },
  "take": {
    dict: "happiness", word: "taking", stem: "take", anew: "learn",
    avg: [ 5.39, 5.32 ], std: [ 2.22, 1.3 ], fq: 50
  },
  "turn": {
    dict: "happiness", word: "turning", stem: "turn", anew: "deformed",
    avg: [ 4.07, 5.32 ], std: [ 2.34, 1.02 ], fq: 50
  },
  "consum": {
    dict: "happiness", word: "consume", stem: "consum", anew: "waste",
    avg: [ 4.14, 5.31 ], std: [ 2.3, 1.88 ], fq: 50
  },
  "circuit": {
    dict: "happiness", word: "circuits", stem: "circuit", anew: "circle",
    avg: [ 3.86, 5.3 ], std: [ 2.13, 0.76 ], fq: 50
  },
  "mile": {
    dict: "happiness", word: "miles", stem: "mile", anew: "knot",
    avg: [ 4.07, 5.3 ], std: [ 2.15, 1.17 ], fq: 50
  },
  "pound": {
    dict: "happiness", word: "pounds", stem: "pound", anew: "hammer",
    avg: [ 4.58, 5.3 ], std: [ 2.02, 1.82 ], fq: 50
  },
  "randi": {
    dict: "happiness", word: "randy", stem: "randi", anew: "aroused",
    avg: [ 6.63, 5.3 ], std: [ 2.7, 1.36 ], fq: 50
  },
  "somebodi": {
    dict: "happiness", word: "somebody", stem: "somebodi", anew: "person",
    avg: [ 4.19, 5.3 ], std: [ 2.45, 1.13 ], fq: 50
  },
  "someon": {
    dict: "happiness", word: "someone", stem: "someon", anew: "person",
    avg: [ 4.19, 5.3 ], std: [ 2.45, 1.17 ], fq: 50
  },
  "transit": {
    dict: "happiness", word: "transition", stem: "transit", anew: "passage",
    avg: [ 4.36, 5.3 ], std: [ 2.13, 1.36 ], fq: 50
  },
  "way": {
    dict: "happiness", word: "ways", stem: "way", anew: "manner",
    avg: [ 4.56, 5.3 ], std: [ 1.78, 1.17 ], fq: 50
  },
  "institut": {
    dict: "happiness", word: "institute", stem: "institut", anew: "plant",
    avg: [ 3.62, 5.28 ], std: [ 2.25, 1.41 ], fq: 50
  },
  "jame": {
    dict: "happiness", word: "james", stem: "jame", anew: "crushed",
    avg: [ 5.52, 5.28 ], std: [ 2.87, 1.07 ], fq: 50
  },
  "track": {
    dict: "happiness", word: "tracks", stem: "track", anew: "dog",
    avg: [ 5.76, 5.28 ], std: [ 2.5, 1.11 ], fq: 50
  },
  "wander": {
    dict: "happiness", word: "wandering", stem: "wander", anew: "mobility",
    avg: [ 5, 5.28 ], std: [ 2.18, 1.73 ], fq: 50
  },
  "agenc": {
    dict: "happiness", word: "agency", stem: "agenc", anew: "office",
    avg: [ 4.08, 5.26 ], std: [ 1.92, 0.92 ], fq: 50
  },
  "goe": {
    dict: "happiness", word: "goes", stem: "goe", anew: "ecstasy",
    avg: [ 7.38, 5.26 ], std: [ 1.92, 1.12 ], fq: 50
  },
  "line": {
    dict: "happiness", word: "lines", stem: "line", anew: "melody",
    avg: [ 4.98, 5.26 ], std: [ 2.52, 1.01 ], fq: 50
  },
  "nearli": {
    dict: "happiness", word: "nearly", stem: "nearli", anew: "intimate",
    avg: [ 6.98, 5.26 ], std: [ 2.21, 1.24 ], fq: 50
  },
  "piec": {
    dict: "happiness", word: "piece", stem: "piec", anew: "part",
    avg: [ 3.82, 5.26 ], std: [ 2.24, 1.07 ], fq: 50
  },
  "partial": {
    dict: "happiness", word: "partially", stem: "partial", anew: "part",
    avg: [ 3.82, 5.24 ], std: [ 2.24, 1.3 ], fq: 50
  },
  "bit": {
    dict: "happiness", word: "bits", stem: "bit", anew: "moment",
    avg: [ 3.83, 5.22 ], std: [ 2.29, 0.86 ], fq: 50
  },
  "caus": {
    dict: "happiness", word: "cause", stem: "caus", anew: "lawsuit",
    avg: [ 4.93, 5.22 ], std: [ 2.44, 1.06 ], fq: 50
  },
  "tranc": {
    dict: "happiness", word: "trance", stem: "tranc", anew: "fascinate",
    avg: [ 5.83, 5.22 ], std: [ 2.73, 1.72 ], fq: 50
  },
  "intern": {
    dict: "happiness", word: "internal", stem: "intern", anew: "intimate",
    avg: [ 6.98, 5.2 ], std: [ 2.21, 1.31 ], fq: 50
  },
  "percentag": {
    dict: "happiness", word: "percentage", stem: "percentag", anew: "part",
    avg: [ 3.82, 5.2 ], std: [ 2.24, 0.81 ], fq: 50
  },
  "urg": {
    dict: "happiness", word: "urge", stem: "urg", anew: "inspired",
    avg: [ 6.02, 5.18 ], std: [ 2.67, 1.3 ], fq: 50
  },
  "do": {
    dict: "happiness", word: "dos", stem: "do", anew: "execution",
    avg: [ 5.71, 5.16 ], std: [ 2.74, 1.33 ], fq: 50
  },
  "notic": {
    dict: "happiness", word: "notice", stem: "notic", anew: "poster",
    avg: [ 3.93, 5.16 ], std: [ 2.56, 1.5 ], fq: 50
  },
  "remain": {
    dict: "happiness", word: "remaining", stem: "remain", anew: "odd",
    avg: [ 4.27, 5.16 ], std: [ 2.46, 1.28 ], fq: 50
  },
  "hypnot": {
    dict: "happiness", word: "hypnotized", stem: "hypnot", anew: "fascinate",
    avg: [ 5.83, 5.14 ], std: [ 2.73, 1.46 ], fq: 50
  },
  "suppos": {
    dict: "happiness", word: "supposed", stem: "suppos", anew: "imagine",
    avg: [ 5.98, 5.14 ], std: [ 2.14, 1.12 ], fq: 50
  },
  "yearn": {
    dict: "happiness", word: "yearning", stem: "yearn", anew: "ache",
    avg: [ 5, 5.14 ], std: [ 2.45, 1.57 ], fq: 50
  },
  "cop": {
    dict: "happiness", word: "cops", stem: "cop", anew: "pig",
    avg: [ 4.2, 5.12 ], std: [ 2.42, 1.85 ], fq: 50
  },
  "singl": {
    dict: "happiness", word: "single", stem: "singl", anew: "ace",
    avg: [ 5.5, 5.12 ], std: [ 2.66, 1.52 ], fq: 50
  },
  "base": {
    dict: "happiness", word: "bases", stem: "base", anew: "foot",
    avg: [ 3.27, 5.1 ], std: [ 1.98, 1.04 ], fq: 50
  },
  "consumpt": {
    dict: "happiness", word: "consumption", stem: "consumpt", anew: "useful",
    avg: [ 4.26, 5.1 ], std: [ 2.47, 1.8 ], fq: 50
  },
  "assum": {
    dict: "happiness", word: "assuming", stem: "assum", anew: "acceptance",
    avg: [ 5.4, 5.08 ], std: [ 2.7, 1.41 ], fq: 50
  },
  "admit": {
    dict: "happiness", word: "admitted", stem: "admit", anew: "acceptance",
    avg: [ 5.4, 5.08 ], std: [ 2.7, 1.35 ], fq: 50
  },
  "note": {
    dict: "happiness", word: "noted", stem: "note", anew: "fame",
    avg: [ 6.55, 5.08 ], std: [ 2.46, 1.01 ], fq: 50
  },
  "squeez": {
    dict: "happiness", word: "squeeze", stem: "squeez", anew: "pressure",
    avg: [ 6.07, 5.08 ], std: [ 2.26, 1.7 ], fq: 50
  },
  "au": {
    dict: "happiness", word: "aus", stem: "au", anew: "gold",
    avg: [ 5.76, 5.06 ], std: [ 2.79, 1 ], fq: 50
  },
  "primit": {
    dict: "happiness", word: "primitive", stem: "primit", anew: "rude",
    avg: [ 6.31, 5.06 ], std: [ 2.47, 1.54 ], fq: 50
  },
  "stone": {
    dict: "happiness", word: "stones", stem: "stone", anew: "rock",
    avg: [ 4.52, 5.06 ], std: [ 2.37, 1.25 ], fq: 50
  },
  "advertis": {
    dict: "happiness", word: "advertising", stem: "advertis", anew: "promotion",
    avg: [ 6.44, 5.04 ], std: [ 2.58, 1.58 ], fq: 50
  },
  "charg": {
    dict: "happiness", word: "charged", stem: "charg", anew: "excitement",
    avg: [ 7.67, 5.04 ], std: [ 1.91, 1.59 ], fq: 50
  },
  "administr": {
    dict: "happiness", word: "administrator", stem: "administr", anew: "execution",
    avg: [ 5.71, 5.02 ], std: [ 2.74, 1.33 ], fq: 50
  },
  "sleev": {
    dict: "happiness", word: "sleeve", stem: "sleev", anew: "arm",
    avg: [ 3.59, 5.02 ], std: [ 2.4, 1.36 ], fq: 50
  },
  "bind": {
    dict: "happiness", word: "binding", stem: "bind", anew: "bandage",
    avg: [ 3.9, 5.01 ], std: [ 2.07, 1.6 ], fq: 50
  },
  "command": {
    dict: "happiness", word: "commands", stem: "command", anew: "controlling",
    avg: [ 6.1, 5 ], std: [ 2.19, 1.57 ], fq: 50
  },
  "report": {
    dict: "happiness", word: "reports", stem: "report", anew: "paper",
    avg: [ 2.5, 5 ], std: [ 1.85, 1.51 ], fq: 50
  },
  "cloudi": {
    dict: "happiness", word: "cloudy", stem: "cloudi", anew: "muddy",
    avg: [ 4.13, 4.98 ], std: [ 2.13, 1.86 ], fq: 50
  },
  "nail": {
    dict: "happiness", word: "nails", stem: "nail", anew: "ace",
    avg: [ 5.5, 4.98 ], std: [ 2.66, 1.48 ], fq: 50
  },
  "stare": {
    dict: "happiness", word: "stared", stem: "stare", anew: "star",
    avg: [ 5.83, 4.98 ], std: [ 2.44, 1.44 ], fq: 50
  },
  "border": {
    dict: "happiness", word: "borders", stem: "border", anew: "mold",
    avg: [ 4.07, 4.96 ], std: [ 1.98, 1.52 ], fq: 50
  },
  "drop": {
    dict: "happiness", word: "drops", stem: "drop", anew: "fall",
    avg: [ 4.7, 4.96 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "bang": {
    dict: "happiness", word: "banging", stem: "bang", anew: "loved",
    avg: [ 6.38, 4.94 ], std: [ 2.68, 2.14 ], fq: 50
  },
  "hook": {
    dict: "happiness", word: "hooked", stem: "hook", anew: "addicted",
    avg: [ 4.81, 4.94 ], std: [ 2.46, 1.2 ], fq: 50
  },
  "cite": {
    dict: "happiness", word: "cited", stem: "cite", anew: "name",
    avg: [ 4.25, 4.88 ], std: [ 2.47, 1.41 ], fq: 50
  },
  "substitut": {
    dict: "happiness", word: "substitute", stem: "substitut", anew: "reserved",
    avg: [ 3.27, 4.88 ], std: [ 2.05, 1.47 ], fq: 50
  },
  "nou": {
    dict: "happiness", word: "nous", stem: "nou", anew: "mind",
    avg: [ 5, 4.88 ], std: [ 2.68, 1.16 ], fq: 50
  },
  "circumst": {
    dict: "happiness", word: "circumstances", stem: "circumst", anew: "context",
    avg: [ 4.22, 4.86 ], std: [ 2.24, 1.11 ], fq: 50
  },
  "divis": {
    dict: "happiness", word: "divisions", stem: "divis", anew: "part",
    avg: [ 3.82, 4.86 ], std: [ 2.24, 1.48 ], fq: 50
  },
  "missi": {
    dict: "happiness", word: "missy", stem: "missi", anew: "girl",
    avg: [ 4.29, 4.86 ], std: [ 2.69, 1.55 ], fq: 50
  },
  "mainten": {
    dict: "happiness", word: "maintenance", stem: "mainten", anew: "alimony",
    avg: [ 4.3, 4.84 ], std: [ 2.29, 1.6 ], fq: 50
  },
  "nerv": {
    dict: "happiness", word: "nerve", stem: "nerv", anew: "heart",
    avg: [ 6.34, 4.82 ], std: [ 2.25, 1.48 ], fq: 50
  },
  "passiv": {
    dict: "happiness", word: "passive", stem: "passiv", anew: "peace",
    avg: [ 2.95, 4.8 ], std: [ 2.55, 1.77 ], fq: 50
  },
  "belli": {
    dict: "happiness", word: "belly", stem: "belli", anew: "stomach",
    avg: [ 3.93, 4.78 ], std: [ 2.49, 1.46 ], fq: 50
  },
  "condit": {
    dict: "happiness", word: "conditions", stem: "condit", anew: "statue",
    avg: [ 3.46, 4.78 ], std: [ 1.72, 1.47 ], fq: 50
  },
  "revers": {
    dict: "happiness", word: "reversed", stem: "revers", anew: "vacation",
    avg: [ 5.64, 4.78 ], std: [ 2.99, 1.43 ], fq: 50
  },
  "suddenli": {
    dict: "happiness", word: "suddenly", stem: "suddenli", anew: "dead",
    avg: [ 5.73, 4.78 ], std: [ 2.73, 1.31 ], fq: 50
  },
  "ga": {
    dict: "happiness", word: "gas", stem: "ga", anew: "gun",
    avg: [ 7.02, 4.76 ], std: [ 1.84, 1.65 ], fq: 50
  },
  "heavili": {
    dict: "happiness", word: "heavily", stem: "heavili", anew: "hard",
    avg: [ 5.12, 4.74 ], std: [ 2.19, 1.12 ], fq: 50
  },
  "rocki": {
    dict: "happiness", word: "rocky", stem: "rocki", anew: "rough",
    avg: [ 5.33, 4.7 ], std: [ 2.04, 1.73 ], fq: 50
  },
  "knive": {
    dict: "happiness", word: "knives", stem: "knive", anew: "knife",
    avg: [ 5.8, 4.68 ], std: [ 2, 2.09 ], fq: 50
  },
  "rule": {
    dict: "happiness", word: "ruling", stem: "rule", anew: "opinion",
    avg: [ 4.89, 4.68 ], std: [ 2.46, 1.45 ], fq: 50
  },
  "tumbl": {
    dict: "happiness", word: "tumble", stem: "tumbl", anew: "fall",
    avg: [ 4.7, 4.67 ], std: [ 2.48, 1.7 ], fq: 50
  },
  "wolv": {
    dict: "happiness", word: "wolves", stem: "wolv", anew: "beast",
    avg: [ 5.57, 4.65 ], std: [ 2.61, 2.28 ], fq: 50
  },
  "dri": {
    dict: "happiness", word: "dry", stem: "dri", anew: "iron",
    avg: [ 3.76, 4.64 ], std: [ 2.06, 1.26 ], fq: 50
  },
  "fuck": {
    dict: "happiness", word: "fucking", stem: "fuck", anew: "loved",
    avg: [ 6.38, 4.64 ], std: [ 2.68, 2.93 ], fq: 50
  },
  "leas": {
    dict: "happiness", word: "lease", stem: "leas", anew: "engaged",
    avg: [ 6.77, 4.62 ], std: [ 2.07, 1.26 ], fq: 50
  },
  "sticki": {
    dict: "happiness", word: "sticky", stem: "sticki", anew: "embarrassed",
    avg: [ 5.87, 4.6 ], std: [ 2.55, 1.32 ], fq: 50
  },
  "busi": {
    dict: "happiness", word: "busy", stem: "busi", anew: "engaged",
    avg: [ 6.77, 4.58 ], std: [ 2.07, 1.83 ], fq: 50
  },
  "stop": {
    dict: "happiness", word: "stops", stem: "stop", anew: "bar",
    avg: [ 5, 4.58 ], std: [ 2.83, 1.21 ], fq: 50
  },
  "block": {
    dict: "happiness", word: "blocks", stem: "block", anew: "hinder",
    avg: [ 4.12, 4.54 ], std: [ 2.01, 1.42 ], fq: 50
  },
  "term": {
    dict: "happiness", word: "terms", stem: "term", anew: "foot",
    avg: [ 3.27, 4.54 ], std: [ 1.98, 1.05 ], fq: 50
  },
  "chain": {
    dict: "happiness", word: "chains", stem: "chain", anew: "iron",
    avg: [ 3.76, 4.53 ], std: [ 2.06, 1.77 ], fq: 50
  },
  "wait": {
    dict: "happiness", word: "waits", stem: "wait", anew: "delayed",
    avg: [ 5.62, 4.53 ], std: [ 2.39, 1.24 ], fq: 50
  },
  "utterli": {
    dict: "happiness", word: "utterly", stem: "utterli", anew: "dead",
    avg: [ 5.73, 4.52 ], std: [ 2.73, 1.71 ], fq: 50
  },
  "dispos": {
    dict: "happiness", word: "disposed", stem: "dispos", anew: "mind",
    avg: [ 5, 4.5 ], std: [ 2.68, 1.73 ], fq: 50
  },
  "despit": {
    dict: "happiness", word: "despite", stem: "despit", anew: "scornful",
    avg: [ 5.04, 4.48 ], std: [ 2.56, 1.34 ], fq: 50
  },
  "long": {
    dict: "happiness", word: "longing", stem: "long", anew: "hungry",
    avg: [ 5.13, 4.43 ], std: [ 2.44, 1.7 ], fq: 50
  },
  "beat": {
    dict: "happiness", word: "beats", stem: "beat", anew: "crushed",
    avg: [ 5.52, 4.4 ], std: [ 2.87, 1.93 ], fq: 50
  },
  "ef": {
    dict: "happiness", word: "effing", stem: "ef", anew: "loved",
    avg: [ 6.38, 4.38 ], std: [ 2.68, 1.4 ], fq: 50
  },
  "slip": {
    dict: "happiness", word: "slips", stem: "slip", anew: "mistake",
    avg: [ 5.18, 4.38 ], std: [ 2.42, 1.47 ], fq: 50
  },
  "custodi": {
    dict: "happiness", word: "custody", stem: "custodi", anew: "hand",
    avg: [ 4.4, 4.36 ], std: [ 2.07, 1.7 ], fq: 50
  },
  "divid": {
    dict: "happiness", word: "divided", stem: "divid", anew: "part",
    avg: [ 3.82, 4.36 ], std: [ 2.24, 1.27 ], fq: 50
  },
  "reduc": {
    dict: "happiness", word: "reducing", stem: "reduc", anew: "concentrate",
    avg: [ 4.65, 4.36 ], std: [ 2.13, 1.48 ], fq: 50
  },
  "sharpli": {
    dict: "happiness", word: "sharply", stem: "sharpli", anew: "aggressive",
    avg: [ 5.83, 4.36 ], std: [ 2.33, 1.64 ], fq: 50
  },
  "ici": {
    dict: "happiness", word: "icy", stem: "ici", anew: "frigid",
    avg: [ 4.75, 4.34 ], std: [ 2.56, 1.85 ], fq: 50
  },
  "howl": {
    dict: "happiness", word: "howling", stem: "howl", anew: "terrific",
    avg: [ 6.23, 4.32 ], std: [ 2.73, 1.83 ], fq: 50
  },
  "slowli": {
    dict: "happiness", word: "slowly", stem: "slowli", anew: "slow",
    avg: [ 3.39, 4.32 ], std: [ 2.22, 1.43 ], fq: 50
  },
  "concern": {
    dict: "happiness", word: "concerning", stem: "concern", anew: "interest",
    avg: [ 5.66, 4.24 ], std: [ 2.26, 1.69 ], fq: 50
  },
  "captur": {
    dict: "happiness", word: "capture", stem: "captur", anew: "fascinate",
    avg: [ 5.83, 4.18 ], std: [ 2.73, 1.7 ], fq: 50
  },
  "decreas": {
    dict: "happiness", word: "decrease", stem: "decreas", anew: "fall",
    avg: [ 4.7, 4.12 ], std: [ 2.48, 1.55 ], fq: 50
  },
  "heavi": {
    dict: "happiness", word: "heavy", stem: "heavi", anew: "hard",
    avg: [ 5.12, 4.1 ], std: [ 2.19, 1.42 ], fq: 50
  },
  "roughli": {
    dict: "happiness", word: "roughly", stem: "roughli", anew: "rough",
    avg: [ 5.33, 4 ], std: [ 2.04, 1.21 ], fq: 50
  },
  "loos": {
    dict: "happiness", word: "loose", stem: "loos", anew: "easy",
    avg: [ 4.48, 3.96 ], std: [ 2.82, 1.65 ], fq: 50
  },
  "omit": {
    dict: "happiness", word: "omitted", stem: "omit", anew: "neglect",
    avg: [ 4.83, 3.92 ], std: [ 2.31, 1.21 ], fq: 50
  },
  "miss": {
    dict: "happiness", word: "misses", stem: "miss", anew: "girl",
    avg: [ 4.29, 3.9 ], std: [ 2.69, 1.37 ], fq: 50
  },
  "artilleri": {
    dict: "happiness", word: "artillery", stem: "artilleri", anew: "weapon",
    avg: [ 6.03, 3.88 ], std: [ 1.89, 1.54 ], fq: 50
  },
  "ghost": {
    dict: "happiness", word: "ghosts", stem: "ghost", anew: "obsession",
    avg: [ 6.41, 3.84 ], std: [ 2.13, 1.98 ], fq: 50
  },
  "inter": {
    dict: "happiness", word: "interment", stem: "inter", anew: "burial",
    avg: [ 5.08, 3.8 ], std: [ 2.4, 1.83 ], fq: 50
  },
  "thirsti": {
    dict: "happiness", word: "thirsty", stem: "thirsti", anew: "hungry",
    avg: [ 5.13, 3.79 ], std: [ 2.44, 1.46 ], fq: 50
  },
  "risk": {
    dict: "happiness", word: "risks", stem: "risk", anew: "danger",
    avg: [ 7.32, 3.78 ], std: [ 2.07, 1.76 ], fq: 50
  },
  "resign": {
    dict: "happiness", word: "resigned", stem: "resign", anew: "vacation",
    avg: [ 5.64, 3.76 ], std: [ 2.99, 1.59 ], fq: 50
  },
  "remov": {
    dict: "happiness", word: "removed", stem: "remov", anew: "murderer",
    avg: [ 7.47, 3.72 ], std: [ 2.18, 1.39 ], fq: 50
  },
  "withdraw": {
    dict: "happiness", word: "withdrawal", stem: "withdraw", anew: "detached",
    avg: [ 4.26, 3.72 ], std: [ 2.57, 1.84 ], fq: 50
  },
  "sorri": {
    dict: "happiness", word: "sorry", stem: "sorri", anew: "regretful",
    avg: [ 5.74, 3.66 ], std: [ 2.32, 1.76 ], fq: 50
  },
  "bust": {
    dict: "happiness", word: "busted", stem: "bust", anew: "broken",
    avg: [ 5.43, 3.36 ], std: [ 2.42, 1.31 ], fq: 50
  },
  "savag": {
    dict: "happiness", word: "savage", stem: "savag", anew: "crucify",
    avg: [ 6.47, 3.31 ], std: [ 2.47, 1.95 ], fq: 50
  },
  "damn": {
    dict: "happiness", word: "damned", stem: "damn", anew: "bless",
    avg: [ 4.05, 3.26 ], std: [ 2.59, 1.97 ], fq: 50
  },
  "fals": {
    dict: "happiness", word: "false", stem: "fals", anew: "FALSE",
    avg: [ 3.43, 3.18 ], std: [ 2.09, 1.35 ], fq: 50
  },
  "incorrectli": {
    dict: "happiness", word: "incorrectly", stem: "incorrectli", anew: "FALSE",
    avg: [ 3.43, 3.14 ], std: [ 2.09, 1.03 ], fq: 50
  },
  "cri": {
    dict: "happiness", word: "cries", stem: "cri", anew: "scream",
    avg: [ 7.04, 2.92 ], std: [ 1.96, 1.59 ], fq: 50
  },
  "badli": {
    dict: "happiness", word: "badly", stem: "badli", anew: "illness",
    avg: [ 4.71, 2.88 ], std: [ 2.24, 1.61 ], fq: 50
  },
  "unholi": {
    dict: "happiness", word: "unholy", stem: "unholi", anew: "demon",
    avg: [ 6.76, 2.73 ], std: [ 2.68, 1.4 ], fq: 50
  },
  "wors": {
    dict: "happiness", word: "worse", stem: "wors", anew: "regretful",
    avg: [ 5.74, 2.7 ], std: [ 2.32, 1.42 ], fq: 50
  },
  "thiev": {
    dict: "happiness", word: "thieves", stem: "thiev", anew: "thief",
    avg: [ 6.89, 2.29 ], std: [ 2.13, 1.31 ], fq: 50
  },
};


function happiness_extend( term, avg, std )

  //  Extend the Happiness dictionary with the given term
  //
  //  term:  Term to add
  //  avg:   Happiness average [ arousal, valence ]
  //  std:   Happiness standard deviation [ arousal, valence ]
{
  term = term.toLowerCase();
  stem = stemmer( term );

  //  Ensure avg and std are lists of length 2, both numbers

  if ( !Array.isArray( avg ) || !Array.isArray( std ) ) {
    console.log(
      "happiness_extend(), avg/std must be numeric two-value lists" );
    return;
  }

  if ( avg.length != 2 || std.length != 2 ) {
    console.log( "happiness_extend(), avg/std must be length two" );
    return;
  }

  if ( isNaN( parseFloat( avg[ 0 ] ) ) || isNaN( parseFloat( avg[ 1 ] ) ) ||
       isNaN( parseFloat( std[ 0 ] ) ) || isNaN( parseFloat( std[ 1 ] ) ) ) {
    console.log( "happiness_extend(), avg/std must be float values" );
    return;
  }

  //  Warning if we're replacing terms rather than adding them

  if ( happy_term.hasOwnProperty( term ) ) {
    console.log( "happiness_extend(), replacing term " + term );

    happy_term[ term ] = { dict: "happiness",
      word: term, stem: stem, anew: term, avg: avg, std: std, fq: 50 };
  }
  else if ( happy_stem.hasOwnProperty( stem ) ) {
    console.log( "happiness_extend(), replacing stem " + stem );

    happy_stem[ term ] = { dict: "happiness",
      word: term, stem: stem, anew: term, avg: avg, std: std, fq: 50 };
  } else {
    happy_term[ term ] = { dict: "happiness",
      word: term, stem: stem, anew: term, avg: avg, std: std, fq: 50 };
  }

  happy_term[ term ]= { avg: avg, std: std };
}					// End routine happiness_extend_term


function happiness_find_stem( s )

  //  Return the stem's in the happiness dictionary, or -1 if no such
  //  stem
  //
  //  s:  Stem to search
{
  if ( s.length == 0 ) {		// Empty term?
    return -1;
  }

  if ( happy_stem.hasOwnProperty( s ) ) {
    return happy_stem[ s ];
  }

  return -1;
}					// End routine happiness_find_stem


function happiness_find_word( w )

  //  Return the word in the happiness dictionary, or -1 if no such word
  //
  //  w:  Word to search
{
  if ( w.length == 0 ) {		// Empty term?
    return -1;
  }

  if ( happy_term.hasOwnProperty( w ) ) {
    return happy_term[ w ];
  }

  return -1;
}					// End routine happiness_find_word
