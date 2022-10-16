var bFA = 0
const HTML = `There are no valid HTML files in this directory. 
Please try again with a different directory.`
const sCW = `Why are you using Semicolons(;)?`
const nEQ = `There are an uneven amount of quotation marks. 
Please check if you have a unterminated string.`
//End of Global Variables Section
//Beginning of Error Classes Section
class NoHTMLFiles extends Error{
    constructor(message){
        message = this.message
        super(message)
        Error.captureStackTrace(this,this.constructor)
        this.name = this.constructor.name
    }
}
class CompileError extends Error{
    constructor(message){
        super(message)
        message = this.message
        Error.captureStackTrace(this,this.constructor)
        this.name = this.constructor.name
    }
}

//End of Error Classes Section
//Note: This language will be compiled and interpreted at the same time.
import * as http from "node:http"
import * as fs from "node:fs"
var p = process.argv[2]
if(p.includes("host")){
    host()
}else if(p.includes("compile")){
    compile()
}

function host(){
    fs.readdir(process.argv[3]??".",function(err,files){
        for(var file of files){
            if(file.includes(".html")){
                startServer(file)
            }else{
                bFA++
            }
        }
        //Sorry for not indenting this line after the if! If i didn't, the error wouldn't show properly.
        if(bFA == files.length){
throw new NoHTMLFiles(HTML)
        }
    })
}
/**
 * The function that starts the HTTP Server
 * @param {string} fileName 
 */
function startServer(fileName){
    http.createServer(function(req,res){
        fs.readFile(fileName,function(err,data){
            console.log(err??"")
            res.write(data)
            return res.end()
        })
    }).listen(8080,"192.168.2.131")
    console.log(`The server is now being hosted on 192.168.2.131 on port 8080.
Click this to open the server in Edge: http://192.168.2.131:8080`)
    console.log("Ctrl + C to stop the server.")
}
// End of Host Section
//Start of Compile Section
function compile(){
    fs.readFile(process.argv[3],function(err,data){
        console.log(err??"")
        let file = data.toString()
        file = file.replace("print","console.log")

        if(file.match(/.*;\n/g)??true){
            console.log(`Warning: ${sCW}\n`) //Semicolon Warning   
        }
        if(file.match(/"[)]/g) === null){
throw new CompileError(nEQ)
        }
        WriteCompile(file)
    })
}
function WriteCompile(file){
    fs.writeFile('compiled.js',file,function(err){
        console.log(err??"Compiled with no internal errors!")
    })
}