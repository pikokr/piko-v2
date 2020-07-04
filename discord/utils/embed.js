const discord = require('discord.js')


exports.baseEmbed = function () {
    const embed = new discord.MessageEmbed()
    embed.setTimestamp(new Date())
    embed.setColor('#80ffb5')
    return embed
}