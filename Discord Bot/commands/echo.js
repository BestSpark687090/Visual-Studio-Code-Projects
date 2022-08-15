const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
 data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("replies with yo input")
    .addStringOption(option =>
        option.setName("input")
            .setDescription("input to echo")
            .setRequired(true))
            ,async execute(interaction) {
                await interaction.reply(`You said: ${interaction.toString().split(":").slice(1).toString().replace(/,/g,':')}`)
}
}