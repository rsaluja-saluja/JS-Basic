console.log('sum of array elements');
let ary = [1,2,5,7];
let sum = ary.reduce((a,b) => (a+b));
console.log(sum);
/////////////
// write function that works in both ways
// add(1,2)
// add(1)(2)

console.log('Closure concept');
let add = function(a,b) {
	if(b) {return a+b;}
	else {
		return (b) => a+b;
	}

}
console.log(add(1,2));
console.log(add(1)(2));
//////////////////////////

console.log("=== Add Generic ====")
let addGeneric = function(...args) {
	//console.log('Args:'+args+" length: "+args.length);
	if(!args.length) return 0;
	let result = args.reduce((a,b) => a+b);
	//console.log('result '+result);
	const sum = (...innerArgs) => {
		//console.log('innerArg:'+innerArgs);
		if(!innerArgs.length) return result;
		innerArgs.splice(0,0,result);
		//console.log('innerArgs: '+innerArgs+" length: "+innerArgs.length);
		return addGeneric(...innerArgs);
	}
	return sum;
}
console.log(addGeneric(1,2,3)());
console.log(addGeneric(1)(2)(3)());

console.log(addGeneric(1,2,3)(4)(5,6)(7)());
/////////////////

// array have 99 numbers out of 1 to 100 and 1 number is misisng
// array is unordered and need to find out the missing number.
console.log("==== missing number ====")
const arr = [1,5,7,9,2,3,6,8,10];
console.log(arr);
arr.sort((a,b) => a-b);
console.log(arr);
for(i=0;i<arr.length;i++) {
	if(arr[i] !== i+1) {
		console.log("Missing number is: "+(i+1));
		break;
	}
}
console.log("== missing number another way ==");
let total = 10*11/2; //n*(n+1)/2
let sumOfArr = arr.reduce((a,b) => a+b);
console.log("Missing number= "+(total-sumOfArr));

//////////////////
console.log(" === function decalarion and expression === ")
fun()
function fun() {
	console.log("FUnction");
}

//fun expression can be passed to another functkon
// fun1() // can be used only after declareation
let fun1 = function() {
	console.log("Fnction expresison")
}
fun1();

(function fun2() {
	console.log("Immediately invoked function expression");
}) ();
/////////////////////////////////

console.log('==== String reverse ===== ')
let str = "I love JavaScript";
console.log(str.split('').reverse().join('')); //tpircSavaJ evol I
console.log(str.split(" ").reverse().join(" ")); //JavaScript love I

/////////////////////
// til have no of coins each type have in box and needs to give back
// 20.47(20 dolars and 47 cents)
// write function that gives least no of coins to customer
// NOTTTTTTTTT COMPLETED
console.log("==== cashier ====")
const til = {
	penny:12,
	nickle:10,
	dime :2,
	quarter: 12,
	dollar:30
}

const value = {
	penny:1,
	nickle:5,
	dime :10,
	quarter: 25,
	dollar:100
}
let num = 20.47;

function money(num) {
	let cT = num *100; //2047
	let rem = cT%value.dollar; //47
	let dollarCoins = (cT - rem)/value.dollar; // 20

	let quarterCoins = Math.floor(rem / value.quarter); // 1
	rem = rem % value.quarter; // 22

	let dimeCoins = Math.floor(rem / value.dime); // 2
	rem = rem % value.dime; //2

	let nickleCoins = Math.floor(rem / value.nickle); // 0 
	rem = rem % value.nickle; //2

	let pennyCoins = rem;

	console.log(`dollarCoins: ${dollarCoins} quarterCoins: ${quarterCoins}`)
	console.log(`dimeCoins: ${dimeCoins} nickleCoins: ${nickleCoins} pennyCoins: ${pennyCoins}`)
	}
	money(40.47);