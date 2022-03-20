module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        client.user.setActivity("you not use BestSpark687090's commands", { type: "WATCHING"});
        console.log(`Ready! Logged in as ${client.user.tag}.`);
        (async () => {
            const channel = client.channels.cache.get("id");
            await channel.send("Online!")
           });
    }
}