passwordGenerator()
function passwordGenerator(){
    const passwordRequirements = {
        lowerString: "qwertyuiopasdfghjklzxcvbnm",
        upperString: "QWERTYUIOPASDFGHJKLZXCVBNM",
        symbolString: "!@$%&_?",
        numberString: "1234567890",
    }
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("How long do you want the password to be? ",function(answer){
        var length = parseInt(answer);
        if(length == NaN){
            console.log("Please enter a number, not a letter/symbol.");
            rl.close();
        } else{
            var loopTimes = 0
            var checkedNumber = length;
            var passString = "";
            while(loopTimes < length){
            var stringSelector = Math.floor(Math.random() * 4) + 1;
            console.log(`${loopTimes} ${checkedNumber} ${stringSelector}`)
            var letterSelected = Math.floor(Math.random() * 25); //These are decremented by one because things like arrays start at 0.
            var symbolSelected = Math.floor(Math.random() * 29);
            var numberSelected = Math.floor(Math.random() * 9)
            if(stringSelector == 1 ){
                var lowerChar = passwordRequirements.lowerString.slice(letterSelected,letterSelected + 1)
                passString += lowerChar; //This compounds the strings.
                console.log(passString);
            } else if (stringSelector == 2){
                var upperChar = passwordRequirements.upperString.slice(letterSelected,letterSelected + 1);
                passString += upperChar;
                console.log(passString)
            } else if(stringSelector == 3){
                var symbolChar = passwordRequirements.symbolString.slice(symbolSelected,symbolSelected + 1);
                passString += symbolChar;
                console.log(passString);
            } else if(stringSelector == 4){
                var numberChar = passwordRequirements.numberString.slice(numberSelected,numberSelected + 1);
                passString += numberChar;
                console.log(passString)
            }
            checkedNumber--
            loopTimes++
            if(loopTimes > length + 1) {
                rl.close();
            } else if (checkedNumber == 0) {
                rl.close();
            }
        }
        console.log("working");
        rl.close();
    }
});
    
}