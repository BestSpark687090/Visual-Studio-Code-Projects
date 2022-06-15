const readline = require("readline");
const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
})
var lengthForXAndO = [2,19,33,53,70,84,104,121,135]
var currentTurn = "X"
var TTTBoard = `
   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   
`
console.log("ticcy taccy toey")
console.log(TTTBoard)
selection()
function selection() {
   rl.question("select a spot (1-9)",function(answer) {
      if(parseInt(answer) == NaN){
         console.log("Try again.")
         selection()
      } else{
         var chosen = TTTBoard.split("   ",parseInt(answer)).reverse()
         console.log(chosen)
         console.log(TTTBoard.search(chosen.length))

      }
      rl.close();
      // This is to close the reading.
   });
}