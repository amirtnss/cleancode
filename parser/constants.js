
exports.typeVariable= 'variable';
exports.typeString= 'string';

exports.expressionDeclaration= "variableDeclaration";
exports.functionDeclaration= "functionDeclaration";
exports.functionAffectation = "functionAffectation";
exports.ifStatement= "ifStatement";
exports.expressionAffectation= "variableAffectation";
exports.expressionMethodCall= "objectMethodCall";
exports.expressionComment = "comment";
exports.expressionBlockComment = "blockComment"
exports.conditionIf  = "conditionIf";
exports.expressionAddition = "Addition";
exports.expressionMultiplication = "Multiplication";
exports.expressionDivision = "Division";
exports.expressionSoustraction = "Soustraction";

exports.declarationVariable = ["var","let", "const"]; // ici on crée la valeur qui reconnait les types des variables

exports.errorMissingOpenParenthesis = "Error: missing a open parenthesis";
exports.errorMissingCloseParenthesis= "Error: missing a close parenthesis";
exports.errorMissingOpenBrace = "Error : missing a open brace";
exports.errorMissingCloseBrace = "Error: missing a close brace";
exports.errorMissingQuotationMark= "Error: missing quotation mark";
exports.errorMissingWord= "Error: missing a word for valid expression";
exports.errorDeclarationBefore= "Error: Declaration variable before the same declaration";
exports.errorAffectationBefore= "Error: Affectation variable before declaration";