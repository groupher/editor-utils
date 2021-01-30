!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){function n(e,t,n){var r,o,i,s,c;function a(){var u=Date.now()-s;u<t&&u>=0?r=setTimeout(a,t-u):(r=null,n||(c=e.apply(i,o),i=o=null))}null==t&&(t=100);var u=function(){i=this,o=arguments,s=Date.now();var u=n&&!r;return r||(r=setTimeout(a,t)),u&&(c=e.apply(i,o),i=o=null),c};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},u}n.debounce=n,e.exports=n},function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(o=++r)}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(4)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(3))},function(e,t,n){(function(e){!function(n,r){"use strict";var o={};n.PubSub=o;var i=n.define;!function(e){var t={},n=-1;function r(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function o(e,t,n){try{e(t,n)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,t,n){e(t,n)}function s(e,n,r,s){var c,a=t[n],u=s?i:o;if(t.hasOwnProperty(n))for(c in a)a.hasOwnProperty(c)&&u(a[c],e,r)}function c(e,n,o,i){var c=function(e,t,n){return function(){var r=String(e),o=r.lastIndexOf(".");for(s(e,e,t,n);-1!==o;)r=r.substr(0,o),o=r.lastIndexOf("."),s(e,r,t,n)}}(e="symbol"==typeof e?e.toString():e,n,i),a=function(e){var n=String(e),o=Boolean(t.hasOwnProperty(n)&&r(t[n])),i=n.lastIndexOf(".");for(;!o&&-1!==i;)n=n.substr(0,i),i=n.lastIndexOf("."),o=Boolean(t.hasOwnProperty(n)&&r(t[n]));return o}(e);return!!a&&(!0===o?c():setTimeout(c,0),!0)}e.publish=function(t,n){return c(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return c(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!=typeof r)return!1;e="symbol"==typeof e?e.toString():e,t.hasOwnProperty(e)||(t[e]={});var o="uid_"+String(++n);return t[e][o]=r,o},e.subscribeOnce=function(t,n){var r=e.subscribe(t,function(){e.unsubscribe(r),n.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var n;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&delete t[n]},e.countSubscriptions=function(e){var n,r=0;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&r++;return r},e.getSubscriptions=function(e){var n,r=[];for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&r.push(n);return r},e.unsubscribe=function(n){var r,o,i,s="string"==typeof n&&(t.hasOwnProperty(n)||function(e){var n;for(n in t)if(t.hasOwnProperty(n)&&0===n.indexOf(e))return!0;return!1}(n)),c=!s&&"string"==typeof n,a="function"==typeof n,u=!1;if(!s){for(r in t)if(t.hasOwnProperty(r)){if(o=t[r],c&&o[n]){delete o[n],u=n;break}if(a)for(i in o)o.hasOwnProperty(i)&&o[i]===n&&(delete o[i],u=!0)}return u}e.clearSubscriptions(n)}}(o),"function"==typeof i&&i.amd?i(function(){return o}):(void 0!==e&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o)}("object"==typeof window&&window||this)}).call(this,n(6)(e))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,u=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?u=a.concat(u):d=-1,u.length&&m())}function m(){if(!l){var e=c(f);l=!0;for(var t=u.length;t;){for(a=u,u=[];++d<t;)a&&a[d].run();d=-1,t=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function s(...e){if(!s.enabled)return;const t=s,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;c++;const i=r.formatters[o];if("function"==typeof i){const r=e[c];n=i.call(t,r),e.splice(c,1),c--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return s.namespace=e,s.enabled=r.enabled(e),s.useColors=r.useColors(),s.color=t(e),s.destroy=o,s.extend=i,"function"==typeof r.init&&r.init(s),r.instances.push(s),s}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(s),...r.skips.map(s).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(5),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,s=7*i,c=365.25*i;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*c;case"weeks":case"week":case"w":return a*s;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return a(e,t,i,"day");if(t>=o)return a(e,t,o,"hour");if(t>=r)return a(e,t,r,"minute");if(t>=n)return a(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);const i="object"==typeof document&&null!==document,s="object"==typeof window&&null!==window&&window.self===window;if(()=>i&&s){let e;try{"undefined"!=typeof window&&(e=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}o.a.enable(e)}var c=(e,t="@editor/")=>o()(`${t}${e}`);const a={focusHolder:"focus-holder",mention:"cdx-mention",emoji:"cdx-emoji",editorInlineToolbarWrapper:"ce-inline-toolbar__toggler-and-button-wrapper",mentionContainer:"cdx-mention__container",emojiContainer:"cdx-emoji__container"},u={mention:"label",strike:"strike",lock:"addr",emoji:"i"},l="classList"in document.documentElement,d=e=>new RegExp("(^|\\s+)"+e+"(\\s+|$)"),f=(e,t)=>l?e.classList.contains(t):d(t).test(e.className),m=(e,t)=>{0!==t.trim().length&&(l?e.classList.add(t):f(e,t)||(e.className=e.className+" "+t))},p=(e,t)=>{0!==t.trim().length&&(l?e.classList.remove(t):e.className=e.className.replace(d(t)," "))};var g={has:f,add:m,remove:p,toggle:(e,t,n)=>{if(0===t.trim().length)return;let r;(r=void 0!==n?n?m:p:f(e,t)?p:m)(e,t)}};const h=c("utils/dom"),C=e=>e instanceof Element,y=(e,t=null,n={})=>{let r=document.createElement(e);Array.isArray(t)?r.classList.add(...t.filter(e=>!!e)):t&&r.classList.add(t);for(let e in n)"placeholder"===e?r.setAttribute("placeholder",n[e]):0===e.indexOf("data-")?r.setAttribute(e,n[e]):"for"===e?r.setAttribute("for",n[e]):r[e]=n[e];return r},b=(e,t=[])=>new Promise((n,r)=>{const o=document.createElement("script");o.setAttribute("src",e),o.addEventListener("load",()=>{n(t.map(e=>{const t=window[e];return void 0===t&&console.warn(`No external named '${e}' in window`),t}))}),o.addEventListener("error",r),document.body.appendChild(o)}),w=(e,t)=>{if(e.parentNode){const n=e.parentNode.querySelectorAll("."+t.styles.settingsButton);Array.from(n).forEach(e=>e.classList.remove(t.styles.settingsButtonActive))}e.classList.add(t.styles.settingsButtonActive)},v=e=>{if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var r=document.body.createTextRange();r.moveToElementText(e),r.collapse(!1),r.select()}},x=e=>{let t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();const s=document.createElement("div");s.innerHTML=e;for(var r,o,i=document.createDocumentFragment();r=s.firstChild;)o=i.appendChild(r);n.insertNode(i),o&&((n=n.cloneRange()).setStartAfter(o),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},E=function(e){if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")},F=(e,t)=>{const n=document.querySelector(`.${e}`);n&&(n.style.display=t)},k=(e,t)=>{const n=document.querySelector(`.${e}`);n&&n.remove()},S=(e,t=a.editorInlineToolbarWrapper)=>{F(t,"none"),"mention"===e?(h("keepCustomInlineToolOnly for mention"),F(a.mentionContainer,"block"),F(a.emojiContainer,"none")):"emoji"===e&&(h("keepCustomInlineToolOnly for emoji"),F(a.emojiContainer,"block"),F(a.mentionContainer,"none"))},T=(e=a.editorInlineToolbarWrapper)=>{h("restoreDefaultInlineTools: ",e),F(e,"flex"),F(a.mentionContainer,"none"),F(a.emojiContainer,"none")},O=(e,t,n="@")=>{""===t.value.trim()&&(e.replaceWith(""),x(n))},A=(e,t,n="@")=>{t&&(e.replaceWith(""),x(n))},R=(e,t,n)=>{e.replaceWith(t),n&&(n.tooltip.hide(),n.toolbar.close())},_=(e,t,n="block")=>{if(t[e].style.display!==n&&e>=0){for(let e=0;e<t.length;e+=1){t[e].style.display="none"}setTimeout(()=>{t[e].style.display=n})}},I=e=>{for(let t=0;t<e.length;t+=1){e[t].style.display="none"}},j="cdx-mention",L="cdx-marker",D="inline-code",P="cdx-emoji",N="&nbsp;",$="inline_tmp_anchor",M="@",B=":",z=c("utils:markdown"),V="HEADER_1",H="HEADER_2",q="HEADER_3",W="UNORDERED_LIST",U="ORDERED_LIST",K="QUOTE",G="CODE",J={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},Z=function(e){return{md:e[0],content:e[1],isValid:!0}},X=e=>{switch(e){case V:return{type:"header",toolData:{level:1},config:{}};case H:return{type:"header",toolData:{level:2},config:{}};case q:return{type:"header",toolData:{level:3},config:{}};case W:return{type:"list",toolData:{style:"unordered"},config:{}};case U:return{type:"list",toolData:{style:"ordered"},config:{}};case K:return{type:"quote",toolData:{},config:{}};case G:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},Q=(e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);if(n<0||!r)return!1;const{isValidMDStatus:o,MDType:i}=((e,t)=>{const n=e.holder.textContent.trim();let r=!0,o="";const i=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===n&&i:o=V;break;case"##"===n&&i:o=H;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&i:o=q;break;case"-"===n&&i:o=W;break;case"1"===n&&i:o=U;break;case">"===n&&i:o=K;break;case"```"===n:o=G;break;default:r=!1}return{isValidMDStatus:r,MDType:o}})(r,e.data);if(!o)return!1;const{isInvalid:s,type:c,toolData:a,config:u}=X(i);z("_markdownBlockConfig: ",X(i)),s||(t.blocks.delete(n),t.blocks.insert(c,a,u,n),t.caret.setToBlock(n,"start"))},Y=(e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);if(n<0||!r)return!1;const{isValid:o,md:i,html:s}=((e,t)=>{const n=e.holder.textContent.trim(),{BOLD:r,ITALIC:o,MARKER:i,INLINE_CODE:s}=J,c=n.match(r);if(c){const{isValid:e,md:t,content:n}=Z(c);return{isValid:e,md:t,html:`<b>${n}</b>`}}const a=n.match(i);if(a){const{isValid:e,md:t,content:n}=Z(a);return{isValid:e,md:t,html:`<mark class=${L}>${n}</mark>`}}const u=n.match(o);if(u){const{isValid:e,md:t,content:n}=Z(u);return{isValid:e,md:t,html:`<i>${n}</i>`}}const l=n.match(s);if(l){const{isValid:e,md:t,content:n}=Z(l);return{isValid:e,md:t,html:`<code class=${D}>${n}</code>`}}return{isValid:!1,text:""}})(r,e.data);if(o){x(`<span id="${$}" />`),e.target.innerHTML=e.target.innerHTML.replace(i,s),E(document.querySelector(`#${$}`)),document.querySelector(`#${$}`).remove(),x(N)}},ee=c("utils/emoji");var te=e=>{if(e.data===M){const e=`<${u.mention} data-sign="@" class="${j}" contenteditable="false" id="${j}" tabindex="1">&nbsp;</${u.mention}>`,t=`#${j}`;x(e);const n=document.querySelector(t).parentElement;ee("mentionParent: ",n),n.innerHTML=n.innerHTML.replace(M+e,e),ee("selectNode mentionId: ",t),E(document.querySelector(t))}};const ne=c("utils/emoji");var re=e=>{if(e.data===B){ne("handleEmoji: ",e.data);const t=`<${u.emoji} class="${P}" contenteditable="false" id="${P}" tabindex="1">&nbsp;</${u.emoji}>`,n=`#${P}`;x(t);const r=document.querySelector(n).parentElement;r.innerHTML=r.innerHTML.replace(B+t,t),E(document.querySelector(n))}};c("utils:linkCard");const oe=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");var ie=(e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n);return!(n<0||!r)&&!!((e,t)=>{const n=e.holder.textContent.trim(),r=" "===t;return!(!oe.test(n)||!r)})(r,e.data)&&(t.blocks.delete(n),t.blocks.insert("linkCard",{link:"https://codex.so",meta:{title:"CodeX Team",site_name:"CodeX",description:"Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",image:{url:"https://codex.so/public/app/img/meta_img.png"}}},{},n),void t.caret.setToBlock(n,"start"))},se=n(0),ce=n.n(se);const ae=function(e,t,n){let r=document.createElement("script");r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},ue=function(e,t,n){let r=document.createElement("link");r.rel="stylesheet",r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},le=e=>{for(var t in e)return!1;return!0},de=(e,t)=>{const{length:n}=e;let r=-1;for(;++r<n;)if(t(e[r],r,e))return r;return-1},fe=(e,t,n)=>{const r=e.splice(t,1)[0];e.splice(n,0,r)},me=(e,t,n)=>{const r=e[t];e[t]=e[n],e[n]=r},pe=e=>"string"==typeof e||e instanceof String,ge=e=>{let t=0;for(let n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<256?1:2;return t},he=(e,t=20)=>pe(e)?t>=ge(e)?e:`${e.slice(0,t)}...`:"??...",Ce=e=>{const t=/^[a-zA-Z0-9,.:;!#$%&(){}=/<>\[\]`@+\|\*\?\s\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]$/;for(let n=0,r=e.length;n<r;n++)if(!t.test(e[n]))return!1;return!0},ye=c("utils:enhancer"),be=(e,t,n)=>{n.markdown&&Q(e,t),n.inlineMarkdown&&Y(e,t),n.mention&&te(e),n.emoji&&re(e),n.linkCard&&ie(e,t)},we=(e,t,n={})=>{const r=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0,linkCard:!1},n);t.listeners.on(e,"input",e=>ce()(be(e,t,r),100))},ve=(e,t)=>{t.listeners.off(e,"input",n=>be(e,t),!1),t.listeners.off(e,"keyup",e=>(e=>{if("Backspace"===e.code||"Delete"===e.code)if(window.getSelection){let e=window.getSelection();e.anchorNode.parentNode.className===j&&e.anchorNode.parentNode.remove()}else ye("window Selection is not supported.")})(e),!1)};var xe=n(2),Ee=n.n(xe);const Fe=()=>(window.PubSub||(window.PubSub=Ee.a),window.PubSub),ke={KEEP_PARAGRAPH_AFTER_REMOVED:"KEEP_PARAGRAPH_AFTER_REMOVED"},Se=e=>{return!!new RegExp("^(https:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)};n.d(t,"debounce",function(){return se.debounce}),n.d(t,"loadJS",function(){return ae}),n.d(t,"loadCSS",function(){return ue}),n.d(t,"isEmptyObj",function(){return le}),n.d(t,"findIndex",function(){return de}),n.d(t,"insertAndShift",function(){return fe}),n.d(t,"swapArrayItems",function(){return me}),n.d(t,"isString",function(){return pe}),n.d(t,"cutFrom",function(){return he}),n.d(t,"strLen",function(){return ge}),n.d(t,"isLatinString",function(){return Ce}),n.d(t,"isDOM",function(){return C}),n.d(t,"make",function(){return y}),n.d(t,"showElement",function(){return _}),n.d(t,"hideElements",function(){return I}),n.d(t,"replaceEl",function(){return R}),n.d(t,"clazz",function(){return g}),n.d(t,"importScript",function(){return b}),n.d(t,"highlightSettingIcon",function(){return w}),n.d(t,"moveCaretToEnd",function(){return v}),n.d(t,"selectNode",function(){return E}),n.d(t,"insertHtmlAtCaret",function(){return x}),n.d(t,"keepCustomInlineToolOnly",function(){return S}),n.d(t,"restoreDefaultInlineTools",function(){return T}),n.d(t,"removeElementByClass",function(){return k}),n.d(t,"convertElementToTextIfNeed",function(){return O}),n.d(t,"convertElementToText",function(){return A}),n.d(t,"enhanceBlock",function(){return we}),n.d(t,"freeEnhanceBlock",function(){return ve}),n.d(t,"buildLog",function(){return c}),n.d(t,"initEventBus",function(){return Fe}),n.d(t,"EVENTS",function(){return ke}),n.d(t,"CSS",function(){return a}),n.d(t,"INLINE_BLOCK_TAG",function(){return u}),n.d(t,"isValidURL",function(){return Se})}])});