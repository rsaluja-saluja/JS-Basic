console.log("1");

let id = setTimeout(()=>{
	console.log("2");
},0);

console.log("3");
console.log("4");
console.log("5");

let intervalId = setInterval(() => {
	console.log("interva 1 sec passed");
}, 1000);

setTimeout(() => {
	clearInterval(intervalId);
}, 5000);
