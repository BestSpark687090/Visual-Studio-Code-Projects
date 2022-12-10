const http = require('http')
const fs = require('fs')
const out = fs.createWriteStream('info.json')
const writeToFileC = new console.Console(out)
http.createServer(function(req,res){
    res.write(req.toString());
    // fs.appendFile("info.json",req.headers.toString(),function(err){
    //     if(err) throw err;
    // })

    res.writeHead(200,{'Content-Type':'text/txt'});
    writeToFileC.log(req)
    return res.end();
}).listen(8080)
// function writeToFile(text){
//     fs.appendFile("info.json",text.toString(),function(err){
//         if(err) throw err;
//     })
// }