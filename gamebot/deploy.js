const { REST, Routes } = require('discord.js')
const dotenv = require("dotenv")
dotenv.config()
const command = require('./commands/stats')
const commands = []
commands.push(command.data.toJSON())
const rest = new REST({version: '10'}).setToken(process.env.token);
(async function(){
    try{
        await rest.put(
            Routes.applicationCommands(process.env.clientId),
            {body: commands}
        )
    }catch(e){
        console.error(e)
    }
})();