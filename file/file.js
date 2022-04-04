try {
var http = require("http")
var fs = require("fs")
var file = "C:/Users/Ryan Smith/Desktop/Input In Javascript.txt"
var extensionSlice = file.split(".")
var extension = "text/"+extensionSlice[1];
    http.createServer(function (req,res){
        fs.readFile(file,function(err,data){
    res.writeHead(200, {"Content-Type":extension});
    if(err == null){
        console.log("Connected with no errors!")
    } else {
        console.log(err)
    }
    res.write(data);
    return res.end(); 
    });
    }).listen(8080)
    console.log("Press Control+C to stop.")
} catch (error) {
    console.log("It failed. Error code: ${error}")
}
