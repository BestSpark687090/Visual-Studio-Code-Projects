const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("gives your info"),
    async execute(interaction) {
        await interaction.reply(`Your Tag: ${interaction.user.tag} \nYour Discord ID: ${interaction.user.id}`);
    },
}