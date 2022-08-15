const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
 data: new SlashCommandBuilder()
    .setName("js")
    .setDescription("Outputs the result of your code.\nNOTE: If you are on iPhone, you must use `.")
    .addStringOption(option =>
        option.setName("code")
            .setDescription("The code you want to input.")
            .setRequired(true))
            ,async execute(interaction) {
		//if(interaction.toString().includes("console.log")){
			//await interaction.reply(`Your output is in Ryan's command prompt.`)
		//} else {
			console.log(interaction.toString())
                	await interaction.reply(`Your output is: \`\`\`${eval(interaction.toString().split(":")[1])}\`\`\``)			//slice(1).toString().replace(/,/g,':').replace(undefined,"inside of Ryan's command prompt."))}`)
		//}
}
}