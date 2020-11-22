const { MessageEmbed } = require("discord.js");
const { stripIndent } = require('common-tags');
module.exports = {
  name: "mem",
  description: "Sends member status of the users in the server.",
 run: async(client,message,args,guild) => {
 const members = message.guild.members.cache.array();
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
     const streaming =  members.filter((m) => m.presence.status === 'streaming').length;
    const embed = new MessageEmbed()
      .setTitle(`Member Status [${message.guild.members.cache.size}]`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(stripIndent`
        <:Online:757607672093737121> **Online:** \`${online}\` members
      <:DoNotDisturb:758258980765827073> **Busy:** \`${dnd}\` members
        <:Idle:758258937903448065> **AFK/Idle:** \`${afk}\` members
        <:Offline:757607738925776899> **Offline:** \`${offline}\` members
      `)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
 }
}