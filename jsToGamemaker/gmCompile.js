// process.argv[2] = filename
const { readFileSync } = require('fs')
const filename = process.argv[2]
try{
var file = readFileSync(filename).toString()
file = file.replace(/.* function/g,"#define ")
file = file.replace(/ .* \(/g," ")
file = file.replace(/\) *\{/g,"")
file = file.replace("}","")
}catch(e){
    var file = readFileSync("test.js").toString()
    var thing = file.replace(/.*\(/g,"")
    thing = thing.replace(/\)[ ]*{.*/g,"")
    file = file
            .replace(/.*(function)/g,"#define")
            .replace(/ *\(/g," ")
            .replace(/\) *\{/g,"")
            .replace("}","")
}
console.log(file)
