const tokenizer = require("./tokenizer");
const parser = require("../parser/parser");
const scorer= require("../scoring/scorer");

exports.from = (code) => {
    console.log("--------", "Tokens", "--------");
    let tokens = tokenizer(code);
    console.log(tokens);
    try {
        console.log("--------", "AST", "--------");
        let ast = parser(tokens);
        console.log(ast);
        console.log("--------", "Result", "--------");
        let result = {
            astValide:scorer.astValide(ast),
            variablePresentes:scorer.variablePresentes(ast),
            variableUtilisees:scorer.variableUtilisees(ast),
            nbLignes:scorer.nbLignes(ast) 
        };
        return {
            score: result.astValide+
            result.variablePresentes+
            result.variableUtilisees+
            result.nbLignes,
            details: result
        }
    } catch (e) {
        throw e;
    }

}