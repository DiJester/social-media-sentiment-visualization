/*--------------------------------------------------------------------------*/
/*  ANEW.JS								    */
/*    Routines to calculate ANEW scores					    */
/* 									    */
/*- Modification History: --------------------------------------------------*/
/*  When:	Who:			Comments:			    */
/* 									    */
/*  01-May-12	Christopher G. Healey	Initial implementation		    */
/*  29-Oct-18	Christopher G. Healey	Cleaned up duplicates		    */
/*--------------------------------------------------------------------------*/

//  Module global variables

//  ANEW description structure:
//  - word, full term
//  - stem, stemmed term
//  - avg, [ ARO, VAL ] average score (1..9)
//  - std, [ ARO, VAL ] standard deviation score
//  - fq, number of volunteers scoring term

var  anew_term = {			// ANEW terms, indexed by word
  "absurd": {
    dict: "anew", word: "absurd", stem: "absurd",
    avg: [ 4.36, 4.26 ], std: [ 2.2, 1.82 ], fq: 17
  },
  "activate": {
    dict: "anew", word: "activate", stem: "activ",
    avg: [ 4.86, 5.46 ], std: [ 2.56, 0.98 ], fq: 2
  },
  "adult": {
    dict: "anew", word: "adult", stem: "adult",
    avg: [ 4.76, 6.49 ], std: [ 1.95, 1.5 ], fq: 25
  },
  "alert": {
    dict: "anew", word: "alert", stem: "alert",
    avg: [ 6.85, 6.2 ], std: [ 2.53, 1.76 ], fq: 33
  },
  "alien": {
    dict: "anew", word: "alien", stem: "alien",
    avg: [ 5.45, 5.6 ], std: [ 2.15, 1.82 ], fq: 16
  },
  "alley": {
    dict: "anew", word: "alley", stem: "alley",
    avg: [ 4.91, 4.48 ], std: [ 2.42, 1.97 ], fq: 8
  },
  "aloof": {
    dict: "anew", word: "aloof", stem: "aloof",
    avg: [ 4.28, 4.9 ], std: [ 2.1, 1.92 ], fq: 5
  },
  "ankle": {
    dict: "anew", word: "ankle", stem: "ankl",
    avg: [ 4.16, 5.27 ], std: [ 2.03, 1.54 ], fq: 8
  },
  "appliance": {
    dict: "anew", word: "appliance", stem: "applianc",
    avg: [ 4.05, 5.1 ], std: [ 2.06, 1.21 ], fq: 5
  },
  "arm": {
    dict: "anew", word: "arm", stem: "arm",
    avg: [ 3.59, 5.34 ], std: [ 2.4, 1.82 ], fq: 94
  },
  "army": {
    dict: "anew", word: "army", stem: "armi",
    avg: [ 5.03, 4.72 ], std: [ 2.03, 1.75 ], fq: 132
  },
  "aroused": {
    dict: "anew", word: "aroused", stem: "arous",
    avg: [ 6.63, 7.97 ], std: [ 2.7, 1 ], fq: 20
  },
  "avalanche": {
    dict: "anew", word: "avalanche", stem: "avalanch",
    avg: [ 5.54, 3.29 ], std: [ 2.37, 1.95 ], fq: 1
  },
  "avenue": {
    dict: "anew", word: "avenue", stem: "avenu",
    avg: [ 4.12, 5.5 ], std: [ 2.01, 1.37 ], fq: 46
  },
  "banner": {
    dict: "anew", word: "banner", stem: "banner",
    avg: [ 3.83, 5.4 ], std: [ 1.95, 0.83 ], fq: 8
  },
  "bar": {
    dict: "anew", word: "bar", stem: "bar",
    avg: [ 5, 6.42 ], std: [ 2.83, 2.05 ], fq: 82
  },
  "barrel": {
    dict: "anew", word: "barrel", stem: "barrel",
    avg: [ 3.36, 5.05 ], std: [ 2.28, 1.46 ], fq: 24
  },
  "basket": {
    dict: "anew", word: "basket", stem: "basket",
    avg: [ 3.63, 5.45 ], std: [ 2.02, 1.15 ], fq: 17
  },
  "bathroom": {
    dict: "anew", word: "bathroom", stem: "bathroom",
    avg: [ 3.88, 5.55 ], std: [ 1.72, 1.36 ], fq: 18
  },
  "beast": {
    dict: "anew", word: "beast", stem: "beast",
    avg: [ 5.57, 4.23 ], std: [ 2.61, 2.41 ], fq: 7
  },
  "bees": {
    dict: "anew", word: "bees", stem: "bee",
    avg: [ 6.51, 3.2 ], std: [ 2.14, 2.07 ], fq: 15
  },
  "bench": {
    dict: "anew", word: "bench", stem: "bench",
    avg: [ 3.59, 4.61 ], std: [ 2.07, 1.4 ], fq: 35
  },
  "black": {
    dict: "anew", word: "black", stem: "black",
    avg: [ 4.61, 5.39 ], std: [ 2.24, 1.8 ], fq: 203
  },
  "blase": {
    dict: "anew", word: "blase", stem: "blase",
    avg: [ 3.94, 4.89 ], std: [ 1.76, 1.16 ], fq: 7
  },
  "board": {
    dict: "anew", word: "board", stem: "board",
    avg: [ 3.36, 4.82 ], std: [ 2.12, 1.23 ], fq: 239
  },
  "body": {
    dict: "anew", word: "body", stem: "bodi",
    avg: [ 5.52, 5.55 ], std: [ 2.63, 2.37 ], fq: 276
  },
  "bottle": {
    dict: "anew", word: "bottle", stem: "bottl",
    avg: [ 4.79, 6.15 ], std: [ 2.44, 1.49 ], fq: 76
  },
  "bowl": {
    dict: "anew", word: "bowl", stem: "bowl",
    avg: [ 3.47, 5.33 ], std: [ 2.12, 1.33 ], fq: 23
  },
  "boxer": {
    dict: "anew", word: "boxer", stem: "boxer",
    avg: [ 5.12, 5.51 ], std: [ 2.26, 1.8 ], fq: 1
  },
  "boy": {
    dict: "anew", word: "boy", stem: "boy",
    avg: [ 4.58, 6.32 ], std: [ 2.37, 1.6 ], fq: 242
  },
  "building": {
    dict: "anew", word: "building", stem: "build",
    avg: [ 3.92, 5.29 ], std: [ 1.94, 1.15 ], fq: 160
  },
  "bus": {
    dict: "anew", word: "bus", stem: "bus",
    avg: [ 3.55, 4.51 ], std: [ 1.8, 1.57 ], fq: 34
  },
  "cabinet": {
    dict: "anew", word: "cabinet", stem: "cabinet",
    avg: [ 3.43, 5.05 ], std: [ 1.85, 0.31 ], fq: 17
  },
  "cane": {
    dict: "anew", word: "cane", stem: "cane",
    avg: [ 4.2, 4 ], std: [ 1.93, 1.8 ], fq: 12
  },
  "cannon": {
    dict: "anew", word: "cannon", stem: "cannon",
    avg: [ 4.71, 4.9 ], std: [ 2.84, 2.2 ], fq: 7
  },
  "casino": {
    dict: "anew", word: "casino", stem: "casino",
    avg: [ 6.51, 6.81 ], std: [ 2.12, 1.66 ], fq: 2
  },
  "cell": {
    dict: "anew", word: "cell", stem: "cell",
    avg: [ 4.08, 3.82 ], std: [ 2.19, 1.7 ], fq: 65
  },
  "cellar": {
    dict: "anew", word: "cellar", stem: "cellar",
    avg: [ 4.39, 4.32 ], std: [ 2.33, 1.68 ], fq: 26
  },
  "chair": {
    dict: "anew", word: "chair", stem: "chair",
    avg: [ 3.15, 5.08 ], std: [ 1.77, 0.98 ], fq: 66
  },
  "chin": {
    dict: "anew", word: "chin", stem: "chin",
    avg: [ 3.31, 5.29 ], std: [ 1.98, 1.27 ], fq: 27
  },
  "church": {
    dict: "anew", word: "church", stem: "church",
    avg: [ 4.34, 6.28 ], std: [ 2.45, 2.31 ], fq: 348
  },
  "circle": {
    dict: "anew", word: "circle", stem: "circl",
    avg: [ 3.86, 5.67 ], std: [ 2.13, 1.26 ], fq: 60
  },
  "circus": {
    dict: "anew", word: "circus", stem: "circus",
    avg: [ 5.97, 7.3 ], std: [ 2.59, 1.84 ], fq: 7
  },
  "cliff": {
    dict: "anew", word: "cliff", stem: "cliff",
    avg: [ 6.25, 4.67 ], std: [ 2.15, 2.08 ], fq: 11
  },
  "clock": {
    dict: "anew", word: "clock", stem: "clock",
    avg: [ 4.02, 5.14 ], std: [ 2.54, 1.54 ], fq: 20
  },
  "clumsy": {
    dict: "anew", word: "clumsy", stem: "clumsi",
    avg: [ 5.18, 4 ], std: [ 2.4, 2.22 ], fq: 6
  },
  "coarse": {
    dict: "anew", word: "coarse", stem: "coars",
    avg: [ 4.21, 4.55 ], std: [ 1.84, 1.42 ], fq: 10
  },
  "coast": {
    dict: "anew", word: "coast", stem: "coast",
    avg: [ 4.59, 5.98 ], std: [ 2.31, 1.86 ], fq: 61
  },
  "cold": {
    dict: "anew", word: "cold", stem: "cold",
    avg: [ 5.19, 4.02 ], std: [ 2.23, 1.99 ], fq: 171
  },
  "column": {
    dict: "anew", word: "column", stem: "column",
    avg: [ 3.62, 5.17 ], std: [ 1.91, 0.85 ], fq: 71
  },
  "contents": {
    dict: "anew", word: "contents", stem: "content",
    avg: [ 4.32, 4.89 ], std: [ 2.14, 0.89 ], fq: 16
  },
  "context": {
    dict: "anew", word: "context", stem: "context",
    avg: [ 4.22, 5.2 ], std: [ 2.24, 1.38 ], fq: 2
  },
  "cord": {
    dict: "anew", word: "cord", stem: "cord",
    avg: [ 3.54, 5.1 ], std: [ 2.09, 1.09 ], fq: 6
  },
  "cork": {
    dict: "anew", word: "cork", stem: "cork",
    avg: [ 3.8, 5.22 ], std: [ 2.18, 1.13 ], fq: 9
  },
  "corner": {
    dict: "anew", word: "corner", stem: "corner",
    avg: [ 3.91, 4.36 ], std: [ 1.92, 1.21 ], fq: 115
  },
  "corridor": {
    dict: "anew", word: "corridor", stem: "corridor",
    avg: [ 3.63, 4.88 ], std: [ 2.41, 1.14 ], fq: 17
  },
  "cow": {
    dict: "anew", word: "cow", stem: "cow",
    avg: [ 3.49, 5.57 ], std: [ 2.13, 1.53 ], fq: 29
  },
  "crown": {
    dict: "anew", word: "crown", stem: "crown",
    avg: [ 4.28, 6.58 ], std: [ 2.53, 1.42 ], fq: 19
  },
  "curtains": {
    dict: "anew", word: "curtains", stem: "curtain",
    avg: [ 3.67, 4.83 ], std: [ 1.83, 0.83 ], fq: 8
  },
  "custom": {
    dict: "anew", word: "custom", stem: "custom",
    avg: [ 4.66, 5.85 ], std: [ 2.12, 1.53 ], fq: 14
  },
  "dagger": {
    dict: "anew", word: "dagger", stem: "dagger",
    avg: [ 6.14, 3.38 ], std: [ 2.64, 1.77 ], fq: 1
  },
  "dark": {
    dict: "anew", word: "dark", stem: "dark",
    avg: [ 4.28, 4.71 ], std: [ 2.21, 2.36 ], fq: 185
  },
  "defiant": {
    dict: "anew", word: "defiant", stem: "defiant",
    avg: [ 6.1, 4.26 ], std: [ 2.51, 2.12 ], fq: 3
  },
  "detail": {
    dict: "anew", word: "detail", stem: "detail",
    avg: [ 4.1, 5.55 ], std: [ 2.24, 1.58 ], fq: 72
  },
  "dirt": {
    dict: "anew", word: "dirt", stem: "dirt",
    avg: [ 3.76, 4.17 ], std: [ 2.26, 1.77 ], fq: 43
  },
  "diver": {
    dict: "anew", word: "diver", stem: "diver",
    avg: [ 5.04, 6.45 ], std: [ 2.1, 1.55 ], fq: 1
  },
  "doctor": {
    dict: "anew", word: "doctor", stem: "doctor",
    avg: [ 5.86, 5.2 ], std: [ 2.7, 2.54 ], fq: 100
  },
  "doll": {
    dict: "anew", word: "doll", stem: "doll",
    avg: [ 4.24, 6.09 ], std: [ 2.43, 1.96 ], fq: 10
  },
  "door": {
    dict: "anew", word: "door", stem: "door",
    avg: [ 3.8, 5.13 ], std: [ 2.29, 1.44 ], fq: 312
  },
  "dustpan": {
    dict: "anew", word: "dustpan", stem: "dustpan",
    avg: [ 3.43, 3.98 ], std: [ 2, 1.68 ], fq: 0
  },
  "egg": {
    dict: "anew", word: "egg", stem: "egg",
    avg: [ 3.76, 5.29 ], std: [ 2.39, 1.82 ], fq: 12
  },
  "elbow": {
    dict: "anew", word: "elbow", stem: "elbow",
    avg: [ 3.81, 5.12 ], std: [ 2.14, 0.92 ], fq: 10
  },
  "elevator": {
    dict: "anew", word: "elevator", stem: "elev",
    avg: [ 4.16, 5.44 ], std: [ 1.99, 1.18 ], fq: 12
  },
  "embattled": {
    dict: "anew", word: "embattled", stem: "embattl",
    avg: [ 5.36, 4.39 ], std: [ 2.37, 1.63 ], fq: 1
  },
  "employment": {
    dict: "anew", word: "employment", stem: "employ",
    avg: [ 5.28, 6.47 ], std: [ 2.12, 1.81 ], fq: 47
  },
  "engine": {
    dict: "anew", word: "engine", stem: "engin",
    avg: [ 3.98, 5.2 ], std: [ 2.33, 1.18 ], fq: 50
  },
  "ennui": {
    dict: "anew", word: "ennui", stem: "ennui",
    avg: [ 4.4, 5.09 ], std: [ 2.33, 1.76 ], fq: 0
  },
  "erotic": {
    dict: "anew", word: "erotic", stem: "erot",
    avg: [ 7.24, 7.43 ], std: [ 1.97, 1.53 ], fq: 8
  },
  "errand": {
    dict: "anew", word: "errand", stem: "errand",
    avg: [ 3.85, 4.58 ], std: [ 1.92, 1.74 ], fq: 7
  },
  "excuse": {
    dict: "anew", word: "excuse", stem: "excus",
    avg: [ 4.48, 4.05 ], std: [ 2.29, 1.41 ], fq: 27
  },
  "fame": {
    dict: "anew", word: "fame", stem: "fame",
    avg: [ 6.55, 7.93 ], std: [ 2.46, 1.29 ], fq: 18
  },
  "famous": {
    dict: "anew", word: "famous", stem: "famous",
    avg: [ 5.73, 6.98 ], std: [ 2.68, 2.07 ], fq: 89
  },
  "field": {
    dict: "anew", word: "field", stem: "field",
    avg: [ 4.08, 6.2 ], std: [ 2.41, 1.37 ], fq: 274
  },
  "finger": {
    dict: "anew", word: "finger", stem: "finger",
    avg: [ 3.78, 5.29 ], std: [ 2.42, 1.42 ], fq: 40
  },
  "fire": {
    dict: "anew", word: "fire", stem: "fire",
    avg: [ 7.17, 3.22 ], std: [ 2.06, 2.06 ], fq: 187
  },
  "foam": {
    dict: "anew", word: "foam", stem: "foam",
    avg: [ 5.26, 6.07 ], std: [ 2.54, 2.03 ], fq: 37
  },
  "foot": {
    dict: "anew", word: "foot", stem: "foot",
    avg: [ 3.27, 5.02 ], std: [ 1.98, 0.93 ], fq: 70
  },
  "fork": {
    dict: "anew", word: "fork", stem: "fork",
    avg: [ 3.96, 5.29 ], std: [ 1.94, 0.97 ], fq: 14
  },
  "frog": {
    dict: "anew", word: "frog", stem: "frog",
    avg: [ 4.54, 5.71 ], std: [ 2.03, 1.74 ], fq: 1
  },
  "fur": {
    dict: "anew", word: "fur", stem: "fur",
    avg: [ 4.18, 4.51 ], std: [ 2.44, 1.88 ], fq: 13
  },
  "garment": {
    dict: "anew", word: "garment", stem: "garment",
    avg: [ 4.49, 6.07 ], std: [ 2.5, 1.61 ], fq: 6
  },
  "garter": {
    dict: "anew", word: "garter", stem: "garter",
    avg: [ 5.47, 6.22 ], std: [ 2.15, 1.59 ], fq: 2
  },
  "gender": {
    dict: "anew", word: "gender", stem: "gender",
    avg: [ 4.38, 5.73 ], std: [ 2.13, 1.55 ], fq: 2
  },
  "glacier": {
    dict: "anew", word: "glacier", stem: "glacier",
    avg: [ 4.24, 5.5 ], std: [ 2.29, 1.25 ], fq: 1
  },
  "glamour": {
    dict: "anew", word: "glamour", stem: "glamour",
    avg: [ 4.68, 6.76 ], std: [ 2.23, 1.6 ], fq: 5
  },
  "glass": {
    dict: "anew", word: "glass", stem: "glass",
    avg: [ 4.27, 4.75 ], std: [ 2.07, 1.38 ], fq: 99
  },
  "god": {
    dict: "anew", word: "god", stem: "god",
    avg: [ 5.95, 8.15 ], std: [ 2.84, 1.27 ], fq: 318
  },
  "golfer": {
    dict: "anew", word: "golfer", stem: "golfer",
    avg: [ 3.73, 5.61 ], std: [ 2.26, 1.93 ], fq: 3
  },
  "grime": {
    dict: "anew", word: "grime", stem: "grime",
    avg: [ 3.98, 3.37 ], std: [ 2.29, 1.34 ], fq: 0
  },
  "gymnast": {
    dict: "anew", word: "gymnast", stem: "gymnast",
    avg: [ 5.02, 6.35 ], std: [ 2.2, 1.79 ], fq: 1
  },
  "habit": {
    dict: "anew", word: "habit", stem: "habit",
    avg: [ 3.95, 4.11 ], std: [ 2.11, 1.77 ], fq: 23
  },
  "hairdryer": {
    dict: "anew", word: "hairdryer", stem: "hairdryer",
    avg: [ 3.71, 4.84 ], std: [ 1.75, 0.84 ], fq: 0
  },
  "hairpin": {
    dict: "anew", word: "hairpin", stem: "hairpin",
    avg: [ 3.27, 5.26 ], std: [ 2.41, 1.45 ], fq: 1
  },
  "hammer": {
    dict: "anew", word: "hammer", stem: "hammer",
    avg: [ 4.58, 4.88 ], std: [ 2.02, 1.16 ], fq: 9
  },
  "hand": {
    dict: "anew", word: "hand", stem: "hand",
    avg: [ 4.4, 5.95 ], std: [ 2.07, 1.38 ], fq: 431
  },
  "hard": {
    dict: "anew", word: "hard", stem: "hard",
    avg: [ 5.12, 5.22 ], std: [ 2.19, 1.82 ], fq: 202
  },
  "hat": {
    dict: "anew", word: "hat", stem: "hat",
    avg: [ 4.1, 5.46 ], std: [ 2, 1.36 ], fq: 56
  },
  "hay": {
    dict: "anew", word: "hay", stem: "hay",
    avg: [ 3.95, 5.24 ], std: [ 2.58, 1.24 ], fq: 19
  },
  "headlight": {
    dict: "anew", word: "headlight", stem: "headlight",
    avg: [ 3.81, 5.24 ], std: [ 2.22, 1.51 ], fq: 0
  },
  "hide": {
    dict: "anew", word: "hide", stem: "hide",
    avg: [ 5.28, 4.32 ], std: [ 2.51, 1.91 ], fq: 22
  },
  "highway": {
    dict: "anew", word: "highway", stem: "highway",
    avg: [ 5.16, 5.92 ], std: [ 2.44, 1.72 ], fq: 40
  },
  "history": {
    dict: "anew", word: "history", stem: "histori",
    avg: [ 3.93, 5.24 ], std: [ 2.29, 2.01 ], fq: 286
  },
  "icebox": {
    dict: "anew", word: "icebox", stem: "icebox",
    avg: [ 4.17, 4.95 ], std: [ 2.11, 1 ], fq: 3
  },
  "identity": {
    dict: "anew", word: "identity", stem: "ident",
    avg: [ 4.95, 6.57 ], std: [ 2.24, 1.99 ], fq: 55
  },
  "idol": {
    dict: "anew", word: "idol", stem: "idol",
    avg: [ 4.95, 6.12 ], std: [ 2.14, 1.86 ], fq: 7
  },
  "indifferent": {
    dict: "anew", word: "indifferent", stem: "indiffer",
    avg: [ 3.18, 4.61 ], std: [ 1.85, 1.28 ], fq: 11
  },
  "industry": {
    dict: "anew", word: "industry", stem: "industri",
    avg: [ 4.47, 5.3 ], std: [ 2.43, 1.61 ], fq: 171
  },
  "infatuation": {
    dict: "anew", word: "infatuation", stem: "infatu",
    avg: [ 7.02, 6.73 ], std: [ 1.87, 2.08 ], fq: 4
  },
  "inhabitant": {
    dict: "anew", word: "inhabitant", stem: "inhabit",
    avg: [ 3.95, 5.05 ], std: [ 1.97, 1.34 ], fq: 0
  },
  "ink": {
    dict: "anew", word: "ink", stem: "ink",
    avg: [ 3.84, 5.05 ], std: [ 1.88, 0.81 ], fq: 7
  },
  "insect": {
    dict: "anew", word: "insect", stem: "insect",
    avg: [ 4.07, 4.07 ], std: [ 2.46, 2.16 ], fq: 14
  },
  "iron": {
    dict: "anew", word: "iron", stem: "iron",
    avg: [ 3.76, 4.9 ], std: [ 2.06, 1.02 ], fq: 43
  },
  "item": {
    dict: "anew", word: "item", stem: "item",
    avg: [ 3.24, 5.26 ], std: [ 2.08, 0.86 ], fq: 54
  },
  "jelly": {
    dict: "anew", word: "jelly", stem: "jelli",
    avg: [ 3.7, 5.66 ], std: [ 2.29, 1.44 ], fq: 3
  },
  "journal": {
    dict: "anew", word: "journal", stem: "journal",
    avg: [ 4.05, 5.14 ], std: [ 1.96, 1.49 ], fq: 42
  },
  "jug": {
    dict: "anew", word: "jug", stem: "jug",
    avg: [ 3.88, 5.24 ], std: [ 2.15, 1.65 ], fq: 6
  },
  "kerchief": {
    dict: "anew", word: "kerchief", stem: "kerchief",
    avg: [ 3.43, 5.11 ], std: [ 2.08, 1.33 ], fq: 1
  },
  "kettle": {
    dict: "anew", word: "kettle", stem: "kettl",
    avg: [ 3.22, 5.22 ], std: [ 2.23, 0.91 ], fq: 3
  },
  "kick": {
    dict: "anew", word: "kick", stem: "kick",
    avg: [ 4.9, 4.31 ], std: [ 2.35, 2.18 ], fq: 16
  },
  "king": {
    dict: "anew", word: "king", stem: "king",
    avg: [ 5.51, 7.26 ], std: [ 2.77, 1.67 ], fq: 88
  },
  "knife": {
    dict: "anew", word: "knife", stem: "knife",
    avg: [ 5.8, 3.62 ], std: [ 2, 2.18 ], fq: 76
  },
  "knot": {
    dict: "anew", word: "knot", stem: "knot",
    avg: [ 4.07, 4.64 ], std: [ 2.15, 1.36 ], fq: 8
  },
  "lamp": {
    dict: "anew", word: "lamp", stem: "lamp",
    avg: [ 3.8, 5.41 ], std: [ 2.12, 1 ], fq: 18
  },
  "lantern": {
    dict: "anew", word: "lantern", stem: "lantern",
    avg: [ 4.05, 5.57 ], std: [ 2.28, 1.19 ], fq: 13
  },
  "lesbian": {
    dict: "anew", word: "lesbian", stem: "lesbian",
    avg: [ 5.12, 4.67 ], std: [ 2.27, 2.45 ], fq: 0
  },
  "letter": {
    dict: "anew", word: "letter", stem: "letter",
    avg: [ 4.9, 6.61 ], std: [ 2.37, 1.59 ], fq: 145
  },
  "lightbulb": {
    dict: "anew", word: "lightbulb", stem: "lightbulb",
    avg: [ 4.1, 5.61 ], std: [ 2.02, 1.28 ], fq: 0
  },
  "lightning": {
    dict: "anew", word: "lightning", stem: "lightn",
    avg: [ 6.61, 4.57 ], std: [ 1.77, 2.66 ], fq: 14
  },
  "lion": {
    dict: "anew", word: "lion", stem: "lion",
    avg: [ 6.2, 5.57 ], std: [ 2.16, 1.99 ], fq: 17
  },
  "locker": {
    dict: "anew", word: "locker", stem: "locker",
    avg: [ 3.38, 5.19 ], std: [ 2.13, 1.31 ], fq: 9
  },
  "machine": {
    dict: "anew", word: "machine", stem: "machin",
    avg: [ 3.82, 5.09 ], std: [ 2.4, 1.67 ], fq: 103
  },
  "man": {
    dict: "anew", word: "man", stem: "man",
    avg: [ 5.24, 6.73 ], std: [ 2.31, 1.7 ], fq: 1207
  },
  "manner": {
    dict: "anew", word: "manner", stem: "manner",
    avg: [ 4.56, 5.64 ], std: [ 1.78, 1.34 ], fq: 124
  },
  "mantel": {
    dict: "anew", word: "mantel", stem: "mantel",
    avg: [ 3.27, 4.93 ], std: [ 2.23, 1.4 ], fq: 3
  },
  "masturbate": {
    dict: "anew", word: "masturbate", stem: "masturb",
    avg: [ 5.67, 5.45 ], std: [ 2.18, 2.02 ], fq: 0
  },
  "material": {
    dict: "anew", word: "material", stem: "materi",
    avg: [ 4.05, 5.26 ], std: [ 2.34, 1.29 ], fq: 174
  },
  "medicine": {
    dict: "anew", word: "medicine", stem: "medicin",
    avg: [ 4.4, 5.67 ], std: [ 2.36, 2.06 ], fq: 30
  },
  "meek": {
    dict: "anew", word: "meek", stem: "meek",
    avg: [ 3.8, 3.87 ], std: [ 2.13, 1.69 ], fq: 10
  },
  "metal": {
    dict: "anew", word: "metal", stem: "metal",
    avg: [ 3.79, 4.95 ], std: [ 1.96, 1.17 ], fq: 61
  },
  "method": {
    dict: "anew", word: "method", stem: "method",
    avg: [ 3.85, 5.56 ], std: [ 2.58, 1.76 ], fq: 142
  },
  "mischief": {
    dict: "anew", word: "mischief", stem: "mischief",
    avg: [ 5.76, 5.57 ], std: [ 1.95, 2.05 ], fq: 5
  },
  "mobility": {
    dict: "anew", word: "mobility", stem: "mobil",
    avg: [ 5, 6.83 ], std: [ 2.18, 1.79 ], fq: 8
  },
  "month": {
    dict: "anew", word: "month", stem: "month",
    avg: [ 4.03, 5.15 ], std: [ 1.77, 1.09 ], fq: 130
  },
  "muddy": {
    dict: "anew", word: "muddy", stem: "muddi",
    avg: [ 4.13, 4.44 ], std: [ 2.13, 2.07 ], fq: 10
  },
  "mushroom": {
    dict: "anew", word: "mushroom", stem: "mushroom",
    avg: [ 4.72, 5.78 ], std: [ 2.33, 2.22 ], fq: 2
  },
  "mutation": {
    dict: "anew", word: "mutation", stem: "mutat",
    avg: [ 4.84, 3.91 ], std: [ 2.52, 2.44 ], fq: 0
  },
  "name": {
    dict: "anew", word: "name", stem: "name",
    avg: [ 4.25, 5.55 ], std: [ 2.47, 2.24 ], fq: 294
  },
  "news": {
    dict: "anew", word: "news", stem: "news",
    avg: [ 5.17, 5.3 ], std: [ 2.11, 1.67 ], fq: 102
  },
  "nipple": {
    dict: "anew", word: "nipple", stem: "nippl",
    avg: [ 5.56, 6.27 ], std: [ 2.55, 1.81 ], fq: 0
  },
  "nonchalant": {
    dict: "anew", word: "nonchalant", stem: "nonchal",
    avg: [ 3.12, 4.74 ], std: [ 1.93, 1.11 ], fq: 1
  },
  "nonsense": {
    dict: "anew", word: "nonsense", stem: "nonsens",
    avg: [ 4.17, 4.61 ], std: [ 2.02, 1.63 ], fq: 13
  },
  "nun": {
    dict: "anew", word: "nun", stem: "nun",
    avg: [ 2.93, 4.93 ], std: [ 1.8, 1.89 ], fq: 2
  },
  "nurse": {
    dict: "anew", word: "nurse", stem: "nurs",
    avg: [ 4.84, 6.08 ], std: [ 2.04, 2.08 ], fq: 17
  },
  "obey": {
    dict: "anew", word: "obey", stem: "obey",
    avg: [ 4.23, 4.52 ], std: [ 1.72, 1.88 ], fq: 8
  },
  "obsession": {
    dict: "anew", word: "obsession", stem: "obsess",
    avg: [ 6.41, 4.52 ], std: [ 2.13, 2.13 ], fq: 5
  },
  "odd": {
    dict: "anew", word: "odd", stem: "odd",
    avg: [ 4.27, 4.82 ], std: [ 2.46, 2.04 ], fq: 44
  },
  "office": {
    dict: "anew", word: "office", stem: "offic",
    avg: [ 4.08, 5.24 ], std: [ 1.92, 1.59 ], fq: 255
  },
  "overcast": {
    dict: "anew", word: "overcast", stem: "overcast",
    avg: [ 3.46, 3.65 ], std: [ 1.92, 1.61 ], fq: 9
  },
  "paint": {
    dict: "anew", word: "paint", stem: "paint",
    avg: [ 4.1, 5.62 ], std: [ 2.36, 1.72 ], fq: 37
  },
  "pamphlet": {
    dict: "anew", word: "pamphlet", stem: "pamphlet",
    avg: [ 3.62, 4.79 ], std: [ 2.02, 1.05 ], fq: 3
  },
  "paper": {
    dict: "anew", word: "paper", stem: "paper",
    avg: [ 2.5, 5.2 ], std: [ 1.85, 1.21 ], fq: 157
  },
  "part": {
    dict: "anew", word: "part", stem: "part",
    avg: [ 3.82, 5.11 ], std: [ 2.24, 1.78 ], fq: 500
  },
  "passage": {
    dict: "anew", word: "passage", stem: "passag",
    avg: [ 4.36, 5.28 ], std: [ 2.13, 1.44 ], fq: 49
  },
  "patent": {
    dict: "anew", word: "patent", stem: "patent",
    avg: [ 3.5, 5.29 ], std: [ 1.84, 1.08 ], fq: 35
  },
  "patriot": {
    dict: "anew", word: "patriot", stem: "patriot",
    avg: [ 5.17, 6.71 ], std: [ 2.53, 1.69 ], fq: 10
  },
  "pencil": {
    dict: "anew", word: "pencil", stem: "pencil",
    avg: [ 3.14, 5.22 ], std: [ 1.9, 0.68 ], fq: 34
  },
  "penis": {
    dict: "anew", word: "penis", stem: "peni",
    avg: [ 5.54, 5.9 ], std: [ 2.63, 1.72 ], fq: 0
  },
  "people": {
    dict: "anew", word: "people", stem: "peopl",
    avg: [ 5.94, 7.33 ], std: [ 2.09, 1.7 ], fq: 847
  },
  "phase": {
    dict: "anew", word: "phase", stem: "phase",
    avg: [ 3.98, 5.17 ], std: [ 1.82, 0.79 ], fq: 72
  },
  "pig": {
    dict: "anew", word: "pig", stem: "pig",
    avg: [ 4.2, 5.07 ], std: [ 2.42, 1.97 ], fq: 8
  },
  "plain": {
    dict: "anew", word: "plain", stem: "plain",
    avg: [ 3.52, 4.39 ], std: [ 2.05, 1.46 ], fq: 48
  },
  "plane": {
    dict: "anew", word: "plane", stem: "plane",
    avg: [ 6.14, 6.43 ], std: [ 2.39, 1.98 ], fq: 114
  },
  "poster": {
    dict: "anew", word: "poster", stem: "poster",
    avg: [ 3.93, 5.34 ], std: [ 2.56, 1.75 ], fq: 4
  },
  "power": {
    dict: "anew", word: "power", stem: "power",
    avg: [ 6.67, 6.54 ], std: [ 1.87, 2.21 ], fq: 342
  },
  "prairie": {
    dict: "anew", word: "prairie", stem: "prairi",
    avg: [ 3.41, 5.75 ], std: [ 2.17, 1.43 ], fq: 21
  },
  "priest": {
    dict: "anew", word: "priest", stem: "priest",
    avg: [ 4.41, 6.42 ], std: [ 2.71, 2 ], fq: 16
  },
  "quart": {
    dict: "anew", word: "quart", stem: "quart",
    avg: [ 3.59, 5.39 ], std: [ 2.51, 2.01 ], fq: 3
  },
  "radiator": {
    dict: "anew", word: "radiator", stem: "radiat",
    avg: [ 4.02, 4.67 ], std: [ 1.94, 1.05 ], fq: 4
  },
  "radio": {
    dict: "anew", word: "radio", stem: "radio",
    avg: [ 4.78, 6.73 ], std: [ 2.82, 1.47 ], fq: 120
  },
  "rattle": {
    dict: "anew", word: "rattle", stem: "rattl",
    avg: [ 4.36, 5.03 ], std: [ 2.18, 1.23 ], fq: 5
  },
  "razor": {
    dict: "anew", word: "razor", stem: "razor",
    avg: [ 5.36, 4.81 ], std: [ 2.44, 2.16 ], fq: 15
  },
  "red": {
    dict: "anew", word: "red", stem: "red",
    avg: [ 5.29, 6.41 ], std: [ 2.04, 1.61 ], fq: 197
  },
  "repentant": {
    dict: "anew", word: "repentant", stem: "repent",
    avg: [ 4.69, 5.53 ], std: [ 1.98, 1.86 ], fq: 1
  },
  "reptile": {
    dict: "anew", word: "reptile", stem: "reptil",
    avg: [ 5.18, 4.77 ], std: [ 2.19, 2 ], fq: 0
  },
  "reserved": {
    dict: "anew", word: "reserved", stem: "reserv",
    avg: [ 3.27, 4.88 ], std: [ 2.05, 1.83 ], fq: 27
  },
  "reverent": {
    dict: "anew", word: "reverent", stem: "rever",
    avg: [ 4, 5.35 ], std: [ 1.6, 1.21 ], fq: 3
  },
  "revolt": {
    dict: "anew", word: "revolt", stem: "revolt",
    avg: [ 6.56, 4.13 ], std: [ 2.34, 1.78 ], fq: 8
  },
  "rifle": {
    dict: "anew", word: "rifle", stem: "rifl",
    avg: [ 6.35, 4.02 ], std: [ 2.04, 2.76 ], fq: 63
  },
  "rock": {
    dict: "anew", word: "rock", stem: "rock",
    avg: [ 4.52, 5.56 ], std: [ 2.37, 1.38 ], fq: 75
  },
  "runner": {
    dict: "anew", word: "runner", stem: "runner",
    avg: [ 4.76, 5.67 ], std: [ 2.4, 1.91 ], fq: 1
  },
  "scissors": {
    dict: "anew", word: "scissors", stem: "scissor",
    avg: [ 4.47, 5.05 ], std: [ 1.76, 0.96 ], fq: 1
  },
  "seat": {
    dict: "anew", word: "seat", stem: "seat",
    avg: [ 2.95, 4.95 ], std: [ 1.72, 0.98 ], fq: 54
  },
  "serious": {
    dict: "anew", word: "serious", stem: "serious",
    avg: [ 4, 5.08 ], std: [ 1.87, 1.59 ], fq: 116
  },
  "shadow": {
    dict: "anew", word: "shadow", stem: "shadow",
    avg: [ 4.3, 4.35 ], std: [ 2.26, 1.23 ], fq: 36
  },
  "shark": {
    dict: "anew", word: "shark", stem: "shark",
    avg: [ 7.16, 3.65 ], std: [ 1.96, 2.47 ], fq: 0
  },
  "sheltered": {
    dict: "anew", word: "sheltered", stem: "shelter",
    avg: [ 4.28, 5.75 ], std: [ 1.77, 1.92 ], fq: 4
  },
  "shy": {
    dict: "anew", word: "shy", stem: "shi",
    avg: [ 3.77, 4.64 ], std: [ 2.29, 1.83 ], fq: 13
  },
  "skijump": {
    dict: "anew", word: "skijump", stem: "skijump",
    avg: [ 7.06, 7.06 ], std: [ 2.1, 1.73 ], fq: 0
  },
  "skyscraper": {
    dict: "anew", word: "skyscraper", stem: "skyscrap",
    avg: [ 5.71, 5.88 ], std: [ 2.17, 1.87 ], fq: 2
  },
  "slow": {
    dict: "anew", word: "slow", stem: "slow",
    avg: [ 3.39, 3.93 ], std: [ 2.22, 1.6 ], fq: 60
  },
  "slush": {
    dict: "anew", word: "slush", stem: "slush",
    avg: [ 3.73, 4.66 ], std: [ 2.23, 1.88 ], fq: 0
  },
  "snake": {
    dict: "anew", word: "snake", stem: "snake",
    avg: [ 6.82, 3.31 ], std: [ 2.1, 2.2 ], fq: 44
  },
  "solemn": {
    dict: "anew", word: "solemn", stem: "solemn",
    avg: [ 3.56, 4.32 ], std: [ 1.95, 1.51 ], fq: 12
  },
  "spray": {
    dict: "anew", word: "spray", stem: "spray",
    avg: [ 4.14, 5.45 ], std: [ 2.28, 1.63 ], fq: 16
  },
  "square": {
    dict: "anew", word: "square", stem: "squar",
    avg: [ 3.18, 4.74 ], std: [ 1.76, 1.02 ], fq: 143
  },
  "startled": {
    dict: "anew", word: "startled", stem: "startl",
    avg: [ 6.93, 4.5 ], std: [ 2.24, 1.67 ], fq: 21
  },
  "statue": {
    dict: "anew", word: "statue", stem: "statu",
    avg: [ 3.46, 5.17 ], std: [ 1.72, 0.7 ], fq: 17
  },
  "stiff": {
    dict: "anew", word: "stiff", stem: "stiff",
    avg: [ 4.02, 4.68 ], std: [ 2.41, 1.97 ], fq: 21
  },
  "stomach": {
    dict: "anew", word: "stomach", stem: "stomach",
    avg: [ 3.93, 4.82 ], std: [ 2.49, 2.06 ], fq: 37
  },
  "stool": {
    dict: "anew", word: "stool", stem: "stool",
    avg: [ 4, 4.56 ], std: [ 2.14, 1.72 ], fq: 8
  },
  "storm": {
    dict: "anew", word: "storm", stem: "storm",
    avg: [ 5.71, 4.95 ], std: [ 2.34, 2.22 ], fq: 26
  },
  "stove": {
    dict: "anew", word: "stove", stem: "stove",
    avg: [ 4.51, 4.98 ], std: [ 2.14, 1.69 ], fq: 15
  },
  "street": {
    dict: "anew", word: "street", stem: "street",
    avg: [ 3.39, 5.22 ], std: [ 1.87, 0.72 ], fq: 244
  },
  "swamp": {
    dict: "anew", word: "swamp", stem: "swamp",
    avg: [ 4.86, 5.14 ], std: [ 2.36, 2.24 ], fq: 5
  },
  "swift": {
    dict: "anew", word: "swift", stem: "swift",
    avg: [ 5.39, 6.46 ], std: [ 2.53, 1.76 ], fq: 32
  },
  "table": {
    dict: "anew", word: "table", stem: "tabl",
    avg: [ 2.92, 5.22 ], std: [ 2.16, 0.72 ], fq: 198
  },
  "tank": {
    dict: "anew", word: "tank", stem: "tank",
    avg: [ 4.88, 5.16 ], std: [ 1.86, 1.87 ], fq: 12
  },
  "taxi": {
    dict: "anew", word: "taxi", stem: "taxi",
    avg: [ 3.41, 5 ], std: [ 2.14, 1.96 ], fq: 16
  },
  "tease": {
    dict: "anew", word: "tease", stem: "teas",
    avg: [ 5.87, 4.84 ], std: [ 2.56, 2.51 ], fq: 6
  },
  "tennis": {
    dict: "anew", word: "tennis", stem: "tenni",
    avg: [ 4.61, 6.02 ], std: [ 2.6, 1.97 ], fq: 15
  },
  "theory": {
    dict: "anew", word: "theory", stem: "theori",
    avg: [ 4.62, 5.3 ], std: [ 1.94, 1.49 ], fq: 129
  },
  "thermometer": {
    dict: "anew", word: "thermometer", stem: "thermomet",
    avg: [ 3.79, 4.73 ], std: [ 2.02, 1.05 ], fq: 0
  },
  "time": {
    dict: "anew", word: "time", stem: "time",
    avg: [ 4.64, 5.31 ], std: [ 2.75, 2.02 ], fq: 1599
  },
  "tool": {
    dict: "anew", word: "tool", stem: "tool",
    avg: [ 4.33, 5.19 ], std: [ 1.78, 1.27 ], fq: 40
  },
  "tower": {
    dict: "anew", word: "tower", stem: "tower",
    avg: [ 3.95, 5.46 ], std: [ 2.28, 1.75 ], fq: 13
  },
  "truck": {
    dict: "anew", word: "truck", stem: "truck",
    avg: [ 4.84, 5.47 ], std: [ 2.17, 1.88 ], fq: 57
  },
  "umbrella": {
    dict: "anew", word: "umbrella", stem: "umbrella",
    avg: [ 3.68, 5.16 ], std: [ 1.99, 1.57 ], fq: 8
  },
  "unit": {
    dict: "anew", word: "unit", stem: "unit",
    avg: [ 3.75, 5.59 ], std: [ 2.49, 1.87 ], fq: 103
  },
  "utensil": {
    dict: "anew", word: "utensil", stem: "utensil",
    avg: [ 3.57, 5.14 ], std: [ 1.98, 1.39 ], fq: 0
  },
  "vagina": {
    dict: "anew", word: "vagina", stem: "vagina",
    avg: [ 5.55, 6.14 ], std: [ 2.55, 1.77 ], fq: 10
  },
  "vampire": {
    dict: "anew", word: "vampire", stem: "vampir",
    avg: [ 6.37, 4.26 ], std: [ 2.35, 1.86 ], fq: 1
  },
  "vanity": {
    dict: "anew", word: "vanity", stem: "vaniti",
    avg: [ 4.98, 4.3 ], std: [ 2.31, 1.91 ], fq: 7
  },
  "vehicle": {
    dict: "anew", word: "vehicle", stem: "vehicl",
    avg: [ 4.63, 6.27 ], std: [ 2.81, 2.34 ], fq: 35
  },
  "vest": {
    dict: "anew", word: "vest", stem: "vest",
    avg: [ 3.95, 5.25 ], std: [ 2.09, 1.33 ], fq: 4
  },
  "vigorous": {
    dict: "anew", word: "vigorous", stem: "vigor",
    avg: [ 5.9, 6.79 ], std: [ 2.66, 1.54 ], fq: 29
  },
  "village": {
    dict: "anew", word: "village", stem: "villag",
    avg: [ 4.08, 5.92 ], std: [ 1.87, 1.34 ], fq: 72
  },
  "virgin": {
    dict: "anew", word: "virgin", stem: "virgin",
    avg: [ 5.51, 6.45 ], std: [ 2.06, 1.76 ], fq: 35
  },
  "volcano": {
    dict: "anew", word: "volcano", stem: "volcano",
    avg: [ 6.33, 4.84 ], std: [ 2.21, 2.14 ], fq: 2
  },
  "wagon": {
    dict: "anew", word: "wagon", stem: "wagon",
    avg: [ 3.98, 5.37 ], std: [ 2.04, 0.97 ], fq: 55
  },
  "watch": {
    dict: "anew", word: "watch", stem: "watch",
    avg: [ 4.1, 5.78 ], std: [ 2.12, 1.51 ], fq: 81
  },
  "whistle": {
    dict: "anew", word: "whistle", stem: "whistl",
    avg: [ 4.69, 5.81 ], std: [ 1.99, 1.21 ], fq: 4
  },
  "wine": {
    dict: "anew", word: "wine", stem: "wine",
    avg: [ 4.78, 5.95 ], std: [ 2.34, 2.19 ], fq: 72
  },
  "yacht": {
    dict: "anew", word: "yacht", stem: "yacht",
    avg: [ 5.61, 6.95 ], std: [ 2.72, 1.79 ], fq: 4
  }
};


