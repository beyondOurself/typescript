/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 16:56:56
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 17:01:29
 * @Description: file content
 */
namespace Components {
    // 命名空间可以嵌套
    export namespace SubComponents {
        export class test {

        }
    }
    export class Header {
        constructor() {
            const header = document.createElement('div')
            header.innerText = " This is header"
            document.body.appendChild(header)
        }
    }
    export class Contenet {
        constructor() {
            const content = document.createElement('div')
            content.innerText = " This is content"
            document.body.appendChild(content)
        }
    }
    export class Footer {
        constructor() {
            const footer = document.createElement('div')
            footer.innerText = " This is footer"
            document.body.appendChild(footer)
        }
    }
}