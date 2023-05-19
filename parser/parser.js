const constTokens= require("../tokenizer/constants");
const constParser= require("./constants");
const factory= require("./expressionsFactory");

module.exports=(tokens) =>{
    let AST= [];
    let typeFunction = [];
    let inFunction = false;
    let typeIf = [];
    let inIf = false;
    for(let i= 0; i<tokens.length; i++){
        let expression = null;
        //déclaration de variable
        if(tokens[i].type == constTokens.typeConst|| tokens[i].type == constTokens.typeVar || tokens[i].type == constTokens.typeLet){
            expression= factory.create(constParser.expressionDeclaration, tokens, i);
            i++;
        //utilisation symbole égale
        }else if(tokens[i].type == constTokens.typeEqual){
            expression= factory.create(constParser.expressionAffectation, tokens, i);
            //si affectation nombre
            if(expression.variableValue.type== constTokens.typeNumber){
                i++;
            //si affectation string on reprend l'analyse après la fermeture des guillements.
            }else{
                i= expression.variableValue.end;
            }
        //utilisation de methode
        }
         // décalration d'une fonction
         else if (tokens[i].type == constTokens.typeFonction) {
            expression= factory.create(constParser.functionDeclaration, tokens, i);
            AST.push(expression);
            i = expression.end;
            inFunction = true;
            expression = ""
        }
        else if (tokens[i].type == constTokens.typeComment) {
            expression = factory.create(constParser.expressionComment, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeBlockCommentOpen) {
            expression = factory.create(constParser.expressionBlockComment, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeAddition) {
            expression = factory.create(constParser.expressionAddition, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeMultiplication) {
            expression = factory.create(constParser.expressionMultiplication, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeDivision) {
            expression = factory.create(constParser.expressionDivision, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeSoustraction) {
            expression = factory.create(constParser.expressionSoustraction, tokens, i);
            i = expression.end;
        }
        else if (tokens[i].type == constTokens.typeCloseBrace) {
            if (inIf == true){
                typeIf.push(tokens[i].type)
                inIf = false;
                i++
                if (inFunction == true)
                    typeFunction[typeFunction.length - 1].ifBody = typeIf
                else
                    AST[AST.length - 1].ifBody = typeIf
                typeIf = []
            }
            else if (inFunction == true) {
                typeFunction.push(tokens[i].type)
                inFunction = false;
                i++
                AST[AST.length - 1].functionBody = typeFunction
                typeFunction = []
            }
        }
        else if(i<tokens.length-1 && tokens[i].type == constTokens.typeWord &&  tokens[i+1].type==constTokens.symbolePoint){
            expression = factory.create(constParser.expressionMethodCall, tokens, i);
            i= expression.end;
        }
        if(expression){
                AST.push(expression);
        }
        else{
                AST.push(tokens[i]);
        }
    }
    return AST;
}