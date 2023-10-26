let x = "John";
let y = new String("John");

// here x and y are equal but not stricly equal



let text = "Apple, Banana, Kiwi";    
let part1 = text.slice(7, 13);//output: Banana    from index 7 to index 12 
let part2 = text.slice(7);//If you omit the second parameter, the method will slice out the rest of the string:
let part3 = text.slice(-12);//If a parameter is negative, the position is counted from the end of the string:
let part4 = text.slice(-12, -6);
let part5 = str.substring(7, 13);
let part6 = str.substr(7, 6);
let part = str.substr(7);//slice out the rest of string

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");//replace() method is case sensitive
let newText2 = text1.replace(/MICROSOFT/i, "W3Schools");//To replace case insensitive, use a regular expression with an /i flag (insensitive)

let text3 = "Please visit Microsoft and Microsoft!";
let newText3 = text3.replace(/Microsoft/g, "W3Schools");//To replace all matches, use a regular expression with a /g flag (global match):

// In 2021, JavaScript introduced the string method replaceAll():

// Example
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

// Example
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");


let text4 = "5";
let padded = text4.padStart(4,"x");// xxx5

let text5 = "54";
let padded2 = text5.padStart(4,"x");// xx54

let text6 = "5";
let padded3 = text6.padEnd(4,"x");//5xxx

let text7 = "HELLO WORLD";
let char = text7.charCodeAt(0);// output:72 it returns uniode of the letter present at the specified index 

//charAt() returns the letter at the specified index.

var str = "HELLO WORLD";
console.log(str[0]);//H

let text8 = "HELLO WORLD";
text8[0] = "A";    // Gives no error, but does not work