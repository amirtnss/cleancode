exports.astValide = (ast) => {
  return 5
}

exports.variablePresentes = (ast) => {
  let variablesAffectations = []
  let variablesDeclarations = []
  let j=0
  for (i = 0; i < ast.length; i++) {
    if (ast[i].type === 'variableAffectation'){
      variablesAffectations[j] = ast[i].variableName
      j++
    }
      
  }
  j=0
  for (i = 0; i < ast.length; i++) {
    if (ast[i].type === 'variableDeclaration'){
      variablesDeclarations[j] = ast[i].variableName
      j++;
    }
  }

// test si une variable a ete cree avant sa declaration et si la varible declarer a deja ete declarer avant
  for(i=0; i < ast.length; i++){
    //console.log(i, ast[i], "1");
    for (j=0; j < i; j++){
      //console.log(j, ast[j], "2");
      if(ast[j].type=="variableDeclaration" && ast[j].variableName == ast[i].variableName && ast[i].type=="variableDeclaration" ){
        console.log("variable deja declare");
        return 0;
      }
      if(ast[j].type=="variableAffectation" && ast[j].variableName==ast[i].variableName && ast[i].type=="variableDeclaration" ){
        console.log("affectation de variable sans l avoir declarer ");
        return 0;
      }
    }
  }


  for(i=0;i<variablesDeclarations.length;i++) {
    for(j=0;j<variablesAffectations.length;j++) {
      if(variablesAffectations[j]=== variablesDeclarations[i]) 
        variablesAffectations[j] = true
    }
  }

  for(i=0;i<variablesAffectations.length;i++) {
    if(variablesAffectations[i]!=true) 
      return 0;
  }


  return 5
}

exports.variableUtilisees = (ast) => {
  for(i=0; i<ast.length; i++){
    if(ast[i].type == "variableDeclaration"){
      let used = false;
     for(j=i+2; j<ast.length; j++){
       
      if(ast[j].type=="variableAffectation" && ast[j].variableName==ast[i].variableName){
        used = true;
      }
      if(ast[j].type=="conditionIf" && ast[j].conditionName==ast[i].variableName){
       used=true;
      }
    }

    if(used==false){
      console.log("la variable '" + ast[i].variableName +"' n'est pas utilise ");
      return ;
    }
   }
  }

  return 5
}


exports.nbLignes = (ast) => {
  let nbLine = 1
  for (i = 0; i < ast.length; i++) {
    if (ast[i].type == "newLine") {
      nbLine++;
    }
    if (ast[i].type == "conditionIf"){
      for (j = 0; j < ast[i].ifBody.length; j++) {
        if (ast[i].ifBody[j] == "newLine") {
          nbLine++;
        }
      }
    }
    if (ast[i].type == "functionDeclaration") {
      for (j = 0; j < ast[i].functionBody.length; j++) {
        if (ast[i].functionBody[j] == "newLine") {
          nbLine++;
        }
      }
    }
    if (ast[i].type == "blockComment") {
      for (j = 0; j < ast[i].body.length; j++) {
        if (ast[i].body[j] == "newLine") {
          nbLine++;
        }
      }
    }
  }
  if (nbLine > 200){
    return 0;
  }
  return 5
}