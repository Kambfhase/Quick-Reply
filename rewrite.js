// ==UserScript==
// @name        Quick-Reply by Kambfhase
// @author      Kambfhase
// @description ein Quick-Reply Script fuer mods.de
// @version     2.7.3
// @include     http://forum.mods.de/bb/thread.php?*
// @include     http://forum.mods.de/bb//thread.php?*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_log
// ==/UserScript==

var window = unsafeWindow;
/*! jQuery v2.0.3 -wrap,-effects,-offset,-dimensions,-deprecated | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,a=o.documentElement,s=e.jQuery,u=e.$,l={},c=[],p="2.0.3 -wrap,-effects,-offset,-dimensions,-deprecated",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/^-ms-/,k=/-([\da-z])/gi,S=function(e,t){return t.toUpperCase()},j=function(){o.removeEventListener("DOMContentLoaded",j,!1),e.removeEventListener("load",j,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[1]||{},s=2),"object"==typeof a||x.isFunction(a)||(a={}),u===s&&(a=this,--s);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},a[t]=x.extend(l,o,r)):r!==undefined&&(a[t]=r));return a},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=s),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(N,"ms-").replace(k,S)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=E(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?x.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=E(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(t||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(s in n)x.access(e,t,s,n[s],!0,o,a)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",j,!1),e.addEventListener("load",j,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function E(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),N=at(),k=at(),S=!1,j=function(e,t){return e===t?(S=!0,0):0},E=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,O=L.push,q=L.push,P=L.slice,R=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=$.replace("w","w#"),B="\\["+F+"*("+$+")"+F+"*(?:([*^$|!~]?=)"+F+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+F+"*\\]",I=":("+$+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),_=RegExp("^"+F+"*,"+F+"*"),X=RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),U=RegExp(F+"*[+~]"),V=RegExp("="+F+"*([^\\]'\"]*)"+F+"*\\]","g"),G=RegExp(I),Y=RegExp("^"+W+"$"),J={ID:RegExp("^#("+$+")"),CLASS:RegExp("^\\.("+$+")"),TAG:RegExp("^("+$.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:RegExp("^(?:"+M+")$","i"),needsContext:RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{q.apply(L=P.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){q={apply:L.length?function(e,t){O.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,a,s,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(d&&!i){if(o=K.exec(e))if(s=o[1]){if(9===u){if(a=t.getElementById(s),!a||!a.parentNode)return r;if(a.id===s)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&y(t,a)&&a.id===s)return r.push(a),r}else{if(o[2])return q.apply(r,t.getElementsByTagName(e)),r;if((s=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&(!h||!h.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return q.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return Nt(e.replace(z,"$1"),t,r,i)}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function st(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function dt(e){return st(function(t){return t=+t,st(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}a=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,d=!a(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==E&&d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==E&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==E?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==E&&d?t.getElementsByClassName(e):undefined},g=[],h=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+F+"*(?:value|"+M+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),h=h.length&&RegExp(h.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=f.compareDocumentPosition?function(e,r){if(e===r)return S=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?R.call(l,e)-R.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,s=[e],u=[n];if(e===n)return S=!0,0;if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:l?R.call(l,e)-R.call(l,n):0;if(o===a)return ct(e,n);r=e;while(r=r.parentNode)s.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(s[i]===u[i])i++;return i?ct(s[i],u[i]):s[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(V,"='$1']"),!(!n.matchesSelector||!d||g&&g.test(t)||h&&h.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!d):undefined;return o===undefined?n.attributes||!d?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(S=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(j),S){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:st,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&G.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==E&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),x=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&x){c=m[v]||(m[v]={}),l=c[e]||[],d=l[0]===w&&l[1],f=l[0]===w&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,d,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=R.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:st(function(e){var t=[],n=[],r=s(e.replace(z,"$1"));return r[v]?st(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:st(function(e){return function(t){return ot(e,t).length>0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:st(function(e){return Y.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[0>n?n+t:n]}),even:dt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:dt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:dt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function ht(){}ht.prototype=i.filters=i.pseudos,i.setFilters=new ht;function gt(e,t){var n,r,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=_.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=X.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in i.filter)!(r=J[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ot.error(e):N(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=w+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),st(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||Ct(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=xt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?R.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):q.apply(a,y)})}function wt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,c=yt(function(e){return e===t},s,!0),p=yt(function(e){return R.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,l,c,f,d){var h,g,m,y=[],v=0,x="0",b=s&&[],T=null!=d,C=u,N=s||a&&i.find.TAG("*",d&&l.parentNode||l),k=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(h=N[x]);x++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){f.push(h);break}T&&(w=k,r=++n)}o&&((h=!m&&h)&&v--,s&&b.push(h))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(s){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=xt(y)}q.apply(f,y),T&&!s&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=k,u=C),b};return o?st(s):s}s=ot.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=k(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function Nt(e,t,r,o){var a,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&d&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}a=J.needsContext.test(e)?0:u.length;while(a--){if(l=u[a],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(a,1),e=o.length&&mt(u),!e)return q.apply(r,o),r;break}}}return s(e,f)(o,t,!d,r,U.test(e)),r}n.sortStable=v.split("").sort(j).join("")===v,n.detectDuplicates=S,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(M,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&o>a;a++)if(s[a].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&l(u.shift()):t?s=[]:c.disable())},c={add:function(){if(s){var n=s.length;(function a(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})})(arguments),r?o=s.length:t&&(i=n,l(t))}return this},remove:function(){return s&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,s,n))>-1)s.splice(n,1),r&&(o>=n&&o--,a>=n&&a--)}),this},has:function(e){return e?x.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=undefined,this},disabled:function(){return!s},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!s||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),a=o.createElement("select"),s=a.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=s.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,a.disabled=!0,t.optDisabled=!s.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,a="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",s=o.getElementsByTagName("body")[0];s&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(s,null!=s.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=a,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var L,H,O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,q=/([A-Z])/g;function P(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}P.uid=1,P.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},P.prototype={key:function(e){if(!P.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=P.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(w)||[])),n=r.length;while(n--)delete a[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new P,H=new P,x.extend({acceptData:P.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,a=null;if(e===undefined){if(this.length&&(a=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),R(i,r,a[r]));H.set(i,"hasDataAttrs",!0)}return a}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=R(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function R(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(q,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:O.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(a--)n=H.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var M,F,$=/[\t\r\n\f]/g,W=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace($," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),a=e.match(w)||[];while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace($," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace(W,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===r?x.prop(e,t,n):(1===a&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?F:M)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),F={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function V(){return!1}function G(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var a,s,u,l,c,p,f,d,h,g,m,y=H.get(e);if(y){n.handler&&(a=n,n=a.handler,o=a.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(s.elem,arguments)},s.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(f=x.event.special[h]||{},h=(o?f.delegateType:f.bindType)||h,f=x.event.special[h]||{},p=x.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,f.setup&&f.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),x.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=X.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));a&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)x.event.remove(e,d+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var a,s,u,l,c,p,f,d=[r||o],h=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(s=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(h+x.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,t=t[x.expando]?t:new x.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[h]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||h,_.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||o)&&d.push(u.defaultView||u.parentWindow||e)}a=0;while((s=d[a++])&&!t.isPropagationStopped())t.type=a>1?l:f.bindType||h,p=(H.get(s,"events")||{})[t.type]&&H.get(s,"handle"),p&&p.apply(s,n),p=c&&s[c],p&&x.acceptData(s)&&p.apply&&p.apply(s,n)===!1&&t.preventDefault();return t.type=h,i||t.isDefaultPrevented()||f._default&&f._default.apply(d.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[h])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=h,r[h](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,a=[],s=h.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){a=x.event.handlers.call(this,e,u),t=0;while((i=a[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return t.length>s&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,a=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||a===undefined||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==G()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===G()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:V):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:V,isPropagationStopped:V,isImmediatePropagationStopped:V,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=V;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=V),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var Y=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(Y.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,at=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&ht(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,a,s,u,l=0,c=this.length,p=this,d=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&at.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),a=o.length;c>l;l++)s=r,l!==d&&(s=x.clone(s,!0,!0),a&&x.merge(o,mt(s,"script"))),t.call(this[l],s,l);if(a)for(u=o[o.length-1].ownerDocument,x.map(o,dt),l=0;a>l;l++)s=o[l],st.test(s.type||"")&&!H.access(s,"globalEval")&&x.contains(u,s)&&(s.src?x._evalUrl(s.src):x.globalEval(s.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,a=0;for(;o>=a;a++)n=a===o?this:this.clone(!0),x(i[a])[t](n),d.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(a=mt(s),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],a[r]);if(t)if(n)for(o=o||mt(e),a=a||mt(s),r=0,i=o.length;i>r;r++)gt(o[r],a[r]);else gt(e,s);return a=mt(s,"script"),a.length>0&&ht(a,!u&&mt(e,"script")),s},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c=0,p=e.length,f=t.createDocumentFragment(),d=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(d,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),a=(nt.exec(i)||["",""])[1].toLowerCase(),s=ct[a]||ct._default,o.innerHTML=s[1]+i.replace(tt,"<$1></$2>")+s[2],l=s[0];while(l--)o=o.lastChild;x.merge(d,o.childNodes),o=f.firstChild,o.textContent=""}else d.push(t.createTextNode(i));f.textContent="",c=0;while(i=d[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&ht(o),n)){l=0;while(i=o[l++])st.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,a,s=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(P.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(a=0;(i=r[a])!==undefined;a++)s[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function dt(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ht(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),a=H.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(s=L.access(e),u=x.extend({},s),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),Nt=RegExp("^([+-])=("+b+")","i"),kt={BODY:"block"},St={position:"absolute",visibility:"hidden",display:"block"},jt={letterSpacing:0,fontWeight:400},Et=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function Ot(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=H.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[a]=H.access(r,"olddisplay",Mt(r.nodeName)))):o[a]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},a=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>a;a++)o[t[a]]=x.css(e,t[a],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ot(this,!0)},hide:function(){return Ot(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=x.camelCase(t),u=e.style;return t=x.cssProps[s]||(x.cssProps[s]=At(u,s)),a=x.cssHooks[t]||x.cssHooks[s],n===undefined?a&&"get"in a&&(i=a.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=Nt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[s]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&(n=a.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,a,s=x.camelCase(t);return t=x.cssProps[s]||(x.cssProps[s]=At(e.style,s)),a=x.cssHooks[t]||x.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in jt&&(i=jt[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,a=n||Ht(e),s=a?a.getPropertyValue(t)||a[t]:undefined,u=e.style;return a&&(""!==s||x.contains(e.ownerDocument,e)||(s=x.style(e,t)),Ct.test(s)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=a.width,u.width=r,u.minWidth=i,u.maxWidth=o)),s};function qt(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Pt(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Et[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Et[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Et[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Et[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Et[o]+"Width",!0,i)));return a}function Rt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Pt(e,t,n||(a?"border":"content"),r,o)+"px"}function Mt(e){var t=o,n=kt[e];return n||(n=Ft(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Ft(e,t),xt.detach()),kt[e]=n),n}function Ft(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,St,function(){return Rt(e,t,r)}):Rt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return qt(e,n,r?Pt(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Et[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=qt)});var $t=/%20/g,Wt=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace($t,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||Wt.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Vt=x.now(),Gt=/\?/,Yt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},an="*/".concat("*");try{Ut=i.href}catch(sn){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}function ln(e,t,n,r){var i={},o=e===on;function a(s){var u;return i[s]=!0,x.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=e.slice(s),e=e.slice(0,s)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),a.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":an,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,a,s,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,d=x.Deferred(),h=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),N(0,t),this}};if(d.promise(T).complete=h.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Yt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(s=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!s||s[1]===Xt[1]&&s[2]===Xt[2]&&(s[3]||("http:"===s[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Gt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Vt++):r+(Gt.test(r)?"&":"?")+"_="+Vt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+an+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(a=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,N)}catch(C){if(!(2>v))throw C;N(-1,C)}}else N(-1,"No Transport");function N(e,t,o,s){var l,m,y,b,w,C=t;2!==v&&(v=2,a&&clearTimeout(a),n=undefined,i=s||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?d.resolveWith(p,[m,C,T]):d.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),h.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var dn=[],hn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=dn.pop()||x.expando+"_"+Vt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(hn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&hn.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(hn,"$1"+i):t.jsonp!==!1&&(t.url+=(Gt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||x.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,dn.push(i)),a&&x.isFunction(o)&&o(a[0]),a=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)a[i]=e.xhrFields[i];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)a.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?r(a.status||404,a.statusText):r(mn[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:undefined,a.getAllResponseHeaders()))}},a.onload=t(),a.onerror=t("error"),t=vn[o=yn++]=t("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined}),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*(function($){
	// include this fix to make jQuery work in Firefox 4 + Greasmonkey or Scriptish
	// mozMatchesSelector fix by Kambfhase
	if( !$('<div>').is('div') && $('<div>')[0].mozMatchesSelector){
		$.find.matchesSelector = function( node, expr ) {
			try {
				return node.mozMatchesSelector( expr);
			} catch(e){}
			return $.find(expr, null, null, [node]).length > 0;
		};
	}
})(unsafeWindow.jQuery);*/


