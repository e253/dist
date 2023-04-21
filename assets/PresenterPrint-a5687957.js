import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as N,m as k,p as P,q as w,_ as S}from"./index-4572eeff.js";import{N as T}from"./NoteDisplay-4e15136d.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},R={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(w))},[t("div",V,[t("div",j,[t("h1",L,s(a(m).title),1),t("div",R,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):P("v-if",!0)]))),128))])],4))}}),A=S(F,[["__file","/home/esteere/uva/astr1220/RRRT-Writeup/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
