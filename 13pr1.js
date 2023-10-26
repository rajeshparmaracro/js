


let power = 666;
function man() {
    power = 10;
    console.log("Man's power is:",power);
    
}
console.log(power);//666
man()//Man's power is: 10



let powe = 666;
function man1() {
    powe = 10;
    console.log("Man's power is:",powe);
    
}
man1();//Man's power is: 10
console.log(powe);//10


let pow = 666;
function man2() {
    let pow = 10;
    console.log("Man's power is:",pow);
    
}
man2();//Man's power is: 10
console.log(pow);//666



function bat(spider) {
    let power = 30;
    try {
        spider();
    } catch(e) {
        power = 20;
    }
    console.log("Bat's power is:",power); 
}

 bat(man);
