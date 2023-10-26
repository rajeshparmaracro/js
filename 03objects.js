

let anything = {
    car: "baleno",
    ownerName: "Vishal"
  
};

console.log(anything);// { car: 'baleno', ownerName: 'Vishal' }
console.log(anything.car);// baleno
console.log(anything["car"]);// baleno
console.log(anything.ownerName);// Vishal
console.log(anything.price);// undefined

anything.price="10000000";
console.log(anything);// { car: 'baleno', ownerName: 'Vishal', price: '10000000' }
console.log(anything.price);// 10000000

anything["year"]="2022";
console.log(anything);// { car: 'baleno', ownerName: 'Vishal', price: '10000000', year: '2022' }
console.log(anything.year);// 2022
console.log(anything["year"]);// 2022





let makeobj="newobj";
let ab = {
    car: "TATA NANO",
    ownerName: "Hemant",
    [makeobj]: "added"
};
ab["Year"]=2015;
console.log(ab);// { car: '"TATA NANO', ownerName: 'Hemant', newobj: 'added', Year: 2015 }

// let makeobj1="newobj1";
// ab[makeobj1]="Hello.....";
// console.log(ab);//{ car: 'Toyoto', ownerName: 'Hemant', newobj: 'added', Year: 2015,  newobj1: 'Hello.....' }



//Spread Operator
let combinedObject={
    ...anything,
    ...ab
}
console.log(combinedObject);

// {
//   car: 'TATA NANO',
//   ownerName: 'Hemant',
//   price: '10000000',
//   year: '2022',
//   newobj: 'added',
//   Year: 2015
// }


let s={
  name:"k",
  sc:200,
}

function sd(sc){
  console.log(sc)
}
sd(s);

//output you know....or find it




//Destructuring of objects

let obj3 = {
    car: "Nano",
    ownerName: "Rajesh",
    isConfirmed:true
  
};

// let name = "Rajesh";
// let name =obj3.ownerName;

// let {ownerName:name}=obj3; 

// let car=obj3.car;

let{car, ownerName:name}=obj3;                //This line means--> let car=obj3.car; let name =obj3.ownerName;
// let {car,ownerName}=obj3;                 //This line means--> let car=obj3.car; let ownerName =obj3.ownerName;
// let{car:myCar, ownerName:name}=obj3;     //This line means--> let myCar=obj3.car; let ownerName =obj3.ownerName;

console.log(name);//Rajesh
console.log(car);//Nano




for (let myname in obj3) {
    console.log(myname);    

    console.log(obj3[myname])
    }

    // car
    // Nano
    // ownerName
    // Rajesh
    // isConfirmed



let employee={id:454,name:"Riyo", age:11, };

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(element);
        
    }
}


for (let key in employee) {
       console.log(key);
        console.log(employee[key]);
        
    }


console.log(Object.keys(employee));

Object.keys(employee).forEach((key)=>{console.log(key ,":" ,employee[key]);});


Object.values(employee).forEach((value)=>{console.log(value);});


Object.entries(employee).forEach((arr)=>console.log(arr[0],":",arr[1]))

