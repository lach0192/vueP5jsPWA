(function(e){function n(n){for(var o,r,i=n[0],u=n[1],l=n[2],s=0,d=[];s<i.length;s++)r=i[s],a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(n);while(d.length)d.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==a[i]&&(o=!1)}o&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={"app~d0ae3f07":0},a={"app~d0ae3f07":0},c=[];function i(e){return u.p+"js/"+({"about~31ecd969":"about~31ecd969","about~44028c3c":"about~44028c3c"}[e]||e)+"."+{"about~31ecd969":"ed86ca71","about~44028c3c":"ee8704ce"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"about~31ecd969":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="css/"+({"about~31ecd969":"about~31ecd969","about~44028c3c":"about~44028c3c"}[e]||e)+"."+{"about~31ecd969":"8eff713f","about~44028c3c":"31d6cfe0"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===o||s===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var o=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.request=o,delete r[e],p.parentNode.removeChild(p),t(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,t[1](c)}a[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vueP5jsPWA/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var p=s;c.push([0,"chunk-vendors~70205952","chunk-vendors~3ea19351","chunk-vendors~678f84af","chunk-vendors~fdc6512a","chunk-vendors~e1ee825c"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0418":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("h1",[e._v(e._s(e.heading))])])},r=[],a={name:"Header",props:{heading:String}},c=a,i=t("2877"),u=Object(i["a"])(c,o,r,!1,null,null,null);u.options.__file="Header.vue";n["a"]=u.exports},"06ea":function(e,n,t){},"0914":function(e,n,t){},"0d50":function(e,n,t){},"1cc7":function(e,n,t){},4257:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("InstallBtn"),t("router-view"),t("Footer")],1)},a=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n  "),t("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n  "),t("router-link",{class:{"p5-subpage-active":e.$route.path.includes("p5/")},attrs:{to:"/p5"}},[e._v("P5")])],1)},i=[],u={name:"NavBar"},l=u,s=(t("ed6b"),t("2877")),d=Object(s["a"])(l,c,i,!1,null,null,null);d.options.__file="NavBar.vue";var p=d.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{style:{display:e.installBtn},on:{click:function(n){e.installer()}}},[e._v("\n  Install App\n")])},m=[],b={name:"InstallBtn",props:{heading:String},data:function(){return{installBtn:"none",installer:void 0}},created:function(){var e,n=this;window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),e=t,n.installBtn="block"}),this.installer=function(){n.installBtn="none",e.prompt(),e.userChoice.then(function(n){"accepted"===n.outcome?console.log("User accepted"):console.log("User denied"),e=null})}}},v=b,h=(t("8a42"),Object(s["a"])(v,f,m,!1,null,"37c63e16",null));h.options.__file="InstallBtn.vue";var g=h.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[e._v("© "+e._s((new Date).getFullYear()))])},P=[],w={name:"Footer"},y=w,S=(t("5799"),Object(s["a"])(y,_,P,!1,null,"330d9bd6",null));S.options.__file="Footer.vue";var k=S.exports,O={components:{NavBar:p,InstallBtn:g,Footer:k}},j=O,C=(t("5c0b"),Object(s["a"])(j,r,a,!1,null,null,null));C.options.__file="App.vue";var A=C.exports,B=t("8c4f"),x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("Header",{attrs:{heading:"Vue PWA Processing Examples"}}),t("h4",[e._v("Template includes:")]),e._m(0),t("Counter")],1)},E=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("routing with "),t("i",[e._v("vue-router")])]),t("li",[e._v("state management with "),t("i",[e._v("vuex")])]),t("li",[e._v("localStorage with "),t("i",[e._v("vuex-persist")])]),t("li",[e._v("registered "),t("i",[e._v("service-worker")]),e._v(" for PWA capabilities")]),t("li",[e._v("file precaching with "),t("i",[e._v("workbox")]),e._v(" for offline use")]),t("li",[e._v("generative art created with "),t("i",[e._v("p5js")])]),t("li",[e._v("code linting with "),t("i",[e._v("eslint")]),e._v(" (prettier)")]),t("li",[e._v("styling with "),t("i",[e._v("scss")])])])}],W=t("0418"),F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"counter"},[t("h4",[e._v("Counter")]),t("p",[e._v(e._s(e.storeState.counter))]),t("button",{on:{click:e.increment}},[e._v("+")]),t("button",{on:{click:e.decrement}},[e._v("-")])])},N=[],T=t("2f62"),$=t("bfa9");o["a"].use(T["a"]);var I=new $["a"]({key:"vue-pwa-p5",storage:localStorage}),H=new T["a"].Store({plugins:[I.plugin],state:{counter:0},mutations:{incrementCounter:function(e){e.counter++},decrementCounter:function(e){e.counter--}}}),M={name:"Counter",data:function(){return{storeState:H.state}},methods:{increment:function(){H.commit("incrementCounter")},decrement:function(){H.commit("decrementCounter")}}},D=M,G=(t("c5e0"),Object(s["a"])(D,F,N,!1,null,"3f3509d0",null));G.options.__file="Counter.vue";var R=G.exports,q={components:{Header:W["a"],Counter:R}},L=q,J=(t("748e"),Object(s["a"])(L,x,E,!1,null,"1c99b803",null));J.options.__file="Home.vue";var U=J.exports;o["a"].use(B["a"]);var V=new B["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"f820"))}},{path:"/p5",name:"p5",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"83a7"))}},{path:"/p5/2dRandomWalker",name:"2dRandomWalker",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"63b2"))}},{path:"/p5/2dFollowWalker",name:"2dFollowWalker",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"c040"))}},{path:"/p5/2dNoiseWalker",name:"2dNoiseWalker",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"8ed8"))}},{path:"/p5/2dBouncingBall",name:"2dBouncingBall",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"43a3"))}},{path:"/p5/AccelerationFollow",name:"AccelerationFollow",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"c661"))}},{path:"/p5/GravityWindFriction",name:"GravityWindFriction",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"af36"))}},{path:"/p5/FluidResistance",name:"FluidResistance",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"0ad5"))}},{path:"/p5/GravitationalAttraction",name:"GravitationalAttraction",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"e01c"))}},{path:"/p5/MotionDirection",name:"MotionDirection",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"11bd"))}},{path:"/p5/PolarToCartesian",name:"PolarToCartesian",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"07a0"))}},{path:"/p5/OscillationSimple",name:"OscillationSimple",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"f36d"))}},{path:"/p5/OscillationSimple2",name:"OscillationSimple2",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"3d41"))}},{path:"/p5/OscillatorObjects",name:"OscillatorObjects",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"f895"))}},{path:"/p5/StaticWave",name:"StaticWave",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"3aa9"))}},{path:"/p5/SineWave",name:"SineWave",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"c404"))}},{path:"/p5/NoiseWave",name:"NoiseWave",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"79d8"))}},{path:"/p5/PendulumSwing",name:"PendulumSwing",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"5779"))}},{path:"/p5/Spring",name:"Spring",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"6278"))}},{path:"/p5/SingleParticle",name:"SingleParticle",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"0747"))}},{path:"/p5/ParticleArray",name:"ParticleArray",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"3da3"))}},{path:"/p5/ParticleSystem",name:"ParticleSystem",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"eb8f"))}},{path:"/p5/SystemOfSystems",name:"SystemOfSystems",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"bbc4"))}},{path:"/p5/ParticleInheritance",name:"ParticleInheritance",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"1dcf"))}},{path:"/p5/ParticleSystemForces",name:"ParticleSystemForces",component:function(){return Promise.all([t.e("about~31ecd969"),t.e("about~44028c3c")]).then(t.bind(null,"5e43"))}}]}),Y=t("9483");Object(Y["a"])("".concat("/vueP5jsPWA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:V,render:function(e){return e(A)}}).$mount("#app")},5799:function(e,n,t){"use strict";var o=t("0914"),r=t.n(o);r.a},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},"748e":function(e,n,t){"use strict";var o=t("0d50"),r=t.n(o);r.a},"8a42":function(e,n,t){"use strict";var o=t("1cc7"),r=t.n(o);r.a},c5e0:function(e,n,t){"use strict";var o=t("06ea"),r=t.n(o);r.a},ed6b:function(e,n,t){"use strict";var o=t("4257"),r=t.n(o);r.a}});
//# sourceMappingURL=app~d0ae3f07.0b2184f9.js.map