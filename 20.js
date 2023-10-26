
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





