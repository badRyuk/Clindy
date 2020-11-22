const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ui",
  description: "Userinfo of mentioned user/id or if no one mentioned then yours",
 run: async(client,message,args,guild) => {
       const embed = new MessageEmbed()
const moment = require('moment');
const statuses = {
  online: `<:Online:757607672093737121> \`Online\``,
  idle: `<:Idle:758258937903448065> \`AFK/Idle\``,
  offline: `<:Offline:757607738925776899> \`Offline\``,
  dnd: `<:DoNotDisturb:758258980765827073> \`Do Not Disturb\``
};
const flags = {
  DISCORD_EMPLOYEE: `<:DiscordStaff:758262218235183115> \`Discord Employee\``,
  DISCORD_PARTNER: `<:PartneredServerOwner:758262526915248128> \`Partnered Server Owner\``,
  BUGHUNTER_LEVEL_1: `<:DiscordBugHunterLevel1:758263575616946187> \`Bug Hunter (Level 1)\``,
  BUGHUNTER_LEVEL_2: `<:DiscordBugHunterLevel2:758265121704902687> \`Bug Hunter (Level 2)\``,
  HYPESQUAD_EVENTS: `<:DiscordHypeSquad:758263004244082699> \`HypeSquad Events\``,
  HOUSE_BRAVERY: `<:HypeSquadBravery:758255619642884099> \`House of Bravery\``,
  HOUSE_BRILLIANCE: `<:HypeSquadBrilliance:758255706259980298> \`House of Brilliance\``,
  HOUSE_BALANCE: `<:HypeSquadBalance:758255430086164532> \`House of Balance\``,
  EARLY_SUPPORTER: `<:DiscordEarlySupporter:758265307423965184> \`Early Supporter\``,
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: `<:VerifiedBot:758271163855273984> \`Verified Bot\``,
  VERIFIED_DEVELOPER: `<:EarlyVerifiedBotDeveloper:757607406636367955> \`Early Verified Bot Developer\``
};

 const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
 if (!member) 
      return message.channel.send('Please mention the user for the userinfo..');
    const userFlags = (await member.user.fetchFlags()).toArray();
    const activities = [];
    let customStatus;
    for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`Listening to **${activity.name}**`);
          else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
    /**
   * Gets member from mention
   * @param {Message} message 
   * @param {string} mention 
   */
    const uiembed = new MessageEmbed() 
      .setTitle(`${member.displayName}'s Information`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addField('User', member, true)
      .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
      .addField('ID', `\`${member.id}\``, true)
      .addField('Status', statuses[member.presence.status], true)
      .addField('Bot', `\`${member.user.bot}\``, true)
      .addField('Color Role', member.roles.color || '`None`', true)
      .addField('Highest Role', member.roles.highest, true)
      .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
      .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
   if (activities.length > 0) uiembed.setDescription(activities.join('\n'));
    if (customStatus) uiembed.spliceFields(0, 0, { name: 'Custom Status', value: customStatus});
    if (userFlags.length > 0) uiembed.addField('Badges', userFlags.map(flag => flags[flag]).join('\n'));
    message.channel.send(uiembed);
    }
  }

