!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){function n(e,t,n){var r,o,s,i,c;function a(){var u=Date.now()-i;u<t&&u>=0?r=setTimeout(a,t-u):(r=null,n||(c=e.apply(s,o),s=o=null))}null==t&&(t=100);var u=function(){s=this,o=arguments,i=Date.now();var u=n&&!r;return r||(r=setTimeout(a,t)),u&&(c=e.apply(s,o),s=o=null),c};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(c=e.apply(s,o),s=o=null,clearTimeout(r),r=null)},u}n.debounce=n,e.exports=n},function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(o=++r)}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(3)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(2))},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,u=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?u=a.concat(u):d=-1,u.length&&m())}function m(){if(!l){var e=c(f);l=!0;for(var t=u.length;t;){for(a=u,u=[];++d<t;)a&&a[d].run();d=-1,t=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function C(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=C,o.addListener=C,o.once=C,o.off=C,o.removeListener=C,o.removeAllListeners=C,o.emit=C,o.prependListener=C,o.prependOnceListener=C,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function i(...e){if(!i.enabled)return;const t=i,o=Number(new Date),s=o-(n||o);t.diff=s,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;c++;const s=r.formatters[o];if("function"==typeof s){const r=e[c];n=s.call(t,r),e.splice(c,1),c--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return i.namespace=e,i.enabled=r.enabled(e),i.useColors=r.useColors(),i.color=t(e),i.destroy=o,i.extend=s,"function"==typeof r.init&&r.init(i),r.instances.push(i),i}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function s(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(i),...r.skips.map(i).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(4),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},function(e,t){var n=1e3,r=60*n,o=60*r,s=24*o,i=7*s,c=365.25*s;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*c;case"weeks":case"week":case"w":return a*i;case"days":case"day":case"d":return a*s;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);if(t>=s)return a(e,t,s,"day");if(t>=o)return a(e,t,o,"hour");if(t>=r)return a(e,t,r,"minute");if(t>=n)return a(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=s)return Math.round(e/s)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){"use strict";n.r(t);var r=n(1);const o=(e,t)=>{if(e.parentNode){const n=e.parentNode.querySelectorAll("."+t.styles.settingsButton);Array.from(n).forEach(e=>e.classList.remove(t.styles.settingsButtonActive))}e.classList.add(t.styles.settingsButtonActive)},s=e=>{const t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),n.removeAllRanges(),n.addRange(t)},i=e=>{let t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();const i=document.createElement("div");i.innerHTML=e;for(var r,o,s=document.createDocumentFragment();r=i.firstChild;)o=s.appendChild(r);n.insertNode(s),o&&((n=n.cloneRange()).setStartAfter(o),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},c=function(e){if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")},a="cdx-mention",u="cdx-marker",l="inline-code",d="&nbsp;",f="inline_tmp_anchor",m="@",p=n.n(r)()("@groupher/editor-utils:markdown"),C="HEADER_1",g="HEADER_2",h="HEADER_3",y="UNORDERED_LIST",b="ORDERED_LIST",w="QUOTE",F="CODE",v={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},x=function(e){return{md:e[0],content:e[1],isValid:!0}},k=e=>{switch(e){case C:return{type:"header",toolData:{level:1},config:{}};case g:return{type:"header",toolData:{level:2},config:{}};case h:return{type:"header",toolData:{level:3},config:{}};case y:return{type:"list",toolData:{style:"unordered"},config:{}};case b:return{type:"list",toolData:{style:"ordered"},config:{}};case w:return{type:"quote",toolData:{},config:{}};case F:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},E=(e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n),{isValidMDStatus:o,MDType:s}=((e,t)=>{const n=e.textContent.trim();let r=!0,o="";const s=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:o};switch(!0){case"#"===n&&s:o=C;break;case"##"===n&&s:o=g;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&s:o=h;break;case"-"===n&&s:o=y;break;case"1"===n&&s:o=b;break;case">"===n&&s:o=w;break;case"```"===n:o=F;break;default:r=!1}return{isValidMDStatus:r,MDType:o}})(r,e.data);if(!o)return!1;const{isInvalid:i,type:c,toolData:a,config:u}=k(s);p("markdownBlockConfig(MDType) -> ",k(s)),i||(t.blocks.delete(n),t.blocks.insert(c,a,u,n),t.caret.setToBlock(n,"start"))},T=(e,t)=>{const n=t.blocks.getCurrentBlockIndex(),r=t.blocks.getBlockByIndex(n),{isValid:o,md:s,html:a}=((e,t)=>{const n=e.textContent.trim(),{BOLD:r,ITALIC:o,MARKER:s,INLINE_CODE:i}=v,c=n.match(r);if(c){const{isValid:e,md:t,content:n}=x(c);return{isValid:e,md:t,html:`<b>${n}</b>`}}const a=n.match(s);if(a){const{isValid:e,md:t,content:n}=x(a);return{isValid:e,md:t,html:`<mark class=${u}>${n}</mark>`}}const d=n.match(o);if(d){const{isValid:e,md:t,content:n}=x(d);return{isValid:e,md:t,html:`<i>${n}</i>`}}const f=n.match(i);if(f){const{isValid:e,md:t,content:n}=x(f);return{isValid:e,md:t,html:`<code class=${l}>${n}</code>`}}return{isValid:!1,text:""}})(r,e.data);if(o){i(`<span id="${f}" />`),e.target.innerHTML=e.target.innerHTML.replace(s,a),c(document.querySelector(`#${f}`)),document.querySelector(`#${f}`).remove(),i(d)}};var A=e=>{if(e.data===m){const e=`<span class="${a}" contenteditable="false" id="${a}" tabindex="1">&nbsp;</span>`,t=`#${a}`;i(e),i(d),i(d);const n=document.querySelector(t).parentElement;n.innerHTML=n.innerHTML.replace(m+e,e),c(document.querySelector(t))}},S=n(0),D=n.n(S);const R=function(e,t,n){let r=document.createElement("script");r.src=e,r.onload=t,r.onreadystatechange=t,n.appendChild(r)},M=(e,t=null,n={})=>{let r=document.createElement(e);Array.isArray(t)?r.classList.add(...t):t&&r.classList.add(t);for(let e in n)"placeholder"===e?r.setAttribute("placeholder",n[e]):0===e.indexOf("data-")?r.setAttribute(e,n[e]):r[e]=n[e];return r},L=e=>{for(var t in e)return!1;return!0},O=(e,t)=>{const{length:n}=e;let r=-1;for(;++r<n;)if(t(e[r],r,e))return r;return-1},I=(e,t,n={})=>{const r=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0},n);t.listeners.on(e,"input",e=>D()(((e,t,n)=>{n.markdown&&E(e,t),n.inlineMarkdown&&T(e,t),n.mention&&A(e)})(e,t,r),100),!0)};n.d(t,"debounce",function(){return S.debounce}),n.d(t,"loadJS",function(){return R}),n.d(t,"make",function(){return M}),n.d(t,"isEmptyObj",function(){return L}),n.d(t,"findIndex",function(){return O}),n.d(t,"highlightSettingIcon",function(){return o}),n.d(t,"moveCaretToEnd",function(){return s}),n.d(t,"selectNode",function(){return c}),n.d(t,"insertHtmlAtCaret",function(){return i}),n.d(t,"enhanceBlock",function(){return I})}])});