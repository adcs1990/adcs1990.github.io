!function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...i)=>{const r=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(r,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var o;const a=window.trustedTypes,l=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=c){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:d.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var m;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.0");const f=globalThis.trustedTypes,v=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,$="?"+g,b=`<${$}>`,x=document,y=(t="")=>x.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,E=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,U=/"/g,P=/^(?:script|style|textarea|title)$/i,k=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),H=new WeakMap,R=x.createTreeWalker(x,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=w;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===w?"!--"===l[1]?o=S:void 0!==l[1]?o=E:void 0!==l[2]?(P.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=C):void 0!==l[3]&&(o=C):o===C?">"===l[0]?(o=null!=r?r:w,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?C:'"'===l[3]?U:O):o===U||o===O?o=C:o===S||o===E?o=w:(o=C,r=void 0);const p=o===C&&t[e+1].startsWith("/>")?" ":"";n+=o===w?i+b:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+g+p):i+g+(-2===h?(s.push(void 0),e):p)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(a):a,s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=M(t,e);if(this.el=z.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?q:"@"===e[1]?G:j})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(g),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),R.nextNode(),a.push({type:2,index:++r});s.append(t[e],y())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(g,t+1));)a.push({type:7,index:r}),t+=g.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var r,n,o,a;if(e===T)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const h=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);R.currentNode=r;let n=R.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new L(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new J(n,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=R.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),_(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&_(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new B(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new z(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new L(this.A(y()),this.A(y()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=I(this,t,e,0),n=!_(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=I(this,s[i+o],e,o),a===T&&(a=this._$AH[o]),n||(n=!_(a)||a!==this._$AH[o]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.C(t)}C(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===N?void 0:t}}const V=f?f.emptyScript:"";class q extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==N?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class G extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:N)===T)return;const s=this._$AH,r=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var F,K;null==W||W(z,L),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.0");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new L(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Z.finalized=!0,Z._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Z});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.2.0");class X{static dispatchEvent(t,e,i){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:{data:i}}))}}class Y extends Z{static styles=r`
    .matter-textfield-outlined {
      --matter-helper-theme: rgb(
        var(--matter-theme-rgb, var(--matter-primary-rgb, 255, 255, 255))
      );
      --matter-helper-safari1: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.38);
      --matter-helper-safari2: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.6);
      --matter-helper-safari3: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.87);
      position: relative;
      display: inline-block;
      padding-top: 6px;
      font-family: var(
        --matter-font-family,
        'Roboto',
        'Segoe UI',
        BlinkMacSystemFont,
        system-ui,
        -apple-system
      );
      font-size: 16px;
      line-height: 1.5;
    }

    /* Input, Textarea */
    .matter-textfield-outlined > input {
      box-sizing: border-box;
      margin: 0;
      border-style: solid;
      border-width: 1px;
      border-color: transparent var(--matter-helper-safari2)
        var(--matter-helper-safari2);
      border-radius: 4px;
      padding: 15px 13px 15px;
      width: 100%;
      height: inherit;
      color: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.87);
      -webkit-text-fill-color: currentColor; /* Safari */
      background-color: transparent;
      box-shadow: inset 1px 0 transparent, inset -1px 0 transparent,
        inset 0 -1px transparent;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      caret-color: var(--matter-helper-theme);
      transition: border 0.2s, box-shadow 0.2s;
    }

    .matter-textfield-outlined > input:not(:focus):placeholder-shown,
    .matter-textfield-outlined > textarea:not(:focus):placeholder-shown {
      border-top-color: var(--matter-helper-safari2);
    }

    /* Span */
    .matter-textfield-outlined > input + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      max-height: 100%;
      color: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.6);
      font-size: 75%;
      line-height: 15px;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    }

    .matter-textfield-outlined > input:not(:focus):placeholder-shown + span,
    .matter-textfield-outlined > textarea:not(:focus):placeholder-shown + span {
      font-size: inherit;
      line-height: 68px;
    }

    /* Corners */
    .matter-textfield-outlined > input + span::before,
    .matter-textfield-outlined > input + span::after {
      content: '';
      display: block;
      box-sizing: border-box;
      margin-top: 6px;
      border-top: solid 1px var(--matter-helper-safari2);
      min-width: 10px;
      height: 8px;
      pointer-events: none;
      box-shadow: inset 0 1px transparent;
      transition: border 0.2s, box-shadow 0.2s;
    }

    .matter-textfield-outlined > input + span::before {
      margin-right: 4px;
      border-left: solid 1px transparent;
      border-radius: 4px 0;
    }

    .matter-textfield-outlined > input + span::after {
      flex-grow: 1;
      margin-left: 4px;
      border-right: solid 1px transparent;
      border-radius: 0 4px;
    }

    .matter-textfield-outlined
      > input:not(:focus):placeholder-shown
      + span::before,
    .matter-textfield-outlined
      > input:not(:focus):placeholder-shown
      + span::after {
      border-top-color: transparent;
    }

    /* Hover */
    .matter-textfield-outlined:hover > input {
      border-color: transparent var(--matter-helper-safari3)
        var(--matter-helper-safari3);
    }

    .matter-textfield-outlined:hover > input + span::before,
    .matter-textfield-outlined:hover > input + span::after {
      border-top-color: var(--matter-helper-safari3);
    }

    .matter-textfield-outlined:hover > input:not(:focus):placeholder-shown {
      border-color: var(--matter-helper-safari3);
    }

    /* Focus */
    .matter-textfield-outlined > input:focus {
      border-color: transparent var(--matter-helper-theme)
        var(--matter-helper-theme);
      box-shadow: inset 1px 0 var(--matter-helper-theme),
        inset -1px 0 var(--matter-helper-theme),
        inset 0 -1px var(--matter-helper-theme);
      outline: none;
    }

    .matter-textfield-outlined > input:focus + span {
      color: var(--matter-helper-theme);
    }

    .matter-textfield-outlined > input:focus + span::before,
    .matter-textfield-outlined > input:focus + span::after {
      border-top-color: var(--matter-helper-theme) !important;
      box-shadow: inset 0 1px var(--matter-helper-theme);
    }

    /* Disabled */
    .matter-textfield-outlined > input:disabled,
    .matter-textfield-outlined > input:disabled + span {
      border-color: transparent var(--matter-helper-safari1)
        var(--matter-helper-safari1) !important;
      color: rgba(var(--matter-onsurface-rgb, 255, 255, 255), 0.38);
      pointer-events: none;
    }

    .matter-textfield-outlined > input:disabled + span::before,
    .matter-textfield-outlined > input:disabled + span::after {
      border-top-color: var(--matter-helper-safari1) !important;
    }

    .matter-textfield-outlined > input:disabled:placeholder-shown,
    .matter-textfield-outlined > input:disabled:placeholder-shown + span {
      border-top-color: var(--matter-helper-safari1) !important;
    }

    .matter-textfield-outlined
      > input:disabled:placeholder-shown
      + span::before,
    .matter-textfield-outlined
      > input:disabled:placeholder-shown
      + span::after {
      border-top-color: transparent !important;
    }

    .error > input:focus {
      border-color: red !important;
    }

    /* Faster transition in Safari for less noticable fractional font-size issue */
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        .matter-textfield-outlined > input,
        .matter-textfield-outlined
          > input
          + span
          .matter-textfield-outlined
          > input
          + span::before,
        .matter-textfield-outlined > input + span::after {
          transition-duration: 0.1s;
        }
      }
    }
  `;static get properties(){return{placeholder:{type:String},required:{type:Boolean},text:{type:String}}}updateText(t){X.dispatchEvent(this,"input-event",t.target.value)}render(){return k`
      <label class="matter-textfield-outlined">
        <input placeholder=" " @input=${this.updateText} />
        <span>${this.placeholder+(this.required?"*":"")}</span>
      </label>
    `}}customElements.define("input-field",Y);class tt extends Z{static styles=r`
    .btn {
      width: 203px;
      height: 40px;
      background-color: #059ce8;
      background-position: center;
      border-radius: 4px;
      border: none;
      color: white;
      cursor: pointer;
      font-family: Arial;
      font-size: 16px;
      outline: none;
      text-transform: uppercase;
      transition: background 0.8s;
    }
    .btn:hover {
      opacity: 0.8;
    }

    .btn:disabled {
      cursor: no-drop;
      background-color: gray;
    }
  `;static get properties(){return{text:{type:String},enabled:{type:Boolean}}}render(){return k`
      <button class="btn" .disabled="${!this.enabled}">${this.text}</button>
    `}}customElements.define("main-button",tt);const et="Join",it="Name",st="Rock",rt="Paper",nt="Scissors",ot="Machine",at="Thinking",lt="It's a tie!",ht="won!",dt="Playing",pt="Points",ct="Create or use an existing user",ut="Rock, Paper, Scissors Game",mt="Exit",ft="Choose an option",vt="base-game-",gt=[{name:st,enemy:rt,img:"assets/rock.png"},{name:rt,enemy:nt,img:"assets/paper.png"},{name:nt,enemy:st,img:"assets/scissors.png"}];class $t{static get(t){return JSON.parse(window.localStorage.getItem(`${vt}${t}`))}static set(t,e){window.localStorage.setItem(`${vt}${t}`,JSON.stringify(e))}}class bt{constructor(t){this.name=t,this.lastOptionSelected}setOptionSelected(t){this.lastOptionSelected=t}}class xt extends bt{constructor(t,e){super(t),this.points=e}save(){$t.set(this.name,this)}increasePoint(){this.points+=1,this.save()}}class yt extends bt{constructor(t,e){super(t),this.timeOut=e}async run(){const t=gt[Math.floor(Math.random()*gt.length)];return new Promise((e=>{setTimeout((()=>{e(t)}),this.timeOut)}))}}class _t{constructor(t,e){this.player1=t,this.player2=e,this.result}generateResult(){return this.player2.lastOptionSelected===this.player1.lastOptionSelected?this.result=lt:this.player2.lastOptionSelected.enemy.includes(this.player1.lastOptionSelected.name)?(this.result=this.player1.name+" "+ht,this.addPoint(this.player1)):this.result=this.player2.name+" "+ht,this.result}addPoint(t){t instanceof xt&&t.increasePoint()}}class At{static createUser(t){const e=$t.get(t)||{name:t,points:0};return new xt(e.name,e.points)}static createMachine(t,e){return new yt(t,e)}static createGame(t,e){return new _t(t,e)}}class wt extends Z{static styles=r`
    .center {
      margin: 0 auto;
      text-align: center;
    }

    .spacer {
      margin-top: 20px;
    }
    h3 {
      color: #ffffff;
      font-family: 'Roboto', sans-serif;
    }

    img {
      margin-top: 30px;
      max-width: 200px;
    }

    .bar {
      background-color: #ffffff;
      min-height: 60px;
      text-align: left;
      padding-top: 15px;
      padding-left: 15px;
      font-family: 'Roboto', sans-serif;
    }
  `;static get properties(){return{userName:{type:String}}}constructor(){super(),this.userName=""}parseInput(t){const e=t.detail.data;e&&e.match(/^[a-z0-9]+$/i)?this.userName=e:this.userName=""}startGame(){X.dispatchEvent(this,"set-user-event",At.createUser(this.userName))}render(){return k`
      <div class="center">
      <div class="bar"><h4>${ut}</h4></div>
        <img alt="${ut}" src="../../assets/rock-paper-scissors.png"/>
        <h3>${ct}</h3>
        <input-field
          placeholder="${it}"
          ?required="${!0}"
          @input-event="${this.parseInput}"
        ></input-field>
        <div class="spacer"></div>
        <main-button
          class="custom"
          text="${et}"
          .enabled=${""!==this.userName.trim()}
          @click="${this.startGame}"
        ></main-button>
      </div>
    `}}customElements.define("home-view",wt);class St extends Z{static styles=r`
    .img-component {
      max-width: 100px;
    }
    .img-component:hover {
      opacity: 0.7;
    }
    .container {
      border-width: 4px;
      border-color: black;
      border-style: solid;
      padding: 10px;
      flex-direction: column;
    }
    .container:hover {
      background-color: gray;
    }
  `;static get properties(){return{option:{type:Object}}}render(){return k` 
    <div class="container">
      <img class="img-component" src="${this.option.img}" alt="${this.option.name}" />
    </div>`}}customElements.define("image-option",St);class Et extends Z{static styles=r`
    .center {
      margin: 0 auto;
      text-align: center;
      color: #ffffff;
      font-size: 16pt;
    }
    .spacer {
      margin-top: 20px;
    }
    @keyframes rotator {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(36deg);
      }
      20% {
        transform: rotate(72deg);
      }
      30% {
        transform: rotate(108deg);
      }
      40% {
        transform: rotate(144deg);
      }
      50% {
        transform: rotate(180deg);
      }
      60% {
        transform: rotate(216deg);
      }
      70% {
        transform: rotate(252deg);
      }
      80% {
        transform: rotate(288deg);
      }
      90% {
        transform: rotate(324deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      display: none;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .loader-icon {
      width: 15px;
      height: 15px;
      padding: 15px;
      content: ' ';
      border-radius: 25%;
      border: 1px solid white;
      background-color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: rotator;
      animation-duration: 0.1s;
      animation-iteration-count: infinite;
    }
    
    .container-elements {
      display: flex;
      justify-content: center;
    }

    .bar {
      background-color: #ffffff;
      min-height: 60px;
      text-align: right;
    }

    .bar > img {
      max-width: 30px;
      margin-right: 15px;
      margin-top: 15px;
    }

    .bar > img:hover {
      opacity: 0.6;
    }
  `;static get properties(){return{user:{type:Object},userOptionSelected:{type:Object},machineOptionSelected:{type:Object},result:{type:String}}}async play(t){this.setVisibleLoader(!0),this.result=null,this.machineOptionSelected=null,this.userOptionSelected=t,this.user.setOptionSelected(t);const e=At.createMachine(ot,1200);this.machineOptionSelected=await e.run(),e.setOptionSelected(this.machineOptionSelected),this.setVisibleLoader(!1),this.result=At.createGame(this.user,e).generateResult()}getChoosenOptionsBlock(){return k` <p>
      ${this.user.name}: ${this.userOptionSelected.name} |
      ${ot}:
      ${this.machineOptionSelected?this.machineOptionSelected.name:"... "+at+" ..."}
    </p>`}setVisibleLoader(t){this.shadowRoot.getElementById("loader").style.display=t?"block":"none"}exit(){X.dispatchEvent(this,"exit-event",null)}render(){return k`
      <div id="loader" class="loader-overlay">
        <span class="loader-icon"> </span>
      </div>
      <div class="bar"><img alt="${mt}" src="../../assets/logout.png" @click="${this.exit}"/></div>
      <div class="center">
        <p>${dt}: ${this.user.name} | ${pt}: ${this.user.points}</p>
        <h6>${ft}</h6>
        <div class="container-elements">
          ${gt.map((t=>k`
                <div class="image-container">
                  <image-option
                    @click="${()=>this.play(t)}"
                    .option="${t}"
                  ></image-option>
                </div>
              `))}
        </div>
        <div class="spacer"></div>
        ${this.userOptionSelected?this.getChoosenOptionsBlock():k``}
        ${this.result?k`<h1>${this.result}</h1>`:k``}
      </div>
    `}}customElements.define("game-view",Et);class Ct extends Z{static styles=r`
    .container {
      min-width: 500px;
    }
  `;static get properties(){return{user:{type:Object}}}setUser(t){this.user=t.detail.data}render(){return k`
      <div class="container">
        ${this.user?k`<game-view
              .user="${this.user}"
              @exit-event="${this.setUser}"
            ></game-view>`:k`<home-view @set-user-event=${this.setUser}></home-view>`}
      </div>
    `}}customElements.define("environment-view",Ct)}();
//# sourceMappingURL=bundle.js.map
