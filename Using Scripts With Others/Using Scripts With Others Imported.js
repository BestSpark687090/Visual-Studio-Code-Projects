import pkg from './Using Scripts With Others Exported.mjs';
const {exponentIt, askQuestion, splitNoLimit,splitWithLimit} = pkg;
console.log(exponentIt(1,2))
console.log(askQuestion("Hello?"))
console.log(splitNoLimit(" ","E A Sports. It's In The Game."))
console.log(splitWithLimit(" "," a a a a a a a a a a a",5))
