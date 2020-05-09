let x = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("Promise Resolved");
	}, 1000);
});

x.then(
	resolve1 => {
		console.log(`First Handler ${resolve1}`);
	}
);
x.then(
	resolve2 => {
		console.log(`Second Handler ${resolve2}`);
	}
);
x.then(
	resolve3 => {
		console.log(`Third Handler ${resolve3}`);
	}
);
