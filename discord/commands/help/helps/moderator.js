const embed = require('../../../utils/embed').baseEmbed()

embed.setTitle("관리 기능")

module.exports = [
    {
        name: '관리',
        embed: msg => {
            embed.setFooter(msg.author.tag, msg.author.avatarURL())
            return embed
        }
    }
]