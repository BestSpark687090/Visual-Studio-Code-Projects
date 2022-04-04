module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.commandName} triggered an interaction`);
    }
}