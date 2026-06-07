let count = 0
let result = document.querySelector('#result')

document.querySelector("#btn").addEventListener("click",function(){
    result.textContent = count + 1
    history.pushState(count,'',`chapter10/${count}`)
})

window.addEventListener('popstate',function(e){
    count = e.state
    result.textContent = count
})