// DEFAULT EINSTELLUNGEN
var optionen = {
		qr_offen : false, // QR gleich offen
		qr_zitate_fett : true, // Zitate fett machen dh. [b]
		qr_smileys : true, // Smileys anzeigen
		qr_clickable_posticons : false, // Die Posticons wie die Smileys clickbar machen.
		qr_zitieren : true,
		qr_editieren: true,
		qr_customsmileys : ["http://h-3.abload.de/img/thumbsuplvqe.gif",
			"http://www.abload.de/img/icon8lvf.gif"],
		qr_custombuttons : [{
			"url":"ZOMG",
			"code":"[img]http://h8.abload.de/img/omgonozlhg6.gif[/img]"
		}],
		qr_savepost: false
	},
	cl = unsafeWindow.console ? function(){ unsafeWindow.console.log.apply( unsafeWindow.console, arguments); } : GM_log,
	tid = /TID=(\d+)/i.exec( window.location.search)[1],
	jqTBody = (document.evaluate("//tbody[ ./tr[ @username] ]", document, null, 8, null).singleNodeValue),
	qr_row0, qr_row1, qr_row2,
	$ = unsafeWindow.jQuery, 
	token_newreply = unsafeWindow.token_newreply,
	storage = { 
		get: function( a, b){
			var val = GM_getValue( a, b);
			return typeof val !== typeof b ? JSON.parse( val) : val;
		},
		set: GM_setValue
	};


