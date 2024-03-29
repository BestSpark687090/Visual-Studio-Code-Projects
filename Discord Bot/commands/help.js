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
                {name: "Echo Command", value: "Repeats what you said back to you. \nCommand: `/echo (input)`"},
                {name: "Ping Command", value: "Does The Pong \nCommand: `/ping`"},
                {name: "Server Command", value: "Gets Server Info.\nCommand: `/server`"},
                {name: "User Command", value: "Gets User Info About You.\nCommand: `/user`"},
                {name: "Distraction Command", value: "Distracts You... or not. \nCommand: `/distraction (true/false)`"},
                {name: "What Is This? Command", value: "Sends a gif which questions the message that is above the gif/the message that you replied to.\nCommand: `/whatisthis`"},
		{name: "JavaScript Command", value: "Outputs the result of your code.NOTE: If you are on iPhone, you must use backticks.(those things at the left when you hold down ')\nCommand: `/js (code)`"},
		{name: "Shutdown Command", value: "Shuts down BestSpark687090's bot and pings him just to let him know. Also WHY would you do this?\nCommand: `/shutdown`"},
		{name: "Time Command", value: "Displays the time in various forms. Hover over/tap on the uncovered spoiler tags to see some cool stuff!\nCommand `/time`"},
            )
            .addField("Thanks to Discord.js", "for making this so I can make a Discord Bot in JavaScript!")
            .setTimestamp()
            .setFooter({ text:"Made By BestSpark687090"});
            await interaction.reply({embeds: [helpEmbed] });

    }
}