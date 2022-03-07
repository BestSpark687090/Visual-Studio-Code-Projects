const readline = require("readline")
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
	rl.question("question here",function(answer) {
	 setTimeout(() => console.log(answer),1000)
	 rl.close();
});
