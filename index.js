const fs = require("fs");
const tokenizerParser= require("./tokenizer/eval"); 

let code = fs.readFileSync("test.js", "utf8");
let score = tokenizerParser.from(code);
console.log(score);





