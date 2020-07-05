(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a(73)},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(14),i=a(2),s=a(10),m=a(8),u=a(39),p=a(40),h=a(11),d={weather:null};var f=Object(m.combineReducers)({weatherApp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return Object(h.a)(Object(h.a)({},e),{},{weather:t.payload});default:return e}}}),w=Object(m.createStore)(f,Object(u.composeWithDevTools)(Object(m.applyMiddleware)(p.a))),E=a(18),b=a(19),v=a(23),g=a(22),y=a(12),j=a.n(y),x=a(20),N=a(41),O=a.n(N).a.create({baseURL:"https://api.weatherbit.io/v2.0/forecast"}),k={query:function(){var e=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("daily?city=".concat(t,"&key=").concat("d6674be23fab4be5a43a3012193eff20"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(x.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.query(e);case 3:n=t.sent,a({type:"SET_WEATHER",payload:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},A=a(17),D=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={txt:""},e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){var t=e.txt;return Object(h.a)(Object(h.a)({},t),{},Object(A.a)({},n,r))}))},e.onSubmit=function(t){t.preventDefault(),e.props.onSearch(e.state.txt)},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"filter",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"txt",placeholder:"Search City...",onChange:this.onChange}),r.a.createElement("i",{className:"fas fa-search",style:{color:"#ccc"}}))}}]),a}(n.Component),W=a(21),C=a.n(W),T={loadWeather:S},_=Object(s.b)((function(e){return{weather:e.weatherApp.weather}}),T)((function(e){var t=e.weather;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"wrapper-header"},r.a.createElement("p",null,"Tody"),r.a.createElement("p",null,r.a.createElement(C.a,{format:"LL"},Date.now()))),r.a.createElement("div",{className:"wrapper-body"},r.a.createElement("img",{src:"https://www.weatherbit.io/static/img/icons/".concat(t.data[0].weather.icon,".png"),alt:""}),r.a.createElement("div",{className:"weather-specs"},r.a.createElement("p",null,r.a.createElement("span",{className:"weather-specs-current"},t.data[0].temp.toFixed(0))," ",r.a.createElement("span",{className:"weather-specs-avg"},"/",t.data[0].max_temp.toFixed(0)," \xb0C")),r.a.createElement("p",null,t.data[0].weather.description))))})),q=function(e){var t=e.day,a=e.flag,n=new Date;return r.a.createElement("div",{className:"weather-card"},r.a.createElement("h3",null," ",r.a.createElement(C.a,{format:"dddd"},n.setDate((new Date).getDate()+a))),r.a.createElement("p",null,t.weather.description),r.a.createElement("img",{src:"https://www.weatherbit.io/static/img/icons/".concat(t.weather.icon,".png"),alt:""}),r.a.createElement("div",{className:"temp"},t.temp.toFixed(0)," \xb0C"))},B=function(e){var t=e.weather;return r.a.createElement("div",{className:"weekly-wrapper"},t.map((function(e,t){return r.a.createElement(q,{key:t,day:e,flag:t+1})})))},F=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSearch=function(t){e.props.loadWeather(t)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.weather;return r.a.createElement("section",null,r.a.createElement(D,{onSearch:this.onSearch}),null!==e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{weather:e}),r.a.createElement(B,{weather:e.data.slice(0,6)})))}}]),a}(n.Component),I={loadWeather:S},R=Object(s.b)((function(e){return{weather:e.weatherApp.weather}}),I)(F),H=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4D03AQG5p2qiT7jtGQ/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=D0IubSmpXnjWlTlhkgXiwYuYVjI2I2jN156Uxmg9_5o",alt:""}),r.a.createElement("div",null,r.a.createElement("p",{className:"by"},"Developed By @Matan Shaviro"),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/matan-shaviro-990b0272/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("a",{href:"https://github.com/matan3sh/vue-misBook",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square fa-2x"}))))))},L=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png",alt:"Weather-App",className:"logo"}),r.a.createElement("ul",{className:"main-menu"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About"))))};var M=function(){return r.a.createElement(s.a,{store:w},r.a.createElement(o.a,null,r.a.createElement(L,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:R}),r.a.createElement(i.a,{exact:!0,path:"/about",component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.384667f9.chunk.js.map