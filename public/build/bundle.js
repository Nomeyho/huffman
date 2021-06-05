var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}function u(t,e,n){t.$$.on_destroy.push(c(e,n))}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function v(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){(null!=e||t.value)&&(t.value=e)}let x;function b(t){x=t}const w=[],k=[],_=[],z=[],q=Promise.resolve();let E=!1;function j(t){_.push(t)}let C=!1;const N=new Set;function A(){if(!C){C=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),B(e.$$)}for(w.length=0;k.length;)k.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];N.has(e)||(N.add(e),e())}_.length=0}while(w.length);for(;z.length;)z.pop()();E=!1,C=!1,N.clear()}}function B(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const L=new Set;let M;function O(){M={r:0,c:[],p:M}}function S(){M.r||l(M.c),M=M.p}function F(t,e){t&&t.i&&(L.delete(t),t.i(e))}function H(t,e,n,l){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push(()=>{L.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function P(t){t&&t.c()}function T(t,n,o){const{fragment:c,on_mount:u,on_destroy:s,after_update:i}=t.$$;c&&c.m(n,o),j(()=>{const n=u.map(e).filter(r);s?s.push(...n):l(n),t.$$.on_mount=[]}),i.forEach(j)}function I(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,q.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,o,c,u,s,i=[-1]){const a=x;b(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:i};let h=!1;d.ctx=o?o(e,f,(t,n,...l)=>{const r=l.length?l[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),h&&W(e,t)),n}):[],d.update(),h=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&F(e.$$.fragment),T(e,r.target,r.anchor),A()),b(a)}class G{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const J=[];function K(e,n=t){let l;const r=[];function c(t){if(o(e,t)&&(e=t,l)){const t=!J.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),J.push(n,e)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(o,u=t){const s=[o,u];return r.push(s),1===r.length&&(l=n(c)||t),o(e),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(l(),l=null)}}}}function Q(e,n,o){const u=!Array.isArray(e),s=u?[e]:e,i=n.length<2;return{subscribe:K(o,e=>{let o=!1;const a=[];let f=0,d=t;const h=()=>{if(f)return;d();const l=n(u?a[0]:a,e);i?e(l):d=r(l)?l:t},g=s.map((t,e)=>c(t,t=>{a[e]=t,f&=~(1<<e),o&&h()},()=>{f|=1<<e}));return o=!0,h(),function(){l(g),d()}}).subscribe}}var R=[{letter:"a",value:8.167},{letter:"b",value:1.492},{letter:"c",value:2.782},{letter:"d",value:4.253},{letter:"e",value:12.702},{letter:"f",value:2.228},{letter:"g",value:2.015},{letter:"h",value:6.094},{letter:"i",value:6.966},{letter:"j",value:.153},{letter:"k",value:.772},{letter:"l",value:4.025},{letter:"m",value:2.406},{letter:"n",value:6.749},{letter:"o",value:7.507},{letter:"p",value:1.929},{letter:"q",value:.095},{letter:"r",value:5.987},{letter:"s",value:6.327},{letter:"t",value:9.056},{letter:"u",value:2.758},{letter:"v",value:.978},{letter:"w",value:2.36},{letter:"x",value:.15},{letter:"y",value:1.974},{letter:"z",value:.074}];class U{constructor(t){this.sort=t,this.elements=[]}push(t){this.elements.push(t),this.elements.sort(this.sort)}pop(){return this.elements.shift()}empty(){return 0===this.elements.length}}const V=(t,e)=>t.value-e.value;function X(t){return t.children?t.children.flatMap(X):[t]}const Y=t=>Math.round(100*(t+Number.EPSILON))/100,Z=20,tt=80,et=20,nt=20;const lt=function(){const{subscribe:t,set:e,update:n}=K(R);return{subscribe:t,set:()=>n(t=>t),reset:()=>e(R)}}(),rt=Q(lt,t=>{const e=function(t){const e=new U(V);for(let n of t)e.push(n);for(;;){const t=e.pop(),n=e.pop();if(!t||!n)return t;e.push({letter:t.letter+n.letter,value:t.value+n.value,children:[t,n]})}}(t);return function t(e){if(!e.children)return;e.encoding||(e.encoding="");const n=e.children[0],l=e.children[1],r=e.encoding||"";n.encoding=r+"1",l.encoding=r+"0",t(n),t(l)}(e),e}),ot=Q(rt,t=>{const e=d3.hierarchy(t);return d3.cluster().separation(()=>2).size([300-Z-et,500-nt-tt])(e),e}),ct=Q(rt,t=>function(t){const e=X(t);let n=0;for(const t of e)n+=t.encoding.length*t.value;return n/t.value}(t).toFixed(3)),ut=Q(rt,t=>function(t){const e=X(t);let n=0;for(const l of e){const e=l.value/t.value;n-=e*Math.log2(e)}return n}(t).toFixed(3));function st(e){let n,l;return{c(){n=h("path"),m(n,"class","link svelte-16a3jf4"),m(n,"d",l=e[0]?e[1](e[0].target):"")},m(t,e){i(t,n,e)},p(t,[e]){1&e&&l!==(l=t[0]?t[1](t[0].target):"")&&m(n,"d",l)},i:t,o:t,d(t){t&&a(n)}}}function it(t,e,n){let{link:l}=e;l.source.x,l.source.y,l.target.x,l.target.y;const r=d3.linkHorizontal().source(t=>[t.parent.y+10,t.parent.x]).target(t=>[t.y-10,t.x]);return t.$set=t=>{"link"in t&&n(0,l=t.link)},[l,r]}class at extends G{constructor(t){super(),D(this,t,it,st,o,{link:0})}}function ft(t){let e,n,l,r,o,c,u,f,d,v=t[0].data.letter+"",y=t[0].data.encoding+"";return{c(){e=h("text"),n=g(v),o=p(),c=h("text"),u=g(y),m(e,"class","letter svelte-1n1oz0q"),m(e,"x",l=t[0].y+16),m(e,"y",r=t[0].x+2),m(c,"class","encoding svelte-1n1oz0q"),m(c,"x",f=t[0].y+65),m(c,"y",d=t[0].x+2)},m(t,l){i(t,e,l),s(e,n),i(t,o,l),i(t,c,l),s(c,u)},p(t,o){1&o&&v!==(v=t[0].data.letter+"")&&$(n,v),1&o&&l!==(l=t[0].y+16)&&m(e,"x",l),1&o&&r!==(r=t[0].x+2)&&m(e,"y",r),1&o&&y!==(y=t[0].data.encoding+"")&&$(u,y),1&o&&f!==(f=t[0].y+65)&&m(c,"x",f),1&o&&d!==(d=t[0].x+2)&&m(c,"y",d)},d(t){t&&a(e),t&&a(o),t&&a(c)}}}function dt(e){let n,l,r,o,c,u,f=Y(e[0].data.value)+"",d=0===e[0].height&&ft(e);return{c(){n=h("text"),l=g(f),c=p(),d&&d.c(),u=g(""),m(n,"class","value svelte-1n1oz0q"),m(n,"x",r=e[0].y),m(n,"y",o=e[0].x+2)},m(t,e){i(t,n,e),s(n,l),i(t,c,e),d&&d.m(t,e),i(t,u,e)},p(t,[e]){1&e&&f!==(f=Y(t[0].data.value)+"")&&$(l,f),1&e&&r!==(r=t[0].y)&&m(n,"x",r),1&e&&o!==(o=t[0].x+2)&&m(n,"y",o),0===t[0].height?d?d.p(t,e):(d=ft(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&a(n),t&&a(c),d&&d.d(t),t&&a(u)}}}function ht(t,e,n){let{node:l}=e;return t.$set=t=>{"node"in t&&n(0,l=t.node)},[l]}class gt extends G{constructor(t){super(),D(this,t,ht,dt,o,{node:0})}}function pt(t,e,n){const l=t.slice();return l[3]=e[n],l}function vt(t,e,n){const l=t.slice();return l[6]=e[n],l}function mt(t){let e;const n=new at({props:{link:t[6]}});return{c(){P(n.$$.fragment)},m(t,l){T(n,t,l),e=!0},p(t,e){const l={};2&e&&(l.link=t[6]),n.$set(l)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function $t(t){let e;const n=new gt({props:{node:t[3]}});return{c(){P(n.$$.fragment)},m(t,l){T(n,t,l),e=!0},p(t,e){const l={};2&e&&(l.node=t[3]),n.$set(l)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function yt(t){let e,n,l,r,o,c,u,d;j(t[2]);let g=t[1].links(),p=[];for(let e=0;e<g.length;e+=1)p[e]=mt(vt(t,g,e));const $=t=>H(p[t],1,1,()=>{p[t]=null});let y=t[1].descendants(),x=[];for(let e=0;e<y.length;e+=1)x[e]=$t(pt(t,y,e));const b=t=>H(x[t],1,1,()=>{x[t]=null});return{c(){e=h("svg"),n=h("g"),l=h("g");for(let t=0;t<p.length;t+=1)p[t].c();r=h("g");for(let t=0;t<x.length;t+=1)x[t].c();m(l,"class","links"),m(r,"class","nodes"),m(n,"transform",o="translate("+nt+", "+Z+")"),m(e,"viewBox",c="0 0 500 300"),m(e,"width",t[0]),m(e,"class","svelte-7lcly3")},m(o,c){i(o,e,c),s(e,n),s(n,l);for(let t=0;t<p.length;t+=1)p[t].m(l,null);s(n,r);for(let t=0;t<x.length;t+=1)x[t].m(r,null);u=!0,d=v(window,"resize",t[2])},p(t,[n]){if(2&n){let e;for(g=t[1].links(),e=0;e<g.length;e+=1){const r=vt(t,g,e);p[e]?(p[e].p(r,n),F(p[e],1)):(p[e]=mt(r),p[e].c(),F(p[e],1),p[e].m(l,null))}for(O(),e=g.length;e<p.length;e+=1)$(e);S()}if(2&n){let e;for(y=t[1].descendants(),e=0;e<y.length;e+=1){const l=pt(t,y,e);x[e]?(x[e].p(l,n),F(x[e],1)):(x[e]=$t(l),x[e].c(),F(x[e],1),x[e].m(r,null))}for(O(),e=y.length;e<x.length;e+=1)b(e);S()}(!u||1&n)&&m(e,"width",t[0])},i(t){if(!u){for(let t=0;t<g.length;t+=1)F(p[t]);for(let t=0;t<y.length;t+=1)F(x[t]);u=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)H(p[t]);x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)H(x[t]);u=!1},d(t){t&&a(e),f(p,t),f(x,t),d()}}}function xt(t,e,n){let l,r;return u(t,ot,t=>n(1,l=t)),[r,l,function(){n(0,r=window.innerWidth)}]}class bt extends G{constructor(t){super(),D(this,t,xt,yt,o,{})}}function wt(t,e,n){const l=t.slice();return l[2]=e[n],l[3]=e,l[4]=n,l}function kt(t){let e,n,l,r,o,c,u,f,h=t[2].letter+"",x=!1;function b(){x=!0,t[1].call(c,t[2])}return{c(){e=d("label"),n=d("span"),l=g(h),r=g(":"),o=p(),c=d("input"),u=p(),m(n,"class","svelte-1lzli0i"),m(c,"type","number"),m(c,"step","any"),m(c,"class","svelte-1lzli0i"),m(e,"class","svelte-1lzli0i")},m(a,d){i(a,e,d),s(e,n),s(n,l),s(n,r),s(e,o),s(e,c),y(c,t[2].value),s(e,u),f=v(c,"input",b)},p(e,n){t=e,1&n&&h!==(h=t[2].letter+"")&&$(l,h),!x&&1&n&&y(c,t[2].value),x=!1},d(t){t&&a(e),f()}}}function _t(e){let n,l,r,o=e[0],c=[];for(let t=0;t<o.length;t+=1)c[t]=kt(wt(e,o,t));return{c(){n=d("div"),l=d("h3"),l.textContent="Frequency",r=p();for(let t=0;t<c.length;t+=1)c[t].c();m(l,"class","svelte-1lzli0i"),m(n,"class","menu svelte-1lzli0i")},m(t,e){i(t,n,e),s(n,l),s(n,r);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(t,[e]){if(1&e){let l;for(o=t[0],l=0;l<o.length;l+=1){const r=wt(t,o,l);c[l]?c[l].p(r,e):(c[l]=kt(r),c[l].c(),c[l].m(n,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=o.length}},i:t,o:t,d(t){t&&a(n),f(c,t)}}}function zt(t,e,n){let l;return u(t,lt,t=>n(0,l=t)),[l,function(t){var e;t.value=""===(e=this.value)?void 0:+e,lt.set(l)}]}class qt extends G{constructor(t){super(),D(this,t,zt,_t,o,{})}}function Et(t){let e,n,l,r,o,c,u,f,h,v,y,x,b,w,k,_,z,q,E;const j=new qt({}),C=new bt({});return{c(){e=d("main"),P(j.$$.fragment),n=p(),l=d("div"),r=d("h1"),r.textContent="Huffman Encoding Tree",o=p(),c=d("ul"),u=d("li"),f=g("Code length:\n\t\t\t\t"),h=d("code"),v=g("L(C) = "),y=g(t[0]),x=p(),b=d("li"),w=g("Entropy:\n\t\t\t\t"),k=d("code"),_=g("H(C) = "),z=g(t[1]),q=p(),P(C.$$.fragment),m(r,"class","svelte-13jcqns"),m(u,"class","svelte-13jcqns"),m(b,"class","svelte-13jcqns"),m(c,"class","svelte-13jcqns"),m(e,"class","container svelte-13jcqns")},m(t,a){i(t,e,a),T(j,e,null),s(e,n),s(e,l),s(l,r),s(l,o),s(l,c),s(c,u),s(u,f),s(u,h),s(h,v),s(h,y),s(c,x),s(c,b),s(b,w),s(b,k),s(k,_),s(k,z),s(l,q),T(C,l,null),E=!0},p(t,[e]){(!E||1&e)&&$(y,t[0]),(!E||2&e)&&$(z,t[1])},i(t){E||(F(j.$$.fragment,t),F(C.$$.fragment,t),E=!0)},o(t){H(j.$$.fragment,t),H(C.$$.fragment,t),E=!1},d(t){t&&a(e),I(j),I(C)}}}function jt(t,e,n){let l,r;return u(t,ct,t=>n(0,l=t)),u(t,ut,t=>n(1,r=t)),[l,r]}return new class extends G{constructor(t){super(),D(this,t,jt,Et,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map