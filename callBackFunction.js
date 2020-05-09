function sing(callback) {
	console.log("singing a song");
	if(callback instanceof Function) {
		callback();
	}
}

function test() {
	console.log('Test callback function');
}

sing();
sing(test);
sing("abc");
sing(() => {
	console.log('Annonymous callback function');
});