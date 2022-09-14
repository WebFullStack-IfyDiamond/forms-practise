
function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        let job = 'solve bugs everyday';
        console.log(`${this.name} is an ${this.tech} who ${job}.`);
    }
}

let person1 = new Alien('Navid', 'JS');
let person2 = new Alien('Kiran','Java');
let worker = new Alien('Siya', 'Ops engr');

worker.work()