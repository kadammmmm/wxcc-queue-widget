(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,H=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),J=new WeakMap;let at=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(H&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new at(typeof r=="string"?r:r+"",void 0,j),dt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1]),r[0]);return new at(e,r,j)},ht=(r,t)=>{if(H)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},G=H?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:gt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:mt,getOwnPropertySymbols:vt,getPrototypeOf:$t}=Object,L=globalThis,K=L.trustedTypes,yt=K?K.emptyScript:"",bt=L.reactiveElementPolyfillSupport,q=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},B=(r,t)=>!pt(r,t),Y={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=ft(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);a?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const e=this.properties,s=[...mt(e),...vt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:N;this._$Em=i;const l=n.fromAttribute(e,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,a=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??B)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:n}=a,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[q("elementProperties")]=new Map,A[q("finalized")]=new Map,bt?.({ReactiveElement:A}),(L.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,I=W.trustedTypes,Z=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+$,_t=`<${ot}>`,w=document,P=()=>w.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,wt=r=>Q(r)||typeof r?.[Symbol.iterator]=="function",D=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,b=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,lt=/^(?:script|style|textarea|title)$/i,xt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=xt(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),it=new WeakMap,_=w.createTreeWalker(w,129);function ct(r,t){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const At=(r,t)=>{const e=r.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",n=C;for(let l=0;l<e;l++){const o=r[l];let h,g,c=-1,m=0;for(;m<o.length&&(n.lastIndex=m,g=n.exec(o),g!==null);)m=n.lastIndex,n===C?g[1]==="!--"?n=X:g[1]!==void 0?n=tt:g[2]!==void 0?(lt.test(g[2])&&(i=RegExp("</"+g[2],"g")),n=b):g[3]!==void 0&&(n=b):n===b?g[0]===">"?(n=i??C,c=-1):g[1]===void 0?c=-2:(c=n.lastIndex-g[2].length,h=g[1],n=g[3]===void 0?b:g[3]==='"'?st:et):n===st||n===et?n=b:n===X||n===tt?n=C:(n=b,i=void 0);const v=n===b&&r[l+1].startsWith("/>")?" ":"";a+=n===C?o+_t:c>=0?(s.push(h),o.slice(0,c)+nt+o.slice(c)+$+v):o+$+(c===-2?l:v)}return[ct(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,n=0;const l=t.length-1,o=this.parts,[h,g]=At(t,e);if(this.el=O.createElement(h,s),_.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=_.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(nt)){const m=g[n++],v=i.getAttribute(c).split($),U=/([.?@])?(.*)/.exec(m);o.push({type:1,index:a,name:U[2],strings:v,ctor:U[1]==="."?Et:U[1]==="?"?Ct:U[1]==="@"?qt:z}),i.removeAttribute(c)}else c.startsWith($)&&(o.push({type:6,index:a}),i.removeAttribute(c));if(lt.test(i.tagName)){const c=i.textContent.split($),m=c.length-1;if(m>0){i.textContent=I?I.emptyScript:"";for(let v=0;v<m;v++)i.append(c[v],P()),_.nextNode(),o.push({type:2,index:++a});i.append(c[m],P())}}}else if(i.nodeType===8)if(i.data===ot)o.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)o.push({type:7,index:a}),c+=$.length-1}a++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??w).importNode(e,!0);_.currentNode=i;let a=_.nextNode(),n=0,l=0,o=s[0];for(;o!==void 0;){if(n===o.index){let h;o.type===2?h=new M(a,a.nextSibling,this,t):o.type===1?h=new o.ctor(a,o.name,o.strings,this,t):o.type===6&&(h=new kt(a,this,t)),this._$AV.push(h),o=s[++l]}n!==o?.index&&(a=_.nextNode(),n++)}return _.currentNode=w,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(ct(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const a=new St(i,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new O(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new M(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const a=this.strings;let n=!1;if(a===void 0)t=E(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const l=t;let o,h;for(t=a[0],o=0;o<a.length-1;o++)h=E(this,l[s+o],e,o),h===S&&(h=this._$AH[o]),n||=!T(h)||h!==this._$AH[o],h===p?t=p:t!==p&&(t+=(h??"")+a[o+1]),this._$AH[o]=h}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ct extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class qt extends z{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===S)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Pt=W.litHtmlPolyfillSupport;Pt?.(O,M),(W.litHtmlVersions??=[]).push("3.3.1");const Tt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const a=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(P(),a),a,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis;class k extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}k._$litElement$=!0,k.finalized=!0,F.litElementHydrateSupport?.({LitElement:k});const Ot=F.litElementPolyfillSupport;Ot?.({LitElement:k});(F.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:B},Ut=(r=Mt,t,e)=>{const{kind:s,metadata:i}=e;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(l){const o=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,o,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const o=this[n];t.call(this,l),this.requestUpdate(n,o,r)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(t,e)=>typeof e=="object"?Ut(r,t,e):((s,i,a)=>{const n=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(i,a):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(r){return f({...r,state:!0,attribute:!1})}var Rt=Object.defineProperty,d=(r,t,e,s)=>{for(var i=void 0,a=r.length-1,n;a>=0;a--)(n=r[a])&&(i=n(t,e,i)||i);return i&&Rt(t,e,i),i};const V=class V extends k{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueFilter=[],this.isLoading=!0,this.hasError=!1,this.errorMessage=""}connectedCallback(){super.connectedCallback(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getQueues(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.handleError(t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getQueues(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=[`/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,`/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,`/team/${this.teamId}/incoming-references`];this.queueFilter=[];const s={method:"GET",headers:t,redirect:"follow"},i=e.map(async a=>{try{const l=await(await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}${a}`,s)).json();l.data&&Array.isArray(l.data)&&l.data.forEach(o=>{this.queueFilter.push({lastQueue:{id:{equals:o.id}}})})}catch(n){console.error(`Error fetching queues from ${a}:`,n)}});await Promise.all(i),await this.getStats()}async getStats(){if(!this.queueFilter.length){this.queueData=[],this.isLoading=!1;return}const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json",Accept:"application/json"},e={query:`
        query queueStats($from: Long!, $to: Long!, $filter: TaskFilters) {
          task(from: $from, to: $to, filter: $filter) {
            tasks {
              lastQueue {
                name
              }
              aggregation {
                name
                value
              }
            }
          }
        }
      `,variables:{from:`${Date.now()-864e5}`,to:`${Date.now()}`,filter:{and:[{isActive:{equals:!0}},{status:{equals:"parked"}},{or:this.queueFilter}]},aggregation:[{field:"id",type:"count",name:"contacts"},{field:"createdTime",type:"min",name:"oldestStart"}]}},s={method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"};try{const a=await(await fetch("https://api.wxcc-us1.cisco.com/search",s)).json();a.data?.task?.tasks&&(this.queueData=a.data.task.tasks,this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(i){this.handleError(i)}}updateTemplate(){if(!this.queueData||!Array.isArray(this.queueData)){this.queueStats=[];return}this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(a=>a.name==="contacts")?.value||0,s=t.aggregation?.find(a=>a.name==="oldestStart")?.value||0,i=s?Math.floor((Date.now()-s)/1e3):0;return{name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:i,status:this.calculateStatus(e,i)}}),this.queueStats.sort((t,e)=>{const s={critical:3,warning:2,ok:1};return s[e.status]-s[t.status]})}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=t%60;return[e,s,i].map(a=>a.toString().padStart(2,"0")).join(":")}getStatusLabel(t){switch(t){case"critical":return"🔴 Critical";case"warning":return"⚠️ Warning";default:return"✓ Normal"}}handleError(t){console.error("Queue Statistics Error:",t),this.hasError=!0,this.isLoading=!1,this.errorMessage=t.message||"Failed to load queue statistics"}render(){return x`
      <div class="container">
        <div class="header">
          <div class="title">
            <div class="title-icon">📊</div>
            Queue Monitor
          </div>
          <div class="status-indicator">
            <div class="status-dot"></div>
            Live
          </div>
        </div>

        ${this.renderContent()}
      </div>
    `}renderContent(){return this.isLoading?x`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading queue statistics...</div>
        </div>
      `:this.hasError?x`
        <div class="error-container">
          <div class="error-icon">⚠️</div>
          <div class="error-text">${this.errorMessage}</div>
        </div>
      `:this.queueStats.length?x`
      <div class="queues-container">
        ${this.queueStats.map((t,e)=>x`
          <div 
            class="queue-card status-${t.status}"
            style="animation-delay: ${e*.05}s"
          >
            <div class="queue-header">
              <div class="queue-name">${t.name}</div>
              <div class="queue-badge ${t.status}">
                ${this.getStatusLabel(t.status)}
              </div>
            </div>
            
            <div class="queue-metrics">
              <div class="metric">
                <div class="metric-label">
                  <span class="metric-icon">👥</span>Contacts
                </div>
                <div class="metric-value ${t.contacts>=10?"large-number":""}">
                  ${t.contacts}
                </div>
              </div>
              
              <div class="metric">
                <div class="metric-label">
                  <span class="metric-icon">⏱️</span>Longest Wait
                </div>
                <div class="metric-value">
                  ${this.formatWaitTime(t.waitTimeSeconds)}
                </div>
              </div>
            </div>
          </div>
        `)}
      </div>
    `:x`
        <div class="empty-container">
          <div class="empty-icon">✓</div>
          <div class="empty-text">All queues clear</div>
        </div>
      `}};V.styles=dt`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');

    :host {
      display: block;
      width: 100%;
      font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
      --primary-bg: #0f1419;
      --card-bg: #1a1f2e;
      --card-hover: #232937;
      --text-primary: #e4e7eb;
      --text-secondary: #8b92a5;
      --text-muted: #5a6170;
      --accent-blue: #3b82f6;
      --status-ok: #10b981;
      --status-warning: #f59e0b;
      --status-critical: #ef4444;
      --border-color: #2d3548;
      --glow-ok: rgba(16, 185, 129, 0.2);
      --glow-warning: rgba(245, 158, 11, 0.2);
      --glow-critical: rgba(239, 68, 68, 0.2);
    }

    .container {
      background: var(--primary-bg);
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
                  0 2px 4px -1px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }

    /* Subtle animated background gradient */
    .container::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 50%
      );
      animation: rotate 20s linear infinite;
      pointer-events: none;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--text-primary);
    }

    .title-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-blue);
      border-radius: 6px;
      font-size: 12px;
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 500;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--status-ok);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .queues-container {
      display: grid;
      gap: 12px;
      position: relative;
      z-index: 1;
      max-height: 400px;
      overflow-y: auto;
      padding-right: 4px;
    }

    /* Custom scrollbar */
    .queues-container::-webkit-scrollbar {
      width: 6px;
    }

    .queues-container::-webkit-scrollbar-track {
      background: var(--card-bg);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb {
      background: var(--border-color);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }

    .queue-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 14px 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      animation: slideIn 0.4s ease-out backwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .queue-card:hover {
      background: var(--card-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.4);
    }

    /* Status glow effect based on threshold */
    .queue-card.status-ok {
      border-left: 3px solid var(--status-ok);
    }

    .queue-card.status-ok::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-ok) 0%, transparent 100%);
      pointer-events: none;
    }

    .queue-card.status-warning {
      border-left: 3px solid var(--status-warning);
      animation: warningPulse 2s ease-in-out infinite;
    }

    .queue-card.status-warning::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-warning) 0%, transparent 100%);
      pointer-events: none;
    }

    @keyframes warningPulse {
      0%, 100% { box-shadow: 0 0 0 0 var(--glow-warning); }
      50% { box-shadow: 0 0 20px 0 var(--glow-warning); }
    }

    .queue-card.status-critical {
      border-left: 3px solid var(--status-critical);
      animation: criticalPulse 1s ease-in-out infinite;
    }

    .queue-card.status-critical::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--glow-critical) 0%, transparent 100%);
      pointer-events: none;
    }

    @keyframes criticalPulse {
      0%, 100% {
        box-shadow: 0 0 0 0 var(--glow-critical);
        border-left-color: var(--status-critical);
      }
      50% {
        box-shadow: 0 0 30px 0 var(--glow-critical);
        border-left-color: #ff6b6b;
      }
    }

    .queue-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }

    .queue-name {
      font-size: 15px;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: -0.2px;
      line-height: 1.4;
    }

    .queue-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }

    .queue-badge.ok {
      background: rgba(16, 185, 129, 0.15);
      color: var(--status-ok);
    }

    .queue-badge.warning {
      background: rgba(245, 158, 11, 0.15);
      color: var(--status-warning);
    }

    .queue-badge.critical {
      background: rgba(239, 68, 68, 0.15);
      color: var(--status-critical);
    }

    .queue-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      position: relative;
      z-index: 1;
    }

    .metric {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .metric-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .metric-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 20px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1;
      letter-spacing: -0.5px;
    }

    .metric-value.large-number {
      font-size: 24px;
    }

    .metric-icon {
      margin-right: 4px;
      font-size: 14px;
    }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--border-color);
      border-top-color: var(--accent-blue);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 16px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-text,
    .error-text,
    .empty-text {
      font-size: 13px;
      color: var(--text-secondary);
      margin-top: 8px;
    }

    .error-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .empty-icon {
      font-size: 48px;
      opacity: 0.3;
      margin-bottom: 12px;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .queue-metrics {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;let u=V;d([f()],u.prototype,"token");d([f()],u.prototype,"orgId");d([f()],u.prototype,"teamId");d([f()],u.prototype,"agentId");d([f({type:Number})],u.prototype,"contactsWarning");d([f({type:Number})],u.prototype,"contactsCritical");d([f({type:Number})],u.prototype,"waitWarning");d([f({type:Number})],u.prototype,"waitCritical");d([f({type:Number})],u.prototype,"dataRefreshInterval");d([f({type:Number})],u.prototype,"uiRefreshInterval");d([f({type:Boolean})],u.prototype,"demoMode");d([y()],u.prototype,"queueStats");d([y()],u.prototype,"queueFilter");d([y()],u.prototype,"queueData");d([y()],u.prototype,"_dataRefreshTimer");d([y()],u.prototype,"_uiRefreshTimer");d([y()],u.prototype,"isLoading");d([y()],u.prototype,"hasError");d([y()],u.prototype,"errorMessage");customElements.define("queue-statistics-modern",u);await customElements.whenDefined("queue-statistics-modern");function rt(){const r={normal:document.getElementById("widget-normal"),warning:document.getElementById("widget-warning"),critical:document.getElementById("widget-critical")};r.normal&&(r.normal.queueData=[{lastQueue:{name:"Sales - North America"},aggregation:[{name:"oldestStart",value:Date.now()-45e3},{name:"contacts",value:2}]},{lastQueue:{name:"Customer Support"},aggregation:[{name:"oldestStart",value:Date.now()-3e4},{name:"contacts",value:3}]}],r.normal.isLoading=!1,r.normal.requestUpdate()),r.warning&&(r.warning.queueData=[{lastQueue:{name:"Technical Support"},aggregation:[{name:"oldestStart",value:Date.now()-15e4},{name:"contacts",value:6}]},{lastQueue:{name:"Billing Inquiries"},aggregation:[{name:"oldestStart",value:Date.now()-18e4},{name:"contacts",value:7}]},{lastQueue:{name:"Sales - EMEA"},aggregation:[{name:"oldestStart",value:Date.now()-9e4},{name:"contacts",value:4}]}],r.warning.isLoading=!1,r.warning.requestUpdate()),r.critical&&(r.critical.queueData=[{lastQueue:{name:"Priority Support"},aggregation:[{name:"oldestStart",value:Date.now()-42e4},{name:"contacts",value:12}]},{lastQueue:{name:"VIP Customer Line"},aggregation:[{name:"oldestStart",value:Date.now()-36e4},{name:"contacts",value:15}]}],r.critical.isLoading=!1,r.critical.requestUpdate()),Object.values(r).forEach(t=>{t&&typeof t.updateTemplate=="function"&&t.updateTemplate()})}setTimeout(()=>{rt(),setInterval(rt,1e3)},500);["contactsWarning","contactsCritical","waitWarning","waitCritical"].forEach(r=>{const t=document.getElementById(r);t&&t.addEventListener("change",e=>{const s=parseInt(e.target.value);document.querySelectorAll("queue-statistics-modern").forEach(i=>{i[r]=s,i.requestUpdate()})})});
