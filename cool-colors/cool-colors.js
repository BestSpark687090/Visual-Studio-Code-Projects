const limit = 400
var nothing = [...[0,4,5,6],...a(11,10),...a(8,22),...[38,39],...a(43,48),...[98,99],...a(limit-108+1,108)]
const colors = ["Bold","Gray","Italic","Reverse","Hidden","Crossed Out","Double Underline",
"Gray Text","Red Text","Green Text","Yellow Text","Blue Text","Purple Text","Lighter Blue Text",
"White Text","Black BG","Red BG","Green BG","Yellow BG","Blue BG","Purple BG","Lighter Blue BG","White BG",
"Better Red Text","Better Green Text","Better Yellow Text","Better Blue Text","Better Purple Text",
"Better Lighter Blue Text","Better White Text","Better Gray BG","Better Red BG","Better Green BG",
"Better Yellow BG","Better Blue BG","Better Purple BG","Better Lighter Blue BG","Better White BG"]
var cI = 0
for(var i = 0; i<limit + 1;i++){
    if(!nothing.includes(i)){
        console.log(`${i}: \x1b[${i}mTesting...\x1b[0m ${colors[cI]} `)
        cI++
    }
}
function a(count,start){
    return Array(count).fill(start).map((n,i)=>n+i)
}
