const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Top$Bot$`,"http://twitch.tv/S-F")
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
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
         message.channel.send('**The Message Was Sent On Private**');
            
    
         


 message.author.sendMessage(`
 **
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━━╯╱╱╱╱╱╱╱╱╱╱╱┃┃
┃╰━━┳╮╭┳━━┳╮╭┳━━┫┃╭━━╮
┃╭━━┻╋╋┫╭╮┃╰╯┃╭╮┃┃┃┃━┫
┃╰━━┳╋╋┫╭╮┃┃┃┃╰╯┃╰┫┃━┫
╰━━━┻╯╰┻╯╰┻┻┻┫╭━┻━┻━━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯

╔[❖════════════❖]╗
             Prefix = $help
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ *kick <mention > ➾ kick member from server

 ❖ *clear ➾ clear chat ( not ready yet fixing)
 
 ❖ *mute < mention > ➾ mute member

 ❖ *unmute <mention> ➾ unmute member

 ❖ *ct <name> ➾ create channel

 ❖ *cv <name> create voice channel
  
 ❖ *bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ *roll <number> ➾ role 

❖ *date ➾ see date

❖ *member ➾ members info

❖ *ser-av ➾ server avatar

❖ *uptime ➾ to see uptime

❖ *invs ➾ server invite link

❖ *own ➾ bot owner

❖ *id ➾ your id

❖ *avatar ➾ your avatar account

❖ $help-en ➾ $help by arabic

❖ #help-en ➾ help by english

❖ *ping ➾ to see ping

❖ *bot ➾ bot informations 

❖ *server ➾ server informations 

❖ *invite ➾ bot invite link

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "wlc"


==================================================================

Server support: https://discord.gg/zvwpSCN

==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=482357134923923456&permissions=0&scope=bot

==================================================================

`);

    }
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
            .addField(':earth_americas:  » سيرفر : ', message.guild.name)
            .addField(':thinking:  » راسل : ', message.author.username)
            .addField(':pencil:  » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
 message.delete(); 
        });
    }
    } else {
        return;
    }
});

client.login(process.env.BOT_TOKEN);
