!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var e;const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,$=globalThis,f=$.trustedTypes,v=f?f.emptyScript:"",g=$.reactiveElementPolyfillSupport,_=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},y=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:y};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=null==i?void 0:i.call(this);null==r||r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s,i;const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:m;this._$Em=n;const a=o.fromAttribute(e,t.type);this[n]=a??(null==(i=this._$Ej)?void 0:i.get(n))??a,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){var n;if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===(null==(n=this._$Ej)?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,null==g||g({ReactiveElement:b}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const E=globalThis,S=t=>t,w=E.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,T=`<${P}>`,M=document,U=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,H="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,D=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,j=/^(?:script|style|textarea|title)$/i,B=(K=1,(t,...e)=>({_$litType$:K,strings:t,values:e})),W=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),V=new WeakMap,J=M.createTreeWalker(M,129);var K;function Z(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=q;for(let a=0;a<s;a++){const e=t[a];let s,l,h=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===q?"!--"===l[1]?o=N:void 0!==l[1]?o=D:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=L):void 0!==l[3]&&(o=L):o===L?">"===l[0]?(o=r??q,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?L:'"'===l[3]?I:z):o===I||o===z?o=L:o===N||o===D?o=q:(o=L,r=void 0);const d=o===L&&t[a+1].startsWith("/>")?" ":"";n+=o===q?e+T:h>=0?(i.push(s),e.slice(0,h)+C+e.slice(h)+k+d):e+k+(-2===h?a:d)}return[Z(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=F.createElement(l,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[n++],s=i.getAttribute(t).split(k),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?et:"?"===o[1]?st:"@"===o[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){var r,n;if(e===W)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const a=O(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==a&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??M).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++o]}n!==(null==a?void 0:a.index)&&(r=J.nextNode(),n++)}return J.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),O(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(Z(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new X(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new F(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Q}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=G(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=G(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),n||(n=!O(a)||a!==this._$AH[o]),a===Q?t=Q:t!==Q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??Q)===W)return;const s=this._$AH,i=t===Q&&s!==Q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==Q&&(s===Q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=E.litHtmlPolyfillSupport;null==nt||nt(F,Y),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.3.2");const ot=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new Y(e.insertBefore(U(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,null==(e=ot.litElementHydrateSupport)||e.call(ot,{LitElement:at});const lt=ot.litElementPolyfillSupport;null==lt||lt({LitElement:at}),(ot.litElementVersions??(ot.litElementVersions=[])).push("4.2.2");const ht=class extends at{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.isLoading=!0,this.hasError=!1,this.errorMessage=""}connectedCallback(){super.connectedCallback(),this.demoMode||this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getQueues(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.hasError=!0,console.error("Queue widget error:",t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getQueues(){await this.getStats()}async getStats(){var t,e,s,i,r,n,o;const a={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},l=Date.now(),h={query:`{\n        task(\n          from: ${l-864e5}\n          to: ${l}\n          filter: {\n            and: [\n              { isActive: { equals: true } }\n              { status: { equals: "parked" } }\n            ]\n          }\n          aggregations: [\n            { field: "id", type: count, name: "contacts" }\n            { field: "createdTime", type: min, name: "oldestStart" }\n          ]\n        ) {\n          tasks {\n            lastQueue { name }\n            aggregation { name value }\n          }\n        }\n      }`};try{const l=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:a,body:JSON.stringify(h),redirect:"follow"}),c=await l.json();if(c.error||c.errors){const n=(null==(s=null==(e=null==(t=c.error)?void 0:t.message)?void 0:e[0])?void 0:s.description)||(null==(r=null==(i=c.errors)?void 0:i[0])?void 0:r.message)||JSON.stringify(c.error||c.errors);return console.error("GraphQL error:",n),this.errorMessage=n,this.hasError=!0,void(this.isLoading=!1)}(null==(o=null==(n=c.data)?void 0:n.task)?void 0:o.tasks)?(this.queueData=c.data.task.tasks,this.updateTemplate(),this.isLoading=!1,this.hasError=!1):(this.queueData=[],this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(c){this.hasError=!0,this.errorMessage=c instanceof Error?c.message:"Network error",console.error("Error fetching stats:",c)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{var e,s,i,r,n;const o=(null==(s=null==(e=t.aggregation)?void 0:e.find(t=>"contacts"===t.name))?void 0:s.value)||0,a=(null==(r=null==(i=t.aggregation)?void 0:i.find(t=>"oldestStart"===t.name))?void 0:r.value)||0,l=a?Math.floor((Date.now()-a)/1e3):0;return{name:(null==(n=t.lastQueue)?void 0:n.name)||"Unknown Queue",contacts:o,waitTimeSeconds:l,status:this.calculateStatus(o,l)}}),this.queueStats.sort((t,e)=>{const s={critical:3,warning:2,ok:1};return(s[e.status]||0)-(s[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}render(){return this.hasError?B`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`:this.isLoading?B`<div class="container"><div class="loading">Loading queue data...</div></div>`:0===this.queueStats.length?B`<div class="container"><div class="empty">All queues clear ✔</div></div>`:B`
      <div class="container">
        ${this.queueStats.map(t=>B`
          <div class="queue-item ${t.status}">
            <div class="status-indicator ${t.status}"></div>
            <span class="queue-name">${t.name}</span>
            <div class="queue-metrics">
              <span class="metric">👥 ${t.contacts}</span>
              <span class="metric">⏱️ ${this.formatWaitTime(t.waitTimeSeconds)}</span>
            </div>
          </div>
        `)}
      </div>
    `}};ht.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,r)})`
    :host {
      display: block;
      width: 100%;
      height: 48px;
      background: #0f1419;
      border-radius: 6px;
      overflow: hidden;
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
      transition: all 0.3s ease;
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
      50% { opacity: 0.7; }
    }

    @keyframes pulse-critical {
      0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(239, 68, 68, 0.5); }
      50% { opacity: 0.8; box-shadow: 0 0 16px rgba(239, 68, 68, 0.8); }
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-indicator.ok {
      background: #10b981;
    }

    .status-indicator.warning {
      background: #f59e0b;
    }

    .status-indicator.critical {
      background: #ef4444;
    }

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

    .loading, .error, .empty {
      color: #94a3b8;
      font-size: 13px;
      padding: 0 12px;
    }

    .error {
      color: #ef4444;
    }
  `;let ct=ht;customElements.define("queue-statistics-compact",ct),t.QueueStatisticsCompact=ct,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsCompact=this.QueueStatisticsCompact||{});
