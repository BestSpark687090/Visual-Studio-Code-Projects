//Beginning of Global Variables Section
var bFA = 0
//End of Global Variables Section
//Beginning of Error Messages Section
const HTML = `There are no valid HTML files in this directory. 
Please try again with a different directory.`
const sCE = `Invalid function call: ;`
const nEQ = `There are an uneven amount of quotation marks. 
Please check if you have a unterminated string.`
const fII = `Index variable of for loop must be i`
const sAZ = `Index must start at 0` 
//End of Error Messages Section
//Beginning of Error Classes Section
class NoHTMLFiles extends Error{
    constructor(message){
        super(message)
        message = this.message
        Error.captureStackTrace(this,this.constructor)
        this.name = this.constructor.name
    }
}
class CompileError extends Error{
    constructor(message){
        super(`Compile error in file ${process.argv[3]}: \x1b[38;5;196m${message}\x1b[0m`)
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
try{
    if(p.includes("host")){
        host()
    }else if(p.includes("compile")){
        compile()
    }else if(p.includes("interpret")){
        interpret()
    }
}catch(e){
    throw new Error("Please type host, compile or interpret after the name of the file.")
}

function host(){
    fs.readdir(process.argv[3]??".",function(err,files){
        for(var file of files){
            if(file.includes(".html")){
                startServer(file.replace("c:","C:"))
            }else{
                bFA++
            }
        }
        //Sorry for not indenting this line after the if! If i didn't, the error wouldn't show properly.
        if(bFA == files.length){
throw new NoHTMLFiles(`\x1b[38;35;196m${HTML}\x1b[0m`)
        }
        return files
    })
}
/**
 * The function that starts the HTTP Server
 * @param {string} fileName 
 */
function startServer(fileName){
    var server = http.createServer(function(req,res){
        fs.readFile(process.argv[3]+"\\"+fileName,function(err,data){
            if (err) throw err;
            res.write(data)
            return res.end()
        })
    })
    try{
        server.listen(8080,"192.168.2.153")
    }catch(e){
        throw new NoHTMLFiles("Port 8080 is already being used. Please close any servers you have on port 8080.")
    }
    console.log(`The server is now being hosted on localhost on port 8080.
Click this to open the server in your default browser: http://localhost:8080`)
    console.log("\x1b[92mTip:\x1b[0m Use \x1b[21mCtrl + C\x1b[0m to stop the server.")
}
// End of Host Section
//Start of Compile Section
/*
Quick note: I kinda want the compiled to be kinda like asm, so like console.log would be
call(print,"message")
i think that would be cool
and for example, the for could be:
call(for,[starting index],[ending index])
and for the uncompiled it could be like
for(i=0,i=100){
    //do something
}
*/
function compile(){
    fs.readFile(process.argv[3],function(err,data){
        if (err) throw err;
        let file = data.toString()
            .replaceAll("print(","call(print,")
            .replaceAll("for(var i=","call(for,")
            .replaceAll(/,i([><=]*)/g,",")
            .replaceAll("++","")
        if(file.match(/;$\n/g)??false){
throw new CompileError(sCE)
        }
        if(file.match(/"[)]/g) === null){
throw new CompileError(nEQ)
        }
        if(file.match(/for[(][a-hj-z]=[0-9]*,/g)??false){
throw new CompileError(fII)
        }
        if(file.match(/for[(],[1-9]*,/g)??false){
throw new CompileError(sAZ)
        }
        WriteCompile(file)
    })
}
function WriteCompile(file){
    fs.writeFile('compiled.cbjs',file,function(err){
        console.log(err??"Compiled with no internal errors!")
    })
}
//End of Compile Section
//Start of Interpret Section
function interpret(){
    fs.readFile('compiled.cbjs',function(err,data){
        if(err) throw err;
        var file = data.toString()
            .replaceAll("call(print,","console.log(")
            .replaceAll("call(for,","for(var i=")
            .replaceAll(",)",",i++)")
            





            .replaceAll(",",";")
            .replaceAll("=0;","=0;i<=")
        if(eval(file)){
            console.log(eval(file))
        }
    })
}
