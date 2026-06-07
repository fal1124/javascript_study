let storage = localStorage
for(let i = 0;storage.length;i++){
    let key = storage.key(i)
    console.log(`${key}:${storage[key]}`)
}