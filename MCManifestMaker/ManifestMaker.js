import makeUUID from './uuidGen/uuidGen.js';
import makeUUID2 from './uuidGen/uuidGen2.js';
//import makeUUID from "./uuidGen/uuidGen"
import { createInterface } from "readline";
const rl = createInterface({
	input:process.stdin,
	output:process.stdout,
});
var description = "" 
var manifestName = ""
var uuid2;
var uuid1;
uuid1 = makeUUID()
uuid2 = makeUUID2()
rl.question("Enter Manifest Description: ",function(answer) {description = answer;rest()});
function rest(){
	rl.question("Enter Manifest Name: ",function(answer) {manifestName = answer;rest2()});
	function rest2() {
		if(description != "" && manifestName != ""){
			console.log(`
{
	"format_version": 2,
	"header": {
  		"description": "${description}",
  		"name": "${manifestName}",
		"uuid":"${uuid1}",
  		"version": [1, 0, 0], 
		"min_engine_version": [1, 16, 0]
    },
	"modules": [
		{
			"description": "${description}",
			"type": "resources",
			"uuid":"${uuid2}",
			"version": [1, 0, 0]
		}
	]
}
	`);rl.close();process.exit()
}
}
}