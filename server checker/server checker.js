const http = require("http")
for(var index = 1000;index < 9999;index++){
    try{
    http.get(`http://127.0.0.1:${index.toString(10).padEnd(4,"0")}`,function(res){
        const contentType = res.headers['content-type'];
        console.log(contentType)
    })
    }catch(e){
        index++
    }
} 
