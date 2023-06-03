import{S as yt,i as bt,s as vt,d as Z,v as kt,a as rt,o as ye,b as Et,c as Rt,e as M,f as St,g as X,h as be,t as G,j as ve,k as J,l as W,m as Ae,n as $,p as Pt,q as Lt,r as It,u as Oe,w as H,x as At,y as Ot,z as jt,A as Ut,B as ee,C as Fe,D as te,E as ne,F as we}from"./chunks/index-077e28f3.js";import{S as ft,a as dt,I as V,g as ot,f as at,b as je,c as ge,s as K,i as st,d as ie,P as it,e as Nt}from"./chunks/singletons-ae9379f3.js";const Tt=!0;function Dt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function Ct(n){return n.split("%25").map(decodeURI).join("%25")}function qt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const Bt=["href","pathname","search","searchParams","toString","toJSON"];function Vt(n,e){const t=new URL(n);for(const i of Bt){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Ft(t),t}function Ft(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ht="/__data.json";function Kt(n){return n.replace(/\/$/,"")+Ht}const Q="";function ht(n){try{return JSON.parse(sessionStorage[n])}catch{}}function ct(n,e){const t=JSON.stringify(e);try{sessionStorage[n]=t}catch{}}function Mt(...n){let e=5381;for(const t of n)if(typeof t=="string"){let i=t.length;for(;i;)e=e*33^t.charCodeAt(--i)}else if(ArrayBuffer.isView(t)){const i=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let s=i.length;for(;s;)e=e*33^i[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}let He=0;const ke=window.fetch;function Gt(){He+=1}function Jt(){He-=1}{let n=!1;(async()=>{n=new Error().stack.includes("check_stack_trace")})(),window.fetch=(t,i)=>{const s=t instanceof Request?t.url:t.toString(),a=new Error().stack.split(`
`),u=a.findIndex(y=>y.includes("*listen@")),l=a.slice(0,u!==-1?u:void 0).join(`
`);return(n?l.includes("src/runtime/client/client.js"):He)&&console.warn(`Loading ${s} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(t instanceof Request?t.method:(i==null?void 0:i.method)||"GET")!=="GET"&&ce.delete(Ke(t)),ke(t,i)}}const ce=new Map;function Wt(n,e){const t=Ke(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...a}=JSON.parse(i.textContent),u=i.getAttribute("data-ttl");return u&&ce.set(t,{body:s,init:a,ttl:1e3*Number(u)}),Promise.resolve(new Response(s,a))}return ke(n,e)}function zt(n,e,t){if(ce.size>0){const i=Ke(n,t),s=ce.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(s.body,s.init);ce.delete(i)}}return ke(e,t)}function Ke(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(e!=null&&e.headers||e!=null&&e.body){const s=[];e.headers&&s.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&s.push(e.body),i+=`[data-hash="${Mt(...s)}"]`}return i}const Yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Qt(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const a=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const u=i.split(/\[(.+?)\](?!\])/);return"/"+u.map((c,h)=>{if(h%2){if(c.startsWith("x+"))return Ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ue(String.fromCharCode(...c.slice(2).split("-").map(I=>parseInt(I,16))));const y=Yt.exec(c);if(!y)throw new Error(`Invalid param: ${c}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,b,E,O]=y;return e.push({name:E,matcher:O,optional:!!v,rest:!!b,chained:b?h===1&&u[0]==="":!1}),b?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Ue(c)}).join("")}).join("")}/?$`),params:e}}function Zt(n){return!/^\([^)]+\)$/.test(n)}function Qt(n){return n.slice(1).split("/").filter(Zt)}function xt(n,e,t){const i={},s=n.slice(1);let a=0;for(let u=0;u<e.length;u+=1){const l=e[u],c=s[u-a];if(l.chained&&l.rest&&a){i[l.name]=s.slice(u-a,u+1).filter(h=>h).join("/"),a=0;continue}if(c===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||t[l.matcher](c)){i[l.name]=c;continue}if(l.optional&&l.chained){a++;continue}return}if(!a)return i}function Ue(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([l,[c,h,y]])=>{const{pattern:v,params:b}=Xt(l),E={id:l,exec:O=>{const I=v.exec(O);if(I)return xt(I,b,i)},errors:[1,...y||[]].map(O=>n[O]),layouts:[0,...h||[]].map(u),leaf:a(c)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function a(l){const c=l<0;return c&&(l=~l),[c,n[l]]}function u(l){return l===void 0?l:[s.has(l),n[l]]}}const en=Tt,tn=".svelte-kit/generated/root.svelte";function pt(n){let e,t,i;var s=n[1][0];function a(l){return{props:{data:l[3],form:l[2]},$$inline:!0}}s&&(e=$(s,a(n)),n[12](e));const u={c:function(){e&&ee(e.$$.fragment),t=M()},l:function(c){e&&Fe(e.$$.fragment,c),t=M()},m:function(c,h){e&&te(e,c,h),X(c,t,h),i=!0},p:function(c,h){const y={};if(h&8&&(y.data=c[3]),h&4&&(y.form=c[2]),s!==(s=c[1][0])){if(e){be();const v=e;G(v.$$.fragment,1,0,()=>{ne(v,1)}),ve()}s?(e=$(s,a(c)),c[12](e),ee(e.$$.fragment),J(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i:function(c){i||(e&&J(e.$$.fragment,c),i=!0)},o:function(c){e&&G(e.$$.fragment,c),i=!1},d:function(c){n[12](null),c&&W(t),e&&ne(e,c)}};return Z("SvelteRegisterBlock",{block:u,id:pt.name,type:"else",source:"(44:0) {:else}",ctx:n}),u}function mt(n){let e,t,i;var s=n[1][0];function a(l){return{props:{data:l[3],$$slots:{default:[_t]},$$scope:{ctx:l}},$$inline:!0}}s&&(e=$(s,a(n)),n[11](e));const u={c:function(){e&&ee(e.$$.fragment),t=M()},l:function(c){e&&Fe(e.$$.fragment,c),t=M()},m:function(c,h){e&&te(e,c,h),X(c,t,h),i=!0},p:function(c,h){const y={};if(h&8&&(y.data=c[3]),h&8215&&(y.$$scope={dirty:h,ctx:c}),s!==(s=c[1][0])){if(e){be();const v=e;G(v.$$.fragment,1,0,()=>{ne(v,1)}),ve()}s?(e=$(s,a(c)),c[11](e),ee(e.$$.fragment),J(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i:function(c){i||(e&&J(e.$$.fragment,c),i=!0)},o:function(c){e&&G(e.$$.fragment,c),i=!1},d:function(c){n[11](null),c&&W(t),e&&ne(e,c)}};return Z("SvelteRegisterBlock",{block:u,id:mt.name,type:"if",source:"(40:0) {#if constructors[1]}",ctx:n}),u}function _t(n){let e,t,i;var s=n[1][1];function a(l){return{props:{data:l[4],form:l[2]},$$inline:!0}}s&&(e=$(s,a(n)),n[10](e));const u={c:function(){e&&ee(e.$$.fragment),t=M()},l:function(c){e&&Fe(e.$$.fragment,c),t=M()},m:function(c,h){e&&te(e,c,h),X(c,t,h),i=!0},p:function(c,h){const y={};if(h&16&&(y.data=c[4]),h&4&&(y.form=c[2]),s!==(s=c[1][1])){if(e){be();const v=e;G(v.$$.fragment,1,0,()=>{ne(v,1)}),ve()}s?(e=$(s,a(c)),c[10](e),ee(e.$$.fragment),J(e.$$.fragment,1),te(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i:function(c){i||(e&&J(e.$$.fragment,c),i=!0)},o:function(c){e&&G(e.$$.fragment,c),i=!1},d:function(c){n[10](null),c&&W(t),e&&ne(e,c)}};return Z("SvelteRegisterBlock",{block:u,id:_t.name,type:"slot",source:"(41:1) <svelte:component this={constructors[0]} bind:this={components[0]} data={data_0}>",ctx:n}),u}function Ce(n){let e,t=n[6]&&qe(n);const i={c:function(){e=Pt("div"),t&&t.c(),this.h()},l:function(a){e=Lt(a,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var u=It(e);t&&t.l(u),u.forEach(W),this.h()},h:function(){Oe(e,"id","svelte-announcer"),Oe(e,"aria-live","assertive"),Oe(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px"),At(e,tn,48,1,1110)},m:function(a,u){X(a,e,u),t&&t.m(e,null)},p:function(a,u){a[6]?t?t.p(a,u):(t=qe(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(a){a&&W(e),t&&t.d()}};return Z("SvelteRegisterBlock",{block:i,id:Ce.name,type:"if",source:"(48:0) {#if mounted}",ctx:n}),i}function qe(n){let e;const t={c:function(){e=Ot(n[7])},l:function(s){e=jt(s,n[7])},m:function(s,a){X(s,e,a)},p:function(s,a){a&128&&Ut(e,s[7])},d:function(s){s&&W(e)}};return Z("SvelteRegisterBlock",{block:t,id:qe.name,type:"if",source:"(50:2) {#if navigated}",ctx:n}),t}function Be(n){let e,t,i,s,a;const u=[mt,pt],l=[];function c(v,b){return v[1][1]?0:1}e=c(n),t=l[e]=u[e](n);let h=n[5]&&Ce(n);const y={c:function(){t.c(),i=Rt(),h&&h.c(),s=M()},l:function(b){t.l(b),i=St(b),h&&h.l(b),s=M()},m:function(b,E){l[e].m(b,E),X(b,i,E),h&&h.m(b,E),X(b,s,E),a=!0},p:function(b,[E]){let O=e;e=c(b),e===O?l[e].p(b,E):(be(),G(l[O],1,1,()=>{l[O]=null}),ve(),t=l[e],t?t.p(b,E):(t=l[e]=u[e](b),t.c()),J(t,1),t.m(i.parentNode,i)),b[5]?h?h.p(b,E):(h=Ce(b),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:function(b){a||(J(t),a=!0)},o:function(b){G(t),a=!1},d:function(b){l[e].d(b),b&&W(i),h&&h.d(b),b&&W(s)}};return Z("SvelteRegisterBlock",{block:y,id:Be.name,type:"component",source:"",ctx:n}),y}function nn(n,e,t){let{$$slots:i={},$$scope:s}=e;kt("Root",i,[]);let{stores:a}=e,{page:u}=e,{constructors:l}=e,{components:c=[]}=e,{form:h}=e,{data_0:y=null}=e,{data_1:v=null}=e;rt(a.page.notify);let b=!1,E=!1,O=null;ye(()=>{const _=a.page.subscribe(()=>{b&&(t(6,E=!0),t(7,O=document.title||"untitled page"))});return t(5,b=!0),_}),n.$$.on_mount.push(function(){a===void 0&&!("stores"in e||n.$$.bound[n.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),u===void 0&&!("page"in e||n.$$.bound[n.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),l===void 0&&!("constructors"in e||n.$$.bound[n.$$.props.constructors])&&console.warn("<Root> was created without expected prop 'constructors'"),h===void 0&&!("form"in e||n.$$.bound[n.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const I=["stores","page","constructors","components","form","data_0","data_1"];Object.keys(e).forEach(_=>{!~I.indexOf(_)&&_.slice(0,2)!=="$$"&&_!=="slot"&&console.warn(`<Root> was created with unknown prop '${_}'`)});function re(_){Ae[_?"unshift":"push"](()=>{c[1]=_,t(0,c)})}function F(_){Ae[_?"unshift":"push"](()=>{c[0]=_,t(0,c)})}function ue(_){Ae[_?"unshift":"push"](()=>{c[0]=_,t(0,c)})}return n.$$set=_=>{"stores"in _&&t(8,a=_.stores),"page"in _&&t(9,u=_.page),"constructors"in _&&t(1,l=_.constructors),"components"in _&&t(0,c=_.components),"form"in _&&t(2,h=_.form),"data_0"in _&&t(3,y=_.data_0),"data_1"in _&&t(4,v=_.data_1)},n.$capture_state=()=>({setContext:Et,afterUpdate:rt,onMount:ye,browser:en,stores:a,page:u,constructors:l,components:c,form:h,data_0:y,data_1:v,mounted:b,navigated:E,title:O}),n.$inject_state=_=>{"stores"in _&&t(8,a=_.stores),"page"in _&&t(9,u=_.page),"constructors"in _&&t(1,l=_.constructors),"components"in _&&t(0,c=_.components),"form"in _&&t(2,h=_.form),"data_0"in _&&t(3,y=_.data_0),"data_1"in _&&t(4,v=_.data_1),"mounted"in _&&t(5,b=_.mounted),"navigated"in _&&t(6,E=_.navigated),"title"in _&&t(7,O=_.title)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&768&&a.page.set(u)},[c,l,h,y,v,b,E,O,a,u,re,F,ue]}class rn extends yt{constructor(e){super(e),bt(this,e,nn,Be,vt,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4}),Z("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:Be.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get constructors(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set constructors(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const on="modulepreload",an=function(n,e){return new URL(n,e).href},lt={},x=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=an(a,i),a in lt)return;lt[a]=!0;const u=a.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(!!i)for(let y=s.length-1;y>=0;y--){const v=s[y];if(v.href===a&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":on,u||(h.as="script",h.crossOrigin=""),h.href=a,document.head.appendChild(h),u)return new Promise((y,v)=>{h.addEventListener("load",y),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},sn={},Ee=[()=>x(()=>import("./chunks/0-4bbefece.js"),["./chunks/0-4bbefece.js","./components/pages/_layout.svelte-3a866b7b.js","./chunks/index-077e28f3.js"],import.meta.url),()=>x(()=>import("./chunks/1-66b4d8b0.js"),["./chunks/1-66b4d8b0.js","./components/error.svelte-07065e84.js","./chunks/index-077e28f3.js","./chunks/singletons-ae9379f3.js","./chunks/index-0630be5a.js"],import.meta.url),()=>x(()=>import("./chunks/2-528ac847.js"),["./chunks/2-528ac847.js","./components/pages/_page.svelte-4f79ca52.js","./chunks/index-077e28f3.js","./chunks/Container-1a03cd77.js","./assets/Container-53d5c872.css","./chunks/index-0630be5a.js"],import.meta.url),()=>x(()=>import("./chunks/3-16ada6b3.js"),["./chunks/3-16ada6b3.js","./components/pages/add/_page.svelte-9a875237.js","./chunks/index-077e28f3.js","./chunks/Container-1a03cd77.js","./assets/Container-53d5c872.css"],import.meta.url),()=>x(()=>import("./chunks/4-0d0d0df8.js"),["./chunks/4-0d0d0df8.js","./components/pages/sows/_page.svelte-5b790337.js","./chunks/index-077e28f3.js","./chunks/Container-1a03cd77.js","./assets/Container-53d5c872.css"],import.meta.url),()=>x(()=>import("./chunks/5-682e682a.js"),["./chunks/5-682e682a.js","./components/pages/stalls/_page.svelte-eb429b0b.js","./chunks/index-077e28f3.js","./chunks/Container-1a03cd77.js","./assets/Container-53d5c872.css"],import.meta.url)],cn=[],ln={"/":[2],"/add":[3],"/sows":[-5],"/stalls":[-6]},un={handleError:({error:n})=>{console.error(n)}};let le=class{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},ut=class{constructor(e,t){this.status=e,this.location=t}};async function fn(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const dn=-1,hn=-2,pn=-3,mn=-4,_n=-5,wn=-6;function gn(n,e){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const t=n,i=Array(t.length);function s(a,u=!1){if(a===dn)return;if(a===pn)return NaN;if(a===mn)return 1/0;if(a===_n)return-1/0;if(a===wn)return-0;if(u)throw new Error("Invalid input");if(a in i)return i[a];const l=t[a];if(!l||typeof l!="object")i[a]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const c=l[0],h=e==null?void 0:e[c];if(h)return i[a]=h(s(l[1]));switch(c){case"Date":i[a]=new Date(l[1]);break;case"Set":const y=new Set;i[a]=y;for(let E=1;E<l.length;E+=1)y.add(s(l[E]));break;case"Map":const v=new Map;i[a]=v;for(let E=1;E<l.length;E+=2)v.set(s(l[E]),s(l[E+1]));break;case"RegExp":i[a]=new RegExp(l[1],l[2]);break;case"Object":i[a]=Object(l[1]);break;case"BigInt":i[a]=BigInt(l[1]);break;case"null":const b=Object.create(null);i[a]=b;for(let E=1;E<l.length;E+=2)b[l[E]]=s(l[E+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(l.length);i[a]=c;for(let h=0;h<l.length;h+=1){const y=l[h];y!==hn&&(c[h]=s(y))}}else{const c={};i[a]=c;for(const h in l){const y=l[h];c[h]=s(y)}}return i[a]}return s(0)}function yn(n){const e=new Set(n);function t(i,s){if(i){for(const a in i)if(a[0]!=="_"&&!e.has(a)){const u=n.join(", ");throw new Error(`Invalid export '${a}'${s?` in ${s}`:""} (valid exports are ${u}, or anything with a '_' prefix)`)}}}return t}const bn=yn(["load","prerender","csr","ssr","trailingSlash","config"]);function vn(n){return n.filter(e=>e!=null)}const Ne=$t(Ee,cn,ln,sn),wt=Ee[0],Ve=Ee[1];wt();Ve();const Y=ht(ft)??{},ae=ht(dt)??{};function Te(n){Y[n]=ie()}function kn({target:n}){var et;const e=document.documentElement,t=[],i=[];let s=null;const a={before_navigate:[],after_navigate:[]};let u={branch:[],error:null,url:null},l=!1,c=!1,h=!0,y=!1,v=!1,b=!1,E=!1,O,I=(et=history.state)==null?void 0:et[V];I||(I=Date.now(),history.replaceState({...history.state,[V]:I},"",location.href));const re=Y[I];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let F,ue,_;async function Me(){_=_||Promise.resolve(),await _,_=null;const r=new URL(location.href),o=he(r,!0);s=null,await ze(o,r,[])}function Ge(r){i.some(o=>o==null?void 0:o.snapshot)&&(ae[r]=i.map(o=>{var d;return(d=o==null?void 0:o.snapshot)==null?void 0:d.capture()}))}function Je(r){var o;(o=ae[r])==null||o.forEach((d,f)=>{var m,p;(p=(m=i[f])==null?void 0:m.snapshot)==null||p.restore(d)})}async function Re(r,{noScroll:o=!1,replaceState:d=!1,keepFocus:f=!1,state:m={},invalidateAll:p=!1},w,g){return typeof r=="string"&&(r=new URL(r,ot(document))),me({url:r,scroll:o?ie():null,keepfocus:f,redirect_chain:w,details:{state:m,replaceState:d},nav_token:g,accepted:()=>{p&&(E=!0)},blocked:()=>{},type:"goto"})}async function We(r){const o=he(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ze(o).then(d=>(d.type==="loaded"&&d.state.error&&(s=null),d))},s.promise}async function fe(...r){const d=Ne.filter(f=>r.some(m=>f.exec(m))).map(f=>Promise.all([...f.layouts,f.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(d)}async function ze(r,o,d,f,m,p={},w){var R,S;ue=p;let g=r&&await Ze(r);if(g||(g=await $e(o,{id:null},await se(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,ue!==p)return!1;if(g.type==="redirect")if(d.length>10||d.includes(o.pathname))g=await de({status:500,error:await se(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return Re(new URL(g.location,o).href,{},[...d,o.pathname],p),!1;else((S=(R=g.props)==null?void 0:R.page)==null?void 0:S.status)>=400&&await K.updated.check()&&await _e(o);if(t.length=0,E=!1,y=!0,f&&(Te(f),Ge(f)),m&&m.details){const{details:P}=m,j=P.replaceState?0:1;if(P.state[V]=I+=j,history[P.replaceState?"replaceState":"pushState"](P.state,"",o),!P.replaceState){let N=I+1;for(;ae[N]||Y[N];)delete ae[N],delete Y[N],N+=1}}if(s=null,c?(u=g.state,g.props.page&&(g.props.page.url=o),O.$set(g.props)):Ye(g),m){const{scroll:P,keepfocus:j}=m,{activeElement:N}=document;await we();const A=document.activeElement!==N&&document.activeElement!==document.body;if(!j&&!A&&await De(),h){const k=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));P?scrollTo(P.x,P.y):k?k.scrollIntoView():scrollTo(0,0)}}else await we();h=!0,g.props.page&&(F=g.props.page),w&&w(),y=!1}function Ye(r){var f;if(document.querySelector("vite-error-overlay"))return;u=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),F=r.props.page,O=new rn({target:n,props:{...r.props,stores:K,components:i},hydrate:!0}),Je(I);const d={from:null,to:{params:u.params,route:{id:((f=u.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};a.after_navigate.forEach(m=>m(d)),c=!0}async function oe({url:r,params:o,branch:d,status:f,error:m,route:p,form:w}){let g="never";for(const A of d)(A==null?void 0:A.slash)!==void 0&&(g=A.slash);r.pathname=Dt(r.pathname,g),r.search=r.search;const R={type:"loaded",state:{url:r,params:o,branch:d,error:m,route:p},props:{constructors:vn(d).map(A=>A.node.component)}};w!==void 0&&(R.props.form=w);let S={},P=!F,j=0;for(let A=0;A<Math.max(d.length,u.branch.length);A+=1){const k=d[A],D=u.branch[A];(k==null?void 0:k.data)!==(D==null?void 0:D.data)&&(P=!0),k&&(S={...S,...k.data},P&&(R.props[`data_${j}`]=S),j+=1)}return(!u.url||r.href!==u.url.href||u.error!==m||w!==void 0&&w!==F.form||P)&&(R.props.page={error:m,params:o,route:{id:(p==null?void 0:p.id)??null},status:f,url:new URL(r),form:w??null,data:P?S:F.data}),R}async function Se({loader:r,parent:o,url:d,params:f,route:m,server_data_node:p}){var S,P,j;let w=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},R=await r();if(bn(R.universal),(S=R.universal)!=null&&S.load){let N=function(...k){for(const D of k){const{href:q}=new URL(D,d);g.dependencies.add(q)}};const A={route:{get id(){return g.route=!0,m.id}},params:new Proxy(f,{get:(k,D)=>(g.params.add(D),k[D])}),data:(p==null?void 0:p.data)??null,url:Vt(d,()=>{g.url=!0}),async fetch(k,D){let q;k instanceof Request?(q=k.url,D={body:k.method==="GET"||k.method==="HEAD"?void 0:await k.blob(),cache:k.cache,credentials:k.credentials,headers:k.headers,integrity:k.integrity,keepalive:k.keepalive,method:k.method,mode:k.mode,redirect:k.redirect,referrer:k.referrer,referrerPolicy:k.referrerPolicy,signal:k.signal,...D}):q=k;const B=new URL(q,d);return N(B.href),B.origin===d.origin&&(q=B.href.slice(d.origin.length)),c?zt(q,B.href,D):Wt(q,D)},setHeaders:()=>{},depends:N,parent(){return g.parent=!0,o()}};try{if(Gt(),w=await R.universal.load.call(null,A)??null,w!=null&&Object.getPrototypeOf(w)!==Object.prototype)throw new Error(`a load function related to route '${m.id}' returned ${typeof w!="object"?`a ${typeof w}`:w instanceof Response?"a Response object":Array.isArray(w)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{Jt()}w=w?await fn(w):null}return{node:R,loader:r,server:p,universal:(P=R.universal)!=null&&P.load?{type:"data",data:w,uses:g}:null,data:w??(p==null?void 0:p.data)??null,slash:((j=R.universal)==null?void 0:j.trailingSlash)??(p==null?void 0:p.slash)}}function Xe(r,o,d,f,m){if(E)return!0;if(!f)return!1;if(f.parent&&r||f.route&&o||f.url&&d)return!0;for(const p of f.params)if(m[p]!==u.params[p])return!0;for(const p of f.dependencies)if(t.some(w=>w(new URL(p))))return!0;return!1}function Pe(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ze({id:r,invalidating:o,url:d,params:f,route:m}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:p,layouts:w,leaf:g}=m,R=[...w,g];p.forEach(L=>L==null?void 0:L().catch(()=>{})),R.forEach(L=>L==null?void 0:L[1]().catch(()=>{}));let S=null;const P=u.url?r!==u.url.pathname+u.url.search:!1,j=u.route?m.id!==u.route.id:!1;let N=!1;const A=R.map((L,C)=>{var z;const U=u.branch[C],T=!!(L!=null&&L[0])&&((U==null?void 0:U.loader)!==L[1]||Xe(N,j,P,(z=U.server)==null?void 0:z.uses,f));return T&&(N=!0),T});if(A.some(Boolean)){try{S=await En(d,A)}catch(L){return de({status:L instanceof le?L.status:500,error:await se(L,{url:d,params:f,route:{id:m.id}}),url:d,route:m})}if(S.type==="redirect")return S}const k=S==null?void 0:S.nodes;let D=!1;const q=R.map(async(L,C)=>{var Le;if(!L)return;const U=u.branch[C],T=k==null?void 0:k[C];if((!T||T.type==="skip")&&L[1]===(U==null?void 0:U.loader)&&!Xe(D,j,P,(Le=U.universal)==null?void 0:Le.uses,f))return U;if(D=!0,(T==null?void 0:T.type)==="error")throw T;return Se({loader:L[1],url:d,params:f,route:m,parent:async()=>{var nt;const tt={};for(let Ie=0;Ie<C;Ie+=1)Object.assign(tt,(nt=await q[Ie])==null?void 0:nt.data);return tt},server_data_node:Pe(T===void 0&&L[0]?{type:"skip"}:T??null,U==null?void 0:U.server)})});for(const L of q)L.catch(()=>{});const B=[];for(let L=0;L<R.length;L+=1)if(R[L])try{B.push(await q[L])}catch(C){if(C instanceof ut)return{type:"redirect",location:C.location};let U=500,T;if(k!=null&&k.includes(C))U=C.status??U,T=C.error;else if(C instanceof le)U=C.status,T=C.body;else{if(await K.updated.check())return await _e(d);T=await se(C,{params:f,url:d,route:{id:m.id}})}const z=await Qe(L,B,p);return z?await oe({url:d,params:f,branch:B.slice(0,z.idx).concat(z.node),status:U,error:T,route:m}):await $e(d,{id:m.id},T,U)}else B.push(void 0);return await oe({url:d,params:f,branch:B,status:200,error:null,route:m,form:o?void 0:null})}async function Qe(r,o,d){for(;r--;)if(d[r]){let f=r;for(;!o[f];)f-=1;try{return{idx:f+1,node:{node:await d[r](),loader:d[r],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:r,error:o,url:d,route:f}){const m={},w=await Se({loader:wt,url:d,params:m,route:f,parent:()=>Promise.resolve({}),server_data_node:Pe(null)}),g={node:await Ve(),loader:Ve,universal:null,server:null,data:null};return await oe({url:d,params:m,branch:[w,g],status:r,error:o,route:null})}function he(r,o){if(st(r,Q))return;const d=pe(r);for(const f of Ne){const m=f.exec(d);if(m)return{id:r.pathname+r.search,invalidating:o,route:f,params:qt(m),url:r}}}function pe(r){return Ct(r.pathname.slice(Q.length)||"/")}function xe({url:r,type:o,intent:d,delta:f}){var g,R;let m=!1;const p={from:{params:u.params,route:{id:((g=u.route)==null?void 0:g.id)??null},url:u.url},to:{params:(d==null?void 0:d.params)??null,route:{id:((R=d==null?void 0:d.route)==null?void 0:R.id)??null},url:r},willUnload:!d,type:o};f!==void 0&&(p.delta=f);const w={...p,cancel:()=>{m=!0}};return v||a.before_navigate.forEach(S=>S(w)),m?null:p}async function me({url:r,scroll:o,keepfocus:d,redirect_chain:f,details:m,type:p,delta:w,nav_token:g,accepted:R,blocked:S}){const P=he(r,!1),j=xe({url:r,type:p,delta:w,intent:P});if(!j){S();return}const N=I;R(),v=!0,c&&K.navigating.set(j),await ze(P,r,f,N,{scroll:o,keepfocus:d,details:m},g,()=>{v=!1,a.after_navigate.forEach(A=>A(j)),K.navigating.set(null)})}async function $e(r,o,d,f){return r.origin===location.origin&&r.pathname===location.pathname&&!l?await de({status:f,error:d,url:r,route:o}):await _e(r)}function _e(r){return location.href=r.href,new Promise(()=>{})}function gt(){let r;e.addEventListener("mousemove",p=>{const w=p.target;clearTimeout(r),r=setTimeout(()=>{f(w,2)},20)});function o(p){f(p.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const d=new IntersectionObserver(p=>{for(const w of p)w.isIntersecting&&(fe(pe(new URL(w.target.href))),d.unobserve(w.target))},{threshold:0});function f(p,w){const g=at(p,e);if(!g)return;const{url:R,external:S}=je(g,Q);if(S)return;const P=ge(g);P.reload||(w<=P.preload_data?We(R):w<=P.preload_code&&fe(pe(R)))}function m(){d.disconnect();for(const p of e.querySelectorAll("a")){const{url:w,external:g}=je(p,Q);if(g)continue;const R=ge(p);R.reload||(R.preload_code===it.viewport&&d.observe(p),R.preload_code===it.eager&&fe(pe(w)))}}a.after_navigate.push(m),m()}return{after_navigate:r=>{ye(()=>(a.after_navigate.push(r),()=>{const o=a.after_navigate.indexOf(r);a.after_navigate.splice(o,1)}))},before_navigate:r=>{ye(()=>(a.before_navigate.push(r),()=>{const o=a.before_navigate.indexOf(r);a.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{if(c&&!y)throw new Error("Can only disable scroll handling during navigation");(y||!c)&&(h=!1)},goto:(r,o={})=>Re(r,o,[]),invalidate:r=>{if(typeof r=="function")t.push(r);else{const{href:o}=new URL(r,location.href);t.push(d=>d.href===o)}return Me()},invalidateAll:()=>(E=!0,Me()),preload_data:async r=>{const o=new URL(r,ot(document));await We(o)},preload_code:fe,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:d,route:f}=u;if(!f)return;const m=await Qe(u.branch.length,d,f.errors);if(m){const p=await oe({url:o,params:u.params,branch:d.slice(0,m.idx).concat(m.node),status:r.status??500,error:r.error,route:f});u=p.state,O.$set(p.props),we().then(De)}}else if(r.type==="redirect")Re(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...F,form:r.data,status:r.status}};O.$set(o),r.type==="success"&&we().then(De)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var f;let d=!1;if(!v){const m={from:{params:u.params,route:{id:((f=u.route)==null?void 0:f.id)??null},url:u.url},to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};a.before_navigate.forEach(p=>p(m))}d?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Te(I),ct(ft,Y),Ge(I),ct(dt,ae))}),(r=navigator.connection)!=null&&r.saveData||gt(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const d=at(o.composedPath()[0],e);if(!d)return;const{url:f,external:m,target:p}=je(d,Q);if(!f)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const w=ge(d);if(!(d instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:"))return;if(m||w.reload){xe({url:f,type:"link"})||o.preventDefault(),v=!0;return}const[R,S]=f.href.split("#");if(S!==void 0&&R===location.href.split("#")[0]){b=!0,Te(I),u.url=f,K.page.set({...F,url:f}),K.page.notify();return}me({url:f,scroll:w.noscroll?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const d=HTMLFormElement.prototype.cloneNode.call(o.target),f=o.submitter;if(((f==null?void 0:f.formMethod)||d.method)!=="get")return;const p=new URL((f==null?void 0:f.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||d.action);if(st(p,Q))return;const w=o.target,{noscroll:g,reload:R}=ge(w);if(R)return;o.preventDefault(),o.stopPropagation();const S=new FormData(w),P=f==null?void 0:f.getAttribute("name");P&&S.append(P,(f==null?void 0:f.getAttribute("value"))??""),p.search=new URLSearchParams(S).toString(),me({url:p,scroll:g?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var d;if((d=o.state)!=null&&d[V]){if(o.state[V]===I)return;const f=Y[o.state[V]];if(u.url.href.split("#")[0]===location.href.split("#")[0]){Y[I]=ie(),I=o.state[V],scrollTo(f.x,f.y);return}const m=o.state[V]-I;let p=!1;await me({url:new URL(location.href),scroll:f,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[V]},blocked:()=>{history.go(-m),p=!0},type:"popstate",delta:m}),p||Je(I)}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[V]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:d,params:f,route:m,data:p,form:w})=>{l=!0;const g=new URL(location.href);({params:f={},route:m={id:null}}=he(g,!1)||{});let R;try{const S=d.map(async(P,j)=>{const N=p[j];return Se({loader:Ee[P],url:g,params:f,route:m,parent:async()=>{const A={};for(let k=0;k<j;k+=1)Object.assign(A,(await S[k]).data);return A},server_data_node:Pe(N)})});R=await oe({url:g,params:f,branch:await Promise.all(S),status:r,error:o,form:w,route:Ne.find(({id:P})=>P===m.id)??null})}catch(S){if(S instanceof ut){await _e(new URL(S.location,location.href));return}R=await de({status:S instanceof le?S.status:500,error:await se(S,{url:g,params:f,route:m}),url:g,route:m})}Ye(R)}}}async function En(n,e){var a;const t=new URL(n);if(t.pathname=Kt(n.pathname),n.searchParams.has("x-sveltekit-invalidated"))throw new Error('Cannot used reserved query parameter "x-sveltekit-invalidated"');t.searchParams.append("x-sveltekit-invalidated",e.map(u=>u?"1":"").join("_"));const i=await ke(t.href),s=await i.json();if(!i.ok)throw new le(i.status,s);return(a=s.nodes)==null||a.forEach(u=>{(u==null?void 0:u.type)==="data"&&(u.data=gn(u.data),u.uses={dependencies:new Set(u.uses.dependencies??[]),params:new Set(u.uses.params??[]),parent:!!u.uses.parent,route:!!u.uses.route,url:!!u.uses.url})}),s}function se(n,e){return n instanceof le?n.body:un.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function De(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var s;i((s=getSelection())==null?void 0:s.removeAllRanges())})})}}{const n=console.warn;console.warn=function(...t){t.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(t[0])||n(...t)}}async function In({assets:n,env:e,hydrate:t,target:i,version:s}){i===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const a=kn({target:i});Nt({client:a}),t?await a._hydrate(t):a.goto(location.href,{replaceState:!0}),a._start_router()}export{In as start};