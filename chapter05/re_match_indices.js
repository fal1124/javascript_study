let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/di
let str = 'サポートサイトはhttp://www.example.com/ですサンプル紹介サイトHTTPS://www.web-deli.com/もよろしく!'
console.log(str.match(re))