const { SlashCommandBuilder, EmbedBuilder, channelLink } = require("discord.js")
const stats = require("../stats.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription("Gets you the stats of yourself or another person")
        .addStringOption(function(option){
            option.setName("person")
                .setDescription(`The person to get the stats of. 
If this is not provided, this will automatically get your stats.`)
                .addChoices(
                    {name: "Landen", value: "Landen"},
                    {name: "Collin", value: "Collin"}
                )
            return option;
        }),
    async execute(interaction){
        const person = interaction.options.getString('person')
        // Get their stats from the JSON file and display them to the user only.
        const type = stats[person].Type
        const hp = stats[person].HP
        const gold = stats[person].Gold
        const mp = stats[person].MP 
        const statsEmbed = new EmbedBuilder()
        .setColor(0xff0000)
        .setTitle(`${person}'s Stats`)
        .addFields(
            {name: "Type/Class", value: type},
            {name: "HP", value: hp},
            {name: "Gold", value: gold},
            {name: "MP", value: mp}
        )
        .setFooter("Made by BestSpark687090")
        await interaction.reply({embeds: [statsEmbed], ephemeral: true})
   }
}