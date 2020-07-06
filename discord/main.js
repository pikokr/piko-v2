const Discord = require('discord.js')
const {Client} = Discord
const config = require('../config')
const debug = require('debug')('DEBUG')
const error = require('debug')('ERROR')
const warn = require('debug')('WARN')
const handler = require('./handler')
const client = new Client(config.bot.options)
const utils = require('../utils')
const knex = utils.database

global.fetch = require('node-fetch')

client.on('ready', async () => {
    if (!client.shard) {
        console.error('shard only')
        process.exit(0)
    }
    const g = await knex('guilds')
    client.guilds.cache.forEach(async guild => {
        if (!g.find(r => r.id === guild.id)) {
            console.log(`[INSERT] NEW GUILD: ${guild.name}(${guild.id})`)
            await knex('guilds').insert({id: guild.id})
        }
    })
    console.log(`Shard ${client.guilds.cache.first().shardID} ready`)
    if (client.guilds.cache.first().shardID === 0) {
        setInterval(async function () {
            let guildCount = (await client.shard.fetchClientValues('guilds.cache.size')).reduce((prev, guildCount) => prev + guildCount, 0)
            await client.user.setActivity({name: `${guildCount}개 서버에 참여중`, type: "LISTENING"})
            setTimeout(async function () {
                let userCount = (await client.shard.fetchClientValues('users.cache.size')).reduce((prev, userCount) => prev + userCount, 0)
                await client.user.setActivity({name: `${userCount} 유저들과 함께하는중`, type: 'LISTENING'})
            }, 5000)
        }, 10000)
    }
})

client.on('guildCreate', async guild => {
    const g = await knex('guilds')
    if (!g.find(r => r.id === guild.id)) {
        console.log(`[INSERT] NEW GUILD: ${guild.name}(${guild.id})`)
        await knex('guilds').insert({id: guild.id})
    }
})

client.on('guildDelete', async guild => {
    await knex('guilds').delete().where('id', guild.id)
})

client.on('message', msg => {
    handler(client, msg)
})

client.on('error', async err => {
    console.error(err)
    error(err)
})

client.on('warn', async w => {
    warn(w)
})

client.on('debug', async deb => {
    debug(deb)
})

client.login(config.bot.token)
