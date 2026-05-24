function setCheckvalue(name,values){
    let elems = document.querySelectorAll(`input[name="${name}"]`)
    for(let elem of elems){
        elem.checked = values.includes(elem.value)
    }
}

setCheckvalue("food",["餃子","焼肉"])