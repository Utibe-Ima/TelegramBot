require('dotenv').config()

const { Telegraf } = require('telegraf')
const Markup = require("telegraf");
const Stage = require("telegraf");
const session = require("telegraf");
const WizardScene = require("telegraf");

const BOT = new Telegraf(process.env.BOT_TOKEN)
const calculator = require('./api/nairaToDollar')


// start command
BOT.start((ctx) =>{
    ctx.reply('Welcome Naira to Dollar Exchange Rate Calculator')
})


// Run the bot
BOT.launch()





