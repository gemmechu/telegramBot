'use strict'

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('1299135468:AAFqksr9vmH-bL3oDa3Gx05dLVkCmtWaxp4', {
    workers: 1
})
const StatusController = require('./Controller/StatusController')
const OtherwiseController = require('./Controller/otherwise')
const status = new StatusController()
tg.router.when(new TextCommand('/command1', 'command1'), status )
    .when(new TextCommand('/command2', 'command2'), status)
    .otherwise(new OtherwiseController())
