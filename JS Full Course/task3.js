

let bill1 = 124;
let bill2 = 48;
let bill3 = 268;

function CalculateTip(bill){
    if(bill <50){
        return bill * 20/100;
    }else if(bill >=50 && bill <200){
        return bill * 15/100;
    }else{
        return bill * 10/100;
    }
}

function calcBill(bill){
    return CalculateTip(bill) + bill;
}

var tips = [];
var totalBill = [];

tips.push(CalculateTip(bill1));
tips.push(CalculateTip(bill2));
tips.push(CalculateTip(bill3));

totalBill.push(calcBill(bill1));
totalBill.push(calcBill(bill2));
totalBill.push(calcBill(bill3));

console.log(tips);
console.log(totalBill);


