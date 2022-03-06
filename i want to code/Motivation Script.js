// Javascript source code
motivationScript()
function motivationScript() {
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question("What do you want to do? ",function(answer) {
	var whatTheyWantToDo = answer;
	rl.question("And why are you not doing it? ",function(answer){
		var whyTheyAreNotDoingIt = answer.replace(/my/g, "your");
		
		setTimeout(() => {console.log("\n \n");},500);
		setTimeout(() => {console.log(`You can do it! You can ${whatTheyWantToDo}!` ); }, 1000);
		setTimeout(() => {console.log(`You should know that you can definitely ${whatTheyWantToDo}!`); }, 3000);
		setTimeout(() => {console.log(`Now even though you're ${whyTheyAreNotDoingIt}, you can still do it!` ); }, 5000);
		setTimeout(() => {console.log(`Now stop being ${whyTheyAreNotDoingIt} and go ${whatTheyWantToDo.toUpperCase()}!!!!\n` ); }, 7000);
		setTimeout(() => {rl.close();},9000);
	});
});
}