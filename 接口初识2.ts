/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 16:21:49
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 17:16:03
 * @Description: 元组
 */

interface Girl1 {
    name: string;
    age: number;
    gender?: string;  // 没有强制一定要有
    [prompt: string]: any;  // 任意属性名类型为string，值任意类型的属性
    say(): string;  // say 方法，且返回string类型的值
}
const woman2 = {
    name: '狗娃',
    age: 11,
    say() {
        return '愚蠢的地球人啊'
    }
}

interface Teach extends Girl1 {
    teach(): string
}
class meinv implements Teach {
    teach(): string {
        return '3333'
    }
    name: string
    age: number
    gender?: string
    say(): string {
        return '666'
    }

}
const woman3 = new meinv()

function showGirl2(woman: Teach) {
    const { name, age, gender, say } = woman
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(
        say()
    )

}
showGirl2(woman3)