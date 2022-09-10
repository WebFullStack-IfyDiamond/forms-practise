// Javascript create functions as objects 
 
//  function greet(user){
//     return `Hello ${user}`;
//  }

//  let user = 'Navin';
//  let str = greet(user);
 
//  console.log(str);


//  Object with a function
 let Alien = {
   name: 'Navin',
   tech: 'JS',
   greeting:() => {console.log(`Hello ${Alien.name}`);},
}

// console.log(Alien.greeting);
Alien.greeting();