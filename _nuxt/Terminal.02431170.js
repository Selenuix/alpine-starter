import{u as m}from"./index.44e9fde5.js";import{a as v,r as h,J as y,o as s,i as o,u as i,l as _,k as t,F as f,K as k,s as C,v as b,t as g,x}from"./entry.a2a2827c.js";const n=e=>(C("data-v-c33b9d7c"),e=e(),b(),e),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),B=n(()=>t("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:p}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",S,I)):_("",!0),T,t("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):_("",!0)]))}});const J=x(q,[["__scopeId","data-v-c33b9d7c"]]);export{J as default};
