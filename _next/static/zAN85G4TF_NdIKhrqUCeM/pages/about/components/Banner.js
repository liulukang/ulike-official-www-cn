(window.webpackJsonp=window.webpackJsonp||[]).push([["e0db"],{"+QYX":function(t,n,e){e("1lGj"),t.exports=e("TaGV").Array.isArray},"+eav":function(t,n,e){var r=e("zWQs"),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},"/1nD":function(t,n,e){var r=e("g2rQ"),o=e("0Sp3")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(e){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},"/6KZ":function(t,n,e){var r=e("41F1"),o=e("TaGV"),i=e("8Xl/"),u=e("PPkd"),c=e("qA3Z"),a=function(t,n,e){var f,s,l,p=t&a.F,v=t&a.G,y=t&a.S,h=t&a.P,d=t&a.B,b=t&a.W,m=v?o:o[n]||(o[n]={}),g=m.prototype,O=v?r:y?r[n]:(r[n]||{}).prototype;for(f in v&&(e=n),e)(s=!p&&O&&void 0!==O[f])&&c(m,f)||(l=s?O[f]:e[f],m[f]=v&&"function"!=typeof O[f]?e[f]:d&&s?i(l,r):b&&O[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},"/Lgp":function(t,n,e){var r=e("Qqke"),o=e("miGZ");t.exports=Object.keys||function(t){return r(t,o)}},"/Vl9":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"0HwX":function(t,n,e){var r=e("kBaS"),o=e("zJT+"),i=e("T/1i"),u=e("HbTz"),c=e("qA3Z"),a=e("UTwT"),f=Object.getOwnPropertyDescriptor;n.f=e("lBnu")?f:function(t,n){if(t=i(t),n=u(n,!0),a)try{return f(t,n)}catch(e){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},"0Sp3":function(t,n,e){var r=e("67sl")("wks"),o=e("ct/D"),i=e("41F1").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},"1lGj":function(t,n,e){var r=e("/6KZ");r(r.S,"Array",{isArray:e("Jh4J")})},"1qCV":function(t,n,e){t.exports=e("wFa1")},"3cwG":function(t,n,e){var r=e("dCrc"),o=e("GCLZ");e("qNvu")("getPrototypeOf",function(){return function(t){return o(r(t))}})},"41F1":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"4Xtu":function(t,n,e){e("YlUf")("asyncIterator")},"4lWJ":function(t,n,e){e("MRte"),t.exports=e("TaGV").Object.getOwnPropertySymbols},"5BpW":function(t,n,e){t.exports=e("PPkd")},"5gKE":function(t,n,e){var r=e("41F1").document;t.exports=r&&r.documentElement},"67sl":function(t,n,e){var r=e("TaGV"),o=e("41F1"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("gtwY")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"6Ndq":function(t,n,e){t.exports=e("GyeN")},"6wgB":function(t,n,e){var r=e("g2rQ");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"7mTa":function(t,n,e){t.exports=e("xGJO")},"8Xl/":function(t,n,e){var r=e("HD3J");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"9JyP":function(t,n,e){"use strict";e.r(n);var r=e("mXGw"),o=e.n(r),i=e("7mTa"),u=e.n(i),c=e("1qCV"),a=e.n(c),f=e("s4hn"),s=e.n(f);function l(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=a()(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(s.a){var i=s()(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=e("LkAs"),v=e("Moms"),y=e("bMj6"),h=e("hZod"),d=e("tEuJ"),b=e("azxR"),m=e("hDBU"),g=e("bVN1"),O=e.n(g),w=["value","thousands","animate","prefix"];function S(t,n,e){return n=Object(h.default)(n),Object(y.default)(t,function(){try{var t=!Boolean.prototype.valueOf.call(u()(Boolean,[],function(){}))}catch(t){}return function(){return!!t}()}()?u()(n,e||[],Object(h.default)(t).constructor):n.apply(t,e))}var x=function(t){function n(){var t;Object(p.default)(this,n);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=S(this,n,[].concat(r)),Object(b.a)(t,"state",{animate:!1,thousands:!1,value:0,current:0,interval:50}),Object(b.a)(t,"animate",function(n,e){var r=t.state.interval,o=e>n,i=(e-n)/r;o&&i<1?i=1:!o&&i>-1&&(i=-1);var u=function(){n=+(n+i).toFixed(0,10),t.setState({current:o?n>e?e:n:n<e?e:n},function(){(o&&n<e||!o&&n>e)&&window.requestAnimationFrame(u)})};window.requestAnimationFrame(u)}),t}return Object(d.default)(n,t),Object(v.default)(n,[{key:"componentDidMount",value:function(){var t=this.state,n=t.animate,e=t.value,r=t.current;n&&this.animate(r,e)}},{key:"componentDidUpdate",value:function(t,n){var e=this.state,r=e.animate,o=e.value,i=e.current;r&&n.value!==o&&this.animate(i,o)}},{key:"render",value:function(){var t=this.state.current,n=this.props,e=(n.value,n.thousands),r=(n.animate,n.prefix),i=l(n,w);return e&&(t=function(t){if(O()(+t))return t;var n=String(t),e=n,r="",o=n.split(".");if(o.length>1){var i=Object(m.default)(o,2);e=i[0],r=i[1]}return(e=e.split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/,+$/,"").split("").reverse().join(""))+(r?".".concat(r):"")}(t)),o.a.createElement("span",i,r,t)}}],[{key:"getDerivedStateFromProps",value:function(t,n){var e={};return t.value!==n.value&&(e.value=t.value,t.animate||(e.current=t.value)),t.animate!==n.animate&&(e.animate=t.animate),t.thousands!==n.thousands&&(e.thousands=t.thousands),a()(e).length>0?e:null}}])}(o.a.Component),j=e("swUH"),T=e("buxu"),P=e.n(T);function A(){return o.a.createElement("div",{className:P.a.banner},o.a.createElement("div",{className:P.a.content},o.a.createElement("div",{className:P.a.title},j.a.title),o.a.createElement("div",{className:P.a.desc},j.a.desc)),o.a.createElement("div",{className:"".concat(P.a.countWrap," center")},j.a.dataSource.map(function(t,n){return o.a.createElement("div",{key:n,className:P.a.item},o.a.createElement("div",{className:P.a.count},o.a.createElement(x,{value:t.value,animate:!0,thousands:!0}),t.unit),o.a.createElement("div",{className:P.a.desc},t.title))})))}e.d(n,"default",function(){return A})},"ADe/":function(t,n,e){var r=e("fGh/");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},Cs9m:function(t,n,e){"use strict";var r=e("o3C2"),o=e("TTxG"),i=e("N9zW"),u=e("T/1i");t.exports=e("gMWQ")(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},DFZh:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/components/Banner",function(){var t=e("9JyP");return{page:t.default||t}}])},E6Ca:function(t,n,e){var r=e("/6KZ");r(r.S,"Object",{setPrototypeOf:e("WbNG").set})},"F+l/":function(t,n,e){var r=e("dCrc"),o=e("/Lgp");e("qNvu")("keys",function(){return function(t){return o(r(t))}})},"G+Zn":function(t,n,e){var r=e("ADe/"),o=e("n6P+"),i=e("miGZ"),u=e("Q5TA")("IE_PROTO"),c=function(){},a=function(){var t,n=e("m/Uw")("iframe"),r=i.length;for(n.style.display="none",e("5gKE").appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},GCLZ:function(t,n,e){var r=e("qA3Z"),o=e("dCrc"),i=e("Q5TA")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},GyeN:function(t,n,e){e("XmXP");var r=e("TaGV").Object;t.exports=function(t,n){return r.create(t,n)}},HD3J:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},HbTz:function(t,n,e){var r=e("fGh/");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},IH2s:function(t,n,e){var r=e("/6KZ");r(r.S+r.F*!e("lBnu"),"Object",{defineProperty:e("eOWL").f})},IL7q:function(t,n,e){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(t){return n[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,n){for(var e,u,c=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var f in e=Object(arguments[a]))o.call(e,f)&&(c[f]=e[f]);if(r){u=r(e);for(var s=0;s<u.length;s++)i.call(e,u[s])&&(c[u[s]]=e[u[s]])}}return c}},Jh4J:function(t,n,e){var r=e("g2rQ");t.exports=Array.isArray||function(t){return"Array"==r(t)}},KELd:function(t,n,e){e("MRte"),e("iKhv"),e("4Xtu"),e("UvcN"),t.exports=e("TaGV").Symbol},Kdq7:function(t,n,e){var r=e("zWQs"),o=e("Xj5l");t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},LPDj:function(t,n,e){e("E6Ca"),t.exports=e("TaGV").Object.setPrototypeOf},LkAs:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.r(n),e.d(n,"default",function(){return r})},MRte:function(t,n,e){"use strict";var r=e("41F1"),o=e("qA3Z"),i=e("lBnu"),u=e("/6KZ"),c=e("5BpW"),a=e("hYpR").KEY,f=e("/Vl9"),s=e("67sl"),l=e("sWB5"),p=e("ct/D"),v=e("0Sp3"),y=e("eTWF"),h=e("YlUf"),d=e("T4P6"),b=e("Jh4J"),m=e("ADe/"),g=e("fGh/"),O=e("dCrc"),w=e("T/1i"),S=e("HbTz"),x=e("zJT+"),j=e("G+Zn"),T=e("dn9X"),P=e("0HwX"),A=e("phsM"),_=e("eOWL"),E=e("/Lgp"),G=P.f,k=_.f,N=T.f,F=r.Symbol,L=r.JSON,M=L&&L.stringify,C=v("_hidden"),W=v("toPrimitive"),D={}.propertyIsEnumerable,V=s("symbol-registry"),B=s("symbols"),I=s("op-symbols"),Z=Object.prototype,q="function"==typeof F&&!!A.f,z=r.QObject,J=!z||!z.prototype||!z.prototype.findChild,R=i&&f(function(){return 7!=j(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=G(Z,n);r&&delete Z[n],k(t,n,e),r&&t!==Z&&k(Z,n,r)}:k,X=function(t){var n=B[t]=j(F.prototype);return n._k=t,n},K=q&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},H=function(t,n,e){return t===Z&&H(I,n,e),m(t),n=S(n,!0),m(e),o(B,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=j(e,{enumerable:x(0,!1)})):(o(t,C)||k(t,C,x(1,{})),t[C][n]=!0),R(t,n,e)):k(t,n,e)},Q=function(t,n){m(t);for(var e,r=d(n=w(n)),o=0,i=r.length;i>o;)H(t,e=r[o++],n[e]);return t},U=function(t){var n=D.call(this,t=S(t,!0));return!(this===Z&&o(B,t)&&!o(I,t))&&(!(n||!o(this,t)||!o(B,t)||o(this,C)&&this[C][t])||n)},Y=function(t,n){if(t=w(t),n=S(n,!0),t!==Z||!o(B,n)||o(I,n)){var e=G(t,n);return!e||!o(B,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=N(w(t)),r=[],i=0;e.length>i;)o(B,n=e[i++])||n==C||n==a||r.push(n);return r},tt=function(t){for(var n,e=t===Z,r=N(e?I:w(t)),i=[],u=0;r.length>u;)!o(B,n=r[u++])||e&&!o(Z,n)||i.push(B[n]);return i};q||(c((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===Z&&n.call(I,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),R(this,t,x(1,e))};return i&&J&&R(Z,t,{configurable:!0,set:n}),X(t)}).prototype,"toString",function(){return this._k}),P.f=Y,_.f=H,e("sqS1").f=T.f=$,e("kBaS").f=U,A.f=tt,i&&!e("gtwY")&&c(Z,"propertyIsEnumerable",U,!0),y.f=function(t){return X(v(t))}),u(u.G+u.W+u.F*!q,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var rt=E(v.store),ot=0;rt.length>ot;)h(rt[ot++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(V,t+="")?V[t]:V[t]=F(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in V)if(V[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!q,"Object",{create:function(t,n){return void 0===n?j(t):Q(j(t),n)},defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f(function(){A.f(1)});u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return A.f(O(t))}}),L&&u(u.S+u.F*(!q||f(function(){var t=F();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(g(n)||void 0!==t)&&!K(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,M.apply(L,r)}}),F.prototype[W]||e("PPkd")(F.prototype,W,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},Moms:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return u});var r=e("hHgk"),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},N9zW:function(t,n){t.exports={}},OKNm:function(t,n,e){t.exports=e("LPDj")},PPkd:function(t,n,e){var r=e("eOWL"),o=e("zJT+");t.exports=e("lBnu")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},Q5TA:function(t,n,e){var r=e("67sl")("keys"),o=e("ct/D");t.exports=function(t){return r[t]||(r[t]=o(t))}},Qqke:function(t,n,e){var r=e("qA3Z"),o=e("T/1i"),i=e("zeFm")(!1),u=e("Q5TA")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},SY1S:function(t,n,e){t.exports=e("UR6/")},"T/1i":function(t,n,e){var r=e("6wgB"),o=e("Xj5l");t.exports=function(t){return r(o(t))}},T4P6:function(t,n,e){var r=e("/Lgp"),o=e("phsM"),i=e("kBaS");t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},TTxG:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},TaGV:function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},"UR6/":function(t,n,e){e("k/kI"),e("WwSA"),t.exports=e("uMC/")},UTwT:function(t,n,e){t.exports=!e("lBnu")&&!e("/Vl9")(function(){return 7!=Object.defineProperty(e("m/Uw")("div"),"a",{get:function(){return 7}}).a})},UvcN:function(t,n,e){e("YlUf")("observable")},VJcA:function(t,n,e){var r=e("/1nD"),o=e("0Sp3")("iterator"),i=e("N9zW");t.exports=e("TaGV").getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},WbNG:function(t,n,e){var r=e("fGh/"),o=e("ADe/"),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e("8Xl/")(Function.call,e("0HwX").f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},WwSA:function(t,n,e){"use strict";var r=e("Kdq7")(!0);e("gMWQ")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},X0zA:function(t,n,e){var r=e("/6KZ");r(r.S,"Number",{isNaN:function(t){return t!=t}})},Xj5l:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},XmXP:function(t,n,e){var r=e("/6KZ");r(r.S,"Object",{create:e("G+Zn")})},XzKa:function(t,n,e){t.exports=e("KELd")},YlUf:function(t,n,e){var r=e("41F1"),o=e("TaGV"),i=e("gtwY"),u=e("eTWF"),c=e("eOWL").f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},azxR:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("hHgk"),o=e.n(r);function i(t,n,e){return n in t?o()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},bMj6:function(t,n,e){"use strict";e.r(n);var r=e("t+lh"),o=e.n(r),i=e("XzKa"),u=e.n(i);function c(t){return(c="function"==typeof u.a&&"symbol"==typeof o.a?function(t){return typeof t}:function(t){return t&&"function"==typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"==typeof u.a&&"symbol"===c(o.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":c(t)})(t)}function f(t,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"default",function(){return f})},bVN1:function(t,n,e){t.exports=e("tLiR")},bztI:function(t,n,e){e("IH2s");var r=e("TaGV").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},"ct/D":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},dCrc:function(t,n,e){var r=e("Xj5l");t.exports=function(t){return Object(r(t))}},dR8c:function(t,n,e){"use strict";var r=e("G+Zn"),o=e("zJT+"),i=e("sWB5"),u={};e("PPkd")(u,e("0Sp3")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},dn9X:function(t,n,e){var r=e("T/1i"),o=e("sqS1").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(n){return u.slice()}}(t):o(r(t))}},eOWL:function(t,n,e){var r=e("ADe/"),o=e("UTwT"),i=e("HbTz"),u=Object.defineProperty;n.f=e("lBnu")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},eTWF:function(t,n,e){n.f=e("0Sp3")},"fGh/":function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},g2rQ:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},gMWQ:function(t,n,e){"use strict";var r=e("gtwY"),o=e("/6KZ"),i=e("5BpW"),u=e("PPkd"),c=e("N9zW"),a=e("dR8c"),f=e("sWB5"),s=e("GCLZ"),l=e("0Sp3")("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,y,h,d,b){a(e,n,y);var m,g,O,w=function(t){if(!p&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",x="values"==h,j=!1,T=t.prototype,P=T[l]||T["@@iterator"]||h&&T[h],A=P||w(h),_=h?x?w("entries"):A:void 0,E="Array"==n&&T.entries||P;if(E&&(O=s(E.call(new t)))!==Object.prototype&&O.next&&(f(O,S,!0),r||"function"==typeof O[l]||u(O,l,v)),x&&P&&"values"!==P.name&&(j=!0,A=function(){return P.call(this)}),r&&!b||!p&&!j&&T[l]||u(T,l,A),c[n]=A,c[S]=v,h)if(m={values:x?A:w("values"),keys:d?A:w("keys"),entries:_},b)for(g in m)g in T||i(T,g,m[g]);else o(o.P+o.F*(p||j),n,m);return m}},gSCB:function(t,n,e){e("WwSA"),e("k/kI"),t.exports=e("eTWF").f("iterator")},gou2:function(t,n,e){var r=e("zWQs"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},gtwY:function(t,n){t.exports=!0},hDBU:function(t,n,e){"use strict";e.r(n);var r=e("s20r"),o=e.n(r);var i=e("SY1S"),u=e.n(i);function c(t,n){return function(t){if(o()(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var c,a=u()(t);!(r=(c=a.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(f){o=!0,i=f}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"default",function(){return c})},hHgk:function(t,n,e){t.exports=e("bztI")},hYpR:function(t,n,e){var r=e("ct/D")("meta"),o=e("fGh/"),i=e("qA3Z"),u=e("eOWL").f,c=0,a=Object.isExtensible||function(){return!0},f=!e("/Vl9")(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},hZod:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return c});var r=e("jDdP"),o=e.n(r),i=e("OKNm"),u=e.n(i);function c(t){return(c=u.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},iKhv:function(t,n){},jDdP:function(t,n,e){t.exports=e("n+bS")},"k/kI":function(t,n,e){e("Cs9m");for(var r=e("41F1"),o=e("PPkd"),i=e("N9zW"),u=e("0Sp3")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},kBaS:function(t,n){n.f={}.propertyIsEnumerable},lBnu:function(t,n,e){t.exports=!e("/Vl9")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"m/Uw":function(t,n,e){var r=e("fGh/"),o=e("41F1").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},miGZ:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"n+bS":function(t,n,e){e("3cwG"),t.exports=e("TaGV").Object.getPrototypeOf},"n6P+":function(t,n,e){var r=e("eOWL"),o=e("ADe/"),i=e("/Lgp");t.exports=e("lBnu")?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},o3C2:function(t,n){t.exports=function(){}},phsM:function(t,n){n.f=Object.getOwnPropertySymbols},qA3Z:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},qNvu:function(t,n,e){var r=e("/6KZ"),o=e("TaGV"),i=e("/Vl9");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},qacR:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},rPaN:function(t,n,e){"use strict";var r=e("HD3J"),o=e("fGh/"),i=e("qacR"),u=[].slice,c={};t.exports=Function.bind||function(t){var n=r(this),e=u.call(arguments,1),a=function(){var r=e.concat(u.call(arguments));return this instanceof a?function(t,n,e){if(!(n in c)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";c[n]=Function("F,a","return new F("+r.join(",")+")")}return c[n](t,e)}(n,r.length,r):i(n,r,t)};return o(n.prototype)&&(a.prototype=n.prototype),a}},rgc3:function(t,n,e){var r=e("/6KZ"),o=e("G+Zn"),i=e("HD3J"),u=e("ADe/"),c=e("fGh/"),a=e("/Vl9"),f=e("rPaN"),s=(e("41F1").Reflect||{}).construct,l=a(function(){function t(){}return!(s(function(){},[],t)instanceof t)}),p=!a(function(){s(function(){})});r(r.S+r.F*(l||p),"Reflect",{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(p&&!l)return s(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(f.apply(t,r))}var a=e.prototype,v=o(c(a)?a:Object.prototype),y=Function.apply.call(t,v,n);return c(y)?y:v}})},s20r:function(t,n,e){t.exports=e("+QYX")},s4hn:function(t,n,e){t.exports=e("4lWJ")},sWB5:function(t,n,e){var r=e("eOWL").f,o=e("qA3Z"),i=e("0Sp3")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},sqS1:function(t,n,e){var r=e("Qqke"),o=e("miGZ").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},swUH:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"d",function(){return o}),e.d(n,"c",function(){return i});const r={title:"深圳市优莱克科技有限公司",desc:" 深圳市优莱克科技有限公司创立于2006年，披荆斩棘，风雨兼程。十年后它已从最初的迷你型的电路板厂已蜕变成一家知名度专业的PCBA研发设计制造供应商，拥有ISO9001:2008认证（51816Q00979R0S）CCC、CE产品认证资质。 ",dataSource:[{title:"行业运营管理经验",value:10,unit:"年+"},{title:"服务客户",value:1e3,unit:"+"},{title:"累计制造",value:100,unit:"万片+"}]},o={title:"发展历程",desc:"超过十年的经验积累与沉淀",dataSource:[{year:"2006年",event:"优莱克正式成立"},{year:"2008年",event:"获得ISO9001:2008认证（51816Q00979R0S）CCC、CE产品认证资质"},{year:"2013年",event:"扩展德国、新加坡、加拿大等海外业务,引进美国MPM、松下SPF、MVIIF、MSF 、M1等新设备"},{year:"2016年",event:"先后在西安、成都、江苏等城市设办事处"},{year:"2020年",event:"持续发展，期待与您合作共赢"}]},i={title:"关于优莱克",desc:"电子产品设计制造集成服务商",dataSource:["我公司是一家以电子产品研发设计制造为主的企业，主要承接各种电机控制，开关电源，智能自动化监控控制，工控类产品研发设计制造贴片、插件、后焊、测试及组装等电子产品的OEM和ODM业务，公司从事电子产品研发制造十多年，具有资深的研发团队，完善的生产设备和丰富的加工经验。深圳市优莱克科技有限公司位于深圳市南山区西丽镇大勘科技园E栋5楼，现有厂房面积1200多平方米。塑胶磨具的制作、五金件的生产全套一站式电子产品制造服务。提供方案设计、生产，试样生产，配合客户改板优化。 研发技术团队6人。","目前PCBA设备及产能： 全自动上下板机、美国MPM、GDK X5、YAMAHA YSM20、YAMAHA YSM10，I plus M7、I plus M1全自动高速、泛用全进口贴片机。全自动印刷机。全自动上下板机。炉温测试仪，AOI视觉检测仪，BGA返修焊接台，全自动10温区回流焊，日东自动双波峰焊E-FLOW、半自动印刷机、震动盘剪脚机、烘烤箱。示波器、以及其它辅助设备，可贴装CHIP01005、间距0.3mm BGA以上各种封装的元件。 ","主要客户涉及行业：手机维修仪器、通信技术、医疗器械、工控自动化、仪器仪表、网络监控设备、电力设备等。 2006年 12 月公司通过的 ISO9001：2000 现场认证；以及3C中国认证工厂。 ","深圳市优莱克科技有限公司涉及海外地区业务有德国、新加坡、西班牙、加拿大、日本、台湾、香港等多个国家和地区。制造经验丰富。稳定支持顾客项目研发进程和生产进度。 ","公司经营坚持以人为本与制度化管理并重，我们共同努力营造开放、自由、温馨的生产生活环境。一步一努力，创造潜在价值。 "]};n.b={title:"关于我们",banner:r,introduce:i,milestone:o}},"t+lh":function(t,n,e){t.exports=e("gSCB")},tEuJ:function(t,n,e){"use strict";e.r(n);var r=e("6Ndq"),o=e.n(r),i=e("OKNm"),u=e.n(i);function c(t,n){return(c=u.a||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"default",function(){return a})},tLiR:function(t,n,e){e("X0zA"),t.exports=e("TaGV").Number.isNaN},"uMC/":function(t,n,e){var r=e("ADe/"),o=e("VJcA");t.exports=e("TaGV").getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},wFa1:function(t,n,e){e("F+l/"),t.exports=e("TaGV").Object.keys},xGJO:function(t,n,e){e("rgc3"),t.exports=e("TaGV").Reflect.construct},"zJT+":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},zWQs:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},zeFm:function(t,n,e){var r=e("T/1i"),o=e("gou2"),i=e("+eav");t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}}},[["DFZh","5d41","9da1","ad9d"]]]);