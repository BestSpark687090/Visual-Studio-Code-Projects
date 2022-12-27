const { exec } = require("child_process")
if(/\.[^.]+/g.test(process.argv[2])){
    console.error("\x1b[91mYou must be running this from a folder for this to work!\x1b[0m")
    process.exit()
}
let run = ""
exec("dir",function(error,stdout,stderr){
    if(stderr||error){
        console.log(error)
        console.log(stderr)
    }
    console.log(stdout)
})
let filename;
// we make dist and src, 2, make package.json, 1 using npm init -y.
for(let i=0;i<3;i++){
    switch(i){
        case 0:
            run = "md dist"
            break;
        case 1:
            run = "md src"
            break;
        case 2:
            run = "npm init -y"
            break;
    }
    exec(run,function(error,stdout,stderr){
        if(stderr||error){
            console.log(error)
            console.log(stderr)
        }
        console.log(stdout)
        if(stdout.includes("Wrote to")){
            filename = stdout.split("\n")[0].replace("Wrote to ","").replace('n:',"n")
            useFile(filename)
        }
    })
}
function useFile(filename){
    const fs = require('fs')
    const file = require(filename)
    file["pkg"] = {
        "scripts": "src/**/*.js",
        "assets": "views/**/*",
        "targets": [ "node14-win" ],
        "outputPath": "dist"
    }
    file["bin"] = "src/compile.js"
    fs.writeFile(filename,JSON.stringify(file,null,4),function(err){
        if (err) throw err
    })
}
