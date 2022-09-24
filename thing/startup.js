const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{
    fs.readFile("./font maker.html",function(err,data){
        if(err=null){}else{console.log(err)}
        res.write(data)
        return res.end()
    });
}).listen(8080)