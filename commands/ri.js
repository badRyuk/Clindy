const { MessageEmbed } = require("discord.js");
const moment = require('moment');
module.exports = {
  name: "ri",
  description: "Sends role info",
 run: async(client,message,args,guild) => {
   const permissions = {
 "ADMINISTRATOR": "Administrator",
	"VIEW_AUDIT_LOG": "View Audit Log",
	"VIEW_GUILD_INSIGHTS": "View Server Insights",
	"MANAGE_GUILD": "Manage Server",
	"MANAGE_ROLES": "Manage Roles",
	"MANAGE_CHANNELS": "Manage Channels",
	"KICK_MEMBERS": "Kick Members",
	"BAN_MEMBERS": "Ban Members",
	"CREATE_INSTANT_INVITE": "Create Invite",
	"CHANGE_NICKNAME": "Change Nickname",
	"MANAGE_NICKNAMES": "Manage Nicknames",
	"MANAGE_EMOJIS": "Manage Emojis",
	"MANAGE_WEBHOOKS": "Manage Webhooks",
	"VIEW_CHANNEL": "Read Text Channels & See Voice Channels",
	"SEND_MESSAGES": "Send Messages",
	"SEND_TTS_MESSAGES": "Send TTS Messages",
	"MANAGE_MESSAGES": "Manage Messages",
	"EMBED_LINKS": "Embed Links",
	"ATTACH_FILES": "Attach Files",
	"READ_MESSAGE_HISTORY": "Read Message History",
	"MENTION_EVERYONE": "Mention @everyone, @here, and All Roles",
	"USE_EXTERNAL_EMOJIS": "Use External Emojis",
	"ADD_REACTIONS": "Add Reactions",
	"CONNECT": "Connect",
	"SPEAK": "Speak",
	"STREAM": "Video",
	"MUTE_MEMBERS": "Mute Members",
	"DEAFEN_MEMBERS": "Deafen Members",
	"MOVE_MEMBERS": "Move Members",
	"USE_VAD": "Use Voice Activity",
	"PRIORITY_SPEAKER": "Priority Speaker"
};
    const role = message.guild.roles.cache.get(args[0]);
    if (!role)
      return message.channel.send('Please provide a valid role ID');

    // Get role permissions
    const rolePermissions = role.permissions.toArray();
    const finalPermissions = [];
    for (const permission in permissions) {
      if (rolePermissions.includes(permission)) finalPermissions.push(`+ ${permissions[permission]}`);
      else finalPermissions.push(`- ${permissions[permission]}`);
    }

    // Reverse role position
    const position = `\`${message.guild.roles.cache.size - role.position}\`/\`${message.guild.roles.cache.size}\``;

    const embed = new MessageEmbed()
      .setTitle('Role Information')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField('Role', role, true)
      .addField('Role ID', `\`${role.id}\``, true)
      .addField('Position', position, true)
      .addField('Mentionable', `\`${role.mentionable}\``, true)
      .addField('Bot Role', `\`${role.managed}\``, true)
      .addField('Color', `\`${role.hexColor.toUpperCase()}\``, true)
      .addField('Members', `\`${role.members.size}\``, true)
      .addField('Hoisted', `\`${role.hoist}\``, true)
      .addField('Created On', `\`${moment(role.createdAt).format('MMM DD YYYY')}\``, true)
      .addField('Permissions', `\`\`\`diff\n${finalPermissions.join('\n')}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(role.hexColor);
    message.channel.send(embed);
  }
};
