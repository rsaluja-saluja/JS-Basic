class Base {
	constructor(a,b,c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	add() {
		const c= this.a+ this.b+this.c;
		return(c);
	}
}

class Derived extends Base {
	constructor(a,b,c,d) {
		super(a,b,c);
		this.d = d;
	}
	add() {
		const c = super.add()+this.d;
		return('addition of ${this.a}, ${this.b}, ${this.c}, ${this.d} = '+c);
	}
	multi() {
		const c = this.a*this.b*this.c*this.d;
		return('Multiplication of ${this.a}, ${this.b}, ${this.c}, ${this.d} = '+c);
	}
}
const b = new Base(3,4,6);
console.log(b.add());

const d = new Derived(3,4,5,6);
console.log(d.add());
console.log(d.multi());