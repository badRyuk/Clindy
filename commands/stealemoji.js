const Discord = require('discord.js')
const { parse } = require('twemoji-parser')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "stealemoji",
    description: "Steals an emoji from a server [Nitro User Only]",

    async run (client, message, args) {
   if (!message.member.hasPermission('MANAGE_EMOJIS')){
  return message.channel.send('Sorry, you need ``MANAGE_EMOJIS`` permissions to execute this command!')
   }
   if (!message.guild.me.hasPermission('MANAGE_EMOJIS')){
     return message.channel.send('Please ask a higher moderator to give me ``MANAGE_EMOJIS`` to execute this command!')
   }
   const emoji = args[0];
   if(!emoji) return message.channel.send('Please give me an emoji to steal and to you server!')
   let customemoji = Discord.Util.parseEmoji(emoji);
   if (customemoji.id) {
     const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif":"png"}`
   
   const name = args.slice(1).join(" ");
   message.guild.emojis.create(
     `${Link}`,
     `${name || `${customemoji.name}`}`
   )
   const embed = new MessageEmbed()
   .setTitle('Emoji Added')
   .setColor('RANDOM')
   .setDescription(`New Emoji Added | Name: ${name || `${customemoji.name}`} | Preview: [Click Here](${Link})`)
   return message.channel.send(embed)
   } else {
     let CheckEmoji = parse(emoji, {assetType: "png"});
     if(!CheckEmoji[0])
     return message.reply('Only custom emojis! Sorry')
   }
  }
}