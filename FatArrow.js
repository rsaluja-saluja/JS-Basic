// let square = function(a) {
// 	return a*a;
// }

// let square = a => a*a;
let square = (a) => {return a*a};
console.log(square(5));

let x = function() {
	console.log(arguments[0]); //arguments wont work with Fat so spread operator can be used
}
x(1,2,3);

let x1 = (...n) => {console.log(n[0])};
x1(2,3,4);