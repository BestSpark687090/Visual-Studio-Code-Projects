function exponentIt(bottomNumber,topNumber){
    try {
      return bottomNumber ^ topNumber
    } catch (error) {
        console.log(error)
    }
}
function askQuestion(question){
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(question,function(answer){
        return answer;
    });
    return answer
}
function splitNoLimit(splitBy,stringToSplit){
    var stringToSplit = stringToSplit.split(splitBy)
    return stringToSplit
}
function splitWithLimit(splitBy,stringToSplit,limit){
    try {
        limit = parseFloat(limit)
    } catch (error) {
        console.log(error)
    }
    stringToSplit.split(splitBy,limit)
}
export {exponentIt, askQuestion, splitNoLimit,splitWithLimit}