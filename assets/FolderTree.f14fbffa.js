import{au as C,d as f,f as e,I as O,m as i,B as c,a2 as m,M as b,i as $,aR as T,j as k,k as v,q as w,r as x,e as g,$ as F,aA as z,a as V,_ as D,bc as P,a8 as h,ai as j,aP as A,C as H,aj as p,b3 as q,V as J,x as N,p as X,av as E,bd as G}from"./index.2e92f465.js";import{d as K}from"./index.5e04f7e2.js";import{m as L}from"./api.9a27ccb1.js";const M=E(),S=t=>{const[n,a]=g("/");return e(F,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(_,{path:"/"})}})}})},_=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=z(M),[y,B]=V(()=>L(t.path,D(),l)),R=async()=>{if(n().length>0)return;const u=await B();G(u,a)},{isOpen:s,onToggle:I}=C(),d=()=>o()===t.path;return e(F,{get children(){return[e(m,{spacing:"$2",get children(){return[e(i,{get when(){return!y()},get fallback(){return e(P,{size:"sm",get color(){return h()}})},get children(){return e(j,{get color(){return h()},as:K,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{I(),s()&&R()}})}}),e(A,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":H()}},onClick:()=>{r(t.path)},get children(){return p(()=>t.path==="/",!0)()?"root":q(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(J,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(N,{get each(){return n()},children:u=>e(_,{get path(){return X(t.path,u.name)}})})}})}})]}})},Y=t=>{var r;const n=f(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(x,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(b,{}),e($,{get children(){return[e(k,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(v,{get children(){return e(S,{onChange:o})}}),e(w,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},Z=t=>{const{isOpen:n,onOpen:a,onClose:o}=C(),r=f();return[e(m,{w:"$full",spacing:"$2",get children(){return[e(O,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(x,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(b,{}),e($,{get children(){return[e(T,{}),e(k,{get children(){return r("global.choose_folder")}}),e(v,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(w,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{Z as F,Y as M};
