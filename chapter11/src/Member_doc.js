/**
 * @class
 * @classdesc メンバーについての情報を管理します。
 * @param {string} name 氏名
 * @param {number} age 年齢
 * @throws {Eroor} name,ageは必須です
 * @author Ishitani Junya
 * @version 1.0.0
 */

class Member{
    constructor(name,age){
        if(name === undefined || age === undefined){
            throw new Error('name,ageは必須です')
        }
        this.name = name
        this.age = age
    }

    /**
     * メンバーに関する詳細情報を表示します。
     * @returns{String}メンバーの使命と年齢
     * @deprecated {@link Member#toString}メソッドを代わりに使用してください
     */

    show(){
        return `名前は${this.name}${this.age}歳です`
    }

    /**
     * Member クラスの内容を文字列化します。
     * @returns {String} メンバーの氏名と年齢
     */

    toString(){
        return `名前は${this.name},${this.age}歳です`
    }
}