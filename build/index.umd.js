(function(o,p){typeof exports=="object"&&typeof module<"u"?p(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],p):(o=typeof globalThis<"u"?globalThis:o||self,p(o.React,o.require$$0$1))})(this,function(o,p){"use strict";var R={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function k(){if(_)return h;_=1;var u=o,s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,g=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function x(n,e,l){var t,f={},r=null,a=null;l!==void 0&&(r=""+l),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(t in e)d.call(e,t)&&!b.hasOwnProperty(t)&&(f[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)f[t]===void 0&&(f[t]=e[t]);return{$$typeof:s,type:n,key:r,ref:a,props:f,_owner:g.current}}return h.Fragment=i,h.jsx=x,h.jsxs=x,h}R.exports=k();var c=R.exports,m={},v=p;m.createRoot=v.createRoot,m.hydrateRoot=v.hydrateRoot;function w({avatarUrl:u,color:s="#3b82f6",gradient:i="linear-gradient(145deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",name:d,seen:g,status:b,small:x}){const[n,e]=o.useState(!1),[l,t]=o.useState(!0),f=()=>{if(u)return;const a="AA";if(!d)return a;const y=d.split(" ");return!y||y.length===0?a:y.map(j=>{if(j[0])return j[0].toUpperCase()}).join("")},r=(a=!1)=>a?x?"42px":"54px":x?"36px":"50px";return o.useEffect(()=>{l||e(!1)},[l]),o.useEffect(()=>{n&&setTimeout(()=>{t(!0)},250)},[n]),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[l&&c.jsx("div",{style:{zIndex:10,position:"fixed",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",background:"black"},onClick:()=>t(!1),children:c.jsx("h1",{style:{color:"white",textAlign:"center"},children:"Hello this is a story"})}),c.jsxs("div",{style:{display:"flex",alignContent:"center",alignItems:"center",background:b?g?"#ccc":i:"",padding:"3px",width:r(!0),height:r(!0),borderRadius:r(!0)},children:[c.jsx("div",{style:{zIndex:n?2:-1,position:"absolute",width:r(!0),height:r(!0),background:"black",borderRadius:"100px"},onClick:()=>e(!n),className:n?"grow-fast":""}),c.jsx("div",{style:{zIndex:1,backgroundImage:`url(${u})`,border:"2px solid white",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"700",width:r(),height:r(),borderRadius:r(),backgroundColor:s,cursor:"pointer",backgroundSize:"cover"},onClick:()=>e(!n),children:f()})]})]})}const I=u=>u.replace(/-([a-z])/g,(s,i)=>i.toUpperCase());class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const s=this.getPropsFromAttributes();m.createRoot(this.shadowRoot).render(c.jsx(w,{...s}))}getPropsFromAttributes(){const s={};for(let i=0;i<this.attributes.length;i++){const d=this.attributes[i];s[I(d.name)]=d.value}return s}}customElements.define("storees",C)});
