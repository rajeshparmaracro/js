// // const myfunc = () => {
// //   console.log("Hello") && console.log(" World");
// //   console.log("halo") || console.log(" Mr");
// // };

// // myfunc();

  
// // console.log("Message:" + nothing)

// // var s="876544 or 89898989?"
// // var pat=/\d{4}/;
// // console.log(s.match(pat));



// var str = "HELLO WORLD";
// console.log(str[0]);

//Destructuring of objects

let obj3 = {
    car: "Nano",
    ownerName: "Rajesh",
    isConfirmed:true
  
};
let{car, ownerName:name}=obj3;             

for (let myname in obj3) {
     console.log(myname);    

    console.log(obj3[myname]);
    }
