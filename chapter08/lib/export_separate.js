const AUTHOR = "YAMADA Yoshihiro";
function getTriangleArea(base, height) {
  return (base * height) / 2;
}

class Member {
  name = "";
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`私の名前は${name},${age}歳です`);
  }
}

export { getTriangleArea, Member }
