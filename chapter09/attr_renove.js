let imgs = document.querySelectorAll("img")
let deps = ['align',"border","hspace","vspace","longdesc","name"]
for(let img of imges){
    for(let dep of deps){
        img.removeAttribute(dep)
    }
}