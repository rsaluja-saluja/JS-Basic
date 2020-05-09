let fun = function(a,b,c) {
	return a*b*c;
}

console.log(fun(3,4,5));

let fun1 = (a) => {
	return (b) => {
		return (c) => {
			return a*b*c;
		};
	};
};

console.log(fun1(3)(4)(5));

/////////////////////////

let vol = (h) => {
	return (l) => {
		return (w) => {
			return l*w*h;
		};
	};
};
let volWithHeight = vol(30);
console.log(volWithHeight(40)(20));
console.log(volWithHeight(10)(50));
console.log(volWithHeight(50)(30));

///////////////////////////

let discount = (percentage) => {
	return (price) => {
		return price * percentage;
	};
};

let tenPersentageDiscount = discount(0.1);
let twentyPersentageDiscount = discount(0.2);

console.log(tenPersentageDiscount(300));
console.log(tenPersentageDiscount(500));
console.log(twentyPersentageDiscount(400));
console.log(twentyPersentageDiscount(1000));