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
groups.push(
    {
        namespace: 'covid',
        name: '코로나',
        commands: [require('./covid/status')]
    }
)
groups.push({
    namespace: 'math',
    name: '수학',
    commands: [require('./math/prime')]
})

module.exports = groups