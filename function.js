// Object.prototype.myFunction = function() {
// 	console.log('this is new function')
// }
function func() {
	console.log("Hello");
}


//func();
console.log(func);
console.log(func.prototype)
func.prototype.test="Hello From function protoype";
console.log(func.prototype);

var fun1 = new func();
var fun2 = new func();
fun1.myFunction()
console.log(fun1.__proto__);
console.log(fun2.__proto__.test);
console.log(fun2.test);

console.log(fun2.__proto__.constructor);
var fun3 = new fun2.__proto__.constructor;
console.log(fun3.test);