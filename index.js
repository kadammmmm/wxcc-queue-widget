!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},$=(t,e)=>!o(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??$)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,m?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const x=globalThis,w=x.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,P=`<${k}>`,C=document,T=()=>C.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,N=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,D=(V=1,(t,...e)=>({_$litType$:V,strings:t,values:e})),j=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,Q=C.createTreeWalker(C,129);var V;function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",a=q;for(let o=0;o<s;o++){const e=t[o];let s,l,c=-1,h=0;for(;h<e.length&&(a.lastIndex=h,l=a.exec(e),null!==l);)h=a.lastIndex,a===q?"!--"===l[1]?a=U:void 0!==l[1]?a=N:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=r??q,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?H:'"'===l[3]?I:z):a===I||a===z?a=H:a===U||a===N?a=q:(a=H,r=void 0);const d=a===H&&t[o+1].startsWith("/>")?" ":"";n+=a===q?e+P:c>=0?(i.push(s),e.slice(0,c)+S+e.slice(c)+E+d):e+E+(-2===c?o:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=F.createElement(l,s),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[n++],s=i.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:a[2],strings:s,ctor:"."===a[1]?G:"?"===a[1]?tt:"@"===a[1]?et:X}),i.removeAttribute(t)}else t.startsWith(E)&&(o.push({type:6,index:r}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),Q.nextNode(),o.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===k)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)o.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===j)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);Q.currentNode=i;let r=Q.nextNode(),n=0,a=0,o=s[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Z(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new st(r,this,t)),this._$AV.push(e),o=s[++a]}n!==o?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=C,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new F(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Z(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=K(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const i=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=K(this,i[s+a],e,a),o===j&&(o=this._$AH[a]),n||=!O(o)||o!==this._$AH[a],o===W?t=W:t!==W&&(t+=(o??"")+r[a+1]),this._$AH[a]=o}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class G extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===j)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(F,Z),(x.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class nt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Z(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},lt=(t=ot,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function ht(t){return ct({...t,state:!0,attribute:!1})}var dt=Object.defineProperty,pt=(t,e,s,i)=>{for(var r,n=void 0,a=t.length-1;a>=0;a--)(r=t[a])&&(n=r(e,s,n)||n);return n&&dt(e,s,n),n};const ut=class extends nt{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.isPanelOpen=!1,this.panelPosition={top:0,left:0},this.isLoading=!0,this.hasError=!1,this.errorMessage="",this.handleOutsideClick=t=>{this.isPanelOpen&&!t.composedPath().includes(this)&&(this.isPanelOpen=!1)}}connectedCallback(){super.connectedCallback(),this.initialize(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),document.removeEventListener("click",this.handleOutsideClick)}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.fetchQueueStatistics(),this._dataRefreshTimer=setInterval(()=>this.fetchQueueStatistics(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.handleError(t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async fetchQueueStatistics(){if(!this.token||!this.orgId)return this.hasError=!0,this.isLoading=!1,void(this.errorMessage="Missing token/orgId - check the widget attributes in the Desktop Layout configuration.");const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json",Accept:"application/json"},e=Date.now(),s={query:`{\n        task(\n          from: ${e-864e5}\n          to: ${e}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n          aggregations: [\n            { field: "id", type: count, name: "contacts" }\n            { field: "createdTime", type: min, name: "oldestStart" }\n          ]\n        ) {\n          tasks {\n            lastQueue { id name }\n            aggregation { name value }\n          }\n        }\n      }`};try{const e=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(s),redirect:"follow"}),i=await e.json().catch(()=>null);if(!e.ok||i?.errors||i?.error)throw new Error(`Task search request failed (${e.status}): ${JSON.stringify(i?.errors||i?.error||i)}`);this.queueData=i?.data?.task?.tasks??[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1}catch(i){this.handleError(i)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(t=>"contacts"===t.name)?.value||0,s=t.aggregation?.find(t=>"oldestStart"===t.name)?.value||0,i=s?Math.floor((Date.now()-s)/1e3):0;return{id:t.lastQueue?.id||"",name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:i,status:this.calculateStatus(e,i)}}),this.queueStats.sort((t,e)=>{const s={critical:3,warning:2,ok:1};return(s[e.status]||0)-(s[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}getStatusText(t){switch(t){case"critical":return"Critical";case"warning":return"Warning";default:return"OK"}}togglePanel(t){if(this.isPanelOpen)return void(this.isPanelOpen=!1);const e=t.currentTarget.getBoundingClientRect();this.panelPosition={top:e.bottom+6,left:Math.max(8,Math.min(e.left,window.innerWidth-380))},this.isPanelOpen=!0}closePanel(){this.isPanelOpen=!1}handleError(t){console.error("Queue Statistics Error:",t),this.hasError=!0,this.isLoading=!1,this.errorMessage=t.message||"Failed to load queue statistics"}render(){return D`
      ${this.renderCompactBar()}
      ${this.isPanelOpen?D`
        <div class="overlay-backdrop" @click=${()=>this.closePanel()}></div>
        <div
          class="overlay-panel"
          style="top: ${this.panelPosition.top}px; left: ${this.panelPosition.left}px;"
          @click=${t=>t.stopPropagation()}
        >
          <div class="panel-header">
            <span class="panel-title">Queue Statistics</span>
            <button class="close-btn" @click=${()=>this.closePanel()}>✕</button>
          </div>
          <div class="panel-content">
            ${this.renderContent()}
          </div>
        </div>
      `:""}
    `}renderCompactBar(){const t=this.queueStats.reduce((t,e)=>t+e.contacts,0),e=this.queueStats.filter(t=>t.contacts>0),s={critical:3,warning:2,ok:1},i=this.queueStats.reduce((t,e)=>s[e.status]>s[t]?e.status:t,"ok");let r;return r=this.isLoading?"Loading…":this.hasError?"Queue data unavailable":0===t?"No calls in queue":1===e.length?`${e[0].name}: ${e[0].contacts} waiting`:`${t} waiting across ${e.length} queues`,D`
      <button class="compact-bar" @click=${t=>this.togglePanel(t)}>
        <span class="compact-status-dot status-${this.hasError?"critical":i}"></span>
        <span class="compact-text">${r}</span>
      </button>
    `}renderContent(){return this.isLoading?D`
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
      `}renderQueueCard(t,e){const s=0===t.contacts,i=!s;return D`
      <div class="queue-card" style="animation-delay: ${.05*e}s">
        <div class="card-header">
          <div class="queue-title">
            <span class="live-dot"></span>
            Queue: ${t.name}
          </div>
          <span class="live-badge">Live</span>
        </div>

        <div class="card-summary">
          <span class="summary-status-dot status-${t.status}"></span>
          <span class="summary-text ${s?"is-empty":""}">
            ${s?"No calls waiting":`${t.contacts} waiting · longest ${this.formatWaitTime(t.waitTimeSeconds)}`}
          </span>
        </div>

        ${i?D`
          <div class="card-body">
            <div class="tile-grid">
              <div class="tile tile-pink">
                <div class="stat-label">Longest Wait</div>
                <div class="tile-value">${this.formatWaitTime(t.waitTimeSeconds)}</div>
              </div>
              <div class="tile status-${t.status}">
                <div class="stat-label">Status</div>
                <div class="tile-value">${this.getStatusText(t.status)}</div>
              </div>
            </div>
          </div>
        `:""}
      </div>
    `}};ut.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
    :host, :host *, :host *::before, :host *::after {
      box-sizing: border-box;
    }

    :host {
      /* Sized to the compact indicator's content, not stretched - this
         sits inline alongside several other icon-sized widgets in the
         Desktop header. The overlay panel below uses fixed positioning,
         so it isn't constrained by the host's size. */
      display: inline-block;
      max-width: 100%;
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

    /* === COMPACT HEADER INDICATOR === */
    .compact-bar {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      max-width: 220px;
      height: 28px;
      padding: 0 12px;
      background: var(--neutral-black);
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .compact-bar:hover {
      background: #262626;
    }

    .compact-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      animation: pulse 2s ease-in-out infinite;
    }

    .compact-status-dot.status-ok { background: var(--turquoise-600); }
    .compact-status-dot.status-warning { background: var(--yellow-600); }
    .compact-status-dot.status-critical { background: var(--red-600); }

    .compact-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--neutral-white);
      font-size: 12px;
      font-weight: 600;
    }

    /* === EXPANDED OVERLAY PANEL === */
    .overlay-backdrop {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: transparent;
    }

    .overlay-panel {
      position: fixed;
      width: 360px;
      max-width: calc(100vw - 16px);
      max-height: 70vh;
      display: flex;
      flex-direction: column;
      background: var(--neutral-white);
      border: 2px solid var(--neutral-black);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      overflow: hidden;
      animation: slideIn 0.15s ease-out;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--neutral-black);
      flex-shrink: 0;
    }

    .panel-title {
      color: var(--neutral-white);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .close-btn {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.12);
      border: none;
      border-radius: 6px;
      color: var(--neutral-white);
      font-size: 13px;
      cursor: pointer;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.22);
    }

    .panel-content {
      padding: 12px;
      overflow-y: auto;
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
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .queue-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      flex-shrink: 0;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--turquoise-600);
    }

    .card-summary {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
    }

    .summary-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .summary-status-dot.status-ok { background: var(--turquoise-600); }
    .summary-status-dot.status-warning { background: var(--yellow-600); }
    .summary-status-dot.status-critical { background: var(--red-600); }

    .summary-text {
      font-size: 13px;
      font-weight: 600;
      color: var(--neutral-black);
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .summary-text.is-empty {
      color: var(--neutral-text-muted);
      font-weight: 500;
    }

    .card-body {
      padding: 4px 16px 16px;
      border-top: 1px solid var(--neutral-grey);
    }

    .stat-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--neutral-black);
      opacity: 0.7;
    }

    .tile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 14px;
      margin-bottom: 16px;
    }

    .tile {
      min-width: 0;
      border-radius: 12px;
      padding: 12px 16px;
      color: var(--neutral-black);
    }

    .tile-value {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tile.tile-pink { background: color-mix(in srgb, var(--pink-600), white 25%); }

    .tile.status-ok { background: color-mix(in srgb, var(--turquoise-600), white 25%); }
    .tile.status-warning { background: color-mix(in srgb, var(--yellow-600), white 15%); }
    .tile.status-critical { background: color-mix(in srgb, var(--red-600), white 15%); }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 20px;
      text-align: center;
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
  `;let ft=ut;pt([ct()],ft.prototype,"token"),pt([ct()],ft.prototype,"orgId"),pt([ct()],ft.prototype,"teamId"),pt([ct()],ft.prototype,"agentId"),pt([ct({type:Number})],ft.prototype,"contactsWarning"),pt([ct({type:Number})],ft.prototype,"contactsCritical"),pt([ct({type:Number})],ft.prototype,"waitWarning"),pt([ct({type:Number})],ft.prototype,"waitCritical"),pt([ct({type:Number})],ft.prototype,"dataRefreshInterval"),pt([ct({type:Number})],ft.prototype,"uiRefreshInterval"),pt([ct({type:Boolean})],ft.prototype,"demoMode"),pt([ht()],ft.prototype,"queueStats"),pt([ht()],ft.prototype,"queueData"),pt([ht()],ft.prototype,"isPanelOpen"),pt([ht()],ft.prototype,"panelPosition"),pt([ht()],ft.prototype,"_dataRefreshTimer"),pt([ht()],ft.prototype,"_uiRefreshTimer"),pt([ht()],ft.prototype,"isLoading"),pt([ht()],ft.prototype,"hasError"),pt([ht()],ft.prototype,"errorMessage"),customElements.define("queue-statistics-modern",ft),t.QueueStatisticsModern=ft,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsModern=this.QueueStatisticsModern||{});
