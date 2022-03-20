const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("distraction")
        .setDescription("Distracts you... or not.")
        .addStringOption(option => option.setName('input')
            .setDescription('The input to echo back')
        .setRequired(true))
    ,async execute(interaction) {
     await interaction.reply(`Server Name: ${interaction.guild.name} \nTotal Members: ${interaction.guild.memberCount}`)
    }
}