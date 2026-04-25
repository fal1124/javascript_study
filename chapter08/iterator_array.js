let data_any = ["one", "two", "three"];
let itr = data_any[Symbol.iterator]();

let d;
while ((d = itr.next())) {
  if (d.done) {
    break;
  }
  console.log(d.done);
  console.log(d.value);
}
