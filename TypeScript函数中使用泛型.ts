/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 16:03:39
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 16:26:23
 * @Description: file content
 */
// 泛型： 声明的时候没有指明类型， 使用需要指明具体类型
function add<T, P>(first: T, second: P[]) {
    return `${first}-${second}`
}
add<string, number>("66", [11])

class SelectGirl<T> {
    constructor(private grils: T[]) {

    }
    getGirl(index: number): T {
        return this.grils[index]
    }

}

const selectGirl = new SelectGirl<string>(["gouwa", "goudan", "goushen"])

console.log(selectGirl.getGirl(1))

// 泛型约束

interface Gril {
    name: string;
}

class SelectGirl1<T extends Gril> {
    constructor(private grils: T[]) {

    }
    getGirl(index: number): string {
        return this.grils[index].name;
    }

}

const selectGirl1 = new SelectGirl<Gril>([
    { name: "gouwa" },
    { name: "goudan" },
    { name: "goushen" },
])

console.log(selectGirl1.getGirl(1))

// 约束泛型只能是string | number
class SelectGirl2<T extends string | number> {
    constructor(private grils: T[]) {

    }
    getGirl(index: number): T {
        return this.grils[index];
    }

}

const selectGirl2 = new SelectGirl2<string>([
    "gouwa",
    "goudan",
    "goushen"
])

console.log(selectGirl2.getGirl(1))