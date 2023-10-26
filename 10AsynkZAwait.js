async function hello() {
    //Value will be wrapped in a resolved promise and returned
    return "Hello Async";
}
hello().then(val => console.log(val)); // Hello Async


async function hell() {
    //Promise can be returned explicitly as well
    return Promise.resolve("Hello Async");
}
hell().then(val => console.log(val)); // Hello Async


function sayAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}
async function helloh() {
	//wait until the promise returns a value
	var x = await sayAfter2Seconds("Hello Async/Await");
	console.log(x); //Hello Async/Await
}
helloh();



// function f1(){
//     let promise = Promise.resolve(3);
//     let result = await promise;

// }