const { MessageEmbed } = require('discord.js');
const search = require('youtube-search');
const he = require('he');

module.exports = {
  name: "youtube",
  description: "SlowMode Command",
 run: async(client,message,args,guild) => {

    const apiKey = 'AIzaSyCqqjwey0ZYcE7kQk_RuomozChbz3eSxgA';
    const videoName = args.join(' ');
    if (!videoName) return message.channel.send('Please provide a YouTube video name');
    const searchOptions = { maxResults: 1, key: apiKey, type: 'video' };
    if (!message.channel.nsfw) searchOptions['safeSearch'] = 'strict';
    let result = await search(videoName, searchOptions)
      .catch(err => {
        console.log(err);
        return message.channel.send('Please try again in a few seconds', err.message);
      });
    result = result.results[0];
    if (!result) 
      return message.channel.send('Unable to find video, please provide a different YouTube video name');
    const decodedTitle = he.decode(result.title);
    const embed = new MessageEmbed()
      .setTitle(decodedTitle)
      .setURL(result.link)
      .setThumbnail('https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png%27')
      .setDescription(result.description)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    if (message.channel.nsfw) embed.setImage(result.thumbnails.high.url);
    message.channel.send(embed);
  }
};