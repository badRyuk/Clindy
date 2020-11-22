const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Send a message to the announcement channel",
 run: async(client,message,args,guild) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t brodcast messages')
 let embedmessage = message.content.substring(9)
let brodcastChannel = client.channels.cache.get('778540048592797721');
if(!embedmessage) return message.channel.send('Please specify a message...');
const embed = new Discord.MessageEmbed()
 embed.addField('Message', embedmessage);
    embed.setColor("RANDOM");
    embed.setTitle(`${message.author.tag}'s message`);
    embed.setTimestamp();
    embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
   embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
message.delete()
brodcastChannel.send(embed)
message.channel.send('Brodcast message sent to <#778540048592797721>. If you want this announcement to be recieved by other servers following you please do it manually!')
  }
};
