let inHeight = window.innerHeight; 
console.log(" Inner height: " + inHeight); 
//Returns Inner height: 402 


let inWidth = window.innerWidth; 
console.log(" Inner width: " + inWidth); 
//Returns Inner width: 1366 


let outHeight = window.outerHeight; 
console.log(" Outer Height: " + outHeight);
//Returns Outer height: 728


let outWidth = window.outerWidth; 
console.log("Outer width of window: " + outWidth); 
//Returns Outer width: 1366 

// window.open("http://www.google.com"); 

// window.close();




localStorage.setItem('username','Bob'); 
console.log("Item stored in localStorage is" + localStorage.getItem('username')); 
//Returns Item stored in localStorage is Bob 



sessionStorage.setItem('password', 'Bob@123'); 
console.log("Item stored in sessionStorage is " + sessionStorage.getItem('password')); 
//Returns Item stored in sessionStorage is Bob@123 




// history.length();

// history.back();

// history.forward(); 

// history.go();



navigator.appName; 
//Browser's name: Netscape 

console.log(navigator.appVersion); 
//5.0 (Windows NT 10.0; Win64; x64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/83.0.4103.106 Safari/537.36 


console.log(navigator.platform); 
//Browser's platform: Win 32 


console.log(navigator.userAgent); 
//Browser's useragent: Mozilla/5.0 5.0 (Windows NT 6.1; WOW64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/53.0.2785.116 Safari/537.36 


console.log(location.href); 
//Returns http://localhost:8080/JS_Demos/myLocationFile.html 



console.log(location.hostname); 
//Returns localhost 



console.log(location.port) 
//Returns 8080 



console.log(location.pathname); 
//Returns /JS_Demos/myLocationFile.html 


location.assign('http://www.facebook.com'); 
//Opens facebook page 


location.reload(); 
//Current document is reloaded 

