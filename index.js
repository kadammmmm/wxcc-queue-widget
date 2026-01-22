!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},y=(t,e)=>!o(t,e),x={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const a=n.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[b("elementProperties")]=new Map,v[b("finalized")]=new Map,m?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const _=globalThis,w=_.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,C=`<${E}>`,T=document,P=()=>T.createComment(""),q=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,N=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,I=(V=1,(t,...e)=>({_$litType$:V,strings:t,values:e})),j=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),W=new WeakMap,B=T.createTreeWalker(T,129);var V;function F(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=U;for(let o=0;o<i;o++){const e=t[o];let i,l,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===U?"!--"===l[1]?r=R:void 0!==l[1]?r=H:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=n??U,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?N:'"'===l[3]?L:z):r===L||r===z?r=N:r===R||r===H?r=U:(r=N,n=void 0);const h=r===N&&t[o+1].startsWith("/>")?" ":"";a+=r===U?e+C:c>=0?(s.push(i),e.slice(0,c)+k+e.slice(c)+S+h):e+S+(-2===c?o:h)}return[F(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=J.createElement(l,i),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=B.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[a++],i=s.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Z}),s.removeAttribute(t)}else t.startsWith(S)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),B.nextNode(),o.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===E)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)o.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===j)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=q(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);B.currentNode=s;let n=B.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new G(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new it(n,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(n=B.nextNode(),a++)}return B.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),q(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=K(this,t,e,0),a=!q(t)||t!==this._$AH&&t!==j,a&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=K(this,s[i+r],e,r),o===j&&(o=this._$AH[r]),a||=!q(o)||o!==this._$AH[r],o===Q?t=Q:t!==Q&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class et extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??Q)===j)return;const i=this._$AH,s=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=_.litHtmlPolyfillSupport;st?.(J,G),(_.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class at extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new G(e.insertBefore(P(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const rt=nt.litElementPolyfillSupport;rt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},lt=(t=ot,e,i)=>{const{kind:s,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function ct(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function dt(t){return ct({...t,state:!0,attribute:!1})}var ht=Object.defineProperty,pt=(t,e,i,s)=>{for(var n,a=void 0,r=t.length-1;r>=0;r--)(n=t[r])&&(a=n(e,i,a)||a);return a&&ht(e,i,a),a};const ut=class extends at{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueDetails=new Map,this.queueHistory=new Map,this.isLoading=!0,this.hasError=!1,this.expandedQueue=null,this.lastUpdated=new Date,this.panelPosition={top:0,left:0},this.SPARKLINE_MAX_POINTS=20,this.handleOutsideClick=t=>{this.expandedQueue&&!this.shadowRoot?.contains(t.target)&&(this.expandedQueue=null)}}connectedCallback(){super.connectedCallback(),this.demoMode||this.initialize(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),document.removeEventListener("click",this.handleOutsideClick)}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getStats(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.hasError=!0,console.error("Queue widget error:",t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getStats(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=Date.now(),i={query:`{\n        task(\n          from: ${e-864e5}\n          to: ${e}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n          aggregations: [\n            { field: "id", type: count, name: "contacts" }\n            { field: "createdTime", type: min, name: "oldestStart" }\n          ]\n        ) {\n          tasks {\n            lastQueue { id name }\n            aggregation { name value }\n          }\n        }\n      }`};try{const e=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(i),redirect:"follow"}),s=await e.json();if(s.error||s.errors)return console.error("GraphQL error:",s.error||s.errors),this.hasError=!0,void(this.isLoading=!1);s.data?.task?.tasks?(this.queueData=s.data.task.tasks,this.lastUpdated=new Date,this.updateTemplate(),this.updateSparklineHistory(),this.isLoading=!1,this.hasError=!1,await this.getContactDetails()):(this.queueData=[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(s){this.hasError=!0,console.error("Error fetching stats:",s)}}async getContactDetails(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=Date.now(),i={query:`{\n        task(\n          from: ${e-864e5}\n          to: ${e}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n        ) {\n          tasks {\n            id\n            createdTime\n            channelType\n            origin\n            lastQueue { id name }\n          }\n        }\n      }`};try{const e=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(i),redirect:"follow"}),s=await e.json();if(s.data?.task?.tasks){const t=new Map;for(const e of s.data.task.tasks){const i=e.lastQueue?.name||"Unknown";t.has(i)||t.set(i,[]),t.get(i).push({id:e.id,createdTime:e.createdTime,channelType:e.channelType||"telephony",origin:e.origin||"Unknown"})}for(const[,e]of t)e.sort((t,e)=>t.createdTime-e.createdTime);this.queueDetails=t}}catch(s){console.error("Error fetching contact details:",s)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(t=>"contacts"===t.name)?.value||0,i=t.aggregation?.find(t=>"oldestStart"===t.name)?.value||0,s=i?Math.floor((Date.now()-i)/1e3):0;return{id:t.lastQueue?.id||"",name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:s,oldestStart:i,status:this.calculateStatus(e,s)}}),this.queueStats.sort((t,e)=>{const i={critical:3,warning:2,ok:1};return(i[e.status]||0)-(i[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}updateSparklineHistory(){for(const t of this.queueStats){const e=this.queueHistory.get(t.name)||[];for(e.push(t.contacts);e.length>this.SPARKLINE_MAX_POINTS;)e.shift();this.queueHistory.set(t.name,e)}this.queueHistory=new Map(this.queueHistory)}generateSparklinePath(t){const e=this.queueHistory.get(t)||[];if(e.length<2)return{linePath:"",areaPath:""};const i=Math.max(...e,1),s=i-0||1,n=e.map((t,i)=>({x:2+i/(e.length-1)*46,y:18-(t-0)/s*16})),a=n.map((t,e)=>`${0===e?"M":"L"} ${t.x.toFixed(1)} ${t.y.toFixed(1)}`).join(" ");return{linePath:a,areaPath:`${a} L ${n[n.length-1].x.toFixed(1)} 18 L 2 18 Z`}}getSparklineEndpoint(t){const e=this.queueHistory.get(t)||[];if(e.length<2)return null;const i=Math.max(...e,1)-0||1;return{x:48,y:18-(e[e.length-1]-0)/i*16}}getTrend(t){const e=this.queueHistory.get(t)||[];if(e.length<3)return"stable";const i=e.slice(-3),s=e.slice(-6,-3);if(0===s.length)return"stable";const n=i.reduce((t,e)=>t+e,0)/i.length,a=s.reduce((t,e)=>t+e,0)/s.length;return n>a+.5?"up":n<a-.5?"down":"stable"}getTrendIcon(t){switch(t){case"up":return"↑";case"down":return"↓";default:return"→"}}formatWaitTime(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}formatLongWaitTime(t){if(t>=3600){return`${Math.floor(t/3600)}h ${Math.floor(t%3600/60)}m`}return`${Math.floor(t/60)}m ${t%60}s`}getWaitTimeStatus(t){return t>=this.waitCritical?"critical":t>=this.waitWarning?"warning":""}toggleQueue(t,e){if(e.stopPropagation(),this.expandedQueue===t)this.expandedQueue=null;else{const i=e.currentTarget.getBoundingClientRect();this.panelPosition={top:i.bottom+8,left:Math.max(8,Math.min(i.left,window.innerWidth-340))},this.expandedQueue=t}}closePanel(){this.expandedQueue=null}async refreshData(){await this.getStats()}getChannelIcon(t){switch(t?.toLowerCase()){case"telephony":default:return"📞";case"chat":return"💬";case"email":return"📧";case"social":return"📱"}}formatOrigin(t){return t&&"Unknown"!==t?t.match(/^\+?\d{10,}/)?t.slice(0,3)+"***"+t.slice(-3):t:"Unknown Caller"}render(){if(this.hasError)return I`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`;if(this.isLoading)return I`<div class="container"><div class="loading">Loading queue data...</div></div>`;if(0===this.queueStats.length)return I`<div class="container"><div class="empty">All queues clear ✔</div></div>`;const t=this.expandedQueue&&this.queueDetails.get(this.expandedQueue)||[],e=this.expandedQueue?this.queueStats.find(t=>t.name===this.expandedQueue):null;return I`
      <div class="container">
        ${this.queueStats.map(t=>{const e=this.generateSparklinePath(t.name),i=this.getSparklineEndpoint(t.name),s=this.getTrend(t.name),n=(this.queueHistory.get(t.name)?.length||0)>=2;return I`
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
              ${n?I`
                <div class="sparkline-container">
                  <svg class="sparkline" viewBox="0 0 50 20" preserveAspectRatio="none">
                    <path class="sparkline-area ${t.status}" d="${e.areaPath}"></path>
                    <path class="sparkline-line ${t.status}" d="${e.linePath}"></path>
                    ${i?I`
                      <circle class="sparkline-dot ${t.status}" cx="${i.x}" cy="${i.y}" r="2"></circle>
                    `:""}
                  </svg>
                  <span class="trend-indicator ${s}">${this.getTrendIcon(s)}</span>
                </div>
              `:""}
              <span class="expand-icon">▼</span>
            </div>
          `})}
      </div>

      ${this.expandedQueue&&e?I`
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
              
              ${t.length>0?I`
                <div class="contacts-list">
                  ${t.map(t=>{const e=Math.floor((Date.now()-t.createdTime)/1e3);return I`
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
              `:I`
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
    `}};ut.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)})`
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

    /* Sparkline styles */
    .sparkline-container {
      display: flex;
      align-items: center;
      margin-left: 8px;
      padding-left: 8px;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sparkline {
      width: 50px;
      height: 20px;
    }

    .sparkline-line {
      fill: none;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .sparkline-line.ok { stroke: #10b981; }
    .sparkline-line.warning { stroke: #f59e0b; }
    .sparkline-line.critical { stroke: #ef4444; }

    .sparkline-area {
      opacity: 0.15;
    }

    .sparkline-area.ok { fill: #10b981; }
    .sparkline-area.warning { fill: #f59e0b; }
    .sparkline-area.critical { fill: #ef4444; }

    .sparkline-dot {
      r: 2;
    }

    .sparkline-dot.ok { fill: #10b981; }
    .sparkline-dot.warning { fill: #f59e0b; }
    .sparkline-dot.critical { fill: #ef4444; }

    .trend-indicator {
      font-size: 10px;
      margin-left: 4px;
      font-weight: 600;
    }

    .trend-indicator.up { color: #ef4444; }
    .trend-indicator.down { color: #10b981; }
    .trend-indicator.stable { color: #64748b; }

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
  `;let gt=ut;pt([ct()],gt.prototype,"token"),pt([ct()],gt.prototype,"orgId"),pt([ct()],gt.prototype,"teamId"),pt([ct()],gt.prototype,"agentId"),pt([ct({type:Number})],gt.prototype,"contactsWarning"),pt([ct({type:Number})],gt.prototype,"contactsCritical"),pt([ct({type:Number})],gt.prototype,"waitWarning"),pt([ct({type:Number})],gt.prototype,"waitCritical"),pt([ct({type:Number})],gt.prototype,"dataRefreshInterval"),pt([ct({type:Number})],gt.prototype,"uiRefreshInterval"),pt([ct({type:Boolean})],gt.prototype,"demoMode"),pt([dt()],gt.prototype,"queueStats"),pt([dt()],gt.prototype,"queueData"),pt([dt()],gt.prototype,"queueDetails"),pt([dt()],gt.prototype,"queueHistory"),pt([dt()],gt.prototype,"_dataRefreshTimer"),pt([dt()],gt.prototype,"_uiRefreshTimer"),pt([dt()],gt.prototype,"isLoading"),pt([dt()],gt.prototype,"hasError"),pt([dt()],gt.prototype,"expandedQueue"),pt([dt()],gt.prototype,"lastUpdated"),pt([dt()],gt.prototype,"panelPosition"),customElements.define("queue-statistics-compact",gt),t.QueueStatisticsCompact=gt,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsCompact=this.QueueStatisticsCompact||{});
