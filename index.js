const fs = require("fs");
// const scoring= require("./scoring/scoring"); 
const tokenizerParser= require("./tokenizer/tokenizerFunctions"); 

let code = fs.readFileSync("test.js", "utf8");
// let score = scoring.from(code);
let score = tokenizerParser.from(code);
console.log(score);





