let arr = [5,4,3,2,6,7,8,10,12,13,11,8,4];

function isEven(val) {
	let even = val %2 ?  false :  true;
	return even;
}

let evenArr = arr.filter(isEven);
console.log(evenArr);

let oddArr = arr.filter((val) => val%2 ? true : false);
console.log(oddArr);

let oddArr1 = arr.filter(val => val%2 );
console.log(oddArr);

let valArr = [4,1,undefined,3,7,2];
let vals = valArr.filter(x => x);
let vals1 = valArr.filter(x => !x);
console.log(vals);
console.log(vals1);

let str = 'It was   dark and stormy night';
let strArr = str.split(/\W+/).filter(s => s.length>3);
console.log(strArr);
