const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "coinflip",
  description: "Flips a coin",
 run: async(client,message,args,guild) => {
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'HEADS';
    else result = 'TAILS';
    const embed = new MessageEmbed()
      .setTitle('½  Coinflip  ½')
      .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};