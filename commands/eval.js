const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "eval",
    description: "Runs the code!",

    async run (client, message, args) {
      if (message.author.id !== "726452843606966405") return message.channel.send('This command can only be used by the bot Owner.')
    const input = args.join(' ');
    if (!input) return message.channel.send('Please provide code to eval');
    if(!input.toLowerCase().includes('token')) {

      const embed = new MessageEmbed();

      try {
        let output = eval(input);
        if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
        
        embed
          .addField('Input', `\`\`\`js\n${input.length > 1024 ? 'Too large to display.' : input}\`\`\``)
          .addField('Output', `\`\`\`js\n${output.length > 1024 ? 'Too large to display.' : output}\`\`\``)
          .setColor('#66FF00');

      } catch(err) {
        embed
          .addField('Input', `\`\`\`js\n${input.length > 1024 ? 'Too large to display.' : input}\`\`\``)
          .addField('Output', `\`\`\`js\n${err.length > 1024 ? 'Too large to display.' : err}\`\`\``)
          .setColor('#FF0000');
      }

      message.channel.send(embed);

    } else {
      message.channel.send('(╯°□°)╯︵ ┻━┻ MY token. **MINE**.');
    }
  }
};