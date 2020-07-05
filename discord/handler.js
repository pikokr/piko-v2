const config = require('../config')
const groups = require('./commands')


async function handler(client, msg) {
    const prefix = config.bot.prefix
    if (!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    const commands = []
    groups.forEach(group => {
        group.commands.forEach(cmd => {
            commands.push(cmd)
            if (cmd.aliases) {
                cmd.aliases.forEach(alias => {
                    commands.push({exec: cmd.exec, name: alias, aliases: []})
                })
            }
        })
    })
    const cmds = commands.filter(r => r.name.startsWith(cmd))
    if (cmds.length !== 0) {
        if (msg.channel.topic && msg.channel.topic.includes('-명령어금지')) {
            return msg.channel.send('이 채널에서는 명령어를 사용할 수 없어요!')
        }
        cmds.forEach(command => {
            if (command.permissions && msg.member) {
                command.permissions.forEach(perm => {
                    if (!msg.member.hasPermission(perm)) {
                        return msg.chanenl.send('이 작업을 실행할 권한이 없습니다.')
                    }
                })
                command.exec(msg, client, args)
            }
        })
    }
}


module.exports = handler