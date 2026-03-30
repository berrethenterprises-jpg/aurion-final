const hist={}

function update(t,l){

if(!hist[t]) hist[t]=[]

hist[t].push(l)

if(hist[t].length>5) hist[t].shift()

}

function hot(t){

const h=hist[t]

if(!h||h.length<2) return false

return (h[h.length-1]-h[0])>5000

}

module.exports={update,hot}
