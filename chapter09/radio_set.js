function setRadioValue(name,value){
    let elems = document.querySelectorAll(`input[name="${name}"]`)
    for (let elem of elems) {
        elem.checked = values.includes(elem.value)
           if(elem.value === value){
                elem.checked = true
                break
           } 
        }
}

setRadioValue("food","餃子")