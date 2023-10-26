

// Some of the other properties of the 'document' object to access the HTML element are: 

// the body returns body element. Usage: document.body; 

// the forms return all form elements. Usage: document.forms; 

// the head returns the head element. Usage: document.head; 

// the images return all image elements. Usage: document.images; 

// var a=document.getElementById('p1'); 
// var b =document.getElementsByTagName('p');
// var b =document.getElementsByTagName('p')[0];
// var c = document.getElementsByClassName('myClass'); 
// document.querySelectorAll("p.blue").innerHTML="hello";


  //  document.getElementById("heading1").innerHTML;
  //  document.getElementById.innerHTML = "Heading generated dynamically" 

// document.getElementById("heading1").innerHTML = "Heading generated dynamically";
document.getElementById("heading1").innerText ="Heading generated dynamically";

document.getElementById("div5").style.color = "red"; //It will work
document.getElementsByClassName("div2").style.color = "red"; //does not work

// console.log(document.getElementById("div1").attributes[0].value );
// document.getElementById("div1").setAttribute('class', 'div2');
// console.log(document.getElementById("div1").attributes[1].value );
// console.log(document.getElementById("div1").attributes[2].value );






// console.log( document.body.parentNode );
// console.log(document.body.childNodes );
//  console.log(document.getElementById("div1").firstChild);
//  console.log(document.getElementById("div1").lastChild);


//   let elem=document.getElementById("heading1").nextSibling;
//    console.log(elem);

//    console.log(document.getElementById("para1").previousSibling); 

//        Similar to all these properties of Node object, 
//         you also have properties such as parentElement,
//         firstElementChild, lastElementChild, nextElementSibling and
//          previousElementSibling.

function createNew(){
let newElement =document.createElement('span'); 
let newTextElement = document.createTextNode('The span is added just now');
newElement.appendChild(newTextElement);
document.getElementById('div1').appendChild(newElement);


}

function removeOld(){
  document.getElementById('div1').removeChild(document.getElementById('para5'));
}

document.getElementById('para1').onclick=function(){
  alert('Paraoneclicked');
   }
   //OR   
   document.getElementById('para2').addEventListener('click',function(){
   alert('Paratwoclicked');}
   ,false)
   


 function executeMe(event) {
            alert(event.target.nodeName)
        }

//alert box shows P ID="PARA1" 
event.preventDefault();



  function a(){
        var b={
           p1:function(){return this.p2},
           p2:"hey",
         }
          console.log(typeof b.p1);//alert with this as well
       }
       a()
       
      //  document.write("a"+ document.write("hey"))