const fs = require("node:fs");
const { Client, Intents, Interaction, Collection, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const eventFiles =fs.readdirSync("./events").filter(file => file.endsWith(".js"));
let channel;
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command);
}
(async () => {
 channel = client.channels.cache.get("954886876211343360");
 await channel.send("Online!")
})()
client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        await interaction.reply({ content: `error occured. Code: ${error}`,ephemeral: true})
    }
});
client.login(token)