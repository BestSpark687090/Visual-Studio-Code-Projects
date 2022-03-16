passwordGenerator()
function passwordGenerator(){
    const passwordRequirements = {
        1: ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'],
        2: ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'],
        3: ['~','!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','|',':',';','<','>','?','.','/',' '],
        4: ['1','2','3','4','5','6','7','8','9','0'],
    }
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("How long do you want the password to be? ",function(answer){
        var length = parseInt(answer);
        if(length = NaN){
            console.log("Please enter a number, not a letter/symbol.");
            rl.close();
        } else{
            var loopTimes = 0
            var checkedNumber = length;
            var passwordInList = [""]
            while(checkedNumber !== 0){
            var number = Math.floor((Math.random() * 4) + 1);
            var random = Math.floor(Math.random() * passwordRequirements)
            var charToPush = [passwordRequirements[random]]
            passwordInList.push.apply(passwordInList,charToPush);
            console.log(passwordInList);
            checkedNumber--
            loopTimes++
            if(loopTimes > length + 1) {
                break;
            } else if (checkedNumber == 0) {
                break;
            }
        }
        console.log("working");
        rl.close();
    }
});
    
}