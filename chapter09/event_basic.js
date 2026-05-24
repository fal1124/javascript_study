let pic = document.querySelector('#cover')
pic.addEventListener('mouseenter',function(){
    this.src = 'img/ハサミのフリーアイコン.jpeg'
},false)

pic.addEventListener('mouseleave',function(){
    this.src = 'img/バットのアイコン素材.jpeg'
},false)