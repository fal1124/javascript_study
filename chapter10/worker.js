self.addEventListener('message',function(e){
    let count = 1
    for(let i = 1; i < e.data.target; i++){
        if(i % e.data.x === 0){
            count++
        }
        postMessage(count)
    }
})