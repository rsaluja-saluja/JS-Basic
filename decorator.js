let price = function(target) {
	target.price = 100;
}

@price
class Car {

}
console.log(Car.price);