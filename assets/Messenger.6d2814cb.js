import{f as e,bf as i,af as w,d as y,n as R,e as b,a as r,b7 as c,bw as k,at as x,V as o,x as C,ac as N,aq as T,I as B,a2 as F,B as g,h as H,aN as L,cl as V}from"./index.2e92f465.js";const W=t=>e(i,{get children(){return t.content}}),q=t=>e(w,{get src(){return t.content}}),z={string:W,image:q},M=()=>{const t=y();R.info(t("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,h]=r(()=>c.post("/admin/message/send",{message:a()})),[m,f]=k([]),s=async()=>{const n=await u();H(n,I=>{f(V($=>$.push(I)))})},S=async()=>{const n=await h();L(n)},v=setInterval(s,1e3);return x(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(C,{each:m,children:n=>e(N,T({get component(){return z[n.type]}},n))})]}}),e(B,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:S,get children(){return t("manage.send")}})]}})]}})};export{M as Messenger,z as Shower,M as default};
