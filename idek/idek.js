const readline = require("readline")
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
	setTimeout(() => rl.question("question here",function(answer){
	 setTimeout(() => console.log(answer),3000)
	 rl.close();
}),1000);
