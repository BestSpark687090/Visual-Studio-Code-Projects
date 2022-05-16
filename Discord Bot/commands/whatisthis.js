const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("whatisthis")
        .setDescription("Sends a gif which questions the message that is above the gif/the message that you replied to. "),
    async execute(interaction) {
        await interaction.reply(`https://media1.tenor.com/images/4636d2bd988425888aed93951a4b8766/tenor.gif`)
    },
}