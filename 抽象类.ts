/*
 * @Author: canlong.shen
 * @Date: 2021-04-23 16:14:18
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 16:21:40
 * @Description: file content
 */

// 抽象类 顾名思义：有个大概意思，具体还未知

abstract class Girl {
    abstract skill(); // 抽象类是没有实体的
}

// 继承抽象类 

class Waiter extends Girl {
    skill() {
        console.log("来杯茶，愚蠢的地球人！")

    }

}

class Technician extends Girl {
    skill() {
        console.log("给你狗头按摩下")

    }
}