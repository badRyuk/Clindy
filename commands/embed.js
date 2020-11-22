const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "embed",
  description: "Make the bot embed something",
 run: async(client,message,args,guild) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t send embed messages')
 let embedmessage = message.content.substring(6)
if(!embedmessage) return message.channel.send('Please specify a message...');
const embed = new Discord.MessageEmbed()
 embed.addField('Message', embedmessage);
    embed.setColor("RANDOM");
    embed.setTitle(`${message.author.tag}'s message`);
    embed.setTimestamp();
    embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
   embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
message.delete()
 message.channel.send(embed)
  }
};
