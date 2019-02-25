(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~77abfdfc"],{"0e9b":function(t,n,a){"use strict";var e=a("1e33"),i=a.n(e);i.a},"1e33":function(t,n,a){},"27e0":function(t,n,a){"use strict";var e=a("d327"),i=a.n(e);i.a},"43a3":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"p52dBouncingBall"},[a("Header",{attrs:{heading:"Processing JS"}}),a("P5NavBar"),a("div",{ref:"canvas",staticClass:"canvasP5"})],1)},i=[],s=(a("6c7b"),a("0418")),o=a("660b"),c={components:{Header:s["a"],P5NavBar:o["a"]},data:function(){return{script:null,ps:null,canvas:null,location:null,velocity:null}},mounted:function(){var t=this;this.script=function(n){n.setup=function(){t.canvas=n.createCanvas(n.windowWidth,n.windowHeight),t.canvas.parent(t.$refs.canvas),n.frameRate(30),n.background(255),t.location=n.createVector(100,100),t.velocity=n.createVector(2.5,5)},n.draw=function(){n.background(255,50),t.location.add(t.velocity),(t.location.x>n.width-25||t.location.x<25)&&(t.velocity.x=-1*t.velocity.x),(t.location.y>n.height-25||t.location.y<25)&&(t.velocity.y=-1*t.velocity.y),n.noStroke(),n.fill("#42b983"),n.ellipse(t.location.x,t.location.y,50,50)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}};var n=a("237d");this.ps=new n(this.script),console.log(this.ps)}},r=c,l=(a("27e0"),a("2877")),u=Object(l["a"])(r,e,i,!1,null,"663134c5",null);u.options.__file="2dBouncingBall.vue";n["default"]=u.exports},"63b2":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"p52dRandomWalker"},[a("Header",{attrs:{heading:"Processing JS"}}),a("P5NavBar"),a("div",{ref:"canvas",staticClass:"canvasP5"})],1)},i=[],s=a("d225"),o=a("b0b4"),c=(a("cadf"),a("551c"),a("097d"),a("0418")),r=a("660b"),l={components:{Header:c["a"],P5NavBar:r["a"]},data:function(){return{script:null,ps:null,canvas:null,myWalker:null}},mounted:function(){var t=this;this.script=function(n){n.setup=function(){t.canvas=n.createCanvas(n.windowWidth,n.windowHeight),t.canvas.parent(t.$refs.canvas),n.frameRate(30),n.background(255),t.myWalker=new a},n.draw=function(){t.myWalker.display(),t.myWalker.step()};var a=function(){function t(){Object(s["a"])(this,t),this.x=n.width/2,this.y=n.height/2}return Object(o["a"])(t,[{key:"display",value:function(){n.stroke("#42b983"),n.point(this.x,this.y)}},{key:"step",value:function(){var t=n.random(-1,1),a=n.random(-1,1);this.x+=t,this.y+=a}}]),t}();n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}};var n=a("237d");this.ps=new n(this.script),console.log(this.ps)}},u=l,d=(a("0e9b"),a("2877")),v=Object(d["a"])(u,e,i,!1,null,"4e6e1e8c",null);v.options.__file="2dRandomWalker.vue";n["default"]=v.exports},6996:function(t,n,a){},"8ed8":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"p52dNoiseWalker"},[a("Header",{attrs:{heading:"Processing JS"}}),a("P5NavBar"),a("div",{ref:"canvas",staticClass:"canvasP5"})],1)},i=[],s=(a("6c7b"),a("cadf"),a("551c"),a("097d"),a("0418")),o=a("660b"),c={components:{Header:s["a"],P5NavBar:o["a"]},data:function(){return{script:null,ps:null,canvas:null,t:null}},mounted:function(){var t=this;this.script=function(n){n.setup=function(){t.canvas=n.createCanvas(n.windowWidth,n.windowHeight),t.canvas.parent(t.$refs.canvas),n.frameRate(30),n.background(255),t.t=0},n.draw=function(){var a=n.width*n.noise(t.t),e=n.height*n.noise(t.t+5),i=255*n.noise(t.t+10),s=255*n.noise(t.t+15),o=255*n.noise(t.t+20);n.noStroke(),n.fill(i,s,o),n.ellipse(a,e,120,120),t.t=t.t+.01},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}};var n=a("237d");this.ps=new n(this.script),console.log(this.ps)}},r=c,l=(a("a0cc"),a("2877")),u=Object(l["a"])(r,e,i,!1,null,"56baa793",null);u.options.__file="2dNoiseWalker.vue";n["default"]=u.exports},a0cc:function(t,n,a){"use strict";var e=a("6996"),i=a.n(e);i.a},b1b1:function(t,n,a){"use strict";var e=a("cf5b"),i=a.n(e);i.a},c040:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"p52dFollowWalker"},[a("Header",{attrs:{heading:"Processing JS"}}),a("P5NavBar"),a("div",{ref:"canvas",staticClass:"canvasP5"})],1)},i=[],s=a("d225"),o=a("b0b4"),c=a("0418"),r=a("660b"),l={components:{Header:c["a"],P5NavBar:r["a"]},data:function(){return{script:null,ps:null,canvas:null,myWalker:null}},mounted:function(){var t=this;this.script=function(n){n.setup=function(){t.canvas=n.createCanvas(n.windowWidth,n.windowHeight),t.canvas.parent(t.$refs.canvas),n.frameRate(30),n.background(255),t.myWalker=new a},n.draw=function(){t.myWalker.display(),t.myWalker.step()};var a=function(){function t(){Object(s["a"])(this,t),this.x=n.width/2,this.y=n.height/2}return Object(o["a"])(t,[{key:"display",value:function(){n.stroke("#42b983"),n.point(this.x,this.y)}},{key:"step",value:function(){var t=n.random(-1,1),a=n.random(-1,1),e=n.random(0,100);e<=25&&(n.mouseY<this.y&&(a=n.random(-1,0)),n.mouseY>this.y&&(a=n.random(0,1)),n.mouseX<this.x&&(t=n.random(-1,0)),n.mouseX>this.x&&(t=n.random(0,1))),this.x+=t,this.y+=a}}]),t}();n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}};var n=a("237d");this.ps=new n(this.script),console.log(this.ps)}},u=l,d=(a("b1b1"),a("2877")),v=Object(d["a"])(u,e,i,!1,null,"3af16651",null);v.options.__file="2dFollowWalker.vue";n["default"]=v.exports},cf5b:function(t,n,a){},d327:function(t,n,a){}}]);
//# sourceMappingURL=about~77abfdfc.0b9a33a1.js.map