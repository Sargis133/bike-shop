import{n as v,q as s,g as x,r as A,c as d,b as _,w as l,a as t,O as y,F as u,v as L,P as k,o as r,x as w,B,J as E,s as I,Q as T,R as C,_ as H}from"./entry.72ac7c3e.js";import{a as O,_ as S,b as $}from"./accordionOptions.91461108.js";import"./UiIcons.vue.b02b65c7.js";import"./UiButton.vue.e819dbd7.js";const z=T(()=>C(()=>import("./Header.73b69e5e.js"),["./Header.73b69e5e.js","./UiIcons.vue.b02b65c7.js","./entry.72ac7c3e.js","./nuxt-link.d61ab7cd.js","./UiButton.vue.e819dbd7.js","./UiSelect.a8efc83d.js","./UiSelect.fdf653b3.css","./ConfirmModal.vue.a1179258.js","./Header.d31237be.css"],import.meta.url).then(a=>a.default||a)),F={class:"min-h-[100vh] relative grid grid-rows-[50px_1fr] 2xl:grid-rows-[72px_1fr]"},N={class:""},P={class:""},R={class:""},b={class:"fixed top-2 right-2 z-50 flex flex-col-reverse"},D=v({__name:"auth",setup(a){const{$store:n}=L(),p=k();s(()=>n.getters.getLoggedUserToken);const c=e=>n.dispatch("A_HIDE_ALERT",e),i=s(()=>n.getters.getAlert);let f=s(()=>i.value.at(-1));return x(f,e=>{e&&setTimeout(c,4e3,e.id)}),s(()=>O),A(p.getItemLocalStorage("isShowAccordion")||"false"),(e,V)=>{const m=z,g=S,h=$;return r(),d(u,null,[_(g,null,{default:l(()=>[t("div",F,[t("div",N,[_(m)]),t("div",P,[t("div",R,[w(e.$slots,"default",{},void 0,!0)])])])]),_:3}),t("div",b,[_(y,{name:"alert"},{default:l(()=>[(r(!0),d(u,null,B(I(i),o=>(r(),E(h,{key:o.id,"data-id":o.id,"get-alert-config":o,onHide:q=>c(o.id)},null,8,["data-id","get-alert-config","onHide"]))),128))]),_:1})])],64)}}});const j=H(D,[["__scopeId","data-v-f6fdc106"]]);export{j as default};
