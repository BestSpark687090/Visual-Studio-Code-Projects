const readline = require("readline")
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
	rl.question("question here",function(answer) {
	console.log(answer);
	rl.close();
});
