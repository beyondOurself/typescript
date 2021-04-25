/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 15:08:52
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 15:29:23
 * @Description: file content
 */
interface GouWa {
    isSB: boolean;
    say: () => {}
}
interface GouDan {
    isSB: boolean;
    skill: () => {}
}
// 联合类型参数可能又多个类型
function judeWho(sb: GouWa | GouDan) {
    if (sb.isSB) {
        // 直接通过断言指定类型  ： 类型保护
        (sb as GouWa).say()
    } else {
        (sb as GouDan).skill()
    }

}

// 可以用 in typeof  instanceof 进行类型保护