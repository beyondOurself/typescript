/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 16:21:49
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 16:56:50
 * @Description: 元组
 */

interface Girl {
    name: string;
    age: number;
    gender?: string;  // 没有强制一定要有
}
const woman = {
    name: '狗娃',
    age: 11,
}
function showGirl(woman: Girl) {
    const { name, age, gender } = woman
    console.log(name)
    console.log(age)
    console.log(gender)

}
showGirl(woman)