const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("shutdown")
        .setDescription("why would you do this"),
    async execute(interaction) {
        await interaction.reply("<@607629679788032011> I AM DEAD!");
	await process.exit();
    },
}