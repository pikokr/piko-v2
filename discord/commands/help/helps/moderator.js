const embed = require('../../../utils/embed').baseEmbed()

embed.setTitle("관리 기능")

embed.addFields(
    [
        {name: "경고", value: "피코야 경고 @멘션 [사유] - 경고를 1회 추가합니다.\n" +
                "피코야 경고초기화 [@멘션] - 경고 초기화 명령어입니다.\n" +
                "피코야 경고제거 @멘션 - 멘션된 유저의 경고를 1 제거합니다."}
    ]
)

module.exports = [
    {
        name: '관리',
        embed: msg => {
            embed.setFooter(msg.author.tag, msg.author.avatarURL())
            return embed
        }
    }
]