module.exports = {
  name: "say",
  description: "Make the bot say something",
 run: async(client,message,args,guild) => {
 let say = message.content.substring(5)
if(!say) return message.channel.send('Please specify a message...');
message.delete()
 message.channel.send(say)
  }
};
