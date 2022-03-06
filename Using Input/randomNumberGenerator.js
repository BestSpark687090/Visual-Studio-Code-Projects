// JavaScript source code
var num2 = ""
var num1 = ""
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What will be the minimum number for the random number?", function (answer) {
    var num1 = answer;
});
rl.question("What will be the maximum number for the random number?", function (answer) {
    var num2 = answer;
    rl.close();
});
console.log("Your number is: " + Math.floor(Math.random() * num2 + 1) + num1);