webpackJsonp([1],{0:function(t,e){},"0hT4":function(t,e){},"6Ku8":function(t,e){},H5vH:function(t,e){},"HP+9":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=s("7+uW"),r=s("hKoQ"),a=s.n(r),o=s("NYxO"),c={name:"Setter",data:function(){return{timerNum:0}},props:{initNum:{type:Number,default:function(){return 10}},setterName:{type:String,default:function(){return"Setter"}}},computed:{displayNum:function(){return this.timerNum>0?this.timerNum:1}},methods:{plus:function(){this.timerNum+=1},minus:function(){this.timerNum-=1},timeChange:function(){this.$emit("time-change",{setterName:this.setterName,displayNum:this.displayNum})}},created:function(){this.timerNum=this.initNum}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Setter"},[s("p",{staticClass:"Display"},[t._v(t._s(t.setterName)+" : "+t._s(t.displayNum))]),t._v(" "),s("div",{staticClass:"Buttons"},[s("div",{staticClass:"MinusButton",on:{click:function(e){t.minus(),t.timeChange()}}},[t._v("\n      -\n    ")]),t._v(" "),s("div",{staticClass:"PlusButton",on:{click:function(e){t.plus(),t.timeChange()}}},[t._v("\n      +\n    ")])])])},staticRenderFns:[]},h=s("VU/8")(c,u,!1,function(t){s("Q3++")},"data-v-49863452",null).exports,l=function(t){var e=void 0;switch(t){case"TIME_CHANGE":e="timeChange";break;case"SESSION_CHANGE":e="sessionChange";break;case"BREAK_CHANGE":e="breakChange";break;default:e="no constant"}return e},m={name:"Setters",computed:Object(o.c)(["breakLength","sessionLength"]),components:{Setter:h},methods:Object(o.b)({timeChange:l("TIME_CHANGE")})},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Setters"},[e("setter",{attrs:{"setter-name":"Break length","init-num":this.breakLength},on:{"time-change":this.timeChange}}),this._v(" "),e("setter",{attrs:{"setter-name":"Session length","init-num":this.sessionLength},on:{"time-change":this.timeChange}})],1)},staticRenderFns:[]},d=s("VU/8")(m,f,!1,function(t){s("0hT4")},"data-v-2ec2c05f",null).exports,p=s("M4fF"),v=s.n(p),_={name:"Display",props:{resetOnOff:{type:Boolean,default:function(){return!1}}},data:function(){return{state:"Session",timerCount:0,timerOnOff:!1,timerId:null}},computed:v.a.extend({totalSessionSecs:function(){return 60*this.sessionLength},totalBreakSecs:function(){return 60*this.breakLength},timer:function(){return"Session"===this.state?this.calculateTimer(this.totalSessionSecs,this.timerCount):"Break"===this.state?this.calculateTimer(this.totalBreakSecs,this.timerCount):void 0},classState:function(){return{Session:"Session"===this.state,Break:"Break"===this.state}}},Object(o.c)(["breakLength","sessionLength"])),watch:{resetOnOff:function(t){t&&(this.timerId&&clearInterval(this.timerId),this.timerOnOff=!1,this.state="Session",this.timerCount=0,this.$emit("reset-complete"))}},methods:{timerClick:function(){var t=this;this.timerOnOff=!this.timerOnOff,this.timerOnOff?this.timerId=setInterval(function(){"Session"===t.state&&t.totalSessionSecs===t.timerCount&&(t.state="Break",t.timerCount=-1),"Break"===t.state&&t.totalBreakSecs===t.timerCount&&(t.state="Session",t.timerCount=-1),t.timerCount+=1},1e3):(clearInterval(this.timerId),this.timerId=null)},calculateTimer:function(t,e){var s=t-e,n=Math.floor(s/60),i=s-60*n,r=void 0;switch(n){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:r="0"+String(n);break;default:r=String(n)}var a=void 0;switch(i){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:a="0"+String(i);break;default:a=String(i)}return r+" : "+a}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Display",class:this.classState,on:{click:this.timerClick}},[e("div",{staticClass:"State"},[this._v("\n    "+this._s(this.state)+"\n  ")]),this._v(" "),e("div",{staticClass:"Timer"},[this._v("\n    "+this._s(this.timer)+"\n  ")])])},staticRenderFns:[]},g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Reset",on:{click:this.timerReset}},[this._v("\n  Reset\n")])},staticRenderFns:[]},S={name:"PomodoroClock",data:function(){return{resetOnOff:!1}},components:{Setters:d,Display:s("VU/8")(_,C,!1,function(t){s("HP+9")},"data-v-e413cc00",null).exports,Reset:s("VU/8")({name:"Reset",methods:{timerReset:function(){this.$emit("timer-reset")}}},g,!1,function(t){s("6Ku8")},"data-v-4bca68b3",null).exports},methods:{timerReset:function(){this.resetOnOff=!0},resetComplete:function(){this.resetOnOff=!1}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"PomodoroClock"},[e("h1",{staticClass:"Heading"},[this._v("Pomodoro Clock")]),this._v(" "),e("setters"),this._v(" "),e("display",{attrs:{"reset-on-off":this.resetOnOff},on:{"reset-complete":this.resetComplete}}),this._v(" "),e("reset",{on:{"timer-reset":this.timerReset}})],1)},staticRenderFns:[]},N=s("VU/8")(S,k,!1,function(t){s("Tsex")},"data-v-1e298ae6",null).exports,O={name:"PortfolioFooter",props:{userUrl:{type:String,default:function(){return"#"}},codeRepoUrl:{type:String,default:function(){return"#"}}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"AppFooter"},[e("p",[this._v("\n    Coded by "),e("a",{attrs:{href:this.userUrl,target:"_blank"}},[this._v("KunhoLee")]),this._v("."),e("br"),this._v("\n    You can see the code from "),e("a",{attrs:{href:this.codeRepoUrl,target:"_blank"}},[this._v("here")]),this._v("!\n  ")])])},staticRenderFns:[]},E=s("VU/8")(O,b,!1,function(t){s("mCs6")},"data-v-3020729c",null).exports,R={name:"app",computed:Object(o.c)(["footerInfo"]),components:{PomodoroClock:N,AppFooter:E}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("pomodoro-clock"),this._v(" "),e("app-footer",{attrs:{"user-url":this.footerInfo.userUrl,"code-repo-url":this.footerInfo.codeRepoUrl}})],1)},staticRenderFns:[]},y=s("VU/8")(R,I,!1,function(t){s("rwK3"),s("H5vH")},"data-v-2863b2aa",null).exports,H=s("bOdI"),B=s.n(H),A=(n={},B()(n,l("SESSION_CHANGE"),function(t,e){t.sessionLength=e.length}),B()(n,l("BREAK_CHANGE"),function(t,e){t.breakLength=e.length}),n),U=B()({},l("TIME_CHANGE"),function(t,e){switch(e.setterName){case"Session length":t.commit(l("SESSION_CHANGE"),{length:e.displayNum});break;case"Break length":t.commit(l("BREAK_CHANGE"),{length:e.displayNum})}});i.a.use(o.a);var L=new o.a.Store({state:{breakLength:5,sessionLength:25,footerInfo:{userUrl:"https://daengdaenglee.github.io/portfolio",codeRepoUrl:"https://github.com/daengdaengLee/pomodoro_clock_vuejs"}},mutations:A,actions:U});a.a.polyfill(),i.a.config.productionTip=!1,new i.a({store:L,el:"#app",template:"<App/>",components:{App:y}})},"Q3++":function(t,e){},Tsex:function(t,e){},mCs6:function(t,e){},rwK3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.29a59fd466d19cb112e2.js.map