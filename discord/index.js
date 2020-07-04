const Discord = require('discord.js')
const ShardingManager = Discord.ShardingManager
const config = require('../config')
const path = require('path')

const manager = new ShardingManager(path.join(__dirname, 'main.js'), config.bot.shard)

manager.spawn(this.totalShards)
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
