const arr = [
	{name: 'rajni1', age: 30},
	{name: 'rajni2', age: 20},
	{name: 'rajni3', age: 40},
	{name: 'rajni4', age: 50}
]

// arr = [ 
// 	{name: 'rajni3', selected: true},
// 	{name: 'rajni3', selected: true}
// ]

const result = arr
.filter((item) => item.age >= 40)
.map((item) => {
	return {
		name: item.name,
		selected: true
	}
})

console.log('result is ', result)