// let dateObject1 = new Date(); 
// console.log("Date is: " + dateObject1);
// //OUTPUT: Date is: Thu Jun 18, 2020, 22:17:36 GMT+0530 (India Standard Time) 


// let  dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000); 
// console.log("Date is: "+dataObject2); 
// //OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 





// let a=new Date(2020);
// console.log(a);
// // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)

// let a=new Date(1789,01);
// console.log(a);
// // Sun Feb 01 1789 00:00:00 GMT+0553 (India Standard Time)

// let a=new Date(02,02);
// console.log(a);
// // Sat Mar 01 1902 00:00:00 GMT+0521 (India Standard Time)




// let a=new Date(123,02);
// console.log(a);
// // Mon Mar 01 0123 00:00:00 GMT+0553 (India Standard Time)

// let a=new Date(12,02);
// console.log(a);
// // Fri Mar 01 1912 00:00:00 GMT+0530 (India Standard Time)


// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date("2022-03-25");

// Examples
// 01 January 1970 plus 100 000 000 000 milliseconds is:

// const d = new Date(100000000000);
// January 01 1970 minus 100 000 000 000 milliseconds is:

// const d = new Date(-100000000000);
// January 01 1970 pluss 24 hours is:

// const d = new Date(24 * 60 * 60);
// // or
// const d = new Date(86400000);
// 01 January 1970 pluss 0 milliseconds is:

// const d = new Date(0);



// Displaying Dates
// JavaScript will (by default) output dates in full text string format:

// Example
// Thu Nov 24 2022 14:11:39 GMT+0530 (India Standard Time)
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

// Example
// const d = new Date();
// d.toString();
// The toDateString() method converts a date to a more readable format:

// Example
// const d = new Date();
// d.toDateString();
// The toUTCString() method converts a date to a string using the UTC standard:

// Example
// const d = new Date();
// d.toUTCString();
// The toISOString() method converts a date to a string using the ISO standard:

// Example
// const d = new Date();
// d.toISOString();




// let  dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000); 





// let dateObject1 = new Date(); 
// console.log("Date is: " + dateObject1.getDate());                        // Date is: 18 
// console.log("Day is: " + dateObject1.getDay());                         // Day is: 4 
// console.log("Year is: " + dateObject1.getYear());                      // Year is: 120 
// console.log("FullYear is: " + dateObject1.getFullYear());             // FullYear is: 2020
// console.log("Horrs: " + dateObject1.getHours());                     // Hours: 22 
// console.log("Month is: " + dateObject1.getMonth());                 // Month is: 5 
// console.log("Time is: " + dateObject1.getTime());                  // Time is: 1592499518512 
// console.log("Millisecond: " + dateObject1.getMilliseconds());     // Millisecond: 512 
// /* 
// OUTPUT: 











// // let dateObject1 = new Date(); 
// // dateObject1.setDate(3); 
// // dateObject1.setYear(1996); 
// // dateObject1.setHours(8); 
// // dateObject1.setMonth(7); 
// // dateObject1.setMilliseconds(2000); 
 
// // console.log("Date is: " + dateObject1.getDate()); 
// // console.log("Year is: " + dateObject1.getYear()); 
// // console.log("Hours: " + dateObject1.getHours()); 
// // console.log("Month is: " + dateObject1.getMonth()); 
// // console.log("Millisecond: " + dateObject1.getMilliseconds()); 
// /* 
// OUTPUT: 
// Date is: 3 
// Year is: 96 
// Hours: 8 
// Month is: 7 
// Millisecond: 0 
// */ 


// let a=new Date();
// a.setFullYear(2022,8,9);
// console.log(a);
// Fri Sep 09 2022 21:15:33 GMT+0530 (India Standard Time)