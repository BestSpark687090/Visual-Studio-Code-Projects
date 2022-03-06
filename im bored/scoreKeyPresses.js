// JavaScript source code
readingPresses()
function readingPresses() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Type here: ", function (answer) {
        var answerToScore = answer;
        console.log("Scoring your line of text...");
        var Score = Score + answerToScore.length;
        console.log("Your score is: " + Score);
        rl.close();
    });
}
