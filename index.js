const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

client.on('ready', () => {
  console.log('Bot Listo')
})

let prefix = 'l!'


client.on('messageCreate', message => {
  if(message.author.bot) return 
  //-
  if(message.content === 'Hola'){
    message.reply('Hi') 
  }
  if(message.content === prefix + 'canal'){
    message.channel.send('https://www.youtube.com/channel/UCZV1kzY7XZJzzwBcIg_uehg') 
  }
    if(message.content === prefix + 'node .'){
    message.reply('Bot Listo')
  }
})

client.on('messageCreate', message => {
  let prefix = 'l!'
  if(message.author.bot) return
  let args = message.content.slice(prefix.length).trim().split(/ +/g)
  let command = args.shift().toLowerCase()



  if(command === 'help'){
      let embed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('BLUE')
          .setTitle('AYUDA')
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`estos son mis comandos de ayuda y mi prefix es ${prefix}\nObligatorio: \`[]\`\nOpcional:\`<>\``)
          .addFields(
              {
                  name: 'HELP',
                  value: `Muestra los comandos de ayuda generales\nuso: \`${prefix}help\``
              },
              {
                  name: 'SAY',
                  value: `Dire lo que tu quiereas uwu\nuso: \`${prefix}say <mensaje>\``
              },
              {
                  name: 'AVATAR',
                  value: `Mira el avatar de un usuario o el tuyo\nuso: \`${prefix}avatar [usuario]\``
              }
          )
      message.reply({embeds: [embed]})
  }
  if(command === 'say'){
      if(!args[0]) ReadableStreamDefaultController
      let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('RANDOM')
    .setDescription(`**${args.join(' ')}**`)
  message.channel.send({embeds: [embed]})
      message.delete(message.author)
  }
  if(command === 'avatar'){
      let usuario = message.mentions.users.first() || message.author
      let embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle('AVATAR')
          .setDescription(`Avatar de ${usuario}`)
          .setImage(usuario.displayAvatarURL({ size: 1024}))
      message.reply({embeds: [embed]})
  }
})





client.login('OTM5NjE1NTI0NDExODA1NzQ3.Yf7bJg.NFQO59NAm3y5yVQ1_uSsff4UJ1U')