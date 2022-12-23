// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv')
const stats = require('./stats.json')
dotenv.config()
const repl = require('repl')
const randomOrg = require("random-org")
var random = new randomOrg({apiKey: process.env.apiKey.toString()})
var message;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
let channel;
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    client.user.setActivity("you playing games with this bot",{type: "WATCHING"})
    channel = client.channels.cache.get('1053340012021821593');
});
client.login(process.env.token);
const prompt = repl.start({
    prompt: "Message to send: ",
    eval: function(cmd,context,filename,callback){
        message = channel.send(cmd
            .replaceAll(":d20:","<:d20:1055642144615972884>")
            .replaceAll(":smalld6:","<:smalld6:1055642146004287628>")
            .replaceAll(":bigd6:","<:bigd6:1055641555244961803>")
            .replaceAll(":d6:","<:bigd6:1055641555244961803>")).then(function(msg){return msg})
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
prompt.on('exit', () => {
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
