let re = /^[0-9]{1,}/gm
let str = '101匹ワンちゃん。\n7人の小人'

let results = str.match(re)
for(let result of results){
    console.log(result)
}