/*
 * @Author: canlong.shen
 * @Date: 2021-04-23 16:35:47
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 16:49:49
 * @Description: file content
 */

// tsconfig 文件用来告诉编译器应该如何编译ts文件
//noImplicitAny 允许你的注解类型any 不用特意标明 
function long(name) {
    return name
}
//"strictNullChecks": true,  不允许有null值出现  
const name3: string = null;