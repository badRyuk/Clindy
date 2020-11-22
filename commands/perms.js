const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "perms",
  description: "Sends a users permissions. The permissions of the mentioned user/given user id will be shown. If none is provided then your own permissions will be shown!",
 run: async(client,message,args,guild) => {
         const member =  message.mentions.members.first() || 
      message.guild.members.cache.get(args[0]) || 
      message.member;
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
    // Get member permissions
    const memberPermissions = member.permissions.toArray();
    const finalPermissions = [];
    for (const permission in permissions) {
      if (memberPermissions.includes(permission)) finalPermissions.push(`+ ${permissions[permission]}`);
      else finalPermissions.push(`- ${permissions[permission]}`);
    }

    const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Permissions`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`\`\`\`diff\n${finalPermissions.join('\n')}\`\`\``)
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
    message.channel.send(embed);
  }
};
