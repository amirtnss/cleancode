const tokenizer = require("../tokenizer/tokenizer");
const parser = require("../parser/parser");
const helper= require("../scoring/helper");

exports.from = (code) => {
    console.log("--------", "Tokens", "--------");
    let tokens = tokenizer(code);
    console.log(tokens);

    try {
        console.log("--------", "AST", "--------");
        let ast = parser(tokens);
        console.log(ast);
        // console.log("hereee",helper.allDeclaredIsUsed(ast));
        console.log("--------", "Result", "--------");
        let result = {
            syntaxCodeOk:helper.syntaxCodeOk(ast),
            allVariableAre:helper.allVariableAre(ast),
            allVariablesAreUsed:helper.allVariablesAreUsed(ast),
            allOpenAndCloseIsOk:helper.allOpenAndCloseIsOk(ast) ,
            linesNumberOk:helper.linesNumberOk(ast) 
        };
        return {
            score: result.syntaxCodeOk+
            result.allVariableAre+
            result.allVariablesAreUsed+
            result.allOpenAndCloseIsOk+
            result.linesNumberOk,
            details: result
        }
    } catch (e) {
        throw e;
    }

}