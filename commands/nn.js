const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "nn",
  description: "Sets a users nickname to the provided nickname..",
 run: async(client,message,args,guild) => {
 if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send('You can\'t change user nicknames as you don\'t have ``MANAGE_NICKNAMES`` permission')
  if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send('I don\'t have the right permissions to change user nicknames.')

 const member = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);
 
    if (!member) return message.channel.send('Please specify a user id or user mention');
    if (member.roles.highest.position >= message.member.roles.highest.position && member != message.member) return message.channel.send('You cannot change the members nickname as he/she has higher roles than you.');
    if (!args[1]) return message.channel.send('Please specify a nickname to change for the specified user');

    // Multi-word nickname
    let nickname = args[1];
    if (nickname.startsWith('"')) {
      nickname = message.content.slice(message.content.indexOf(args[1]) + 1);
      if (!nickname.includes('"')) 
        return message.channel.send('Please ensure that the nickname is surrounded by quotation marks. \n eg. \"nickname here\"');
      nickname = nickname.slice(0, nickname.indexOf('"'));
      if (!nickname.replace(/\s/g, '').length) return message.channel.send('Please provide a nickname');
    }

    if (nickname.length > 32) {
       return message.channel.send('Please ensure the nickname is no larger than 32 characters');
      
    } else {

      let reason;
      if (args[1].startsWith('"')) 
        reason = message.content.slice(message.content.indexOf(nickname) + nickname.length + 1);
      else reason = message.content.slice(message.content.indexOf(nickname) + nickname.length);
      if (!reason) reason = '`None`';
      if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
    try {

        // Change nickname
        const oldNickname = member.nickname || '`None`';
        const nicknameStatus = `${oldNickname} ➔ ${nickname}`;
        await member.setNickname(nickname);
        const embed = new MessageEmbed()
          .setTitle('Set Nickname')
          .setDescription(`${member}'s nickname was successfully updated.`)
          .addField('Moderator', message.member, true)
          .addField('Member', member, true)
          .addField('Nickname', nicknameStatus, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
        } catch (err) {
       return message.channel.send('Please check the role hierarchy', err.message);
       }
    }  
  }
};
