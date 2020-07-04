const discord = require('discord.js')
const embedBase = require('../../utils/embed').baseEmbed
const helps = require('./helps')


async function help(msg, client, args) {
    if (args.length === 0) {
        const embed = embedBase()
        embed.setTitle("도움말")

        embed.addFields([
            {name: '관리 기능', value: '피코야 도움말 관리', inline: true},
            {name: '놀이 기능', value: '피코야 도움말 놀이', inline: true},
        ])
        embed.setFooter(msg.author.tag, msg.author.avatarURL())
        return msg.channel.send(embed)
    }
    const h = helps.find(r => r.name === args.join(' '))
    if (!h) {
        return msg.channel.send(`도움말 \`${args.join(' ')}\`을(를) 찾을 수 없습니다.`)
    }
    await msg.channel.send(h.embed(msg))
}


module.exports = {
    exec: help,
    name: '도움말',
    aliases: []
}