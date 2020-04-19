'use strict'
const Telegram = require('telegram-node-bot')
class OtherwiseController extends Telegram.TelegramBaseController {
    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('sorry no command')
    }

}

module.exports = OtherwiseController;