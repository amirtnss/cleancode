exports.specialChars = {
    booleanEqual: { regRule: /(\=\=)/g, value: '==' },
    different: { regRule: /(\!\=)/g, value: '!=' },
    newLine: { regRule: /(\r\n)|(\n)/g, value:'\n'},
    endInstruct:    {regRule: /;/g,  value:';'},
    arrow:    {regRule: /=>/g,  value:'=>'},
    equal:          {regRule: /=/g, value:'='},
    const:          {regRule: /@const/g, value:'const'},
    var:          {regRule: /@var/g, value:'var'},
    let:          {regRule: /@let/g, value:'let'},
    point:           {regRule: /\./g, value:'.'},
    virgule:           {regRule: /\,/g, value:','},
    quotationMark:  {regRule: /\"/g, value:'"'},
    openParenthese:  {regRule: /\(/g, value:'('},
    closeParenthese:  {regRule: /\)/g, value:')'},
    openBrace:  {regRule: /\{/g, value:'{'},
    closeBrace:  {regRule: /\}/g, value:'}'},
    openSquareBracket:  {regRule: /\[/g, value:'['},
    closeSquareBracket:  {regRule: /\]/g, value:']'},
    colon:  {regRule: /\:/g, value:':'},
    quote:  {regRule: /\'/g, value:"'"},
    incrementations: {regRule: /\+\+/g, value: "++"},
    decrementations: { regRule: /\-\-/g, value: "--" },
    addition: {regRule: /(\+)/g, value:'+'},
    soustraction: { regRule: /(\-)/g, value: '-' },
    multiplication: { regRule: /(?<=\d)\*(?=\d)/g, value: '*' },
    division: { regRule: /(?<=\d)\/(?=\d)/g, value: '/' },
    comment:  {regRule: /\/\//g, value:"comment"},
    blockCommentOpen: { regRule: /\/\*/g, value: "/*" },
    blockCommentClose: { regRule: /\*\//g, value: "*/" },
    and: { regRule: /(\&\&)/g, value: '&&' },
    or: { regRule: /(\|\|)/g, value: '||' },
    function:  {regRule: /function/g, value:"function"},
    // elseIf:  {regRule: /else if/g, value:"else if"},
    if:  {regRule: /if/g, value:"if"},
    else:  {regRule: /else/g, value:"else"},
    return:  {regRule: /return/g, value:"return"},
    true:  {regRule: /true/g, value:"true"},
    false:  {regRule: /false/g, value:"false"}
};

exports.symbolePoint               = "point";
exports.symboleVirgule             = "virgule";
exports.symboleArrow               = "arrow";
exports.symboleQuotationMark       = "quotationMark";
exports.symboleOpenParenthese      = "openParenthese";
exports.symboleCloseParenthese     = "closeParenthese";
exports.symboleOpenSquareBracket   = "openSquareBracket";
exports.symboleCloseSquareBracket  = "closeSquareBracket";
exports.symboleConst               = "constant";
exports.symboleVar                 = "var";
exports.symboleLet                 = "let";
exports.symboleOpenBrace           = "openBrace";
exports.symboleCloseBrace          = "closeBrace";
exports.symboleColon               = "colon";
exports.symboleQuote               = "quote";
exports.symboleIncrementation      = "incrementation";
exports.symboleDecrementation      = "decrementation";
exports.symboleFunction            = "function";
exports.symboleComment             = "comment";
exports.symboleIf                  = "if";
exports.symboleElse                = "else";
exports.symboleReturn              = "return";
exports.symboleBool                = "boolean";

exports.typeNumber              = "number";
exports.typeArrow               = "arrow";
exports.typeOpenParenthese      = "openParenthese";
exports.typeCloseParenthese     = "closeParenthese";
exports.typeWord                = "word";
exports.typeConst               = "constant";
exports.typeVar                 = "variable";
exports.typeLet                 = "variable";
exports.typeOpenParenthese      = "openParenthese";
exports.typeCloseParenthese     = "closeParenthese";
exports.typeOpenBrace           = "openBrace";
exports.typeCloseBrace          = "closeBrace";
exports.typeOpenSquareBracket   = "openSquareBracket";
exports.typeCloseSquareBracket  = "closeSquareBracket";
exports.typeColon               = "colon";
exports.typeIncrementation      = "incrementation";
exports.typeDecrementation      = "decrementation";
exports.typeAddition            = "addition";
exports.typeSoustraction        = "soustraction";
exports.typeMultiplication      = "multiplication";
exports.typeDivision            = "division";

exports.typeAnd                 = "and";
exports.typeOr                  = "or";
exports.typeBooleanEqual        = "booleanEqual";
exports.typeDifferent           = "different";

exports.typeEqual               = "equal";
exports.typeQuote               = "Quote";
exports.typeFonction            = "function";
exports.typeComment             = "comment";
exports.typeIf                  = "if";
exports.typeElse                = "else";
exports.typeReturn              = "return";
exports.typeBool                = "boolean";
exports.typeNewLine             = "newLine";
exports.typeBlockCommentOpen    = "blockCommentOpen";
exports.typeBlockCommentClose   = "blockCommentClose";


exports.errorNoTokenFound = 'No Tokens Found.';

