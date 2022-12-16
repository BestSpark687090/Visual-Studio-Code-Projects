const repl = require('repl');
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv')
dotenv.config()
// Set the API key for your OpenAI account
console.log(process.env.test)
const configuration = new Configuration({
  apiKey: process.env.apiKey,
});
const openai = new OpenAIApi(configuration);
// Start a REPL that lets you interact with ChatGPT
repl.start({
  prompt: "> ",
  eval: async function(input, context, filename, callback) {
    // Use the completions API to generate a response from ChatGPT
    try{
    var completion = await openai.createCompletion({
      prompt: input,
      model: "text-davinci-002-render",
    });
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }finally{
        console.log(completion.data.choices[0].text)
    }
  }
});
/*
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
*/