const { MessageEmbed } = require('discord.js');

// Color hex regex
const rgx = /^#?[0-9A-F]{6}$/i;

module.exports = {
    name: "createcolor",
    description: "Creates a color role!",

    async run (client, message, args) {
         if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t create roles as you don\'t have ``MANAGE_ROLES`` permission')
                 if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the ``MANAGE_ROLES`` permission which is required to exectute this command')
    let hex = args.shift();
    if (!rgx.test(hex)) return message.channel.send('Please provide a valid color hex and color name');
    if (args.length === 0) return message.channel.send('Please provide a color name');
    let colorName = args.join(' ');
    if (!colorName.startsWith('#')) colorName = '#' + colorName;
    if (!hex.startsWith('#')) hex = '#' + hex;
    try {
      const role = await message.guild.roles.create({
        data: {
          name: colorName,
          color: hex,
          permissions: []
        }
      });
      const embed = new MessageEmbed()
        .setTitle('Create Color')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`Successfully created the ${role} color.`)
        .addField('Hex', `\`${hex}\``, true)
        .addField('Color Name', `\`${colorName.slice(1, colorName.length)}\``, true)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(hex);
      message.channel.send(embed);
    } catch (err) {
      message.channel.send('Please try again in a few seconds', err.message);
    }
  }
};