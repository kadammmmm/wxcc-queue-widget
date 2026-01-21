!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var e;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",v=g.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},x=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=null==s?void 0:s.call(this);null==n||n.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var i;const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(void 0!==n&&!0===s.reflect){const a=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){var i,s;const n=this.constructor,a=n._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=n.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:b;this._$Em=a;const o=r.fromAttribute(e,t.type);this[a]=o??(null==(s=this._$Ej)?void 0:s.get(a))??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){var a;if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??(i=r.getPropertyOptions(t)),!((i.hasChanged??x)(n,e)||i.useDefault&&i.reflect&&n===(null==(a=this._$Ej)?void 0:a.get(t))&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[$("elementProperties")]=new Map,_[$("finalized")]=new Map,null==v||v({ReactiveElement:_}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,P=`<${T}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,q="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,D=/>/g,H=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,Q=(J=1,(t,...e)=>({_$litType$:J,strings:t,values:e})),W=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,F=U.createTreeWalker(U,129);var J;function Y(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=z;for(let o=0;o<i;o++){const e=t[o];let i,l,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===z?"!--"===l[1]?r=N:void 0!==l[1]?r=D:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=n??z,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?H:'"'===l[3]?j:L):r===j||r===L?r=H:r===N||r===D?r=z:(r=H,n=void 0);const h=r===H&&t[o+1].startsWith("/>")?" ":"";a+=r===z?e+P:c>=0?(s.push(i),e.slice(0,c)+k+e.slice(c)+C+h):e+C+(-2===c?o:h)}return[Y(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=G.createElement(l,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[a++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),F.nextNode(),o.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===T)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)o.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var n,a;if(e===W)return e;let r=void 0!==s?null==(n=i._$Co)?void 0:n[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==o&&(null==(a=null==r?void 0:r._$AO)||a.call(r,!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??U).importNode(e,!0);F.currentNode=s;let n=F.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new X(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new nt(n,this,t)),this._$AV.push(e),o=i[++r]}a!==(null==o?void 0:o.index)&&(n=F.nextNode(),a++)}return F.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(Y(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new Z(n,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=K(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=K(this,s[i+r],e,r),o===W&&(o=this._$AH[r]),a||(a=!M(o)||o!==this._$AH[r]),o===B?t=B:t!==B&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??B)===W)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const at=w.litHtmlPolyfillSupport;null==at||at(G,X),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.3.2");const rt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class ot extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=(null==i?void 0:i.renderBefore)??e;let n=s._$litPart$;if(void 0===n){const t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=n=new X(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return W}}ot._$litElement$=!0,ot.finalized=!0,null==(e=rt.litElementHydrateSupport)||e.call(rt,{LitElement:ot});const lt=rt.litElementPolyfillSupport;null==lt||lt({LitElement:ot}),(rt.litElementVersions??(rt.litElementVersions=[])).push("4.2.2");const ct=class extends ot{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueDetails=new Map,this.isLoading=!0,this.hasError=!1,this.expandedQueue=null,this.lastUpdated=new Date,this.handleOutsideClick=t=>{var e;this.expandedQueue&&!(null==(e=this.shadowRoot)?void 0:e.contains(t.target))&&(this.expandedQueue=null)}}connectedCallback(){super.connectedCallback(),this.demoMode||this.initialize(),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),document.removeEventListener("click",this.handleOutsideClick)}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getStats(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.hasError=!0,console.error("Queue widget error:",t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getStats(){var t,e;const i={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},s=Date.now(),n={query:`{\n        task(\n          from: ${s-864e5}\n          to: ${s}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n          aggregations: [\n            { field: "id", type: count, name: "contacts" }\n            { field: "createdTime", type: min, name: "oldestStart" }\n          ]\n        ) {\n          tasks {\n            lastQueue { id name }\n            aggregation { name value }\n          }\n        }\n      }`};try{const s=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:i,body:JSON.stringify(n),redirect:"follow"}),a=await s.json();if(a.error||a.errors)return console.error("GraphQL error:",a.error||a.errors),this.hasError=!0,void(this.isLoading=!1);(null==(e=null==(t=a.data)?void 0:t.task)?void 0:e.tasks)?(this.queueData=a.data.task.tasks,this.lastUpdated=new Date,this.updateTemplate(),this.isLoading=!1,this.hasError=!1,await this.getContactDetails()):(this.queueData=[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(a){this.hasError=!0,console.error("Error fetching stats:",a)}}async getContactDetails(){var t,e,i;const s={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},n=Date.now(),a={query:`{\n        task(\n          from: ${n-864e5}\n          to: ${n}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n        ) {\n          tasks {\n            id\n            createdTime\n            channelType\n            origin\n            lastQueue { id name }\n          }\n        }\n      }`};try{const n=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:s,body:JSON.stringify(a),redirect:"follow"}),r=await n.json();if(null==(e=null==(t=r.data)?void 0:t.task)?void 0:e.tasks){const t=new Map;for(const e of r.data.task.tasks){const s=(null==(i=e.lastQueue)?void 0:i.name)||"Unknown";t.has(s)||t.set(s,[]),t.get(s).push({id:e.id,createdTime:e.createdTime,channelType:e.channelType||"telephony",origin:e.origin||"Unknown"})}for(const[e,i]of t)i.sort((t,e)=>t.createdTime-e.createdTime);this.queueDetails=t}}catch(r){console.error("Error fetching contact details:",r)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{var e,i,s,n,a,r;const o=(null==(i=null==(e=t.aggregation)?void 0:e.find(t=>"contacts"===t.name))?void 0:i.value)||0,l=(null==(n=null==(s=t.aggregation)?void 0:s.find(t=>"oldestStart"===t.name))?void 0:n.value)||0,c=l?Math.floor((Date.now()-l)/1e3):0;return{id:(null==(a=t.lastQueue)?void 0:a.id)||"",name:(null==(r=t.lastQueue)?void 0:r.name)||"Unknown Queue",contacts:o,waitTimeSeconds:c,oldestStart:l,status:this.calculateStatus(o,c)}}),this.queueStats.sort((t,e)=>{const i={critical:3,warning:2,ok:1};return(i[e.status]||0)-(i[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}formatLongWaitTime(t){if(t>=3600){return`${Math.floor(t/3600)}h ${Math.floor(t%3600/60)}m`}return`${Math.floor(t/60)}m ${t%60}s`}getWaitTimeStatus(t){return t>=this.waitCritical?"critical":t>=this.waitWarning?"warning":""}toggleQueue(t,e){e.stopPropagation(),this.expandedQueue=this.expandedQueue===t?null:t}closePanel(){this.expandedQueue=null}async refreshData(){await this.getStats()}getChannelIcon(t){switch(null==t?void 0:t.toLowerCase()){case"telephony":default:return"📞";case"chat":return"💬";case"email":return"📧";case"social":return"📱"}}formatOrigin(t){return t&&"Unknown"!==t?t.match(/^\+?\d{10,}/)?t.slice(0,3)+"***"+t.slice(-3):t:"Unknown Caller"}render(){if(this.hasError)return Q`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`;if(this.isLoading)return Q`<div class="container"><div class="loading">Loading queue data...</div></div>`;if(0===this.queueStats.length)return Q`<div class="container"><div class="empty">All queues clear ✔</div></div>`;const t=this.expandedQueue&&this.queueDetails.get(this.expandedQueue)||[];return Q`
      <div class="container">
        ${this.queueStats.map(e=>Q`
          <div 
            class="queue-item ${e.status} ${this.expandedQueue===e.name?"expanded":""}"
            @click=${t=>this.toggleQueue(e.name,t)}
          >
            <div class="status-indicator ${e.status}"></div>
            <span class="queue-name">${e.name}</span>
            <div class="queue-metrics">
              <span class="metric">👥 ${e.contacts}</span>
              <span class="metric">⏱️ ${this.formatWaitTime(e.waitTimeSeconds)}</span>
            </div>
            <span class="expand-icon">▼</span>

            ${this.expandedQueue===e.name?Q`
              <div class="overlay-panel" @click=${t=>t.stopPropagation()}>
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
                    
                    ${t.length>0?Q`
                      <div class="contacts-list">
                        ${t.map(t=>{const e=Math.floor((Date.now()-t.createdTime)/1e3);return Q`
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
                    `:Q`
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
          </div>
        `)}
      </div>
    `}};ct.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,n)})`
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
      z-index: 999;
    }

    .overlay-panel {
      position: absolute;
      top: 52px;
      left: 0;
      min-width: 320px;
      max-width: 420px;
      background: linear-gradient(165deg, #1a1f2e 0%, #0f1419 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
      z-index: 1000;
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
  `;let dt=ct;customElements.define("queue-statistics-compact",dt),t.QueueStatisticsCompact=dt,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsCompact=this.QueueStatisticsCompact||{});
