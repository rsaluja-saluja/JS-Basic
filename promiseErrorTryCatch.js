let x = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("OK");
	}, 1000);
}).then(
	resolve => {
		//abc();
		throw new Error("Error raised from then");
	}
).then(
	resolve1 => {
		console.log(resolve1);
	}
).catch(
	error => {
		console.log(`Error occured ${error}`);
		return 'catch processed';
	}
).then(
	resolve2 => {
		console.log(`then after catch ${resolve2}`);
		//abc();
	}
)