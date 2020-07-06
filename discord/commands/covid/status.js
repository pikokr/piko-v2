const baseEmbed = require('../../utils/embed').baseEmbed
const fetch = require('node-fetch')

async function covidStats(msg) {
    const res = (await (await fetch('http://api.corona-19.kr/korea/?serviceKey=7a6b9040c3bf46a565e875fa3721a4587')).json())
    const embed = baseEmbed()
    embed.setAuthor(msg.author.tag, msg.author.avatarURL())
    embed.setTitle('국내 코로나 현황')
    embed.addFields([
        {
            name: '총합',
            value: res.TotalCase,
            inline: true
        },
        {
            name: '완치',
            value: res.TotalRecovered,
            inline: true
        },
        {
            name: '사망',
            value: res.TotalDeath,
            inline: true
        },
        {
            name: '현재 확진자',
            value: res.NowCase,
            inline: true
        }
    ])
    await msg.channel.send(embed)
}

module.exports = {
    exec: covidStats,
    name: '코로나',
    aliases: []
}