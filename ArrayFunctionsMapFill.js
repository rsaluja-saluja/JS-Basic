let arr = [2,3,5,7,6];

function doubler(x) {
	return x*2;
}
console.log('Array: '+arr);
// Map
let doubleArr = arr.map(doubler);
console.log("Map: "+doubleArr);

// Map with annonymous function
// let powerArr = arr.map((x) => {
// 	return x*x;
// });
let powerArr = arr.map(x => x*x);
console.log('Map Power Arr: '+powerArr);

///////////////////////////

console.log('Fill Array function.');
let val = [1,2,3,4,5];
val.fill(0);
console.log('Filled with 0: ',val);

val.fill(Math.floor(Math.random()*10));
console.log("Filled with same ramdom no: "+val);

let array = val.map(x => Math.floor(Math.random()*10));
console.log("Filled with different ramdom no: "+array);