let john = {name: "John",
            weight: 100,
            height: 1.91,
            calcBMI: function(){
                this.bmi = this.weight / (this.height * this.height);
                return this.bmi;
            } 
            };

let brian = {name:"Brian",
            weight: 90,
            height: 1.80,
            calcBMI: function(){
                this.bmi = this.weight / (this.height * this.height);
                return this.bmi;
            } 
            };

john.calcBMI();
brian.calcBMI();

console.log(john);
console.log(brian);
