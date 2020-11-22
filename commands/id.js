const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "id",
    description: "Get a users id",

    async run (client, message, args) {
    const target =  message.mentions.members.first() || 
       message.mentions.roles.first() || 
       message.mentions.channels.first();
    if (!target) 
      return message.channel.send('Please mention a user, role, or text channel');
    const id = target.id;
    const embed = new MessageEmbed()
      .setTitle('Find ID')
      .addField('Target', target, true)
      .addField('ID', `\`${id}\``, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};