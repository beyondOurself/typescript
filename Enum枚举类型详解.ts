/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 15:36:52
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 15:47:52
 * @Description: file content
 */

enum State {
    DRAFT,
    APPROVE,
    HOLD,

}

function getProcessState(status: any) {
    switch (status) {
        case State.DRAFT:
            return "草稿"
            break;
        case State.APPROVE:
            return "审批"
            break;
        case State.HOLD:
            return "暂存"
            break;
        default:
            break;
    }
    return State.DRAFT
}

console.log(getProcessState(State.APPROVE))
