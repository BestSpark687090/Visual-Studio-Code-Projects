// Javascript source code

gettingInput()
function gettingInput() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("First number to operate with? ", function (answer) {
        var leftNumber = Number(answer);
        rl.question("Second number to operate with? ", function (answer) {
            var rightNumber = Number(answer);
            rl.question("What operator? 1:+ 2:- 3:* 4:/ 5:% : ", function (answer) {
                var ansOp = answer;
                if (answer > 5) {
                    console.log("Please enter a number between 1 and 4.");
                    rl.close();
                } else {
                    if (ansOp == 1) {
                        var operator = "+";
                        let sum = leftNumber + rightNumber;
                        console.log("Your answer is: " + sum);
                        rl.close();
                    } else {
                        if (ansOp == 2) {
                            var operator = "-";
                            let sum = leftNumber - rightNumber;
                            console.log("Your answer is: " + sum);
                            rl.close();
                        } else {
                            if (ansOp == 3) {
                                var operator = "*";
                                let sum = leftNumber * rightNumber;
                                console.log("Your answer is: " + sum);
                                rl.close();
                            } else {
                                if (ansOp == 4) {
                                    var operator = "/";
                                    let sum = leftNumber / rightNumber;
                                    console.log("Your answer is: " + sum);
                                    rl.close();
                                } else {
                                    if (ansOp == 5) {
                                        var operator = "%";
                                        let sum = leftNumber % rightNumber;
                                        console.log("Your answer is:" + sum);
                                        rl.close();
                                    } else {
                                        if (ansOp == "NaN") {
                                            console.log("Please enter a number between 1 and 4.");
                                            rl.close();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

        });
    });
}