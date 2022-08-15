const fs = require("node:fs")
const {SlashCommandBuilder} = require("@discordjs/builders");
const {REST} = require('@discordjs/rest');
const {Routes} = require("discord-api-types/v9");
const {token, guildId} = require("./config.json");
const commands = [

]
    .map(command => command.toJSON());
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
//const guildId = "954886875762532392";
const clientId = "772488918628958259"
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON());
}  
const rest = new REST({version: "9"}).setToken(token);
(async() => {
try {
    console.log("Refreshing Started...")
    await rest.put(
        Routes.applicationCommands(clientId),
        { body: commands },
    );
    console.log('Complete! Run the bot to make it work! (node "Discord Bot.js" or node .) ')
    } catch (error) {
    console.error(error)
    }
})();

