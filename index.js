!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,$=f?f.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},y=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[m("elementProperties")]=new Map,A[m("finalized")]=new Map,g?.({ReactiveElement:A}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const b=globalThis,w=b.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+x,k=`<${C}>`,P=document,T=()=>P.createComment(""),q=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(Q=1,(t,...e)=>({_$litType$:Q,strings:t,values:e})),z=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,F=P.createTreeWalker(P,129);var Q;function V(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,c]=((t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=R;for(let a=0;a<s;a++){const e=t[a];let s,h,c=-1,l=0;for(;l<e.length&&(n.lastIndex=l,h=n.exec(e),null!==h);)l=n.lastIndex,n===R?"!--"===h[1]?n=M:void 0!==h[1]?n=N:void 0!==h[2]?(L.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=H):void 0!==h[3]&&(n=H):n===H?">"===h[0]?(n=r??R,c=-1):void 0===h[1]?c=-2:(c=n.lastIndex-h[2].length,s=h[1],n=void 0===h[3]?H:'"'===h[3]?D:I):n===D||n===I?n=H:n===M||n===N?n=R:(n=H,r=void 0);const d=n===H&&t[a+1].startsWith("/>")?" ":"";o+=n===R?e+k:c>=0?(i.push(s),e.slice(0,c)+E+e.slice(c)+x+d):e+x+(-2===c?a:d)}return[V(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=J.createElement(h,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[o++],s=i.getAttribute(t).split(x),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?Y:"?"===n[1]?tt:"@"===n[1]?et:X}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===z)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=q(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),q(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new G(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=K(this,i[s+n],e,n),a===z&&(a=this._$AH[n]),o||=!q(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===z)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=b.litHtmlPolyfillSupport;it?.(J,G),(b.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class ot extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new G(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const at={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},ht=(t=at,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function lt(t){return ct({...t,state:!0,attribute:!1})}var dt=Object.defineProperty,ut=(t,e,s,i)=>{for(var r,o=void 0,n=t.length-1;n>=0;n--)(r=t[n])&&(o=r(e,s,o)||o);return o&&dt(e,s,o),o};const pt=class extends ot{constructor(){super(...arguments),this.contactsWarning=5,this.contactsCritical=10,this.waitWarning=120,this.waitCritical=300,this.dataRefreshInterval=3e4,this.uiRefreshInterval=1e3,this.demoMode=!1,this.queueStats=[],this.queueFilter=[],this.isLoading=!0,this.hasError=!1}connectedCallback(){super.connectedCallback(),this.demoMode||this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async initialize(){try{this.isLoading=!0,this.hasError=!1,this.demoMode||(await this.getQueues(),this._dataRefreshTimer=setInterval(()=>this.getStats(),this.dataRefreshInterval)),this._uiRefreshTimer=setInterval(()=>this.updateTemplate(),this.uiRefreshInterval)}catch(t){this.hasError=!0,console.error("Queue widget error:",t)}}cleanup(){this._dataRefreshTimer&&clearInterval(this._dataRefreshTimer),this._uiRefreshTimer&&clearInterval(this._uiRefreshTimer)}async getQueues(){const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e=[`/v2/contact-service-queue/by-user-id/${this.agentId}/agent-based-queues`,`/v2/contact-service-queue/by-user-id/${this.agentId}/skill-based-queues`,`/team/${this.teamId}/incoming-references`];this.queueFilter=[];const s=e.map(async e=>{try{const s=await fetch(`https://api.wxcc-us1.cisco.com/organization/${this.orgId}${e}`,{method:"GET",headers:t,redirect:"follow"}),i=await s.json();if(i.data){return(Array.isArray(i.data)?i.data:[i.data]).map(t=>({queueId:{equals:t.id}}))}}catch(s){console.error("Error fetching queues:",s)}return[]}),i=await Promise.all(s);this.queueFilter=i.flat(),this.queueFilter.length>0?await this.getStats():this.isLoading=!1}async getStats(){if(!this.queueFilter.length)return;const t={Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},e={query:"query($from: Long!, $to: Long!, $filter: TaskFilters, $aggregation: [TaskAggregation]) {\n        task(from: $from, to: $to, filter: $filter, aggregation: $aggregation) {\n          tasks { lastQueue { name } aggregation { name value } }\n        }\n      }",variables:{from:""+(Date.now()-864e5),to:`${Date.now()}`,filter:{and:[{isActive:{equals:!0}},{status:{equals:"parked"}},{or:this.queueFilter}]},aggregation:[{field:"id",type:"count",name:"contacts"},{field:"createdTime",type:"min",name:"oldestStart"}]}};try{const s=await fetch("https://api.wxcc-us1.cisco.com/search",{method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"}),i=await s.json();i.data?.task?.tasks&&(this.queueData=i.data.task.tasks,this.updateTemplate(),this.isLoading=!1,this.hasError=!1)}catch(s){this.hasError=!0,console.error("Error fetching stats:",s)}}updateTemplate(){this.queueData&&Array.isArray(this.queueData)?(this.queueStats=this.queueData.map(t=>{const e=t.aggregation?.find(t=>"contacts"===t.name)?.value||0,s=t.aggregation?.find(t=>"oldestStart"===t.name)?.value||0,i=s?Math.floor((Date.now()-s)/1e3):0;return{name:t.lastQueue?.name||"Unknown Queue",contacts:e,waitTimeSeconds:i,status:this.calculateStatus(e,i)}}),this.queueStats.sort((t,e)=>{const s={critical:3,warning:2,ok:1};return(s[e.status]||0)-(s[t.status]||0)})):this.queueStats=[]}calculateStatus(t,e){return t>=this.contactsCritical||e>=this.waitCritical?"critical":t>=this.contactsWarning||e>=this.waitWarning?"warning":"ok"}formatWaitTime(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}render(){return this.hasError?j`<div class="container"><div class="error">⚠️ Error loading queue data</div></div>`:this.isLoading?j`<div class="container"><div class="loading">Loading queue data...</div></div>`:0===this.queueStats.length?j`<div class="container"><div class="empty">All queues clear ✓</div></div>`:j`
      <div class="container">
        ${this.queueStats.map(t=>j`
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
    `}};pt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)})`
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
  `;let ft=pt;ut([ct()],ft.prototype,"token"),ut([ct()],ft.prototype,"orgId"),ut([ct()],ft.prototype,"teamId"),ut([ct()],ft.prototype,"agentId"),ut([ct({type:Number})],ft.prototype,"contactsWarning"),ut([ct({type:Number})],ft.prototype,"contactsCritical"),ut([ct({type:Number})],ft.prototype,"waitWarning"),ut([ct({type:Number})],ft.prototype,"waitCritical"),ut([ct({type:Number})],ft.prototype,"dataRefreshInterval"),ut([ct({type:Number})],ft.prototype,"uiRefreshInterval"),ut([ct({type:Boolean})],ft.prototype,"demoMode"),ut([lt()],ft.prototype,"queueStats"),ut([lt()],ft.prototype,"queueFilter"),ut([lt()],ft.prototype,"queueData"),ut([lt()],ft.prototype,"_dataRefreshTimer"),ut([lt()],ft.prototype,"_uiRefreshTimer"),ut([lt()],ft.prototype,"isLoading"),ut([lt()],ft.prototype,"hasError"),customElements.define("queue-statistics-compact",ft),t.QueueStatisticsCompact=ft,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}(this.QueueStatisticsCompact=this.QueueStatisticsCompact||{});
