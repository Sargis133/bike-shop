import{_ as F}from"./UiIcons.vue.b02b65c7.js";import{_ as T}from"./UiButton.vue.e819dbd7.js";import{n as B,r as h,q as _,o as a,c as o,a as v,s as t,z,t as x,C as m,b as k,w,x as I,F as N,B as E,d as U,J as C,T as j,_ as G}from"./entry.72ac7c3e.js";var D=(c=>(c.primary="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 2xl:w-6 2xl:h-6",c))(D||{});const L={class:"flex items-baseline"},q=["id","checked"],J=["for"],M=B({__name:"UiCheckbox",props:{id:{},variant:{},label:{},isChecked:{type:Boolean}},emits:["checked"],setup(c,{emit:y}){const s=c,r=h(s.id||""),n=h(D[s.variant]),p=h(s.label||""),g=_(()=>s.isChecked),l=()=>{let d=document.getElementById(r.value);d&&y("checked",d.checked)};return(d,b)=>(a(),o("div",L,[v("input",{id:t(r),type:"checkbox",class:z(t(n)),style:{cursor:"inherit"},checked:t(g),onClick:l},null,10,q),t(p)?(a(),o("label",{key:0,for:t(r),class:"ml-1"},x(t(p)),9,J)):m("",!0)]))}}),O=["id"],P=["id"],R={class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownDelayButton"},W=["onClick"],A={key:0,class:"flex items-center justify-start cursor-default px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white 2xl:text-2xl 2xl:py-4"},H={key:1,class:"flex items-center justify-between p-1.5 text-[14px]"},K={class:"ml-2"},Q=B({__name:"UiSelect",props:{optionGroup:{},dataId:{},variant:{},size:{},multi:{}},emits:["option-value"],setup(c,{emit:y}){const s=c;let r=h("left-0"),n=h(!1);const p=u=>{y("option-value",u),s.multi?n.value=!0:n.value=!1},g=_(()=>s.optionGroup),l=_(()=>"uiSelect"+s.dataId),d=_(()=>s.size||"md"),b=_(()=>s.variant||"primary"),$=(u,f)=>{if(window.addEventListener("click",function(i){i.target.closest("#"+f)||(n.value=!1)}),n.value=!n.value,n.value===!0){let i=innerWidth-u.target.getBoundingClientRect().right;r.value=i<300?"right-0":"left-0"}};return(u,f)=>{const i=F,S=T,V=M;return a(),o("div",{id:t(l),class:"relative inline-block"},[k(S,{id:"dropdownDelayButton","data-dropdown-toggle":"dropdownDelay","data-dropdown-delay":"500","data-dropdown-trigger":"hover",size:t(d),class:"flex items-center",variant:t(b),onClick:f[0]||(f[0]=e=>$(e,t(l)))},{default:w(()=>[I(u.$slots,"default",{},void 0,!0),k(i,{"icon-name":"arrowBottom","icon-classes":"w-3 h-3 ml-2.5 2xl:w-6 2xl:h-6 fill-current dark:fill-white"})]),_:3},8,["size","variant"]),k(j,{name:"select"},{default:w(()=>[t(n)?(a(),o("div",{key:0,ref:"elementToClose",id:"dropdownDelay"+t(l),class:z(["absolute w-max z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700",t(r)])},[v("ul",R,[(a(!0),o(N,null,E(t(g),e=>(a(),o("li",{key:e.value,onClick:X=>p(e.value),class:"[&>*]:cursor-pointer"},[s.multi?s.multi?(a(),o("div",H,[k(V,{id:e.value,variant:"primary",isChecked:e.isChecked},null,8,["id","isChecked"]),v("p",K,x(e.name),1),e.icon?(a(),C(i,{key:0,"icon-name":e.icon,"icon-classes":e.iconClass?e.iconClass:"w-5 h-5 ml-1.5"},null,8,["icon-name","icon-classes"])):m("",!0)])):m("",!0):(a(),o("p",A,[U(x(e.name)+" ",1),e.icon?(a(),C(i,{key:0,"icon-name":e.icon,"icon-classes":e.iconClass?e.iconClass:"w-5 h-5 ml-1.5"},null,8,["icon-name","icon-classes"])):m("",!0)]))],8,W))),128))])],10,P)):m("",!0)]),_:1})],8,O)}}});const te=G(Q,[["__scopeId","data-v-2f3b559c"]]);export{te as _,M as a};
