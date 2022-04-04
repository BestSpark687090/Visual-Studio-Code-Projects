const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("distraction")
        .setDescription("Distracts you... or not.")
        .addBooleanOption(option => option.setName('input')
            .setDescription('The input to echo back')
        .setRequired(true))
    ,async execute(interaction) {
        if(interaction.toString().split(":")[1] == "true"){
     await interaction.reply({content:`https://tenor.com/view/distraction-dance-henry-stickmin-fleeing-the-complex-gif-18229769`,ephemeral:true})
    } else {
        await interaction.reply({content: `You don't get distracted.${interaction} `,ephemeral: true})
    }
}
}