// CSS
GM_addStyle( ((_=>/*

#qr_row1, #qr_row2 {
	font-size: 10px;
	font-weight: bold;
	background-color: #394E63;
	text-align: center;
	display:none;
}
#qr_row1 > td, #qr_row2 > td {
	vertical-align: top;
	padding-top: 5px;
}
#qr_row1 > td + td, #qr_row2 > td + td {
	padding-left: 5px;
	padding-right: 5px;
	font-size: 10px;
	text-align: left;
}
#qr_row0 > td {
	height: 16px;
	text-align: center;
	font-weight: bold;
	background-color: #091827;
	font-size: 10px;
	color: #ddd;
}
#qr_row1 img {
	cursor: pointer;
}

#qr_custombuttons input{
	width: 300px;
}
#smileys > img {
	max-height: 30px;
	max-width: 30px;
}

*/_)+'').slice(5,-3).trim() +
( storage.get('qr_offen', optionen.qr_offen) ? "#qr_row0 { display: none } #qr_row1 { display: table-row }" : "")+
( storage.get('qr_smileys', optionen.qr_smileys) ? "" : "#smileys{ display:none}") );

if( !document.evaluate("//a[contains(@href, './quickmod')]", document, null,8,null).singleNodeValue)
		GM_addStyle( ".iAmMod { display:none;}" );

