/*
 * @Author: canlong.shen
 * @Date: 2021-04-23 16:06:51
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 16:08:44
 * @Description: file content
 */

class Person {
    public readonly _name: string;
    constructor(name: string) {
        this._name = name
    }
}

const p2 = new Person("longlong")
p2._name = "000"  //无法分配到 "_name" ，因为它是只读属性
console.log(p2._name)
