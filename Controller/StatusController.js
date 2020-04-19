'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
class StatusController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    statusHandler($) {
        let stat = $.message.text.split(' ').slice(1).join(' ')
        $.getUserSession('status').then(status => {
                if(!Array.isArray(status)){
                    $.setUserSession('status', stat.concat([stat]))
                }
                else {
                    $.setUserSession('status', ([stat]))
                }
            })
    }
    updateStatus($){
        $.getUserSession('status').then(status => {
            $.sendMessage('your Status\n'+ status)
        })
        
    }
   
    get routes() {
        return {
            'command1': 'statusHandler',
            'command2' : 'updateStatus'
           
        }
    }
}

module.exports = StatusController;