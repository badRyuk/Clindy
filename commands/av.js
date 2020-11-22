const Discord = require('discord.js');

module.exports = {
    name: "av",
    description: "Brodcast someone's avatar",

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024, dynamic: true})


        const embed = new Discord.MessageEmbed()
        .setAuthor(avatar, message.username)
        .setTitle(`Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
.setAuthor(member.username, avatar, avatar);
        message.channel.send(embed);
    }
}