(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"04d9":function(t,e,a){},"0e50":function(t,e,a){},1:function(t,e){},1762:function(t,e,a){"use strict";var n=a("5116"),r=a.n(n);r.a},2:function(t,e){},"327a":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="4678"},"4fe5":function(t,e,a){"use strict";var n=a("0e50"),r=a.n(n);r.a},5116:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("f23d"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("router-view")],1)])},s=[],i={name:"app"},l=i,c=(a("034f"),a("2877")),d=Object(c["a"])(l,o,s,!1,null,null,null),u=d.exports,f=(a("202f"),a("8c4f")),m=a("28dd"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"head-main"},[a("a-row",[a("a-col",{staticStyle:{height:"75px"},attrs:{span:3}},[a("div",{staticClass:"btn-head"},[a("a-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("上传图片")]),a("a-modal",{attrs:{title:"上传图片",visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"选择图片","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-upload",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:t.headers},on:{change:t.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),t._v(" 点击选择图片 ")],1)],1)],1),a("p",[t._v("只能上传jpg/png文件，且不超过500kb")]),a("a-form-item",{attrs:{label:"选择文件夹 ","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-select",{staticClass:"input-head",staticStyle:{width:"80%"},attrs:{defaultValue:"list-a"}},[a("a-select-option",{attrs:{value:"list-a"}},[t._v("list-a")]),a("a-select-option",{attrs:{value:"list-b"}},[t._v("list-b")])],1)],1)],1)],1)],1)]),a("a-col",{staticStyle:{height:"75px"},attrs:{span:3}},[a("div",{staticClass:"btn-head"},[a("router-link",{attrs:{to:"folder"}},[a("a-button",{staticStyle:{"background-color":"green"},attrs:{type:"primary"}},[t._v("文件夹管理")])],1)],1)]),a("a-col",{staticStyle:{height:"75px"},attrs:{span:3}},[a("div",{staticClass:"btn-head"},[a("router-link",{attrs:{to:"decryption"}},[a("a-button",{attrs:{type:"primary"}},[t._v("水印验证")])],1)],1)]),a("a-col",{attrs:{span:4}},[a("a-select",{staticClass:"input-head",staticStyle:{width:"80%"},attrs:{defaultValue:"Home"}},[a("a-select-option",{attrs:{value:"Home"}},[t._v("Home")]),a("a-select-option",{attrs:{value:"Company"}},[t._v("Company")])],1)],1),a("a-col",{attrs:{span:6}},[a("a-input-search",{staticClass:"input-head",attrs:{placeholder:"input search text",enterButton:""},on:{search:t.onSearch}})],1)],1)],1),a("div",[a("keep-alive",[a("router-view")],1)],1)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-main"},[a("h2",[t._v("图片管理平台")])])}],b=(a("b0c0"),{data:function(){return{visible:!1,confirmLoading:!1,headers:{authorization:"authorization-text"},formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},methods:{onSearch:function(t){console.log(t)},showModal:function(){this.visible=!0},handleOk:function(t){var e=this;this.ModalText="The modal will be closed after two seconds",this.confirmLoading=!0,setTimeout((function(){e.visible=!1,e.confirmLoading=!1}),2e3)},handleCancel:function(t){console.log("Clicked cancel button"),this.visible=!1},handleChange:function(t){"uploading"!==t.file.status&&console.log(t.file,t.fileList),"done"===t.file.status?this.$message.success("".concat(t.file.name," file uploaded successfully")):"error"===t.file.status&&this.$message.error("".concat(t.file.name," file upload failed."))},handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)}))},handleSelectChange:function(t){console.log(t),this.form.setFieldsValue({note:"Hi, ".concat("male"===t?"man":"lady","!")})}}}),g=b,v=(a("e90f"),Object(c["a"])(g,p,h,!1,null,"36b6a69e",null)),j=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{attrs:{id:"main"}},[t._m(0),a("router-view")],1)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-head"},[a("p",[t._v("图片管理平台")])])}],_={data:function(){return{}},beforeCreate:function(){document.getElementsByTagName("body")[0].className="active"},beforeDestroy:function(){document.body.removeAttribute("class","active")}},O=_,k=(a("fa9a"),Object(c["a"])(O,y,w,!1,null,null,null)),x=k.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{rules:[{required:!0,message:"Please input your username!"}]}],expression:"[\n\t\t          'userName',\n\t\t          { rules: [{ required: true, message: 'Please input your username!' }] },\n\t\t        ]"}],attrs:{placeholder:"Username"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"}]}],expression:"[\n\t\t          'password',\n\t\t          { rules: [{ required: true, message: 'Please input your Password!' }] },\n\t\t        ]"}],attrs:{type:"password",placeholder:"Password"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember",{valuePropName:"checked",initialValue:!0}],expression:"[\n\t\t          'remember',\n\t\t          {\n\t\t            valuePropName: 'checked',\n\t\t            initialValue: true,\n\t\t          },\n\t\t        ]"}]},[t._v(" Remember me ")]),a("a",{staticClass:"login-form-forgot",attrs:{href:""}},[t._v(" 忘记密码 ")]),a("router-link",{attrs:{to:"/home"}},[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[t._v(" 登录 ")])],1),a("router-link",{attrs:{to:"register"}},[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary"}},[t._v(" 注册 ")])],1)],1)],1)],1)},I=[],S={beforeCreate:function(){this.form=this.$form.createForm(this,{name:"login_form"})},methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,e){t||console.log("Received values of form: ",e)}))}}},P=S,N=(a("1762"),Object(c["a"])(P,C,I,!1,null,"0f600f35",null)),U=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-main"},[t._m(0),a("div",[a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",t._b({attrs:{label:"邮箱"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n\t\t          'email',\n\t\t          {\n\t\t            rules: [\n\t\t              {\n\t\t                type: 'email',\n\t\t                message: 'The input is not valid E-mail!',\n\t\t              },\n\t\t              {\n\t\t                required: true,\n\t\t                message: 'Please input your E-mail!',\n\t\t              },\n\t\t            ],\n\t\t          },\n\t\t        ]"}]})],1),a("a-form-item",t._b({attrs:{label:"密码"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your password!"},{validator:t.validateToNextPassword}]}],expression:"[\n\t\t          'password',\n\t\t          {\n\t\t            rules: [\n\t\t              {\n\t\t                required: true,\n\t\t                message: 'Please input your password!',\n\t\t              },\n\t\t              {\n\t\t                validator: validateToNextPassword,\n\t\t              },\n\t\t            ],\n\t\t          },\n\t\t        ]"}],attrs:{type:"password"}})],1),a("a-form-item",t._b({attrs:{label:"确认密码"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:t.compareToFirstPassword}]}],expression:"[\n\t\t          'confirm',\n\t\t          {\n\t\t            rules: [\n\t\t              {\n\t\t                required: true,\n\t\t                message: 'Please confirm your password!',\n\t\t              },\n\t\t              {\n\t\t                validator: compareToFirstPassword,\n\t\t              },\n\t\t            ],\n\t\t          },\n\t\t        ]"}],attrs:{type:"password"},on:{blur:t.handleConfirmBlur}})],1),a("a-form-item",t._b({attrs:{label:"验证码"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["verificationCode",{rules:[{required:!0,message:"Please input verification code!"}]}],expression:"[\n\t\t\t\t      'verificationCode',\n\t\t\t\t      {\n\t\t\t\t        rules: [\n\t\t\t\t          {\n\t\t\t\t            required: true,\n\t\t\t\t            message: 'Please input verification code!',\n\t\t\t\t          }\n\t\t\t\t        ]\n\t\t\t\t      },\n\t\t\t\t    ]"}],attrs:{type:"text"}})],1),a("a-form-item",t._b({},"a-form-item",t.tailFormItemLayout,!1),[a("a-button",{staticClass:"register-form-button",attrs:{type:"primary","html-type":"submit"}},[t._v(" Register ")])],1)],1)],1)])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-head"},[a("p",[t._v("图片管理平台")])])}],E={data:function(){return{confirmDirty:!1,formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFieldsAndScroll((function(t,e){t||console.log("Received values of form: ",e)}))},handleConfirmBlur:function(t){var e=t.target.value;this.confirmDirty=this.confirmDirty||!!e},compareToFirstPassword:function(t,e,a){var n=this.form;e&&e!==n.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()},validateToNextPassword:function(t,e,a){var n=this.form;e&&this.confirmDirty&&n.validateFields(["confirm"],{force:!0}),a()}}},$=E,T=(a("4fe5"),Object(c["a"])($,D,z,!1,null,"09010a26",null)),F=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{attrs:{columns:t.columns,rowKey:function(t){return t.pictureId},dataSource:t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,n){return[a("a-button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("分享")]),t.data.length?a("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(n.key)}}},[a("a-button",{staticStyle:{"background-color":"red"},attrs:{type:"primary"}},[t._v("Delete")])],1):t._e()]}}])})],1)},q=[],M=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2909")),R=a("ade3"),V=a("67ad"),A=a.n(V);function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(Object(a),!0).forEach((function(e){Object(R["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var G=[{title:"图片ID",dataIndex:"pictureId",sorter:!0,width:"13%"},{title:"所属文件夹",dataIndex:"folder",width:"16%"},{title:"图片名称",dataIndex:"pictureName",width:"16%"},{title:"上传时间",dataIndex:"uploadTime",width:"16%"},{title:"图片格式",dataIndex:"pictureFormat",width:"13%"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},width:"13%"}],J={mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,columns:G,isShowAboutDialog:!1,visible:!1}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=H({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(H({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),this.loading=!0,A()({url:"http://localhost:3000/user/picture",method:"get",data:H({},e),type:"json"}).then((function(e){var a=H({},t.pagination);a.total=200,t.loading=!1,t.data=e.results,t.pagination=a}))},onDelete:function(t){var e=Object(M["a"])(this.data);this.data=e.filter((function(e){return e.key!==t}))},info:function(){var t=this.$createElement;this.$info({title:"分享",content:t("div",{},[t("p","已生成分享链接，复制发送给朋友吧~"),t("p","https://www.tupian.com/1.jpg")]),onOk:function(){}})}}},K=J,Y=Object(c["a"])(K,L,q,!1,null,null,null),Q=Y.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-table",{attrs:{columns:t.columns,rowKey:function(t){return t.folderName},dataSource:t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,n){return[a("a-button",{attrs:{type:"primary"}},[t._v("分享")]),t.data.length?a("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(n.key)}}},[a("a-button",{staticStyle:{"background-color":"red"},attrs:{type:"primary"}},[t._v("Delete")])],1):t._e()]}}])})},X=[];function Z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function tt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(a),!0).forEach((function(e){Object(R["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var et=[{title:"文件夹名称",dataIndex:"folderName",width:"25%"},{title:"包含文件个数",dataIndex:"numOfFile",width:"25%"},{title:"最新更新时间",dataIndex:"updateTime",width:"25%"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},width:"25%"}],at={mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,columns:et}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=tt({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(tt({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),this.loading=!0,A()({url:"http://localhost:3000/user/folder",method:"get",data:tt({},e),type:"json"}).then((function(e){var a=tt({},t.pagination);a.total=200,t.loading=!1,t.data=e.results,t.pagination=a}))},onDelete:function(t){var e=Object(M["a"])(this.data);this.data=e.filter((function(e){return e.key!==t}))}}},nt=at,rt=Object(c["a"])(nt,W,X,!1,null,null,null),ot=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-divider"),a("p",[t._v("先来上传一张原图吧~: ")]),a("div",{staticStyle:{width:"1100px",height:"150px",margin:"0 auto"}},[a("a-upload-dragger",{attrs:{name:"src_image",multiple:!0,method:"post",beforeUpload:t.beforeUpload,action:"/api/image/encode/"},on:{change:t.handleChange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("Click or drag file to this area to upload")]),a("p",{staticClass:"ant-upload-hint"},[t._v(" Support for a single upload. Strictly prohibit from uploading company data or other band files ")])])],1),a("a-divider"),a("a-divider"),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"verifyArea"}},[a("p",[t._v("下面为您呈上3张添加了水印的图片~")]),a("p",[t._v("注意哦,下面每张图片都是不同滴,但是肉眼分辨不出来")]),a("p",[t._v("每张图片的名字蕴含了用户的ID")]),a("p",[t._v("您可以分别点击下载")]),a("div",{staticStyle:{width:"270px",margin:"0 auto"}},[a("ul",[a("li",[a("a",{on:{click:function(e){return t.downloadIamge(t.newImg1Url,t.fileName1)}}},[t._v("模拟用户1下载的图片")])]),a("br"),a("li",[a("a",{on:{click:function(e){return t.downloadIamge(t.newImg2Url,t.fileName2)}}},[t._v("模拟用户2下载的图片")])]),a("br"),a("li",[a("a",{on:{click:function(e){return t.downloadIamge(t.newImg3Url,t.fileName3)}}},[t._v("模拟用户3下载的图片")])])])]),a("a-divider"),a("a-divider"),a("p",[t._v("您可以将水印图片重命名或拍照再上传于此处")]),a("p",[t._v("我会告诉亲对应此水印图片的用户id")]),a("div",{staticStyle:{width:"1100px",height:"150px",margin:"0 auto"}},[a("a-upload-dragger",{attrs:{name:"marked_image",multiple:!0,method:"post",beforeUpload:t.beforeUpload,action:"/api/image/decode/"},on:{change:t.handleChange2}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("Click or drag file to this area to upload")]),a("p",{staticClass:"ant-upload-hint"},[t._v(" Support for a single upload. Strictly prohibit from uploading company data or other band files ")])])],1),a("br"),a("br"),a("p",{directives:[{name:"show",rawName:"v-show",value:t.showUid,expression:"showUid"}]},[t._v("此水印对应的用户ID为: "+t._s(t.uid))])],1)],1)},it=[],lt=(a("baa5"),{data:function(){return{show:!1,showUid:!1,uid:"",newImg1Url:"#",newImg2Url:"#",newImg3Url:"#",fileName1:"1.jpg",fileName2:"1.jpg",fileName3:"1.jpg"}},methods:{handleChange:function(t){var e=t.file.status;"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?(this.show=!0,this.newImg1Url=t.file.response.data.downloadlist[0].download,this.newImg2Url=t.file.response.data.downloadlist[1].download,this.newImg3Url=t.file.response.data.downloadlist[2].download,this.fileName1=this.newImg1Url.substring(this.newImg1Url.lastIndexOf("/")+1,this.newImg1Url.length),this.fileName2=this.newImg2Url.substring(this.newImg2Url.lastIndexOf("/")+1,this.newImg1Url.length),this.fileName3=this.newImg3Url.substring(this.newImg3Url.lastIndexOf("/")+1,this.newImg1Url.length),this.$message.success("".concat(t.file.name," file uploaded successfully."))):"error"===e&&this.$message.error("".concat(t.file.name," file upload failed."))},beforeUpload:function(t){var e="image/jpeg"===t.type;e||this.$message.error("You can only upload JPG file!");var a=t.size/1024/1024<3;return a||this.$message.error("Image must smaller than 3MB!"),e&&a},handleChange2:function(t){var e=t.file.status;"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?(console.log(t.file.response),this.uid=t.file.response.data.id,this.showUid=!0,this.$message.success("".concat(t.file.name," file uploaded successfully."))):"error"===e&&this.$message.error("".concat(t.file.name," file upload failed."))},downloadIamge:function(t,e){var a=new Image;a.setAttribute("crossOrigin","anonymous"),a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height;var n=t.getContext("2d");n.drawImage(a,0,0,a.width,a.height);var r=t.toDataURL("image/png"),o=document.createElement("a"),s=new MouseEvent("click");o.download=e||"photo",o.href=r,o.dispatchEvent(s)},a.src=t}}}),ct=lt,dt=(a("b389"),Object(c["a"])(ct,st,it,!1,null,"1ff1501c",null)),ut=dt.exports;n["a"].config.productionTip=!1,n["a"].use(r["a"]),n["a"].use(f["a"]),n["a"].use(m["a"]);var ft=new f["a"]({mode:"history",routes:[{path:"/loginOrRegister",component:x,children:[{path:"login",component:U},{path:"register",component:F}]},{path:"/home",component:j,children:[{path:"picture",component:Q},{path:"folder",component:ot},{path:"decryption",component:ut}]},{path:"/",redirect:"/home/decryption"}]});new n["a"]({router:ft,render:function(t){return t(u)}}).$mount("#app")},"686a":function(t,e,a){},"85ec":function(t,e,a){},b389:function(t,e,a){"use strict";var n=a("686a"),r=a.n(n);r.a},e90f:function(t,e,a){"use strict";var n=a("327a"),r=a.n(n);r.a},fa9a:function(t,e,a){"use strict";var n=a("04d9"),r=a.n(n);r.a}});
//# sourceMappingURL=app.f415a2ca.js.map