const repl = require('repl')
let prompt = repl.start({
    prompt: "Coleman's Cool Thing> "
})
prompt.defineCommand("coleman",{
    help: "Does well... something. Idk what it does tho",
    action: function(text){
        console.log('yo man wassup how ya doing it seems you typed '+ text+". neat man.")
        prompt.displayPrompt()
    }
})