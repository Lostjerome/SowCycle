import{S as J,i as K,d as k,s as L,v as M,Q as H,p as v,B as T,q as g,r as w,C as U,l as d,x as y,g as $,D as W,k as X,t as Y,E as Z,y as _,z as m,u as Q,R as tt,c as I,f as V,H as u,G as et}from"../../../chunks/index-077e28f3.js";import{C as A}from"../../../chunks/Container-1a03cd77.js";const P="src/routes/stalls/+page.svelte";function N(l,t,n){const i=l.slice();return i[2]=t[n],i}function q(l){let t,n,i,s=l[2].name+"",r,a,e,o,c=l[2].status+"",p,S,h,C,z=l[2].stall_type+"",j,D;const G={c:function(){t=v("div"),n=v("p"),i=_("ชื่อ "),r=_(s),a=I(),e=v("p"),o=_("สถานะ "),p=_(c),S=I(),h=v("p"),C=_("ประเภท "),j=_(z),D=I(),this.h()},l:function(b){t=g(b,"DIV",{class:!0});var f=w(t);n=g(f,"P",{});var R=w(n);i=m(R,"ชื่อ "),r=m(R,s),R.forEach(d),a=V(f),e=g(f,"P",{});var B=w(e);o=m(B,"สถานะ "),p=m(B,c),B.forEach(d),S=V(f),h=g(f,"P",{});var x=w(h);C=m(x,"ประเภท "),j=m(x,z),x.forEach(d),D=V(f),f.forEach(d),this.h()},h:function(){y(n,P,14,20,334),y(e,P,15,20,379),y(h,P,16,20,427),Q(t,"class","w-full bg-white rounded-lg p-3"),y(t,P,13,16,269)},m:function(b,f){$(b,t,f),u(t,n),u(n,i),u(n,r),u(t,a),u(t,e),u(e,o),u(e,p),u(t,S),u(t,h),u(h,C),u(h,j),u(t,D)},p:et,d:function(b){b&&d(t)}};return k("SvelteRegisterBlock",{block:G,id:q.name,type:"each",source:"(13:12) {#each stalls as stall}",ctx:l}),G}function F(l){let t,n,i=l[0];H(i);let s=[];for(let a=0;a<i.length;a+=1)s[a]=q(N(l,i,a));const r={c:function(){t=_(`Stalls
        `),n=v("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l:function(e){t=m(e,`Stalls
        `),n=g(e,"DIV",{class:!0});var o=w(n);for(let c=0;c<s.length;c+=1)s[c].l(o);o.forEach(d),this.h()},h:function(){Q(n,"class","space-y-2"),y(n,P,11,8,193)},m:function(e,o){$(e,t,o),$(e,n,o);for(let c=0;c<s.length;c+=1)s[c].m(n,null)},p:function(e,o){if(o&1){i=e[0],H(i);let c;for(c=0;c<i.length;c+=1){const p=N(e,i,c);s[c]?s[c].p(p,o):(s[c]=q(p),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=i.length}},d:function(e){e&&d(t),e&&d(n),tt(s,e)}};return k("SvelteRegisterBlock",{block:r,id:F.name,type:"slot",source:"(10:4) <Container>",ctx:l}),r}function O(l){let t,n,i;n=new A({props:{$$slots:{default:[F]},$$scope:{ctx:l}},$$inline:!0});const s={c:function(){t=v("div"),T(n.$$.fragment),this.h()},l:function(a){t=g(a,"DIV",{});var e=w(t);U(n.$$.fragment,e),e.forEach(d),this.h()},h:function(){y(t,P,8,0,148)},m:function(a,e){$(a,t,e),W(n,t,null),i=!0},p:function(a,[e]){const o={};e&32&&(o.$$scope={dirty:e,ctx:a}),n.$set(o)},i:function(a){i||(X(n.$$.fragment,a),i=!0)},o:function(a){Y(n.$$.fragment,a),i=!1},d:function(a){a&&d(t),Z(n)}};return k("SvelteRegisterBlock",{block:s,id:O.name,type:"component",source:"",ctx:l}),s}function nt(l,t,n){let{$$slots:i={},$$scope:s}=t;M("Page",i,[]);let{data:r}=t;const{stalls:a}=r;l.$$.on_mount.push(function(){r===void 0&&!("data"in t||l.$$.bound[l.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const e=["data"];return Object.keys(t).forEach(o=>{!~e.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Page> was created with unknown prop '${o}'`)}),l.$$set=o=>{"data"in o&&n(1,r=o.data)},l.$capture_state=()=>({Container:A,data:r,stalls:a}),l.$inject_state=o=>{"data"in o&&n(1,r=o.data)},t&&"$$inject"in t&&l.$inject_state(t.$$inject),[a,r]}class st extends J{constructor(t){super(t),K(this,t,nt,O,L,{data:1}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:O.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{st as default};