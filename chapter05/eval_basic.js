let data = `{
"isbin" : "978-4-297-12635-3",
"title" : "TypeScript入門",
"price" : "2948"
}`;

eval(`var obj = ${data}`);
console.log(obj);