// HTML

qr_row0 = ((_=>/*

<tr id="qr_row0" class="color1">
	<td> <a href="JavaScript:void(0);" class="nu wht postlink">Quick-Reply</a>
		<br />
	</td>
	<td> <a class="nu wht postlink" href="http://userscripts.org/scripts/show/42789">v2.7</a> by <a class="nu wht postlink" href="javascript:void(0);" onclick="openProfile2(1209559)">Kambfhase</a>
	</td>
</tr>

*/_)+'').slice(5,-3).trim();

qr_row1 = ((_=>/*

<tr id="qr_row1">
	<td> <a class="nu wht postlink" href="javascript:void(0);">Optionen</a>
		<br />
		<span id="smileys">
			<img src="./img/smilies/freaked.gif" alt=":huch:" />
			<img src="./img/smilies/icon12.gif" onclick="Javascript:addText(':(',document.forms['newreply']);"/>
			<img src="./img/smilies/icon7.gif" onclick="Javascript:addText(':)',document.forms['newreply']);"/>
			<img src="./img/smilies/banghead.gif" onclick="Javascript:addText(':bang:',document.forms['newreply']);"/>
			<img src="./img/smilies/confused.gif" onclick="Javascript:addText(':confused:',document.forms['newreply']);"/>
			<img src="./img/smilies/biggrin.gif" onclick="Javascript:addText(':D',document.forms['newreply']);"/>
			<img src="./img/smilies/icon15.gif" onclick="Javascript:addText(':eek:',document.forms['newreply']);"/>
			<img src="./img/smilies/icon13.gif" onclick="Javascript:addText(':mad:',document.forms['newreply']);"/>
			<img src="./img/smilies/mata.gif" onclick="Javascript:addText(':mata:',document.forms['newreply']);"/>
			<img src="./img/smilies/smiley-pillepalle.gif" onclick="Javascript:addText(':moo:',document.forms['newreply']);"/>
			<img src="./img/smilies/icon16.gif" onclick="Javascript:addText(':o',document.forms['newreply']);"/>
			<img src="./img/smilies/icon2.gif" onclick="Javascript:addText(':P',document.forms['newreply']);"/>
			<img src="./img/smilies/icon18.gif" onclick="Javascript:addText(':roll:',document.forms['newreply']);"/>
			<img src="./img/smilies/sceptic.gif" onclick="Javascript:addText(':what:',document.forms['newreply']);"/>
			<img src="./img/smilies/urgs.gif" onclick="Javascript:addText(':wurgs:',document.forms['newreply']);"/>
			<img src="./img/smilies/icon1.gif" onclick="Javascript:addText(':zyklop:',document.forms['newreply']);"/>
			<img src="./img/smilies/icon8.gif" onclick="Javascript:addText(':|',document.forms['newreply']);"/>
			<img src="./img/smilies/wink.gif" onclick="Javascript:addText(';)',document.forms['newreply']);"/>
			<img src="./img/smilies/icon5.gif" onclick="Javascript:addText('^^',document.forms['newreply']);"/>
			<img src="./img/icons/thumbsup.gif" onclick="Javascript:addText('[img]./img/icons/thumbsup.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/thumbsdown.gif" onclick="Javascript:addText('[img]./img/icons/thumbsdown.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/pfeil.gif" onclick="Javascript:addText('[img]./img/icons/pfeil.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/icon9.gif" onclick="Javascript:addText('[img]./img/icons/icon9.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/icon10.gif" onclick="Javascript:addText('[img]./img/icons/icon10.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/icon6.gif" onclick="Javascript:addText('[img]./img/icons/icon6.gif[/img]',document.forms['newreply']);"/>
			<img src="./img/icons/icon11.gif" onclick="Javascript:addText(':xx:',document.forms['newreply']);"/>
			<img src="./img/icons/icon4.gif" onclick="Javascript:addText(':0:',document.forms['newreply']);"/>
			<img src="./img/icons/icon3.gif"  onclick="Javascript:addText('8|',document.forms['newreply']);"/>
			<img src="./img/smilies/ugly.gif" onclick="Javascript:addText(':ugly:',document.forms['newreply']);"/>
			<img src="./img/smilies/tourette.gif" onclick="Javascript:addText(':tourette:',document.forms['newreply']);"/>
			<br />
			<br />
		</span>
	</td>
	<td>
		<form name="newreply" action="newreply.php" method="post">
			<input type="hidden" name="TID" value="" />
			<input type="hidden" name="token" value="" />
			<input type="text" name="post_title" id="gmqrtitle" style="width: 250px;" />
			<br />
			<fieldset style="border-style: none; display: inline; padding-left:0px; margin-left: 0px;">
				<input type="radio" name="post_icon" id="gmqr0" value="0" style="margin-right: 18px;" checked="checked" />
				<input type="radio" name="post_icon" id="gmqr32" value="32" />
				<img alt=":P" src="./img/icons/icon2.gif" tg="32" />
				<input type="radio" name="post_icon" id="gmqr40" value="40" />
				<img alt="[img]./img/icons/icon11.gif[/img]" tg="40" src="./img/icons/icon11.gif" />
				<input type="radio" name="post_icon" id="gmqr34" value="34" />
				<img alt="[img]./img/icons/icon4.gif[/img]" tg="34" src="./img/icons/icon4.gif" />
				<input type="radio" name="post_icon" id="gmqr33" value="33" />
				<img alt="[img]./img/icons/icon3.gif[/img]" tg="33" src="./img/icons/icon3.gif" />
				<input type="radio" name="post_icon" id="gmqr41" value="41" />
				<img alt=":(" tg="41" src="./img/icons/icon12.gif" />
				<input type="radio" name="post_icon" id="gmqr2" value="2" />
				<img alt="[img]./img/icons/thumbsup.gif[/img]" tg="2" src="./img/icons/thumbsup.gif" />
				<input type="radio" name="post_icon" id="gmqr1" value="1" />
				<img alt="[img]./img/icons/thumbsdown.gif[/img]" tg="1" src="./img/icons/thumbsdown.gif" />
				<br />
				<input type="radio" name="post_icon" id="gmqr54" value="54" />
				<img alt="[img]./img/icons/pfeil.gif[/img]" tg="54" src="./img/icons/pfeil.gif" />
				<input type="radio" name="post_icon" id="gmqr38" value="38" />
				<img alt=":|" tg="38" src="./img/icons/icon8.gif" />
				<input type="radio" name="post_icon" id="gmqr35" value="35" />
				<img alt="^^" tg="35" src="./img/icons/icon5.gif" />
				<input type="radio" name="post_icon" id="gmqr28" value="28" />
				<img alt="[img]./img/icons/icon9.gif[/img]" tg="28" src="./img/icons/icon9.gif" />
				<input type="radio" name="post_icon" id="gmqr42" value="42" />
				<img alt=":mad:" tg="42" src="./img/icons/icon13.gif" />
				<input type="radio" name="post_icon" id="gmqr36" value="36" />
				<img alt="[img]./img/icons/icon6.gif[/img]" tg="36" src="./img/icons/icon6.gif" />
				<input type="radio" name="post_icon" id="gmqr39" value="39" />
				<img alt="[img]./img/icons/icon10.gif[/img]" tg="39" src="./img/icons/icon10.gif" />
				<input type="radio" name="post_icon" id="gmqr37" value="37" />
				<img alt=":)" tg="37" src="./img/icons/icon7.gif" />
				<br />
			</fieldset>
			<br />
			<span id="extra_span_fuer_flying_sheep">
				<img src="./img/buttons/fett.gif" alt="Fett" onclick="addCode('[b]', '[/b]', document.forms['newreply'])" />
				<img src="./img/buttons/u.gif" alt="Unterstreichen" onclick="addCode('[u]', '[/u]', document.forms['newreply'])" />
				<img src="./img/buttons/code.gif" alt="Code einf&#x00fc;gen" onclick="addCode('[code]', '[/code]', document.forms['newreply'])" />
				<img src="./img/buttons/kursiv.gif" alt="Kursiv" onclick="addCode('[i]', '[/i]', document.forms['newreply'])" />
				<img src="./img/buttons/s.gif" alt="Durchstreichen" onclick="addCode('[s]', '[/s]', document.forms['newreply'])" />
				<img src="http://abload.de/img/mono4qf9.png" alt="Monospace" onclick="addCode('[m]', '[/m]', document.forms['newreply'])" />
				<img src="http://abload.de/img/acode3vwotw.gif" alt="Audio" onclick="addCode('[audio]', '[/audio]', document.forms['newreply'])" />
				<img src="http://abload.de/img/vcode3l2y6e.gif" alt="Video" onclick="addCode('[video]', '[/video]', document.forms['newreply'])" />
				<img src="./img/buttons/img.gif" alt="Bild einf&#x00fc;gen" onclick="makeImage(document.forms['newreply'])" />
				<img src="./img/buttons/url.gif" alt="Link mit Text" onclick="makeNamedLink(document.forms['newreply'])" />
				<img src="./img/buttons/url2.gif" alt="Link einf&#x00fc;gen" onclick="makeLink(document.forms['newreply'])" />
				<img src="./img/buttons/list.gif" alt="Liste einf&#x00fc;gen" onclick="addToList(document.forms['newreply'])" />                <img src="./img/buttons/quote.gif" alt="Quote" onclick="addCode('[quote]', '[/quote]', document.forms['newreply'])" />
				<img src="./img/buttons/spoiler.gif" alt="Spoiler-Warnung fÃ¼r diesen Text einf&#x00fc;gen" onclick="addCode('[spoiler]', '[/spoiler]', document.forms['newreply'])" />
				<img src="http://abload.de/img/adminxtmh.png" class="iAmMod" onclick="addCode('[mod]','[/mod]',document.forms['newreply'])" />
			</span>
			<span id="qr_insertcustombuttonshere" /><br />
			<textarea name="message" id="message" style=" width: 100%; height: 300px;"></textarea><br />
			<input type="checkbox" name="post_converturls" checked="checked" />URLs automatisch erkennen<br />
			<input type="checkbox" name="post_disablebbcode" value="1" />BB-Code deaktivieren<br />
			<input type="checkbox" name="post_disablesmilies" value="1" />Smilies deaktivieren<br />
			<span class="iAmMod">
				<input type="checkbox" name="reply_close" value="1" /> Thread nach dem Posten schlie&#x00df;en<br />
				<input type="checkbox" name="post_mark" value="1" /> Text farbig hervorheben?<br />
			</span>
			<input type="submit" name="submit" value="Absenden" style="width: 150px; display: inline; margin-top: 10px;" accesskey="S" />
			<input type="submit" name="preview" value="Vorschau" style="width: 150px; display: inline; margin-top: 10px;" />
		</form>
	</td>
</tr>

*/_)+'').slice(5,-3).trim();

