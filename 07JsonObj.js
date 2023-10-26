



let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}'
let obj=JSON.parse(stringJSON);
console.log(obj);
 //OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 

let dataJSON={firstName:"Sam",lastName:"Fernandes"};
let obj1=JSON.stringify(dataJSON);
console.log(obj1);
// //OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 


// let data = {
//     "customers": [
//         { "firstName": "Bob", "lastName": "Morry" },
//         { "firstName": "Albert", "lastName": "Smith" },
//         { "firstName": "Kate", "lastName": "Ward" }
//     ]
// };

// let obj2=JSON.parse(data);
// console.log(obj2);