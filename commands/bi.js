const { MessageEmbed } = require('discord.js');
const { oneLine, stripIndent } = require('common-tags');

module.exports = {
    name: "bi",
    description: "Bots Information",

    async run (client, message, args){
    const botOwner = message.client.users.cache.get(message.client.ownerId);
    const prefix = '-';
    const tech = stripIndent`
      Version     :: 1.7.0
      Library     :: Discord.js v12.3.1
      Environment :: Node.js v12.16.3
      Database    :: SQLite
    `;
    const embed = new MessageEmbed()
      .setTitle('Clindy\'s Bot Information')
      .setDescription(oneLine`
        Clindy is a multi-purpose discord bot. From moderation commands, fun commands and music commands Clindy has it all! Includes moderation, fun, info, utility, and many more different types of commands. Ranging from a great help command to a very informative user info and server info command. It has it all.  Clindy is under development it will be released up very soon. 
      `)
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Client ID', `\`${message.client.user.id}\``, true)
      .addField(`Developer <:Owner:758290691985113119>`, '<@726452843606966405>', true)
      .addField('Tech', `\`\`\`asciidoc\n${tech}\`\`\``)
      .setImage('https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};