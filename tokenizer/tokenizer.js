
const helper = require("./helper");
const constTokens= require("./constants");

module.exports = function(code) {
    code= helper.replaceSpecialsChars(code);
    var _tokens = code.split(/[\t\f\v ]+/);
    var tokens = []
    for (var i = 0; i < _tokens.length; i++) {
      var t = _tokens[i]
      //si le token n'est pas un nombre
      if(t.length <= 0 || isNaN(t)) {
        //on check si c'est un caractère spéciale
        let typeChars= helper.checkChars(t);
        
        if (typeChars){
          tokens.push({type: typeChars})
        //sinon c'est un mot
        }
        else{
            if(t=='=>'){
              tokens.push({type: constTokens.typeArrow})
            }
            if(t=='const'){
              tokens.push({type: constTokens.typeConst})
            }
            else if(t=='var'){
              tokens.push({type: constTokens.typeVar})
            }
            else if(t=='let'){
              tokens.push({type: constTokens.typeLet})
            }
            else if(t=='function'){
              tokens.push({type: constTokens.typeFunction})
            }
            else if (t == '++') {
              tokens.push({ type: constTokens.typeIncrementation, value: t })
            }
            else if (t == '--') {
              tokens.push({ type: constTokens.typeDecrementation, value: t })
            }
            else if (t == '+') {
              tokens.push({ type: constTokens.typeAddition, value: t })
            }
            else if (t == '-') {
              tokens.push({ type: constTokens.typeSoustraction, value: t })
            }
            else if (t == '*') {
              tokens.push({ type: constTokens.typeMultiplication, value: t })
            }
            else if (t == '/') {
              tokens.push({ type: constTokens.typeDivision, value: t })
            }
            else if (t == '==') {
              tokens.push({ type: constTokens.typeBooleanEqual, value: t })
            }
            else if (t == '||') {
              tokens.push({ type: constTokens.typeOr, value: t })
            }
            else if (t == '!=') {
              tokens.push({ type: constTokens.typeDifferent, value: t })
            }
            else if (t == '&&') {
              tokens.push({ type: constTokens.typeAnd, value: t })
            }
            else if (t == '=') {
              tokens.push({ type: constTokens.typeEqual, value: t })
            }
            else if (t == 'if') {
              tokens.push({ type: constTokens.typeIf, value: t })
            }
            else if (t == 'else') {
              tokens.push({ type: constTokens.typeElse, value: t })
            }
            else if (t == 'return') {
              tokens.push({ type: constTokens.typeReturn, value: t })
            }
            else if (t == 'true') {
              tokens.push({ type: constTokens.typeBool, value: t })
            }
            else if (t == 'false') {
              tokens.push({ type: constTokens.typeBool, value: t })
            }
            else
              tokens.push({type: constTokens.typeWord, value: t})
        }
      //sinon c'est un nombre
      } else {
        tokens.push({type: constTokens.typeNumber, value: t})
      }
    }
    if (tokens.length < 1) {
        throw constTokens.errorNoTokenFound;
    }
    return tokens
}