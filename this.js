//global scope
this.table = 'window table';
console.log(this.table);
//console.log(windows.table); // would work only on browser as window is global scope for browser
const cleanTable = function(soap) {
	console.log(`Cleaning ${this.table} using ${soap}`); // print undefined instead of window table as function dont know this
}

//
this.garage = {
	table: 'garage table',
	cleanTable() {
		console.log(`Cleaning ${this.table}`)
	}
};
console.log(this.garage.table);

 let johnsRoom = {
	table: 'Johns table',
	cleanTable() {
		console.log(`Cleaning ${this.table}`)
	}
};
//console.log(this.johnsRoom.table); // won't work as johnsroom is private var
console.log(johnsRoom.table);

johnsRoom.cleanTable();
this.garage.cleanTable();
cleanTable('some soap'); // print undefined instead of window table as function dont know this
cleanTable.call(this,'some soap'); //print Cleaning window table
cleanTable.call(this.garage,'some soap'); // no need to define inside the object, outer fun can be used by oassing the object
cleanTable.call(johnsRoom,'some soap');

//////////////////////

///// this inside inner function ////
// Sol 1 - that = this and use that in inner fun
// Sol 2 - 	innerFunction.call(this,soap);
// Sol 3 - 	innerFunction.bind(this)(soap);
// Sol 4 - define inner function as arrow function
console.log('==== this inside inner functions ====')
const cleanTable1 = function(soap) {
	const that = this;
//	const innerFunction = function(_soap) {
	const innerFunction = (_soap) => {
	console.log(`Cleaning ${this.table} using ${_soap}`); //this.table would print undefined
	// console.log(`Cleaning ${that.table} using ${_soap}`); 
	}	
	// innerFunction(soap);
	// innerFunction.call(this,soap);
	// innerFunction.bind(this)(soap);
	innerFunction(soap);
}
cleanTable1.call(johnsRoom,'some good soap');

/// this inside constructor

console.log('==== this inside constructor ====');

let createTable = function(name) {
	this.table = `${name}s table`;
}
createTable.prototype.cleanTable = function(soap) {
	console.log(`Cleaning ${this.table} with ${soap}`);
}
const jillsRoom = new createTable('Jill');
const johnRoom = new createTable('john');
jillsRoom.cleanTable('some better soap');
johnRoom.cleanTable('some netter soap');


//// this inside classes ////
console.log('==== this inside the class ====');
class createRoom {
	constructor(name) {
		this.room = `${name}s room`
	}
	cleanRoom(soap) {
		console.log(`Cleaning ${this.room} with ${soap}`);
	}
}
JillRoom = new createRoom('Jill');
JohnRoom = new createRoom('John');
JillRoom.cleanRoom('some better room soap');
JohnRoom.cleanRoom('some better room soap');