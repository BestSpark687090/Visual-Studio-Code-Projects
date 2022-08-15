const { SlashCommandBuilder } = require("@discordjs/builders");
var date = new Date()
module.exports = {
    data: new SlashCommandBuilder()
        .setName("time")
        .setDescription("Does Cool time stuff."),
    async execute(interaction) {
        await interaction.reply(`Current time:${date.toISOString().split("T")[1].replace("Z","")}\nCurrent Date:${date.toISOString().split("T")[0]}\nCurrent Unix Timestamp (Unix Milliseconds): ${Date.now()}\nCurrent Unix Timestamp (Unix Seconds): ${Math.floor(Date.now()/1000)}\nCool thing: <t:${Math.floor(Date.now() / 1000)}:R>\nCool thing 2: <t:${Math.floor(Date.now()/1000)}>\nHover over/tap on the cool things to see some cool stuff! `);
    },
}