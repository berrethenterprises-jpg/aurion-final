const exec = require('../execution/exec')
const price = require('../market/price')
const heat = require('../liquidityHeatmap/heatmap')

async function run(){

    const tokens = ['So11111111111111111111111111111111111111112']

    for(const t of tokens){

        const m = await price.price(t)

        if(!m) continue

        heat.update(t, m.liquidity?.usd || 0)

        if(!heat.hot(t)) continue

        exec.exec(t, m)

    }

}

module.exports = { run }
