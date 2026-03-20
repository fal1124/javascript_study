let org = {
  title: "JavaScript本格入門",
  price: 2980,
  published: new Date(2022, 5, 25),
};

let js = JSON.stringify(org);
let obj = JSON.parse(js);
console.log(obj);

/*エラーが出る。TypeError
console.log(obj.published.getFullYear());
*/

obj = JSON.parse(js, function (key, value) {
  if (
    typeof value == "string" &&
    value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
  ) {
    return new Date(value);
  }
  return value;
});

console.log(obj);
