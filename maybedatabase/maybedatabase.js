const fs = require('fs');
const repl = require('repl');
const server = repl.start('> ');
const data = [];

function writeToDatabase(data) {
    // Check if the data's already there, if so,don't add it.
    if(readFromDatabase().data !== undefined){
        console.log("This data is already in the database!")
        server.displayPrompt()
    }else{
        fs.appendFileSync('database.json', JSON.stringify(data) + '\n');
    }
}
  

function readFromDatabase() {
    const rawData = fs.readFileSync('database.json');
    return JSON.parse(rawData);
}

// Use the data, writeToDatabase and readFromDatabase functions as needed

// Remove the repl related code

server.context.data = data;
server.context.writeToDatabase = writeToDatabase;
server.context.readFromDatabase = readFromDatabase;
