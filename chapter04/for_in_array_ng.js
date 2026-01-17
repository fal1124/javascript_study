let data = ['apple',"orange","banana"];

Array.prototype.hoge = function () {}

for (const key in data) {    
    console.log(data[key]);
}