const Discord = require('discord.js')
const {Client} = Discord
const config = require('../config')
const debug = require('debug')('DEBUG')
const error = require('debug')('ERROR')
const warn = require('debug')('WARN')
const handler = require('./handler')
const client = new Client(config.bot.options)

client.on('ready', () => {
    if (!client.shard) {
        console.error('shard only')
        process.exit(0)
    }
    console.log(`Shard ${client.guilds.cache.first().shardID} ready`)
    setInterval(async function () {
        await client.user.setActivity({name: `${client.guilds.cache.size}개 서버에 참여중`, type: "LISTENING"})
        setTimeout(async function () {
            await client.user.setActivity({name: `${client.users.cache.size} 유저들과 함께하는중`, type: 'LISTENING'})
        }, 5000)
    }, 10000)
})

client.on('message', msg => {
    handler(client, msg)
})

client.on('error', async err => {
    error(err)
})

client.on('warn', async w => {
    warn(w)
})

client.on('debug', async deb => {
    debug(deb)
})

client.login(config.bot.token)
