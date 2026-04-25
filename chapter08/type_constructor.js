class Animal {}
class Hamster extends Animal {}

let ani = new Animal();
let ham = new Hamster();
console.log(ani.constructor === Animal);
console.log(ham.constructor === Animal);
console.log(ham.constructor === Hamster);
