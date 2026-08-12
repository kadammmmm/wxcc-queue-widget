!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},$=(t,e)=>!o(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);r?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const a=r.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,m?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const w=globalThis,A=w.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,C=`<${k}>`,q=document,P=()=>q.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,D=(F=1,(t,...e)=>({_$litType$:F,strings:t,values:e})),j=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,Q=q.createTreeWalker(q,129);var F;function V(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const n=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,a=2===e?"<svg>":3===e?"<math>":"",n=U;for(let o=0;o<i;o++){const e=t[o];let i,l,c=-1,d=0;for(;d<e.length&&(n.lastIndex=d,l=n.exec(e),null!==l);)d=n.lastIndex,n===U?"!--"===l[1]?n=O:void 0!==l[1]?n=N:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=r??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,i=l[1],n=void 0===l[3]?I:'"'===l[3]?H:z):n===H||n===z?n=I:n===O||n===N?n=U:(n=I,r=void 0);const h=n===I&&t[o+1].startsWith("/>")?" ":"";a+=n===U?e+C:c>=0?(s.push(i),e.slice(0,c)+S+e.slice(c)+E+h):e+E+(-2===c?o:h)}return[V(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=J.createElement(l,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Q.nextNode())&&o.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[a++],i=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?et:G}),s.removeAttribute(t)}else t.startsWith(E)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),Q.nextNode(),o.push({type:2,index:++r});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===k)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)o.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=q.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===j)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const a=T(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??q).importNode(e,!0);Q.currentNode=s;let r=Q.nextNode(),a=0,n=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new Z(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new it(r,this,t)),this._$AV.push(e),o=i[++n]}a!==o?.index&&(r=Q.nextNode(),a++)}return Q.currentNode=q,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new J(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(void 0===r)t=K(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==j,a&&(this._$AH=t);else{const s=t;let n,o;for(t=r[0],n=0;n<r.length-1;n++)o=K(this,s[i+n],e,n),o===j&&(o=this._$AH[n]),a||=!T(o)||o!==this._$AH[n],o===W?t=W:t!==W&&(t+=(o??"")+r[n+1]),this._$AH[n]=o}a&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends G{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===j)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(J,Z),(w.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Z(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},lt=(t=ot,e,i)=>{const{kind:s,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ct(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function dt(t){return ct({...t,state:!0,attribute:!1})}var ht=Object.defineProperty,ut=(t,e,i,s)=>{for(var r,a=void 0,n=t.length-1;n>=0;n--)(r=t[n])&&(a=r(e,i,a)||a);return a&&ht(e,i,a),a};const pt=class extends at{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueFilter=[],this.agentRoster=new Map,this.isLoading=!0,this.hasError=!1,this.errorMessage=""}connectedCallback(){super.connectedCallback(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async initialize(){try{if(this.isLoading=!0,this.hasError=!1,!this.demoMode){if(!this.token||!this.orgId)return this.hasError=!0,this.isLoading=!1,void(this.errorMessage="Missing token/orgId - check the widget attributes in the Desktop Layout configuration.");await this.getQueues(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)}this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.handleError(t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getQueues(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=[`/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,`/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,`/team/${this.teamId}/incoming-references`];this.queueFilter=[];let i=!1;const s={method:"GET",headers:t,redirect:"follow"},r=e.map(async t=>{try{const e=await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}${t}`,s);if(401===e.status||403===e.status)return void(i=!0);const r=await e.json();r.data&&Array.isArray(r.data)&&r.data.forEach(t=>{this.queueFilter.push({lastQueue:{id:{equals:t.id}}})})}catch(e){console.error(`Error fetching queues from ${t}:`,e)}});if(await Promise.all(r),i&&!this.queueFilter.length)return this.hasError=!0,this.isLoading=!1,void(this.errorMessage="Not authorized to load queues (401/403) - the agent token may be missing, expired, or lack the required scope.");await this.getStats()}async getStats(){if(!this.queueFilter.length)return this.queueData=[],void(this.isLoading=!1);const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json",Accept:"application/json"},e={query:"\n        query queueStats($from: Long!, $to: Long!, $filter: TaskFilters) {\n          task(from: $from, to: $to, filter: $filter) {\n            tasks {\n              lastQueue {\n                id\n                name\n              }\n              aggregation {\n                name\n                value\n              }\n            }\n          }\n        }\n      ",variables:{from:""+(Date.now()-864e5),to:`${Date.now()}`,filter:{and:[{isActive:{equals:!0}},{status:{equals:"parked"}},{or:this.queueFilter}]},aggregation:[{field:"id",type:"count",name:"contacts"},{field:"createdTime",type:"min",name:"oldestStart"}]}},i={method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"};try{const t=await fetch("https://api.wxcc-us1.cisco.com/search",i),e=await t.json();if(!t.ok||e.errors||e.error)throw new Error(`Search API request failed (${t.status}): ${JSON.stringify(e.errors||e.error||e)}`);e.data?.task?.tasks?(this.queueData=e.data.task.tasks,this.updateTemplate(),this.isLoading=!1,this.hasError=!1,this.getAgentRoster()):(this.queueData=[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(s){this.handleError(s)}}async getAgentRoster(){if(this.demoMode||!this.queueStats.length)return;const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json",Accept:"application/json"},e=await Promise.all(this.queueStats.map(async e=>{if(!e.id)return{queueId:e.id,roster:null};try{const i=await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}/v1/agents/buddy-agents-list`,{method:"POST",headers:t,body:JSON.stringify({queueId:e.id}),redirect:"follow",signal:AbortSignal.timeout(5e3)});if(202===i.status)return console.info(`Agent roster for "${e.name}" is delivered asynchronously; live status unavailable.`),{queueId:e.id,roster:null};if(!i.ok)return{queueId:e.id,roster:null};const s=await i.json(),r=this.parseAgentRoster(s);return{queueId:e.id,roster:r}}catch(i){return console.error(`Error fetching agent roster for queue ${e.id}:`,i),{queueId:e.id,roster:null}}})),i=new Map(this.agentRoster);for(const{queueId:s,roster:r}of e)i.set(s,r);this.agentRoster=i}parseAgentRoster(t){const e=t?.data??t?.agents??t?.agentList??(Array.isArray(t)?t:null);return Array.isArray(e)?e.map(t=>{const e=t.state??t.agentState??t.status??"";return{id:t.id??t.agentId??"",name:t.name??t.agentName??t.displayName??"Unknown Agent",state:this.normalizeAgentState(e),stateDurationSeconds:t.stateDuration??t.stateDurationSeconds??void 0}}):null}normalizeAgentState(t){const e=(t||"").toLowerCase();return e.includes("available")?"available":e.includes("wrap")?"wrapup":e.includes("call")||e.includes("engaged")||e.includes("connect")||e.includes("talk")?"oncall":"unknown"}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(t=>"contacts"===t.name)?.value||0,i=t.aggregation?.find(t=>"oldestStart"===t.name)?.value||0,s=i?Math.floor((Date.now()-i)/1e3):0;return{id:t.lastQueue?.id||"",name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:s,status:this.calculateStatus(e,s)}}),this.queueStats.sort((t,e)=>{const i={critical:3,warning:2,ok:1};return(i[e.status]||0)-(i[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}getStatusText(t){switch(t){case"critical":return"Critical";case"warning":return"Warning";default:return"OK"}}getStatusPillLabel(t){switch(t){case"available":return"Ready";case"oncall":return"In Call";case"wrapup":return"Wrap Up";default:return"Unknown"}}handleManageQueue(t){this.dispatchEvent(new CustomEvent("manage-queue",{detail:{queueId:t.id,queueName:t.name},bubbles:!0,composed:!0}))}handleError(t){console.error("Queue Statistics Error:",t),this.hasError=!0,this.isLoading=!1,this.errorMessage=t.message||"Failed to load queue statistics"}render(){return D`${this.renderContent()}`}renderContent(){return this.isLoading?D`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading queue statistics...</div>
        </div>
      `:this.hasError?D`
        <div class="error-container">
          <div class="error-icon">⚠️</div>
          <div class="error-text">${this.errorMessage}</div>
        </div>
      `:this.queueStats.length?D`
      <div class="queues-container">
        ${this.queueStats.map((t,e)=>this.renderQueueCard(t,e))}
      </div>
    `:D`
        <div class="empty-container">
          <div class="empty-icon">✓</div>
          <div class="empty-text">All queues clear</div>
        </div>
      `}renderQueueCard(t,e){const i=this.agentRoster.get(t.id),s=i?i.filter(t=>"available"===t.state).length:null,r=i?i.filter(t=>"oncall"===t.state).length:null;return D`
      <div class="queue-card" style="animation-delay: ${.05*e}s">
        <div class="card-header">
          <div class="queue-title">
            <span class="live-dot"></span>
            Queue: ${t.name}
          </div>
          <span class="live-badge">Live</span>
        </div>

        <div class="card-body">
          <div class="waiting-now-box">
            <div class="stat-label">Waiting Now</div>
            <div class="waiting-now-value">${t.contacts}</div>
          </div>

          <div class="tile-grid">
            <div class="tile tile-pink">
              <div class="stat-label">Longest Wait</div>
              <div class="tile-value">${this.formatWaitTime(t.waitTimeSeconds)}</div>
            </div>
            <div class="tile status-${t.status}">
              <div class="stat-label">Status</div>
              <div class="tile-value">${this.getStatusText(t.status)}</div>
            </div>
            <div class="tile tile-available">
              <div class="stat-label">Available</div>
              <div class="tile-value">${null===s?"—":s}</div>
            </div>
            <div class="tile tile-active">
              <div class="stat-label">Active Calls</div>
              <div class="tile-value">${null===r?"—":r}</div>
            </div>
          </div>

          <div class="roster-section">
            ${this.renderRoster(i)}
          </div>

          <button class="manage-btn" @click=${()=>this.handleManageQueue(t)}>
            Manage Queue
          </button>
        </div>
      </div>
    `}renderRoster(t){return null===t?D`<div class="roster-unavailable">Agent status unavailable</div>`:t&&0!==t.length?t.map(t=>D`
      <div class="agent-row">
        <span class="agent-name">${t.name}</span>
        <span class="status-pill ${t.state}">
          ${this.getStatusPillLabel(t.state)}${"oncall"===t.state&&null!=t.stateDurationSeconds?` (${this.formatWaitTime(t.stateDurationSeconds)})`:""}
        </span>
      </div>
    `):D`<div class="roster-empty">No agents currently assigned</div>`}};pt.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)})`
    :host {
      display: block;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

      /* Palette - literal color values only */
      --neutral-black: #000000;
      --neutral-grey: #e8e8e8;
      --neutral-grey-light: #f7f7f7;
      --neutral-white: #ffffff;
      --neutral-text-muted: #6b7280;

      --blue-600: #4f6fda;
      --blue-400: #b8c8ff;
      --blue-200: #f2f5ff;

      --lblue-600: #42b1ff;
      --lblue-400: #aedbfb;
      --lblue-200: #f6fbff;

      --pink-600: #ffa5fb;
      --orange-600: #ff8a30;
      --red-600: #ff5c5f;
      --yellow-600: #ffbc2a;
      --turquoise-600: #00dadf;
    }

    .queues-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-height: 100%;
      overflow-y: auto;
      padding: 2px;
    }

    .queues-container::-webkit-scrollbar {
      width: 6px;
    }

    .queues-container::-webkit-scrollbar-track {
      background: var(--neutral-grey-light);
      border-radius: 3px;
    }

    .queues-container::-webkit-scrollbar-thumb {
      background: var(--neutral-grey);
      border-radius: 3px;
    }

    .queue-card {
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      animation: slideIn 0.3s ease-out backwards;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .card-header {
      background: var(--neutral-black);
      color: var(--neutral-white);
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .queue-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .live-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--turquoise-600);
      animation: pulse 2s ease-in-out infinite;
      flex-shrink: 0;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .live-badge {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--turquoise-600);
    }

    .card-body {
      padding: 18px 20px 20px;
    }

    .waiting-now-box {
      border: 2px solid var(--neutral-black);
      border-radius: 12px;
      padding: 12px 16px;
      margin-bottom: 14px;
    }

    .stat-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--neutral-black);
      opacity: 0.7;
    }

    .waiting-now-value {
      font-size: 40px;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -1px;
      color: var(--neutral-black);
    }

    .tile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 18px;
    }

    .tile {
      border-radius: 12px;
      padding: 12px 16px;
      color: var(--neutral-black);
    }

    .tile-value {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    .tile.tile-pink { background: color-mix(in srgb, var(--pink-600), white 25%); }
    .tile.tile-available { background: color-mix(in srgb, var(--lblue-600), white 25%); }
    .tile.tile-active { background: color-mix(in srgb, var(--blue-600), white 20%); color: var(--neutral-white); }
    .tile.tile-active .stat-label { color: var(--neutral-white); opacity: 0.85; }

    .tile.status-ok { background: color-mix(in srgb, var(--turquoise-600), white 25%); }
    .tile.status-warning { background: color-mix(in srgb, var(--yellow-600), white 15%); }
    .tile.status-critical { background: color-mix(in srgb, var(--red-600), white 15%); }

    .roster-section {
      border-top: 1px solid var(--neutral-grey);
      padding-top: 8px;
      margin-bottom: 16px;
    }

    .agent-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 2px;
      border-bottom: 1px solid var(--neutral-grey);
      font-size: 13px;
    }

    .agent-row:last-child {
      border-bottom: none;
    }

    .agent-name {
      font-weight: 600;
      color: var(--neutral-black);
    }

    .status-pill {
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .status-pill.available {
      background: var(--yellow-600);
      color: var(--neutral-black);
    }

    .status-pill.oncall {
      background: var(--pink-600);
      color: var(--neutral-black);
    }

    .status-pill.wrapup {
      background: var(--neutral-white);
      border: 1.5px solid var(--neutral-black);
      color: var(--neutral-black);
    }

    .status-pill.unknown {
      background: var(--neutral-grey-light);
      color: var(--neutral-text-muted);
      border: 1px solid var(--neutral-grey);
    }

    .roster-empty,
    .roster-unavailable {
      padding: 10px 2px;
      font-size: 12px;
      color: var(--neutral-text-muted);
      font-style: italic;
      text-align: center;
    }

    .manage-btn {
      width: 100%;
      padding: 14px;
      background: var(--neutral-black);
      color: var(--neutral-white);
      border: none;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .manage-btn:hover {
      background: #262626;
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
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
    }

    .loading-spinner {
      width: 36px;
      height: 36px;
      border: 3px solid var(--neutral-grey);
      border-top-color: var(--blue-600);
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
      color: var(--neutral-text-muted);
      margin-top: 8px;
    }

    .error-icon,
    .empty-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .tile-grid {
        grid-template-columns: 1fr;
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
  `;let gt=pt;ut([ct()],gt.prototype,"token"),ut([ct()],gt.prototype,"orgId"),ut([ct()],gt.prototype,"teamId"),ut([ct()],gt.prototype,"agentId"),ut([ct({type:Number})],gt.prototype,"contactsWarning"),ut([ct({type:Number})],gt.prototype,"contactsCritical"),ut([ct({type:Number})],gt.prototype,"waitWarning"),ut([ct({type:Number})],gt.prototype,"waitCritical"),ut([ct({type:Number})],gt.prototype,"dataRefreshInterval"),ut([ct({type:Number})],gt.prototype,"uiRefreshInterval"),ut([ct({type:Boolean})],gt.prototype,"demoMode"),ut([dt()],gt.prototype,"queueStats"),ut([dt()],gt.prototype,"queueFilter"),ut([dt()],gt.prototype,"queueData"),ut([dt()],gt.prototype,"agentRoster"),ut([dt()],gt.prototype,"_dataRefreshTimer"),ut([dt()],gt.prototype,"_uiRefreshTimer"),ut([dt()],gt.prototype,"isLoading"),ut([dt()],gt.prototype,"hasError"),ut([dt()],gt.prototype,"errorMessage"),customElements.define("queue-statistics-modern",gt),t.QueueStatisticsModern=gt,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsModern=this.QueueStatisticsModern||{});
