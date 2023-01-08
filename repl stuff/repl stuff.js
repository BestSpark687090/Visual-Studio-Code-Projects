const repl = require('repl')
const http = require('http')
const fs = require('fs')
const prompt = repl.start({
    prompt: "REPL>",
})
prompt.on("line",function(input){
    let port = Math.floor(Math.random() * 9999) + 1000
    http.createServer(function(req,res){
        res.write(fs.readFileSync("./refresh.html"))
        res.write(`<script>document.write("${input}")</script>`);
        res.writeHead(200,{'Content-Type':'text/html',"X-Testing": "Bruh Moment!"});
        return res.end("hi?");
    }).listen(port)
    console.log(port)
})