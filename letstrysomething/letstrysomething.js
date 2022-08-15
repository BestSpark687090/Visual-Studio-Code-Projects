const fs = require('fs')
if(process.argv[0] != "node"){
    //do parts that don't use where you put node 
    fs.open(`${process.argv[1]}`,"",function(err,fd){
        console.log(err,fd)
    })
} else if(process.argv[0] == "node"){
    //do parts that use where you put node 
    fs.open(`${process.argv[2]}`,"",function(err,fd){
        console.log(err,fd)
    })
}