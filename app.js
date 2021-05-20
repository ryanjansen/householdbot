const { Telegraf } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.setWebhook(`https://ryanjansen.me:8443/${process.env.BOT_TOKEN}`);

// Http webhook, for nginx/heroku users.
bot.startWebhook(`/${process.env.API_PATH}`, null, 5000);

console.log("Telegraf listening on port 5000...")