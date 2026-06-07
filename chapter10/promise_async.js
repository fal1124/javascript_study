function asyncProcess(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof value === 'number'){
                resolve(value ** 2)
            }else{
                reject('引数valueは数値でなければなりません')
            }
        },500)
    })
}


async function main(){
    let result = await asyncProcess(2)
    let result2 = await asyncProcess(result)
    let result3 = await asyncProcess(result2)
    return result3
}

main()
.then(response => console.log(response))
.catch(error => console.log(`エラー:${error}`))