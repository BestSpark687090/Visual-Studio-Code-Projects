const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("gives you help")
    ,async execute(interaction) {
        const helpEmbed = new MessageEmbed()
            .setColor("ff0000")
            .setTitle("Help Embed")
            .setURL("https://discord.js.org/")
            .setAuthor({ name: "BestSpark687090"})
            .setDescription("Help Embed")
            .addFields(
                {name: "Commands", value:"That Are Avaliable:"},
                {name: "\u200B", value:"\u200B"},
                {name: "Echo Command", value: "Repeats what you said back to you."},
                {name: "Ping Command", value: "Does The Pong"},
                {name: "Server Command", value: "Gets Server Info."},
                {name: "User Command", value: "Gets User Info About You."},
                {name: "Distraction Command", value: "Distracts You... or not."},
            )
            .addField("Thanks to Discord.js", "for making this so I can make a Discord Bot in JavaScript!")
            .setTimestamp()
            .setFooter({ text:"Made By BestSpark687090"});
            await interaction.reply({embeds: [helpEmbed] });

    }
}