import * as fs from "node:fs"
fs.readdir(".",function(err,files){
    for(var value of files){
     if(value.includes("html")){
     console.log(value)
     }
    }
})