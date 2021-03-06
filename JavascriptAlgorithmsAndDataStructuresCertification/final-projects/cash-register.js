const currencyValue = {
    "ONE HUNDRED": 100.0,
    "TWENTY": 20.0,
    "TEN": 10.0,
    "FIVE": 5.0,
    "ONE": 1.0,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL" : 0.05,
    "PENNY" : 0.01  
}


const makeChange = (toChange, cid) => {
    const drawer = cid.reverse();
    let remainder = toChange;
    let change =  drawer.map((slot) => { 
        //slot format: ["DENOMINATION", quantaty]
        const faceValue = currencyValue[slot[0]];
        const coinsNeeded = Math.floor(remainder / faceValue);
        const coinsInDrawer =  slot[1]  / faceValue; 
        const coinQuant = Math.min(coinsNeeded,coinsInDrawer);
        
        remainder =  (remainder - (coinQuant * faceValue)).toFixed(2); 
        return coinQuant !== 0 ? [slot[0], coinQuant * faceValue] : "" ;
    }).filter((x) => x !== "");
    
    return remainder === "0.00" ? change : [];
}



const addDrawer = (drawer) =>  drawer.reduce((a,slot) => a + slot[1], 0);
  

function checkCashRegister(price, cash, cid) {
  let change = makeChange(cash - price, cid);   
    if (addDrawer(change) === addDrawer(cid)){
      change = cid.reverse(); 
      return {status: "CLOSED", change};
    } else if (change.length === 0){          
        return  {status: "INSUFFICIENT_FUNDS", change};
    } else {
        return {status: "OPEN", change};;
    }
}
 

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));

 console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))

 console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])))
