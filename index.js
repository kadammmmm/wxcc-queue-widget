!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},y=(t,e)=>!o(t,e),v={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);n?.call(this,e),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const a=n.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,m?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const _=globalThis,w=_.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+k,C=`<${E}>`,T=document,P=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,N=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,j=(V=1,(t,...e)=>({_$litType$:V,strings:t,values:e})),I=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),W=new WeakMap,B=T.createTreeWalker(T,129);var V;function F(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[c,l]=((t,e)=>{const s=t.length-1,i=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=R;for(let o=0;o<s;o++){const e=t[o];let s,c,l=-1,d=0;for(;d<e.length&&(r.lastIndex=d,c=r.exec(e),null!==c);)d=r.lastIndex,r===R?"!--"===c[1]?r=q:void 0!==c[1]?r=N:void 0!==c[2]?(H.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=z):void 0!==c[3]&&(r=z):r===z?">"===c[0]?(r=n??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,s=c[1],r=void 0===c[3]?z:'"'===c[3]?L:D):r===L||r===D?r=z:r===q||r===N?r=R:(r=z,n=void 0);const h=r===z&&t[o+1].startsWith("/>")?" ":"";a+=r===R?e+C:l>=0?(i.push(s),e.slice(0,l)+S+e.slice(l)+k+h):e+k+(-2===l?o:h)}return[F(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=J.createElement(c,s),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=l[a++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Z}),i.removeAttribute(t)}else t.startsWith(k)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(H.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),B.nextNode(),o.push({type:2,index:++n});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===E)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)o.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===I)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const a=U(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);B.currentNode=i;let n=B.nextNode(),a=0,r=0,o=s[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new K(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new st(n,this,t)),this._$AV.push(e),o=s[++r]}a!==o?.index&&(n=B.nextNode(),a++)}return B.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new K(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Q}_$AI(t,e=this,s,i){const n=this.strings;let a=!1;if(void 0===n)t=Y(this,t,e,0),a=!U(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{const i=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=Y(this,i[s+r],e,r),o===I&&(o=this._$AH[r]),a||=!U(o)||o!==this._$AH[r],o===Q?t=Q:t!==Q&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!i&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class et extends Z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??Q)===I)return;const s=this._$AH,i=t===Q&&s!==Q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==Q&&(s===Q||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=_.litHtmlPolyfillSupport;it?.(J,K),(_.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new K(e.insertBefore(P(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const rt=nt.litElementPolyfillSupport;rt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},ct=(t=ot,e,s)=>{const{kind:i,metadata:n}=s;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function lt(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function dt(t){return lt({...t,state:!0,attribute:!1})}var ht=Object.defineProperty,pt=(t,e,s,i)=>{for(var n,a=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(a=n(e,s,a)||a);return a&&ht(e,s,a),a};const ut=class extends at{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueDetails=new Map,this.isLoading=!0,this.hasError=!1,this.expandedQueue=null,this.lastUpdated=new Date,this.panelPosition={top:0,left:0},this.handleOutsideClick=t=>{this.expandedQueue&&!this.shadowRoot?.contains(t.target)&&(this.expandedQueue=null)}}connectedCallback(){super.connectedCallback(),this.demoMode||this.initialize(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),document.removeEventListener("click",this.handleOutsideClick)}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getStats(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.hasError=!0,console.error("Queue widget error:",t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getStats(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=Date.now(),s={query:`{\n        task(\n          from: ${e-864e5}\n          to: ${e}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n          aggregations: [\n            { field: "id", type: count, name: "contacts" }\n            { field: "createdTime", type: min, name: "oldestStart" }\n          ]\n        ) {\n          tasks {\n            lastQueue { id name }\n            aggregation { name value }\n          }\n        }\n      }`};try{const e=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(s),redirect:"follow"}),i=await e.json();if(i.error||i.errors)return console.error("GraphQL error:",i.error||i.errors),this.hasError=!0,void(this.isLoading=!1);i.data?.task?.tasks?(this.queueData=i.data.task.tasks,this.lastUpdated=new Date,this.updateTemplate(),this.isLoading=!1,this.hasError=!1,await this.getContactDetails()):(this.queueData=[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(i){this.hasError=!0,console.error("Error fetching stats:",i)}}async getContactDetails(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=Date.now(),s={query:`{\n        task(\n          from: ${e-864e5}\n          to: ${e}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n        ) {\n          tasks {\n            id\n            createdTime\n            channelType\n            origin\n            lastQueue { id name }\n          }\n        }\n      }`};try{const e=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(s),redirect:"follow"}),i=await e.json();if(i.data?.task?.tasks){const t=new Map;for(const e of i.data.task.tasks){const s=e.lastQueue?.name||"Unknown";t.has(s)||t.set(s,[]),t.get(s).push({id:e.id,createdTime:e.createdTime,channelType:e.channelType||"telephony",origin:e.origin||"Unknown"})}for(const[,e]of t)e.sort((t,e)=>t.createdTime-e.createdTime);this.queueDetails=t}}catch(i){console.error("Error fetching contact details:",i)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(t=>"contacts"===t.name)?.value||0,s=t.aggregation?.find(t=>"oldestStart"===t.name)?.value||0,i=s?Math.floor((Date.now()-s)/1e3):0;return{id:t.lastQueue?.id||"",name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:i,oldestStart:s,status:this.calculateStatus(e,i)}}),this.queueStats.sort((t,e)=>{const s={critical:3,warning:2,ok:1};return(s[e.status]||0)-(s[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}formatLongWaitTime(t){if(t>=3600){return`${Math.floor(t/3600)}h ${Math.floor(t%3600/60)}m`}return`${Math.floor(t/60)}m ${t%60}s`}getWaitTimeStatus(t){return t>=this.waitCritical?"critical":t>=this.waitWarning?"warning":""}toggleQueue(t,e){if(e.stopPropagation(),this.expandedQueue===t)this.expandedQueue=null;else{const s=e.currentTarget.getBoundingClientRect();this.panelPosition={top:s.bottom+8,left:Math.max(8,Math.min(s.left,window.innerWidth-340))},this.expandedQueue=t}}closePanel(){this.expandedQueue=null}async refreshData(){await this.getStats()}getChannelIcon(t){switch(t?.toLowerCase()){case"telephony":default:return"📞";case"chat":return"💬";case"email":return"📧";case"social":return"📱"}}formatOrigin(t){return t&&"Unknown"!==t?t.match(/^\+?\d{10,}/)?t.slice(0,3)+"***"+t.slice(-3):t:"Unknown Caller"}render(){if(this.hasError)return j`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`;if(this.isLoading)return j`<div class="container"><div class="loading">Loading queue data...</div></div>`;if(0===this.queueStats.length)return j`<div class="container"><div class="empty">All queues clear ✔</div></div>`;const t=this.expandedQueue&&this.queueDetails.get(this.expandedQueue)||[],e=this.expandedQueue?this.queueStats.find(t=>t.name===this.expandedQueue):null;return j`
      <div class="container">
        ${this.queueStats.map(t=>j`
          <div 
            class="queue-item ${t.status} ${this.expandedQueue===t.name?"expanded":""}"
            @click=${e=>this.toggleQueue(t.name,e)}
          >
            <div class="status-indicator ${t.status}"></div>
            <span class="queue-name">${t.name}</span>
            <div class="queue-metrics">
              <span class="metric">👥 ${t.contacts}</span>
              <span class="metric">⏱️ ${this.formatWaitTime(t.waitTimeSeconds)}</span>
            </div>
            <span class="expand-icon">▼</span>
          </div>
        `)}
      </div>

      ${this.expandedQueue&&e?j`
        <div class="overlay-backdrop" @click=${()=>this.closePanel()}></div>
        <div 
          class="overlay-panel" 
          style="top: ${this.panelPosition.top}px; left: ${this.panelPosition.left}px;"
          @click=${t=>t.stopPropagation()}
        >
          <div class="panel-header">
            <div class="panel-title">
              <span class="panel-title-text">${e.name}</span>
              <span class="panel-status-badge ${e.status}">${e.status}</span>
            </div>
            <button class="close-btn" @click=${()=>this.closePanel()}>✕</button>
          </div>

          <div class="panel-content">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-value ${e.contacts>=this.contactsCritical?"critical":e.contacts>=this.contactsWarning?"warning":""}">${e.contacts}</div>
                <div class="stat-label">Waiting</div>
              </div>
              <div class="stat-card">
                <div class="stat-value ${this.getWaitTimeStatus(e.waitTimeSeconds)}">${this.formatLongWaitTime(e.waitTimeSeconds)}</div>
                <div class="stat-label">Longest Wait</div>
              </div>
            </div>

            <div class="contacts-section">
              <div class="section-header">
                <span class="section-title">Contacts in Queue</span>
              </div>
              
              ${t.length>0?j`
                <div class="contacts-list">
                  ${t.map(t=>{const e=Math.floor((Date.now()-t.createdTime)/1e3);return j`
                      <div class="contact-item">
                        <div class="contact-info">
                          <div class="contact-icon">${this.getChannelIcon(t.channelType)}</div>
                          <div class="contact-details">
                            <span class="contact-id">${this.formatOrigin(t.origin)}</span>
                            <span class="contact-channel">${t.channelType||"Voice"}</span>
                          </div>
                        </div>
                        <div class="contact-wait">
                          <span class="wait-time ${this.getWaitTimeStatus(e)}">${this.formatLongWaitTime(e)}</span>
                          <span class="wait-label">waiting</span>
                        </div>
                      </div>
                    `})}
                </div>
              `:j`
                <div class="no-contacts">
                  <div class="no-contacts-icon">📭</div>
                  <div>No contacts waiting</div>
                </div>
              `}
            </div>
          </div>

          <div class="panel-footer">
            <span class="last-updated">Updated ${this.lastUpdated.toLocaleTimeString()}</span>
            <button class="refresh-btn" @click=${()=>this.refreshData()}>↻ Refresh</button>
          </div>
        </div>
      `:""}
    `}};ut.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new a(s,t,i)})`
    :host {
      display: block;
      width: 100%;
      height: 48px;
      background: #0f1419;
      border-radius: 6px;
      overflow: visible;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    }

    .container {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      gap: 16px;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .container::-webkit-scrollbar {
      height: 4px;
    }

    .container::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    .container::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    .queue-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      white-space: nowrap;
      flex-shrink: 0;
      font-size: 13px;
      transition: all 0.2s ease;
      cursor: pointer;
      position: relative;
    }

    .queue-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    .queue-item.expanded {
      background: rgba(255, 255, 255, 0.12);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .queue-item.ok {
      border-left: 3px solid #10b981;
    }

    .queue-item.warning {
      border-left: 3px solid #f59e0b;
      animation: pulse-warning 2s ease-in-out infinite;
    }

    .queue-item.critical {
      border-left: 3px solid #ef4444;
      animation: pulse-critical 1s ease-in-out infinite;
    }

    @keyframes pulse-warning {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.85; }
    }

    @keyframes pulse-critical {
      0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(239, 68, 68, 0.5); }
      50% { opacity: 0.9; box-shadow: 0 0 16px rgba(239, 68, 68, 0.8); }
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-indicator.ok { background: #10b981; }
    .status-indicator.warning { background: #f59e0b; }
    .status-indicator.critical { background: #ef4444; }

    .queue-name {
      color: #f1f5f9;
      font-weight: 600;
      font-size: 13px;
    }

    .queue-metrics {
      display: flex;
      gap: 12px;
      color: #94a3b8;
      font-size: 12px;
    }

    .metric {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .expand-icon {
      margin-left: 4px;
      font-size: 10px;
      opacity: 0.6;
      transition: transform 0.2s ease;
    }

    .queue-item.expanded .expand-icon {
      transform: rotate(180deg);
    }

    .loading, .error, .empty {
      color: #94a3b8;
      font-size: 13px;
      padding: 0 12px;
    }

    .error { color: #ef4444; }

    /* === FLOATING OVERLAY PANEL === */
    .overlay-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      background: transparent;
    }

    .overlay-panel {
      position: fixed;
      min-width: 320px;
      max-width: 420px;
      background: linear-gradient(165deg, #1a1f2e 0%, #0f1419 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
      z-index: 10000;
      overflow: hidden;
      animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .panel-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .panel-title-text {
      font-size: 15px;
      font-weight: 600;
      color: #f1f5f9;
    }

    .panel-status-badge {
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .panel-status-badge.ok {
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
    }

    .panel-status-badge.warning {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .panel-status-badge.critical {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: #94a3b8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      font-size: 16px;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #f1f5f9;
    }

    .panel-content {
      padding: 16px 20px;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 14px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #f1f5f9;
      line-height: 1.2;
    }

    .stat-value.warning { color: #f59e0b; }
    .stat-value.critical { color: #ef4444; }

    .stat-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    /* Contacts List */
    .contacts-section {
      margin-top: 8px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .contacts-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 200px;
      overflow-y: auto;
    }

    .contacts-list::-webkit-scrollbar {
      width: 4px;
    }

    .contacts-list::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }

    .contacts-list::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.06);
    }

    .contact-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .contact-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .contact-id {
      font-size: 13px;
      color: #f1f5f9;
      font-weight: 500;
    }

    .contact-channel {
      font-size: 11px;
      color: #64748b;
    }

    .contact-wait {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
    }

    .wait-time {
      font-size: 14px;
      font-weight: 600;
      color: #f1f5f9;
    }

    .wait-time.warning { color: #f59e0b; }
    .wait-time.critical { color: #ef4444; }

    .wait-label {
      font-size: 10px;
      color: #64748b;
    }

    /* Panel Footer */
    .panel-footer {
      padding: 12px 20px;
      background: rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .last-updated {
      font-size: 11px;
      color: #64748b;
    }

    .refresh-btn {
      padding: 6px 12px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 6px;
      color: #3b82f6;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .refresh-btn:hover {
      background: rgba(59, 130, 246, 0.3);
    }

    .no-contacts {
      text-align: center;
      padding: 24px;
      color: #64748b;
      font-size: 13px;
    }

    .no-contacts-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }
  `;let ft=ut;pt([lt()],ft.prototype,"token"),pt([lt()],ft.prototype,"orgId"),pt([lt()],ft.prototype,"teamId"),pt([lt()],ft.prototype,"agentId"),pt([lt({type:Number})],ft.prototype,"contactsWarning"),pt([lt({type:Number})],ft.prototype,"contactsCritical"),pt([lt({type:Number})],ft.prototype,"waitWarning"),pt([lt({type:Number})],ft.prototype,"waitCritical"),pt([lt({type:Number})],ft.prototype,"dataRefreshInterval"),pt([lt({type:Number})],ft.prototype,"uiRefreshInterval"),pt([lt({type:Boolean})],ft.prototype,"demoMode"),pt([dt()],ft.prototype,"queueStats"),pt([dt()],ft.prototype,"queueData"),pt([dt()],ft.prototype,"queueDetails"),pt([dt()],ft.prototype,"_dataRefreshTimer"),pt([dt()],ft.prototype,"_uiRefreshTimer"),pt([dt()],ft.prototype,"isLoading"),pt([dt()],ft.prototype,"hasError"),pt([dt()],ft.prototype,"expandedQueue"),pt([dt()],ft.prototype,"lastUpdated"),pt([dt()],ft.prototype,"panelPosition"),customElements.define("queue-statistics-compact",ft),t.QueueStatisticsCompact=ft,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsCompact=this.QueueStatisticsCompact||{});
