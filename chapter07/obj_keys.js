let obj = Object.create(Object.prototype, {
  name: {
    value: "佐藤理央",
    writable: true,
    writable: true,
    configurable: true,
    enumerable: true,
  },
  age: {
    value: 25,
    writable: false,
    configurable: true,
    enumerable: false,
  },
  gender: {
    value: "male",
    writable: true,
    configurable: true,
    enumerable: true,
  },
});
for (let prop of Object.keys(obj)) {
  console.log(Object.getOwnPropertyDescriptor(obj, prop));
}
