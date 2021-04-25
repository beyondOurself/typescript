"use strict";
/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 16:56:56
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 17:01:02
 * @Description: file content
 */
var Components;
(function (Components) {
    // 命名空间可以嵌套
    var SubComponents;
    (function (SubComponents) {
        var test = /** @class */ (function () {
            function test() {
            }
            return test;
        }());
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var header = document.createElement('div');
            header.innerText = " This is header";
            document.body.appendChild(header);
        }
        return Header;
    }());
    Components.Header = Header;
    var Contenet = /** @class */ (function () {
        function Contenet() {
            var content = document.createElement('div');
            content.innerText = " This is content";
            document.body.appendChild(content);
        }
        return Contenet;
    }());
    Components.Contenet = Contenet;
    var Footer = /** @class */ (function () {
        function Footer() {
            var footer = document.createElement('div');
            footer.innerText = " This is footer";
            document.body.appendChild(footer);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
/*
 * @Author: canlong.shen
 * @Date: 2021-04-25 16:36:28
 * @LastEditors: your name
 * @LastEditTime: 2021-04-25 16:58:08
 * @Description: file content
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Contenet();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
