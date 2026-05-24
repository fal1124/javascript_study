let list = document.querySelector("#list")
let li = list.children
console.log(`変更前:${li.length}`)

list.appendChild(document.createElement('li'))
console.log(`変更後:${li.length}`)