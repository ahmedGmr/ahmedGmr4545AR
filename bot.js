const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`TOP$BOT$`,"http://twitch.tv/S-F")
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
client.on('message', message => {
   if(message.content.startsWith(prefix + $help')) {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(${message.author.username}, message.author.avatarURL)
        .setTitle(**تم إرسال الأوامر العامة في الخاص**)
     message.channel.sendEmbed(embed);
       }

   });



client.on("message", message => {
 if (message.content === "=help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#05ff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(***═════════ஜ۩  أوامر الاعضاء  ۩ஜ═══════════***
**『=support/لإخذ رابط السببورت』**
**『=avatar/لإضهار صورتك』**
**『=s-avatar/لعرض صورة السيرفر』**
**『=count/لمعرفة عدد الأعضاء』**
**『=contact/لإرسال رسالة لصاحب البوت』**
**『=rooms/لمعرففة عدد الرومات』**
**『=roles/لمعرفة الرتب』**
**『=info/لإرسال معلومات البوت』**
**『=bans/لمعرفة عدد المتبندين』**
**『=id/لإرسال ايديك』**
**『=ui/لمعرفة منشن شخص عن طريد الايدي』**
**『=report/للتبليغ على شخص』**
**『=suggest/لإرسال اقتراح』**
**『=servers/لإضهار السيرفرات الي ضايفين البوت』**
**『=invites/للمعرفة عدد الأشخاص الي جبتهم للسيرفر』**
**『=invite/لإخذ رابط البوت』**
***═════════ஜ۩  أوامر الاعضاء  ۩ஜ═══════════***)


message.author.sendEmbed(embed)

}
});
لا تنسة تغير PreFix


client.login(process.env.BOT_TOKEN);
