/*
 * @Author: canlong.shen
 * @Date: 2021-04-12 15:26:23
 * @LastEditors: your name
 * @LastEditTime: 2021-04-21 22:21:11
 * @Description: file content
 */
// 类的内部和外部都能使用

class Person {
    public name: string;
    public sayHello() {
        console.log(this.name + ' say heloo')
        console.log(this.hobby)
    }
    private age: number;
    // 只能在内部或者子类里使用
    protected hobby: string = "打游戏";


}

class Teach extends Person {

    sayHobby() {
        this.hobby
    }
}

const person = new Person()
person.name = 'long'
person.sayHello()
// 只能内部使用
// console.log(person.age)  Property 'age' is private an

console.log(person.hobby)
