async function f() {
	let p = new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve('Promise Resolved');
			// reject('Promise Rejected');
		}, 1000);
	});
	// try {
	let msg = await p;
	// } catch(err) {
	// 	console.log('error occured'+err);
	// }
	console.log('promise');
	console.log("1");
	//return msg;
}
 f()
//  .then(
// 	resolve => console.log(resolve)
// ).catch(
// 	reject => console.log(reject)
// );
console.log('function call finished');