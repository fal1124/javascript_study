let data = {
    mainTitle:'ゼロからわかるTypeScript入門',
    price:2948,
    handleEvent(){
        console.log(`${this.mainTitle}/${this.price}円`)
    }
}

document.querySelector("#btn").addEventListener("click",data,false)