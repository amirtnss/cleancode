const constTokens= require("../tokenizer/constants");
const constParser= require("./constants");
const helper= require("./helper");
const parser= require("../parser/parser");
const tokenizer= require("../tokenizer/tokenizer");

exports.create= (type, tokens, start)=>{
    switch(type){
        case constParser.expressionMethodCall:
            return objectMethodCall(tokens, start);
        case constParser.expressionDeclaration:
                return variableDeclaration(tokens, start);
        case constParser.functionDeclaration:
                return functionDeclaration(tokens, start);
        case constParser.expressionAffectation:
            return variableAffectation(tokens, start);
        case constParser.expressionComment:
            return comment(tokens, start);
        case constParser.expressionBlockComment:
            return blockComment(tokens, start);
        case constParser.expressionAddition:
            return addition(tokens, start);
        case constParser.expressionMultiplication:
            return multiplication(tokens, start);
        case constParser.expressionDivision:
            return division(tokens, start);
        case constParser.expressionSoustraction:
            return soustraction(tokens, start);
    }
}

function objectMethodCall(tokens, start){
    let objectName = tokens[start].value;
    if(tokens[start+2].type != constTokens.typeWord) throw constParser.errorMissingWord;
    let methodName = tokens[start+2].value;
    let arguments = helper.searchArgs(tokens, start+3);
    return {type: constParser.expressionMethodCall, objectName: objectName, methodName:methodName, arguments: arguments.args, end: arguments.end};
}

function variableDeclaration(tokens, start){
    if(tokens[start+1].type != constTokens.typeWord) throw constParser.errorMissingWord;
    let variableName= tokens[start+1].value;
    return {type: constParser.expressionDeclaration, variableName: variableName};
}
function functionDeclaration(tokens, start){
    if(tokens[start+1].type != constTokens.typeWord) throw constParser.errorMissingWord;
    let functionName= tokens[start+1].value;
    let functionParam = [];
    let end = start;
    for (let i = start + 3; i < tokens.length; i++) {
        if (tokens[i].type == constTokens.typeCloseParenthese) {
            end = i + 1
            break;
        }
        if (tokens[i].type == constTokens.typeWord) {
            functionParam.push(tokens[i].value);
        }
    }
    return { type: constParser.functionDeclaration, functionName: functionName, functionParam: functionParam, functionBody: [], end: end};
}

function variableAffectation(tokens, start){
    if(tokens[start-1].type != constTokens.typeWord) throw constParser.errorMissingWord;
    let variableName= tokens[start-1].value;
    let variableValue= null;
    if (tokens[start + 1].type == constTokens.typeWord) {
        variableValue = tokens[start + 1];
    }
    if(tokens[start+1].type==constTokens.typeNumber){
        variableValue= tokens[start+1];
    }
    else if(tokens[start+1].type==constTokens.symboleQuotationMark){
        variableValue= helper.searchString(tokens, start+1);
    }
    else if(tokens[start+1].type==constTokens.symboleQuote){
        variableValue= helper.searchString(tokens, start+1);
    }
    return {type: constParser.expressionAffectation, variableName: variableName, variableValue: variableValue};
}

function comment(tokens, start) {
    let body = "";
    let end = start
    for (let i = start + 1; i < tokens.length; i++) {
        if (tokens[i].type == constTokens.typeNewLine) {
            end = i
            break;
        }
        if (tokens[i].value) {
            body = body + " " + tokens[i].value;
        }
        else {
            body = body + " " + tokens[i].type;
        }
    }
    return { type: constParser.expressionComment, body: body, end: end };
}

function blockComment(tokens, start) {
    let body = [];
    for (let i = start + 1; i < tokens.length; i++) {
        if (tokens[i].type == constTokens.typeBlockCommentClose) {
            end = i
            break;
        }
        if (tokens[i].value) {
            body.push(tokens[i].value);
        }
        else {
            body.push(tokens[i].type);
        }
    }
    return { type: constParser.expressionBlockComment, body: body, end: end };
}

function addition(tokens, start) {
    let mememberLeft = "";
    let mememberRight = "";
    let end = start + 1
    if (tokens[start - 1].type == constTokens.typeCloseParenthese){
        end = start + 1
        let startExpression = start - 1
        for (let i = start - 1; i >= 0; i--){
            if (tokens[i].type == constTokens.typeOpenParenthese){
                startExpression = i + 1
                break;
            }
        }
        console.log(startExpression)
        for (let j = startExpression; j < start -1; j++) {
            if (tokens[j].value)
                mememberLeft = mememberLeft + tokens[j].value + " "
            else
                mememberLeft = mememberLeft + tokens[j].type + " "
        }
    }
    else
        mememberLeft = tokens[start - 1].value
    if (tokens[start + 1].type == constTokens.typeOpenParenthese){
        for(let k = start + 2; k < tokens.length; k++){
            if (tokens[k].type == constTokens.typeCloseParenthese){
                end = k
                break
            }
            else {
                if (tokens[k].value)
                    mememberRight = mememberRight + tokens[k].value + " "
                else
                    mememberRight = mememberRight + tokens[k].type + " "
            }
        }
    }
    else
        mememberRight = tokens[start + 1].value
    return { type: constParser.expressionAddition, mememberLeft: mememberLeft, mememberRight: mememberRight, end: end };
}

