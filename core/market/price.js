const axios=require('axios')

async function price(token){

try{

const r=await axios.get('https://api.dexscreener.com/latest/dex/tokens/'+token)
return r.data.pairs?.[0]

}catch{

return null

}

}

module.exports={price}
