// JavaScript source code
catProgram();
function catProgram() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Type something: ", function (answer) {
        let Answer = answer;
        let lowerReplace = Answer.replace(/b/g, "e");
        let upperReplace = lowerReplace.replace(/B/g, "E");
        let fullReplaced = upperReplace
        console.log("You typed: " + fullReplaced);
        rl.close();
        catProgram();
    });
}