require('dotenv').config()

const { Telegraf }= require('telegraf')

const BOT = new Telegraf(process.env.BOT_TOKEN)

// start command
BOT.start((ctx) =>{
    ctx.reply('Welcome to Sars Bot')
})

BOT.help((ctx) => {
    ctx.reply('How can I help you?')
})

BOT.hears('Hello', (ctx) => {
    ctx.reply('How can we help you?')
})


// Run the bot
BOT.launch()





