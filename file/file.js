try {
var http = require("http")
var fs = require("fs")
var file = "E:/RobloxStudioBeta.txt" // original: C:/Users/Ryan Smith/Desktop/Input In Javascript.txt
var extensionSlice = file.split(".")
var extension = "text/txt"; // original: "text/"+extensionSlice[1];
    http.createServer(function (req,res){
        fs.readFile(file,function(err,data){	
	var stringData = data.toString()
	var dataList = stringData.split("<html>")  
	console.log(dataList[1])      //original: delete these 3 including this 1 and 2 above
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
