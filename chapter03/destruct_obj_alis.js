let book = {
    title: 'javaポケットリファレンス',
    publish: '技術評論社',
    price: 2680,
    other:{keywd: 'Java SE 18',logo:'logo.png'}
};

let {title: subject,publish:company} = book;

console.log(subject);
console.log(company);