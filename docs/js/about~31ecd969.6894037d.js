(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~31ecd969"],{"014b":function(t,r,n){"use strict";var e=n("e53d"),i=n("07e3"),o=n("8e60"),a=n("63b6"),s=n("9138"),c=n("ebfd").KEY,u=n("294c"),l=n("dbdb"),f=n("45f2"),v=n("62a0"),p=n("5168"),b=n("ccb9"),S=n("6718"),h=n("47ee"),_=n("9003"),d=n("e4ae"),y=n("f772"),m=n("36c3"),g=n("1bc3"),k=n("aebd"),P=n("a159"),O=n("0395"),L=n("bf0b"),w=n("d9f6"),F=n("c3a1"),T=L.f,A=w.f,M=O.f,N=e.Symbol,W=e.JSON,x=W&&W.stringify,C="prototype",D=p("_hidden"),G=p("toPrimitive"),I={}.propertyIsEnumerable,j=l("symbol-registry"),E=l("symbols"),B=l("op-symbols"),R=Object[C],V="function"==typeof N,J=e.QObject,H=!J||!J[C]||!J[C].findChild,q=o&&u(function(){return 7!=P(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,r,n){var e=T(R,r);e&&delete R[r],A(t,r,n),e&&t!==R&&A(R,r,e)}:A,K=function(t){var r=E[t]=P(N[C]);return r._k=t,r},Q=V&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},Y=function(t,r,n){return t===R&&Y(B,r,n),d(t),r=g(r,!0),d(n),i(E,r)?(n.enumerable?(i(t,D)&&t[D][r]&&(t[D][r]=!1),n=P(n,{enumerable:k(0,!1)})):(i(t,D)||A(t,D,k(1,{})),t[D][r]=!0),q(t,r,n)):A(t,r,n)},$=function(t,r){d(t);var n,e=h(r=m(r)),i=0,o=e.length;while(o>i)Y(t,n=e[i++],r[n]);return t},z=function(t,r){return void 0===r?P(t):$(P(t),r)},U=function(t){var r=I.call(this,t=g(t,!0));return!(this===R&&i(E,t)&&!i(B,t))&&(!(r||!i(this,t)||!i(E,t)||i(this,D)&&this[D][t])||r)},X=function(t,r){if(t=m(t),r=g(r,!0),t!==R||!i(E,r)||i(B,r)){var n=T(t,r);return!n||!i(E,r)||i(t,D)&&t[D][r]||(n.enumerable=!0),n}},Z=function(t){var r,n=M(m(t)),e=[],o=0;while(n.length>o)i(E,r=n[o++])||r==D||r==c||e.push(r);return e},tt=function(t){var r,n=t===R,e=M(n?B:m(t)),o=[],a=0;while(e.length>a)!i(E,r=e[a++])||n&&!i(R,r)||o.push(E[r]);return o};V||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=v(arguments.length>0?arguments[0]:void 0),r=function(n){this===R&&r.call(B,n),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),q(this,t,k(1,n))};return o&&H&&q(R,t,{configurable:!0,set:r}),K(t)},s(N[C],"toString",function(){return this._k}),L.f=X,w.f=Y,n("6abf").f=O.f=Z,n("355d").f=U,n("9aa9").f=tt,o&&!n("b8e3")&&s(R,"propertyIsEnumerable",U,!0),b.f=function(t){return K(p(t))}),a(a.G+a.W+a.F*!V,{Symbol:N});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;rt.length>nt;)p(rt[nt++]);for(var et=F(p.store),it=0;et.length>it;)S(et[it++]);a(a.S+a.F*!V,"Symbol",{for:function(t){return i(j,t+="")?j[t]:j[t]=N(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var r in j)if(j[r]===t)return r},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!V,"Object",{create:z,defineProperty:Y,defineProperties:$,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),W&&a(a.S+a.F*(!V||u(function(){var t=N();return"[null]"!=x([t])||"{}"!=x({a:t})||"{}"!=x(Object(t))})),"JSON",{stringify:function(t){var r,n,e=[t],i=1;while(arguments.length>i)e.push(arguments[i++]);if(n=r=e[1],(y(r)||void 0!==t)&&!Q(t))return _(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!Q(r))return r}),e[1]=r,x.apply(W,e)}}),N[C][G]||n("35e8")(N[C],G,N[C].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(e.JSON,"JSON",!0)},"0293":function(t,r,n){var e=n("241e"),i=n("53e2");n("ce7e")("getPrototypeOf",function(){return function(t){return i(e(t))}})},1654:function(t,r,n){"use strict";var e=n("71c1")(!0);n("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,n=this._i;return n>=r.length?{value:void 0,done:!0}:(t=e(r,n),this._i+=t.length,{value:t,done:!1})})},"1df8":function(t,r,n){var e=n("63b6");e(e.S,"Object",{setPrototypeOf:n("ead6").set})},"36bd":function(t,r,n){"use strict";var e=n("4bf8"),i=n("77f1"),o=n("9def");t.exports=function(t){var r=e(this),n=o(r.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>s)r[s++]=t;return r}},"386b":function(t,r,n){var e=n("5ca1"),i=n("79e5"),o=n("be13"),a=/"/g,s=function(t,r,n,e){var i=String(o(t)),s="<"+r;return""!==n&&(s+=" "+n+'="'+String(e).replace(a,"&quot;")+'"'),s+">"+i+"</"+r+">"};t.exports=function(t,r){var n={};n[t]=r(s),e(e.P+e.F*i(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}),"String",n)}},"46a7":function(t,r,n){var e=n("63b6");e(e.S+e.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5168:function(t,r,n){var e=n("dbdb")("wks"),i=n("62a0"),o=n("e53d").Symbol,a="function"==typeof o,s=t.exports=function(t){return e[t]||(e[t]=a&&o[t]||(a?o:i)("Symbol."+t))};s.store=e},"62a0":function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+e).toString(36))}},"660b":function(t,r,n){"use strict";var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"p5nav"}},[n("router-link",{attrs:{to:"/p5"}},[t._v("Spinning Box")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/2dRandomWalker"}},[t._v("2D Random Walker")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/2dFollowWalker"}},[t._v("2D Follow Walker")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/2dNoiseWalker"}},[t._v("2D Noise Walker")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/2dBouncingBall"}},[t._v("2D Bouncing Ball")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/AccelerationFollow"}},[t._v("Acceleration Follow")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/GravityWindFriction"}},[t._v("Gravity Wind Friction")]),t._v("\n  | "),n("router-link",{attrs:{to:"/p5/FluidResistance"}},[t._v("Fluid Resistance")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/GravitationalAttraction"}},[t._v("Gravitational Attraction")]),t._v("\n  | "),n("router-link",{attrs:{to:"/p5/MotionDirection"}},[t._v("Motion Direction")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/PolarToCartesian"}},[t._v("Polar to Cartesian")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/OscillationSimple"}},[t._v("Oscillation Simple")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/OscillationSimple2"}},[t._v("Oscillation Simple II")]),t._v("\n  | "),n("router-link",{attrs:{to:"/p5/OscillatorObjects"}},[t._v("Oscillator Objects")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/StaticWave"}},[t._v("Static Wave")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/SineWave"}},[t._v("Sine Wave")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/NoiseWave"}},[t._v("Noise Wave")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/PendulumSwing"}},[t._v("Pendulum Swing")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/Spring"}},[t._v("Spring")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/SingleParticle"}},[t._v("Single Particle")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/ParticleArray"}},[t._v("Particle Array")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/ParticleSystem"}},[t._v("Particle System")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/SystemOfSystems"}},[t._v("System of Systems")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/p5/ParticleInheritance"}},[t._v("Particle Inheritance")]),t._v("\n  |\n  "),n("router-link",{attrs:{to:"/p5/ParticleSystemForces"}},[t._v("Particle Systems with Forces")])],1)},i=[],o={name:"P5NavBar"},a=o,s=(n("ba9c"),n("2877")),c=Object(s["a"])(a,e,i,!1,null,null,null);c.options.__file="P5NavBar.vue";r["a"]=c.exports},6718:function(t,r,n){var e=n("e53d"),i=n("584a"),o=n("b8e3"),a=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var r=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in r||s(r,t,{value:a.f(t)})}},"673e":function(t,r,n){"use strict";n("386b")("sub",function(t){return function(){return t(this,"sub","","")}})},"69d3":function(t,r,n){n("6718")("asyncIterator")},"6c1c":function(t,r,n){n("c367");for(var e=n("e53d"),i=n("35e8"),o=n("481b"),a=n("5168")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=e[u],f=l&&l.prototype;f&&!f[a]&&i(f,a,u),o[u]=o.Array}},"6c7b":function(t,r,n){var e=n("5ca1");e(e.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},"765d":function(t,r,n){n("6718")("observable")},"7cd6":function(t,r,n){var e=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},"7d7b":function(t,r,n){var e=n("e4ae"),i=n("7cd6");t.exports=n("584a").getIterator=function(t){var r=i(t);if("function"!=typeof r)throw TypeError(t+" is not iterable!");return e(r.call(t))}},8449:function(t,r,n){"use strict";n("386b")("anchor",function(t){return function(r){return t(this,"a","name",r)}})},"93ec":function(t,r,n){},9427:function(t,r,n){var e=n("63b6");e(e.S,"Object",{create:n("a159")})},ba9c:function(t,r,n){"use strict";var e=n("93ec"),i=n.n(e);i.a},c207:function(t,r){},c367:function(t,r,n){"use strict";var e=n("8436"),i=n("50ed"),o=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",function(t,r){this._t=a(t),this._i=0,this._k=r},function(){var t=this._t,r=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==r?n:"values"==r?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},ccb9:function(t,r,n){r.f=n("5168")}}]);
//# sourceMappingURL=about~31ecd969.6894037d.js.map