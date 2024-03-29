const { MessageEmbed } = require('discord.js');

const numberMap = {
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
};

module.exports = {
  name: "emojify",
  description: "Emojify the given message!",
 run: async(client,message,args,guild) => {
    if (!args[0]) return message.channel.send('Please provide a message to emojify');
    let msg = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    msg = msg.split('').map(c => {
      if (c === ' ') return c;
      else if (/[0-9]/.test(c)) return numberMap[c];
      else return (/[a-zA-Z]/.test(c)) ? ':regional_indicator_' + c.toLowerCase() + ':' : '';
    }).join('');

    if (msg.length > 2048) {
      msg = msg.slice(0, msg.length - (msg.length - 2033)); 
      msg = msg.slice(0, msg.lastIndexOf(':')) + '**...**';
    }

    const embed = new MessageEmbed()
      .setTitle('Emojify')
      .setDescription(msg)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};