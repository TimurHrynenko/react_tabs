(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),i=a.n(l),s=a(3),r=a(4),o=a(6),b=a(5),d=(a(12),a(13),function(e){var t=e.tabs,a=e.selectedTabId,n=e.selectTabHandler;return c.a.createElement("div",{className:"Tabs"},c.a.createElement("ul",{className:"Tabs__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:a===e.id?"Tab__item_active":null},c.a.createElement("a",{href:e.id,className:"Tab__link",onClick:function(t){t.preventDefault(),n(e.id)}},e.title))}))),c.a.createElement("div",{className:"Tab__content"},t.find((function(e){return e.id===a})).content))}),u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={tabsList:[].concat(u),selectedTabId:"tab-1"},e.onTabSelected=function(t){t!==e.state.selectedTabId&&e.setState({selectedTabId:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.tabsList,a=e.selectedTabId;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is ".concat(t.find((function(e){return e.id===a})).title)),c.a.createElement(d,{tabs:t,selectedTabId:a,selectTabHandler:this.onTabSelected}))}}]),a}(c.a.Component);i.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ebd9e3a2.chunk.js.map