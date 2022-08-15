function stuff(){
    if(process.argv[0].includes("node")){
        var temp = process.argv[2]
        var tempa = temp.split("(")
        var tempc = tempa.join('("')
        var tempb = tempc.split(")")
        var tempd = tempb.join('")')
        eval(tempd)
    }
    if(!process.argv[0].includes("node")) {
        var Temp = process.argv[1]
        var Tempa = Temp.split("(")
        var Tempc = Tempa.join('("')
        var Tempb = Tempc.split(")")
        var Tempd = Tempb.join('")')
        eval(Tempd)
    }
}
// manual section V
if(process.argv[0].includes("node")){
    if(process.argv[2] == "manual"){
        manual()
    } else {
        stuff()
    }
} 
if(!process.argv[0].includes("node")) {
    if(process.argv[1] == "manual"){
        manual()
    } else {
        stuff()
    }
}
function manual(){

}