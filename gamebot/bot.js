const { Client, Events, GatewayIntentBits, ActivityType, Collection, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const dotenv = require('dotenv')
const repl = require('repl')
const randomOrg = require("random-org");

dotenv.config()
var random = new randomOrg({apiKey: process.env.apiKey.toString()})
var message;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
let firstLine = true
let channel;
let guild = client.guilds.cache.get('1053340010901950576')
let commands = []
client.commands = new Collection();
//const stats = require('./stats.json')
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    c.user.setActivity("you playing games with this bot",{type: "WATCHING"})
    channel = client.channels.cache.get('1053340012021821593');
});
client.login(process.env.token);
const prompt = repl.start({
    prompt: "Message to send: ",
    eval: function(cmd,context,filename,callback){
        client.user.setActivity("games with you!",{type: ActivityType.Playing})
        message = channel.send(cmd
            .replaceAll(":d20:","<:d20:1055642144615972884>")
            .replaceAll(":bigd6:","<:d6:1055641555244961803>")
            .replaceAll(":d6:","<:d6:1055641555244961803>")
            ).then(function(msg){return msg})
        done()
    },
    
})
prompt.defineCommand('edit',{
    help: "Edit your most recent message.",
    action: async function(newMessage){
        //message.edit(newMessage).then(console.log).catch(console.log)
        message.then((msg) => {
            msg.edit(newMessage)
            done()
          });
    },
})
prompt.defineCommand('type',{
    help: "test",
    action: function(newMessage){
        done()
    },
})
/*
 message.then((msg) => {
    msg.edit(newMessage)
    .then(console.log('all done!'))
  });
*/
// Log in to Discord with your client's token
function done(){
    prompt.displayPrompt()
    channel.sendTyping(10)
}
/*
guild.channels.cache.find(channel => channel.name === "general");
*/
prompt.defineCommand('channel',{
    help: "Changes the channel you chat in.",
    action: function(newChannel){
        if(newChannel == ""){
            console.log(`You are in the channel #${channel.name}.`)
        }else{
            channel = channel.guild.channels.cache.find(channel => channel.name === newChannel);
        }
        channel = channel ?? client.channels.cache.get('1053340012021821593');
        done()
        
    },
})

client.once(Events.MessageCreate, msg => {
    console.log("hi")
    console.log(msg.content)
});
setInterval(async function(){
    if(channel){
        channel.sendTyping()
    }

}, 1000);
setInterval(async function(){
    if(firstLine){
        client.user.setActivity("games with you!",{type: ActivityType.Playing})
        firstLine = !firstLine
    }else{
        client.user.setActivity("...maybe",{type: ActivityType.Custom})
        firstLine = !firstLine
    }
},2000)
prompt.on('exit', () => {
    client.user.setActivity("games with you!",{type: ActivityType.Playing})
    process.exit();
});
prompt.defineCommand("roll",{
    help: "Lets you choose a dice to roll.",
    action: function(dice){
        let max = dice.split('d')
        max = max[max.length-1]
        let roll;
        random.generateIntegers({min: 1, max: Math.abs(max), n: 1}).then(function(result){
            roll = result.random.data[0]
            message = channel.send(`You rolled a ${roll}.`).then(function(msg){return msg})
            done()
        })
    }
})
prompt.defineCommand("delete",{
    help: "Deletes the amount of messages from the channel",
    action: function(num){
        
        // channel.bulkDelete(num)
        //     .then(function(messages){
        //         console.log(messages)
        //     })
        //message.delete().then(msg).catch(console.error)
        message = channel.messages.fetch({limit: Math.abs(num)}).then(message => {
            let messages = message.filter(m => m.author.id === '1053339530465386567')
            for (const [key, value] of messages) {
                value.delete()
              }
        })
        done()
    },
})

/*
too much error, won't fix
prompt.defineCommand('stats',{
    help: "just a test",
    action: async function(Person){
        const person = Person.charAt(0).toUpperCase() + Person.slice(1)
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
        await interaction.reply({embeds: [statsEmbed]})
        done()
    }
})
too much error, wont fix
*/
// client.on(Events.InteractionCreate, async interaction => {
//     if(!interaction.isCommand()) return;
//     const command = client.commands.get(interaction.commandName);
//     if (!command) return;
//     try {
//         await command.execute(interaction);
//     } catch (error) {
//         await interaction.reply({ content: `error occured. Code: ${error}`,ephemeral: true})
//     }
// });
prompt.defineCommand('activity',{
    help: "does something",
    action: function(string){
        client.user.setActivity(string, { type: ActivityType.Playing });
        done()
    }
})
prompt.defineCommand("eval",{
    help: "Does normal JS things",
    action: function(evaluated){
        console.log(eval(evaluated))
        done()
    }
})
prompt.defineCommand('muteall',{
    help: "Gives everyone the muted role for the VC so they are muted.",
    action: function(){
        guild.roles.everyone.setPermissions([PermissionsBitField.Flags.Speak])
    }
})

prompt.defineCommand("button",{
    help: "Sends a cool button",
    action: function(){
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('yipeee!')
					.setLabel('Red Button!')
					.setStyle(ButtonStyle.Danger),
			);
        channel.send({content: "click da button", components: [row], ephemeral: true})
        done()
    }
})
client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isButton()) return;
    const filter = i => true

    const collector = interaction.channel.createMessageComponentCollector({time: 15000 });
    
    collector.on('collect', async i => {
        console.log("clicked",i)
        channel.send({content: i.toString(),ephemeral: true,})
        return;
    });
    
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
});
const { ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
/*
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'stats') {
		// Create the modal
		const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

		// Add components to modal

		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	}
});
*/
client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isModalSubmit()) return;

	// Get the data entered by the user
	const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
	const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
	console.log({ favoriteColor, hobbies });
    interaction.reply("ok i done")
});
client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName = "stats"){
        const stats = require("./commands/stats")
        stats.execute(interaction)
    }
})