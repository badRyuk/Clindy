const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "alia",
  description: "All commands aliasis",
 run: async(client,message,args,guild) => {
       const embed = new MessageEmbed()
 .setTitle('WGOBot Aliasis Help')
      // Set the color of the embed
      .setColor("RANDOM")
      // Set the main content of the embed
      .addField('help > h | music > m', '``Shows all the bot commands``', true)
       .addField('aliasis > alia', '``All command\'s aliasis | This message``', true)
      .addField('addrole > ar', '``Adds the role to the given user``', true)
      .addField('avatar > av', '``Check your or a users avatar``', true)
      .setDescription('Here are my commands')
	  .addField('calculate > calc', '``Solves the given math expression``', true)
    .addField('channelinfo > ci', '``Sends Info for a channel``', true)
    .addField('createcolor > cc', '``Creates a color role!``', true)
       .addField('getid > id', '``Gets the ID``', true)
       .addField('kick', '``Kicks a user from the server``', true)
             .addField('links > link', '``WGOQatar Links!``', true)
       .addField('members > mem', '``Sends the member stats of the server``', true)
      .addField('setnickname > nn', '``Sets a users nickname ``', true)
      .addField('permissions > perms', '``Check your or a users permissions``', true)
      .addField('removerole > rr', '``Removes a role from the specified user``', true)
      .addField('roleinfo > ri', '``Sends a role\'s info``', true)
      .addField('purge > massdelete', '``Purge upto 100 messages of a channel or user``', true)
      .addField('roll > dice', '``Roll a dice...``', true)
      .addField('coinflip > coin', '``Roll a dice...``', true)
      .addField('serverinfo > si', '``Send the serverinfo``', true)
       .addField('slowmode > sm', '``Edit a given channel\'s Slowmode``', true)
       .addField('timer > remind', '``Set a timer and the bot will send you a DM to remind you``', true)
       .addField('userinfo > ui', '``Sends a given user\'s info``', true)
        .addField('botinfo > bi', '`Bots Information`', true)
            .addField('warnings > warns', '``Checks a users warnings``', true)
      .setFooter('Clindy', 'https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
      .setTimestamp()
      message.channel.send(embed)
    }
  }

