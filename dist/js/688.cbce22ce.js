"use strict";(self["webpackChunkbookstore_app"]=self["webpackChunkbookstore_app"]||[]).push([[688],{17688:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var l=function(){var e=this,t=e._self._c;return t("el-main",{staticClass:"manageOrder"},[t("div",[t("el-form",{ref:"searchForm",staticClass:"formItem",attrs:{model:e.searchForm,inline:!0,"label-width":"80px"}},[t("el-col",{attrs:{xl:6,md:8,sm:24}},[t("el-form-item",{attrs:{label:"用户名",prop:"title"}},[t("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1)],1),t("el-col",{attrs:{xl:6,md:8,sm:24}},[t("el-form-item",[t("div",{style:{float:"right",overflow:"hidden"}||{}},[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.search}},[e._v("搜索")])],1)])],1)],1)],1),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")]),t("el-button",{attrs:{type:"primary"},on:{click:e.delAll}},[e._v("批量删除")])],1),t("pageTable",{ref:"dataTable",attrs:{"row-key":"id"},on:{"load-table-data":e.loadTableData,"selection-change":e.selectionChange}},[t("template",{slot:"tb-columns"},[t("el-table-column",{attrs:{prop:"no",label:"订单编号",align:"center",width:"300"}}),t("el-table-column",{attrs:{prop:"username",label:"用户",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.etc.username)+" ")]}}])}),t("el-table-column",{attrs:{prop:"address",label:"收货地址",align:"center",width:"180","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.etc.address)+" ")]}}])}),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center",width:"180"}}),t("el-table-column",{attrs:{prop:"totalPrice",label:"总价",align:"center",width:"80"}}),t("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[t("div",[e._v(e._s(e.action(a.row)))]),t("el-button",{staticStyle:{cursor:"pointer"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.editDetail(a.row)}}},[e._v("管理")])],1)]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.edit(a.row)}}},[e._v("编辑")]),e._v(" ｜ "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.delOne(a.row.id)}}},[e._v("删除")])]}}])})],1)],2),e.visible?t("EditDetail",{attrs:{title:e.title,visible:e.visible,cancelReason:e.reason,orderId:e.orderId},on:{close:e.close}}):e._e(),e.visible1?t("EditOrder",{attrs:{title:e.title,visible:e.visible1,defaultFormData:e.defaultFormData},on:{close:e.close1}}):e._e()],1)},r=[],o=(a(57658),a(7877)),i=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.visible,"before-close":e.close}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"订单编号",prop:"no"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{disabled:"",autocomplete:"off"},model:{value:e.form.etc.username,callback:function(t){e.$set(e.form.etc,"username",t)},expression:"form.etc.username"}})],1),t("el-form-item",{attrs:{label:"收货地址",prop:"address"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.etc.address,callback:function(t){e.$set(e.form.etc,"address",t)},expression:"form.etc.address"}})],1),t("el-form-item",{attrs:{label:"创建时间",prop:"cerateTime"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.createTime,callback:function(t){e.$set(e.form,"createTime",t)},expression:"form.createTime"}})],1),t("el-form-item",{attrs:{label:"总价",prop:"totalPrice"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.totalPrice,callback:function(t){e.$set(e.form,"totalPrice",t)},expression:"form.totalPrice"}})],1),t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},s=[],n={name:"editOrder",props:{visible:{type:Boolean,default:!1},title:{type:String,default:"新增"},defaultFormData:{type:Object}},data(){return{flag:!1,form:{},flag:!1,saveOrUpdate:!1,rules:{name:[{required:!0,message:"不能为空"}],value:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created(){"{}"==JSON.stringify(this.defaultFormData)?(this.flag=!1,this.saveOrUpdate=!1):(this.form=JSON.parse(JSON.stringify(this.defaultFormData)),console.log(this.form),this.flag=!0,this.saveOrUpdate=!0)},methods:{close(){this.flag=!1,this.$emit("close",this.flag)},submit(){this.flag=!0,this.$emit("close",this.flag)}}},c=n,d=a(1001),u=(0,d.Z)(c,i,s,!1,null,"898fcc14",null),p=u.exports,m=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.visible,"before-close":e.close}},[t("el-table",{attrs:{data:e.form}},[t("el-table-column",{attrs:{prop:"name",label:"书名","show-overflow-tooltip":!0,align:"center",width:"200"}}),t("el-table-column",{attrs:{prop:"img",label:"图片",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{attrs:{src:e.row.img,"min-width":"70",height:"70"}})]}}])}),t("el-table-column",{attrs:{prop:"num",label:"数量",align:"center",width:"60"}}),t("el-table-column",{attrs:{prop:"price",label:"价格",align:"center",width:"70"}}),t("el-table-column",{attrs:{prop:"status",label:null==e.cancelReason?"状态":"取消原因",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[2==a.row.status?t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.updateDetail(a.row)}}},[e._v("去发货")]):t("div",[-2==a.row.status?t("div",[e._v(" "+e._s(e.cancelReason)+" ")]):t("div",[e._v(" "+e._s(e.action(a.row.status))+" ")])])]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")]),e._v(" ｜ "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.delOne(a.row)}}},[e._v("删除")])]}}])})],1)],1)},f=[],h=(a(16743),a(88848)),g={name:"editOrderDetail",props:{visible:{type:Boolean,default:!1},title:{type:String,default:"新增"},orderId:{type:Number},cancelReason:{type:String}},data(){return{flag:!1,form:[],saveOrUpdate:!1,rules:{name:[{required:!0,message:"不能为空"}],value:[{required:!0,message:"不能为空",trigger:"blur"}]}}},mounted(){""!=this.orderId&&this.getDetail()},methods:{action(e){let t=["等待买家付款","去发货","等待买家确认收货","等待买家评价","退款/售后"];return-1==e?"已评价":-2==e?"交易关闭":t[e-1]},getDetail(){let e=this;o.Z.getDetailByOrderId("/orderDetail/getByOrderId",this.orderId).then((t=>{console.log(t.data);let a=[],l=[];l=t.data;let r=[];l.forEach((e=>{r.push(e.bookId)})),o.Z.getCartBookByIds("/book/getBookByIds",r.join(",")).then((function(t){console.log(t.data),a=l.map(((e,a)=>({...t.data[a],...e}))),e.form=a,console.log(e.form),e.flag=!0,e.saveOrUpdate=!0}))}))},updateDetail(e){let t=this;o.Z.updateOrderDetail("/orderDetail/update",e.orderId,e.bookId,e.status).then((e=>{console.log(e.data),(0,h.Z)("更新成功"),t.getDetail()}))},edit(){},close(){this.flag=!1,this.$emit("close",this.flag)}}},b=g,y=(0,d.Z)(b,m,f,!1,null,"bcd6f558",null),v=y.exports,w=a(78066),S={name:"manageOrder",components:{PageTable:w.Z,EditOrder:p,EditDetail:v},data(){return{title:"新增",visible:!1,visible1:!1,orderId:"",ids:"",searchForm:{name:""},reason:"",defaultFormData:{}}},methods:{action(e){let t=["等待买家付款","待发货","等待买家确认收货","等待买家评价","退款/售后"];return-1==e.status?"已评价":-2==e.status?"超时自动取消"!=e.cancelReason?"交易关闭":"超时取消":t[e.status-1]},search(){this.$refs.dataTable.loadTableData("reload")},selectionChange(e){var t=[];for(var a of e)t.push(a.id);this.ids=t.join(",")},delAll(){this.ids.length<=0?this.$message({message:"请先选择记录",type:"warning"}):this.del(this.ids)},delOne(e){this.del(e)},del(e){this.$confirm("是否确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{let t=this;o.Z.deleteByIds("/order/deleteByIds",e).then((e=>{console.log(e),t.$refs.dataTable.loadTableData("reload")})).catch((e=>{console.log(e)}))})).catch((()=>{}))},close(e){this.visible=!1,e&&this.$refs.dataTable.loadTableData("reload")},close1(e){this.visible1=!1,e&&this.$refs.dataTable.loadTableData("reload")},add(){},edit(e){this.visible1=!0,this.title="编辑",this.defaultFormData=e},editDetail(e){console.log(e),this.visible=!0,this.title="订单详情",this.orderId=e.id,this.reason=e.cancelReason},loadTableData(e,t){let a=this;o.Z.getUser("/user/getUser",localStorage.getItem("username")).then((function(l){200==l.statusCode?o.Z.getAll("/order/getAll",e.pageNum,e.pageSize).then((e=>{console.log(e.data,"分页订单");let a={data:e.data.records,total:e.data.total};t(a)})).catch((e=>{console.log(e)})):401==l.statusCode&&(Toast("token过期"),a.$router.push("login"))}))}}},k=S,x=(0,d.Z)(k,l,r,!1,null,"509714d8",null),_=x.exports},78066:function(e,t,a){a.d(t,{Z:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"filterTable",attrs:{"max-height":"560",border:e.border,stripe:e.stripe,"header-cell-style":e.headerCellStyle,"highlight-current-row":"",data:e.tableData,"element-loading-text":"加载中...","tree-props":e.treeProps,"row-key":e.rowKey,"default-expand-all":e.defaultExpandAll},on:{"selection-change":e.handleSelectionChange,"row-click":e.handleRowClick,"sort-change":e.handleSortChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),e._t("tb-columns")],2),t("el-row",{staticClass:"mt-15"},[t("el-col",{staticClass:"flex justify-end"},[t("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, sizes, jumper",total:e.total,"page-size":e.page.pageSize,"page-sizes":e.pageSizes,"current-page":e.current},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},r=[];const o={objectIndexInArray:(e,t,a)=>{let l=-1;for(let r in e)if(e[r][a]===t[a]){l=r;break}return l},isStatic:e=>"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"undefined"===typeof e||null===e,isPrimitive:e=>o.isStatic(e)||"symbol"===typeof e,isObject:e=>{let t=typeof e;return null!=e&&("object"==t||"function"==t)},isObjectLike:e=>null!=e&&"object"==typeof e,isFunction:e=>"[object Function]"===Object.prototype.toString.call(e),getRawType:e=>Object.prototype.toString.call(e).slice(8,-1),isPlainObject:e=>"[object Object]"===Object.prototype.toString.call(e),isArray:e=>"[object Array]"===Object.prototype.toString.call(e),isRegExp:e=>"[object RegExp]"===Object.prototype.toString.call(e),isDate:e=>"[object Date]"===Object.prototype.toString.call(e),isNative:e=>"function"===typeof e&&/native code/.test(e.toString()),isLength:e=>"number"==typeof e&&e>-1&&e%1==0&&e<=Number.MAX_SAFE_INTEGER,isArrayLike:e=>null!=e&&o.isLength(e.length)&&!o.isFunction(e),isEmpty:function(e){if(null==e)return!0;if(o.isArrayLike(e))return!e.length;if(o.isPlainObject(e)){for(let t in e)if(o.hasOwnProperty.call(e,t))return!1;return!0}return!1},cached:e=>{let t=Object.create(null);return function(a){let l=t[a];return l||(t[a]=e(a))}},camelize:e=>{let t=/-(\w)/g;return e.replace(t,(function(e,t){return t?t.toUpperCase():""}))},hyphenate:e=>{let t=/\B([A-Z])/g;return e.replace(t,"-$1").toLowerCase()},capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1),extend:(e,t)=>{for(let a in t)e[a]=t[a];return e},getExplorerInfo:()=>{let e=navigator.userAgent.toLowerCase();return 0<=e.indexOf("msie")?{type:"IE",version:Number(e.match(/msie ([\d]+)/)[1])}:e.match(/trident\/.+?rv:(([\d.]+))/)?{type:"IE",version:11}:0<=e.indexOf("edge")?{type:"Edge",version:Number(e.match(/edge\/([\d]+)/)[1])}:0<=e.indexOf("firefox")?{type:"Firefox",version:Number(e.match(/firefox\/([\d]+)/)[1])}:0<=e.indexOf("chrome")?{type:"Chrome",version:Number(e.match(/chrome\/([\d]+)/)[1])}:0<=e.indexOf("opera")?{type:"Opera",version:Number(e.match(/opera.([\d]+)/)[1])}:0<=e.indexOf("Safari")?{type:"Safari",version:Number(e.match(/version\/([\d]+)/)[1])}:{type:e,version:-1}},isPCBroswer:()=>{let e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),a="iphone"==e.match(/iphone/i),l="midp"==e.match(/midp/i),r="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),o="ucweb"==e.match(/ucweb/i),i="android"==e.match(/android/i),s="windows ce"==e.match(/windows ce/i),n="windows mobile"==e.match(/windows mobile/i);return!(t||a||l||r||o||i||s||n)},getUrlParam:()=>{let e=document.location.toString(),t=e.split("?"),a=Object.create(null);return t.length>1&&(t=t[1].split("&"),t.forEach((e=>{e=e.split("="),a[e[0]]=e[1]}))),a},toFullScreen:()=>{let e=document.body;e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullScreen?e.requestFullScreen():alert("浏览器不支持全屏")},exitFullscreen:()=>{let e=parent.document;e.webkitCancelFullScreen?e.webkitCancelFullScreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.cancelFullScreen?e.cancelFullScreen():e.msExitFullscreen?e.msExitFullscreen():e.exitFullscreen?e.exitFullscreen():alert("切换失败,可尝试Esc退出")},adaptiveUnit:e=>{let t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(!t)return;let a=t/1920*100;return e*a}};var i=o,s={name:"PageTable",props:{headerCellStyle:{type:Object,default:()=>({background:"#fafafa",color:"#606266"})},reserveSelection:{type:Boolean,default:!1},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1},pageSize:{type:Number,default:5},pageSizes:{type:Array,default:()=>[5,10,20,30]},treeProps:{type:Object},rowKey:{type:String,default:"id"},defaultExpandAll:{type:Boolean,default:!1}},data(){return{loading:!0,tableData:[],total:0,page:{pageSize:5,pageNum:1},sort:{sort:"create_time",order:"DESC"},current:1}},mounted(){this.page.pageSize=this.pageSize,this.loadTableData()},watch:{tableData(){this.loading=!1},pageSize(){this.page.pageSize=this.pageSize}},methods:{handleSizeChange(e){this.page.pageSize=e,this.loadTableData()},handleCurrentChange(e){this.page.pageNum=e,this.current=e,this.loadTableData()},handleSelectionChange(e){this.$emit("selection-change",e)},handleRowClick(e,t,a){this.$emit("row-click",e,t,a)},handleSortChange(e){const t=e.prop,a="ascending"==e.order?"ASC":"descending"==e.order?"DESC":e.order;this.sort=t?{sort:t,order:a}:{sort:"create_time",order:"DESC"},this.loadTableData()},refresh(){this.page.pageNum=1,this.$emit("refresh",(()=>{this.loadTableData()}))},loadTableData(e,t){i.isEmpty(e)||"reload"!=e||(this.page.pageNum=1,this.current=1),this.loading=!0,this.$emit("load-table-data",{...this.page,...t,...this.sort},(e=>{this.loading=!1,this.tableData=e?e.data:[],this.total=e?e.total:0}))}}},n=s,c=a(1001),d=(0,c.Z)(n,l,r,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=688.cbce22ce.js.map