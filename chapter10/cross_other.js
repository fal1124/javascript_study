let origin = 'http://localhost'
let result = document.querySelector('#result')
console.log("start")

window.addEventListener('message',function(e){
    if(e.origin !== origin){
        console.log("failed")
        return
    }
    result.textContent = e.data
})