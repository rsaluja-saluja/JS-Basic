let num = [1,2,2,3,3,4,5,5,6];

//Sol 1 - Using Set
console.log(new Set(num)); //Set { 1, 2, 3, 4, 5, 6 }
console.log([...new Set(num)]); //[ 1, 2, 3, 4, 5, 6 ]

//Sol 2 - Brute Force Algorithm
let a = [1,2,2,3,3,4,5,5,6];
const len = num.length;
let b = [];
for(let i =0;i<len;i++) {
	if(b.indexOf(a[i]) === -1) {
		b.push(a[i]);
	}
}
console.log('sol 2 - '+b);

//Sol 3 - Quick Sort Algorithm 
let arr = [1,2,2,3,5,4,6,8,3,4,5,5,6];
arr.sort(); // log(n)
let _temp;
let bArr = [];
let i;
for( i of arr) { //n
	if(i !== _temp) {
		bArr.push(i);
		_temp = i;
	}
}
console.log('sol 3 - ' +bArr)

//Sol 4
let arrObj = [1,2,2,3,5,4,6,8,3,4,5,5,6];
let obj = {};
for(let i of arrObj) {
	obj[i] = true;
}
let bArrObj = Object.keys(obj);
console.log('sol 4 - '+ bArrObj);