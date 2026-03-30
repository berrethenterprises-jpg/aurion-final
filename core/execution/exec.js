const router=require('./swapRouter')
const jito=require('./jitoExecutor')
const wallets=require('./walletManager')

function exec(token,market){

const w=wallets.pick()

const routed=router.route(market.priceUsd,market.liquidity?.usd)

if(!routed) return

jito.send({token,price:routed})

w.entry=routed
w.token=token
w.time=Date.now()

}

module.exports={exec}
