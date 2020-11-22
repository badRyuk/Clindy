
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "emojis",
    description: "Gets a guild\'s emojis",

    async run (client, message, args) {
const charactersPerMessage = 2048;
  // we're going to go with 2000 instead of 2048 for breathing room
const emojis = message.guild.emojis.cache.map(e=> { return `${e} **-** \`:${e.name}:\`\n`}).join(' '); // does virtually the same thing as forEach()
const numberOfMessages = Math.ceil(emojis.length/charactersPerMessage); // calculate how many messages we need

const embed = new MessageEmbed()
.setTitle(`Emoji List`);

for(i=0;i<numberOfMessages;i++) {
  message.channel.send(
    embed.setDescription(emojis.slice(i*charactersPerMessage, (i+1)*charactersPerMessage))
  );
}
  }
};