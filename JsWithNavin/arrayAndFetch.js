let values = [5,7,8];

// adding values to the end of the array
values.push(9);
values[3] = 'Ramen';
values.push(function(){
    console.log('Here we go');
})
values[5] = {tech: 'Mahindra'}

console.log(values);

// fetching a value using the index
values[1]
console.log(values[5]);