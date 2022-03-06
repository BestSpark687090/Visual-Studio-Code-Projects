socalize()
function socalize(){
    const readline = require("readline");
    const rl = readline.createInterface({
     input: process.stdin,
        output: process.stdout
    });
    rl.question("can you socalize?",function(answer){
        console.log(answer);
        rl.close();
    });
}
