const { VoiceConnectionStatus, AudioPlayerStatus, entersState, joinVoiceChannel } = require('@discordjs/voice');
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
channel = client.channels.cache.get('1053340012021821593');
const connection = joinVoiceChannel({
	channelId: "1053340012021821594",
	guildId: "1053340010901950576",
	adapterCreator: channel.guild.voiceAdapterCreator,
});
connection.on(VoiceConnectionStatus.Ready, (oldState, newState) => {
	console.log('Connection is in the Ready state!');
});

player.on(AudioPlayerStatus.Playing, (oldState, newState) => {
	console.log('Audio player is in the Playing state!');
});

async function start() {
	player.play(resource);
	try {
		await entersState(player, AudioPlayerStatus.Playing, 5_000);
		// The player has entered the Playing state within 5 seconds
		console.log('Playback has started!');
	} catch (error) {
		// The player has not entered the Playing state and either:
		// 1) The 'error' event has been emitted and should be handled
		// 2) 5 seconds have passed
		console.error(error);
	}
}

void start();
connection.on('stateChange', (oldState, newState) => {
	console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
});

player.on('stateChange', (oldState, newState) => {
	console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
});


// Subscribe the connection to the audio player (will play audio on the voice connection)
const subscription = connection.subscribe(audioPlayer);

// subscription could be undefined if the connection is destroyed!
if (subscription) {
	// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
	setTimeout(() => subscription.unsubscribe(), 5_000);
}

connection.on(VoiceConnectionStatus.Ready, () => {
	console.log('The connection has entered the Ready state - ready to play audio!');
});

connection.on(VoiceConnectionStatus.Disconnected, async (oldState, newState) => {
	try {
		await Promise.race([
			entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
			entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
		]);
		// Seems to be reconnecting to a new channel - ignore disconnect
	} catch (error) {
		// Seems to be a real disconnect which SHOULDN'T be recovered from
		connection.destroy();
	}
});