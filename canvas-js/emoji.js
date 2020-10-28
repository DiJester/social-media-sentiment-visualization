/*--------------------------------------------------------------------------*/
/*  EMOJI.JS								    */
/*    Routines to calculate emoji sentiment scores			    */
/* 									    */
/*- Modification History: --------------------------------------------------*/
/*  When:	Who:			Comments:			    */
/* 									    */
/*  29-Oct-18	Christopher G. Healey	Initial implementation		    */
/*--------------------------------------------------------------------------*/

//  Module global variables

//  Emoji description structure:
//  - key, UTF-16 Unicode
//  - dict, dictionary
//  - word, UTF-16 Unicode
//  - anew: ANEW equivalent used for avg and std
//  - avg, [ arousal, valence ] average
//  - std, [ arousal, valence ] standard deviation
//  - fq: number of evaluations
//
//  Emojis are not stemmed, because there is no "stem" to an emoji

var  emoji_term = {
  "0x1f600": {				// Grinning face
    dict: "emoji", word: "\u{1f600}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f603": {				// Grinning face w/big eyes
    dict: "emoji", word: "\u{1f603}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f604": {				// Grinning face w/smiling eyes
    dict: "emoji", word: "\u{1f604}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f601": {				// Beaming face w/smiling eyes
    dict: "emoji", word: "\u{1f601}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f606": {				// Grinning squinting face
    dict: "emoji", word: "\u{1f606}", anew: "grin",
    avg: [ 5.65, 7.66 ], std: [ 2.74, 1.66 ], fq: 446
  },
  "0x1f605": {				// Grinning face w/sweat
    dict: "emoji", word: "\u{1f605}", anew: "grin",
    avg: [ 5.65, 7.66 ], std: [ 2.74, 1.66 ], fq: 446
  },
  "0x1f923": {				// ROFL
    dict: "emoji", word: "\u{1f923}", anew: "laugh",
    avg: [ 6.62, 7.56 ], std: [ 1.91, 2.64 ], fq: 19
  },
  "0x1f602": {				// Face w/tears of joy
    dict: "emoji", word: "\u{1f602}", anew: "joy",
    avg: [ 5.55, 8.21 ], std: [ 2.85, 1.18 ], fq: 34
  },
  "0x1f642": {				// Slightly smiling face
    dict: "emoji", word: "\u{1f642}", anew: "smile",
    avg: [ 4.62, 7.89 ], std: [ 3.09, 2.19 ], fq: 19
  },
  "0x1f643": {				// Upside down smiling face
    dict: "emoji", word: "\u{1f643}", anew: "smile",
    avg: [ 4.62, 7.89 ], std: [ 3.09, 2.19 ], fq: 19
  },
  "0x1f609": {				// Winking face
    dict: "emoji", word: "\u{1f609}", anew: "wink",
    avg: [ 4.75, 6.62 ], std: [ 2.4, 1.67 ], fq: 31
  },
  "0x1f60a": {				// Smiling face w/smiling eyes
    dict: "emoji", word: "\u{1f60a}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f607": {				// Smiling face w/halo
    dict: "emoji", word: "\u{1f607}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f970": {				// Smiling face w/3 hearts
    dict: "emoji", word: "\u{1f607}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f60d": {				// Smiling face w/heart eyes
    dict: "emoji", word: "\u{1f60d}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f929": {				// Star struck
    dict: "emoji", word: "\u{1f929}", anew: "excited",
    avg: [ 6.43, 8.11 ], std: [ 2.54, 0.9 ], fq: 19
  },
  "0x1f618": {				// Blowing a kiss
    dict: "emoji", word: "\u{1f618}", anew: "kiss",
    avg: [ 6.05, 7.78 ], std: [ 3.03, 1.64 ], fq: 31
  },
  "0x1f617": {				// Kissing face
    dict: "emoji", word: "\u{1f617}", anew: "kiss",
    avg: [ 6.05, 7.78 ], std: [ 3.03, 1.64 ], fq: 31
  },
  "0x1f61a": {				// Kissing face w/eyes closed
    dict: "emoji", word: "\u{1f61a}", anew: "kiss",
    avg: [ 6.05, 7.78 ], std: [ 3.03, 1.64 ], fq: 31
  },
  "0x1f619": {				// Kissing face w/smiling eyes
    dict: "emoji", word: "\u{1f619}", anew: "kiss",
    avg: [ 6.05, 7.78 ], std: [ 3.03, 1.64 ], fq: 31
  },
  "0x1f60b": {				// Face savoring food
    dict: "emoji", word: "\u{1f60b}", anew: "happy",
    avg: [ 6.05, 8.47 ], std: [ 2.13, 1.28 ], fq: 32
  },
  "0x1f61b": {				// Face w/tongue
    dict: "emoji", word: "\u{1f61b}", anew: "joke",
    avg: [ 5.73, 7.88 ], std: [ 2.37, 1.44 ], fq: 445
  },
  "0x1f61c": {				// Winking face w/tongue
    dict: "emoji", word: "\u{1f61c}", anew: "wink",
    avg: [ 4.75, 6.62 ], std: [ 2.4, 1.67 ], fq: 31
  },
  "0x1f92a": {				// Zany face
    dict: "emoji", word: "\u{1f92a}", anew: "silly",
    avg: [ 4.86, 6.72 ], std: [ 2.36, 1.72 ], fq: 40
  },
  "0x1f61d": {				// Squinting face w/tongue
    dict: "emoji", word: "\u{1f61d}", anew: "silly",
    avg: [ 4.86, 6.72 ], std: [ 2.36, 1.72 ], fq: 40
  },
  "0x1f914": {				// Thinking face
    dict: "emoji", word: "\u{1f914}", anew: "think",
    avg: [ 3.75, 6.68 ], std: [ 2.27, 1.67 ], fq: 21
  },
  "0x1f910": {				// Zipper-mouth face
    dict: "emoji", word: "\u{1f910}", anew: "silence",
    avg: [ 5.43, 5.86 ], std: [ 2.85, 1.28 ], fq: 50
  },
  "0x1f928": {				// Face w/raised eyebrow
    dict: "emoji", word: "\u{1f928}", anew: "suspicious",
    avg: [ 5, 3.48 ], std: [ 2.64, 1.5 ], fq: 31
  },
  "0x1f610": {				// Neutral face
    dict: "emoji", word: "\u{1f610}", anew: "detached",
    avg: [ 5, 3.48 ], std: [ 2.64, 1.5 ], fq: 31
  },
  "0x1f611": {				// Expressionless face
    dict: "emoji", word: "\u{1f611}", anew: "detached",
    avg: [ 5, 3.48 ], std: [ 2.64, 1.5 ], fq: 31
  },
  "0x1f60f": {				// Smirking face
    dict: "emoji", word: "\u{1f60f}", anew: "smile",
    avg: [ 4.62, 7.89 ], std: [ 3.09, 2.19 ], fq: 19
  },
  "0x1f612": {				// Unamused face
    dict: "emoji", word: "\u{1f612}", anew: "smile",
    avg: [ 5.1, 1.84 ], std: [ 2.4, 1.07 ], fq: 30
  },
  "0x1f644": {				// Face w/rolling eyes
    dict: "emoji", word: "\u{1f644}", anew: "irritate",
    avg: [ 5.85, 3.19 ], std: [ 2.23, 1.69 ], fq: 40
  },
  "0x1f62c": {				// Grimacing face
    dict: "emoji", word: "\u{1f62c}", anew: "scowl",
    avg: [ 4.56, 3.24 ], std: [ 2.58, 1.58 ], fq: 23
  },
  "0x1f925": {				// Lying face
    dict: "emoji", word: "\u{1f925}", anew: "lie",
    avg: [ 4.81, 2.39 ], std: [ 2.8, 1.43 ], fq: 31
  },
  "0x1f60c": {				// Relieved face
    dict: "emoji", word: "\u{1f60c}", anew: "relieve",
    avg: [ 3.9, 7.25 ], std: [ 2.31, 1.59 ], fq: 20
  },
  "0x1f614": {				// Pensive face
    dict: "emoji", word: "\u{1f614}", anew: "think",
    avg: [ 3.75, 6.68 ], std: [ 2.27, 1.67 ], fq: 21
  },
  "0x1f62a": {				// Sleepy face
    dict: "emoji", word: "\u{1f62a}", anew: "sleep",
    avg: [ 3.6, 7.22 ], std: [ 2.57, 1.65 ], fq: 42
  },
  "0x1f924": {				// Drooling face
    dict: "emoji", word: "\u{1f924}", anew: "drool",
    avg: [ 2.7, 3.28 ], std: [ 1.84, 1.81 ], fq: 19
  },
  "0x1f634": {				// Sleeping face
    dict: "emoji", word: "\u{1f634}", anew: "sleep",
    avg: [ 3.6, 7.22 ], std: [ 2.57, 1.65 ], fq: 42
  },
  "0x1f637": {				// Face w/medical mask
    dict: "emoji", word: "\u{1f637}", anew: "sick",
    avg: [ 4.67, 2.29 ], std: [ 2.58, 1.38 ], fq: 21
  },
  "0x1f912": {				// Face w/termometer
    dict: "emoji", word: "\u{1f912}", anew: "sick",
    avg: [ 4.67, 2.29 ], std: [ 2.58, 1.38 ], fq: 21
  },
  "0x1f915": {				// Face w/head bandage
    dict: "emoji", word: "\u{1f915}", anew: "sick",
    avg: [ 4.67, 2.29 ], std: [ 2.58, 1.38 ], fq: 21
  },
  "0x1f922": {				// Nauseated face
    dict: "emoji", word: "\u{1f922}", anew: "sick",
    avg: [ 4.67, 2.29 ], std: [ 2.58, 1.38 ], fq: 21
  },
  "0x1f92e": {				// Vomiting face
    dict: "emoji", word: "\u{1f92e}", anew: "sick",
    avg: [ 4.67, 2.29 ], std: [ 2.58, 1.38 ], fq: 21
  },
  "0x1f975": {				// Hot face
    dict: "emoji", word: "\u{1f975}", anew: "fever",
    avg: [ 5.02, 2.92 ], std: [ 2.54, 1.93 ], fq: 42
  },
  "0x1f976": {				// Cold face
    dict: "emoji", word: "\u{1f976}", anew: "freezing",
    avg: [ 5.84, 3.33 ], std: [ 2.14, 1.88 ], fq: 18
  },
  "0x1f974": {				// Woozy face
    dict: "emoji", word: "\u{1f974}", anew: "woozy",
    avg: [ 5.84, 3.33 ], std: [ 2.14, 1.88 ], fq: 18
  },
  "0x1f635": {				// Dizzy face
    dict: "emoji", word: "\u{1f635}", anew: "dizzy",
    avg: [ 4.67, 3.14 ], std: [ 2.32, 1.71 ], fq: 22
  },
  "0x1f92f": {				// Exploding head
    dict: "emoji", word: "\u{1f92f}", anew: "shock",
    avg: [ 5.95, 3.9 ], std: [ 2.86, 2.05 ], fq: 20
  },
  "0x1f615": {				// Confused face
    dict: "emoji", word: "\u{1f615}", anew: "confused",
    avg: [ 4.28, 3.11 ], std: [ 2.64, 1.52 ], fq: 29
  },
  "0x1f61f": {				// Worried face
    dict: "emoji", word: "\u{1f61f}", anew: "worried",
    avg: [ 5.81, 3.27 ], std: [ 2.75, 1.42 ], fq: 21
  },
  "0x1f641": {				// Slightly frowning face
    dict: "emoji", word: "\u{1f641}", anew: "frown",
    avg: [ 3.61, 3.35 ], std: [ 2.17, 1.35 ], fq: 19
  },
  "0x1f62e": {				// Face w/mouth open
    dict: "emoji", word: "\u{1f62e}", anew: "surprised",
    avg: [ 5.95, 6.57 ], std: [ 2.64, 2.2 ], fq: 21
  },
  "0x1f62f": {				// Hushed face
    dict: "emoji", word: "\u{1f62f}", anew: "surprised",
    avg: [ 5.95, 6.57 ], std: [ 2.64, 2.2 ], fq: 21
  },
  "0x1f632": {				// Astonished face
    dict: "emoji", word: "\u{1f632}", anew: "astonished",
    avg: [ 5.73, 6.42 ], std: [ 2.27, 1.47 ], fq: 31
  },
  "0x1f633": {				// Flushed face
    dict: "emoji", word: "\u{1f633}", anew: "embarrassed",
    avg: [ 5.38, 3.51 ], std: [ 2.44, 1.72 ], fq: 43
  },
  "0x1f626": {				// Frowning face w/open mouth
    dict: "emoji", word: "\u{1f626}", anew: "frown",
    avg: [ 3.61, 3.35 ], std: [ 2.17, 1.35 ], fq: 19
  },
  "0x1f627": {				// Anguished face
    dict: "emoji", word: "\u{1f627}", anew: "anguished",
    avg: [ 4.79, 2.78 ], std: [ 2.54, 1.46 ], fq: 42
  },
  "0x1f628": {				// Fearful face
    dict: "emoji", word: "\u{1f628}", anew: "fearful",
    avg: [ 5.45, 2.66 ], std: [ 2.63, 1.78 ], fq: 41
  },
  "0x1f630": {				// Anxious face w/sweat
    dict: "emoji", word: "\u{1f630}", anew: "anxious",
    avg: [ 6.2, 3.8 ], std: [ 2.36, 1.42 ], fq: 42
  },
  "0x1f625": {				// Sad, relieved face
    dict: "emoji", word: "\u{1f625}", anew: "sad",
    avg: [ 3.49, 2.1 ], std: [ 2.21, 0.91 ], fq: 469
  },
  "0x1f622": {				// Crying face
    dict: "emoji", word: "\u{1f622}", anew: "cry",
    avg: [ 5.45, 3.22 ], std: [ 2.82, 2.41 ], fq: 19
  },
  "0x1f62d": {				// Loudly crying face
    dict: "emoji", word: "\u{1f62d}", anew: "cry",
    avg: [ 5.45, 3.22 ], std: [ 2.82, 2.41 ], fq: 19
  },
  "0x1f631": {				// Fearful face
    dict: "emoji", word: "\u{1f631}", anew: "fearful",
    avg: [ 5.45, 2.66 ], std: [ 2.63, 1.78 ], fq: 41
  },
  "0x1f616": {				// Confounded face
    dict: "emoji", word: "\u{1f616}", anew: "confound",
    avg: [ 4.38, 3.85 ], std: [ 1.88, 1.53 ], fq: 20
  },
  "0x1f623": {				// Persevering face
    dict: "emoji", word: "\u{1f623}", anew: "perserverance",
    avg: [ 3.41, 6.33 ], std: [ 2.28, 2.01 ], fq: 21
  },
  "0x1f61e": {				// Disappointed face
    dict: "emoji", word: "\u{1f61e}", anew: "disappointed",
    avg: [ 4.47, 2.65 ], std: [ 2.37, 1.62 ], fq: 18
  },
  "0x1f613": {				// Downcast face w/sweat
    dict: "emoji", word: "\u{1f613}", anew: "depressed",
    avg: [ 4.25, 2.27 ], std: [ 3.24, 1.48 ], fq: 30
  },
  "0x1f629": {				// Weary face
    dict: "emoji", word: "\u{1f629}", anew: "weary",
    avg: [ 2.9, 3.25 ], std: [ 1.84, 1.33 ], fq: 20
  },
  "0x1f62b": {				// Tired face
    dict: "emoji", word: "\u{1f62b}", anew: "tiresome",
    avg: [ 2.52, 3.86 ], std: [ 1.63, 1.75 ], fq: 21
  },
  "0x1f624": {				// Face w/steam from nose
    dict: "emoji", word: "\u{1f624}", anew: "angry",
    avg: [ 6.2, 2.53 ], std: [ 2.57, 1.74 ], fq: 19
  },
  "0x1f621": {				// Red pouting face
    dict: "emoji", word: "\u{1f621}", anew: "angry",
    avg: [ 6.2, 2.53 ], std: [ 2.57, 1.74 ], fq: 19
  },
  "0x1f620": {				// Angry face
    dict: "emoji", word: "\u{1f620}", anew: "angry",
    avg: [ 6.2, 2.53 ], std: [ 2.57, 1.74 ], fq: 19
  },
  "0x1f92c": {				// Face w/censored mouth
    dict: "emoji", word: "\u{1f92c}", anew: "angry",
    avg: [ 6.2, 2.53 ], std: [ 2.57, 1.74 ], fq: 19
  },
  "0x1f48b": {				// Kiss mark
    dict: "emoji", word: "\u{1f48b}", anew: "kiss",
    avg: [ 6.05, 7.78 ], std: [ 3.03, 1.64 ], fq: 31
  },
  "0x1f48c": {				// Love letter
    dict: "emoji", word: "\u{1f48c}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f498": {				// Heart w/arrow
    dict: "emoji", word: "\u{1f498}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f49d": {				// Heart w/ribbon
    dict: "emoji", word: "\u{1f49d}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f496": {				// Sparkling heart
    dict: "emoji", word: "\u{1f496}", anew: "excited",
    avg: [ 6.43, 8.11 ], std: [ 2.54, 0.9 ], fq: 19
  },
  "0x1f497": {				// Growing heart
    dict: "emoji", word: "\u{1f497}", anew: "excited",
    avg: [ 6.43, 8.11 ], std: [ 2.54, 0.9 ], fq: 19
  },
  "0x1f495": {				// Two hearts
    dict: "emoji", word: "\u{1f495}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f494": {				// Broken heart
    dict: "emoji", word: "\u{1f494}", anew: "sad",
    avg: [ 3.49, 2.1 ], std: [ 2.21, 0.91 ], fq: 469
  },
  "0x1f9e1": {				// Orange heart
    dict: "emoji", word: "\u{1f9e1}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f49b": {				// Yellow heart
    dict: "emoji", word: "\u{1f49b}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f49a": {				// Green heart
    dict: "emoji", word: "\u{1f49a}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f499": {				// Blue heart
    dict: "emoji", word: "\u{1f499}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f49c": {				// Purple heart
    dict: "emoji", word: "\u{1f49c}", anew: "love",
    avg: [ 5.36, 8 ], std: [ 3.23, 1.39 ], fq: 42
  },
  "0x1f5a4": {				// Black heart
    dict: "emoji", word: "\u{1f5a4}", anew: "evil",
    avg: [ 5.67, 2.34 ], std: [ 2.93, 1.61 ], fq: 29
  },
  "0x1f44c": {				// OK hand
    dict: "emoji", word: "\u{1f44c}", anew: "agree",
     avg: [ 3.62, 7.17 ], std: [ 2.09, 1.58 ], fq: 19
  },
  "0x1f44d": {				// Thumbs up
    dict: "emoji", word: "\u{1f44d}", anew: "good",
    avg: [ 3.66, 7.89 ], std: [ 2.72, 1.24 ], fq: 31
  },
  "0x1f44e": {				// Thumbs down
    dict: "emoji", word: "\u{1f44e}", anew: "bad",
    avg: [ 4.86, 3.24 ], std: [ 2.69, 1.92 ], fq: 21
  }
};


function dict_emoji( term )

  //  Return emoji if first element of term in emoji dictionary, -1
  //  otherwise
  //
  //  term:  Term to check
{
  w_hex = "0x" + (term.codePointAt( 0 )).toString( 16 );

  if ( emoji_term.hasOwnProperty( w_hex ) ) {
    return emoji_term[ w_hex ];
  } else {
    return -1;
  }
}					//  End rouitine dict_emoji


function emoji_find_word( w )

  //  Return the emoji in the emoji dictionary, or -1 if no such emoji
  //
  //  w:  Emoji(s) to search
{
  var  emoji_list = [ ];		// List of emoji(s) in word
  var  pos;				// Position in string
  var  term;				// Current emoji term
  var  w_hex;				// Hex string rep of emoji

  
  if ( w.length % 2 != 0 ) {		// Not UTF-16 double-byte encoding?
    return -1;
  }

  //  Check first two bytes to see if it's a recognized emoji Unicode

  pos = 0;
  w_hex = "0x" + (w.codePointAt( pos )).toString( 16 );

  if ( !emoji_term.hasOwnProperty( w_hex ) ) {
    return -1;
  }

  term = emoji_term[ w_hex ];
  emoji_list.push(
    { anew: term.anew, avg: term.avg, std: term.std, fq: term.fq } );

  //  If the first two bytes are a known emoji, walk through the
  //  entire word to see if it's a multiple-emoji string, aggregate
  //  emoji scores

  pos += 2;

  while( pos < w.length - 1 ) {
    w_hex = "0x" + (w.codePointAt( pos )).toString( 16 );
    if ( emoji_term.hasOwnProperty( w_hex ) ) {
      term = emoji_term[ w_hex ];
      emoji_list.push(
        { anew: term.anew, avg: term.avg, std: term.std, fq: term.fq } );
    }

    pos += 2;
  }

  //  Aggregate emoji scores if more than one emoji

  res = comp_anew_avg( emoji_list );
  term = {
    dict: "emoji", word: w, anew: emoji_list[ 0 ].anew,
    avg: [ parseFloat( res.avg[ ARO ].toFixed( 2 ) ),
           parseFloat( res.avg[ VAL ].toFixed( 2 ) ) ],
    std: [ parseFloat( res.std[ ARO ].toFixed( 2 ) ),
           parseFloat( res.std[ VAL ].toFixed( 2 ) ) ],
    fq: parseFloat( res.fq.toFixed( 0 ) )
  };

  return term;
}					// End routine emoji_find_word


function emoji_len( term, beg )

  //  Return the length of the emoji in bytes
  //
  //  term:  Emoji to measure
  //  beg:   Beginning of emoji
{
  var  len;				// Number of characters to consider
  var  skin = [ ];			// Skintone modifier unicode
  var  uni;				// Unicode of emoji

  
  //  Standard (i.e., not include zero-width-length of ZWJ emoji) are
  //  2-bytes wide, but there is also a possible skin tone modifier
  //  making them 4-bytes wide

  if ( !is_emoji( term.substring( beg ) ) ) {
    return 1;
  }

  len = term.length - beg;
  if ( len < 4 ) {			// Skin tone not possible
    return 2;
  }

  //  Skin variation unicode is \ud83c followed by one of five values
  //  in the range \udffb to \udfff

  skin[ 0 ] = term.substring( beg + 2, beg + 3 );
  skin[ 1 ] = term.substring( beg + 3, beg + 4 );

  if ( skin[ 0 ] == '\ud83c' &&
     ( skin[ 1 ] >= '\udffb' && skin[ 1 ] <= '\udfff' ) ) {
    return 4; 
  } else {
    return 2;
  }
}					// End routine emoji_len


function is_emoji( term )

  //  Return true if lead bytes identify next character as a 2-byte
  //  emoji
  //
  //  term:  Term to check
{
  return ( term.substring( 0, 1 ) == '\ud83d' );
}					//  End rouitine is_emoji
