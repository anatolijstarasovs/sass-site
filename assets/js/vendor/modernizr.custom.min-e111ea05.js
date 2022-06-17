/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,i){function n(e,t){return typeof e===t}function s(){var e,t,i,s,o,a,r;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],t=_[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(s=n(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],r=a.split("."),1===r.length?w[r[0]]=s:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=s),C.push((s?"":"no-")+r.join("-"))}}function o(e){var t=k.className,i=w._config.classPrefix||"";if(T&&(t=t.baseVal),w._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}w._config.enableClasses&&(t+=" "+i+e.join(" "+i),T?k.className.baseVal=t:k.className=t)}function a(e,t){if("object"==typeof e)for(var i in e)A(e,i)&&a(i,e[i]);else{e=e.toLowerCase();var n=e.split("."),s=w[n[0]];if(2==n.length&&(s=s[n[1]]),"undefined"!=typeof s)return w;t="function"==typeof t?t():t,1==n.length?w[n[0]]=t:(!w[n[0]]||w[n[0]]instanceof Boolean||(w[n[0]]=new Boolean(w[n[0]])),w[n[0]][n[1]]=t),o([(t&&0!=t?"":"no-")+n.join("-")]),w._trigger(e,t)}return w}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=r(T?"svg":"body"),e.fake=!0),e}function c(e,i,n,s){var o,a,c,u,h="modernizr",d=r("div"),p=l();if(parseInt(n,10))for(;n--;)c=r("div"),c.id=s?s[n]:h+(n+1),d.appendChild(c);return o=r("style"),o.type="text/css",o.id="s"+h,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=h,p.fake&&(p.style.background="",p.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),a=i(d,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=u,k.offsetHeight):d.parentNode.removeChild(d),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,i,n){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,i);var o=e.console;if(null!==s)n&&(s=s.getPropertyValue(n));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!i&&t.currentStyle&&t.currentStyle[n];return s}function p(t,n){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(h(t[s]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+h(t[s])+":"+n+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return i}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,i){return t+i.toUpperCase()}).replace(/^-/,"")}function m(e,t,s,o){function a(){c&&(delete I.style,delete I.modElem)}if(o=n(o,"undefined")?!1:o,!n(s,"undefined")){var l=p(e,s);if(!n(l,"undefined"))return l}for(var c,h,d,m,g,v=["modernizr","tspan","samp"];!I.style&&v.length;)c=!0,I.modElem=r(v.shift()),I.style=I.modElem.style;for(d=e.length,h=0;d>h;h++)if(m=e[h],g=I.style[m],u(m,"-")&&(m=f(m)),I.style[m]!==i){if(o||n(s,"undefined"))return a(),"pfx"==t?m:!0;try{I.style[m]=s}catch(y){}if(I.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,i){var s;for(var o in e)if(e[o]in t)return i===!1?e[o]:(s=t[e[o]],n(s,"function")?g(s,i||t):s);return!1}function y(e,t,i,s,o){var a=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+M.join(a+" ")+a).split(" ");return n(t,"string")||n(t,"undefined")?m(r,t,s,o):(r=(e+" "+D.join(a+" ")+a).split(" "),v(r,t,i))}function b(e,t,n){return y(e,i,i,t,n)}var _=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){_.push({name:e,fn:t,options:i})},addAsyncTest:function(e){_.push({name:null,fn:e})}},w=function(){};w.prototype=x,w=new w;var C=[],k=t.documentElement,T="svg"===k.nodeName.toLowerCase(),S="Moz O ms Webkit",D=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=D;var N=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=N;var A;!function(){var e={}.hasOwnProperty;A=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},x._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e,n;for(e=0;e<i.length;e++)(n=i[e])(t)},0),delete this._l[e]}},w._q.push(function(){x.addTest=a});var E=function(){function e(e,t){var s;return e?(t&&"string"!=typeof t||(t=r(t||"div")),e="on"+e,s=e in t,!s&&n&&(t.setAttribute||(t=r("div")),t.setAttribute(e,""),s="function"==typeof t[e],t[e]!==i&&(t[e]=i),t.removeAttribute(e)),s):!1}var n=!("onblur"in t.documentElement);return e}();x.hasEvent=E;var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var i=t(e);return i&&i.matches||!1}:function(t){var i=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),i}}();x.mq=j;var L=function(e,t){var i=!1,n=r("div"),s=n.style;if(e in s){var o=D.length;for(s[e]=t,i=s[e];o--&&!i;)s[e]="-"+D[o]+"-"+t,i=s[e]}return""===i&&(i=!1),i};x.prefixedCSSValue=L;var M=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=M;var P={elem:r("modernizr")};w._q.push(function(){delete P.elem});var I={style:P.elem.style};w._q.unshift(function(){delete I.style}),x.testAllProps=y,x.testAllProps=b,x.testProp=function(e,t,n){return m([e],i,t,n)},x.testStyles=c,w.addTest("customelements","customElements"in e),w.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),w.addTest("pointerevents",function(){var e=!1,t=D.length;for(e=w.hasEvent("pointerdown");t--&&!e;)E(D[t]+"pointerdown")&&(e=!0);return e}),w.addTest("postmessage","postMessage"in e),w.addTest("webgl",function(){var t=r("canvas"),i="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return i in t?t[i]("webgl")||t[i]("experimental-webgl"):"WebGLRenderingContext"in e});var O=!1;try{O="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(H){}w.addTest("websockets",O),w.addTest("cssanimations",b("animationName","a",!0)),function(){w.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(i){}return e});for(var e,t,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<i.length;n++)e=i[n].toLowerCase(),t=b("column"+i[n]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(i[n])),w.addTest("csscolumns."+e,t)}(),w.addTest("flexbox",b("flexBasis","1px",!0)),w.addTest("picture","HTMLPictureElement"in e),w.addAsyncTest(function(){var e,t,i,n=r("img"),s="sizes"in n;!s&&"srcset"in n?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(){a("sizes",2==n.width)},n.onload=i,n.onerror=i,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,"+t+" 8w",n.src=e):a("sizes",s)}),w.addTest("srcset","srcset"in r("img")),w.addTest("webworkers","Worker"in e),s(),o(C),delete x.addTest,delete x.addAsyncTest;for(var F=0;F<w._q.length;F++)w._q[F]();e.Modernizr=w}(window,document);