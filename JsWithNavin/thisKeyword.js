// The keyword 'this' is used to refer to the object in which the method calling it find itself
// let laptop = {
//     cpu: 'i9',
//     ram: '16GB',
//     brand: 'HP',
//     greet: () => console.log(`Laptop brand is: ${laptop.brand}`)
// }

// laptop.greet();


    let laptop = {
    cpu: 'i9',
    ram: '16GB',
    brand: 'HP',
    greet: function(){ console.log(`The laptop brand is ${this.brand}`)}
}

laptop.greet();

// let laptop = {
//     cpu: 'i9',
//     ram: '16GB',
//     brand: 'HP',
//     greet: () => { console.log(this.cpu)}
// }

// laptop.greet();