let file = document.querySelector('#file')
let reader = new FileReader()

reader.addEventListener('load',function(){
    document.querySelector('#result').textContent = reader.result
},false)

document.querySelector('#btn').addEventListener('click',function(){
    reader.readAsText(file.files[0],'UTF-8')
},true)