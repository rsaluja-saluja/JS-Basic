let x = new Promise((resolve,reject) => {
	console.log('Promise Executor');
	setTimeout(resolve(1),1000);
}).then(
	(resolve) => {
		console.log(resolve);
		return 2;
	}
).then (
	(resolve) => {
		console.log(resolve);
		return 3;
	}
).then (
	(resolve) => {
		console.log(resolve);
	}
);

let y = new Promise((resolve,reject) => {

	setTimeout(() => {
		resolve(1)
	}, 1000);
}).then( 
	resolve1 => { 
		console.log(`First then ${resolve1}`);
		return new Promise((resolve,reject) => {
			resolve(resolve1*2);
		})
	}
).then(
	resolve2 => {
		console.log(`Second then ${resolve2}`);
		return new Promise((resolve,rejet)=> {
			resolve(resolve2*2);
		})
	}
).then(
	resolve3 =>{
		console.log(`Third then ${resolve3}`);
	}

)
