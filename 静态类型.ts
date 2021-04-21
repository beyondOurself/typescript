/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 10:57:39
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 11:02:36
 * @Description: file content
 */

const count: number = 1


// 自定义静态类型 
interface gir {
    name: string,
    age: number
}

const girl: gir = {
    name: 'long',
    age: 18

}

console.log(girl.age)
