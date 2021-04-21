/*
 * @Author: canlong.shen
 * @Date: 2021-04-12 15:26:23
 * @LastEditors: your name
 * @LastEditTime: 2021-04-21 21:22:01
 * @Description: file content
 */
// 类的内部和外部都能使用

class Person {
    public name: string;
    public sayHello() {
        console.log(this.name + ' say heloo')

    }
    private age: number;
}

const person = new Person()
person.name = 'long'
person.sayHello()
 // console.log(person.age)  Property 'age' is private an
