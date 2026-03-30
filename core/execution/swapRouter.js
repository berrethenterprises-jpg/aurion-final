function route(price,liq){

if(!price) return null

const routes=[
price*(1+Math.random()*0.01),
price*(1+Math.random()*0.008),
price*(1+Math.random()*0.012)
]

const best=Math.min(...routes)

const slip=Math.min(0.05,1000/(liq||100000))

if(Math.random()<0.08) return null

return best*(1+slip)

}

module.exports={route}
