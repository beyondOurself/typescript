/*
 * @Author: canlong.shen
 * @Date: 2021-03-31 16:21:49
 * @LastEditors: your name
 * @LastEditTime: 2021-03-31 16:31:15
 * @Description: file content
 */

const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['1', '2', '3']
const undefindArr: undefined[] = [undefined]
const numberOrStringArr: (number | string)[] = [1, 2, '3']

const obj1: { name: string, age: number }[] = [{ name: 'long', age: 11 }]

type t = { name: string, age: number }
const obj2: t[] = [{ name: 'long', age: 11 }]


class T2 {
    name: string;
    age: number;
}
const obj3: T2[] = [{ name: 'long', age: 11 }]