let name = "dewald";

function funct1 (){

    funct2();
    console.log("Hi " + name + " from funct 1");
    
}

function funct2 (){
    
    funct3();
    console.log("Hi " + name + " from funct 2");
    
}

function funct3(){
    console.log("Hi " + name + " from funct 3");

}

funct1();
