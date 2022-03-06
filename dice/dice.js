var numberRolled = Number(Math.floor(Math.random() * 6) + 1);
diceRoll(numberRolled)
function diceRoll(input){
    console.log(`You rolled a ${input}!`);
}