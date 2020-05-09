let x = [1,2,3] + [4,5,6];
console.log(x); //1,2,34,5,6

let x1 = [...[1,2,3],...[4,5,6]];
console.log(x1); //[ 1, 2, 3, 4, 5, 6 ]

let x2 = String([...[1,2,3],...[4,5,6]]);
console.log(x2); //1,2,3,4,5,6

let obj = {
	a:1,
	b:2
}
console.log(Object.keys(obj));

console.log(Object.values(obj));
console.log(Object.entries(obj));

