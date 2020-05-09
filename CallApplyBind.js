const obj = {
	num:2
};

const obj1 = {
	value:3
}
let func = function(a,b) {
	//console.log(this.num); // undefined
	return this.num + a+b;
}

console.log(func(5)); // NaN
console.log(func.call(obj,5,7)); // 14
console.log(func.call(obj1,6,4)); // NaN

console.log("Apply");
const arr = [2,4,6];
console.log(func.apply(obj,arr));

console.log("bind");
let bound = func.bind(obj);
console.log(bound(arr));
console.log(bound(3,6));