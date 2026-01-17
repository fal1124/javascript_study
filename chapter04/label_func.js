label:{
    console.log('Block start!!');
    (function () {
        break label; //ここでエラーになる　SyntaxError: Undefined label 'label'
    })();
    console.log("Block end!!")
}