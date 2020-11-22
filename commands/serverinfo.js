const { MessageEmbed } = require("discord.js");
const { stripIndent } = require('common-tags');
module.exports = {
  name: "serverinfo",
  description: "Serverinfo command",
 run: async(client,message,args,guild) => {
     const region = {
  'us-central': ':flag_us:  `US Central`',
  'us-east': ':flag_us:  `US East`',
  'us-south': ':flag_us:  `US South`',
  'us-west': ':flag_us:  `US West`',
  'europe': ':flag_eu:  `Europe`',
  'singapore': ':flag_sg:  `Singapore`',
  'japan': ':flag_jp:  `Japan`',
  'russia': ':flag_ru:  `Russia`',
  'hongkong': ':flag_hk:  `Hong Kong`',
  'brazil': ':flag_br:  `Brazil`',
  'sydney': ':flag_au:  `Sydney`',
  'southafrica': '`South Africa` :flag_za:'
};
const moment = require('moment');
const verificationLevels = {
  NONE: '`None`',
  LOW: '`Low`',
  MEDIUM: '`Medium`',
  HIGH: '`High`',
  VERY_HIGH: '`Highest`'
};
const notifications = {
  ALL: '`All`',
  MENTIONS: '`Mentions`'
};

    const roleCount = message.guild.roles.cache.size - 1; // Don't count @everyone
    
    // Get member stats
    const members = message.guild.members.cache.array();
    const memberCount = members.length;
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const bots = members.filter(b => b.user.bot).length;
    
    // Get channel stats
    const channels = message.guild.channels.cache.array();
    const channelCount = channels.length;
    const textChannels = 
      channels.filter(c => c.type === 'text' && c.viewable).sort((a, b) => a.rawPosition - b.rawPosition);
    const voiceChannels = channels.filter(c => c.type === 'voice').length;
    const newsChannels = channels.filter(c => c.type === 'news').length;
    const categoryChannels = channels.filter(c => c.type === 'category').length;
    
    const serverStats = stripIndent`
      Members  :: [ ${memberCount} ]
               :: ${online} Online
               :: ${dnd} Busy
               :: ${afk} AFK/Idle
               :: ${offline} Offline
               :: ${bots} Bots
      Channels :: [ ${channelCount} ]
               :: ${textChannels.length} Text
               :: ${voiceChannels} Voice
               :: ${newsChannels} Announcement
               :: ${categoryChannels} Category
      Roles    :: [ ${roleCount} ]
    `;

    const siembed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Information`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField('ID', `\`${message.guild.id}\``, true)
      .addField('Region', region[message.guild.region], true)
      .addField(`<:Owner:758290691985113119> Owner`, message.guild.owner, true)
      .addField('<a:Verified:751425803778261043> Verification Level', verificationLevels[message.guild.verificationLevel], true)
      .addField('<:p_pepeRules:758292973393018922> Rules Channel', 
        (message.guild.rulesChannel) ? `${message.guild.rulesChannel}` : '`None`', true
      )
      .addField('<a:ranbooster:758291290348584970> System Channel', 
        (message.guild.systemChannel) ? `${message.guild.systemChannel}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Channel', 
        (message.guild.afkChannel) ? `${message.guild.afkChannel.name}` : '`None`', true
      )
      .addField('<:Idle:758258937903448065> AFK Timeout', 
        (message.guild.afkChannel) ? 
          `\`${moment.duration(message.guild.afkTimeout * 1000).asMinutes()} minutes\`` : '`None`', 
        true
      )
      .addField('<a:announcement:758288397579845652> Default Notifications', notifications[message.guild.defaultMessageNotifications], true)
      .addField('<:PartneredServerOwner:758262526915248128> Partnered', `\`${message.guild.partnered}\``, true)
      .addField('<a:z_blackcheck:758215462860881950> Verified', `\`${message.guild.verified}\``, true)
      .addField('<a:Calender:760801220943806495> Created On', `\`${moment(message.guild.createdAt).format('MMM DD YYYY')}\``, true)
      .addField('Server Stats', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    if (message.guild.description) siembed.setDescription(message.guild.description);
    if (message.guild.bannerURL) siembed.setImage(message.guild.bannerURL({ dynamic: true }));
    message.channel.send(siembed);  
  }
};
