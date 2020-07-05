const embed = require('../../../utils/embed').baseEmbed()

embed.setTitle("관리 기능")

embed.addFields(
    [
        {name: "한글로 번역", value: '피코야 한글 <번역할 단어/문장>'}
    ]
)

module.exports = [
    {
        name: '번역',
        embed: msg => {
            embed.setFooter(msg.author.tag, msg.author.avatarURL())
            return embed
        }
    }
]