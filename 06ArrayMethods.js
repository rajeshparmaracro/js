let myArray = ["Android", "iOS", "Windows"];

console.log("Length = " + myArray.length);//Length = 3


myArray.push("Linux");//Linux

console.log(myArray);// ["Android","iOS","Windows","Linux"]

console.log(myArray.pop()); //Linux

console.log(myArray); // ["Android","iOS","Windows"]

console.log(myArray.shift()); 

console.log(myArray); //["iOS", "Windows"]

myArray.unshift("Android"); 

console.log(myArray);//["Android","iOS","Windows"]




myArray.splice(1, 0, "Linux"); 

console.log(myArray); // ["Android","Linux", "iOS", "Windows"]

myArray.splice(0, 2, "Java"); // ["Android","Linux"]

console.log(myArray); // ["Java","iOS", "Windows"]

console.log(myArray.slice(1,3));// ["iOS", "Windows"]

console.log(myArray);// ["Java","iOS", "Windows"]




let myArray1 = ["Android","iOS"];

let myArray2 =  ["Samsung", "Apple"];

let myArray3 =  ["Samsung", "Apple"];

console.log(myArray1.concat(myArray2));//["Android", "iOS", "Samsung", "Apple"]

console.log(myArray1.concat(myArray2, myArray3));//[ 'Android', 'iOS', 'Samsung', 'Apple', 'Samsung', 'Apple' ]

let newArr = [...myArray, ...myArray2, ...myArray3];

console.log(newArr);//[ 'Android', 'iOS', 'Samsung', 'Apple', 'Samsung', 'Apple' ]



console.log(myArray.indexOf("Java")); // 1

console.log(myArray.indexOf("Samsung")); //-1

myArray.unshift("Android"); 



let result = myArray.find(element => element.length > 5);

console.log(result); //Android 


let result1 = myArray.findIndex(element => element.length > 5);

console.log(result1) //0


let result2 = myArray.filter(element => element.length > 5);

console.log(result2)//["Android","Windows"]



myArray.forEach((element, index) => 

console.log(index + "-" + element));

//0-Android

//1-Java

//2-ios

//3-Windows



let numArr = [2, 4, 6, 8];

let result3 = numArr.map(num=>num/2);

console.log(result3);//[ 1, 2, 3, 4 ]


console.log(myArray.join()); // Android,Java,iOS,Windows



console.log(myArray.join('-')); // Android-Java-iOS-Windows



console.log(numArr.reduce(

    (accumulator, currentVal) => 
    
    accumulator + currentVal));
    
    // 10
    
    // 5 + 1 + 2 + 3 + 4
    
    console.log(numArr.reduce(
    
    (accumulator, currentVal) => 
    
    accumulator + currentVal,5));
    
    // 15



    
    let cz = [1, 2, 3, 4];
    cz.map((_) => Math.pow(_, 2));
    console.log(cz);
    console.log(cz.map((_) => Math.pow(_, 2)));

    let b = [];
    var c = (...d) => {
       o = [...d];
       return o.filter((re) => re.includes("Script"));
     };




     //push
     //pop
     //unshift
     //shift
     //slice
     //splice
     //includes
     //find
     //filter
     //forEach
     //map
     //indexof
     //findindexof
     //reduce
     //concat
     //concat using spread operator
     //join