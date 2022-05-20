const readline = require('readline')
const fs = require('fs');
const { exec } = require('child_process');
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout,
});

	if(process.argv[2] !== null){
		exec(`node "commands/${process.argv[2]}"`, (err,stdout,stderr)=>{
			if(err){
				console.log(err)
			} else{
				console.log(`${stdout}`)
			}
		})
		rl.close()
	} else 
	rl.question(`Please choose a command. \n${commands.toString().replace(",","\n")}\n`,function(answer) {
    exec(`node "commands/${answer}"`, (err,stdout,stderr)=>{
		if(err){
			console.log(err)
		} else{
			console.log(`${stdout}`)
		}
	})
    console.log(commands)
	rl.close();
	// This is to close the reading.
});
