const groups = []
groups.push(
    {
        namespace: 'system',
        name: '시스템',
        commands: [require('./help/help.command')]
    }
)

module.exports = groups