let johnFam = [124,48,268,180,42];

let johnTip = [];


var tipPercentage;



function calcTip(spend){
    if(spend<50){
        tipPercentage = 0.2;
    } else if(spend>=50 && spend < 200){
        tipPercentage = 0.15;
    } else{
        tipPercentage = 0.10;
    }
    return spend * tipPercentage;
}

for(var i = 0 ; i < johnFam.length; i++){
    johnTip.push(calcTip(johnFam[i]))
    johnTotal.push(johnFam[i] + calcTip(johnFam[i]))
}

console.log(johnTip.calcTip(120));