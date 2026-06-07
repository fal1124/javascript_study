let target = 'https://wings.msn.to'
let frame = document.querySelector('#frame')
let message = document.querySelector('#message')

document.querySelector('#btn').addEventListener('click',function(){
    console.log(frame)
    frame.contentWindow.postMessage(message.value,target)
})