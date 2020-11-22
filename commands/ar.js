const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ar",
    description: "Adds the role to the user.",

    async run (client, message, args) {
    const nahmem = new MessageEmbed()
    nahmem.setTitle('Incorrect Arguments provided')
    nahmem.setDescription('Please provide the user id of the user to whom the role has to be added to. Make sure the user is in the server and the id is valid!')
    nahmem.addField('Command Usage', '``-addrole <USER_ID> <ROLE_ID> <OPTIONAL_REASON>``')
    nahmem.addField('Example Usage', '``-addrole 737461888023003196 741231360408158239 Asked for it!``')
    nahmem.setFooter('TIP: You can use -getid/id for getting id of any user, channel or role!')
    nahmem.setColor(message.guild.me.displayHexColor);
    const nahrole = new MessageEmbed()
    nahrole.setTitle('Incorrect Arguments provided')
    nahrole.setDescription('Please provide the id of the role to which has to be added to a user. Make sure the role id isn\'t invalid.')
    nahrole.addField('Command Usage', '``-addrole <USER_ID> <ROLE_ID> <OPTIONAL_REASON>``')
    nahrole.addField('Example Usage', '``-addrole 737461888023003196 741231360408158239 Asked for it!``')
    nahrole.setFooter('TIP: You can use -getid/id for getting id of any user, channel or role!')
    nahrole.setColor(message.guild.me.displayHexColor);
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Sorry, you need ``MANAGE_ROLES`` permissions to execute this command!')
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('Sorry I require ``MANAGE_ROLES`` permissions to execute this command')
    const member = message.guild.members.cache.get(args[0]);
    if (!member)
      return message.channel.send(nahmem);
    if (member.roles.highest.position >= message.member.roles.highest.position)
    return message.channel.send('You cannot add a role to someone with an equal or higher role');

    const role =  message.guild.roles.cache.get(args[1]);
    
    let reason = args.slice(2).join(' ');
    if (!reason) reason = '`None`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

    if (!role)
     return message.channel.send(nahrole);
    else if (member.roles.cache.has(role.id)) // If member already has role
      return message.channel.send('User already has the provided role');
    else {
      try {

        // Add role
        await member.roles.add(role);
        const embed = new MessageEmbed()
          .setTitle('Add Role')
          .setDescription(`${role} was successfully added to ${member}.`)
          .addField('Moderator', message.member, true)
          .addField('Member', member, true)
          .addField('Role', role, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
      } catch (err) {
         return message.channel.send('Please check the role hierarchy or if the role is managed by an integeration or system', err.message);
    }
    }  
  }
};