(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04e1a912"],{"5f35":function(t,e,a){},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"login-box clearfix container"},[a("div",{staticClass:"manage-title"},[t._v("商家后台管理系统")]),a("div",{staticClass:"form-box"},[a("div",{staticClass:"form-group clearfix"},[a("label",{staticClass:"fl form-title",attrs:{for:"email"}},[t._v("邮箱")]),a("div",{staticClass:"fl form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.email,expression:"userInfo.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",autocomplete:"off",placeholder:"请输入邮箱"},domProps:{value:t.userInfo.email},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group clearfix"},[a("label",{staticClass:"fl form-title",attrs:{for:"password"}},[t._v("密码")]),a("div",{staticClass:"fl form-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",autocomplete:"off",placeholder:"密码6-16个字符"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})])]),a("div",{staticClass:"form-group form-btn-box"},[a("div",{staticClass:"btn-box"},[a("button",{staticClass:"btn btn-primary btn-block",on:{click:t.login}},[t._v("登录")])]),a("div",{staticClass:"clearfix login-text"},[a("span",{staticClass:"fl",on:{click:t.goRegister}},[t._v("没有账号，立即注册")]),a("span",{staticClass:"fr"},[t._v("找回密码")])])])])]),a("MsgBox")],1)},o=[],n=a("e3a8"),r=a("3a33"),i=a("e2a7"),c={name:"Register",data:function(){return{userInfo:{email:"",password:""}}},methods:{login:function(){var t=this,e=n["a"].valid(this.userInfo);!1!==e.pass?(console.log(i["a"].request),i["a"].request("POST","/login",this.userInfo,(function(e){console.log("result.data.code ==>",e),1020==e.data.code&&(t.$cookies.set("_abc",e.data.token,"5d"),t.$router.push({name:"Type"}))}))):this.$showToast({message:e.msg,duration:3e3})},goRegister:function(){this.$router.push({name:"Register"})}},components:{MsgBox:r["a"]},created:function(){}},u=c,l=(a("e019"),a("2877")),f=Object(l["a"])(u,s,o,!1,null,"d0f29dc2",null);e["default"]=f.exports},bee2:function(t,e,a){"use strict";function s(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function o(t,e,a){return e&&s(t.prototype,e),a&&s(t,a),t}a.d(e,"a",(function(){return o}))},d4ec:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return s}))},e019:function(t,e,a){"use strict";var s=a("5f35"),o=a.n(s);o.a},e2a7:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("d4ec"),o=a("bee2"),n=a("2b0e"),r=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"request",value:function(t,e,a,s){console.log("Vue ==> ",n["a"]),"POST"===t?a?n["a"].prototype.axios({method:"POST",url:e,data:a}).then(s).catch((function(t){})):n["a"].prototype.axios({method:"POST",url:e}).then(s).catch((function(t){})):n["a"].prototype.axios({method:"GET",url:e,params:a}).then(s).catch((function(t){console.log("err ==>",t)}))}}]),t}(),i=new r},e3a8:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("d4ec"),o=a("bee2"),n=function(){function t(){Object(s["a"])(this,t),this.data={email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},nickname:{reg:/^[\w\u4e00-\u9fa5]{1,10}$/,msg:"昵称只支持字母、汉字、数字、_组合"},password:{reg:/^[A-Za-z]\w{5,15}$/,msg:"密码只支持字母、数字、_组合且首字符必须为字母"},code:{reg:/^\d{6}$/,msg:"验证码必须为6位数字"}}}return Object(o["a"])(t,[{key:"valid",value:function(t){for(var e in t)if(!this.data[e].reg.test(t[e]))return{pass:!1,msg:this.data[e].msg};return!0}}]),t}(),r=new n}}]);
//# sourceMappingURL=chunk-04e1a912.7f0234d1.js.map