function multiplication(tokens, start) {
    let mememberLeft = "";
    let mememberRight = "";
    let end = start + 1
    if (tokens[start - 1].type == constTokens.typeCloseParenthese) {
        end = start + 1
        let startExpression = start - 1
        for (let i = start - 1; i >= 0; i--) {
            if (tokens[i].type == constTokens.typeOpenParenthese) {
                startExpression = i + 1
                break;
            }
        }
        console.log(startExpression)
        for (let j = startExpression; j < start - 1; j++) {
            if (tokens[j].value)
                mememberLeft = mememberLeft + tokens[j].value + " "
            else
                mememberLeft = mememberLeft + tokens[j].type + " "
        }
    }
    else
        mememberLeft = tokens[start - 1].value
    if (tokens[start + 1].type == constTokens.typeOpenParenthese) {
        for (let k = start + 2; k < tokens.length; k++) {
            if (tokens[k].type == constTokens.typeCloseParenthese) {
                end = k
                break
            }
            else {
                if (tokens[k].value)
                    mememberRight = mememberRight + tokens[k].value + " "
                else
                    mememberRight = mememberRight + tokens[k].type + " "
            }
        }
    }
    else
        mememberRight = tokens[start + 1].value
    return { type: constParser.expressionMultiplication, mememberLeft: mememberLeft, mememberRight: mememberRight, end: end };
}

function division(tokens, start) {
    let mememberLeft = "";
    let mememberRight = "";
    let end = start + 1
    if (tokens[start - 1].type == constTokens.typeCloseParenthese) {
        end = start + 1
        let startExpression = start - 1
        for (let i = start - 1; i >= 0; i--) {
            if (tokens[i].type == constTokens.typeOpenParenthese) {
                startExpression = i + 1
                break;
            }
        }
        console.log(startExpression)
        for (let j = startExpression; j < start - 1; j++) {
            if (tokens[j].value)
                mememberLeft = mememberLeft + tokens[j].value + " "
            else
                mememberLeft = mememberLeft + tokens[j].type + " "
        }
    }
    else
        mememberLeft = tokens[start - 1].value
    if (tokens[start + 1].type == constTokens.typeOpenParenthese) {
        for (let k = start + 2; k < tokens.length; k++) {
            if (tokens[k].type == constTokens.typeCloseParenthese) {
                end = k
                break
            }
            else {
                if (tokens[k].value)
                    mememberRight = mememberRight + tokens[k].value + " "
                else
                    mememberRight = mememberRight + tokens[k].type + " "
            }
        }
    }
    else
        mememberRight = tokens[start + 1].value
    return { type: constParser.expressionDivision, mememberLeft: mememberLeft, mememberRight: mememberRight, end: end };
}

function soustraction(tokens, start) {
    let mememberLeft = "";
    let mememberRight = "";
    let end = start + 1
    if (tokens[start - 1].type == constTokens.typeCloseParenthese) {
        end = start + 1
        let startExpression = start - 1
        for (let i = start - 1; i >= 0; i--) {
            if (tokens[i].type == constTokens.typeOpenParenthese) {
                startExpression = i + 1
                break;
            }
        }
        console.log(startExpression)
        for (let j = startExpression; j < start - 1; j++) {
            if (tokens[j].value)
                mememberLeft = mememberLeft + tokens[j].value + " "
            else
                mememberLeft = mememberLeft + tokens[j].type + " "
        }
    }
    else
        mememberLeft = tokens[start - 1].value
    if (tokens[start + 1].type == constTokens.typeOpenParenthese) {
        for (let k = start + 2; k < tokens.length; k++) {
            if (tokens[k].type == constTokens.typeCloseParenthese) {
                end = k
                break
            }
            else {
                if (tokens[k].value)
                    mememberRight = mememberRight + tokens[k].value + " "
                else
                    mememberRight = mememberRight + tokens[k].type + " "
            }
        }
    }
    else
        mememberRight = tokens[start + 1].value
    return { type: constParser.expressionSoustraction, mememberLeft: mememberLeft, mememberRight: mememberRight, end: end };
}