qr_row2 = ((_=>/*

<tr id="qr_row2">
	<td> <a href="JavaScript:void(0);" class="nu wht postlink">Quick-Reply</a>
		<br />
	</td>
	<td>
		<form name="qr_optionen">
			<input type="checkbox" id="qr_offen" />Quick-Reply Fenster gleich &#x00f6;ffnen
			<br />
			<input type="checkbox" id="qr_zitate_fett" />Zitate fett machen
			<br />
			<input type="checkbox" id="qr_smileys" />Smileys anzeigen
			<br />
			<input type="checkbox" id="qr_clickable_posticons" />Die Posticons als Smileys missbrauchen
			<br />
			<input type="checkbox" id="qr_zitieren" />die Zitieren-Links ab&#x00e4;ndern.
			<br />
			<input type="checkbox" id="qr_editieren" />die Editieren-Links ab&#x00e4;ndern.
			<br />
			<input type="checkbox" id="qr_savepost" />Nicht abgeschickte Posts automatisch speichern
			<br />
			<br />Customsmileys hier eintragen. Eine URL pro Zeile!
			<br />
			<textarea id="qr_customsmileys" style=" width: 100%; height: 100px;"></textarea>
			<br />
			<br />Custom BB Buttons hier definieren. <a href="Javascript: void 0;" id="qr_custombuttons_add">+</a>
			<br />
			<div id="qr_custombuttons" style="width:100%"></div>
			<br />
			<br />Alle Einstellungen werden automatisch gespeichert.</form>
	</td>
</tr>

*/_)+'').slice(5,-3).trim();


