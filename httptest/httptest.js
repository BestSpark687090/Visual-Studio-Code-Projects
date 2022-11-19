const http = require('http')
const fs = require('fs')
const crypto = require('crypto')
http.createServer(function(req,res){
    if(req.rawHeaders.includes('image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8')){
        res.writeHead(404,{
            'Content-Type': 'image/x-icon',
            'X-Powered-By': 'Node HTTP'
        })
    }else{
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=utf-8',
            'X-Powered-By': 'Node HTTP'
        })
    }
    var startingHash = hashIt()
    res.write(fs.readFileSync('./yes.html'))
    setInterval(() => {
        startingHash = thing(startingHash,res)
    }, 1000);
    return res.end()// don't return, because we need to refresh when file changes.
}).listen(8000)
function hashIt(){
    var file = fs.readFileSync('./yes.html')
    var hash = crypto.createHash('sha256').update(file).digest('hex')
    return hash
}
/**
 * 
 * @param {string} startingHash 
 * @param {http.ServerResponse<http.IncomingMessage>} res 
 * @returns 
 */
function thing(startingHash,res){
    if(hashIt() != startingHash){
        res.emit("close")
        startingHash = hashIt()
        console.log("Refreshed!")
        res.writeHead(307,{'Location': 'http://localhost:8080'})
        res.write(fs.readFileSync("./yes.html"))
        return startingHash
    }else{
        return startingHash
    }
    
}