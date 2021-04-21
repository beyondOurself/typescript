/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 17:22:31
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 17:25:17
 * @Description: file content
 */

class Father {
    content = '我是你爸爸'
    sayHello() {
        return this.content
    }
}

class Son extends Father {

    content = '我是你儿子'
    sayHello() {
        return super.sayHello() + 'gogo'
    }
}

const son1 = new Son()

console.log(son1.sayHello())


