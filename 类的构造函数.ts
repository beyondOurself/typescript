/*
 * @Author: canlong.shen
 * @Date: 2021-04-21 21:41:52
 * @LastEditors: your name
 * @LastEditTime: 2021-04-21 22:20:07
 * @Description: file content
 */

class Person1 {
    constructor(public name: string) {

    }
}

class Teach1 extends Person1 {
    constructor() {
        // 子类
        super("愚蠢的地球人")
    }
}

const person1 = new Person1("long")
const teach1 = new Teach1();
console.log(person1.name)
console.log(teach1.name)
