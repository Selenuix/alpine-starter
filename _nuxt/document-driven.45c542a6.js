import L from"./DocumentDrivenEmpty.9acf87bd.js";import h from"./ContentRenderer.684013bf.js";import C from"./DocumentDrivenNotFound.7c454b42.js";import{b as H,a as m,ar as x,q as k,as as R,J as N,u as o,at as d,au as g,av as i,T as w,a7 as B,ao as D,ai as E,o as c,i as T,m as l,w as p,c as _}from"./entry.a2a2827c.js";import"./ContentRendererMarkdown.b9d2910a.js";const j=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>B(a,t.attrs,t.slots)}}),q=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=x("_route"),e=a===k()?R():a,n=N(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??g;return i(w,u&&r,{default:()=>i(j,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},J=m({__name:"document-driven",setup(s){const{page:t,layout:a}=D();return t.value,E(t),(e,n)=>{const u=L,r=h,f=C,v=q;return c(),T("div",A,[l(v,{name:o(a)||"default"},{default:p(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:p(({value:y})=>[l(u,{value:y},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{J as default};
