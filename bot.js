const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    message.channel.send(`\`${message.guild.memberCount}\` : عدد الاعضاء المستلمين`); 
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        var bc = new Discord.RichEmbed()
            .addField(':earth_americas:  » https://discord.gg/HheusW انضمو يا شباب : ', message.guild.name)
            .addField(':thinking:  » ahmedGmr : ', message.author.username)
            .addField(':pencil:  » https://discordapp.com/api/oauth2/authorize?client_id=471531013193859072&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.gg%2F5amSGB&scope=bot : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.login(process.env.BOT_TOKEN);