// HTML EINFueGEN & MISC
$(document.createDocumentFragment()).append( unescape(qr_row0))
	.append( unescape(qr_row1))
	.append( unescape(qr_row2))
	.insertAfter($(jqTBody).find("tr.color1").last());

$('#qr_row1').find('input[name="TID"]').val(tid);
$('#qr_row1').find('input[name*="token"]').val(token_newreply);


// EVENT HANDLER
var clickPosticon = function clickPosticon(){
	if( storage.get('qr_clickable_posticons', optionen.qr_clickable_posticons)){
		QR.textHinzufuegen( this.getAttribute("alt"));
	} else {
		$('#qr_row1').find('#gmqr'+$(this).attr('tg')).click();
		//$(this).prev().click();
	}
},
clickZitieren = function(e){
	if( e.which !== 1 || !storage.get('qr_zitieren',optionen.qr_zitieren)){
		return true;
	}

	QR.zitiere( /(\d+)$/.exec($(this).attr('href'))[1]);

	return false;
},
clickEditieren = function(e){
	if( e.which !== 1 || !storage.get('qr_editieren',optionen.qr_editieren)){
		return true;
	}

	QR.editiere( /(\d+)$/.exec($(this).attr('href'))[1], $(this).attr('href'));

	return false;
};

$(jqTBody).on('click','a[href^="newreply.php?PID="]', clickZitieren).on('click','a[href^="./editreply.php?PID="]', clickEditieren);

