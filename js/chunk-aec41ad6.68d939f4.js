(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aec41ad6"],{"3ed4":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var o=n("7a23"),c={class:"main_con_box"},a={class:"top_box"},r=Object(o["createTextVNode"])("查 询"),i=Object(o["createTextVNode"])("重 置"),l=Object(o["createTextVNode"])("新 建"),u={class:"main_box"},d=Object(o["createTextVNode"])("编 辑"),b=Object(o["createTextVNode"])("删 除"),s={class:"footer_box",style:{"margin-top":"10px"}};function p(e,t,n,p,h,f){var j=Object(o["resolveComponent"])("el-input"),m=Object(o["resolveComponent"])("el-button"),O=Object(o["resolveComponent"])("el-table-column"),C=Object(o["resolveComponent"])("el-table"),g=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(j,{style:{width:"200px"},size:"mini",modelValue:e.keyword,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.keyword=t}),placeholder:"编码/名称"},null,8,["modelValue"]),Object(o["createVNode"])(m,{class:"search_btn",type:"primary",size:"mini",onClick:t[1]||(t[1]=function(e){return p.search()})},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),Object(o["createVNode"])(m,{size:"mini",onClick:t[2]||(t[2]=function(e){return p.resetForm()})},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(m,{type:"primary",size:"mini",onClick:t[3]||(t[3]=function(e){return p.onSubmit()})},{default:Object(o["withCtx"])((function(){return[l]})),_:1})])]),Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(C,{data:e.tableData,border:"",style:{width:"100%"},height:e.$store.state.innerheight-185,size:"mini","header-cell-style":{background:"#f5f5f5"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{prop:"code",label:"厂商编码",width:""}),Object(o["createVNode"])(O,{prop:"name",label:"厂商名称",width:""}),Object(o["createVNode"])(O,{prop:"contacts",label:"联系人",width:""}),Object(o["createVNode"])(O,{prop:"telephone",label:"联系电话",width:""}),Object(o["createVNode"])(O,{label:"操作",width:""},{default:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(m,{onClick:function(t){return p.handleEdit(e.row)},type:"text",size:"mini"},{default:Object(o["withCtx"])((function(){return[d]})),_:2},1032,["onClick"]),Object(o["createVNode"])(m,{type:"text",style:{color:"red"},size:"mini",onClick:function(t){return p.handleDel(e.row)}},{default:Object(o["withCtx"])((function(){return[b]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","height"])]),Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(g,{currentPage:e.currentPage4,"onUpdate:currentPage":t[4]||(t[4]=function(t){return e.currentPage4=t}),"page-sizes":[20,50,70,100],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange},null,8,["currentPage","onSizeChange","onCurrentChange"])])])}var h=n("5530"),f=n("5c40"),j={components:{},setup:function(){var e=Object(f["K"])(),t=e.proxy,n=Object(o["reactive"])({keyword:"",currentPage4:1,tableData:[{code:"PT01",name:"上海厂商",contacts:"王立",telephone:""},{code:"PT01",name:"上海厂商",contacts:"王立",telephone:""},{code:"PT01",name:"上海厂商",contacts:"王立",telephone:""}]}),c=function(){t.$router.push("/manufacturer_information")},a=function(){t.$router.push("/manufacturer_information")},r=function(){console.log()},i=function(){console.log()},l=function(){console.log()},u=function(e){console.log("".concat(e," items per page"))},d=function(e){console.log("current page: ".concat(e))};return Object(h["a"])(Object(h["a"])({},Object(o["toRefs"])(n)),{},{onSubmit:c,handleDel:r,search:i,resetForm:l,handleEdit:a,handleSizeChange:u,handleCurrentChange:d})}},m=(n("c282"),n("d959")),O=n.n(m);const C=O()(j,[["render",p],["__scopeId","data-v-f963233a"]]);t["default"]=C},aa7d:function(e,t,n){},c282:function(e,t,n){"use strict";n("aa7d")}}]);
//# sourceMappingURL=chunk-aec41ad6.68d939f4.js.map