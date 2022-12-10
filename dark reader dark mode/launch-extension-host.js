/*
literally the only reason why this file is here 
is just for you to press f5 to launch the extension host
*/

//or not...
var fs = require("fs")
var hexCode = "#181a1b"
var fgHexCode = "#FFFFFF"
fs.readFile("C:/Users/esmit/OneDrive/Desktop/theme-color.md",function(err,data){
    if(err !== null){
        console.error(err)
    }else{
        var nameList = data.toString().split('\n')
        for(var name of nameList){
            if(name.includes("foreground")){
                fs.appendFile('./fullColors.txt',`"${name}": "${fgHexCode}",\n`,function(err){
                    if(err !== null){
                        console.error(err)
                    }
                })
            }else{
                fs.appendFile("./fullColors.txt",`"${name}": "${hexCode}FF",\n`,function(err){
                    if(err !== null){
                        console.error(err)
                    }
                })
            }
        }
    }
})