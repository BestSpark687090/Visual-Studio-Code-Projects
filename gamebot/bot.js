// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Guild } = require('discord.js');
const dotenv = require('dotenv')
const repl = require('repl')
const commands = require('./commands')
dotenv.config()
var message;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
let channel;
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    channel = client.channels.cache.get('1053340012021821593');
});
client.login(process.env.token);
const prompt = repl.start({
    prompt: "Message to send: ",
    eval: function(cmd,context,filename,callback){
        message = channel.send(cmd).then(function(msg){return msg})
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
        done()
    },
})
client.once(Events.MessageCreate, msg => {
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