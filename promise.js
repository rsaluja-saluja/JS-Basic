let promise = new Promise(function(resolve,reject) {

	// do some stuff
	 let isBool = true;
	//let isBool = false;

	if(isBool) {
		resolve('Promise is Resolved');
	} else {
		reject('Promise is failed');
	}
});

promise.then(function(fromResolve){
	console.log(fromResolve);
}).catch(function(fromReject) {
	console.log(fromReject);
});