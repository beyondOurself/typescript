/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 11:18:06
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 16:11:58
 * @Description: file content
 */

// 能够自动推断类型不用特定写注解

const num1: number = 1
const num2: number = 1
const total = num1 + num2

console.log(total)

//  没办法自动推断需要写注解

function getTotal(num1: number, num2: number) {
    return num1 + num2
}
console.log(getTotal(1, 2))
