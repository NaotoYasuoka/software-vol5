(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),r=u(n(0)),o=(u(n(1)),n(18));n(2);function u(e){return e&&e.__esModule?e:{default:e}}n(22);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectMenu:0,styleHello:{}},n.StylesSet=n.StylesSet.bind(n),n.onClickMenu=n.onClickMenu.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"renderToolbar",value:function(){return r.default.createElement(o.Toolbar,null,r.default.createElement("div",{className:"center"},"CSSで見た目を変える"))}},{key:"onClickMenu",value:function(e){this.setState({selectMenu:e}),1==e?this.StylesSet("red"):2==e?this.StylesSet("blue","inherit"):3==e?this.StylesSet("red","inherit","bolder"):this.StylesSet("blue","MS Pゴシック","bolder")}},{key:"StylesSet",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",l={color:e,"font-style":t,"font-weight":n};this.setState({styleHello:l})}},{key:"render",value:function(){var e=this,t="item",n="item",l="item",u="item";return 1==this.state.selectMenu?t="item-selected_1":2==this.state.selectMenu?n="item-selected_2":3==this.state.selectMenu?l="item-selected_3":4==this.state.selectMenu&&(u="item-selected_4"),r.default.createElement(o.Page,{renderToolbar:this.renderToolbar},r.default.createElement("div",{className:"midashi"},"見出しタイトル"),r.default.createElement("p",{style:this.state.styleHello},"はろー！"),r.default.createElement("ul",{className:"menu"},r.default.createElement("li",{className:t,onClick:function(){return e.onClickMenu(1)}},"メニュー１"),r.default.createElement("li",{className:n,onClick:function(){return e.onClickMenu(2)}},"メニュー２"),r.default.createElement("li",{className:l,onClick:function(){return e.onClickMenu(3)}},"メニュー３"),r.default.createElement("li",{className:u,onClick:function(){return e.onClickMenu(4)}},"メニュー４")))}}]),t}(r.default.Component);t.default=a},22:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n(9);var l=n(11),r=i(n(0)),o=i(n(1)),u=i(n(2)),a=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}n(23),n(24),u.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");o.default.render(r.default.createElement(l.AppContainer,null,r.default.createElement(a.default,null)),c)}},[[7,1,2]]]);