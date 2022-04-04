const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("does the pong"),
    async execute(interaction) {
        await interaction.reply("*does the pong*");
    },
}