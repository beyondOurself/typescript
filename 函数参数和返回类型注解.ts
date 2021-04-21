/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 11:18:06
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 16:19:52
 * @Description: file content
 */


// 函数返回 number 注解
function getTotal(num1: number, num2: number): number {
    return num1 + num2
}
// 函数无返回
function voidFun(num1: number, num2: number): void {
    console.log('voidFun')

}

// 执行不完用 never
function errorFun(): never {
    throw new Error('err')
    // 永远不会执行 
    console.log(">>>>")
}

function forNever(): never {
    while (true) { }
    // 永远不会执行 
    console.log(">>>>")

}

// 参数是对象 

function paramsFun({ num1, num2 }: { num1: number, num2: number }) {
    return num1 + num2
}

const res = paramsFun({ num1: 1, num2: 2 })