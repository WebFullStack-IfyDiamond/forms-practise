// let data = [5,7,8,9];

// // Adding an element to the array from the back 
// data.push(11);
// data.push(17);
// console.log(data);

// // // Adding data to the array from the start of the array
// data.unshift(2)
// console.log(data);

// // Removing the last element in the array
// data.pop()
// console.log(data);

// // Removing data from the start of the Array
// data.shift()
// console.log(data);

// // splice

// data.splice(3, 2, 21);
// console.log(data);

// for each

// let nums = ['a', 'b', 'c', 'd', 'e', 'f'];

// nums.forEach((num) => console.log(num));

// filter
// let digits = [22, 11, 21, 10, 17, 14]

// let result = digits.filter((digit) => digit%2 === 0)
// console.log(result);

// reduce

let num = [1,2,3,4,5,6];

let result = num.map( n => n*2).reduce((a,b) => a + b);
console.log(result);