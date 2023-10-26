let numArr = [1, 2, 3, 4];
//let numArr = new Array(1,2,3,4);
let mpArr = ["Johnson", 105678, "Chicago"];

console.log(numArr[0]);//1
console.log(numArr[3]);//4
console.log(numArr[4]);//undefined



let colors = new Array(2);
console.log(colors.length);//2

//Assign values to an empty array using indexes
colors[0] = "Red";
colors[1] = "Green";
colors[2] = "BLue";
console.log(colors);//['Red','Green',Blue]
console.log(colors.length);//3


//spread turns array into the list of arguments
console.log(Math.max(...numArr));


//combining two arrays
let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [3,5,1,8,2,6]


let arrCopy = [...arr1];
arrCopy.push(4);
console.log(arrCopy);
//arrCopy becomes [3,5,1,4] and arr1 remains unaffected


let array3=[];
let array4=new Array();
console.log(array3.length);//0
console.log(array4.length);//0

let array5=[5];
let array6=new Array(5);
let array7=new Array(5,);
let array8=new Array(5,6,7)
console.log(array5.length);         //1
console.log(array6.length);         //5
console.log(array7.length);         //5
console.log(array8.length);         //3
console.log(array5);                //[5]
console.log(array6);                //[ <5 empty items> ]
console.log(array8);                //[5,6,7]


// [RN1] we have an array with the employee name and id
let empArr = ["Shaan", 104567];

let [empName, empId] = empArr;
console.log(empName);// Shaan
console.log(empId);// 104567


let [emName, , place] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
console.log(emName); // Shaan
console.log(place);// Bangalore

let [emNam, plac] = ["Shaan", 104567, "Bangalore"];
console.log(emNam);// Shaan
console.log(plac);//104567





for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//Red
//Orange
//Green



// iterates over array elements
for (let color of colors) {
    console.log(color);
}
//Red
//Orange
//Green

for (let color of colors) {
    console.log(typeof color);
}
// string
// number
// string

for (let color in colors) {
    console.log(typeof color);
}
// string
// string
// string





const x = ["a","b","C"] 
var[y,...z]=x;  
console.log(y);//a
console.log(z);//[ 'b', 'C' ]


var[y,...z]=[x];
console.log(y);//[ 'a', 'b', 'C' ]
console.log(z);//[]

 var[y,z]=x;
console.log(y);//a
console.log(z);//b

 var y,z=x;
 console.log(y);//a
console.log(z);//[ 'a', 'b', 'C' ]





