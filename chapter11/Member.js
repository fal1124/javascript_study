export default class Member{
    name = "";
    age = 0;
      
    constructor(name, age) {
       this.name = name;
       this.age = age;
    }

    greet() {
      return `私の名前は${this.name},${this.age}歳です`;
    }
}
