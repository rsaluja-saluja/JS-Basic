let obj = {
	a:1,
	b:2
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
//////////
//Reverse a string - y = "olleh"
let x = "Hello";
let y = "";
for (let i in x) {
	console.log(x[i]);
	y = x[i]+y;
}
console.log(y);
console.log(x.split('').reverse().join(''));

////////////////////////
// what to do to make it work? obj,getA().getB()
const obj1 = {
	a:1,
	b:2,
	getA() {
		console.log(this.a);
		return this;
	},
	getB() {
		console.log(this.b);
		return this;
	}
}
obj1.getA().getB();

/////////////////

// [1,2].print() - should print 1,2
Array.prototype.print = function() {
	return this.toString();
}
let arr = [1,2];
console.log(arr.print());
console.log([1,2].toString());
console.log([1,2,3].join(','));

/////////////////////
//Prototype Inheritance
const a = function(x) {
	this.x = x;
}
a.prototype.getX = function() { return this.x; };
// const newA = new a('A');
// console.log(newA.getX());
// console.log(newA.x);
const b = function(x,y) {
	a.call(this,x);
	this.y = y;
}
b.prototype.getY = function() { return this.y;};
b.prototype.__proto__ = a.prototype;
const newB = new b('x','y');
console.log(newB.getY());
console.log(newB.getX());

//////////////////////////
// Clone and object that is not linked to original object
// changing clone shouldn't impact the original object

console.log('=== Clone ===')
const obj2 = {
	a: {
		b: {
			c:1
		}
	}
}
console.log('== shallow copy with multiple level of objects == ')
const obj3 = Object.assign({},obj2); // creates shallow copy that impacts original also
obj3.a.b.c = 2;
console.log(obj3.a.b.c); //2
console.log(obj2.a.b.c); //2

console.log('== shallow/deep copy with one level of objects == ')

const obj4 = {
	a:5
}
const obj4Clone = Object.assign({},obj4); // Object.assign would work with one level of values
obj4Clone.a = 6;
console.log(obj4Clone.a); // 6
console.log(obj4.a); // 5

// deep copy
const obj5 = {
	a: {
		b: {
			c:1
		}
	}
}
console.log('== deep copy with hack == ')
const obj5Clone = JSON.parse(JSON.stringify(obj5))
console.log(obj5Clone)
obj5Clone.a.b.c = 2;
console.log(obj5Clone.a.b.c);
console.log(obj5.a.b.c);

////////////////////////////
//merge 2 arrays in sorted form
console.log("=== mereg 2 arrays and sort it ===");
const aArr = [1,2,5,7,9]
const bArr = [2,5,7,12,100]

const cArr = [...aArr,...bArr].sort(); //[ 1, 100, 12, 2, 2, 5, 5, 7, 7, 9 ]
console.log(cArr);

const cArr1 = [...aArr,...bArr].sort((a,b) => {return a>b});
console.log(cArr1); //[ 1, 2, 2, 5, 5, 7, 7, 9, 12, 100 ]

console.log(aArr+bArr); //combine as string concat 1,2,5,7,92,5,7,12,100
const aAr = [1,2,5,7,9]
const bAr = [2,5,7,12,100]
console.log(aAr.concat(bAr).sort((a,b) => {return a>b })); //[ 1, 2, 2, 5, 5, 7, 7, 9, 12, 100 ]
////////////////////
console.log('Perfommance efficine solution to merge 2 sorted arrays instead of using sort method')
const aArray = [1,2,5,7,9]
const bArray = [2,5,7,12,100, 200, 225,280,300]
let sLen = aArray.length < bArray.length ? aArray.length : bArray.length;

const cArray = [];
let i = 0;
let j = 0;
while ( i < aArray.length && j<bArray.length ) {
	if (aArray[i]<bArray[j]) {
		cArray.push(aArray[i]);
		i++;
	} else {
		if (aArray[i]>bArray[j]) {
			cArray.push(bArray[j]);
			j++;
		} else {
			cArray.push(aArray[i]);
			cArray.push(bArray[j]);
			i++;
			j++;
		}
	}
}
if(i != aArray.length) {
	cArray.splice(cArray.length,0,aArray.slice(i,aArray.length));
}
if(j != bArray.length) {
	cArray.splice(cArray.length,0,bArray.slice(j,bArray.length));
}
console.log(`aArray = ${aArray}`);
console.log(`bArray = ${bArray}`);
console.log(`cArray = ${cArray}`);

/////////////////////

const objInner = {
	x:1,
	getX() {
		const inner = () => {
			console.log(this.x);
		}
		inner();
	}
}
objInner.getX();