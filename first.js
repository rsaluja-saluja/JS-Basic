const myObject = Object.create(Object.prototype);
console.dir(myObject.__proto__.constructor);

const obj = {};
console.dir(obj.__proto__.constructor);

const obj2 = Object.create(null);
console.dir(obj2.__proto__);