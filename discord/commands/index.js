const groups = []
//system
groups.push(
    {
        namespace: 'system',
        name: '시스템',
        commands: [require('./help/help.command')]
    }
)
//translate
groups.push(
    {
        namespace: 'translate',
        name: '번역',
        commands: [require('./translate/ko')]
    }
)

module.exports = groups