let fun = function(...n) {
	console.log(n);
}
fun(2,3,4);

let fun1 = (a,b,...n) => {
	console.log('a='+a+',b='+b+',n='+n);
}
fun1(2,4,3,4,5,6);

let a = [1,2,3];
let b = [4,5,6,7];
//Array.prototype.push.apply(a,b);
a.push(...b);
console.log(a);
