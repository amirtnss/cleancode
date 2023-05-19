exports.syntaxCodeOk = (ast) => {
  //si la syntaxe ne renvoie pas d'exceptions alors elle est valide et vaut 1
  return 1
}

exports.allVariableAre = (ast) => {
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


  return 1
}

exports.allVariablesAreUsed = (ast) => {

//  test pour savoir si la variable declarer est utiliser une seconde fois
  
  for(i=0; i<ast.length; i++){
    if(ast[i].type == "variableDeclaration"){
      let utiliser = false;
      // console.log(ast[i]);
      // console.log(utiliser);
     for(j=i+2; j<ast.length; j++){
       
      if(ast[j].type=="variableAffectation" && ast[j].variableName==ast[i].variableName /*|| ast[j].type == "word" && ast[j].variableName == ast[i].variableName*/){
        // console.log("var");
        // console.log(ast[j].variableName);
        // console.log(ast[i].variableName);
        utiliser = true;
      }
      if(ast[j].type=="conditionIf" && ast[j].conditionName==ast[i].variableName){
       // console.log("if");
        utiliser=true;
      }
    }
    // console.log(utiliser);
    if(utiliser==false){
      console.log("la variable '" + ast[i].variableName +"' n'est pas utilise ");
      return 0;
    }
   }
  }

  return 1
}


exports.allOpenAndCloseIsOk = (ast) => {

  // test si une accolade est bien fermé
  for(i=0; i < ast.length; i++){
    //console.log(i, ast[i], "1");
    if(ast[i].type=="closeBrace"){ //test si tous les tous les accolade avant sont bon
      let nbOpen=0;
      let nbClose=1;
      for(j=0; j < i; j++){
        //console.log("2");
        if(ast[j].type=="openBrace"){
          nbOpen++;
          console.log("Open");
        }
        if(ast[j].type=="closeBrace"){
          nbClose++;
          console.log("Close");
        }
      }    
      if(nbOpen!= nbClose && nbOpen > nbClose){
        console.log("ya trop de openBrace");
        return 0;
      }
      if(nbOpen!= nbClose && nbOpen < nbClose ){
        console.log("ya trop de closeBrace");
        return 0;
      }
    }
    if(ast[i].type=="openBrace"){ //test si il a le closebrace pour ce openbrace
      let nbOpen=1;
      let nbClose=0;
      for(j=i+1; j < ast.length; j++){
        //console.log("2");
        if(ast[j].type=="openBrace"){
          nbOpen++;
          console.log("Open");
        }
        if(ast[j].type=="closeBrace"){
          nbClose++;
          console.log("Close");
        }
      }    
      if(nbOpen!= nbClose && nbOpen > nbClose){
        console.log("ya trop de openBrace");
        return 0;
      }
      if(nbOpen!= nbClose && nbOpen < nbClose ){
        console.log("ya trop de closeBrace");
        return 0;
      }
    }
    //console.log(i, ast[i], "1");
    if (ast[i].type == "closeSquareBracket") { //test si tous les tous les crochets avant sont bon
      nbOpen = 0;
      nbClose = 1;
      for (j = 0; j < i; j++) {
        //console.log("2");
        if (ast[j].type == "openSquareBracket") {
          nbOpen++;
          console.log("Open");
        }
        if (ast[j].type == "closeSquareBracket") {
          nbClose++;
          console.log("Close");
        }
      }
      if (nbOpen != nbClose && nbOpen > nbClose) {
        console.log("ya trop de openSquareBracket");
        return 0;
      }
      if (nbOpen != nbClose && nbOpen < nbClose) {
        console.log("ya trop de closeSquareBracket");
        return 0;
      }
    }
    if (ast[i].type == "openSquareBracket") { //test si il a le closeSquareBracket pour ce openSquareBracket
      let nbOpen = 1;
      let nbClose = 0;
      for (j = i + 1; j < ast.length; j++) {
        //console.log("2");
        if (ast[j].type == "openSquareBracket") {
          nbOpen++;
          console.log("Open");
        }
        if (ast[j].type == "closeSquareBracket") {
          nbClose++;
          console.log("Close");
        }
      }
      if (nbOpen != nbClose && nbOpen > nbClose) {
        console.log("ya trop de openSquareBracket");
        return 0;
      }
      if (nbOpen != nbClose && nbOpen < nbClose) {
        console.log("ya trop de closeSquareBracket");
        return 0;
      }
    }
    //console.log(i, ast[i], "1");
    if (ast[i].type == "closeParenthese") { //test si tous les tous les parenthese avant sont bon
      nbOpen = 0;
      nbClose = 1;
      for (j = 0; j < i; j++) {
        //console.log("2");
        if (ast[j].type == "openParenthese") {
          nbOpen++;
          console.log("Open");
        }
        if (ast[j].type == "closeParenthese") {
          nbClose++;
          console.log("Close");
        }
      }
      if (nbOpen != nbClose && nbOpen > nbClose) {
        console.log("ya trop de openParenthese");
        return 0;
      }
      if (nbOpen != nbClose && nbOpen < nbClose) {
        console.log("ya trop de closeParenthese");
        return 0;
      }
    }
    if (ast[i].type == "openParenthese") { //test si il a le closeParenthese pour ce openParenthese
      nbOpen = 1;
      nbClose = 0;
      for (j = i + 1; j < ast.length; j++) {
        //console.log("2");
        if (ast[j].type == "openParenthese") {
          nbOpen++;
          console.log("Open");
        }
        if (ast[j].type == "closeParenthese") {
          nbClose++;
          console.log("Close");
        }
      }
      if (nbOpen != nbClose && nbOpen > nbClose) {
        console.log("ya trop de openParenthese");
        return 0;
      }
      if (nbOpen != nbClose && nbOpen < nbClose) {
        console.log("ya trop de closeParenthese");
        return 0;
      }
    }
  }
  return 1
}

exports.linesNumberOk = (ast) => {
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
  return 1
}