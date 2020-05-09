const x = function() {
	//return arguments; //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
	//return [].slice.call(arguments); //[ 1, 2, 3, 4 ]
	return [].slice.call(arguments).length; //4
}

console.log(x(1,2,3,4));