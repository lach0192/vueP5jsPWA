(function(e){function t(t){for(var r,o,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)o=u[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"159ba023"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"86824a82"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e),c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vueP5jsPWA/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",[e._v(e._s(e.heading))])])},o=[],a={name:"Header",props:{heading:String}},i=a,u=n("2877"),l=Object(u["a"])(i,r,o,!1,null,null,null);l.options.__file="Header.vue";t["a"]=l.exports},"06ea":function(e,t,n){},"0914":function(e,t,n){},"1cc7":function(e,t,n){},4257:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("InstallBtn"),n("router-view"),n("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n  "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n  "),n("router-link",{attrs:{to:"/p5"}},[e._v("P5")])],1)},u=[],l={name:"NavBar"},c=l,s=(n("ed6b"),n("2877")),f=Object(s["a"])(c,i,u,!1,null,null,null);f.options.__file="NavBar.vue";var p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{style:{display:e.installBtn},on:{click:function(t){e.installer()}}},[e._v("\n  Install App\n")])},v=[],m={name:"InstallBtn",props:{heading:String},data:function(){return{installBtn:"none",installer:void 0}},created:function(){var e,t=this;window.addEventListener("beforeinstallprompt",function(n){n.preventDefault(),e=n,t.installBtn="block"}),this.installer=function(){t.installBtn="none",e.prompt(),e.userChoice.then(function(t){"accepted"===t.outcome?console.log("User accepted"):console.log("User denied"),e=null})}}},h=m,b=(n("8a42"),Object(s["a"])(h,d,v,!1,null,"37c63e16",null));b.options.__file="InstallBtn.vue";var _=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[e._v("© "+e._s((new Date).getFullYear()))])},w=[],y={name:"Footer"},k=y,j=(n("5799"),Object(s["a"])(k,g,w,!1,null,"330d9bd6",null));j.options.__file="Footer.vue";var C=j.exports,x={components:{NavBar:p,InstallBtn:_,Footer:C}},E=x,O=(n("5c0b"),Object(s["a"])(E,o,a,!1,null,null,null));O.options.__file="App.vue";var P=O.exports,B=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header",{attrs:{heading:"Vue PWA Processing Examples"}}),n("h4",[e._v("Template includes:")]),e._m(0),n("Counter")],1)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("routing with "),n("i",[e._v("vue-router")])]),n("li",[e._v("state management with "),n("i",[e._v("vuex")])]),n("li",[e._v("localStorage with "),n("i",[e._v("vuex-persist")])]),n("li",[n("i",[e._v("service-worker")]),e._v(" registered for PWA capabilities")]),n("li",[e._v("file precaching with "),n("i",[e._v("workbox")]),e._v(" for offline use")]),n("li",[e._v("code linting with "),n("i",[e._v("eslint")]),e._v(" (prettier)")]),n("li",[e._v("styling with "),n("i",[e._v("scss")])])])}],N=n("0418"),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counter"},[n("h4",[e._v("Counter")]),n("p",[e._v(e._s(e.storeState.counter))]),n("button",{on:{click:e.increment}},[e._v("+")]),n("button",{on:{click:e.decrement}},[e._v("-")])])},F=[],T=n("2f62"),$=n("bfa9");r["a"].use(T["a"]);var H=new $["a"]({key:"vue-pwa-p5",storage:localStorage}),I=new T["a"].Store({plugins:[H.plugin],state:{counter:0},mutations:{incrementCounter:function(e){e.counter++},decrementCounter:function(e){e.counter--}}}),M={name:"Counter",data:function(){return{storeState:I.state}},methods:{increment:function(){I.commit("incrementCounter")},decrement:function(){I.commit("decrementCounter")}}},q=M,L=(n("c5e0"),Object(s["a"])(q,W,F,!1,null,"3f3509d0",null));L.options.__file="Counter.vue";var D=L.exports,J={components:{Header:N["a"],Counter:D}},R=J,U=Object(s["a"])(R,S,A,!1,null,null,null);U.options.__file="Home.vue";var V=U.exports;r["a"].use(B["a"]);var Y=new B["a"]({routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/p5",name:"p5",component:function(){return n.e("about").then(n.bind(null,"83a7"))}},{path:"/p5/2dRandomWalker",name:"2dRandomWalker",component:function(){return n.e("about").then(n.bind(null,"63b2"))}},{path:"/p5/2dFollowWalker",name:"2dFollowWalker",component:function(){return n.e("about").then(n.bind(null,"c040"))}},{path:"/p5/2dNoiseWalker",name:"2dNoiseWalker",component:function(){return n.e("about").then(n.bind(null,"8ed8"))}}]}),z=n("9483");Object(z["a"])("".concat("/vueP5jsPWA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:Y,render:function(e){return e(P)}}).$mount("#app")},5799:function(e,t,n){"use strict";var r=n("0914"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"8a42":function(e,t,n){"use strict";var r=n("1cc7"),o=n.n(r);o.a},c5e0:function(e,t,n){"use strict";var r=n("06ea"),o=n.n(r);o.a},ed6b:function(e,t,n){"use strict";var r=n("4257"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0b1b9514.js.map