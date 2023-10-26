// function j1(){
//     setTimeout(function(){console.log("hello")},3000);
//   }
  
  
//   function j2(){
//     console.log("world");
//   }
  
  
// j1();
// j2();
//output: first j2's output will come and then j1's , this we do not want



// function j1(callback){
//     setTimeout(
//         function(){console.log("hello");callback()}
        
//     ,3000);
//   }
  
  
//   function j2(){
//     console.log("world");
//   }
  
  
// j1(j2);
