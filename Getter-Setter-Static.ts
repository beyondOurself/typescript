/*
 * @Author: canlong.shen
 * @Date: 2021-04-21 22:08:34
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 13:39:55
 * @Description: file content
 */
// @Author: canlong.shen
// @Date: 2021-04-21 22:08:34
// @LastEditors: your name
// @LastEditTime: 2021-04-21 22:08:36
// @Description: file content

class EarthMan {

    // 静态方法可以直接通过类名进行访问
    static sayHello() {

        console.log("愚蠢的地球热啊")

    }



    constructor(private _name: string) {

    }
    // get set 方法对私有属性进行封装
    get name() {
        return this._name + "xxxx"
    }
    set name(name: string) {
        this._name = name + "xxx"
    }
}

const e1 = new EarthMan("狗娃")
EarthMan.sayHello();
console.log(e1.name)
