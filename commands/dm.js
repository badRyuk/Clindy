const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "dm",
  description: "Bot DM the mentioned user or user ID",
 run: async(client,message,args,guild) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!')
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 if(!args[0]) return message.channel.send('Please specify a user');
if(!member) return message.channel.send('Can\'t seem to find this user.-.-');
if(member.id === message.author.id) return message.channel.send('You don\'t need to make the bot DM yourself. DM another user ;-;');
let reason = args.slice(1).join(" ");
if(!reason) return message.channel.send('Please specify a message to DM to the mentioned user...');
member.send(reason).catch(error => message.channel.send("Couldn't send the message, make sure the user is in the same guild as the bot and user is accepting DM's from the server or has not blocked the bot")); 
 }
};
