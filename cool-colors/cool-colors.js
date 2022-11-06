const limit = 300
var nothing = [...[0,4,5,6],...a(11,10),...a(7,22),...[38,39],...a(43,48),...[98,99],...a(193,108)]
for(var i = 0; i<limit + 1;i++){
    if(!nothing.includes(i)){
        console.log(`${i}: \x15b[${i}mTesting...\x1b[0m`)
    }
}
function a(count,start){
    return Array(count).fill(start).map((n,i)=>n+i)
}