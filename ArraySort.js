let str = 'It was   dark and stormy night';
let strArr = str.split(/\W+/).filter(s => s.length>3);
console.log(strArr);

let sortArray = str.split(/\W+/).sort();
console.log(sortArray);

let sortArrayLengthBased = str.split(/\W+/).sort((val1,val2) => 
						val1.length-val2.length);
console.log(sortArrayLengthBased);

let objArr = [
	{x:4,y:7 },
	{x:6,y:3 },
	{x:2,y:9 },
	{x:9,y:5 },
];

function compare(val1,val2) {
	return val1.y-val2.y;
}
console.log(objArr);
console.log(objArr.sort(compare));

objArr.sort((val1,val2) => val1.x-val2.x);
console.log(objArr);
///////////////
console.log('### Arry.sort bydefault always sort as string ===')
let arr = [1,5,9,15,2,30,17,45]
console.log(arr.sort());

console.log(arr.sort((a,b) => {
	return a<b;
}))
console.log(arr.sort((a,b) => {
	return a>b;
}))