// function bat(man, maxPower) {
//     power = maxPower;
//     try {
//         man();
//     } finally {
//         power = 400;
//     }
//     console.log(power);
// }

// function man() {
//     try {
//         throw new Error();
//         power = 100;
//     } catch(e) {
//         power = 200;
//     } finally {
//         power = 300;
//     }
// }
// bat(man, 100);


let power = 666;
function man() {
    power = 10;
    console.log("Man's power is:",power);
    
}
function bat(spider) {
     power = 30;
    try {
        spider();
    } catch(e) {
        power = 20;
    }
    console.log("Bat's power is:",power); 
}


function spider() {
    bat(man);
}
spider();
console.log(power);