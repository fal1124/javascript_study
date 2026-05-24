let imgs = document.querySelectorAll('img')
for(let img of imgs){
    if(!img.hasAttribute('src')){
        img.setAttribute('src','img/バットのアイコン素材.jpeg')
    }
}