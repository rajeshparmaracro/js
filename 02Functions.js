function hello(){
  console.log("Hello");
}
hello();



function hi(why){
  console.log("Hi", why, " \n what are you doing here?");
  console.log("Hi"+ why + " \n Why are you doing ?");
  console.log(`Hi ${why} \n DO not do it ?`);

}

let askfsjs= "hello" + "Hi";
let anotherlet= "jai ho " + askfsjs;
console.log(anotherlet);


let ab="amma";
var bc="bc";



function check(){
  console.log("inside check");
  console.log(ab);

  let abc="abc";
  var cde="cde";

  if(true){
    let bom="Dom";
    var mom="mom";
   console.log("inside if");
  
  }

  console.log(mom);
  // console.log(bom);//You will get error
}

check();




  const myfunc = () => {
        console.log("Hey") && console.log(" bro");
        console.log("Nothing") || console.log(" HAppened");
      };

      myfunc();
  



      var t="o";

      function lg(){
        console.log(t);
        }
      lg()    //o

      function lgt(){
        console.log(t);//undefined
        var t="i";
        console.log(t);//i
      }
      lgt() 
      console.log(t) //0
