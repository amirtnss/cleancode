# Checkcode

## Node js code checker 
Checkcode is a simple tool to check that code follows our 5 VIR (Very Important Rules), the 
best code practices which every js developper have to respect to write a clean and visible code.

If your code works and it's compiled it doesn't mean that he respects the write code convections. This is the reason why we created a score system checkcode to help you to verify if your code is ready to used and publish on the net.

### Installation
1) Install node js and npm compatible with your operating system from source https://nodejsorg/
2) Download the project from git https://gitea.alessandroserver.com/DLP/checkcode
3) Copy your code in the file `test.js` and run the application from command line `node index.js`

### How does it work
Checkcode show you 3 different blocks :
  1) Tokenizer
    
    ------Tokens -------
    [
    { type: 'variable' },
    { type: 'word', value: 'a' },
    { type: 'equal' },
    { type: 'aposthrophe' },
    { type: 'number', value: '10' },
    { type: 'aposthrophe' },
    { type: 'newLine' },
    { type: 'word', value: '' }

  which represents the syntax code 

  2) AST

    -------- AST --------
    [
      { type: 'variableDeclaration', variableName: 'a' },
      {
        type: 'variableAffectation',
        variableName: 'a',
        variableValue: { type: 'string', value: '10', start: 3, end: 5 }
      },
      { type: 'newLine' },
      { type: 'word', value: '' }
    ]
    
  Which is the syntax tree, with differents code grammar rules we are implemented.

  3) Results
    
    -------- Result --------
    { type: 'variableDeclaration', variableName: 'a' }
    {
      score: 2,
      details: { 
          syntaxCodeOk: 1, 
          allVariableAre: 1, 
          allVariablesAreUsed: 1
        }
    }

  Which is the results of your code with a score system # cleancode
