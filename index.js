require('./discord')

process.on('unhandledRejection', reason => {
    console.error(reason)
})
process.on('uncaughtException', err => {
    console.error(err.stack)
})
process.on('warning', err => {
    console.warn(err.stack)
})
process.on('exit', () => {
    console.log('Process destroyed')
})