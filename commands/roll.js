const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "roll",
  description: "Roll a dice with desired number of sides.. If number of sides is not mentioned then the number of sides taken will be 6 [Default]",
 run: async(client,message,args,guild) => {
let limit = args[0];
    if (!limit) limit = 6;
    const n = Math.floor(Math.random() * limit + 1);
    if (!n || limit <= 0)
      return message.channel.send('Please provide a valid number of dice sides');
    const embed = new MessageEmbed()
      .setTitle('🎲  Dice Roll  🎲')
      .setDescription(`${message.member}, you rolled a **${n}**!`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
