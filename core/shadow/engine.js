const exec = require('../execution/exec')
const price = require('../market/price')
const heat = require('../liquidityHeatmap/heatmap')

async function run() {

    const tokens = [
        'So11111111111111111111111111111111111111112', // SOL
        'Es9vMFrzaCERr9z8Yk9qP6KycdxY6z3n9JVpaz6RtWLp', // USDT
        'EPjFWdd5AufqSSqeM2q9sQ5Q1Q8sV5nZ4j8RJTz3r3s',  // USDC
        'DezXyYvYhGZ4sVt9qvK3P5dYy4j7k1F2rX8s9m1v3Q'   // random meme
    ]

    for (const t of tokens) {

        const m = await price.price(t)
        if (!m) continue

        const liquidity = m.liquidity?.usd || 0

        heat.update(t, liquidity)

        // 🔥 RELAXED CONDITION (IMPORTANT)
        const isHot = heat.hot(t) || Math.random() > 0.7

        if (!isHot) continue

        exec.exec(t, m)
    }
}

module.exports = { run }
