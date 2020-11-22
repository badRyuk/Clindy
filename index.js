const Discord = require('discord.js');

const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

const { oneLine, stripIndent } = require('common-tags');

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = '-';
//You can change the prefix if you like. It doesn't have to be !


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setStatus(`dnd`)
    client.user.setActivity('at Clindy\'s Land')
});


let stats = {
    serverID: '<SERVER ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}



client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase() ||  client.aliases.get(commadName);

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if(message.channel.type === 'dm') return;
    if (message.mentions.has('760773438775492610')) { 
     const embed = new MessageEmbed()
        .setTitle('Hi, I\'m Clindy. Need help?')
        .setThumbnail('https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
        .setDescription(`You can see everything I can do by using the \`;help\` command. Remember commands won't work in DM.`)
        .addField('Support', oneLine`
          If you have questions, suggestions, feel free to contact a staff member!
        `)
        .addField('Thank You for using Clindy!', '<:Heart:764027864991268874>')
        .setColor("RANDOM");
        message.channel.send(embed).then(sentEmbed => {
    sentEmbed.react("765120683428282389")
    })
    };
});
 client.on("message", message => {
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
      if(message.channel.type === 'dm') return;

    if (message.mentions.has('726452843606966405')) { 
		message.react('763707505174904843')
			.catch(() => console.error('One of the emojis failed to react.'));
    }
 });
client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if(message.channel.type === 'dm') return;
    if (message.mentions.has('760773438775492610')) { 
     const embed = new MessageEmbed()
        .setTitle('Hi, I\'m Clindy. Need help?')
        .setThumbnail('https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
        .setDescription(`You can see everything I can do by using the \`;help\` command. Remember commands won't work in DM.`)
        .addField('Support', oneLine`
          If you have questions, suggestions, feel free to contact a staff member!
        `)
        .addField('Thank You for using Clindy!', '<:Heart:764027864991268874>')
        .setColor("RANDOM");
        message.channel.send(embed).then(sentEmbed => {
    sentEmbed.react("765120683428282389")
    })
    };
});
 /*
 client.on("message", message => {
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
      if(message.channel.type === 'dm') return;

    if (message.mentions.has('726452843606966405')) { 
		message.react('763707505174904843')
			.catch(() => console.error('One of the emojis failed to react.'));
    }
 });
 */
client.on('message', (message) => {
    if (message.content.toLocaleLowerCase().startsWith(";setvoterem")) {
    setInterval(() => {
      message.channel.send(`<@726452843606966405>, 12 Hours up. Please Vote for the servers below!`)
      let Embed = new MessageEmbed()
        .setTitle(`Vote Reminder`)
        .setDescription(
          `This is a vote reminder`
        )
        .addField(`Dank Memer 
        `, '[top.gg](https://top.gg/bot/270904126974590976/vote) | [dbl](https://discordbotlist.com/bots/dank-memer/upvote) | [bfd](https://botsfordiscord.com/bot/270904126974590976/vote)')
        .addField(`Dank Memer Community
        `,'[Dank Memer Community](https://top.gg/servers/682809584985178135/vote)')
        .addField(`Dank Vibes
        `,'[Dank Vibes](https://top.gg/servers/595457764935991326/vote)')
        .addField(`The Titans
        `,' [The Titans](https://top.gg/servers/748088075623727146/vote)')
        .addField(`The Dank Kingdom
        `,' [The Dank Kingdom](https://top.gg/servers/645375092079067136/vote)')
        .addField(`Bot Farm
        `,' [Bot Farm](https://top.gg/servers/645753561329696785/vote)')
         .addField(`Dank Trades
        `,'[Dank Trades](https://top.gg/servers/719180744311701505/vote)')
        .addField(`High5 Dankers
        `,' [High5 Dankers](https://top.gg/servers/678164358378946580/vote)')
        .addField(`Supreme Dankers
        `, '[Supreme Dankers](https://top.gg/servers/708607643987476480/vote)')
        .addField(`Midnight Oasis
        `,' [Midnight Oasis](https://top.gg/servers/748436594004066376/vote)')
        .setColor(`RANDOM`);
      message.channel.send(Embed);
      // Now works
    }, 43200000); // Runs this every 10 seconds.
    }
});
client.login(process.env.DISCORD_TOKEN);

// ===========================HOSTING THE BOT=========================================
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

