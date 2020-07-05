const embedBase = require('../../utils/embed').baseEmbed
const translate = require('@k3rn31p4nic/google-translate-api')
const ISO = require('iso-639-1')


async function trans_ko(msg, client, args) {
    if (args.length === 0) {
        const embed = embedBase()
        embed.setFooter(msg.author.tag, msg.author.avatarURL())
        embed.addField("한국어로 번역하기(언어 자동 인식)", "피코야 한글 <번역할 단어/문장>")
        return msg.channel.send(embed)
    }
    const translated = await translate(args.join(' '), {to: 'ko'})
    const embed = embedBase()
    embed.setFooter(msg.author.tag, msg.author.avatarURL())
    embed.addFields(
        [
            {name: '번역 전 언어', value: `${ISO.getName(translated.from.language.iso)}(${translated.from.language.iso})`},
            {name: '번역 결과', value: translated.text}
        ]
    )
    await msg.channel.send(embed)
}


module.exports = {
    exec: trans_ko,
    name: '한글',
    aliases: []
}