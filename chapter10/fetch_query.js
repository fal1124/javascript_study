let result = document.querySelector("#result")
document.querySelector("#btn").addEventListener("click",function(){
    let params = new URLSearchParams()
    params.set('name',document.querySelector("#name").value);
    fetch(`fetch_query.phpa${params.toString()}`)
    .then(res=>res.text())
    .then(text=>result.textContent = text)
})