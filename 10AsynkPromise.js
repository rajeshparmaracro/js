//*******************************************First Thing*********************************************


// let ImHappy=true;


// function myChoice(){
//   return new Promise(
//     function(resolve,reject){
//       if(ImHappy){resolve("hi")}
//       else{reject(new Error("Go away, otherwise I will kill you")) ;   }
//     }
//     )
// }

// myChoice().then(
//   function(s){
//     console.log(s)
//   }).catch(
//      function(s){
//     console.log(s)})











//*****************************second Thing******************************************
function j1(){
  return new Promise(
    function(resolve,reject){
     setTimeout(function() {resolve("hello, I am resolved")}, 1000);
    }
    )
}


function j2(j1o){
  return new Promise(
    function(resolve,reject){
     setTimeout(function() {resolve( j1o)}, 2000);
    }
    )
}

// j1().then(function(asd){
//   console.log(asd)
// })


// j2(j1()).then(function(asd){
//   console.log(asd)
// })

// j1().then(function(asa){
//  return j2(asa)
// }).then(function(asd){
//   console.log(asd)})

// j2().then(function(asd){
//   console.log(asd)
// })


// j2(j1).then(function(asd){
//   console.log(asd)
// })


// j2(j1()).then(function(asd){
//   console.log(asd)
// })





//*****************************Third Thing******************************************
// function j1(){
//   return new Promise(
//     function(resolve,reject){
//      setTimeout(function() {resolve("hello, I am resolved")}, 1000);
//     }
//     )
// }


// function j2(j1o){
//   return new Promise(
//     function(resolve,reject){
//      setTimeout(function() {resolve( j1o + " Okay" )}, 2000);
//     }
//     )
// }

// j2(j1()).then(function(asd){
//   console.log(asd)
// })

// j2().then(function(asd){
//   console.log(asd)
// })

// j1().then(function(asa){
//  return j2(asa)
// }).then(function(asd){
//   console.log(asd)



