let cleanRoom = function() {
	return new Promise(function(resolve,reject){
		resolve("Room is cleaned");
	});
};

let removeGarbage = function() {
	return new Promise(function(resolve,reject){
		resolve("Removed the Garbage");
	});
};

let winIceCream = function() {
	return new Promise(function(resolve,reject) {
		resolve("Won Icecream");
	});
};

cleanRoom().then(function(fromResolve){
	console.log(fromResolve);
	return removeGarbage();
}).then(function(fromResolve){
	console.log(fromResolve);
	return winIceCream();
}).then(function(fromResolve){
	console.log(fromResolve);
	console.log('Finished');
});

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function(fromResolve){
	console.log('PromiseAll'+fromResolve);
//	console.log('All Finished');
});

Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function(fromResolve){
	console.log('PromiseRace'+fromResolve);
})