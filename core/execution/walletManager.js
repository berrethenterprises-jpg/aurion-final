const wallets=[]
const COUNT=5
const TOTAL=1000

function init(){
for(let i=0;i<COUNT;i++){
wallets.push({id:i,balance:TOTAL/COUNT})
}
}

function pick(){
return wallets.sort((a,b)=>b.balance-a.balance)[0]
}

function update(id,pnl){
const w=wallets.find(x=>x.id===id)
if(w) w.balance+=pnl
}

function total(){
return wallets.reduce((a,b)=>a+b.balance,0)
}

module.exports={init,pick,update,total}
