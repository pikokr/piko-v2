const pows = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸', '⁹']

module.exports = {
    name: '소인수분해',
    aliases: [],
    exec: async (msg, _, args) => {
        if (args.length === 0 || isNaN(args[0])) {
            return msg.channel.send('명령어 사용법: 피코야 소인수분해 <수인수분해할 수>')
        }
        let a = Number(args[0])
        pows
        await msg.channel.send(primeFactorization(a))
    }
}

function primeFactorization(x){
    let primeNumbers = [];
    let divisor;
    let squareRoot;
    let mok, nmg;

    do {
        divisor = 2;
        squareRoot = parseInt(Math.sqrt(x));

        do {
            if (divisor > squareRoot){
                divisor = x;
                break;
            }
            mok = parseInt(x/divisor);
            nmg = x - mok*divisor;
        }while(nmg != 0 && divisor++);

        primeNumbers.push(divisor);
    }while(x != divisor && (x = mok));

    return '`' + primeNumbers.join('*') + '`';
}