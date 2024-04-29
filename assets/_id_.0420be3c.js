import{_ as oe}from"./nuxt-link.af5a5555.js";import{_ as ae,a as ie}from"./UiSelect.201a0f88.js";import{_ as le}from"./UiInput.vue.db9632d4.js";import{_ as ne}from"./UiButton.vue.6dd02ce9.js";import{_ as ce}from"./UiIcons.vue.9a789213.js";import{_ as re}from"./ConfirmModal.vue.edc02a00.js";import{n as de,H as me,I as xe,q as _,u as ue,G as pe,r as v,A as _e,E as T,g as he,c as x,a as e,b as d,w as h,t as c,s as o,z as fe,F,B as O,D as A,v as ve,o as u,d as L,y as S,p as ge,e as ye,_ as we}from"./entry.dcc62fda.js";const ke=a=>({id:a.params.id,type:a.query.type?a.query.type:"",color:a.query.color?Array.isArray(a.query.color)?a.query.color:[a.query.color]:[],size:a.query.size?Array.isArray(a.query.size)?a.query.size:[a.query.size]:[],min:a.query.min||"",max:a.query.max||""}),Fe=a=>{const n={};return a.type&&(n.type=a.type),a.color&&(n.color=a.color),a.size&&(n.size=a.size),a.min&&(n.min=a.min),a.max&&(n.max=a.max),n},N=a=>(ge("data-v-a3ae3e1f"),a=a(),ye(),a),ze={class:"pb-6 px-14 max-sm:px-2 max-sm:mt-8"},be={class:"px-4 py-2 border-b border-zinc-300"},Ce={class:"font-sans font-medium text-xl dark:text-white font-montserrat"},Te={class:"2xl:text-4xl"},Ae={class:"mt-6 grid grid-cols-[250px_auto] 2xl:grid-cols-[300px_auto] max-md:grid-cols-1 max-md:gap-y-8"},Se={class:"max-md:flex max-md:justify-center max-sm:flex max-sm:justify-center"},qe={key:0,class:"absolute w-full h-full flex items-center justify-center"},Ie=N(()=>e("div",{class:"lds-ring"},[e("div"),e("div"),e("div"),e("div")],-1)),Pe=[Ie],Ee={style:{"grid-area":"categoryFilter"}},Ve={class:"2xl:text-2xl max-sm:text-[12px]"},je={style:{"grid-area":"colorFilter"}},De={class:"2xl:text-2xl max-sm:text-[12px]"},$e={class:"dark:text-white mb-2 mt-2 2xl:mt-6",style:{"grid-area":"checkbox"}},Re={class:"font-medium 2xl:text-3xl max-sm:text-sm"},Oe={class:"grid grid-cols-4 gap-x-2 [&>div>label]:ml-1 2xl:mt-4"},Le={class:"cursor-pointer 2xl:text-2xl max-sm:text-sm"},Ne={style:{"grid-area":"minPrice"},class:"w-[100px] 2xl:w-full"},Be={style:{"grid-area":"maxPrice"},class:"w-[100px] 2xl:w-full"},Ue={class:"relative"},Ge={class:"relative w-full"},Me={key:0,class:"absolute w-full h-full flex items-center justify-center"},He=N(()=>e("div",{class:"lds-ring"},[e("div"),e("div"),e("div"),e("div")],-1)),Ke=[He],Ye={key:1,class:"p-6 text-lg font-medium"},Je={key:2,class:"gap-x-4 gap-y-6 ml-10 max-sm:ml-0 max-sm:mt-6 max-xl:flex max-xl:flex-wrap xl:grid xl:grid-cols-4 2xl:flex 2xl:flex-wrap max-md:justify-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center"},Qe=["onClick"],We={class:"flex justify-center relative"},Xe=["src"],Ze={class:"font-serif px-3 py-2 [&>p]:mt-1 dark:text-gray-400 2xl:text-2xl max-md:text-sm max-sm:text-[14px] max-sm:grid max-sm:grid-cols-1"},es={class:"flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-start"},ss=de({__name:"[id]",setup(a){var V,j;const n=me(),B=xe(),l=_(()=>ue()),{$store:r}=ve(),{cookies:q}=pe();let z=v(!1);_e(()=>window.addEventListener("scroll",function(){window.scrollY>60?z.value=!0:z.value=!1}));let b=v(""),f=v(!1);const U=_(()=>{r.dispatch("A_SET_CATEGORIES");const s=r.getters.getCategories.find(t=>t.id===+n.params.id);return s==null?T("/catalog/categories"):s.name});r.dispatch("A_SET_FILTERS");const I=_(()=>r.getters.getTypeFilters||[]),P=_(()=>r.getters.getColorFilters.map(s=>{var t;return{...s,isChecked:!!((t=n.query.color)!=null&&t.includes(s.value))}})),E=_(()=>r.getters.getSizeFilters||[]),g=v((V=n.query)!=null&&V.min?n.query.min:""),y=v((j=n.query)!=null&&j.max?n.query.max:""),G=_(()=>{var s,t,m;return((s=I.value)==null?void 0:s.length)==0||((t=P.value)==null?void 0:t.length)==0||((m=E.value)==null?void 0:m.length)==0}),p=v(ke(n));r.dispatch("A_SET_PRODUCTS",p.value);const k=_(()=>r.getters.getProducts);he(p,s=>{const t=Fe(s),m=Object.assign(t);B.push({path:`/catalog/${s.id}`,query:m}),r.dispatch("A_SET_PRODUCTS",s)},{deep:!0});const M=s=>{g.value=s.replace(/\D+/g,"")},H=s=>{y.value=s.replace(/\D+/g,"")},K=s=>{p.value.type=s},Y=s=>{let t=[...p.value.color];t.includes(s)?t=t.filter(m=>m!==s):t.push(s),p.value.color=t},J=()=>{p.value.min=g.value,p.value.max=y.value},Q=s=>{let t=[...p.value.size];t.includes(s)?t=t.filter(m=>m!==s):t.push(s),p.value.size=t},W=s=>{T(`/catalog/product/${s}`)},X=s=>{if(!q.get("token"))b.value=l.value.alertLoginForFavorites,f.value=!0;else{r.dispatch("A_ADD_PRODUCT_IN_FAVORITES",s);const t={variant:"success",descriptions:[{title:l.value.favorites,descriptions:[l.value.productAddedToFavorites]}]};r.dispatch("A_SET_ALERT_CONFIG",t)}},Z=s=>{if(!q.get("token"))b.value=l.value.alertLoginForBasket,f.value=!0;else{const t={productId:s,count:1};r.dispatch("A_ADD_PRODUCT_IN_BASKET",t)}},ee=s=>{s&&T("/login")};return(s,t)=>{const m=oe,D=ae,se=ie,$=le,C=ne,R=ce,te=re;return u(),x(F,null,[e("div",ze,[e("div",null,[e("div",be,[e("h2",Ce,[d(m,{to:"/catalog/categories",class:"hover:text-zinc-500 2xl:text-4xl"},{default:h(()=>[L(c(o(l).categories),1)]),_:1}),e("span",Te,c(" - - > "+o(l)[o(U)]),1)])]),e("div",Ae,[e("div",Se,[e("div",{class:fe(["filters-content w-[250px] h-max border border-zinc-500 rounded-xl px-5 py-6 shadow-[0_1px_4px_5px] shadow-zinc-200 2xl:w-[300px] max-md:static",{"fixed top-16 2xl:top-20 ":o(z)}])},[o(G)?(u(),x("div",qe,Pe)):(u(),x(F,{key:1},[e("div",Ee,[d(D,{"data-id":"filter_bike-type",size:"sm",variant:"outlineSuccess","option-group":o(I),onOptionValue:K},{default:h(()=>[e("span",Ve,c(o(l).type),1)]),_:1},8,["option-group"])]),e("div",je,[d(D,{"data-id":"filter_bike-color","option-group":o(P),size:"sm",variant:"outlineSuccess",multi:"yes",onOptionValue:Y},{default:h(()=>[e("span",De,c(o(l).color),1)]),_:1},8,["option-group"])]),e("div",$e,[e("p",Re,c(o(l).size),1),e("div",Oe,[(u(!0),x(F,null,O(o(E),i=>{var w;return u(),x("div",Le,[d(se,{id:`bike-size-${i.name}`,variant:"primary",label:i.name,"is-checked":(w=o(n).query.size)==null?void 0:w.includes(i.name),onClick:ts=>Q(i.name)},null,8,["id","label","is-checked","onClick"])])}),256))])]),e("div",Ne,[d($,{modelValue:o(g),"onUpdate:modelValue":t[0]||(t[0]=i=>A(g)?g.value=i:null),size:"sm",variant:"default",placeholder:o(l).minPrice,onInputValue:M},null,8,["modelValue","placeholder"])]),e("div",Be,[e("div",Ue,[d($,{modelValue:o(y),"onUpdate:modelValue":t[1]||(t[1]=i=>A(y)?y.value=i:null),size:"sm",variant:"default",placeholder:o(l).maxPrice,onInputValue:H},null,8,["modelValue","placeholder"]),d(C,{variant:"primary",class:"absolute top-[10px] right-[-8px] w-[20px] h-[20px] flex items-center justify-center 2xl:w-[30px] 2xl:h-[30px] 2xl:top-[15px] 2xl:right-[-18px]",size:"sm",onClick:J},{default:h(()=>[L(">")]),_:1})])])],64))],2)]),e("div",Ge,[o(k)!=null&&o(k).length==0?(u(),x("div",Me,Ke)):o(k)==null?(u(),x("h3",Ye,c(o(l).productsNotFound),1)):(u(),x("div",Je,[(u(!0),x(F,null,O(o(k),i=>(u(),x("div",{class:"border border-zinc-500 dark:bg-slate-900 rounded-xl cursor-pointer shadow-[0_5px_8px_3px] hover:shadow-[0_5px_12px_5px] hover:shadow-zinc-300 shadow-zinc-200 dark:shadow-none dark:hover:shadow-white dark:hover:shadow-[0_2px_px_5px] w-[220px] max-md:w-[180px] 2xl:w-max max-sm:flex max-sm:w-full max-sm:max-w-[300px] max-sm:px-2 max-sm:justify-between",onClick:S(w=>W(i.id),["stop"])},[e("div",We,[e("img",{src:"/img/products/"+i.img,class:"w-[150px] h-[150px] product-img 2xl:w-full 2xl:h-full max-sm:w-[100px] max-sm:h-[100px]",alt:"product-img"},null,8,Xe)]),e("div",Ze,[e("p",null,c(i.name),1),e("p",null,c(o(l).size)+" : "+c(i.size),1),e("p",null,c(o(l).color)+" : "+c(o(l)[i.color]),1),e("p",null,c(o(l).price)+" : "+c(i.price),1)]),e("div",es,[d(C,{class:"flex items-center hover:opacity-50",custom:"p-2 max-sm:p-0",size:"sm",onClick:S(w=>Z(i.id),["stop"])},{default:h(()=>[d(R,{"icon-name":"basket","icon-classes":"w-5 h-5 fill-black dark:fill-white 2xl:w-9 2xl:h-9 max-sm:w-[25px] max-sm:h-[25px]"})]),_:2},1032,["onClick"]),d(C,{custom:"hover:[&>svg]:fill-red-700 pr-1.5 max-sm:pr-0 max-sm:pt-2",size:"sm",onClick:S(w=>X(i.id),["stop"])},{default:h(()=>[d(R,{"icon-name":"heart","icon-classes":"w-5 h-5 dark:fill-white 2xl:w-9 2xl:h-9 max-sm:w-[25px] max-sm:h-[25px]"})]),_:2},1032,["onClick"])])],8,Qe))),256))]))])])])]),d(te,{"is-show":o(f),"onUpdate:isShow":t[2]||(t[2]=i=>A(f)?f.value=i:f=i),onAnswer:ee,title:o(l).logIn,buttons:[o(l).logIn,o(l).cancel]},{body:h(()=>[e("p",null,c(o(b)),1)]),_:1},8,["is-show","title","buttons"])],64)}}});const ds=we(ss,[["__scopeId","data-v-a3ae3e1f"]]);export{ds as default};