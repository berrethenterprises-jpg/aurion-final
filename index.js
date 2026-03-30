require('dotenv').config()

const engine = require('./core/shadow/engine')
const wallets = require('./core/execution/walletManager')

wallets.init()

console.log('AURION FINAL (paper)')

setInterval(async () => {
    await engine.run()
    console.log('Balance:', wallets.total())
}, 15000)
