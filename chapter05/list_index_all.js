let list = ['い','ろ','は','に','い','へ','と']

let keywd = 'い';
let result = [];

list.forEach(function(v,i){
    if(v === keywd){result.push(i)}
})
console.log(result)