const readline = require("readline");
const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
});

const fs = require('fs')
var yes = fs.readFile("./Input in Javascript.txt",function(err,data){
    var text = data.toString()
    globalThis.text2 = text
    
});
rl.question("Where do you want to place the input at?\nType it like ./foldername/filename.js: ",function(answer) {
    fs.appendFile(answer,text2,function(){
        //hi
    })
    console.log("Done! You should see it in the file.")
    rl.close();
});


