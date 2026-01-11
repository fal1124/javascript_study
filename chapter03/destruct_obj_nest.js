let book = {
    title: 'javaポケットリファレンス',
    publish: '技術評論社',
    price: 2680,
    other:{keywd: 'Java SE 18',logo:'logo.png'}
};

let {title,other,other:{keywd}} = book;

console.log(title);
console.log(other);
console.log(keywd);