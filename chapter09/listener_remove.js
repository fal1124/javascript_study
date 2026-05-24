let btn = document.querySelector("#btn")
let listener = function(){
    console.log("こんにちは世界")
}

btn.addEventListener("click",listener,false)
btn.removeEventListener("click",listener,false)