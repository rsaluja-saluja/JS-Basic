let arr = [2,3,4,5,6];

function sum(accumulator,val) {
	return accumulator+val;
}
	let reduceArr = arr.reduce(sum);
	console.log(reduceArr);

	let reduceArrIthInitialAccValue = arr.reduce(sum,10);
	console.log(reduceArrIthInitialAccValue);

	let reduleMultipleArr = arr.reduce((acc,val) => acc*val);
	console.log(reduleMultipleArr);

	let reduleMultipleArr1 = arr.reduce((acc,val) => acc*val,10);
	console.log(reduleMultipleArr1);
	
	// FInd min
	let array = [2,5,7,1,3,9,8];
	let min = array.reduce((acc,val) => val < acc ? val : acc); 
	// {
	// 	if (val < acc) {
	// 		acc = val;
	// 	} 
	// 	return acc;
	// });
console.log('Min Value: '+min);