var  anew_stem = {			// ANEW terms, indexed by stem
  "activ": {
     dict: "anew-stem", word: "activate", stem: "activ",
     avg: [ 4.86, 5.46 ], std: [ 2.56, 0.98 ], fq: 2
   },
   "ankl": {
     dict: "anew-stem", word: "ankle", stem: "ankl",
     avg: [ 4.16, 5.27 ], std: [ 2.03, 1.54 ], fq: 8
   },
   "applianc": {
     dict: "anew-stem", word: "appliance", stem: "applianc",
     avg: [ 4.05, 5.1 ], std: [ 2.06, 1.21 ], fq: 5
   },
   "armi": {
     dict: "anew-stem", word: "army", stem: "armi",
     avg: [ 5.03, 4.72 ], std: [ 2.03, 1.75 ], fq: 132
   },
   "arous": {
     dict: "anew-stem", word: "aroused", stem: "arous",
     avg: [ 6.63, 7.97 ], std: [ 2.7, 1 ], fq: 20
   },
   "avalanch": {
     dict: "anew-stem", word: "avalanche", stem: "avalanch",
     avg: [ 5.54, 3.29 ], std: [ 2.37, 1.95 ], fq: 1
   },
   "avenu": {
     dict: "anew-stem", word: "avenue", stem: "avenu",
     avg: [ 4.12, 5.5 ], std: [ 2.01, 1.37 ], fq: 46
   },
   "bee": {
     dict: "anew-stem", word: "bees", stem: "bee",
     avg: [ 6.51, 3.2 ], std: [ 2.14, 2.07 ], fq: 15
   },
   "bodi": {
     dict: "anew-stem", word: "body", stem: "bodi",
     avg: [ 5.52, 5.55 ], std: [ 2.63, 2.37 ], fq: 276
   },
   "bottl": {
     dict: "anew-stem", word: "bottle", stem: "bottl",
     avg: [ 4.79, 6.15 ], std: [ 2.44, 1.49 ], fq: 76
   },
   "build": {
     dict: "anew-stem", word: "building", stem: "build",
     avg: [ 3.92, 5.29 ], std: [ 1.94, 1.15 ], fq: 160
   },
   "circl": {
     dict: "anew-stem", word: "circle", stem: "circl",
     avg: [ 3.86, 5.67 ], std: [ 2.13, 1.26 ], fq: 60
   },
   "clumsi": {
     dict: "anew-stem", word: "clumsy", stem: "clumsi",
     avg: [ 5.18, 4 ], std: [ 2.4, 2.22 ], fq: 6
   },
   "coars": {
     dict: "anew-stem", word: "coarse", stem: "coars",
     avg: [ 4.21, 4.55 ], std: [ 1.84, 1.42 ], fq: 10
   },
   "content": {
     dict: "anew-stem", word: "contents", stem: "content",
     avg: [ 4.32, 4.89 ], std: [ 2.14, 0.89 ], fq: 16
   },
   "curtain": {
     dict: "anew-stem", word: "curtains", stem: "curtain",
     avg: [ 3.67, 4.83 ], std: [ 1.83, 0.83 ], fq: 8
   },
   "elev": {
     dict: "anew-stem", word: "elevator", stem: "elev",
     avg: [ 4.16, 5.44 ], std: [ 1.99, 1.18 ], fq: 12
   },
   "embattl": {
     dict: "anew-stem", word: "embattled", stem: "embattl",
     avg: [ 5.36, 4.39 ], std: [ 2.37, 1.63 ], fq: 1
   },
   "employ": {
     dict: "anew-stem", word: "employment", stem: "employ",
     avg: [ 5.28, 6.47 ], std: [ 2.12, 1.81 ], fq: 47
   },
   "engin": {
     dict: "anew-stem", word: "engine", stem: "engin",
     avg: [ 3.98, 5.2 ], std: [ 2.33, 1.18 ], fq: 50
   },
   "erot": {
     dict: "anew-stem", word: "erotic", stem: "erot",
     avg: [ 7.24, 7.43 ], std: [ 1.97, 1.53 ], fq: 8
   },
   "excus": {
     dict: "anew-stem", word: "excuse", stem: "excus",
     avg: [ 4.48, 4.05 ], std: [ 2.29, 1.41 ], fq: 27
   },
   "histori": {
     dict: "anew-stem", word: "history", stem: "histori",
     avg: [ 3.93, 5.24 ], std: [ 2.29, 2.01 ], fq: 286
   },
   "ident": {
     dict: "anew-stem", word: "identity", stem: "ident",
     avg: [ 4.95, 6.57 ], std: [ 2.24, 1.99 ], fq: 55
   },
   "indiffer": {
     dict: "anew-stem", word: "indifferent", stem: "indiffer",
     avg: [ 3.18, 4.61 ], std: [ 1.85, 1.28 ], fq: 11
   },
   "industri": {
     dict: "anew-stem", word: "industry", stem: "industri",
     avg: [ 4.47, 5.3 ], std: [ 2.43, 1.61 ], fq: 171
   },
   "infatu": {
     dict: "anew-stem", word: "infatuation", stem: "infatu",
     avg: [ 7.02, 6.73 ], std: [ 1.87, 2.08 ], fq: 4
   },
   "inhabit": {
     dict: "anew-stem", word: "inhabitant", stem: "inhabit",
     avg: [ 3.95, 5.05 ], std: [ 1.97, 1.34 ], fq: 0
   },
   "jelli": {
     dict: "anew-stem", word: "jelly", stem: "jelli",
     avg: [ 3.7, 5.66 ], std: [ 2.29, 1.44 ], fq: 3
   },
   "kettl": {
     dict: "anew-stem", word: "kettle", stem: "kettl",
     avg: [ 3.22, 5.22 ], std: [ 2.23, 0.91 ], fq: 3
   },
   "lightn": {
     dict: "anew-stem", word: "lightning", stem: "lightn",
     avg: [ 6.61, 4.57 ], std: [ 1.77, 2.66 ], fq: 14
   },
   "machin": {
     dict: "anew-stem", word: "machine", stem: "machin",
     avg: [ 3.82, 5.09 ], std: [ 2.4, 1.67 ], fq: 103
   },
   "masturb": {
     dict: "anew-stem", word: "masturbate", stem: "masturb",
     avg: [ 5.67, 5.45 ], std: [ 2.18, 2.02 ], fq: 0
   },
   "materi": {
     dict: "anew-stem", word: "material", stem: "materi",
     avg: [ 4.05, 5.26 ], std: [ 2.34, 1.29 ], fq: 174
   },
   "medicin": {
     dict: "anew-stem", word: "medicine", stem: "medicin",
     avg: [ 4.4, 5.67 ], std: [ 2.36, 2.06 ], fq: 30
   },
   "mobil": {
     dict: "anew-stem", word: "mobility", stem: "mobil",
     avg: [ 5, 6.83 ], std: [ 2.18, 1.79 ], fq: 8
   },
   "muddi": {
     dict: "anew-stem", word: "muddy", stem: "muddi",
     avg: [ 4.13, 4.44 ], std: [ 2.13, 2.07 ], fq: 10
   },
   "mutat": {
     dict: "anew-stem", word: "mutation", stem: "mutat",
     avg: [ 4.84, 3.91 ], std: [ 2.52, 2.44 ], fq: 0
   },
   "nippl": {
     dict: "anew-stem", word: "nipple", stem: "nippl",
     avg: [ 5.56, 6.27 ], std: [ 2.55, 1.81 ], fq: 0
   },
   "nonchal": {
     dict: "anew-stem", word: "nonchalant", stem: "nonchal",
     avg: [ 3.12, 4.74 ], std: [ 1.93, 1.11 ], fq: 1
   },
   "nonsens": {
     dict: "anew-stem", word: "nonsense", stem: "nonsens",
     avg: [ 4.17, 4.61 ], std: [ 2.02, 1.63 ], fq: 13
   },
   "nurs": {
     dict: "anew-stem", word: "nurse", stem: "nurs",
     avg: [ 4.84, 6.08 ], std: [ 2.04, 2.08 ], fq: 17
   },
   "obsess": {
     dict: "anew-stem", word: "obsession", stem: "obsess",
     avg: [ 6.41, 4.52 ], std: [ 2.13, 2.13 ], fq: 5
   },
   "offic": {
     dict: "anew-stem", word: "office", stem: "offic",
     avg: [ 4.08, 5.24 ], std: [ 1.92, 1.59 ], fq: 255
   },
   "passag": {
     dict: "anew-stem", word: "passage", stem: "passag",
     avg: [ 4.36, 5.28 ], std: [ 2.13, 1.44 ], fq: 49
   },
   "peni": {
     dict: "anew-stem", word: "penis", stem: "peni",
     avg: [ 5.54, 5.9 ], std: [ 2.63, 1.72 ], fq: 0
   },
   "peopl": {
     dict: "anew-stem", word: "people", stem: "peopl",
     avg: [ 5.94, 7.33 ], std: [ 2.09, 1.7 ], fq: 847
   },
   "prairi": {
     dict: "anew-stem", word: "prairie", stem: "prairi",
     avg: [ 3.41, 5.75 ], std: [ 2.17, 1.43 ], fq: 21
   },
   "radiat": {
     dict: "anew-stem", word: "radiator", stem: "radiat",
     avg: [ 4.02, 4.67 ], std: [ 1.94, 1.05 ], fq: 4
   },
   "rattl": {
     dict: "anew-stem", word: "rattle", stem: "rattl",
     avg: [ 4.36, 5.03 ], std: [ 2.18, 1.23 ], fq: 5
   },
   "repent": {
     dict: "anew-stem", word: "repentant", stem: "repent",
     avg: [ 4.69, 5.53 ], std: [ 1.98, 1.86 ], fq: 1
   },
   "reptil": {
     dict: "anew-stem", word: "reptile", stem: "reptil",
     avg: [ 5.18, 4.77 ], std: [ 2.19, 2 ], fq: 0
   },
   "reserv": {
     dict: "anew-stem", word: "reserved", stem: "reserv",
     avg: [ 3.27, 4.88 ], std: [ 2.05, 1.83 ], fq: 27
   },
   "rever": {
     dict: "anew-stem", word: "reverent", stem: "rever",
     avg: [ 4, 5.35 ], std: [ 1.6, 1.21 ], fq: 3
   },
   "rifl": {
     dict: "anew-stem", word: "rifle", stem: "rifl",
     avg: [ 6.35, 4.02 ], std: [ 2.04, 2.76 ], fq: 63
   },
   "scissor": {
     dict: "anew-stem", word: "scissors", stem: "scissor",
     avg: [ 4.47, 5.05 ], std: [ 1.76, 0.96 ], fq: 1
   },
   "shelter": {
     dict: "anew-stem", word: "sheltered", stem: "shelter",
     avg: [ 4.28, 5.75 ], std: [ 1.77, 1.92 ], fq: 4
   },
   "shi": {
     dict: "anew-stem", word: "shy", stem: "shi",
     avg: [ 3.77, 4.64 ], std: [ 2.29, 1.83 ], fq: 13
   },
   "skyscrap": {
     dict: "anew-stem", word: "skyscraper", stem: "skyscrap",
     avg: [ 5.71, 5.88 ], std: [ 2.17, 1.87 ], fq: 2
   },
   "squar": {
     dict: "anew-stem", word: "square", stem: "squar",
     avg: [ 3.18, 4.74 ], std: [ 1.76, 1.02 ], fq: 143
   },
   "startl": {
     dict: "anew-stem", word: "startled", stem: "startl",
     avg: [ 6.93, 4.5 ], std: [ 2.24, 1.67 ], fq: 21
   },
   "statu": {
     dict: "anew-stem", word: "statue", stem: "statu",
     avg: [ 3.46, 5.17 ], std: [ 1.72, 0.7 ], fq: 17
   },
   "tabl": {
     dict: "anew-stem", word: "table", stem: "tabl",
     avg: [ 2.92, 5.22 ], std: [ 2.16, 0.72 ], fq: 198
   },
   "teas": {
     dict: "anew-stem", word: "tease", stem: "teas",
     avg: [ 5.87, 4.84 ], std: [ 2.56, 2.51 ], fq: 6
   },
   "tenni": {
     dict: "anew-stem", word: "tennis", stem: "tenni",
     avg: [ 4.61, 6.02 ], std: [ 2.6, 1.97 ], fq: 15
   },
   "theori": {
     dict: "anew-stem", word: "theory", stem: "theori",
     avg: [ 4.62, 5.3 ], std: [ 1.94, 1.49 ], fq: 129
   },
   "thermomet": {
     dict: "anew-stem", word: "thermometer", stem: "thermomet",
     avg: [ 3.79, 4.73 ], std: [ 2.02, 1.05 ], fq: 0
   },
   "vampir": {
     dict: "anew-stem", word: "vampire", stem: "vampir",
     avg: [ 6.37, 4.26 ], std: [ 2.35, 1.86 ], fq: 1
   },
   "vaniti": {
     dict: "anew-stem", word: "vanity", stem: "vaniti",
     avg: [ 4.98, 4.3 ], std: [ 2.31, 1.91 ], fq: 7
   },
   "vehicl": {
     dict: "anew-stem", word: "vehicle", stem: "vehicl",
     avg: [ 4.63, 6.27 ], std: [ 2.81, 2.34 ], fq: 35
   },
   "vigor": {
     dict: "anew-stem", word: "vigorous", stem: "vigor",
     avg: [ 5.9, 6.79 ], std: [ 2.66, 1.54 ], fq: 29
   },
   "villag": {
     dict: "anew-stem", word: "village", stem: "villag",
     avg: [ 4.08, 5.92 ], std: [ 1.87, 1.34 ], fq: 72
   },
   "whistl": {
     dict: "anew-stem", word: "whistle", stem: "whistl",
     avg: [ 4.69, 5.81 ], std: [ 1.99, 1.21 ], fq: 4
   },
};