$(document).on('keypress',function( e){
	if( e.which === 113 && e.altKey){
		QR.zeigeEingabe();
	}
});


// POSTICONS
$('#qr_row1').find('input[type="radio"] + img').on("click", clickPosticon);


// EINSTELLUNGEN
(function($){
	function clickEinstellung(){
		var setting = this.id,
			value = !storage.get( setting, optionen[setting]);

		$(this).prop('checked', value);
		storage.set( setting, value);
	}

	$('#qr_row2').find('input[type="checkbox"]').prop("checked", function(){
		return storage.get( this.id, optionen[ this.id]);
	}).on('click', clickEinstellung);
	
})($);


// SMILEYS
var Smileys = (function($){
	var Smileys = {
		zeige: function(){
			$('#smileys').show();
		},
		verstecke: function(){
			$('#smileys').hide();
		},
		clickHandler: function( event){
			// Wird ausgefuehrt, wenn auf einen Smiley geklickt wird
			var $this = $(event.target);
			if( !$this.is('img[alt]')) return;

			QR.textHinzufuegen( 
				$this.attr('alt') == "src" ? 
				('[img]'+$this.attr('src')+'[/img]') :
				$this.attr('alt')
			);
		},
		changeEinstellung: function(){
			if( storage.get('qr_smileys',optionen.qr_smileys) ){
				Smileys.zeige();
			} else {
				Smileys.verstecke();
			}
		},
		customSmileysSpeichern: function(){
			var urls = $(this).val().split('\n'),
				i=0, 
				$cache = $(unsafeWindow.document.createDocumentFragment());
			for(; i< urls.length; ++i){
				if( urls[i] && /\S/.test(urls[i])){
					$cache.append('<img src="'+urls[i]+'" alt="src" />\n');
				}
			}
			$('#smileys').children('img[alt="src"]').remove().end().append( $cache);
			storage.set( 'qr_customsmileys', JSON.stringify(urls.map(encodeURI)));
		}
	};

	$('#smileys').on("click", Smileys.clickHandler);
	
	$('#qr_smileys').change(Smileys.changeEinstellung);

	$('#qr_customsmileys').change(Smileys.customSmileysSpeichern).val(
		storage.get('qr_customsmileys',optionen.qr_customsmileys).map(unescape).join('\n')
	).change();

	return Smileys;
})($);

// general Quick-Reply
var QR = (function($){
	var QR = {
		zeigeEingabe: function(){
			$('#qr_row1').show();
			$('#qr_row0, #qr_row2').hide();
			document.getElementById('message').focus();
		},
		zeigeOptionen: function(){
			$('#qr_row2').show();
			$('#qr_row1,#qr_row0').hide();
		},
		textHinzufuegen: function( text){
			unsafeWindow.addText( text, $('#qr_row1 form').get(0));
			this.zeigeEingabe();
		},
		ladePost: function( pid){
			// lädt das XML eines Posts
			return $.get("xml/thread.php",{
				onlyPID : pid,
				TID: tid
			}).pipe(function( data){
				// filtere den Username und Posts aus dem XML
				return {
					username: data.querySelector("posts user").textContent,
					code: data.querySelector("content").textContent
				};
			});
		},
		zitiere: function( pid){
			// pid ist die ID des zu zitierenden Posts.
			var fett = storage.get("qr_zitate_fett", optionen.qr_zitate_fett);

			this.ladePost(pid).done(function( data){
				var text = data.code,
					img2url = /\[url=([^\]]+)\]\[img\][^\]]*\[\/img\]\[\/url\]/gi;

				text = text.replace(img2url,"[url]$1[/url]");
				text = '[quote='+tid+','+
					pid+ // PostID
					',"'+
					unescape(data.username)+ // Username
					'"]'+(fett?"[b]\n":"\n")+text+(fett?"\n[/b]":"\n")+'[/quote]';

				QR.textHinzufuegen( text);
			});
		},
		editiere: function( pid, href){
			$.when( QR.ladePost(pid), $.get(href).pipe(function(arg){
				return $(arg);
			})).then(function( xml, $data){
				// wird aufgerufen, wenn beide XHRs angekommen sind.
			   
				var code = xml.code,
					token = $data.find('input[name="token"]').val(),
					link = $(jqTBody).find('a[href="./editreply.php?PID='+pid+'"]'),
					post = link.closest('tr.color1').prev().find('span.posttext'),
					icon = post.closest('tr').prev().find('img'),
					title = $data.find('input[name="edit_title"]').val(),
					qr_edit = $('#qr_row1');

				// verschiebe die Eingabe
				$('#qr_row0').hide();
				$('#qr_row1, #qr_row2').detach().insertAfter( link.closest('tr.color1')).hide();

				// uebernimm die Einstellungen vom zu editierenden Post
				qr_edit.show();
				qr_edit.find('input[name="token"]').val(token);
				qr_edit.find('textarea[name="message"]').val(code);
				qr_edit.find('form').attr('action', "editreply.php").append($('<input type="hidden" name="PID"/>').val(pid));
				qr_edit.find('input').attr('name', function( index, oldName){
					return oldName.replace(/^post/,'edit');
				});
				qr_edit.find('input[name="edit_title"]').val(title);

				if( icon.length){
					$(document.querySelectorAll('#qr_row1 > td:last-child img[src*="'+ icon.attr('src').replace(/(\/|\.)/g,"\\$1") +'"]')).prev().attr('checked','checked');
					$('#gmqr0').removeAttr('checked');
				}
			});
		}
	};

	$('#qr_row1').find('a:first').click( QR.zeigeOptionen);
	$('#qr_row0, #qr_row2').find('a:first').click( QR.zeigeEingabe);

	return QR;
})($);


