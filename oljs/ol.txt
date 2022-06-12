// oneLetter js 
const child = require("child_process")
const fs = require('node:fs')
const { buffer } = require('buffer')
var c = `
f C() 
    v c = 1
    i (c == 0){
        c.l('Repeated!')
    }e {
        c.l('C is not 0!')
    }

`

var bC = parseFloat(c.match(/[}|{]/g).length/2) // bracket check
console.log(bC)
if(bC < 1 || bC.length > 1 || bC.toString().includes(".")){
    console.error(TypeError("Uneven amount of brackets!"))
    byeBye()
}
var d1 = c.replace(/i\s/g,'if')
var d2 = d1.replace(/T/g,'true')
var d3 = d2.replace(/v /g,'var ')
var d4 = d3.replace(/}e|} e/g,'}else ') // see [1]
var d5 = d4.replace(/f /g,'function ')
var d6 = d5.replace(/[.]s/g,'.toString()')
var d7 = d6.replace(/c.l/g,'console.log') // see [2]
c = d7
console.log(`Your code is: ${d7}`)
fs.opendir('writehere', (err) => {
    if (err) throw err;
});
fs.writeFile('writehere/compiledOl.js', c , 'utf8', (err) => {
  if (err) throw err;
});
child.exec("node './writehere/compiledOl.js'")
byeBye()
function byeBye(){
    process.exit()
}

/*
 [1] d4 uses the | symbol for alternatives, so it doesn't care if you use }e or } e
 aka }else or } else, it compiles to }else
 [2] yes, i know this isn't one letter but since it uses 2 things, it's c.l.
*/
