const TelegramApi = require('node-telegram-bot-api')

const token = '6062620121:AAGDAcYYnlcOzP6Q4EL9QqdffZrQJyrNxIY'

const bot = new TelegramApi(token, {polling: true})

const Options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Предложить новость'}]
        ]
    })
}

const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/news', description: 'Предоставить информацию'},
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот "NAME__BOT"`);
        }
        if (text === '/news') {
            return bot.sendMessage(chatId, 'Хотите предложить новость?')
        }

        if (text === 'Предложить новость') {
            return bot.sendMessage(chatId, 'Опишите ваше предложение')
        }

        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
    })
}

start()