// CUSTOM BUTTONS
(function($){

	var obj= storage.get('qr_custombuttons', optionen.qr_custombuttons),
		i=0,
		cache = $(document.createDocumentFragment()),
	clickCustombuttons = function(){
		QR.textHinzufuegen( $(this).attr('code'));
	},
	clickMinus = function(){
		$(this).nextUntil('a').andSelf().remove();
		changeCustombuttons.apply( $('#qr_custombuttons').get(0));
	},
	clickPlus = function(){
		$('#qr_custombuttons').append('<a href="javascript:void 0;">-</a> <label>Bild-URL oder Text: <input type="text" name="url" /></label> <label> Code: <input type="text" name="code" /></label><br />\n');
	},
	changeCustombuttons = function(){
		var obj = [];
		$(this).find('input').each(function(i,elem){
			if( i % 2 === 0){
				obj[i/2] = {"url": escape($(elem).val()) || ""};
			} else {
				obj[(i-1)/2].code = escape($(elem).val()) || "";
			}
		});
		obj = JSON.stringify( obj);
		storage.set('qr_custombuttons', obj);
		createCustombuttons();
	},
	createCustombuttons = function(){
		var cache = $( document.createDocumentFragment()),
			span = $('#qr_insertcustombuttonshere').empty(),
			obj = storage.get('qr_custombuttons', optionen.qr_custombuttons),
			i = 0;
		for(; i<obj.length; ++i){
			if( /^http|^www/.test( obj[i].url)){
				cache.append('<img src="'+unescape(obj[i].url)+'" alt="'+unescape(obj[i].url)+'" code="'+unescape(obj[i].code)+'" />\n');
			} else {
				cache.append('<img alt="'+unescape(obj[i].url)+'" code="'+unescape(obj[i].code)+'" />\n');
			}
		}
		cache.appendTo( span);
	};

	$('#qr_custombuttons_add').click( clickPlus);
	$('#qr_custombuttons').on('click','a',clickMinus).bind('change', changeCustombuttons).bind('create',createCustombuttons);

	$('#qr_insertcustombuttonshere').on('click','img[code]',clickCustombuttons);

	for(;i< obj.length; ++i){
		cache.append('<a href="javascript:void 0;">-</a> <label> URL: <input type="text" name="url" value="'+unescape(obj[i].url)+'" /></label> <label> Code: <input type="text" name="code" value="'+unescape(obj[i].code)+'" /></label><br />\n');
	}

	cache.appendTo('#qr_custombuttons');


	changeCustombuttons.apply( $('#qr_custombuttons').get(0));

})($);




// SAVE AND LOAD
(function(){
	var flag = false;

	$(window).unload(function(){
		if( !storage.get('qr_savepost',false)){
			return;
		}
		var obj = storage.get('qr_save',{}),
			neu = $('#message').val() || '';

		if( flag){
			// submit, dh. Speicher leeren.
			if( tid in obj){
				delete obj[ tid];
				storage.set('qr_save',JSON.stringify( obj));
			}

		} else {
			// nicht abgeschickt
			if( neu && /\S/.test(neu)){
				obj[tid]=neu;
				storage.set('qr_save', JSON.stringify( obj));
			} else {
				delete obj[ tid];
				storage.set('qr_save',JSON.stringify( obj));
			}
		}
	});

	$('#qr_row1').submit(function(){
		 flag = true;
	});

	if( storage.get('qr_savepost',false)){
		$('#message').val( storage.get('qr_save',{})[tid] || '' );
	}

})();

