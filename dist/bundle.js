!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n){function t(e,n,t){var r,o,i,s,c;function a(){var u=Date.now()-s;u<n&&u>=0?r=setTimeout(a,n-u):(r=null,t||(c=e.apply(i,o),i=o=null))}null==n&&(n=100);var u=function(){i=this,o=arguments,s=Date.now();var u=t&&!r;return r||(r=setTimeout(a,n)),u&&(c=e.apply(i,o),i=o=null),c};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},u}t.debounce=t,e.exports=t},function(e,n,t){(function(r){n.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;n.splice(1,0,t,"color: inherit");let r=0,o=0;n[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(o=++r)}),n.splice(o,0,t)},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},n.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage=function(){try{return localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=t(4)(n);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,t(3))},function(e,n,t){(function(e){!function(t,r){"use strict";var o={};t.PubSub=o;var i=t.define;!function(e){var n={},t=-1;function r(e){var n;for(n in e)if(e.hasOwnProperty(n))return!0;return!1}function o(e,n,t){try{e(n,t)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,n,t){e(n,t)}function s(e,t,r,s){var c,a=n[t],u=s?i:o;if(n.hasOwnProperty(t))for(c in a)a.hasOwnProperty(c)&&u(a[c],e,r)}function c(e,t,o,i){var c=function(e,n,t){return function(){var r=String(e),o=r.lastIndexOf(".");for(s(e,e,n,t);-1!==o;)r=r.substr(0,o),o=r.lastIndexOf("."),s(e,r,n,t)}}(e="symbol"==typeof e?e.toString():e,t,i),a=function(e){var t=String(e),o=Boolean(n.hasOwnProperty(t)&&r(n[t])),i=t.lastIndexOf(".");for(;!o&&-1!==i;)t=t.substr(0,i),i=t.lastIndexOf("."),o=Boolean(n.hasOwnProperty(t)&&r(n[t]));return o}(e);return!!a&&(!0===o?c():setTimeout(c,0),!0)}e.publish=function(n,t){return c(n,t,!1,e.immediateExceptions)},e.publishSync=function(n,t){return c(n,t,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!=typeof r)return!1;e="symbol"==typeof e?e.toString():e,n.hasOwnProperty(e)||(n[e]={});var o="uid_"+String(++t);return n[e][o]=r,o},e.subscribeOnce=function(n,t){var r=e.subscribe(n,function(){e.unsubscribe(r),t.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){n={}},e.clearSubscriptions=function(e){var t;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&delete n[t]},e.countSubscriptions=function(e){var t,r=0;for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&r++;return r},e.getSubscriptions=function(e){var t,r=[];for(t in n)n.hasOwnProperty(t)&&0===t.indexOf(e)&&r.push(t);return r},e.unsubscribe=function(t){var r,o,i,s="string"==typeof t&&(n.hasOwnProperty(t)||function(e){var t;for(t in n)if(n.hasOwnProperty(t)&&0===t.indexOf(e))return!0;return!1}(t)),c=!s&&"string"==typeof t,a="function"==typeof t,u=!1;if(!s){for(r in n)if(n.hasOwnProperty(r)){if(o=n[r],c&&o[t]){delete o[t],u=t;break}if(a)for(i in o)o.hasOwnProperty(i)&&o[i]===t&&(delete o[i],u=!0)}return u}e.clearSubscriptions(t)}}(o),"function"==typeof i&&i.amd?i(function(){return o}):(void 0!==e&&e.exports&&(n=e.exports=o),n.PubSub=o,e.exports=n=o)}("object"==typeof window&&window||this)}).call(this,t(6)(e))},function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,u=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?u=a.concat(u):d=-1,u.length&&m())}function m(){if(!l){var e=c(f);l=!0;for(var n=u.length;n;){for(a=u,u=[];++d<n;)a&&a[d].run();d=-1,n=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function g(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new p(e,n)),1!==u.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,n,t){e.exports=function(e){function n(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return r.colors[Math.abs(n)%r.colors.length]}function r(e){let t;function s(...e){if(!s.enabled)return;const n=s,o=Number(new Date),i=o-(t||o);n.diff=i,n.prev=t,n.curr=o,t=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,o)=>{if("%%"===t)return t;c++;const i=r.formatters[o];if("function"==typeof i){const r=e[c];t=i.call(n,r),e.splice(c,1),c--}return t}),r.formatArgs.call(n,e),(n.log||r.log).apply(n,e)}return s.namespace=e,s.enabled=r.enabled(e),s.useColors=r.useColors(),s.color=n(e),s.destroy=o,s.extend=i,"function"==typeof r.init&&r.init(s),r.instances.push(s),s}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,n){const t=r(this.namespace+(void 0===n?":":n)+e);return t.log=this.log,t}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(s),...r.skips.map(s).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let n;r.save(e),r.names=[],r.skips=[];const t=("string"==typeof e?e:"").split(/[\s,]+/),o=t.length;for(n=0;n<o;n++)t[n]&&("-"===(e=t[n].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(n=0;n<r.instances.length;n++){const e=r.instances[n];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let n,t;for(n=0,t=r.skips.length;n<t;n++)if(r.skips[n].test(e))return!1;for(n=0,t=r.names.length;n<t;n++)if(r.names[n].test(e))return!0;return!1},r.humanize=t(5),Object.keys(e).forEach(n=>{r[n]=e[n]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=n,r.enable(r.load()),r}},function(e,n){var t=1e3,r=60*t,o=60*r,i=24*o,s=7*i,c=365.25*i;function a(e,n,t,r){var o=n>=1.5*t;return Math.round(e/t)+" "+r+(o?"s":"")}e.exports=function(e,n){n=n||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var n=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!n)return;var a=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*c;case"weeks":case"week":case"w":return a*s;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&!1===isNaN(e))return n.long?function(e){var n=Math.abs(e);if(n>=i)return a(e,n,i,"day");if(n>=o)return a(e,n,o,"hour");if(n>=r)return a(e,n,r,"minute");if(n>=t)return a(e,n,t,"second");return e+" ms"}(e):function(e){var n=Math.abs(e);if(n>=i)return Math.round(e/i)+"d";if(n>=o)return Math.round(e/o)+"h";if(n>=r)return Math.round(e/r)+"m";if(n>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r);const i="object"==typeof document&&null!==document,s="object"==typeof window&&null!==window&&window.self===window;if(()=>i&&s){let e;try{"undefined"!=typeof window&&(e=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}o.a.enable(e)}var c=(e,n="@editor/")=>o()(`${n}${e}`);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */const a="classList"in document.documentElement,u=e=>new RegExp("(^|\\s+)"+e+"(\\s+|$)"),l=(e,n)=>a?e.classList.contains(n):u(n).test(e.className),d=(e,n)=>{a?e.classList.add(n):l(e,n)||(e.className=e.className+" "+n)},f=(e,n)=>{a?e.classList.remove(n):e.className=e.className.replace(u(n)," ")};var m={has:l,add:d,remove:f,toggle:(e,n)=>{(l(e,n)?f:d)(e,n)}};const p=c("utils/dom"),g=(e,n=[])=>new Promise((t,r)=>{const o=document.createElement("script");o.setAttribute("src",e),o.addEventListener("load",()=>{t(n.map(e=>{const n=window[e];return void 0===n&&console.warn(`No external named '${e}' in window`),n}))}),o.addEventListener("error",r),document.body.appendChild(o)}),h=(e,n)=>{if(e.parentNode){const t=e.parentNode.querySelectorAll("."+n.styles.settingsButton);Array.from(t).forEach(e=>e.classList.remove(n.styles.settingsButtonActive))}e.classList.add(n.styles.settingsButtonActive)},C=e=>{if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(e),n.collapse(!1);var t=window.getSelection();t.removeAllRanges(),t.addRange(n)}else if(void 0!==document.body.createTextRange){var r=document.body.createTextRange();r.moveToElementText(e),r.collapse(!1),r.select()}},y=e=>{let n,t;if(window.getSelection&&(n=window.getSelection()).getRangeAt&&n.rangeCount){(t=n.getRangeAt(0)).deleteContents();const s=document.createElement("div");s.innerHTML=e;for(var r,o,i=document.createDocumentFragment();r=s.firstChild;)o=i.appendChild(r);t.insertNode(i),o&&((t=t.cloneRange()).setStartAfter(o),t.collapse(!0),n.removeAllRanges(),n.addRange(t))}},b=function(e){if(document.body.createTextRange){const n=document.body.createTextRange();n.moveToElementText(e),n.select()}else if(window.getSelection){const n=window.getSelection(),t=document.createRange();t.selectNodeContents(e),n.removeAllRanges(),n.addRange(t)}else console.warn("Could not select text in node: Unsupported browser.")},w=(e,n)=>{const t=document.querySelector(`.${e}`);t&&(t.style.display=n)},v=(e,n)=>{const t=document.querySelector(`.${e}`);t&&t.remove()},x=(e,n="ce-inline-toolbar__buttons")=>{p("keepCustomInlineToolOnly: ",e),w(n,"none"),"mention"===e&&(w("cdx-mention__container","block"),w("cdx-emoji__container","none")),"emoji"===e&&(w("cdx-emoji__container","block"),w("cdx-mention__container","none"))},F=(e="ce-inline-toolbar__buttons")=>{p("restoreDefaultInlineTools: "),w(e,"block"),w("cdx-mention__container","none"),w("cdx-emoji__container","none")},E=(e,n,t="@")=>{""===n.value.trim()&&(e.replaceWith(""),y(t))},S="cdx-mention",T="cdx-marker",k="inline-code",O="cdx-emoji",A="&nbsp;",_="inline_tmp_anchor",R="@",D=":",j=c("utils:markdown"),L="HEADER_1",P="HEADER_2",I="HEADER_3",M="UNORDERED_LIST",N="ORDERED_LIST",$="QUOTE",B="CODE",V={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},H=function(e){return{md:e[0],content:e[1],isValid:!0}},q=e=>{switch(e){case L:return{type:"header",toolData:{level:1},config:{}};case P:return{type:"header",toolData:{level:2},config:{}};case I:return{type:"header",toolData:{level:3},config:{}};case M:return{type:"list",toolData:{style:"unordered"},config:{}};case N:return{type:"list",toolData:{style:"ordered"},config:{}};case $:return{type:"quote",toolData:{},config:{}};case B:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},z=(e,n)=>{const t=n.blocks.getCurrentBlockIndex(),r=n.blocks.getBlockByIndex(t),{isValidMDStatus:o,MDType:i}=((e,n)=>{const t=e.textContent.trim();let r=!0,o="";const i=" "===n;if(t.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===t&&i:o=L;break;case"##"===t&&i:o=P;break;case("###"===t||"####"===t||"#####"===t||"######"===t)&&i:o=I;break;case"-"===t&&i:o=M;break;case"1"===t&&i:o=N;break;case">"===t&&i:o=$;break;case"```"===t:o=B;break;default:r=!1}return{isValidMDStatus:r,MDType:o}})(r,e.data);if(!o)return!1;const{isInvalid:s,type:c,toolData:a,config:u}=q(i);j("markdownBlockConfig(MDType) -> ",q(i)),s||(n.blocks.delete(t),n.blocks.insert(c,a,u,t),n.caret.setToBlock(t,"start"))},K=(e,n)=>{const t=n.blocks.getCurrentBlockIndex(),r=n.blocks.getBlockByIndex(t),{isValid:o,md:i,html:s}=((e,n)=>{const t=e.textContent.trim(),{BOLD:r,ITALIC:o,MARKER:i,INLINE_CODE:s}=V,c=t.match(r);if(c){const{isValid:e,md:n,content:t}=H(c);return{isValid:e,md:n,html:`<b>${t}</b>`}}const a=t.match(i);if(a){const{isValid:e,md:n,content:t}=H(a);return{isValid:e,md:n,html:`<mark class=${T}>${t}</mark>`}}const u=t.match(o);if(u){const{isValid:e,md:n,content:t}=H(u);return{isValid:e,md:n,html:`<i>${t}</i>`}}const l=t.match(s);if(l){const{isValid:e,md:n,content:t}=H(l);return{isValid:e,md:n,html:`<code class=${k}>${t}</code>`}}return{isValid:!1,text:""}})(r,e.data);if(o){y(`<span id="${_}" />`),e.target.innerHTML=e.target.innerHTML.replace(i,s),b(document.querySelector(`#${_}`)),document.querySelector(`#${_}`).remove(),y(A)}},U={focusHolder:"focus-holder",mention:"cdx-mention",emoji:"cdx-emoji"},G={mention:"label",strike:"strike",lock:"addr",emoji:"i"},J=c("utils/emoji");var W=e=>{if(J("handleMention: ",e.data),e.data===R){const e=`<${G.mention} class="${S}" contenteditable="false" id="${S}" tabindex="1">&nbsp;</${G.mention}>`,n=`#${S}`;y(e);const t=document.querySelector(n).parentElement;t.innerHTML=t.innerHTML.replace(R+e,e),b(document.querySelector(n))}};const Z=c("utils/emoji");var Q=e=>{if(Z("handleEmoji: ",e.data),e.data===D){const e=`<${G.emoji} class="${O}" contenteditable="false" id="${O}" tabindex="1">&nbsp;</${G.emoji}>`,n=`#${O}`;y(e);const t=document.querySelector(n).parentElement;t.innerHTML=t.innerHTML.replace(D+e,e),b(document.querySelector(n))}},X=t(0),Y=t.n(X);const ee=function(e,n,t){let r=document.createElement("script");r.src=e,r.onload=n,r.onreadystatechange=n,t.appendChild(r)},ne=(e,n=null,t={})=>{let r=document.createElement(e);Array.isArray(n)?r.classList.add(...n):n&&r.classList.add(n);for(let e in t)"placeholder"===e?r.setAttribute("placeholder",t[e]):0===e.indexOf("data-")?r.setAttribute(e,t[e]):r[e]=t[e];return r},te=e=>{for(var n in e)return!1;return!0},re=(e,n)=>{const{length:t}=e;let r=-1;for(;++r<t;)if(n(e[r],r,e))return r;return-1},oe=c("utils:enhancer"),ie=(e,n,t)=>{t.markdown&&z(e,n),t.inlineMarkdown&&K(e,n),t.mention&&W(e),t.emoji&&Q(e)},se=e=>{if("Backspace"===e.code||"Delete"===e.code)if(window.getSelection){let e=window.getSelection();e.anchorNode.parentNode.className===S&&e.anchorNode.parentNode.remove()}else oe("window Selection is not supported.")},ce=(e,n,t={})=>{const r=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0},t);n.listeners.on(e,"input",e=>Y()(ie(e,n,r),100),!1),n.listeners.on(e,"keyup",e=>se(e),!1)},ae=(e,n)=>{n.listeners.off(e,"input",t=>ie(e,n),!1),n.listeners.off(e,"keyup",e=>se(e),!1)};var ue=t(2),le=t.n(ue);const de=()=>(window.PubSub||(window.PubSub=le.a),window.PubSub),fe={KEEP_PARAGRAPH_AFTER_REMOVED:"KEEP_PARAGRAPH_AFTER_REMOVED"};t.d(n,"debounce",function(){return X.debounce}),t.d(n,"loadJS",function(){return ee}),t.d(n,"make",function(){return ne}),t.d(n,"isEmptyObj",function(){return te}),t.d(n,"findIndex",function(){return re}),t.d(n,"clazz",function(){return m}),t.d(n,"importScript",function(){return g}),t.d(n,"highlightSettingIcon",function(){return h}),t.d(n,"moveCaretToEnd",function(){return C}),t.d(n,"selectNode",function(){return b}),t.d(n,"insertHtmlAtCaret",function(){return y}),t.d(n,"keepCustomInlineToolOnly",function(){return x}),t.d(n,"restoreDefaultInlineTools",function(){return F}),t.d(n,"removeElementByClass",function(){return v}),t.d(n,"convertElementToTextIfNeed",function(){return E}),t.d(n,"enhanceBlock",function(){return ce}),t.d(n,"freeEnhanceBlock",function(){return ae}),t.d(n,"buildLog",function(){return c}),t.d(n,"initEventBus",function(){return de}),t.d(n,"EVENTS",function(){return fe}),t.d(n,"CSS",function(){return U}),t.d(n,"INLINE_BLOCK_TAG",function(){return G})}])});