function anew_extend( term, avg, std, fq )

  //  Extend the ANEW dictionary with the given term
  //
  //  term:  Term to add
  //  avg:   [ valence, arousal ] averages
  //  std:   [ valence, arousal ] standard deviations
  //  fq:    Term evaluation frequency
{
  var  stem;				// Stemmed term


  term = term.toLowerCase();
  stem = stemmer( term );

  //  Warning if we're replacing terms rather than adding them

  if ( anew_term.hasOwnProperty( term ) ) {
    console.log( "anew_extend(), replacing term " + term );
  }
  if ( anew_stem.hasOwnProperty( stem ) ) {
    console.log( "anew_extend(), replacing stem " + stem );
  }

  anew_term[ term ] =
    { dict: "anew", word: term, stem: stem, avg: avg, std: std, fq: fq };
  anew_stem[ stem ] =
    { dict: "anew-stem", word: term, stem: stem, avg: avg, std: std, fq: fq };
}					// End routine anew_extend


function anew_find_stem( s )

  //  Return the stem's in the ANEW dictionary, or -1 if no such stem
  //
  //  s:  Stem to search
{
  if ( s.length == 0 ) {		// Empty term?
    return -1;
  }

  if ( anew_stem.hasOwnProperty( s ) ) {
    return anew_stem[ s ];
  }

  return -1;
}					// End routine anew_find_stem


function anew_find_word( w )

  //  Return the word's in the ANEW dictionary, or -1 if no such word
  //
  //  w:  Word to search
{
  if ( w.length == 0 ) {		// Empty term?
    return -1;
  }

  if ( anew_term.hasOwnProperty( w ) ) {
    return anew_term[ w ];
  }

  return -1;
}					// End routine anew_find_word
