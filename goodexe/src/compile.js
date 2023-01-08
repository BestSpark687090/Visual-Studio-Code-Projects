const { readFileSync } = require('fs');
const http = require('http')
http.createServer(function(req,res){
    res.write(readFileSync(process.argv[2]));
    res.writeHead(200,{'Content-Type':'application/vnd.microsoft.portable-executable'});
    return res.end();
}).listen(8080)