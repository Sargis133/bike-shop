import{n as T,q as t,o as u,c,a as g,K as _,M as D,s as o,D as z,z as L,x as V,t as F,C as M}from"./entry.72ac7c3e.js";var i=(e=>(e.lg="p-4",e.md="p-2.5",e.sm="p-2 2xl:p-4",e))(i||{}),d=(e=>(e.empty="focus:outline-none bg-transparent text-gray-800 rounded-lg w-full dark:text-white",e.default="focus:outline-none focus:border bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 2xl:text-lg",e.error="focus:outline-none bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",e.success="focus:outline-none bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500",e.underlineDefault="appearance-none bg-transparent border-b border-gray-500 w-full text-gray-700 leading-tight focus:outline-none dark:text-gray-300",e))(d||{});const N={class:"relative"},U={class:"relative"},q=["type","placeholder","maxlength","readonly"],K={key:0,class:"absolute left-2 text-sm text-red-600 dark:text-red-500 font-medium"},$=T({__name:"UiInput",props:{modelValue:{},variant:{},size:{},errorText:{},type:{},placeholder:{},maxLength:{},readonly:{type:Boolean}},emits:["update:model-value","blur","input-value"],setup(e,{emit:n}){const r=e,p=a=>{n("input-value",a.target.value)},l=t({get(){return r.modelValue},set(a){n("update:model-value",a)}}),b=()=>{n("blur",l.value)},x=t(()=>r.maxLength||""),m=t(()=>r.readonly||!1),f=t(()=>d[r.variant]),y=t(()=>i[r.size]),k=t(()=>r.type||"text"),h=t(()=>r.placeholder||""),v=t(()=>f.value+" "+y.value),w=t(()=>({[v.value]:!r.errorText,[d.error]:r.errorText})),B=t(()=>r.errorText||"");return(a,s)=>(u(),c("div",N,[g("div",U,[_(g("input",{"onUpdate:modelValue":s[0]||(s[0]=C=>z(l)?l.value=C:null),type:o(k),class:L(o(w)),placeholder:o(h),maxlength:o(x),readonly:o(m),onBlur:b,onInput:p},null,42,q),[[D,o(l)]]),V(a.$slots,"icon")]),r.errorText?(u(),c("p",K,F(o(B)),1)):M("",!0)]))}});export{$ as _};
