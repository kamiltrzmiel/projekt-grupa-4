function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire9267;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire9267=o),o.register("ifJdc",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("dJlLU",(function(n,r){e(n.exports,"closeDetailModal",(()=>m));var i=o("c7JiP"),s=o("gRLqu"),a=o("jAaMY"),l=o("aTd5p"),c=o("gwlyu"),u=o("7zgG6");const h=document.getElementById("posters"),d=document.getElementById("modal-backdrop"),f=document.querySelector("body"),p=document.getElementById("trailer-container"),m=()=>{f.style.overflow="auto",d.close(),p.innerHTML=""};h.addEventListener("click",(e=>{if(!e.target.parentNode.classList.contains("posters__box"))return;const n=e.target.parentNode.dataset.id;d.innerHTML="",f.style.overflow="hidden";(async e=>{try{const n=(await i.default.fetchMovieById(e)).data,r=n.genres.map((e=>e.name)).join(", ");n.backdrop_path?n.backdrop_path=`https://image.tmdb.org/t/p/w500/${n.backdrop_path}`:n.backdrop_path=t(l),d.innerHTML=`\n                <div class="container">\n                <div id="modal-wrapper" class="modal">\n                  <button id="hide-modal" class="footer-modal__closeBtn">\n                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">\n                     <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>\n                    </svg>\n                  </button>\n                  <div class="trailer-btn-box">\n                    <img id="modal-image" src="${n.backdrop_path}" class="modal__image" alt="${n.title}" />\n                \n                  <button class="trailer-btn hidden">\n                    <img src="${t(a)}" alt="player icon" id="play-icon" class="trailer-btn__icon" />\n                    </button>\n                    \n                </div>\n                 <h3 class="modal__title">${n.title}</h3>\n                <div id="trailer-container"></div>\n                <div id="modal-text" class="modal__text">\n                  <div class="modal__text__box">\n                    <div id="modal-info" class="modal__info">\n                      <p class="modal__info--classification">Vote / Votes</p>\n                      <p class="modal__info--detailed">\n                        <span class="modal__info--score">${n.vote_average.toFixed(1)}</span> /\n                        <span class="modal__info--score--second">${n.vote_count}</span>\n                      </p>\n                    </div>\n                    <div id="modal-info" class="modal__info">\n                      <p class="modal__info--classification">Popularity</p>\n                      <p class="modal__info--detailed">${n.popularity.toFixed(0)}</p>\n                    </div>\n                    <div id="modal-info" class="modal__info">\n                      <p class="modal__info--classification">Original title</p>\n                      <p class="modal__info--detailed">${n.original_title}</p>\n                    </div>\n                    <div id="modal-info" class="modal__info">\n                      <p class="modal__info--classification">Genre</p>\n                      <p class="modal__info--detailed">${r}</p>\n                    </div>\n                  </div>\n                  <article id="modal-article" class="modal__article modal__text__box">\n                    <h4 class="modal__article--title">ABOUT</h4>\n                    <p id="modal-article-description" class="modal__article--description">\n                      ${n.overview}\n                    </p>\n                  </article>\n                </div>\n                  <div class="modal__buttons">\n                    <button id="modal-watched" class="modal__btn--watched">ADD TO WATCHED</button>\n                    <button id="modal-queue" class="modal__btn--queued">ADD TO QUEUE</button>\n                  </div>\n              </div>\n            </div>`;const o=await(0,u.getUser)();if(o){const t=await(0,c.getSingleMovieFromUserDatabase)(e);if(t){const e=t.type;(0,s.setModalButtons)(n,e)}}else o||(0,s.setModalButtons)(n);document.getElementById("hide-modal").addEventListener("click",(()=>{m()})),d.addEventListener("click",(e=>{e.currentTarget===e.target&&m()})),d.addEventListener("close",(()=>{m()}));const h=(await(0,i.fetchTrailerById)(e)).data.results,f=document.querySelector(".trailer-btn"),g=document.querySelector(".trailer-btn-box"),y=h.find((({official:e,type:t})=>"Trailer"===t&&!0===e));if(!y)return;f.classList.remove("hidden"),f.addEventListener("click",(()=>{g.innerHTML=`<iframe src="https://www.youtube.com/embed/${y.key}?autoplay=1&mute=1" title="YouTube video player" class="player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow="autoplay" allowfullscreen></iframe>`,d.addEventListener("click",(e=>{const t=document.getElementById("play-icon");e.target!==t&&(p.innerHTML="")}))}))}catch(e){console.log(e)}})(n),d.showModal()}))})),o.register("c7JiP",(function(t,n){e(t.exports,"fetchMoviesWithQuery",(()=>s)),e(t.exports,"fetchTrailerById",(()=>a)),e(t.exports,"default",(()=>l)),o("hGVxz");var r=o("9d9Fx"),i=o("7QdEN");const s=async(e,t)=>await r.default.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i.API_KEY,query:e,page:t}}),a=async e=>await r.default.get(`https://api.themoviedb.org/3/movie/${e}/videos`,{params:{api_key:i.API_KEY}});var l={fetchTrendingMovies:async e=>await r.default.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:i.API_KEY,page:e}}),fetchMoviesWithQuery:s,fetchMovieById:async e=>await r.default.get(`https://api.themoviedb.org/3/movie/${e}`,{params:{api_key:i.API_KEY}}),fetchTrailerById:a}})),o.register("hGVxz",(function(t,n){e(t.exports,"default",(()=>o("9d9Fx").default));var r=o("9d9Fx");const{Axios:i,AxiosError:s,CanceledError:a,isCancel:l,CancelToken:c,VERSION:u,all:h,Cancel:d,isAxiosError:f,spread:p,toFormData:m,AxiosHeaders:g,HttpStatusCode:y,formToJSON:v,mergeConfig:_}=r.default})),o.register("9d9Fx",(function(t,n){e(t.exports,"default",(()=>w));var r=o("i4ijA"),i=o("lwbau"),s=o("eCrWh"),a=o("kSe7Y"),l=o("bJncD"),c=o("2eGDI"),u=o("7XT9I"),h=o("9GGcx"),d=o("5SIUr"),f=o("8WPkr"),p=o("gZZY4"),m=o("k5sPl"),g=o("4rx4g"),y=o("4Qexm"),v=o("fRBtE"),_=o("dcCu5");const b=function e(t){const n=new(0,s.default)(t),o=(0,i.default)(s.default.prototype.request,n);return r.default.extend(o,s.default.prototype,n,{allOwnKeys:!0}),r.default.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e((0,a.default)(t,n))},o}(l.default);b.Axios=s.default,b.CanceledError=u.default,b.CancelToken=h.default,b.isCancel=d.default,b.VERSION=f.VERSION,b.toFormData=p.default,b.AxiosError=m.default,b.Cancel=b.CanceledError,b.all=function(e){return Promise.all(e)},b.spread=g.default,b.isAxiosError=y.default,b.mergeConfig=a.default,b.AxiosHeaders=v.default,b.formToJSON=e=>(0,c.default)(r.default.isHTMLForm(e)?new FormData(e):e),b.HttpStatusCode=_.default,b.default=b;var w=b})),o.register("i4ijA",(function(t,r){e(t.exports,"default",(()=>B));var i=o("lwbau");const{toString:s}=Object.prototype,{getPrototypeOf:a}=Object,l=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),h=e=>t=>typeof t===e,{isArray:d}=Array,f=h("undefined");const p=u("ArrayBuffer");const m=h("string"),g=h("function"),y=h("number"),v=e=>null!==e&&"object"==typeof e,_=e=>{if("object"!==l(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),w=u("File"),x=u("Blob"),k=u("FileList"),C=u("URLSearchParams");function I(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function E(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,N=e=>!f(e)&&e!==T;const S=(R="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>R&&e instanceof R);var R;const A=u("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),O=u("RegExp"),L=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},D="abcdefghijklmnopqrstuvwxyz",M="0123456789",F={DIGIT:M,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+M};const z=u("AsyncFunction");var B={isArray:d,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=l(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:m,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:_,isUndefined:f,isDate:b,isFile:w,isBlob:x,isRegExp:O,isFunction:g,isStream:e=>v(e)&&g(e.pipe),isURLSearchParams:C,isTypedArray:S,isFileList:k,forEach:I,merge:function e(){const{caseless:t}=N(this)&&this||{},n={},r=(r,i)=>{const o=t&&E(n,i)||i;_(n[o])&&_(r)?n[o]=e(n[o],r):_(r)?n[o]=e({},r):d(r)?n[o]=r.slice():n[o]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&I(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(I(t,((t,r)=>{n&&g(t)?e[r]=(0,i.default)(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],r&&!r(s,e,t)||l[s]||(t[s]=e[s],l[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:A,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:L,freezeMethods:e=>{L(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:E,global:T,isContextDefined:N,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=d(e)?[]:{};return I(e,((e,t)=>{const o=n(e,r+1);!f(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:z,isThenable:e=>e&&(v(e)||g(e))&&g(e.then)&&g(e.catch)}})),o.register("lwbau",(function(t,n){function r(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(()=>r))})),o.register("eCrWh",(function(t,n){e(t.exports,"default",(()=>p));var r=o("i4ijA"),i=o("h9Lf1"),s=o("itbxz"),a=o("2u9Ce"),l=o("kSe7Y"),c=o("kHvG3"),u=o("hd4Q7"),h=o("fRBtE");const d=u.default.validators;class f{constructor(e){this.defaults=e,this.interceptors={request:new(0,s.default),response:new(0,s.default)}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,l.default)(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:o}=t;let s;void 0!==n&&u.default.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=i&&(r.default.isFunction(i)?t.paramsSerializer={serialize:i}:u.default.assertOptions(i,{encode:d.function,serialize:d.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&r.default.merge(o.common,o[t.method]),s&&r.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=h.default.concat(s,o);const c=[];let f=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));const p=[];let m;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let g,y=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,c),e.push.apply(e,p),g=e.length,m=Promise.resolve(t);y<g;)m=m.then(e[y++],e[y++]);return m}g=c.length;let v=t;for(y=0;y<g;){const e=c[y++],t=c[y++];try{v=e(v)}catch(e){t.call(this,e);break}}try{m=a.default.call(this,v)}catch(e){return Promise.reject(e)}for(y=0,g=p.length;y<g;)m=m.then(p[y++],p[y++]);return m}getUri(e){e=(0,l.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,i.default)(t,e.params,e.paramsSerializer)}}r.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request((0,l.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request((0,l.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),o.register("h9Lf1",(function(t,n){e(t.exports,"default",(()=>a));var r=o("i4ijA"),i=o("5B7zY");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const o=n&&n.encode||s,a=n&&n.serialize;let l;if(l=a?a(t,n):r.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,n).toString(o),l){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+l}return e}})),o.register("5B7zY",(function(t,n){e(t.exports,"default",(()=>l));var r=o("gZZY4");function i(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function s(e,t){this._pairs=[],e&&(0,r.default)(e,this,t)}const a=s.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var l=s})),o.register("gZZY4",(function(t,n){e(t.exports,"default",(()=>d));var r=o("i4ijA"),i=o("k5sPl"),s=o("l52nF"),a=o("cNvas").Buffer;function l(e){return r.default.isPlainObject(e)||r.default.isArray(e)}function c(e){return r.default.endsWith(e,"[]")?e.slice(0,-2):e}function u(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const h=r.default.toFlatObject(r.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,n){if(!r.default.isObject(e))throw new TypeError("target must be an object");t=t||new(s.default||FormData);const o=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!r.default.isUndefined(t[e])}))).metaTokens,d=n.visitor||y,f=n.dots,p=n.indexes,m=(n.Blob||"undefined"!=typeof Blob&&Blob)&&r.default.isSpecCompliantForm(t);if(!r.default.isFunction(d))throw new TypeError("visitor must be a function");function g(e){if(null===e)return"";if(r.default.isDate(e))return e.toISOString();if(!m&&r.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(e)||r.default.isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function y(e,n,i){let s=e;if(e&&!i&&"object"==typeof e)if(r.default.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.default.isArray(e)&&function(e){return r.default.isArray(e)&&!e.some(l)}(e)||(r.default.isFileList(e)||r.default.endsWith(n,"[]"))&&(s=r.default.toArray(e)))return n=c(n),s.forEach((function(e,i){!r.default.isUndefined(e)&&null!==e&&t.append(!0===p?u([n],i,f):null===p?n:n+"[]",g(e))})),!1;return!!l(e)||(t.append(u(i,n,f),g(e)),!1)}const v=[],_=Object.assign(h,{defaultVisitor:y,convertValue:g,isVisitable:l});if(!r.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!r.default.isUndefined(n)){if(-1!==v.indexOf(n))throw Error("Circular reference detected in "+i.join("."));v.push(n),r.default.forEach(n,(function(n,o){!0===(!(r.default.isUndefined(n)||null===n)&&d.call(t,n,r.default.isString(o)?o.trim():o,i,_))&&e(n,i?i.concat(o):[o])})),v.pop()}}(e),t}})),o.register("k5sPl",(function(t,n){e(t.exports,"default",(()=>l));var r=o("i4ijA");function i(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const s=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=(e,t,n,o,a,l)=>{const c=Object.create(s);return r.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),i.call(c,e.message,t,n,o,a),c.cause=e,c.name=e.name,l&&Object.assign(c,l),c};var l=i})),o.register("l52nF",(function(t,n){e(t.exports,"default",(()=>r));var r=null})),o.register("cNvas",(function(t,n){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var r,i;e(t.exports,"Buffer",(()=>r),(e=>r=e)),e(t.exports,"INSPECT_MAX_BYTES",(()=>i),(e=>i=e));var s=o("3g1et"),a=o("1AWVL"),l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;var c=2147483647;function u(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|v(e,t),r=u(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(H(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(H(e,ArrayBuffer)||e&&H(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(H(e,SharedArrayBuffer)||e&&H(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);var i=function(e){if(h.isBuffer(e)){var t=0|y(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||V(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|y(e))}function m(e){for(var t=e.length<0?0:0|y(e.length),n=u(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function y(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||H(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return j(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return W(e).length;default:if(i)return r?-1:j(e).length;t=(""+t).toLowerCase(),i=!0}}function _(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return S(this,t,n);case"ascii":return A(this,t,n);case"latin1":case"binary":return P(this,t,n);case"base64":return N(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),V(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:x(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):x(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function x(e,t,n,r,i){var o,s=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var u=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===u?0:o-u)){if(-1===u&&(u=o),o-u+1===l)return u*s}else-1!==u&&(o-=o-u),u=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){for(var h=!0,d=0;d<l;d++)if(c(e,o+d)!==c(t,d)){h=!1;break}if(h)return o}return-1}function k(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(V(a))return s;e[n+s]=a}return s}function C(e,t,n,r){return q(j(t,e.length-n),e,n,r)}function I(e,t,n,r){return q(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function E(e,t,n,r){return q(W(t),e,n,r)}function T(e,t,n,r){return q(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function N(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function S(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,s,a,l,c=e[i],u=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=n)switch(h){case 1:c<128&&(u=c);break;case 2:128==(192&(o=e[i+1]))&&(l=(31&c)<<6|63&o)>127&&(u=l);break;case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(l=(15&c)<<12|(63&o)<<6|63&s)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(l=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,h=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),i+=h}return function(e){var t=e.length;if(t<=R)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=R));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(H(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),H(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=h.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(H(o,Uint8Array))i+o.length>r.length?h.from(o).copy(r,i):Uint8Array.prototype.set.call(r,o,i);else{if(!h.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):_.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){var e="",t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(H(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),l=this.slice(r,i),c=e.slice(t,n),u=0;u<a;++u)if(l[u]!==c[u]){o=l[u],s=c[u];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return k(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return I(this,e,t,n);case"base64":return E(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function A(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function P(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function O(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=$[e[o]];return i}function L(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,r,i,o){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function F(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function z(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function B(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeFloatLE=function(e,t,n){return z(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return z(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return B(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return B(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var s=h.isBuffer(e)?e:h.from(e,r),a=s.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this};var U=/[^+/0-9A-Za-z-_]/g;function j(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function W(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(U,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function H(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function V(e){return e!=e}var $=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}()})),o.register("3g1et",(function(t,n){var r,i;e(t.exports,"toByteArray",(()=>r),(e=>r=e)),e(t.exports,"fromByteArray",(()=>i),(e=>i=e)),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],l=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,u=o>0?i-4:i;for(n=0;n<u;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,l[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,l=n-r;a<l;a+=s)i.push(d(e,a,a+s>l?l:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,u=l.length;c<u;++c)o[c]=l[c],s[l.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("1AWVL",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(()=>r),(e=>r=e)),e(t.exports,"write",(()=>i),(e=>i=e)),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=c}return(f?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,l,c=8*o-i-1,u=(1<<c)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*l-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m}})),o.register("itbxz",(function(t,n){e(t.exports,"default",(()=>i));var r=o("i4ijA");var i=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){r.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}})),o.register("2u9Ce",(function(t,n){e(t.exports,"default",(()=>h));var r=o("iQhXV"),i=o("5SIUr"),s=o("bJncD"),a=o("7XT9I"),l=o("fRBtE"),c=o("9o9qV");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function h(e){u(e),e.headers=l.default.from(e.headers),e.data=r.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(e.adapter||s.default.adapter)(e).then((function(t){return u(e),t.data=r.default.call(e,e.transformResponse,t),t.headers=l.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(u(e),t&&t.response&&(t.response.data=r.default.call(e,e.transformResponse,t.response),t.response.headers=l.default.from(t.response.headers))),Promise.reject(t)}))}})),o.register("iQhXV",(function(t,n){e(t.exports,"default",(()=>a));var r=o("i4ijA"),i=o("bJncD"),s=o("fRBtE");function a(e,t){const n=this||i.default,o=t||n,a=s.default.from(o.headers);let l=o.data;return r.default.forEach(e,(function(e){l=e.call(n,l,a.normalize(),t?t.status:void 0)})),a.normalize(),l}})),o.register("bJncD",(function(t,n){e(t.exports,"default",(()=>f));var r=o("i4ijA"),i=o("k5sPl"),s=o("fK4vu"),a=o("gZZY4"),l=o("aVTCj"),c=o("8KDYS"),u=o("2eGDI");const h={"Content-Type":void 0};const d={transitional:s.default,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=r.default.isObject(e);o&&r.default.isHTMLForm(e)&&(e=new FormData(e));if(r.default.isFormData(e))return i&&i?JSON.stringify((0,u.default)(e)):e;if(r.default.isArrayBuffer(e)||r.default.isBuffer(e)||r.default.isStream(e)||r.default.isFile(e)||r.default.isBlob(e))return e;if(r.default.isArrayBufferView(e))return e.buffer;if(r.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(e,this.formSerializer).toString();if((s=r.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,n){if(r.default.isString(e))try{return(t||JSON.parse)(e),r.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||d.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&r.default.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.default.forEach(["post","put","patch"],(function(e){d.headers[e]=r.default.merge(h)}));var f=d})),o.register("fK4vu",(function(t,n){e(t.exports,"default",(()=>r));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aVTCj",(function(t,n){e(t.exports,"default",(()=>a));var r=o("i4ijA"),i=o("gZZY4"),s=o("8KDYS");function a(e,t){return(0,i.default)(e,new s.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return s.default.isNode&&r.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),o.register("8KDYS",(function(t,n){e(t.exports,"default",(()=>c));var r=o("hbIyF"),i=o("jDCoP"),s=o("cuQ85");const a=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),l="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var c={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:s.default},isStandardBrowserEnv:a,isStandardBrowserWebWorkerEnv:l,protocols:["http","https","file","blob","url","data"]}})),o.register("hbIyF",(function(t,n){e(t.exports,"default",(()=>i));var r=o("5B7zY"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),o.register("jDCoP",(function(t,n){e(t.exports,"default",(()=>r));var r="undefined"!=typeof FormData?FormData:null})),o.register("cuQ85",(function(t,n){e(t.exports,"default",(()=>r));var r="undefined"!=typeof Blob?Blob:null})),o.register("2eGDI",(function(t,n){e(t.exports,"default",(()=>i));var r=o("i4ijA");var i=function(e){function t(e,n,i,o){let s=e[o++];const a=Number.isFinite(+s),l=o>=e.length;if(s=!s&&r.default.isArray(i)?i.length:s,l)return r.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!a;i[s]&&r.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],o)&&r.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}(i[s])),!a}if(r.default.isFormData(e)&&r.default.isFunction(e.entries)){const n={};return r.default.forEachEntry(e,((e,i)=>{t(function(e){return r.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null}})),o.register("fRBtE",(function(t,n){e(t.exports,"default",(()=>h));var r=o("i4ijA"),i=o("gwcWo");const s=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function l(e){return!1===e||null==e?e:r.default.isArray(e)?e.map(l):String(e)}function c(e,t,n,i,o){return r.default.isFunction(i)?i.call(this,t,n):(o&&(t=n),r.default.isString(t)?r.default.isString(i)?-1!==t.indexOf(i):r.default.isRegExp(i)?i.test(t):void 0:void 0)}class u{constructor(e){e&&this.set(e)}set(e,t,n){const o=this;function s(e,t,n){const i=a(t);if(!i)throw new Error("header name must be a non-empty string");const s=r.default.findKey(o,i);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||t]=l(e))}const c=(e,t)=>r.default.forEach(e,((e,n)=>s(e,n,t)));return r.default.isPlainObject(e)||e instanceof this.constructor?c(e,t):r.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?c((0,i.default)(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=a(e)){const n=r.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(r.default.isFunction(t))return t.call(this,e,n);if(r.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=r.default.findKey(this,e);return!(!n||void 0===this[n]||t&&!c(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function o(e){if(e=a(e)){const o=r.default.findKey(n,e);!o||t&&!c(0,n[o],o,t)||(delete n[o],i=!0)}}return r.default.isArray(e)?e.forEach(o):o(e),i}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!c(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return r.default.forEach(this,((i,o)=>{const s=r.default.findKey(n,o);if(s)return t[s]=l(i),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=l(i),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return r.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&r.default.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[s]=this[s]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=a(e);t[i]||(!function(e,t){const n=r.default.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[i]=!0)}return r.default.isArray(e)?e.forEach(i):i(e),this}}u.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),r.default.freezeMethods(u.prototype),r.default.freezeMethods(u);var h=u})),o.register("gwcWo",(function(t,n){e(t.exports,"default",(()=>i));const r=o("i4ijA").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=e=>{const t={};let n,i,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),i=e.substring(o+1).trim(),!n||t[n]&&r[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t}})),o.register("5SIUr",(function(t,n){function r(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(()=>r))})),o.register("7XT9I",(function(t,n){e(t.exports,"default",(()=>s));var r=o("k5sPl");function i(e,t,n){r.default.call(this,null==e?"canceled":e,r.default.ERR_CANCELED,t,n),this.name="CanceledError"}o("i4ijA").default.inherits(i,r.default,{__CANCEL__:!0});var s=i})),o.register("9o9qV",(function(t,n){e(t.exports,"default",(()=>c));var r=o("i4ijA"),i=o("l52nF"),s=o("2kdvM"),a=o("k5sPl");const l={http:i.default,xhr:s.default};r.default.forEach(l,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:e=>{e=r.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let o=0;o<t&&(n=e[o],!(i=r.default.isString(n)?l[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(r.default.hasOwnProp(l,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!r.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:l}})),o.register("2kdvM",(function(t,n){e(t.exports,"default",(()=>v));var r=o("i4ijA"),i=o("4Bh8W"),s=o("j9ifV"),a=o("h9Lf1"),l=o("kHvG3"),c=o("kgVUb"),u=o("fK4vu"),h=o("k5sPl"),d=o("7XT9I"),f=o("jOreR"),p=o("8KDYS"),m=o("fRBtE"),g=o("el6rn");function y(e,t){let n=0;const r=(0,g.default)(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var v="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const g=m.default.from(e.headers).normalize(),v=e.responseType;let _;function b(){e.cancelToken&&e.cancelToken.unsubscribe(_),e.signal&&e.signal.removeEventListener("abort",_)}r.default.isFormData(o)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv?g.setContentType(!1):g.setContentType("multipart/form-data;",!1));let w=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.set("Authorization","Basic "+btoa(t+":"+n))}const x=(0,l.default)(e.baseURL,e.url);function k(){if(!w)return;const r=m.default.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),o={data:v&&"text"!==v&&"json"!==v?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:r,config:e,request:w};(0,i.default)((function(e){t(e),b()}),(function(e){n(e),b()}),o),w=null}if(w.open(e.method.toUpperCase(),(0,a.default)(x,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=k:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(k)},w.onabort=function(){w&&(n(new(0,h.default)("Request aborted",h.default.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new(0,h.default)("Network Error",h.default.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||u.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,h.default)(t,r.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,e,w)),w=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(x))&&e.xsrfCookieName&&s.default.read(e.xsrfCookieName);t&&g.set(e.xsrfHeaderName,t)}void 0===o&&g.setContentType(null),"setRequestHeader"in w&&r.default.forEach(g.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),r.default.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),v&&"json"!==v&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(_=t=>{w&&(n(!t||t.type?new(0,d.default)(null,e,w):t),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(_),e.signal&&(e.signal.aborted?_():e.signal.addEventListener("abort",_)));const C=(0,f.default)(x);C&&-1===p.default.protocols.indexOf(C)?n(new(0,h.default)("Unsupported protocol "+C+":",h.default.ERR_BAD_REQUEST,e)):w.send(o||null)}))}})),o.register("4Bh8W",(function(t,n){e(t.exports,"default",(()=>i));var r=o("k5sPl");function i(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("j9ifV",(function(t,n){e(t.exports,"default",(()=>i));var r=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?{write:function(e,t,n,i,o,s){const a=[];a.push(e+"="+encodeURIComponent(t)),r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("kHvG3",(function(t,n){e(t.exports,"default",(()=>s));var r=o("2IQpt"),i=o("bb7xE");function s(e,t){return e&&!(0,r.default)(t)?(0,i.default)(e,t):t}})),o.register("2IQpt",(function(t,n){function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(()=>r))})),o.register("bb7xE",(function(t,n){function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(()=>r))})),o.register("kgVUb",(function(t,n){e(t.exports,"default",(()=>i));var r=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=r.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),o.register("jOreR",(function(t,n){function r(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(()=>r))})),o.register("el6rn",(function(t,n){e(t.exports,"default",(()=>r));var r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[s];i||(i=l),n[o]=a,r[o]=l;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}})),o.register("kSe7Y",(function(t,n){e(t.exports,"default",(()=>a));var r=o("i4ijA"),i=o("fRBtE");const s=e=>e instanceof i.default?e.toJSON():e;function a(e,t){t=t||{};const n={};function i(e,t,n){return r.default.isPlainObject(e)&&r.default.isPlainObject(t)?r.default.merge.call({caseless:n},e,t):r.default.isPlainObject(t)?r.default.merge({},t):r.default.isArray(t)?t.slice():t}function o(e,t,n){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function a(e,t){if(!r.default.isUndefined(t))return i(void 0,t)}function l(e,t){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const u={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(e,t)=>o(s(e),s(t),!0)};return r.default.forEach(Object.keys(Object.assign({},e,t)),(function(i){const s=u[i]||o,a=s(e[i],t[i],i);r.default.isUndefined(a)&&s!==c||(n[i]=a)})),n}})),o.register("hd4Q7",(function(t,n){e(t.exports,"default",(()=>l));var r=o("8WPkr"),i=o("k5sPl");const s={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};s.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new(0,i.default)(o(r," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var l={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],a=t[s];if(a){const t=e[s],n=void 0===t||a(t,s,e);if(!0!==n)throw new(0,i.default)("option "+s+" must be "+n,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,i.default)("Unknown option "+s,i.default.ERR_BAD_OPTION)}},validators:s}})),o.register("8WPkr",(function(t,n){e(t.exports,"VERSION",(()=>r));const r="1.4.0"})),o.register("9GGcx",(function(t,n){e(t.exports,"default",(()=>s));var r=o("7XT9I");class i{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,i,o){n.reason||(n.reason=new(0,r.default)(e,i,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new i((function(t){e=t})),cancel:e}}}var s=i})),o.register("4rx4g",(function(t,n){function r(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(()=>r))})),o.register("4Qexm",(function(t,n){e(t.exports,"default",(()=>i));var r=o("i4ijA");function i(e){return r.default.isObject(e)&&!0===e.isAxiosError}})),o.register("dcCu5",(function(t,n){e(t.exports,"default",(()=>i));const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach((([e,t])=>{r[t]=e}));var i=r})),o.register("7QdEN",(function(t,n){e(t.exports,"API_KEY",(()=>r));const r="e56bac74c49b45071b964a5f7a0906aa"})),o.register("gRLqu",(function(n,r){e(n.exports,"setModalButtons",(()=>u));var i=o("7zgG6"),s=o("7IoHk"),a=o("gwlyu"),l=o("dJlLU");const c=async(e,n)=>{const r=await(0,i.getUser)();if(r){const o=(0,i.addMovie)(e,n);console.log(o),(0,i.saveMovieToDatabase)(o,r),t(s).Notify.success(`Movie saved to ${n} successfully!`)}else t(s).Notify.warning("Please first login")},u=(e,n=null)=>{const r=document.getElementById("modal-watched"),o=document.getElementById("modal-queue");"watched"===n?(r.classList.add("hidden"),o.innerText="Move back to queue",o.addEventListener("click",(async()=>{await c(e,"queued"),(0,a.initializeLibrary)("watched"),(0,l.closeDetailModal)()}))):"queued"===n?(r.innerText="Move to watched",r.addEventListener("click",(async()=>{await c(e,"watched"),(0,a.initializeLibrary)("queued"),(0,l.closeDetailModal)()})),o.innerText="Remove from queue",o.classList.add("modal__btn--queued--remove"),o.addEventListener("click",(async()=>{await(async e=>{console.log(e);const n=await(0,i.getUser)();n&&((0,i.removeMovieFromDatabase)(e,n),t(s).Notify.success("Movie removed successfully!"))})(e),(0,a.initializeLibrary)("queued"),(0,l.closeDetailModal)()}))):n||(r.addEventListener("click",(async()=>{await c(e,"watched"),(0,l.closeDetailModal)()})),o.addEventListener("click",(async()=>{await c(e,"queued"),(0,l.closeDetailModal)()})))}})),o.register("7zgG6",(function(n,r){e(n.exports,"getUser",(()=>I)),e(n.exports,"reloadHeader",(()=>E)),e(n.exports,"getMovies",(()=>T)),e(n.exports,"removeMovieFromDatabase",(()=>N)),e(n.exports,"saveMovieToDatabase",(()=>S)),e(n.exports,"setRegisterAndSignUp",(()=>A)),e(n.exports,"addMovie",(()=>P));var i=o("jNl2S");o("2AKVI");var s=o("Tud8h"),a=o("7IoHk");o("46SdE");var l=o("eJ8Nv");o("bfis0");var c=o("b2Nym");const u=(0,s.initializeApp)({apiKey:"AIzaSyB0FxWwjInqh4F0be_50HwVzJ0iqkETgXY",authDomain:"filmoteka-f3080.firebaseapp.com",projectId:"filmoteka-f3080",storageBucket:"filmoteka-f3080.appspot.com",messagingSenderId:"339706643558",appId:"1:339706643558:web:94b37fe16030e950b259a7",measurementId:"G-81MRNCTEB6",databaseURL:"https://filmoteka-f3080-default-rtdb.europe-west1.firebasedatabase.app"}),h=(0,l.o)(),d=(0,c.getDatabase)(u),f=document.getElementById("user-email"),p=document.getElementById("user-password"),m=document.getElementById("register-btn"),g=document.getElementById("login-btn"),y=document.getElementById("logout-btn"),v=document.getElementById("reset-btn"),_=document.getElementById("google-btn"),b=document.getElementById("dialog-login"),w=document.getElementById("library-link"),x=document.getElementById("sign-in"),k=document.getElementById("logout-btn"),C=()=>{f.value="",p.value=""},I=async()=>{try{const e=(0,l.o)(),t=await new Promise(((t,n)=>{(0,l.x)(e,t)()}));return t||!1}catch(e){console.error("Error checking user state:",e)}},E=async()=>{await I()?(w.classList.remove("hidden"),x.classList.add("hidden"),k.classList.remove("hidden")):(w.classList.add("hidden"),x.classList.remove("hidden"),k.classList.add("hidden"),(0,i.dialogBehavior)())},T=async e=>{try{const t=await(0,c.get)((0,c.ref)(d,"users/"+e.uid+"/movies"));return t.exists()?t.val():(console.log("No data available"),!1)}catch(e){console.error(e)}},N=(e,t)=>{const n=(0,c.ref)(d,"users/"+t.uid+`/movies/${e.id}`);(0,c.remove)(n).then((()=>{console.log("movie removed successfully")})).catch((e=>{console.error("Error saving user to database:",e)}))},S=(e,t)=>{const n=(0,c.ref)(d,"users/"+t.uid+`/movies/${e.id}`),r={id:e.id,title:e.title,poster_path:e.poster_path,release_date:e.release_date,type:e.type,vote_average:e.vote_average,genres:e.genre_ids.toString()};(0,c.set)(n,r).then((()=>{console.log("movie saved")})).catch((e=>{console.error("Error saving user to database:",e)}))},R=(e,t)=>{const n=(0,c.ref)(d,"users/"+e.uid+"/user"),r={id:e.uid,email:t};(0,c.set)(n,r).then((()=>{console.log("Saved user to database")})).catch((e=>{console.error("Error saving user to database:",e)}))},A=()=>{m.addEventListener("click",(e=>{(0,l.a8)(h,f.value,p.value).then((e=>{const t=e.user;R(t,f.value),C(),b.close()}))})),g.addEventListener("click",(e=>{(0,l.a9)(h,f.value,p.value).then((e=>{const n=e.user;t(a).Notify.success(n.email+" login successfuly!"),C(),E(),b.close()})).catch((e=>{console.log(e.message)}))})),y.addEventListener("click",(e=>{(0,l.B)(h).then((()=>{t(a).Notify.success("Log out successful!"),E()}))})),v.addEventListener("click",(e=>{(0,l.a3)(h,f.value).then((()=>t(a).Notify.success("Password reset email sent")))})),_.addEventListener("click",(e=>{const n=new(0,l.V);(0,l.c)(h,n).then((e=>{t(a).Notify.success("Login successfuly!");l.V.credentialFromResult(e).accessToken;const n=e.user;R(n,n.email),E(),b.close()})).catch((e=>{const t=e.code,n=e.message;l.V.credentialFromError(e);alert(n,t)}))}))},P=(e,t)=>({id:e.id,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date,genre_ids:e.genres.map((e=>e.id)),type:t})})),o.register("jNl2S",(function(t,n){e(t.exports,"dialogBehavior",(()=>v));const r=document.getElementById("user-password"),i=document.getElementById("reset-link"),o=document.getElementById("register-link"),s=document.getElementById("sign-in"),a=document.getElementById("dialog-login"),l=document.getElementById("close-dialog-btn"),c=document.getElementById("register-info"),u=document.getElementById("reset-info"),h=document.getElementById("register-btn"),d=document.getElementById("login-btn"),f=document.getElementById("reset-btn"),p=document.getElementById("goback-info");s.addEventListener("click",(()=>a.showModal()));const m=e=>e.classList.add("hidden"),g=e=>e.classList.remove("hidden"),y=()=>{g(c),g(u),g(d),g(r),m(h),m(f),m(p)};l.addEventListener("click",(()=>{y(),a.close()}));const v=()=>{o.addEventListener("click",(()=>(m(d),m(c),m(u),g(h),void g(p)))),i.addEventListener("click",(()=>(m(d),m(c),m(u),m(r),g(f),void g(p)))),p.addEventListener("click",(()=>y()))}})),o.register("2AKVI",(function(t,n){e(t.exports,"initializeApp",(()=>o("Tud8h").initializeApp)),e(t.exports,"registerVersion",(()=>o("Tud8h").registerVersion));o("Tud8h");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,o("Tud8h").registerVersion)("firebase","9.22.0","app")})),o.register("Tud8h",(function(t,n){e(t.exports,"_registerComponent",(()=>y)),e(t.exports,"_getProvider",(()=>v)),e(t.exports,"SDK_VERSION",(()=>x)),e(t.exports,"initializeApp",(()=>k)),e(t.exports,"getApp",(()=>C)),e(t.exports,"registerVersion",(()=>I));var r=o("94PYV"),i=o("4qWNj"),s=o("5hSES"),a=(s=o("5hSES"),o("9tn3b"));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",u="0.9.10",h=new(0,i.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,s.ErrorFactory)("app","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="9.22.0";function k(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw b.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=p.get(o);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:o})}const l=new(0,r.ComponentContainer)(o);for(const e of m.values())l.addComponent(e);const c=new w(n,i,l);return p.set(o,c),c}function C(e=d){const t=p.get(e);if(!t&&e===d&&(0,s.getDefaultAppConfig)())return k();if(!t)throw b.create("no-app",{appName:e});return t}function I(e,t,n){var i;let o=null!==(i=f[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}y(new(0,r.Component)(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="firebase-heartbeat-store";let T=null;function N(){return T||(T=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(E)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),T}async function S(e,t){try{const n=(await N()).transaction(E,"readwrite"),r=n.objectStore(E);await r.put(t,R(e)),await n.done}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function R(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new O(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=P();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=P(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),L(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function P(){return(new Date).toISOString().substring(0,10)}class O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await N();return await t.transaction(E).objectStore(E).get(R(e))}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{const t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function L(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;D="",y(new(0,r.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(e=>new A(e)),"PRIVATE")),I(c,u,D),I(c,u,"esm2017"),I("fire-js","")})),o.register("94PYV",(function(t,n){e(t.exports,"Component",(()=>i)),e(t.exports,"ComponentContainer",(()=>l));var r=o("5hSES");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),o.register("5hSES",(function(t,r){e(t.exports,"assert",(()=>c)),e(t.exports,"assertionError",(()=>u)),e(t.exports,"base64",(()=>d)),e(t.exports,"base64Encode",(()=>p)),e(t.exports,"base64urlEncodeWithoutPadding",(()=>m)),e(t.exports,"base64Decode",(()=>g)),e(t.exports,"deepCopy",(()=>y)),e(t.exports,"getDefaultEmulatorHost",(()=>w)),e(t.exports,"getDefaultEmulatorHostnameAndPort",(()=>x)),e(t.exports,"getDefaultAppConfig",(()=>k)),e(t.exports,"getExperimentalSetting",(()=>C)),e(t.exports,"Deferred",(()=>I)),e(t.exports,"createMockUserToken",(()=>E)),e(t.exports,"getUA",(()=>T)),e(t.exports,"isMobileCordova",(()=>N)),e(t.exports,"isBrowserExtension",(()=>S)),e(t.exports,"isReactNative",(()=>R)),e(t.exports,"isIE",(()=>A)),e(t.exports,"isNodeSdk",(()=>P)),e(t.exports,"isIndexedDBAvailable",(()=>O)),e(t.exports,"validateIndexedDBOpenable",(()=>L)),e(t.exports,"FirebaseError",(()=>D)),e(t.exports,"ErrorFactory",(()=>M)),e(t.exports,"jsonEval",(()=>z)),e(t.exports,"stringify",(()=>B)),e(t.exports,"isValidFormat",(()=>j)),e(t.exports,"isAdmin",(()=>W)),e(t.exports,"contains",(()=>q)),e(t.exports,"safeGet",(()=>H)),e(t.exports,"isEmpty",(()=>V)),e(t.exports,"map",(()=>$)),e(t.exports,"deepEqual",(()=>K)),e(t.exports,"querystring",(()=>X)),e(t.exports,"querystringDecode",(()=>Y)),e(t.exports,"extractQuerystring",(()=>J)),e(t.exports,"Sha1",(()=>Q)),e(t.exports,"createSubscribe",(()=>Z)),e(t.exports,"errorPrefix",(()=>ne)),e(t.exports,"stringToByteArray",(()=>re)),e(t.exports,"stringLength",(()=>ie)),e(t.exports,"getModularInstance",(()=>oe));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i=o("2C7N7");const s=!1,a=!1,l="${JSCORE_VERSION}",c=function(e,t){if(!e)throw u(t)},u=function(e){return new Error("Firebase Database ("+l+") INTERNAL ASSERT FAILED: "+e)},h=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw new f;const l=i<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p=function(e){const t=h(e);return d.encodeByteArray(t,!0)},m=function(e){return p(e).replace(/\./g,"")},g=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=v(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{try{return _()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&g(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},k=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=b())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function N(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function S(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function R(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){const e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function P(){return!0===s||!0===a}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}function L(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(F,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new D(r,s,n)}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=z(g(o[0])||""),n=z(g(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},j=function(e){const t=U(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},W=function(e){const t=U(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function K(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(G(n)&&G(o)){if(!K(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function G(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Y(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function J(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^s&(a^l),i=1518500249):(r=s^a^l,i=1859775393):e<60?(r=s&a|l&(s|a),i=2400959708):(r=s^a^l,i=3395469782);const t=(o<<5|o>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function Z(e,t){const n=new ee(e,t);return n.subscribe.bind(n)}class ee{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=te),void 0===r.error&&(r.error=te),void 0===r.complete&&(r.complete=te);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function te(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,c(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ie=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(e){return e&&e._delegate?e._delegate:e}})),o.register("2C7N7",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("4qWNj",(function(t,n){e(t.exports,"LogLevel",(()=>i)),e(t.exports,"Logger",(()=>u)),e(t.exports,"setLogLevel",(()=>h)),e(t.exports,"setUserLogHandler",(()=>d));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,o;(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=l[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}})),o.register("9tn3b",(function(t,n){e(t.exports,"openDB",(()=>i));var r=o("aLdag");r=o("aLdag");function i(e,t,{blocked:n,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),l=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),l.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!s.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return l.set(t,o),o}(0,r.r)((e=>({...e,get:(t,n,r)=>c(t,n)||e.get(t,n,r),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),o.register("aLdag",(function(t,n){e(t.exports,"w",(()=>p)),e(t.exports,"r",(()=>h));let r,i;const o=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){u=e(u)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),p(o.get(this))}:function(...t){return p(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return a.set(r,t.sort?t.sort():[t]),p(r)}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));s.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,u):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(p(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),o.register("7IoHk",(function(e,t){var r,i;r=void 0===n?"undefined"==typeof window?e.exports:window:n,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,r,i,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",_="Ask",b="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",C="Circle",I="Arrows",E="Dots",T="Pulse",N="Custom",S="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",P="Hourglass",O="Circle",L="Arrows",D="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},B=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},U=function(t){return t||(t="head"),null!==e.document[t]||(z('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=t&&"[object Object]"===Object.prototype.toString.call(n[r])?W(e[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,r,i,o){if(!U("body"))return!1;t||ce.Notify.init({});var s=W(!0,t,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof i?f=i:"object"==typeof o&&(f=o),t=W(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];J++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=q(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+J,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof i&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?v:"");else{var _="";n===l?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=_+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var w=e.document.getElementById(y.id);if(w){var x,k,C=function(){w.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof i&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof i||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof i&&i(),C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof i){var E=function(){x=setTimeout((function(){C()}),t.timeout),k=setTimeout((function(){I()}),t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),E()})))}}if(t.showOnlyTheLastOne&&0<J)for(var T,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),S=0;S<N.length;S++)null!==(T=N[S]).parentNode&&T.parentNode.removeChild(T);t=W(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,r,i,o,s,l){if(!U("body"))return!1;n||ce.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+t),"string"!=typeof i&&(t===f?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(r=q(r),i=q(i),o=q(o)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",_=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(_?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";if(t===f?b=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===p?b=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?b=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(b=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+b+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var w=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var r=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(r)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),w()})),v&&_&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){w()}))}n=W(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,i,o,s,l,c,u,h){if(!U("body"))return!1;r||ce.Confirm.init({});var d=W(!0,r,{});"object"!=typeof h||Array.isArray(h)||(r=W(!0,r,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),r.plainText&&(n=q(n),i=q(i),s=q(s),l=q(l)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),s.length>r.buttonsMaxLength&&(s=s.substring(0,r.buttonsMaxLength)+"..."),l.length>r.buttonsMaxLength&&(l=l.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=w.ID,f.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),f.style.zIndex=r.zindex,f.style.padding=r.distance,r.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof r.position?r.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+r.fontFamily+'", '+a;var m="";r.backOverlay&&(m='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+l+"</a>");var y="",v=null,x=void 0;if(t===_||t===b){v=o||"";var k=t===_||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+k+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+y+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var C=e.document.getElementById(f.id),I=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(e){var n=e.target.value;t===_&&n!==v?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===_&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(e){if(t===_&&v&&E){if((E.value||"").toString()!==v)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&E&&(x=E.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===b&&E&&(x=E.value||""),u(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),r.cssAnimationDuration)}))}r=W(!0,r,d)},re=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ie=function(t,n,r,o,s){if(!U("body"))return!1;i||ce.Loading.init({});var l=W(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var c={};"object"==typeof n?c=n:"object"==typeof r&&(c=r),i=W(!0,i,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>i.messageMaxLength?q(u).toString().substring(0,i.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+u+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var d="";if(t===x)d=H(i.svgSize,i.svgColor);else if(t===k)d=V(i.svgSize,i.svgColor);else if(t===C)d=$(i.svgSize,i.svgColor);else if(t===I)d=K(i.svgSize,i.svgColor);else if(t===E)d=G(i.svgSize,i.svgColor);else if(t===T)d=X(i.svgSize,i.svgColor);else if(t===N&&null!==i.customSvgCode&&null===i.customSvgUrl)d=i.customSvgCode||"";else if(t===N&&null!==i.customSvgUrl&&null===i.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===i.customSvgUrl||null===i.customSvgCode))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var f=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+i.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=i.zindex,y.style.background=i.backgroundColor,y.style.animationDuration=i.cssAnimationDuration+"ms",y.style.fontFamily='"'+i.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",i.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),i.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),i.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var v=e.document.getElementById(R.ID),_=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),i.cssAnimationDuration);clearTimeout(_)}),s);i=W(!0,i,l)},oe=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>i.messageMaxLength?q(t).substring(0,i.messageMaxLength)+"...":q(t);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=t;else{var o=e.document.createElement("p");o.id=i.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=i.messageColor,o.style.fontSize=i.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else z("Where is the new message?")},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,le=function(t,n,r,i,s,l){var c;if(Array.isArray(r)){if(1>r.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;c=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(r);if(1>u.length)return z('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||ce.Block.init({});var h=W(!0,o,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof i?d=i:"object"==typeof s&&(d=s),o=W(!0,o,d)}var f="";"string"==typeof i&&0<i.length&&(f=i),o.cssAnimation||(o.cssAnimationDuration=0);var p=F.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var v,_=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<_.indexOf(v.tagName.toLocaleLowerCase("en")))break;var w=v.querySelectorAll("[id^="+F.ID+"]");if(1>w.length){var x="";n&&(x=n===P?V(o.svgSize,o.svgColor):n===O?$(o.svgSize,o.svgColor):n===L?K(o.svgSize,o.svgColor):n===D?G(o.svgSize,o.svgColor):n===M?X(o.svgSize,o.svgColor):H(o.svgSize,o.svgColor));var k='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+x+"</span>",C="";0<f.length&&(f=f.length>o.messageMaxLength?q(f).substring(0,o.messageMaxLength)+"...":q(f),C='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),ae++;var I=e.document.createElement("div");I.id=F.ID+"-"+ae,I.className=p+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=k+C;var E,T=e.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof T?T.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(o.svgSize))+40,R="";S>(v.offsetHeight||0)&&(R="min-height:"+S+"px;"),E=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var A="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(j||0<R.length){if(!U("head"))return!1;j&&(A="position:relative!important;");var Y='<style id="Style-'+F.ID+"-"+ae+'">'+E+"."+y+"{"+A+R+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(Y);e.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var r=t.getAttribute("id"),i=e.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else B("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+F.ID+"]"),ee(w));clearTimeout(ne)}),l);o=W(!0,o,h)},ce={Notify:{init:function(e){t=W(!0,d,e),j(Y,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(h,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,r,i){ee(f,e,t,n,r,i)},failure:function(e,t,n,r,i){ee(p,e,t,n,r,i)},warning:function(e,t,n,r,i){ee(m,e,t,n,r,i)},info:function(e,t,n,r,i){ee(g,e,t,n,r,i)}},Confirm:{init:function(e){r=W(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,r,i,o,s){ne(v,e,t,null,n,r,i,o,s)},ask:function(e,t,n,r,i,o,s,a){ne(_,e,t,n,r,i,o,s,a)},prompt:function(e,t,n,r,i,o,s,a){ne(b,e,t,n,r,i,o,s,a)}},Loading:{init:function(e){i=W(!0,R,e),j(re,"NotiflixLoadingInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ie(x,e,t,!0,0)},hourglass:function(e,t){ie(k,e,t,!0,0)},circle:function(e,t){ie(C,e,t,!0,0)},arrows:function(e,t){ie(I,e,t,!0,0)},dots:function(e,t){ie(E,e,t,!0,0)},pulse:function(e,t){ie(T,e,t,!0,0)},custom:function(e,t){ie(N,e,t,!0,0)},notiflix:function(e,t){ie(S,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ie(null,null,null,!1,e)},change:function(e){oe(e)}},Block:{init:function(e){o=W(!0,F,e),j(se,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){le(!0,A,e,t,n)},hourglass:function(e,t,n){le(!0,P,e,t,n)},circle:function(e,t,n){le(!0,O,e,t,n)},arrows:function(e,t,n){le(!0,L,e,t,n)},dots:function(e,t,n){le(!0,D,e,t,n)},pulse:function(e,t,n){le(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),le(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}):{Notify:ce.Notify,Report:ce.Report,Confirm:ce.Confirm,Loading:ce.Loading,Block:ce.Block}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),o.register("46SdE",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(()=>o("eJ8Nv").a8)),e(t.exports,"getAuth",(()=>o("eJ8Nv").o)),e(t.exports,"GoogleAuthProvider",(()=>o("eJ8Nv").V)),e(t.exports,"onAuthStateChanged",(()=>o("eJ8Nv").x)),e(t.exports,"sendPasswordResetEmail",(()=>o("eJ8Nv").a3)),e(t.exports,"signInWithEmailAndPassword",(()=>o("eJ8Nv").a9)),e(t.exports,"signInWithPopup",(()=>o("eJ8Nv").c)),e(t.exports,"signOut",(()=>o("eJ8Nv").B)),o("aCkGa")})),o.register("aCkGa",(function(t,n){e(t.exports,"GoogleAuthProvider",(()=>o("eJ8Nv").V)),e(t.exports,"createUserWithEmailAndPassword",(()=>o("eJ8Nv").a8)),e(t.exports,"getAuth",(()=>o("eJ8Nv").o)),e(t.exports,"onAuthStateChanged",(()=>o("eJ8Nv").x)),e(t.exports,"sendPasswordResetEmail",(()=>o("eJ8Nv").a3)),e(t.exports,"signInWithEmailAndPassword",(()=>o("eJ8Nv").a9)),e(t.exports,"signInWithPopup",(()=>o("eJ8Nv").c)),e(t.exports,"signOut",(()=>o("eJ8Nv").B));o("eJ8Nv");o("5hSES"),o("Tud8h"),o("4qWNj"),o("94PYV")})),o.register("eJ8Nv",(function(t,n){e(t.exports,"V",(()=>Be)),e(t.exports,"a3",(()=>Qe)),e(t.exports,"a8",(()=>Ze)),e(t.exports,"a9",(()=>et)),e(t.exports,"x",(()=>tt)),e(t.exports,"B",(()=>nt)),e(t.exports,"c",(()=>Lt)),e(t.exports,"o",(()=>vn));var r=o("5hSES"),i=o("Tud8h"),s=o("9vt5s"),a=o("4qWNj"),l=o("94PYV");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,a.Logger)("@firebase/auth");function f(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function y(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&p(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function _(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(k()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function A(e,t,n,i,o={}){return P(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))}))}async function P(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new D(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw M(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw M(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;p(e,"network-request-failed",{message:String(t)})}}async function O(e,t,n,r,i={}){const o=await A(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),S.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){return 1e3*Number(e)}function B(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function U(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class j{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await U(e,async function(e,t){return A(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,s.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new W(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=B(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await P(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=L(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new H;return n&&(_("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ${constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,s.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await U(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),o=B(i);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:i,authTime:F(z(o.auth_time)),issuedAtTime:F(z(o.iat)),expirationTime:F(z(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await U(this,async function(e,t){return A(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=t;_(v&&k,e,"internal-error");const C=H.fromJSON(this.name,k);_("string"==typeof v,e,"internal-error"),V(u,e.name),V(h,e.name),_("boolean"==typeof b,e,"internal-error"),_("boolean"==typeof w,e,"internal-error"),V(d,e.name),V(f,e.name),V(p,e.name),V(m,e.name),V(g,e.name),V(y,e.name);const I=new $({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new H;r.updateFromServerResponse(t);const i=new $({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await q(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new Map;function G(e){w(e instanceof Function,"Expected a class definition");let t=K.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,K.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X.type="NONE";const Y=X;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Q{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Q(G(Y),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||G(Y);const o=J(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=$._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Q(i,e,n)):new Q(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(re(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(oe(t))return"Blackberry";if(se(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(e=(0,r.getUA)()){return/firefox\//i.test(e)}function te(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ne(e=(0,r.getUA)()){return/crios\//i.test(e)}function re(e=(0,r.getUA)()){return/iemobile/i.test(e)}function ie(e=(0,r.getUA)()){return/android/i.test(e)}function oe(e=(0,r.getUA)()){return/blackberry/i.test(e)}function se(e=(0,r.getUA)()){return/webos/i.test(e)}function ae(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function le(e=(0,r.getUA)()){return ae(e)||ie(e)||se(e)||oe(e)||/windows phone/i.test(e)||re(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=Z((0,r.getUA)());break;case"Worker":n=`${Z((0,r.getUA)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e,t){return A(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return void 0!==e&&void 0!==e.enterprise}class de{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class me{constructor(e){this.type="recaptcha-enterprise",this.auth=_e(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;he(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{ue(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new de(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&he(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));fe("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function ge(e,t,n,r=!1){const i=new me(e);let o;try{o=await i.verify(n)}catch(e){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new be(this),this.idTokenSubscription=new be(this),this.beforeStateQueue=new ye(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=G(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(G(e))}))}async initializeRecaptchaConfig(){const e=await ue(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new de(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new me(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&G(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[G(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){d.logLevel<=a.LogLevel.WARN&&d.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function _e(e){return(0,r.getModularInstance)(e)}class be{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t,n){const r=_e(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=xe(t),{host:s,port:a}=function(e){const t=xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ke(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ke(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ke(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return A(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(e,t){return O(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}async function Te(e,t){return A(e,"POST","/v1/accounts:sendOobCode",R(e,t))}async function Ne(e,t){return Te(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ge(e,n,"signInWithPassword");return Ee(e,t)}return Ee(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ge(e,n,"signInWithPassword");return Ee(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ie(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t){return O(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,s.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ae(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Re(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Re(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Re(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Oe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Oe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await O(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Pe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Oe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){var t,n,i,o,s,a;const l=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);_(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Le(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(){this.providerId=De.PROVIDER_ID}static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Le.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}}De.PROVIDER_ID="password",De.EMAIL_PASSWORD_SIGN_IN_METHOD="password",De.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Me{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze extends Fe{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch(e){return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com",ze.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be extends Fe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ae._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Be.credential(t,n)}catch(e){return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com",Be.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends Fe{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch(e){return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com",Ue.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends Fe{constructor(){super("twitter.com")}static credential(e,t){return Ae._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return je.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function We(e,t){return O(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.TWITTER_SIGN_IN_METHOD="twitter.com",je.PROVIDER_ID="twitter.com";class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await $._fromIdTokenResponse(e,n,r),o=He(n);return new qe({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=He(n);return new qe({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve extends r.FirebaseError{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ve.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ve(e,t,n,r)}}function $e(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ve._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(e,t,n=!1){const r=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qe._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ge(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await U(e,$e(r,i,t,e),n);_(o.idToken,r,"internal-error");const s=B(o.idToken);_(s,r,"internal-error");const{sub:a}=s;return _(e.uid===a,r,"user-mismatch"),qe._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t,n=!1){const r="signIn",i=await $e(e,r,t),o=await qe._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Ye(e,t){return Xe(_e(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t,n){var r;const i=_e(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ge(i,o,"getOobCode",!0);n&&Je(i,e,n),await Ne(i,e)}else n&&Je(i,o,n),await Ne(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await ge(i,o,"getOobCode",!0);n&&Je(i,e,n),await Ne(i,e)}}))}async function Ze(e,t,n){var r;const i=_e(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await ge(i,o,"signUpPassword");s=We(i,e)}else s=We(i,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await ge(i,o,"signUpPassword");return We(i,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),l=await qe._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function et(e,t,n){return Ye((0,r.getModularInstance)(e),De.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,t,n,i){return(0,r.getModularInstance)(e).onAuthStateChanged(t,n,i)}function nt(e){return(0,r.getModularInstance)(e).signOut()}new WeakMap;const rt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rt,"1"),this.storage.removeItem(rt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends it{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ot.type="LOCAL";const st=ot;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends it{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}at.type="SESSION";const lt=at;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.receivers=[];class ht{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=ut("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(){return void 0!==dt().WorkerGlobalScope&&"function"==typeof dt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt="firebaseLocalStorageDb",mt="firebaseLocalStorage",gt="fbase_key";class yt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vt(e,t){return e.transaction([mt],t?"readwrite":"readonly").objectStore(mt)}function _t(){const e=indexedDB.open(pt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(mt,{keyPath:gt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(mt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(pt);return new yt(e).toPromise()}(),t(await _t()))}))}))}async function bt(e,t,n){const r=vt(e,!0).put({[gt]:t,value:n});return new yt(r).toPromise()}function wt(e,t){const n=vt(e,!0).delete(t);return new yt(n).toPromise()}class xt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _t()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ft()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ct._getInstance(ft()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ht(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _t();return await bt(e,rt,"1"),await wt(e,rt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=vt(e,!1).get(t),r=await new yt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vt(e,!1).getAll();return new yt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}xt.type="LOCAL";const kt=xt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pe("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct="recaptcha";async function It(e,t,n){var r;const i=await n.verify();try{let o;if(_("string"==typeof i,e,"argument-error"),_(n.type===Ct,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");const s=await function(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return A(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(e){this.providerId=Et.PROVIDER_ID,this.auth=_e(e)}verifyPhoneNumber(e,t){return It(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Oe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Et.credentialFromTaggedObject(t)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Oe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(e,t){return t?G(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.PROVIDER_ID="phone",Et.PHONE_SIGN_IN_METHOD="phone";class Nt extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Re(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function St(e){return Xe(e.auth,new Nt(e),e.bypassAuthState)}function Rt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ge(n,new Nt(e),e.bypassAuthState)}async function At(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ke(n,new Nt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return St;case"linkViaPopup":case"linkViaRedirect":return At;case"reauthViaPopup":case"reauthViaRedirect":return Rt;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new I(2e3,1e4);async function Lt(e,t,n){const r=_e(e);y(e,t,Me);const i=Tt(r,n);return new Dt(r,"signInViaPopup",t,i).executeNotNull()}class Dt extends Pt{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=ut();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ot.get())};e()}}Dt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt=new Map;class Ft extends Pt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Mt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ut(t),r=Bt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Mt.set(this.auth._key(),e)}return this.bypassAuthState||Mt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function zt(e,t){Mt.set(e._key(),t)}function Bt(e){return G(e._redirectPersistence)}function Ut(e){return J("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t,n=!1){const r=_e(e),i=Tt(r,t),o=new Ft(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class Wt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ht(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ht(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qt(e))}saveEventToCache(e){this.cachedEventUids.add(qt(e)),this.lastProcessedEventTime=Date.now()}}function qt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ht({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$t=/^https?/;async function Kt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return A(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Gt(e))return}catch(e){}p(e,"unauthorized-domain")}function Gt(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!$t.test(n))return!1;if(Vt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new I(3e4,6e4);function Yt(){const e=dt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Jt=null;function Qt(e){return Jt=Jt||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){Yt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yt(),n(m(e,"network-request-failed"))},timeout:Xt.get()})}if(null===(i=null===(r=dt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=dt().gapi)||void 0===o?void 0:o.load)){const t=pe("iframefcb");return dt()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},fe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Jt=null,e}))}(e),Jt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new I(5e3,15e3),en={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},s=tn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.querystring)(o).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class on{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function sn(e,t,n,i=500,o=600){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},rn),{width:i.toString(),height:o.toString(),top:s,left:a}),u=(0,r.getUA)().toLowerCase();n&&(l=ne(u)?"_blank":n),ee(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new on(null);const d=window.open(t||"",l,h);_(d,e,"popup-blocked");try{d.focus()}catch(e){}return new on(d)}const an="__/auth/handler",ln="emulator/auth/handler",cn=encodeURIComponent("fac");async function un(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:s};if(t instanceof Me){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Fe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const u=await e._getAppCheckToken(),h=u?`#${cn}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?E(e,ln):`https://${e.authDomain}/${an}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.querystring)(c).slice(1)}${h}`}const hn="webStorageSupport";const dn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lt,this._completeRedirectFn=jt,this._overrideRedirectResult=zt}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return sn(e,await un(e,t,n,x(),r),ut())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){dt().location.href=e}(await un(e,t,n,x(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Qt(e),n=dt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:nn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:en,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),o=dt().setTimeout((()=>{r(i)}),Zt.get());function s(){dt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new Wt(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hn,{type:hn},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[hn];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||te()||ae()}};var fn="@firebase/auth",pn="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let yn=null;function vn(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:dn,persistence:[kt,st,lt]}),o=(0,r.getExperimentalSetting)("authTokenSyncURL");if(o){const e=(s=o,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>gn)return;const r=null==t?void 0:t.token;yn!==r&&(yn=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){(0,r.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){(0,r.getModularInstance)(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&we(n,`http://${a}`),n}var _n;_n="Browser",(0,i._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:_n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(_n)},l=new ve(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(G);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,l.Component)("auth-internal",(e=>(e=>new mn(e))(_e(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(fn,pn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_n)),(0,i.registerVersion)(fn,pn,"esm2017")})),o.register("9vt5s",(function(t,n){e(t.exports,"__rest",(()=>r));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),o.register("bfis0",(function(t,n){e(t.exports,"get",(()=>o("b2Nym").get)),e(t.exports,"getDatabase",(()=>o("b2Nym").getDatabase)),e(t.exports,"ref",(()=>o("b2Nym").ref)),e(t.exports,"remove",(()=>o("b2Nym").remove)),e(t.exports,"set",(()=>o("b2Nym").set)),o("b2Nym")})),o.register("b2Nym",(function(t,n){e(t.exports,"ref",(()=>_i)),e(t.exports,"set",(()=>xi)),e(t.exports,"remove",(()=>wi)),e(t.exports,"get",(()=>ki)),e(t.exports,"getDatabase",(()=>Si));var r=o("Tud8h"),i=o("94PYV"),s=o("5hSES"),a=o("4qWNj"),l=o("2C7N7");const c="@firebase/database",u="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new f},m=p("localStorage"),g=p("sessionStorage"),y=new(0,a.Logger)("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),_=function(e){const t=(0,s.stringToByteArray)(e),n=new(0,s.Sha1);n.update(t);const r=n.digest();return s.base64.encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=b.apply(null,r):t+="object"==typeof r?(0,s.stringify)(r):r,t+=" "}return t};let w=null,x=!0;const k=function(e,t){(0,s.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(y.logLevel=a.LogLevel.VERBOSE,w=y.log.bind(y),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},C=function(...e){if(!0===x&&(x=!1,null===w&&!0===g.get("logging_enabled")&&k(!0)),w){const t=b.apply(null,e);w(t)}},I=function(e){return function(...t){C(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);y.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw y.error(t),new Error(t)},N=function(...e){const t="FIREBASE WARNING: "+b(...e);y.warn(t)},S=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R="[MIN_NAME]",A="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===R||t===A)return-1;if(t===R||e===A)return 1;{const n=U(e),r=U(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.stringify)(t))},D=function(e){if("object"!=typeof e||null===e)return(0,s.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,s.stringify)(t[r]),n+=":",n+=D(e[t[r]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const z=function(e){(0,s.assert)(!S(e),"Invalid JSON number");const t=1023;let n,r,i,o,a;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=o+t,i=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(a=11;a;a-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(n?1:0),l.reverse();const c=l.join("");let u="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const B=new RegExp("^-?(0*)\\d{1,10}$"),U=function(e){if(B.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},j=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw N("Exception was thrown by user callback.",t),e}),Math.floor(0))}},W=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){N(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',N(e)}}class V{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}V.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $="5",K=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G="ac",X="websocket",Y="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Q(e,t,n){let r;if((0,s.assert)("string"==typeof t,"typeof type must == string"),(0,s.assert)("object"==typeof n,"typeof params must == object"),t===X)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Y)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return F(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={},te={};function ne(e){const t=e.toString();return ee[t]||(ee[t]=new Z),ee[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&j((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="start";class oe{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=ne(t),this.urlFn=e=>(this.appCheckToken&&(e[G]=this.appCheckToken),Q(t,Y,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new re(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,s.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new se(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ie)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ie]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=$,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[G]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&K.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oe.forceAllow_=!0}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){return!(0,s.isNodeSdk)()&&(!!oe.forceAllow_||!(oe.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.base64Encode)(t),r=M(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class se{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=se.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){C("frame writing exception"),e.stack&&C(e.stack),C(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){(0,s.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae=null;"undefined"!=typeof MozWebSocket?ae=MozWebSocket:"undefined"!=typeof WebSocket&&(ae=WebSocket);class le{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=ne(t),this.connURL=le.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o.v=$,!(0,s.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&K.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o[G]=r),i&&(o.p=i),Q(e,X,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let e;if((0,s.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${$}/${h}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new ae(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ae&&!le.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2,le.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[oe,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let n=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[le];else{const e=this.transports_=[];for(const t of ce.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ce.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ce.globalTransportInitialized_=!1;class ue{constructor(e,t,n,r,i,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new ce(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=W((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?E("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$!==n&&N("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),W((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){(0,s.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends de{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,s.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new fe}getInitialEvent(e){return(0,s.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new pe("")}function ge(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function ve(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new pe(e.pieces_,t)}function _e(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function be(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function we(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new pe(t,0)}function xe(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof pe)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pe(n,0)}function ke(e){return e.pieceNum_>=e.pieces_.length}function Ce(e,t){const n=ge(e),r=ge(t);if(null===n)return t;if(n===r)return Ce(ve(e),ve(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ie(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ee(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Te{constructor(e,t){this.errorPrefix_=t,this.parts_=be(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,s.stringLength)(this.parts_[e]);Ne(this)}}function Ne(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Se(e))}function Se(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends de{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Re}getInitialEvent(e){return(0,s.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1e3;class Pe extends he{constructor(e,t,n,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pe.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ae,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,s.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Re.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&fe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,s.stringify)(i)),(0,s.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new(0,s.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.assert)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,s=i.s;Pe.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,s.contains)(e,"w")){const n=(0,s.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();N(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,s.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,s.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ae),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Pe.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){(0,s.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new ue(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{N(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&N(e),l())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>D(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new pe(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h.replace(/\./g,"-")]=1,(0,s.isMobileCordova)()?e["framework.cordova"]=1:(0,s.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fe.getInstance().currentlyOnline();return(0,s.isEmpty)(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0,Pe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Oe(R,e),r=new Oe(R,t);return 0!==this.compare(n,r)}minPost(){return Oe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De;class Me extends Le{static get __EMPTY_NODE(){return De}static set __EMPTY_NODE(e){De=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw(0,s.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(A,De)}makePost(e,t){return(0,s.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Oe(e,De)}toString(){return".key"}}const Fe=new Me;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Be.RED,this.left=null!=r?r:Ue.EMPTY_NODE,this.right=null!=i?i:Ue.EMPTY_NODE}copy(e,t,n,r,i){return new Be(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ue.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0,Be.BLACK=!1;class Ue{constructor(e,t=Ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ze(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ze(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ze(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ze(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e,t){return P(e.name,t.name)}function We(e,t){return P(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;Ue.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const He=function(e){return"number"==typeof e?"number:"+z(e):"string:"+e},Ve=function(e){if(e.isLeafNode()){const t=e.val();(0,s.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,s.contains)(t,".sv"),"Priority must be a string or number.")}else(0,s.assert)(e===qe||e.isEmpty(),"priority of unexpected type.");(0,s.assert)(e===qe||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $e,Ke,Ge;class Xe{constructor(e,t=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ve(this.priorityNode_)}static set __childrenNodeConstructor(e){$e=e}static get __childrenNodeConstructor(){return $e}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:".priority"===ge(e)?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ge(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+He(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?z(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:((0,s.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Xe.VALUE_TYPE_ORDER.indexOf(t),i=Xe.VALUE_TYPE_ORDER.indexOf(n);return(0,s.assert)(r>=0,"Unknown leaf type: "+t),(0,s.assert)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ye=new class extends Le{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?P(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(A,new Xe("[PRIORITY-POST]",Ge))}makePost(e,t){const n=Ke(e);return new Oe(t,new Xe("[PRIORITY-POST]",n))}toString(){return".priority"}},Je=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Je,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ze=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Be(a,s.node,Be.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=i(t,l),u=i(l+1,r);return s=e[l],a=n?n(s):s,new Be(a,s.node,Be.BLACK,c,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const c=i(o+1,a),u=e[o],h=n?n(u):u;l(new Be(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Be.BLACK):(a(r,Be.BLACK),a(r,Be.RED))}return o}(new Qe(e.length));return new Ue(r||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et;const tt={};class nt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.assert)(tt&&Ye,"ChildrenNode.ts has not been loaded"),et=et||new nt({".priority":tt},{".priority":Ye}),et}get(e){const t=(0,s.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ue?t:null}hasIndex(e){return(0,s.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.assert)(e!==Fe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Oe.Wrap);let o,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?Ze(n,e.getCompare()):tt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new nt(u,c)}addToIndexes(e,t){const n=(0,s.map)(this.indexes_,((n,r)=>{const i=(0,s.safeGet)(this.indexSet_,r);if((0,s.assert)(i,"Missing index implementation for "+r),n===tt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Oe.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),Ze(n,i.getCompare())}return tt}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Oe(e.name,r))),i.insert(e,e.node)}}));return new nt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.map)(this.indexes_,(n=>{if(n===tt)return n;{const r=t.get(e.name);return r?n.remove(new Oe(e.name,r)):n}}));return new nt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt;class it{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ve(this.priorityNode_),this.children_.isEmpty()&&(0,s.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rt||(rt=new it(new Ue(We),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?rt:t}}getChild(e){const t=ge(e);return null===t?this:this.getImmediateChild(t).getChild(ve(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Oe(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?rt:this.priorityNode_;return new it(r,o,i)}}updateChild(e,t){const n=ge(e);if(null===n)return t;{(0,s.assert)(".priority"!==ge(e)||1===ye(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ve(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ye,((o,s)=>{t[o]=s.val(e),n++,i&&it.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+He(this.getPriority().val())+":"),this.forEachChild(Ye,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Oe(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Oe.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ot?-1:0}withIndex(e){if(e===Fe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ye),n=t.getIterator(Ye);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Fe?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ot=new class extends it{constructor(){super(new Ue(We),it.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Oe,{MIN:{value:new Oe(R,it.EMPTY_NODE)},MAX:{value:new Oe(A,ot)}}),Me.__EMPTY_NODE=it.EMPTY_NODE,Xe.__childrenNodeConstructor=it,qe=ot,function(e){Ge=e}(ot);function st(e,t=null){if(null===e)return it.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xe(e,st(t))}if(e instanceof Array){let n=it.EMPTY_NODE;return F(e,((t,r)=>{if((0,s.contains)(e,t)&&"."!==t.substring(0,1)){const e=st(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(st(t))}{const n=[];let r=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const i=st(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Oe(e,i)))}})),0===n.length)return it.EMPTY_NODE;const i=Ze(n,je,(e=>e.name),We);if(r){const e=Ze(n,Ye.getCompare());return new it(i,st(t),new nt({".priority":e},{".priority":Ye}))}return new it(i,st(t),nt.Default)}}!function(e){Ke=e}(st);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends Le{constructor(e){super(),this.indexPath_=e,(0,s.assert)(!ke(e)&&".priority"!==ge(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?P(e.name,t.name):i}makePost(e,t){const n=st(e),r=it.EMPTY_NODE.updateChild(this.indexPath_,n);return new Oe(t,r)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,ot);return new Oe(A,e)}toString(){return be(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new class extends Le{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const n=st(e);return new Oe(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return{type:"value",snapshotNode:e}}function ut(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ht(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function dt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){(0,s.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ht(t,a)):(0,s.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ut(t,n)):o.trackChildChange(dt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ye,((e,r)=>{t.hasChild(e)||n.trackChildChange(ht(e,r))})),t.isLeafNode()||t.forEachChild(Ye,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(dt(t,r,i))}else n.trackChildChange(ut(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.indexedFilter_=new ft(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pt.getStartPost_(e),this.endPost_=pt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new Oe(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(it.EMPTY_NODE);const i=this;return t.forEachChild(Ye,((e,t)=>{i.matches(new Oe(e,t))||(r=r.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new pt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Oe(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=it.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=it.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(it.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.assert)(a.numChildren()===this.limit_,"");const l=new Oe(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=s&&(s.name===t||a.hasChild(s.name));)s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,l);if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(dt(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(ht(t,e));const n=a.updateImmediateChild(t,it.EMPTY_NODE);return null!=s&&this.rangedFilter_.matches(s)?(null!=i&&i.trackChildChange(ut(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(c,l)>=0?(null!=i&&(i.trackChildChange(ht(c.name,c.node)),i.trackChildChange(ut(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,it.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ye}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ye}copy(){const e=new gt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ye?n="$priority":e.index_===lt?n="$value":e.index_===Fe?n="$key":((0,s.assert)(e.index_ instanceof at,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,s.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function vt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ye&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends he{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_t.getListenId_(e,n),a={};this.listens_[o]=a;const l=yt(e._queryParams);this.restRequest_(i+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),(0,s.safeGet)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=_t.getListenId_(e,t);delete this.listens_[n]}get(e){const t=yt(e._queryParams),n=e._path.toString(),r=new(0,s.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.querystring)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,s.jsonEval)(a.responseText)}catch(e){N("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&N("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return{value:null,children:new Map}}function xt(e,t,n){if(ke(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ge(t);e.children.has(r)||e.children.set(r,wt());xt(e.children.get(r),t=ve(t),n)}}function kt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{kt(r,new pe(t.toString()+"/"+e),n)}))}class Ct{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ct(e);const n=1e4+2e4*Math.random();W(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,r)=>{r>0&&(0,s.contains)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,Tt;function Nt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Tt=Et||(Et={}))[Tt.OVERWRITE=0]="OVERWRITE",Tt[Tt.MERGE=1]="MERGE",Tt[Tt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Tt[Tt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class St{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Et.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ke(this.path)){if(null!=this.affectedTree.value)return(0,s.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pe(e));return new St(me(),t,this.revert)}}return(0,s.assert)(ge(this.path)===e,"operationForChild called for unrelated child."),new St(ve(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this.source=e,this.path=t,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return ke(this.path)?new Rt(this.source,me()):new Rt(this.source,ve(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Et.OVERWRITE}operationForChild(e){return ke(this.path)?new At(this.source,me(),this.snap.getImmediateChild(e)):new At(this.source,ve(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Et.MERGE}operationForChild(e){if(ke(this.path)){const t=this.children.subtree(new pe(e));return t.isEmpty()?null:t.value?new At(this.source,me(),t.value):new Pt(this.source,me(),t)}return(0,s.assert)(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pt(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=ge(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dt(e,t,n,r,i,o){const a=r.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.assertionError)("Should only compare child_ events.");const r=new Oe(t.childName,t.snapshotNode),i=new Oe(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Mt(e,t){return{eventCache:e,serverCache:t}}function Ft(e,t,n,r){return Mt(new Ot(t,n,r),e.serverCache)}function zt(e,t,n,r){return Mt(e.eventCache,new Ot(t,n,r))}function Bt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ut(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;class Wt{constructor(e,t=(()=>(jt||(jt=new Ue(O)),jt))()){this.value=e,this.children=t}static fromObject(e){let t=new Wt(null);return F(e,((e,n)=>{t=t.set(new pe(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:me(),value:this.value};if(ke(e))return null;{const n=ge(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ve(e),t);if(null!=i){return{path:xe(new pe(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ke(e))return this;{const t=ge(e),n=this.children.get(t);return null!==n?n.subtree(ve(e)):new Wt(null)}}set(e,t){if(ke(e))return new Wt(t,this.children);{const n=ge(e),r=(this.children.get(n)||new Wt(null)).set(ve(e),t),i=this.children.insert(n,r);return new Wt(this.value,i)}}remove(e){if(ke(e))return this.children.isEmpty()?new Wt(null):new Wt(null,this.children);{const t=ge(e),n=this.children.get(t);if(n){const r=n.remove(ve(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Wt(null):new Wt(this.value,i)}return this}}get(e){if(ke(e))return this.value;{const t=ge(e),n=this.children.get(t);return n?n.get(ve(e)):null}}setTree(e,t){if(ke(e))return t;{const n=ge(e),r=(this.children.get(n)||new Wt(null)).setTree(ve(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Wt(this.value,i)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(xe(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(ke(e))return null;{const r=ge(e),i=this.children.get(r);return i?i.findOnPath_(ve(e),xe(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,n){if(ke(e))return this;{this.value&&n(t,this.value);const r=ge(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),xe(t,r),n):new Wt(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(xe(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Wt(null))}}function Ht(e,t,n){if(ke(t))return new qt(new Wt(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=Ce(i,t);return o=o.updateChild(s,n),new qt(e.writeTree_.set(i,o))}{const r=new Wt(n),i=e.writeTree_.setTree(t,r);return new qt(i)}}}function Vt(e,t,n){let r=e;return F(n,((e,n)=>{r=Ht(r,xe(t,e),n)})),r}function $t(e,t){if(ke(t))return qt.empty();{const n=e.writeTree_.setTree(t,new Wt(null));return new qt(n)}}function Kt(e,t){return null!=Gt(e,t)}function Gt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ce(n.path,t)):null}function Xt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ye,((e,n)=>{t.push(new Oe(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Oe(e,n.value))})),t}function Yt(e,t){if(ke(t))return e;{const n=Gt(e,t);return new qt(null!=n?new Wt(n):e.writeTree_.subtree(t))}}function Jt(e){return e.writeTree_.isEmpty()}function Qt(e,t){return Zt(me(),e.writeTree_,t)}function Zt(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,s.assert)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Zt(xe(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(xe(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){return pn(t,e)}function tn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.assert)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&nn(t,r.path)?i=!1:Ee(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=on(e.allWrites,rn,me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=$t(e.visibleWrites,r.path);else{F(r.children,(t=>{e.visibleWrites=$t(e.visibleWrites,xe(r.path,t))}))}return!0}return!1}function nn(e,t){if(e.snap)return Ee(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ee(xe(e.path,n),t))return!0;return!1}function rn(e){return e.visible}function on(e,t,n){let r=qt.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)Ee(n,e)?(t=Ce(n,e),r=Ht(r,t,o.snap)):Ee(e,n)&&(t=Ce(e,n),r=Ht(r,me(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.assertionError)("WriteRecord should have .snap or .children");if(Ee(n,e))t=Ce(n,e),r=Vt(r,t,o.children);else if(Ee(e,n))if(t=Ce(e,n),ke(t))r=Vt(r,me(),o.children);else{const e=(0,s.safeGet)(o.children,ge(t));if(e){const n=e.getChild(ve(t));r=Ht(r,me(),n)}}}}}return r}function sn(e,t,n,r,i){if(r||i){const o=Yt(e.visibleWrites,t);if(!i&&Jt(o))return n;if(i||null!=n||Kt(o,me())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ee(e.path,t)||Ee(t,e.path))};return Qt(on(e.allWrites,o,t),n||it.EMPTY_NODE)}return null}{const r=Gt(e.visibleWrites,t);if(null!=r)return r;{const r=Yt(e.visibleWrites,t);if(Jt(r))return n;if(null!=n||Kt(r,me())){return Qt(r,n||it.EMPTY_NODE)}return null}}}function an(e,t,n,r){return sn(e.writeTree,e.treePath,t,n,r)}function ln(e,t){return function(e,t,n){let r=it.EMPTY_NODE;const i=Gt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ye,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Yt(e.visibleWrites,t);return n.forEachChild(Ye,((e,t)=>{const n=Qt(Yt(i,new pe(e)),t);r=r.updateImmediateChild(e,n)})),Xt(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Xt(Yt(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function cn(e,t,n,r){return function(e,t,n,r,i){(0,s.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=xe(t,n);if(Kt(e.visibleWrites,o))return null;{const t=Yt(e.visibleWrites,o);return Jt(t)?i.getChild(n):Qt(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function un(e,t){return function(e,t){return Gt(e.visibleWrites,t)}(e.writeTree,xe(e.treePath,t))}function hn(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a;const l=Yt(e.visibleWrites,t),c=Gt(l,me());if(null!=c)a=c;else{if(null==n)return[];a=Qt(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function dn(e,t,n){return function(e,t,n,r){const i=xe(t,n),o=Gt(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n))return Qt(Yt(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function fn(e,t){return pn(xe(e.treePath,t),e.writeTree)}function pn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,dt(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ht(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ut(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,s.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,dt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class yn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ut(this.viewCache_),i=hn(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e,t,n,r,i){const o=new mn;let a,l;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?a=wn(e,t,c.path,c.snap,r,i,o):((0,s.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!ke(c.path),a=bn(e,t,c.path,c.snap,r,i,l,o))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,l)=>{const c=xe(n,r);xn(t,ge(c))&&(a=wn(e,a,c,l,i,o,s))})),r.foreach(((r,l)=>{const c=xe(n,r);xn(t,ge(c))||(a=wn(e,a,c,l,i,o,s))})),a}(e,t,c.path,c.children,r,i,o):((0,s.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Cn(e,t,c.path,c.children,r,i,l,o))}else if(n.type===Et.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,r,i,o){let a;if(null!=un(r,n))return t;{const l=new yn(r,t,i),c=t.eventCache.getNode();let u;if(ke(n)||".priority"===ge(n)){let n;if(t.serverCache.isFullyInitialized())n=an(r,Ut(t));else{const e=t.serverCache.getNode();(0,s.assert)(e instanceof it,"serverChildren would be complete if leaf node"),n=ln(r,e)}u=e.filter.updateFullNode(c,n,o)}else{const i=ge(n);let s=dn(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=c.getImmediateChild(i)),u=null!=s?e.filter.updateChild(c,i,s,ve(n),l,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,it.EMPTY_NODE,ve(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=an(r,Ut(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=un(r,me()),Ft(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,o):function(e,t,n,r,i,o,s){if(null!=un(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(ke(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return bn(e,t,n,l.getNode().getChild(n),i,o,a,s);if(ke(n)){let r=new Wt(null);return l.getNode().forEachChild(Fe,((e,t)=>{r=r.set(new pe(e),t)})),Cn(e,t,n,r,i,o,a,s)}return t}{let c=new Wt(null);return r.foreach(((e,t)=>{const r=xe(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Cn(e,t,n,c,i,o,a,s)}}(e,t,l.path,l.affectedTree,r,i,o)}else{if(n.type!==Et.LISTEN_COMPLETE)throw(0,s.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const o=t.serverCache,s=zt(t,o.getNode(),o.isFullyInitialized()||ke(n),o.isFiltered());return _n(e,s,n,r,gn,i)}(e,t,n.path,r,o)}const c=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Bt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ct(Bt(t)))}}(t,a,c),{viewCache:a,changes:c}}function _n(e,t,n,r,i,o){const a=t.eventCache;if(null!=un(r,n))return t;{let l,c;if(ke(n))if((0,s.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ut(t),i=ln(r,n instanceof it?n:it.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=an(r,Ut(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ge(n);if(".priority"===u){(0,s.assert)(1===ye(n),"Can't have a priority with additional path components");const i=a.getNode();c=t.serverCache.getNode();const o=cn(r,n,i,c);l=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ve(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=cn(r,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=dn(r,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return Ft(t,l,a.isFullyInitialized()||ke(n),e.filter.filtersNodes())}}function bn(e,t,n,r,i,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(ke(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ge(n);if(!l.isCompleteForPath(n)&&ye(n)>1)return t;const i=ve(n),o=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,i,gn,null)}const h=zt(t,c,l.isFullyInitialized()||ke(n),u.filtersNodes());return _n(e,h,n,i,new yn(i,h,o),a)}function wn(e,t,n,r,i,o,s){const a=t.eventCache;let l,c;const u=new yn(i,t,o);if(ke(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Ft(t,c,!0,e.filter.filtersNodes());else{const i=ge(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ft(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=ve(n),c=a.getNode().getImmediateChild(i);let h;if(ke(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===_e(o)&&e.getChild(we(o)).isEmpty()?e:e.updateChild(o,r):it.EMPTY_NODE}if(c.equals(h))l=t;else{l=Ft(t,e.filter.updateChild(a.getNode(),i,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function xn(e,t){return e.eventCache.isCompleteForChild(t)}function kn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Cn(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ke(n)?r:new Wt(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=kn(0,t.serverCache.getNode().getImmediateChild(n),r);c=bn(e,c,new pe(n),l,i,o,s,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=kn(0,t.serverCache.getNode().getImmediateChild(n),r);c=bn(e,c,new pe(n),l,i,o,s,a)}})),c}class In{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new ft(n.getIndex()),i=(o=n).loadsAllData()?new ft(o.getIndex()):o.hasLimit()?new mt(o):new pt(o);var o;this.processor_=function(e){return{filter:e}}(i);const s=t.serverCache,a=t.eventCache,l=r.updateFullNode(it.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(it.EMPTY_NODE,a.getNode(),null),u=new Ot(l,s.isFullyInitialized(),r.filtersNodes()),h=new Ot(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Mt(h,u),this.eventGenerator_=new Lt(this.query_)}get query(){return this.query_}}function En(e,t){const n=Ut(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ke(t)&&!n.getImmediateChild(ge(t)).isEmpty())?n.getChild(t):null}function Tn(e){return 0===e.eventRegistrations_.length}function Nn(e,t,n){const r=[];if(n){(0,s.assert)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Sn(e,t,n,r){t.type===Et.MERGE&&null!==t.source.queryId&&((0,s.assert)(Ut(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.assert)(Bt(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=vn(e.processor_,i,t,n,r);var a,l;return a=e.processor_,l=o.viewCache,(0,s.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,s.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,s.assert)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Rn(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Rn(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Dt(e,i,"child_removed",t,r,n),Dt(e,i,"child_added",t,r,n),Dt(e,i,"child_moved",o,r,n),Dt(e,i,"child_changed",t,r,n),Dt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An,Pn;class On{constructor(){this.views=new Map}}function Ln(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return(0,s.assert)(null!=o,"SyncTree gave us an op for an invalid query."),Sn(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Sn(o,t,n,r));return i}}function Dn(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=an(n,i?r:null),o=!1;e?o=!0:r instanceof it?(e=ln(n,r),o=!1):(e=it.EMPTY_NODE,o=!1);const s=Mt(new Ot(e,o,!1),new Ot(r,i,!1));return new In(t,s)}return s}function Mn(e,t,n,r,i,o){const s=Dn(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ye,((e,t)=>{r.push(ut(e,t))}));return n.isFullyInitialized()&&r.push(ct(n.getNode())),Rn(e,r,n.getNode(),t)}(s,n)}function Fn(e,t,n,r){const i=t._queryIdentifier,o=[];let a=[];const l=Wn(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(Nn(i,n,r)),Tn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(Nn(t,n,r)),Tn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return l&&!Wn(e)&&o.push(new((0,s.assert)(An,"Reference.ts has not been loaded"),An)(t._repo,t._path)),{removed:o,events:a}}function zn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Bn(e,t){let n=null;for(const r of e.views.values())n=n||En(r,t);return n}function Un(e,t){if(t._queryParams.loadsAllData())return qn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function jn(e,t){return null!=Un(e,t)}function Wn(e){return null!=qn(e)}function qn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn=1;class Vn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Wt(null),this.pendingWriteTree_={visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $n(e,t,n,r,i){return function(e,t,n,r,i){(0,s.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ht(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?er(e,new At({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Kn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(tn(e.pendingWriteTree_,t)){let t=new Wt(null);return null!=r.snap?t=t.set(me(),!0):F(r.children,(e=>{t=t.set(new pe(e),!0)})),er(e,new St(r.path,t,n))}return[]}function Gn(e,t,n){return er(e,new At({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Xn(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||jn(s,t))){const l=Fn(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Wn(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Wn(t)){return[qn(t)]}{let e=[];return t&&(e=zn(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=rr(e,r);e.listenProvider_.startListening(cr(i),ir(e,i),o.hashFn,o.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(cr(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(or(t));e.listenProvider_.stopListening(cr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=or(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Yn(e,t,n,r){const i=sr(e,r);if(null!=i){const r=ar(i),o=r.path,s=r.queryId,a=Ce(o,t);return lr(e,o,new At(Nt(s),a,n))}return[]}function Jn(e,t,n,r=!1){const i=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Ce(e,i);o=o||Bn(t,n),a=a||Wn(t)}));let l,c=e.syncPointTree_.get(i);if(c?(a=a||Wn(c),o=o||Bn(c,me())):(c=new On,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=o)l=!0;else{l=!1,o=it.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Bn(t,me());n&&(o=o.updateImmediateChild(e,n))}))}const u=jn(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=or(t);(0,s.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Hn++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let h=Mn(c,t,n,en(e.pendingWriteTree_,i),o,l);if(!u&&!a&&!r){const n=Un(c,t);h=h.concat(function(e,t,n){const r=t._path,i=ir(e,t),o=rr(e,n),a=e.listenProvider_.startListening(cr(t),i,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(r);if(i)(0,s.assert)(!Wn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!ke(e)&&t&&Wn(t))return[qn(t).query];{let e=[];return t&&(e=e.concat(zn(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(cr(r),ir(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function Qn(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Bn(n,Ce(e,t));if(r)return r}));return sn(r,t,i,n,!0)}function Zn(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Ce(e,n);r=r||Bn(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Bn(i,me()):(i=new On,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new Ot(r,!0,!1):null;return function(e){return Bt(e.viewCache_)}(Dn(i,t,en(e.pendingWriteTree_,t._path),o?s.getNode():it.EMPTY_NODE,o))}function er(e,t){return tr(t,e.syncPointTree_,null,en(e.pendingWriteTree_,me()))}function tr(e,t,n,r){if(ke(e.path))return nr(e,t,n,r);{const i=t.get(me());null==n&&null!=i&&(n=Bn(i,me()));let o=[];const s=ge(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=fn(r,s);o=o.concat(tr(a,l,e,t))}return i&&(o=o.concat(Ln(i,e,r,n))),o}}function nr(e,t,n,r){const i=t.get(me());null==n&&null!=i&&(n=Bn(i,me()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=fn(r,t),l=e.operationForChild(t);l&&(o=o.concat(nr(l,i,s,a)))})),i&&(o=o.concat(Ln(i,e,r,n))),o}function rr(e,t){const n=t.query,r=ir(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=sr(e,n);if(r){const n=ar(r),i=n.path,o=n.queryId,s=Ce(i,t);return lr(e,i,new Rt(Nt(o),s))}return[]}(e,n._path,r):function(e,t){return er(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Xn(e,n,null,r)}}}}function ir(e,t){const n=or(t);return e.queryToTagMap.get(n)}function or(e){return e._path.toString()+"$"+e._queryIdentifier}function sr(e,t){return e.tagToQueryMap.get(t)}function ar(e){const t=e.indexOf("$");return(0,s.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pe(e.substr(0,t))}}function lr(e,t,n){const r=e.syncPointTree_.get(t);(0,s.assert)(r,"Missing sync point for query tag that we're tracking");return Ln(r,n,en(e.pendingWriteTree_,t),null)}function cr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,s.assert)(Pn,"Reference.ts has not been loaded"),Pn)(e._repo,e._path):e}class ur{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ur(t)}node(){return this.node_}}class hr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=xe(this.path_,e);return new hr(this.syncTree_,t)}node(){return Qn(this.syncTree_,this.path_)}}const dr=function(e,t,n){return e&&"object"==typeof e?((0,s.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?fr(e[".sv"],t,n):"object"==typeof e[".sv"]?pr(e[".sv"],t):void(0,s.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},fr=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,s.assert)(!1,"Unexpected server value: "+e)},pr=function(e,t,n){e.hasOwnProperty("increment")||(0,s.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&(0,s.assert)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,s.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},mr=function(e,t,n,r){return yr(t,new hr(n,e),r)},gr=function(e,t,n){return yr(e,new ur(t),n)};function yr(e,t,n){const r=e.getPriority().val(),i=dr(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=dr(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new Xe(o,st(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new Xe(i))),r.forEachChild(Ye,((e,r)=>{const i=yr(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function _r(e,t){let n=t instanceof pe?t:new pe(t),r=e,i=ge(n);for(;null!==i;){const e=(0,s.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new vr(i,r,e),n=ve(n),i=ge(n)}return r}function br(e){return e.node.value}function wr(e,t){e.node.value=t,Er(e)}function xr(e){return e.node.childCount>0}function kr(e,t){F(e.node.children,((n,r)=>{t(new vr(n,e,r))}))}function Cr(e,t,n,r){n&&!r&&t(e),kr(e,(e=>{Cr(e,t,!0,r)})),n&&r&&t(e)}function Ir(e){return new pe(null===e.parent?e.name:Ir(e.parent)+"/"+e.name)}function Er(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===br(e)&&!xr(e)}(n),i=(0,s.contains)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Er(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Er(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Tr=/[\[\].#$\/\u0000-\u001F\u007F]/,Nr=/[\[\].#$\u0000-\u001F\u007F]/,Sr=10485760,Rr=function(e){return"string"==typeof e&&0!==e.length&&!Tr.test(e)},Ar=function(e){return"string"==typeof e&&0!==e.length&&!Nr.test(e)},Pr=function(e,t,n,r){r&&void 0===t||Or((0,s.errorPrefix)(e,"value"),t,n)},Or=function(e,t,n){const r=n instanceof pe?new Te(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Se(r));if("function"==typeof t)throw new Error(e+"contains a function "+Se(r)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+Se(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,s.stringLength)(t)>Sr)throw new Error(e+"contains a string greater than "+Sr+" utf8 bytes "+Se(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(F(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Rr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Se(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,s.stringLength)(l),Ne(a),Or(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=(0,s.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Se(r)+" in addition to actual children.")}},Lr=function(e,t,n,r){if(!(r&&void 0===n||Ar(n)))throw new Error((0,s.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Dr=function(e,t){if(".info"===ge(t))throw new Error(e+" failed = Can't modify data under /.info/")},Mr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Rr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ar(e)}(n))throw new Error((0,s.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zr(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ie(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Br(e,t,n){zr(e,n),Ur(e,(e=>Ee(e,t)||Ee(t,e)))}function Ur(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(jr(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function jr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&C("event: "+n.toString()),j(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="repo_interrupt";class qr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Fr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wt(),this.transactionQueueTree_=new vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hr(e,t,n){if(e.stats_=ne(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new _t(e.repoInfo_,((t,n,r,i)=>{Kr(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Gr(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Pe(e.repoInfo_,t,((t,n,r,i)=>{Kr(e,t,n,r,i)}),(t=>{Gr(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{Xr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return te[n]||(te[n]=t()),te[n]}(e.repoInfo_,(()=>new It(e.stats_,e.server_))),e.infoData_=new bt,e.infoSyncTree_=new Vn({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Gn(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),Xr(e,"connected",!1),e.serverSyncTree_=new Vn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);Br(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Vr(e){const t=e.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function $r(e){return(t=(t={timestamp:Vr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Kr(e,t,n,r,i){e.dataUpdateCount++;const o=new pe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,s.map)(n,(e=>st(e)));a=function(e,t,n,r){const i=sr(e,r);if(i){const r=ar(i),o=r.path,s=r.queryId,a=Ce(o,t),l=Wt.fromObject(n);return lr(e,o,new Pt(Nt(s),a,l))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=st(n);a=Yn(e.serverSyncTree_,o,t,i)}else if(r){const t=(0,s.map)(n,(e=>st(e)));a=function(e,t,n){const r=Wt.fromObject(n);return er(e,new Pt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=st(n);a=Gn(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=ri(e,o)),Br(e.eventQueue_,l,a)}function Gr(e,t){Xr(e,"connected",t),!1===t&&function(e){Zr(e,"onDisconnectEvents");const t=$r(e),n=wt();kt(e.onDisconnect_,me(),((r,i)=>{const o=mr(r,i,e.serverSyncTree_,t);xt(n,r,o)}));let r=[];kt(n,me(),((t,n)=>{r=r.concat(Gn(e.serverSyncTree_,t,n));const i=li(e,t);ri(e,i)})),e.onDisconnect_=wt(),Br(e.eventQueue_,me(),r)}(e)}function Xr(e,t,n){const r=new pe("/.info/"+t),i=st(n);e.infoData_.updateSnapshot(r,i);const o=Gn(e.infoSyncTree_,r,i);Br(e.eventQueue_,r,o)}function Yr(e){return e.nextWriteId_++}function Jr(e,t,n,r,i){Zr(e,"set",{path:t.toString(),value:n,priority:r});const o=$r(e),s=st(n,r),a=Qn(e.serverSyncTree_,t),l=gr(s,a,o),c=Yr(e),u=$n(e.serverSyncTree_,t,l,c,!0);zr(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||N("set at "+t+" failed: "+n);const s=Kn(e.serverSyncTree_,c,!o);Br(e.eventQueue_,t,s),ei(e,i,n,r)}));const h=li(e,t);ri(e,h),Br(e.eventQueue_,h,[])}function Qr(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Wr)}function Zr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function ei(e,t,n,r){t&&j((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function ti(e,t,n){return Qn(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function ni(e,t=e.transactionQueueTree_){if(t||ai(e,t),br(t)){const n=oi(e,t);(0,s.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ti(e,t,r);let o=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];(0,s.assert)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Ce(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{Zr(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Kn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ai(e,_r(e.transactionQueueTree_,t)),ni(e,e.transactionQueueTree_),Br(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)j(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{N("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ri(e,t)}}),a)}(e,Ir(t),n)}else xr(t)&&kr(t,(t=>{ni(e,t)}))}function ri(e,t){const n=ii(e,t),r=Ir(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let o=0;o<t.length;o++){const c=t[o],u=Ce(n,c.path);let h,d=!1;if((0,s.assert)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,h=c.abortReason,i=i.concat(Kn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,h="maxretry",i=i.concat(Kn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=ti(e,c.path,a);c.currentInputSnapshot=n;const r=t[o].update(n.val());if(void 0!==r){Or("transaction failed: Data returned ",r,c.path);let t=st(r);"object"==typeof r&&null!=r&&(0,s.contains)(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,l=$r(e),u=gr(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=Yr(e),a.splice(a.indexOf(o),1),i=i.concat($n(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),i=i.concat(Kn(e.serverSyncTree_,o,!0))}else d=!0,h="nodata",i=i.concat(Kn(e.serverSyncTree_,c.currentWriteId,!0))}Br(e.eventQueue_,n,i),i=[],d&&(t[o].status=2,l=t[o].unwatcher,setTimeout(l,Math.floor(0)),t[o].onComplete&&("nodata"===h?r.push((()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot))):r.push((()=>t[o].onComplete(new Error(h),!1,null)))))}var l;ai(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)j(r[e]);ni(e,e.transactionQueueTree_)}(e,oi(e,n),r),r}function ii(e,t){let n,r=e.transactionQueueTree_;for(n=ge(t);null!==n&&void 0===br(r);)r=_r(r,n),n=ge(t=ve(t));return r}function oi(e,t){const n=[];return si(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function si(e,t,n){const r=br(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);kr(t,(t=>{si(e,t,n)}))}function ai(e,t){const n=br(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,wr(t,n.length>0?n:void 0)}kr(t,(t=>{ai(e,t)}))}function li(e,t){const n=Ir(ii(e,t)),r=_r(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{ci(e,t)})),ci(e,r),Cr(r,(t=>{ci(e,t)})),n}function ci(e,t){const n=br(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.assert)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Kn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?wr(t,void 0):n.length=o+1,Br(e.eventQueue_,Ir(t),i);for(let e=0;e<r.length;e++)j(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=function(e,t){const n=hi(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new J(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new pe(n.pathString)}},hi=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):N(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},di="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.stringify)(this.snapshot.exportVal())}}class pi{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ke(this._path)?null:_e(this._path)}get ref(){return new yi(this._repo,this._path)}get _queryIdentifier(){const e=vt(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return vt(this._queryParams)}isEqual(e){if(!((e=(0,s.getModularInstance)(e))instanceof gi))return!1;const t=this._repo===e._repo,n=Ie(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class yi extends gi{constructor(e,t){super(e,t,new gt,!1)}get parent(){const e=we(this._path);return null===e?null:new yi(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class vi{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),n=bi(this.ref,e);return new vi(this._node.getChild(t),n,Ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new vi(n,bi(this.ref,t),Ye))))}hasChild(e){const t=new pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _i(e,t){return(e=(0,s.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?bi(e._root,t):e._root}function bi(e,t){var n,r,i,o;return null===ge((e=(0,s.getModularInstance)(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Lr(n,r,i,o)):Lr("child","path",t,!1),new yi(e._repo,xe(e._path,t))}function wi(e){return Dr("remove",e._path),xi(e,null)}function xi(e,t){e=(0,s.getModularInstance)(e),Dr("set",e._path),Pr("set",t,e._path,!1);const n=new(0,s.Deferred);return Jr(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function ki(e){e=(0,s.getModularInstance)(e);const t=new mi((()=>{})),n=new Ci(t);return function(e,t,n){const r=Zn(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=st(r).withIndex(t._queryParams.getIndex());let o;if(Jn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Gn(e.serverSyncTree_,t._path,i);else{const n=ir(e.serverSyncTree_,t);o=Yn(e.serverSyncTree_,t._path,i,n)}return Br(e.eventQueue_,t._path,o),Xn(e.serverSyncTree_,t,n,null,!0),i}),(n=>(Zr(e,"get for query "+(0,s.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new vi(t,new yi(e._repo,e._path),e._queryParams.getIndex())))}class Ci{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new fi("value",this,new vi(e.snapshotNode,new yi(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pi(this,e,t):null}matches(e){return e instanceof Ci&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){(0,s.assert)(!An,"__referenceConstructor has already been defined"),An=e}(yi),function(e){(0,s.assert)(!Pn,"__referenceConstructor has already been defined"),Pn=e}(yi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii={};let Ei=!1;function Ti(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=ui(o,i),u=c.repoInfo;void 0!==l&&l.env&&(a=l.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${u.namespace}`,c=ui(o,i),u=c.repoInfo):s=!c.repoInfo.secure;const h=i&&s?new V(V.OWNER):new H(e.name,e.options,t);Mr("Invalid Firebase Database URL",c),ke(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=Ii[t.name];i||(i={},Ii[t.name]=i);let o=i[e.toURLString()];o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new qr(e,Ei,n,r),i[e.toURLString()]=o,o}(u,e,h,new q(e.name,n));return new Ni(d,e)}class Ni{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yi(this._repo,me())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ii[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Qr(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function Si(e=(0,r.getApp)(),t){const n=(0,r._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,s.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,r={}){e=(0,s.getModularInstance)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new V(V.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:(0,s.createMockUserToken)(r.mockUserToken,e.app.options.projectId);o=new V(t)}!function(e,t,n,r){e.repoInfo_=new J(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,o)}(n,...e)}return n}Pe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Pe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ri,Ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai=r.SDK_VERSION,h=Ai,(0,r._registerComponent)(new(0,i.Component)("database",((e,{instanceIdentifier:t})=>Ti(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,u,Ri),(0,r.registerVersion)(c,u,"esm2017")})),o.register("gwlyu",(function(t,n){e(t.exports,"getSingleMovieFromUserDatabase",(()=>d)),e(t.exports,"initializeLibrary",(()=>f));var r=o("7zgG6"),i=o("BGpcc"),s=o("j2qdV");const a=document.getElementById("posters"),l=document.getElementById("user-watched-btn"),c=document.getElementById("user-queue-btn"),u=document.getElementById("posters"),h=async()=>{const e=await(async()=>{const e=await(0,r.getUser)();return await(0,r.getMovies)(e)})();return Object.values(e).map((e=>{return e.genres?{...e,genre_ids:(t=e.genres,t.split(",").map(Number))}:{...e,genre_ids:[]};var t}))},d=async e=>{const t=await h();console.log(t);const n=t.find((t=>+t.id==+e));return console.log(n),n},f=async e=>{(0,s.moviesLoading)(),l.addEventListener("click",(()=>{f("watched"),l.style.backgroundColor="var(--text-orange)",l.style.borderColor="var(--text-orange)",c.style.backgroundColor="transparent",c.style.borderColor="var(--text-white)"})),c.addEventListener("click",(()=>{f("queued"),l.style.backgroundColor="transparent",l.style.borderColor="var(--text-white)",c.style.backgroundColor="var(--text-orange)",c.style.borderColor="var(--text-orange)"}));const t=await(async e=>(await h()).filter((t=>t.type===e)))(e);0!==t.length?(0,i.render)(t,a,!0):u.innerHTML=`<div class="posters__error">There are no movies in your ${e} list! <br><br>\n    If you wish to add movie to your library please go back to home page, <br> click on a movie and add it to your watched or queued list ;) </div>`}})),o.register("BGpcc",(function(n,r){e(n.exports,"render",(()=>a));var i=o("kz2eH"),s=o("jkhRa");function a(e,n,r,o=!1){o||(n.innerHTML="");const a=e.map((({id:e,title:n,poster_path:o,vote_average:a,release_date:l,genre_ids:c})=>`\n        <figure\n          class="posters__box"\n          tabindex="0"\n          role="button"\n          aria-label="${n}"\n          data-id="${e}"\n        >\n          <img src="${o=o?`https://image.tmdb.org/t/p/w500/${o}`:t(s)}" alt="${n}" class="posters__img" />\n          <figcaption>\n            <h3 id="poster-title" class="posters__title">${n}</h3>\n            <p class="posters__details">\n              ${c.map((e=>` ${(0,i.default)(e)}`))}\n              |\n              ${new Date(l).getFullYear()}\n              ${r?`<span class="posters__ranking">${a.toFixed(1)}</span>`:""}\n            </p>\n          </figcaption>\n        </figure>\n      `)).join("");n.insertAdjacentHTML("beforeend",a)}})),o.register("kz2eH",(function(n,r){e(n.exports,"default",(()=>s));var i=o("4mNNr");var s=e=>t(i).genres.find((t=>t.id===e)).name})),o.register("4mNNr",(function(e,t){e.exports=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')})),o.register("jkhRa",(function(e,t){e.exports=new URL(o("ifJdc").resolve("jPrqb"),import.meta.url).toString()})),o.register("j2qdV",(function(t,n){e(t.exports,"moviesLoading",(()=>r));const r=()=>{document.getElementById("posters").innerHTML='<div class="tape"></div>'}})),o.register("jAaMY",(function(e,t){e.exports=new URL(o("ifJdc").resolve("dNSLY"),import.meta.url).toString()})),o.register("aTd5p",(function(e,t){e.exports=new URL(o("ifJdc").resolve("ez63D"),import.meta.url).toString()})),o.register("89w4p",(function(e,t){const n=document.getElementById("footer-dialog"),r=document.getElementById("hide"),i=document.getElementById("show"),o=document.querySelector("body");i.addEventListener("click",(()=>{o.style.overflow="hidden",n.showModal()}));const s=()=>{o.style.overflow="auto",n.close()};r.addEventListener("click",s),n.addEventListener("close",s),n.addEventListener("click",(e=>{e.currentTarget===e.target&&s()}))})),o.register("jzriA",(function(n,r){e(n.exports,"infiniteScrollLibrary",(()=>b)),e(n.exports,"searchListeners",(()=>k));var i=o("c7JiP"),s=o("BGpcc"),a=o("lsjsu"),l=o("jCizh"),c=o("aHLOA"),u=o("eRFtV"),h=o("j2qdV");const d=document.getElementById("posters"),f=document.querySelector(".container__header"),p=document.getElementById("search-form"),m=document.querySelector(".logo__icon"),g=document.querySelector(".logo");let y=1;const v=(e,n="")=>{const r=window.innerHeight,o=document.documentElement.scrollHeight,c=window.scrollY;c>0&&(f.classList.add("container__header--scrolled"),p.classList.add("hidden"),m.src=t(a)),0===c&&(f.classList.remove("container__header--scrolled"),p.classList.remove("hidden"),m.src=t(l)),c+r>=o&&(async(e,t="")=>{y++;try{let n={};"fetchTrendingMovies"===e.name&&(n=await i.default.fetchTrendingMovies(y)),"searchMovies"===e.name&&(n=await(0,u.searchMovies)({query:t,page:y}));const r=n.data.results;console.log(r),(0,s.render)(r,d,!1,pagination=!0)}catch(e){console.log(e)}})(e,n)},_=()=>{const e=document.querySelector(".header--library__buttons"),t=window.scrollY;t>0&&(e.style.opacity="0",g.style.opacity="0",f.classList.add("container__header--scrolled"),m.style.transform="rotate(90deg)"),0===t&&(f.classList.remove("container__header--scrolled"),e.style.opacity="100",g.style.opacity="100",m.style.transform="rotate(0deg)")},b=()=>{document.addEventListener("scroll",(0,c.debounce)(_,300)),m.addEventListener("click",(e=>{e.preventDefault(),window.location.href="./library.html"}))},w=document.querySelector(".search__input"),x=document.querySelector(".search__icon"),k=e=>{const t=((e,t="")=>(0,c.debounce)((()=>{v(e,t)}),300))(e);document.addEventListener("scroll",t),x.addEventListener("click",(async e=>{e.preventDefault();const n=w.value.trim();if(n){(0,h.moviesLoading)(),d.innerHTML="",y=1;const e=(await(0,u.searchMovies)({query:n})).data.results;(0,s.render)(e,d,!1,!1),document.addEventListener("scroll",(0,c.debounce)((()=>{v(u.searchMovies,n)}),300))}document.removeEventListener("scroll",t)})),w.addEventListener("keypress",(async e=>{if("Enter"===e.key){e.preventDefault();const t=w.value.trim();if(t){(0,h.moviesLoading)(),d.innerHTML="",y=1;const e=(await(0,u.searchMovies)({query:t})).data.results;(0,s.render)(e,d,!1,!1),document.addEventListener("scroll",(0,c.debounce)((()=>{v(u.searchMovies,t)}),300))}}document.removeEventListener("scroll",t)}))}})),o.register("lsjsu",(function(e,t){e.exports=new URL(o("ifJdc").resolve("kA4fy"),import.meta.url).toString()})),o.register("jCizh",(function(e,t){e.exports=new URL(o("ifJdc").resolve("d80zT"),import.meta.url).toString()})),o.register("aHLOA",(function(e,t){(function(){var r,i="Expected a function",o="__lodash_hash_undefined__",s="__lodash_placeholder__",a=16,l=32,c=64,u=128,h=256,d=1/0,f=9007199254740991,p=NaN,m=4294967295,g=[["ary",u],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",l],["partialRight",c],["rearg",h]],y="[object Arguments]",v="[object Array]",_="[object Boolean]",b="[object Date]",w="[object Error]",x="[object Function]",k="[object GeneratorFunction]",C="[object Map]",I="[object Number]",E="[object Object]",T="[object Promise]",N="[object RegExp]",S="[object Set]",R="[object String]",A="[object Symbol]",P="[object WeakMap]",O="[object ArrayBuffer]",L="[object DataView]",D="[object Float32Array]",M="[object Float64Array]",F="[object Int8Array]",z="[object Int16Array]",B="[object Int32Array]",U="[object Uint8Array]",j="[object Uint8ClampedArray]",W="[object Uint16Array]",q="[object Uint32Array]",H=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,$=/(__e\(.*?\)|\b__t\)) \+\n'';/g,K=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,X=RegExp(K.source),Y=RegExp(G.source),J=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(re.source),oe=/^\s+/,se=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,le=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,he=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,me=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,ye=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,_e=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,xe=/['\n\r\u2028\u2029\\]/g,ke="\ud800-\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ie="\\u2700-\\u27bf",Ee="a-z\\xdf-\\xf6\\xf8-\\xff",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",Ne="\\ufe0e\\ufe0f",Se="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="['’]",Ae="[\ud800-\udfff]",Pe="["+Se+"]",Oe="["+Ce+"]",Le="\\d+",De="["+Ie+"]",Me="["+Ee+"]",Fe="[^"+ke+Se+Le+Ie+Ee+Te+"]",ze="\ud83c[\udffb-\udfff]",Be="[^\ud800-\udfff]",Ue="(?:\ud83c[\udde6-\uddff]){2}",je="[\ud800-\udbff][\udc00-\udfff]",We="["+Te+"]",qe="\\u200d",He="(?:"+Me+"|"+Fe+")",Ve="(?:"+We+"|"+Fe+")",$e="(?:['’](?:d|ll|m|re|s|t|ve))?",Ke="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ge="(?:"+Oe+"|"+ze+")"+"?",Xe="["+Ne+"]?",Ye=Xe+Ge+("(?:"+qe+"(?:"+[Be,Ue,je].join("|")+")"+Xe+Ge+")*"),Je="(?:"+[De,Ue,je].join("|")+")"+Ye,Qe="(?:"+[Be+Oe+"?",Oe,Ue,je,Ae].join("|")+")",Ze=RegExp(Re,"g"),et=RegExp(Oe,"g"),tt=RegExp(ze+"(?="+ze+")|"+Qe+Ye,"g"),nt=RegExp([We+"?"+Me+"+"+$e+"(?="+[Pe,We,"$"].join("|")+")",Ve+"+"+Ke+"(?="+[Pe,We+He,"$"].join("|")+")",We+"?"+He+"+"+$e,We+"+"+Ke,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Le,Je].join("|"),"g"),rt=RegExp("["+qe+ke+Ce+Ne+"]"),it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ot=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],st=-1,at={};at[D]=at[M]=at[F]=at[z]=at[B]=at[U]=at[j]=at[W]=at[q]=!0,at[y]=at[v]=at[O]=at[_]=at[L]=at[b]=at[w]=at[x]=at[C]=at[I]=at[E]=at[N]=at[S]=at[R]=at[P]=!1;var lt={};lt[y]=lt[v]=lt[O]=lt[L]=lt[_]=lt[b]=lt[D]=lt[M]=lt[F]=lt[z]=lt[B]=lt[C]=lt[I]=lt[E]=lt[N]=lt[S]=lt[R]=lt[A]=lt[U]=lt[j]=lt[W]=lt[q]=!0,lt[w]=lt[x]=lt[P]=!1;var ct={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ut=parseFloat,ht=parseInt,dt="object"==typeof n&&n&&n.Object===Object&&n,ft="object"==typeof self&&self&&self.Object===Object&&self,pt=dt||ft||Function("return this")(),mt=t&&!t.nodeType&&t,gt=mt&&e&&!e.nodeType&&e,yt=gt&&gt.exports===mt,vt=yt&&dt.process,_t=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||vt&&vt.binding&&vt.binding("util")}catch(e){}}(),bt=_t&&_t.isArrayBuffer,wt=_t&&_t.isDate,xt=_t&&_t.isMap,kt=_t&&_t.isRegExp,Ct=_t&&_t.isSet,It=_t&&_t.isTypedArray;function Et(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Tt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(r,s,n(s),e)}return r}function Nt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function St(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Rt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function At(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Pt(e,t){return!!(null==e?0:e.length)&&Wt(e,t,0)>-1}function Ot(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Lt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Dt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Mt(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Ft(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function zt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Bt=$t("length");function Ut(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function jt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Wt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):jt(e,Ht,n)}function qt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Ht(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?Xt(e,t)/n:p}function $t(e){return function(t){return null==t?r:t[e]}}function Kt(e){return function(t){return null==e?r:e[t]}}function Gt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Xt(e,t){for(var n,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==r&&(n=n===r?s:n+s)}return n}function Yt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Jt(e){return e?e.slice(0,mn(e)+1).replace(oe,""):e}function Qt(e){return function(t){return e(t)}}function Zt(e,t){return Lt(t,(function(t){return e[t]}))}function en(e,t){return e.has(t)}function tn(e,t){for(var n=-1,r=e.length;++n<r&&Wt(t,e[n],0)>-1;);return n}function nn(e,t){for(var n=e.length;n--&&Wt(t,e[n],0)>-1;);return n}function rn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var on=Kt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),sn=Kt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function an(e){return"\\"+ct[e]}function ln(e){return rt.test(e)}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function un(e,t){return function(n){return e(t(n))}}function hn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n];a!==t&&a!==s||(e[n]=s,o[i++]=n)}return o}function dn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function fn(e){return ln(e)?function(e){var t=tt.lastIndex=0;for(;tt.test(e);)++t;return t}(e):Bt(e)}function pn(e){return ln(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.split("")}(e)}function mn(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var gn=Kt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var yn=function e(t){var n,se=(t=null==t?pt:yn.defaults(pt.Object(),t,yn.pick(pt,ot))).Array,ke=t.Date,Ce=t.Error,Ie=t.Function,Ee=t.Math,Te=t.Object,Ne=t.RegExp,Se=t.String,Re=t.TypeError,Ae=se.prototype,Pe=Ie.prototype,Oe=Te.prototype,Le=t["__core-js_shared__"],De=Pe.toString,Me=Oe.hasOwnProperty,Fe=0,ze=(n=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Be=Oe.toString,Ue=De.call(Te),je=pt._,We=Ne("^"+De.call(Me).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qe=yt?t.Buffer:r,He=t.Symbol,Ve=t.Uint8Array,$e=qe?qe.allocUnsafe:r,Ke=un(Te.getPrototypeOf,Te),Ge=Te.create,Xe=Oe.propertyIsEnumerable,Ye=Ae.splice,Je=He?He.isConcatSpreadable:r,Qe=He?He.iterator:r,tt=He?He.toStringTag:r,rt=function(){try{var e=fo(Te,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=t.clearTimeout!==pt.clearTimeout&&t.clearTimeout,dt=ke&&ke.now!==pt.Date.now&&ke.now,ft=t.setTimeout!==pt.setTimeout&&t.setTimeout,mt=Ee.ceil,gt=Ee.floor,vt=Te.getOwnPropertySymbols,_t=qe?qe.isBuffer:r,Bt=t.isFinite,Kt=Ae.join,vn=un(Te.keys,Te),_n=Ee.max,bn=Ee.min,wn=ke.now,xn=t.parseInt,kn=Ee.random,Cn=Ae.reverse,In=fo(t,"DataView"),En=fo(t,"Map"),Tn=fo(t,"Promise"),Nn=fo(t,"Set"),Sn=fo(t,"WeakMap"),Rn=fo(Te,"create"),An=Sn&&new Sn,Pn={},On=Uo(In),Ln=Uo(En),Dn=Uo(Tn),Mn=Uo(Nn),Fn=Uo(Sn),zn=He?He.prototype:r,Bn=zn?zn.valueOf:r,Un=zn?zn.toString:r;function jn(e){if(ra(e)&&!$s(e)&&!(e instanceof Vn)){if(e instanceof Hn)return e;if(Me.call(e,"__wrapped__"))return jo(e)}return new Hn(e)}var Wn=function(){function e(){}return function(t){if(!na(t))return{};if(Ge)return Ge(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function qn(){}function Hn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=m,this.__views__=[]}function $n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Gn;++t<n;)this.add(e[t])}function Yn(e){var t=this.__data__=new Kn(e);this.size=t.size}function Jn(e,t){var n=$s(e),r=!n&&Vs(e),i=!n&&!r&&Ys(e),o=!n&&!r&&!i&&ha(e),s=n||r||i||o,a=s?Yt(e.length,Se):[],l=a.length;for(var c in e)!t&&!Me.call(e,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||bo(c,l))||a.push(c);return a}function Qn(e){var t=e.length;return t?e[Xr(0,t-1)]:r}function Zn(e,t){return Fo(Ri(e),lr(t,0,e.length))}function er(e){return Fo(Ri(e))}function tr(e,t,n){(n!==r&&!Ws(e[t],n)||n===r&&!(t in e))&&sr(e,t,n)}function nr(e,t,n){var i=e[t];Me.call(e,t)&&Ws(i,n)&&(n!==r||t in e)||sr(e,t,n)}function rr(e,t){for(var n=e.length;n--;)if(Ws(e[n][0],t))return n;return-1}function ir(e,t,n,r){return fr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function or(e,t){return e&&Ai(t,Oa(t),e)}function sr(e,t,n){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(e,t){for(var n=-1,i=t.length,o=se(i),s=null==e;++n<i;)o[n]=s?r:Na(e,t[n]);return o}function lr(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function cr(e,t,n,i,o,s){var a,l=1&t,c=2&t,u=4&t;if(n&&(a=o?n(e,i,o,s):n(e)),a!==r)return a;if(!na(e))return e;var h=$s(e);if(h){if(a=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Me.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Ri(e,a)}else{var d=go(e),f=d==x||d==k;if(Ys(e))return Ci(e,l);if(d==E||d==y||f&&!o){if(a=c||f?{}:vo(e),!l)return c?function(e,t){return Ai(e,mo(e),t)}(e,function(e,t){return e&&Ai(t,La(t),e)}(a,e)):function(e,t){return Ai(e,po(e),t)}(e,or(a,e))}else{if(!lt[d])return o?e:{};a=function(e,t,n){var r=e.constructor;switch(t){case O:return Ii(e);case _:case b:return new r(+e);case L:return function(e,t){var n=t?Ii(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case M:case F:case z:case B:case U:case j:case W:case q:return Ei(e,n);case C:return new r;case I:case R:return new r(e);case N:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case S:return new r;case A:return i=e,Bn?Te(Bn.call(i)):{}}var i}(e,d,l)}}s||(s=new Yn);var p=s.get(e);if(p)return p;s.set(e,a),la(e)?e.forEach((function(r){a.add(cr(r,t,n,r,e,s))})):ia(e)&&e.forEach((function(r,i){a.set(i,cr(r,t,n,i,e,s))}));var m=h?r:(u?c?oo:io:c?La:Oa)(e);return Nt(m||e,(function(r,i){m&&(r=e[i=r]),nr(a,i,cr(r,t,n,i,e,s))})),a}function ur(e,t,n){var i=n.length;if(null==e)return!i;for(e=Te(e);i--;){var o=n[i],s=t[o],a=e[o];if(a===r&&!(o in e)||!s(a))return!1}return!0}function hr(e,t,n){if("function"!=typeof e)throw new Re(i);return Oo((function(){e.apply(r,n)}),t)}function dr(e,t,n,r){var i=-1,o=Pt,s=!0,a=e.length,l=[],c=t.length;if(!a)return l;n&&(t=Lt(t,Qt(n))),r?(o=Ot,s=!1):t.length>=200&&(o=en,s=!1,t=new Xn(t));e:for(;++i<a;){var u=e[i],h=null==n?u:n(u);if(u=r||0!==u?u:0,s&&h==h){for(var d=c;d--;)if(t[d]===h)continue e;l.push(u)}else o(t,h,r)||l.push(u)}return l}jn.templateSettings={escape:J,evaluate:Q,interpolate:Z,variable:"",imports:{_:jn}},jn.prototype=qn.prototype,jn.prototype.constructor=jn,Hn.prototype=Wn(qn.prototype),Hn.prototype.constructor=Hn,Vn.prototype=Wn(qn.prototype),Vn.prototype.constructor=Vn,$n.prototype.clear=function(){this.__data__=Rn?Rn(null):{},this.size=0},$n.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},$n.prototype.get=function(e){var t=this.__data__;if(Rn){var n=t[e];return n===o?r:n}return Me.call(t,e)?t[e]:r},$n.prototype.has=function(e){var t=this.__data__;return Rn?t[e]!==r:Me.call(t,e)},$n.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Rn&&t===r?o:t,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=rr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ye.call(t,n,1),--this.size,!0)},Kn.prototype.get=function(e){var t=this.__data__,n=rr(t,e);return n<0?r:t[n][1]},Kn.prototype.has=function(e){return rr(this.__data__,e)>-1},Kn.prototype.set=function(e,t){var n=this.__data__,r=rr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new $n,map:new(En||Kn),string:new $n}},Gn.prototype.delete=function(e){var t=uo(this,e).delete(e);return this.size-=t?1:0,t},Gn.prototype.get=function(e){return uo(this,e).get(e)},Gn.prototype.has=function(e){return uo(this,e).has(e)},Gn.prototype.set=function(e,t){var n=uo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,o),this},Xn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Yn.prototype.get=function(e){return this.__data__.get(e)},Yn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!En||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gn(r)}return n.set(e,t),this.size=n.size,this};var fr=Li(wr),pr=Li(xr,!0);function mr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function gr(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(l===r?a==a&&!ua(a):n(a,l)))var l=a,c=s}return c}function yr(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var o=-1,s=e.length;for(n||(n=_o),i||(i=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?vr(a,t-1,n,r,i):Dt(i,a):r||(i[i.length]=a)}return i}var _r=Di(),br=Di(!0);function wr(e,t){return e&&_r(e,t,Oa)}function xr(e,t){return e&&br(e,t,Oa)}function kr(e,t){return At(t,(function(t){return Zs(e[t])}))}function Cr(e,t){for(var n=0,i=(t=bi(t,e)).length;null!=e&&n<i;)e=e[Bo(t[n++])];return n&&n==i?e:r}function Ir(e,t,n){var r=t(e);return $s(e)?r:Dt(r,n(e))}function Er(e){return null==e?e===r?"[object Undefined]":"[object Null]":tt&&tt in Te(e)?function(e){var t=Me.call(e,tt),n=e[tt];try{e[tt]=r;var i=!0}catch(e){}var o=Be.call(e);i&&(t?e[tt]=n:delete e[tt]);return o}(e):function(e){return Be.call(e)}(e)}function Tr(e,t){return e>t}function Nr(e,t){return null!=e&&Me.call(e,t)}function Sr(e,t){return null!=e&&t in Te(e)}function Rr(e,t,n){for(var i=n?Ot:Pt,o=e[0].length,s=e.length,a=s,l=se(s),c=1/0,u=[];a--;){var h=e[a];a&&t&&(h=Lt(h,Qt(t))),c=bn(h.length,c),l[a]=!n&&(t||o>=120&&h.length>=120)?new Xn(a&&h):r}h=e[0];var d=-1,f=l[0];e:for(;++d<o&&u.length<c;){var p=h[d],m=t?t(p):p;if(p=n||0!==p?p:0,!(f?en(f,m):i(u,m,n))){for(a=s;--a;){var g=l[a];if(!(g?en(g,m):i(e[a],m,n)))continue e}f&&f.push(m),u.push(p)}}return u}function Ar(e,t,n){var i=null==(e=So(e,t=bi(t,e)))?e:e[Bo(Qo(t))];return null==i?r:Et(i,e,n)}function Pr(e){return ra(e)&&Er(e)==y}function Or(e,t,n,i,o){return e===t||(null==e||null==t||!ra(e)&&!ra(t)?e!=e&&t!=t:function(e,t,n,i,o,s){var a=$s(e),l=$s(t),c=a?v:go(e),u=l?v:go(t),h=(c=c==y?E:c)==E,d=(u=u==y?E:u)==E,f=c==u;if(f&&Ys(e)){if(!Ys(t))return!1;a=!0,h=!1}if(f&&!h)return s||(s=new Yn),a||ha(e)?no(e,t,n,i,o,s):function(e,t,n,r,i,o,s){switch(n){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case _:case b:case I:return Ws(+e,+t);case w:return e.name==t.name&&e.message==t.message;case N:case R:return e==t+"";case C:var a=cn;case S:var l=1&r;if(a||(a=dn),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;r|=2,s.set(e,t);var u=no(a(e),a(t),r,i,o,s);return s.delete(e),u;case A:if(Bn)return Bn.call(e)==Bn.call(t)}return!1}(e,t,c,n,i,o,s);if(!(1&n)){var p=h&&Me.call(e,"__wrapped__"),m=d&&Me.call(t,"__wrapped__");if(p||m){var g=p?e.value():e,x=m?t.value():t;return s||(s=new Yn),o(g,x,n,i,s)}}return!!f&&(s||(s=new Yn),function(e,t,n,i,o,s){var a=1&n,l=io(e),c=l.length,u=io(t),h=u.length;if(c!=h&&!a)return!1;var d=c;for(;d--;){var f=l[d];if(!(a?f in t:Me.call(t,f)))return!1}var p=s.get(e),m=s.get(t);if(p&&m)return p==t&&m==e;var g=!0;s.set(e,t),s.set(t,e);var y=a;for(;++d<c;){var v=e[f=l[d]],_=t[f];if(i)var b=a?i(_,v,f,t,e,s):i(v,_,f,e,t,s);if(!(b===r?v===_||o(v,_,n,i,s):b)){g=!1;break}y||(y="constructor"==f)}if(g&&!y){var w=e.constructor,x=t.constructor;w==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x||(g=!1)}return s.delete(e),s.delete(t),g}(e,t,n,i,o,s))}(e,t,n,i,Or,o))}function Lr(e,t,n,i){var o=n.length,s=o,a=!i;if(null==e)return!s;for(e=Te(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<s;){var c=(l=n[o])[0],u=e[c],h=l[1];if(a&&l[2]){if(u===r&&!(c in e))return!1}else{var d=new Yn;if(i)var f=i(u,h,c,e,t,d);if(!(f===r?Or(h,u,3,i,d):f))return!1}}return!0}function Dr(e){return!(!na(e)||(t=e,ze&&ze in t))&&(Zs(e)?We:ye).test(Uo(e));var t}function Mr(e){return"function"==typeof e?e:null==e?ol:"object"==typeof e?$s(e)?Wr(e[0],e[1]):jr(e):pl(e)}function Fr(e){if(!Io(e))return vn(e);var t=[];for(var n in Te(e))Me.call(e,n)&&"constructor"!=n&&t.push(n);return t}function zr(e){if(!na(e))return function(e){var t=[];if(null!=e)for(var n in Te(e))t.push(n);return t}(e);var t=Io(e),n=[];for(var r in e)("constructor"!=r||!t&&Me.call(e,r))&&n.push(r);return n}function Br(e,t){return e<t}function Ur(e,t){var n=-1,r=Gs(e)?se(e.length):[];return fr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function jr(e){var t=ho(e);return 1==t.length&&t[0][2]?To(t[0][0],t[0][1]):function(n){return n===e||Lr(n,e,t)}}function Wr(e,t){return xo(e)&&Eo(t)?To(Bo(e),t):function(n){var i=Na(n,e);return i===r&&i===t?Sa(n,e):Or(t,i,3)}}function qr(e,t,n,i,o){e!==t&&_r(t,(function(s,a){if(o||(o=new Yn),na(s))!function(e,t,n,i,o,s,a){var l=Ao(e,n),c=Ao(t,n),u=a.get(c);if(u)return void tr(e,n,u);var h=s?s(l,c,n+"",e,t,a):r,d=h===r;if(d){var f=$s(c),p=!f&&Ys(c),m=!f&&!p&&ha(c);h=c,f||p||m?$s(l)?h=l:Xs(l)?h=Ri(l):p?(d=!1,h=Ci(c,!0)):m?(d=!1,h=Ei(c,!0)):h=[]:sa(c)||Vs(c)?(h=l,Vs(l)?h=_a(l):na(l)&&!Zs(l)||(h=vo(c))):d=!1}d&&(a.set(c,h),o(h,c,i,s,a),a.delete(c));tr(e,n,h)}(e,t,a,n,qr,i,o);else{var l=i?i(Ao(e,a),s,a+"",e,t,o):r;l===r&&(l=s),tr(e,a,l)}}),La)}function Hr(e,t){var n=e.length;if(n)return bo(t+=t<0?n:0,n)?e[t]:r}function Vr(e,t,n){t=t.length?Lt(t,(function(e){return $s(e)?function(t){return Cr(t,1===e.length?e[0]:e)}:e})):[ol];var r=-1;t=Lt(t,Qt(co()));var i=Ur(e,(function(e,n,i){var o=Lt(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;for(;++r<s;){var l=Ti(i[r],o[r]);if(l)return r>=a?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function $r(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=Cr(e,s);n(a,s)&&ei(o,bi(s,e),a)}return o}function Kr(e,t,n,r){var i=r?qt:Wt,o=-1,s=t.length,a=e;for(e===t&&(t=Ri(t)),n&&(a=Lt(e,Qt(n)));++o<s;)for(var l=0,c=t[o],u=n?n(c):c;(l=i(a,u,l,r))>-1;)a!==e&&Ye.call(a,l,1),Ye.call(e,l,1);return e}function Gr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;bo(i)?Ye.call(e,i,1):di(e,i)}}return e}function Xr(e,t){return e+gt(kn()*(t-e+1))}function Yr(e,t){var n="";if(!e||t<1||t>f)return n;do{t%2&&(n+=e),(t=gt(t/2))&&(e+=e)}while(t);return n}function Jr(e,t){return Lo(No(e,t,ol),e+"")}function Qr(e){return Qn(Wa(e))}function Zr(e,t){var n=Wa(e);return Fo(n,lr(t,0,n.length))}function ei(e,t,n,i){if(!na(e))return e;for(var o=-1,s=(t=bi(t,e)).length,a=s-1,l=e;null!=l&&++o<s;){var c=Bo(t[o]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var h=l[c];(u=i?i(h,c,l):r)===r&&(u=na(h)?h:bo(t[o+1])?[]:{})}nr(l,c,u),l=l[c]}return e}var ti=An?function(e,t){return An.set(e,t),e}:ol,ni=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:nl(t),writable:!0})}:ol;function ri(e){return Fo(Wa(e))}function ii(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=se(i);++r<i;)o[r]=e[r+t];return o}function oi(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function si(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,s=e[o];null!==s&&!ua(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return ai(e,t,ol,n)}function ai(e,t,n,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=n(t))!=t,l=null===t,c=ua(t),u=t===r;o<s;){var h=gt((o+s)/2),d=n(e[h]),f=d!==r,p=null===d,m=d==d,g=ua(d);if(a)var y=i||m;else y=u?m&&(i||f):l?m&&f&&(i||!p):c?m&&f&&!p&&(i||!g):!p&&!g&&(i?d<=t:d<t);y?o=h+1:s=h}return bn(s,4294967294)}function li(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s;if(!n||!Ws(a,l)){var l=a;o[i++]=0===s?0:s}}return o}function ci(e){return"number"==typeof e?e:ua(e)?p:+e}function ui(e){if("string"==typeof e)return e;if($s(e))return Lt(e,ui)+"";if(ua(e))return Un?Un.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function hi(e,t,n){var r=-1,i=Pt,o=e.length,s=!0,a=[],l=a;if(n)s=!1,i=Ot;else if(o>=200){var c=t?null:Yi(e);if(c)return dn(c);s=!1,i=en,l=new Xn}else l=t?[]:a;e:for(;++r<o;){var u=e[r],h=t?t(u):u;if(u=n||0!==u?u:0,s&&h==h){for(var d=l.length;d--;)if(l[d]===h)continue e;t&&l.push(h),a.push(u)}else i(l,h,n)||(l!==a&&l.push(h),a.push(u))}return a}function di(e,t){return null==(e=So(e,t=bi(t,e)))||delete e[Bo(Qo(t))]}function fi(e,t,n,r){return ei(e,t,n(Cr(e,t)),r)}function pi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ii(e,r?0:o,r?o+1:i):ii(e,r?o+1:0,r?i:o)}function mi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,Dt([e],t.args))}),n)}function gi(e,t,n){var r=e.length;if(r<2)return r?hi(e[0]):[];for(var i=-1,o=se(r);++i<r;)for(var s=e[i],a=-1;++a<r;)a!=i&&(o[i]=dr(o[i]||s,e[a],t,n));return hi(vr(o,1),t,n)}function yi(e,t,n){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var l=i<s?t[i]:r;n(a,e[i],l)}return a}function vi(e){return Xs(e)?e:[]}function _i(e){return"function"==typeof e?e:ol}function bi(e,t){return $s(e)?e:xo(e,t)?[e]:zo(ba(e))}var wi=Jr;function xi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ii(e,t,n)}var ki=ct||function(e){return pt.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var n=e.length,r=$e?$e(n):new e.constructor(n);return e.copy(r),r}function Ii(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Ei(e,t){var n=t?Ii(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ti(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,s=ua(e),a=t!==r,l=null===t,c=t==t,u=ua(t);if(!l&&!u&&!s&&e>t||s&&a&&c&&!l&&!u||i&&a&&c||!n&&c||!o)return 1;if(!i&&!s&&!u&&e<t||u&&n&&o&&!i&&!s||l&&n&&o||!a&&o||!c)return-1}return 0}function Ni(e,t,n,r){for(var i=-1,o=e.length,s=n.length,a=-1,l=t.length,c=_n(o-s,0),u=se(l+c),h=!r;++a<l;)u[a]=t[a];for(;++i<s;)(h||i<o)&&(u[n[i]]=e[i]);for(;c--;)u[a++]=e[i++];return u}function Si(e,t,n,r){for(var i=-1,o=e.length,s=-1,a=n.length,l=-1,c=t.length,u=_n(o-a,0),h=se(u+c),d=!r;++i<u;)h[i]=e[i];for(var f=i;++l<c;)h[f+l]=t[l];for(;++s<a;)(d||i<o)&&(h[f+n[s]]=e[i++]);return h}function Ri(e,t){var n=-1,r=e.length;for(t||(t=se(r));++n<r;)t[n]=e[n];return t}function Ai(e,t,n,i){var o=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var l=t[s],c=i?i(n[l],e[l],l,n,e):r;c===r&&(c=e[l]),o?sr(n,l,c):nr(n,l,c)}return n}function Pi(e,t){return function(n,r){var i=$s(n)?Tt:ir,o=t?t():{};return i(n,e,co(r,2),o)}}function Oi(e){return Jr((function(t,n){var i=-1,o=n.length,s=o>1?n[o-1]:r,a=o>2?n[2]:r;for(s=e.length>3&&"function"==typeof s?(o--,s):r,a&&wo(n[0],n[1],a)&&(s=o<3?r:s,o=1),t=Te(t);++i<o;){var l=n[i];l&&e(t,l,i,s)}return t}))}function Li(e,t){return function(n,r){if(null==n)return n;if(!Gs(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Te(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Di(e){return function(t,n,r){for(var i=-1,o=Te(t),s=r(t),a=s.length;a--;){var l=s[e?a:++i];if(!1===n(o[l],l,o))break}return t}}function Mi(e){return function(t){var n=ln(t=ba(t))?pn(t):r,i=n?n[0]:t.charAt(0),o=n?xi(n,1).join(""):t.slice(1);return i[e]()+o}}function Fi(e){return function(t){return Mt(Za(Va(t).replace(Ze,"")),e,"")}}function zi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Wn(e.prototype),r=e.apply(n,t);return na(r)?r:n}}function Bi(e){return function(t,n,i){var o=Te(t);if(!Gs(t)){var s=co(n,3);t=Oa(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,i);return a>-1?o[s?t[a]:a]:r}}function Ui(e){return ro((function(t){var n=t.length,o=n,s=Hn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Re(i);if(s&&!l&&"wrapper"==ao(a))var l=new Hn([],!0)}for(o=l?o:n;++o<n;){var c=ao(a=t[o]),u="wrapper"==c?so(a):r;l=u&&ko(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[ao(u[0])].apply(l,u[3]):1==a.length&&ko(a)?l[c]():l.thru(a)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&$s(r))return l.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}}))}function ji(e,t,n,i,o,s,a,l,c,h){var d=t&u,f=1&t,p=2&t,m=24&t,g=512&t,y=p?r:zi(e);return function r(){for(var u=arguments.length,v=se(u),_=u;_--;)v[_]=arguments[_];if(m)var b=lo(r),w=rn(v,b);if(i&&(v=Ni(v,i,o,m)),s&&(v=Si(v,s,a,m)),u-=w,m&&u<h){var x=hn(v,b);return Gi(e,t,ji,r.placeholder,n,v,x,l,c,h-u)}var k=f?n:this,C=p?k[e]:e;return u=v.length,l?v=Ro(v,l):g&&u>1&&v.reverse(),d&&c<u&&(v.length=c),this&&this!==pt&&this instanceof r&&(C=y||zi(C)),C.apply(k,v)}}function Wi(e,t){return function(n,r){return function(e,t,n,r){return wr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function qi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=ui(n),i=ui(i)):(n=ci(n),i=ci(i)),o=e(n,i)}return o}}function Hi(e){return ro((function(t){return t=Lt(t,Qt(co())),Jr((function(n){var r=this;return e(t,(function(e){return Et(e,r,n)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":ui(t)).length;if(n<2)return n?Yr(t,e):t;var i=Yr(t,mt(e/fn(t)));return ln(t)?xi(pn(i),0,e).join(""):i.slice(0,e)}function $i(e){return function(t,n,i){return i&&"number"!=typeof i&&wo(t,n,i)&&(n=i=r),t=ma(t),n===r?(n=t,t=0):n=ma(n),function(e,t,n,r){for(var i=-1,o=_n(mt((t-e)/(n||1)),0),s=se(o);o--;)s[r?o:++i]=e,e+=n;return s}(t,n,i=i===r?t<n?1:-1:ma(i),e)}}function Ki(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=va(t),n=va(n)),e(t,n)}}function Gi(e,t,n,i,o,s,a,u,h,d){var f=8&t;t|=f?l:c,4&(t&=~(f?c:l))||(t&=-4);var p=[e,t,o,f?s:r,f?a:r,f?r:s,f?r:a,u,h,d],m=n.apply(r,p);return ko(e)&&Po(m,p),m.placeholder=i,Do(m,e,t)}function Xi(e){var t=Ee[e];return function(e,n){if(e=va(e),(n=null==n?0:bn(ga(n),292))&&Bt(e)){var r=(ba(e)+"e").split("e");return+((r=(ba(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Yi=Nn&&1/dn(new Nn([,-0]))[1]==d?function(e){return new Nn(e)}:ul;function Ji(e){return function(t){var n=go(t);return n==C?cn(t):n==S?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(t):function(e,t){return Lt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Qi(e,t,n,o,d,f,p,m){var g=2&t;if(!g&&"function"!=typeof e)throw new Re(i);var y=o?o.length:0;if(y||(t&=-97,o=d=r),p=p===r?p:_n(ga(p),0),m=m===r?m:ga(m),y-=d?d.length:0,t&c){var v=o,_=d;o=d=r}var b=g?r:so(e),w=[e,t,n,o,d,v,_,f,p,m];if(b&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,a=r==u&&8==n||r==u&&n==h&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!a)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var c=e[3];e[3]=c?Ni(c,l,t[4]):l,e[4]=c?hn(e[3],s):t[4]}(l=t[5])&&(c=e[5],e[5]=c?Si(c,l,t[6]):l,e[6]=c?hn(e[5],s):t[6]);(l=t[7])&&(e[7]=l);r&u&&(e[8]=null==e[8]?t[8]:bn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,b),e=w[0],t=w[1],n=w[2],o=w[3],d=w[4],!(m=w[9]=w[9]===r?g?0:e.length:_n(w[9]-y,0))&&24&t&&(t&=-25),t&&1!=t)x=8==t||t==a?function(e,t,n){var i=zi(e);return function o(){for(var s=arguments.length,a=se(s),l=s,c=lo(o);l--;)a[l]=arguments[l];var u=s<3&&a[0]!==c&&a[s-1]!==c?[]:hn(a,c);return(s-=u.length)<n?Gi(e,t,ji,o.placeholder,r,a,u,r,r,n-s):Et(this&&this!==pt&&this instanceof o?i:e,this,a)}}(e,t,m):t!=l&&33!=t||d.length?ji.apply(r,w):function(e,t,n,r){var i=1&t,o=zi(e);return function t(){for(var s=-1,a=arguments.length,l=-1,c=r.length,u=se(c+a),h=this&&this!==pt&&this instanceof t?o:e;++l<c;)u[l]=r[l];for(;a--;)u[l++]=arguments[++s];return Et(h,i?n:this,u)}}(e,t,n,o);else var x=function(e,t,n){var r=1&t,i=zi(e);return function t(){return(this&&this!==pt&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return Do((b?ti:Po)(x,w),e,t)}function Zi(e,t,n,i){return e===r||Ws(e,Oe[n])&&!Me.call(i,n)?t:e}function eo(e,t,n,i,o,s){return na(e)&&na(t)&&(s.set(t,e),qr(e,t,r,eo,s),s.delete(t)),e}function to(e){return sa(e)?r:e}function no(e,t,n,i,o,s){var a=1&n,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var u=s.get(e),h=s.get(t);if(u&&h)return u==t&&h==e;var d=-1,f=!0,p=2&n?new Xn:r;for(s.set(e,t),s.set(t,e);++d<l;){var m=e[d],g=t[d];if(i)var y=a?i(g,m,d,t,e,s):i(m,g,d,e,t,s);if(y!==r){if(y)continue;f=!1;break}if(p){if(!zt(t,(function(e,t){if(!en(p,t)&&(m===e||o(m,e,n,i,s)))return p.push(t)}))){f=!1;break}}else if(m!==g&&!o(m,g,n,i,s)){f=!1;break}}return s.delete(e),s.delete(t),f}function ro(e){return Lo(No(e,r,Ko),e+"")}function io(e){return Ir(e,Oa,po)}function oo(e){return Ir(e,La,mo)}var so=An?function(e){return An.get(e)}:ul;function ao(e){for(var t=e.name+"",n=Pn[t],r=Me.call(Pn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function lo(e){return(Me.call(jn,"placeholder")?jn:e).placeholder}function co(){var e=jn.iteratee||sl;return e=e===sl?Mr:e,arguments.length?e(arguments[0],arguments[1]):e}function uo(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function ho(e){for(var t=Oa(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Eo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Dr(n)?n:r}var po=vt?function(e){return null==e?[]:(e=Te(e),At(vt(e),(function(t){return Xe.call(e,t)})))}:yl,mo=vt?function(e){for(var t=[];e;)Dt(t,po(e)),e=Ke(e);return t}:yl,go=Er;function yo(e,t,n){for(var r=-1,i=(t=bi(t,e)).length,o=!1;++r<i;){var s=Bo(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&ta(i)&&bo(s,i)&&($s(e)||Vs(e))}function vo(e){return"function"!=typeof e.constructor||Io(e)?{}:Wn(Ke(e))}function _o(e){return $s(e)||Vs(e)||!!(Je&&e&&e[Je])}function bo(e,t){var n=typeof e;return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&_e.test(e))&&e>-1&&e%1==0&&e<t}function wo(e,t,n){if(!na(n))return!1;var r=typeof t;return!!("number"==r?Gs(n)&&bo(t,n.length):"string"==r&&t in n)&&Ws(n[t],e)}function xo(e,t){if($s(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ua(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Te(t))}function ko(e){var t=ao(e),n=jn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=so(n);return!!r&&e===r[0]}(In&&go(new In(new ArrayBuffer(1)))!=L||En&&go(new En)!=C||Tn&&go(Tn.resolve())!=T||Nn&&go(new Nn)!=S||Sn&&go(new Sn)!=P)&&(go=function(e){var t=Er(e),n=t==E?e.constructor:r,i=n?Uo(n):"";if(i)switch(i){case On:return L;case Ln:return C;case Dn:return T;case Mn:return S;case Fn:return P}return t});var Co=Le?Zs:vl;function Io(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Oe)}function Eo(e){return e==e&&!na(e)}function To(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in Te(n)))}}function No(e,t,n){return t=_n(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=_n(r.length-t,0),s=se(o);++i<o;)s[i]=r[t+i];i=-1;for(var a=se(t+1);++i<t;)a[i]=r[i];return a[t]=n(s),Et(e,this,a)}}function So(e,t){return t.length<2?e:Cr(e,ii(t,0,-1))}function Ro(e,t){for(var n=e.length,i=bn(t.length,n),o=Ri(e);i--;){var s=t[i];e[i]=bo(s,n)?o[s]:r}return e}function Ao(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Po=Mo(ti),Oo=ft||function(e,t){return pt.setTimeout(e,t)},Lo=Mo(ni);function Do(e,t,n){var r=t+"";return Lo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Nt(g,(function(n){var r="_."+n[0];t&n[1]&&!Pt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(le);return t?t[1].split(ce):[]}(r),n)))}function Mo(e){var t=0,n=0;return function(){var i=wn(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Fo(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var s=Xr(n,o),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var zo=function(e){var t=Ms(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,n,r,i){t.push(r?i.replace(de,"$1"):n||e)})),t}));function Bo(e){if("string"==typeof e||ua(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Uo(e){if(null!=e){try{return De.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function jo(e){if(e instanceof Vn)return e.clone();var t=new Hn(e.__wrapped__,e.__chain__);return t.__actions__=Ri(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Wo=Jr((function(e,t){return Xs(e)?dr(e,vr(t,1,Xs,!0)):[]})),qo=Jr((function(e,t){var n=Qo(t);return Xs(n)&&(n=r),Xs(e)?dr(e,vr(t,1,Xs,!0),co(n,2)):[]})),Ho=Jr((function(e,t){var n=Qo(t);return Xs(n)&&(n=r),Xs(e)?dr(e,vr(t,1,Xs,!0),r,n):[]}));function Vo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ga(n);return i<0&&(i=_n(r+i,0)),jt(e,co(t,3),i)}function $o(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ga(n),o=n<0?_n(i+o,0):bn(o,i-1)),jt(e,co(t,3),o,!0)}function Ko(e){return(null==e?0:e.length)?vr(e,1):[]}function Go(e){return e&&e.length?e[0]:r}var Xo=Jr((function(e){var t=Lt(e,vi);return t.length&&t[0]===e[0]?Rr(t):[]})),Yo=Jr((function(e){var t=Qo(e),n=Lt(e,vi);return t===Qo(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Rr(n,co(t,2)):[]})),Jo=Jr((function(e){var t=Qo(e),n=Lt(e,vi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Rr(n,r,t):[]}));function Qo(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Jr(es);function es(e,t){return e&&e.length&&t&&t.length?Kr(e,t):e}var ts=ro((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Gr(e,Lt(t,(function(e){return bo(e,n)?+e:e})).sort(Ti)),r}));function ns(e){return null==e?e:Cn.call(e)}var rs=Jr((function(e){return hi(vr(e,1,Xs,!0))})),is=Jr((function(e){var t=Qo(e);return Xs(t)&&(t=r),hi(vr(e,1,Xs,!0),co(t,2))})),os=Jr((function(e){var t=Qo(e);return t="function"==typeof t?t:r,hi(vr(e,1,Xs,!0),r,t)}));function ss(e){if(!e||!e.length)return[];var t=0;return e=At(e,(function(e){if(Xs(e))return t=_n(e.length,t),!0})),Yt(t,(function(t){return Lt(e,$t(t))}))}function as(e,t){if(!e||!e.length)return[];var n=ss(e);return null==t?n:Lt(n,(function(e){return Et(t,r,e)}))}var ls=Jr((function(e,t){return Xs(e)?dr(e,t):[]})),cs=Jr((function(e){return gi(At(e,Xs))})),us=Jr((function(e){var t=Qo(e);return Xs(t)&&(t=r),gi(At(e,Xs),co(t,2))})),hs=Jr((function(e){var t=Qo(e);return t="function"==typeof t?t:r,gi(At(e,Xs),r,t)})),ds=Jr(ss);var fs=Jr((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,as(e,n)}));function ps(e){var t=jn(e);return t.__chain__=!0,t}function ms(e,t){return t(e)}var gs=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return ar(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&bo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ms,args:[o],thisArg:r}),new Hn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ys=Pi((function(e,t,n){Me.call(e,n)?++e[n]:sr(e,n,1)}));var vs=Bi(Vo),_s=Bi($o);function bs(e,t){return($s(e)?Nt:fr)(e,co(t,3))}function ws(e,t){return($s(e)?St:pr)(e,co(t,3))}var xs=Pi((function(e,t,n){Me.call(e,n)?e[n].push(t):sr(e,n,[t])}));var ks=Jr((function(e,t,n){var r=-1,i="function"==typeof t,o=Gs(e)?se(e.length):[];return fr(e,(function(e){o[++r]=i?Et(t,e,n):Ar(e,t,n)})),o})),Cs=Pi((function(e,t,n){sr(e,n,t)}));function Is(e,t){return($s(e)?Lt:Ur)(e,co(t,3))}var Es=Pi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ts=Jr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&wo(e,t[0],t[1])?t=[]:n>2&&wo(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,vr(t,1),[])})),Ns=dt||function(){return pt.Date.now()};function Ss(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Qi(e,u,r,r,r,r,t)}function Rs(e,t){var n;if("function"!=typeof t)throw new Re(i);return e=ga(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}var As=Jr((function(e,t,n){var r=1;if(n.length){var i=hn(n,lo(As));r|=l}return Qi(e,r,t,n,i)})),Ps=Jr((function(e,t,n){var r=3;if(n.length){var i=hn(n,lo(Ps));r|=l}return Qi(t,r,e,n,i)}));function Os(e,t,n){var o,s,a,l,c,u,h=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new Re(i);function m(t){var n=o,i=s;return o=s=r,h=t,l=e.apply(i,n)}function g(e){return h=e,c=Oo(v,t),d?m(e):l}function y(e){var n=e-u;return u===r||n>=t||n<0||f&&e-h>=a}function v(){var e=Ns();if(y(e))return _(e);c=Oo(v,function(e){var n=t-(e-u);return f?bn(n,a-(e-h)):n}(e))}function _(e){return c=r,p&&o?m(e):(o=s=r,l)}function b(){var e=Ns(),n=y(e);if(o=arguments,s=this,u=e,n){if(c===r)return g(u);if(f)return ki(c),c=Oo(v,t),m(u)}return c===r&&(c=Oo(v,t)),l}return t=va(t)||0,na(n)&&(d=!!n.leading,a=(f="maxWait"in n)?_n(va(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),b.cancel=function(){c!==r&&ki(c),h=0,o=u=s=c=r},b.flush=function(){return c===r?l:_(Ns())},b}var Ls=Jr((function(e,t){return hr(e,1,t)})),Ds=Jr((function(e,t,n){return hr(e,va(t)||0,n)}));function Ms(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Re(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Ms.Cache||Gn),n}function Fs(e){if("function"!=typeof e)throw new Re(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ms.Cache=Gn;var zs=wi((function(e,t){var n=(t=1==t.length&&$s(t[0])?Lt(t[0],Qt(co())):Lt(vr(t,1),Qt(co()))).length;return Jr((function(r){for(var i=-1,o=bn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return Et(e,this,r)}))})),Bs=Jr((function(e,t){var n=hn(t,lo(Bs));return Qi(e,l,r,t,n)})),Us=Jr((function(e,t){var n=hn(t,lo(Us));return Qi(e,c,r,t,n)})),js=ro((function(e,t){return Qi(e,h,r,r,r,t)}));function Ws(e,t){return e===t||e!=e&&t!=t}var qs=Ki(Tr),Hs=Ki((function(e,t){return e>=t})),Vs=Pr(function(){return arguments}())?Pr:function(e){return ra(e)&&Me.call(e,"callee")&&!Xe.call(e,"callee")},$s=se.isArray,Ks=bt?Qt(bt):function(e){return ra(e)&&Er(e)==O};function Gs(e){return null!=e&&ta(e.length)&&!Zs(e)}function Xs(e){return ra(e)&&Gs(e)}var Ys=_t||vl,Js=wt?Qt(wt):function(e){return ra(e)&&Er(e)==b};function Qs(e){if(!ra(e))return!1;var t=Er(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!sa(e)}function Zs(e){if(!na(e))return!1;var t=Er(e);return t==x||t==k||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ea(e){return"number"==typeof e&&e==ga(e)}function ta(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function na(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ra(e){return null!=e&&"object"==typeof e}var ia=xt?Qt(xt):function(e){return ra(e)&&go(e)==C};function oa(e){return"number"==typeof e||ra(e)&&Er(e)==I}function sa(e){if(!ra(e)||Er(e)!=E)return!1;var t=Ke(e);if(null===t)return!0;var n=Me.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&De.call(n)==Ue}var aa=kt?Qt(kt):function(e){return ra(e)&&Er(e)==N};var la=Ct?Qt(Ct):function(e){return ra(e)&&go(e)==S};function ca(e){return"string"==typeof e||!$s(e)&&ra(e)&&Er(e)==R}function ua(e){return"symbol"==typeof e||ra(e)&&Er(e)==A}var ha=It?Qt(It):function(e){return ra(e)&&ta(e.length)&&!!at[Er(e)]};var da=Ki(Br),fa=Ki((function(e,t){return e<=t}));function pa(e){if(!e)return[];if(Gs(e))return ca(e)?pn(e):Ri(e);if(Qe&&e[Qe])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Qe]());var t=go(e);return(t==C?cn:t==S?dn:Wa)(e)}function ma(e){return e?(e=va(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ga(e){var t=ma(e),n=t%1;return t==t?n?t-n:t:0}function ya(e){return e?lr(ga(e),0,m):0}function va(e){if("number"==typeof e)return e;if(ua(e))return p;if(na(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=na(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jt(e);var n=ge.test(e);return n||ve.test(e)?ht(e.slice(2),n?2:8):me.test(e)?p:+e}function _a(e){return Ai(e,La(e))}function ba(e){return null==e?"":ui(e)}var wa=Oi((function(e,t){if(Io(t)||Gs(t))Ai(t,Oa(t),e);else for(var n in t)Me.call(t,n)&&nr(e,n,t[n])})),xa=Oi((function(e,t){Ai(t,La(t),e)})),ka=Oi((function(e,t,n,r){Ai(t,La(t),e,r)})),Ca=Oi((function(e,t,n,r){Ai(t,Oa(t),e,r)})),Ia=ro(ar);var Ea=Jr((function(e,t){e=Te(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&wo(t[0],t[1],o)&&(i=1);++n<i;)for(var s=t[n],a=La(s),l=-1,c=a.length;++l<c;){var u=a[l],h=e[u];(h===r||Ws(h,Oe[u])&&!Me.call(e,u))&&(e[u]=s[u])}return e})),Ta=Jr((function(e){return e.push(r,eo),Et(Ma,r,e)}));function Na(e,t,n){var i=null==e?r:Cr(e,t);return i===r?n:i}function Sa(e,t){return null!=e&&yo(e,t,Sr)}var Ra=Wi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=n}),nl(ol)),Aa=Wi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),Me.call(e,t)?e[t].push(n):e[t]=[n]}),co),Pa=Jr(Ar);function Oa(e){return Gs(e)?Jn(e):Fr(e)}function La(e){return Gs(e)?Jn(e,!0):zr(e)}var Da=Oi((function(e,t,n){qr(e,t,n)})),Ma=Oi((function(e,t,n,r){qr(e,t,n,r)})),Fa=ro((function(e,t){var n={};if(null==e)return n;var r=!1;t=Lt(t,(function(t){return t=bi(t,e),r||(r=t.length>1),t})),Ai(e,oo(e),n),r&&(n=cr(n,7,to));for(var i=t.length;i--;)di(n,t[i]);return n}));var za=ro((function(e,t){return null==e?{}:function(e,t){return $r(e,t,(function(t,n){return Sa(e,n)}))}(e,t)}));function Ba(e,t){if(null==e)return{};var n=Lt(oo(e),(function(e){return[e]}));return t=co(t),$r(e,n,(function(e,n){return t(e,n[0])}))}var Ua=Ji(Oa),ja=Ji(La);function Wa(e){return null==e?[]:Zt(e,Oa(e))}var qa=Fi((function(e,t,n){return t=t.toLowerCase(),e+(n?Ha(t):t)}));function Ha(e){return Qa(ba(e).toLowerCase())}function Va(e){return(e=ba(e))&&e.replace(be,on).replace(et,"")}var $a=Fi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ka=Fi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Ga=Mi("toLowerCase");var Xa=Fi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ya=Fi((function(e,t,n){return e+(n?" ":"")+Qa(t)}));var Ja=Fi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Qa=Mi("toUpperCase");function Za(e,t,n){return e=ba(e),(t=n?r:t)===r?function(e){return it.test(e)}(e)?function(e){return e.match(nt)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var el=Jr((function(e,t){try{return Et(e,r,t)}catch(e){return Qs(e)?e:new Ce(e)}})),tl=ro((function(e,t){return Nt(t,(function(t){t=Bo(t),sr(e,t,As(e[t],e))})),e}));function nl(e){return function(){return e}}var rl=Ui(),il=Ui(!0);function ol(e){return e}function sl(e){return Mr("function"==typeof e?e:cr(e,1))}var al=Jr((function(e,t){return function(n){return Ar(n,e,t)}})),ll=Jr((function(e,t){return function(n){return Ar(e,n,t)}}));function cl(e,t,n){var r=Oa(t),i=kr(t,r);null!=n||na(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=kr(t,Oa(t)));var o=!(na(n)&&"chain"in n&&!n.chain),s=Zs(e);return Nt(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ri(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Dt([this.value()],arguments))})})),e}function ul(){}var hl=Hi(Lt),dl=Hi(Rt),fl=Hi(zt);function pl(e){return xo(e)?$t(Bo(e)):function(e){return function(t){return Cr(t,e)}}(e)}var ml=$i(),gl=$i(!0);function yl(){return[]}function vl(){return!1}var _l=qi((function(e,t){return e+t}),0),bl=Xi("ceil"),wl=qi((function(e,t){return e/t}),1),xl=Xi("floor");var kl,Cl=qi((function(e,t){return e*t}),1),Il=Xi("round"),El=qi((function(e,t){return e-t}),0);return jn.after=function(e,t){if("function"!=typeof t)throw new Re(i);return e=ga(e),function(){if(--e<1)return t.apply(this,arguments)}},jn.ary=Ss,jn.assign=wa,jn.assignIn=xa,jn.assignInWith=ka,jn.assignWith=Ca,jn.at=Ia,jn.before=Rs,jn.bind=As,jn.bindAll=tl,jn.bindKey=Ps,jn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return $s(e)?e:[e]},jn.chain=ps,jn.chunk=function(e,t,n){t=(n?wo(e,t,n):t===r)?1:_n(ga(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=se(mt(i/t));o<i;)a[s++]=ii(e,o,o+=t);return a},jn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},jn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=se(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Dt($s(n)?Ri(n):[n],vr(t,1))},jn.cond=function(e){var t=null==e?0:e.length,n=co();return e=t?Lt(e,(function(e){if("function"!=typeof e[1])throw new Re(i);return[n(e[0]),e[1]]})):[],Jr((function(n){for(var r=-1;++r<t;){var i=e[r];if(Et(i[0],this,n))return Et(i[1],this,n)}}))},jn.conforms=function(e){return function(e){var t=Oa(e);return function(n){return ur(n,e,t)}}(cr(e,1))},jn.constant=nl,jn.countBy=ys,jn.create=function(e,t){var n=Wn(e);return null==t?n:or(n,t)},jn.curry=function e(t,n,i){var o=Qi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},jn.curryRight=function e(t,n,i){var o=Qi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},jn.debounce=Os,jn.defaults=Ea,jn.defaultsDeep=Ta,jn.defer=Ls,jn.delay=Ds,jn.difference=Wo,jn.differenceBy=qo,jn.differenceWith=Ho,jn.drop=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,(t=n||t===r?1:ga(t))<0?0:t,i):[]},jn.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,0,(t=i-(t=n||t===r?1:ga(t)))<0?0:t):[]},jn.dropRightWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!0,!0):[]},jn.dropWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!0):[]},jn.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&wo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ga(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ga(i))<0&&(i+=o),i=n>i?0:ya(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},jn.filter=function(e,t){return($s(e)?At:yr)(e,co(t,3))},jn.flatMap=function(e,t){return vr(Is(e,t),1)},jn.flatMapDeep=function(e,t){return vr(Is(e,t),d)},jn.flatMapDepth=function(e,t,n){return n=n===r?1:ga(n),vr(Is(e,t),n)},jn.flatten=Ko,jn.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,d):[]},jn.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===r?1:ga(t)):[]},jn.flip=function(e){return Qi(e,512)},jn.flow=rl,jn.flowRight=il,jn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},jn.functions=function(e){return null==e?[]:kr(e,Oa(e))},jn.functionsIn=function(e){return null==e?[]:kr(e,La(e))},jn.groupBy=xs,jn.initial=function(e){return(null==e?0:e.length)?ii(e,0,-1):[]},jn.intersection=Xo,jn.intersectionBy=Yo,jn.intersectionWith=Jo,jn.invert=Ra,jn.invertBy=Aa,jn.invokeMap=ks,jn.iteratee=sl,jn.keyBy=Cs,jn.keys=Oa,jn.keysIn=La,jn.map=Is,jn.mapKeys=function(e,t){var n={};return t=co(t,3),wr(e,(function(e,r,i){sr(n,t(e,r,i),e)})),n},jn.mapValues=function(e,t){var n={};return t=co(t,3),wr(e,(function(e,r,i){sr(n,r,t(e,r,i))})),n},jn.matches=function(e){return jr(cr(e,1))},jn.matchesProperty=function(e,t){return Wr(e,cr(t,1))},jn.memoize=Ms,jn.merge=Da,jn.mergeWith=Ma,jn.method=al,jn.methodOf=ll,jn.mixin=cl,jn.negate=Fs,jn.nthArg=function(e){return e=ga(e),Jr((function(t){return Hr(t,e)}))},jn.omit=Fa,jn.omitBy=function(e,t){return Ba(e,Fs(co(t)))},jn.once=function(e){return Rs(2,e)},jn.orderBy=function(e,t,n,i){return null==e?[]:($s(t)||(t=null==t?[]:[t]),$s(n=i?r:n)||(n=null==n?[]:[n]),Vr(e,t,n))},jn.over=hl,jn.overArgs=zs,jn.overEvery=dl,jn.overSome=fl,jn.partial=Bs,jn.partialRight=Us,jn.partition=Es,jn.pick=za,jn.pickBy=Ba,jn.property=pl,jn.propertyOf=function(e){return function(t){return null==e?r:Cr(e,t)}},jn.pull=Zo,jn.pullAll=es,jn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,co(n,2)):e},jn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,r,n):e},jn.pullAt=ts,jn.range=ml,jn.rangeRight=gl,jn.rearg=js,jn.reject=function(e,t){return($s(e)?At:yr)(e,Fs(co(t,3)))},jn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=co(t,3);++r<o;){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return Gr(e,i),n},jn.rest=function(e,t){if("function"!=typeof e)throw new Re(i);return Jr(e,t=t===r?t:ga(t))},jn.reverse=ns,jn.sampleSize=function(e,t,n){return t=(n?wo(e,t,n):t===r)?1:ga(t),($s(e)?Zn:Zr)(e,t)},jn.set=function(e,t,n){return null==e?e:ei(e,t,n)},jn.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ei(e,t,n,i)},jn.shuffle=function(e){return($s(e)?er:ri)(e)},jn.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&wo(e,t,n)?(t=0,n=i):(t=null==t?0:ga(t),n=n===r?i:ga(n)),ii(e,t,n)):[]},jn.sortBy=Ts,jn.sortedUniq=function(e){return e&&e.length?li(e):[]},jn.sortedUniqBy=function(e,t){return e&&e.length?li(e,co(t,2)):[]},jn.split=function(e,t,n){return n&&"number"!=typeof n&&wo(e,t,n)&&(t=n=r),(n=n===r?m:n>>>0)?(e=ba(e))&&("string"==typeof t||null!=t&&!aa(t))&&!(t=ui(t))&&ln(e)?xi(pn(e),0,n):e.split(t,n):[]},jn.spread=function(e,t){if("function"!=typeof e)throw new Re(i);return t=null==t?0:_n(ga(t),0),Jr((function(n){var r=n[t],i=xi(n,0,t);return r&&Dt(i,r),Et(e,this,i)}))},jn.tail=function(e){var t=null==e?0:e.length;return t?ii(e,1,t):[]},jn.take=function(e,t,n){return e&&e.length?ii(e,0,(t=n||t===r?1:ga(t))<0?0:t):[]},jn.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,(t=i-(t=n||t===r?1:ga(t)))<0?0:t,i):[]},jn.takeRightWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!1,!0):[]},jn.takeWhile=function(e,t){return e&&e.length?pi(e,co(t,3)):[]},jn.tap=function(e,t){return t(e),e},jn.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Re(i);return na(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Os(e,t,{leading:r,maxWait:t,trailing:o})},jn.thru=ms,jn.toArray=pa,jn.toPairs=Ua,jn.toPairsIn=ja,jn.toPath=function(e){return $s(e)?Lt(e,Bo):ua(e)?[e]:Ri(zo(ba(e)))},jn.toPlainObject=_a,jn.transform=function(e,t,n){var r=$s(e),i=r||Ys(e)||ha(e);if(t=co(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:na(e)&&Zs(o)?Wn(Ke(e)):{}}return(i?Nt:wr)(e,(function(e,r,i){return t(n,e,r,i)})),n},jn.unary=function(e){return Ss(e,1)},jn.union=rs,jn.unionBy=is,jn.unionWith=os,jn.uniq=function(e){return e&&e.length?hi(e):[]},jn.uniqBy=function(e,t){return e&&e.length?hi(e,co(t,2)):[]},jn.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?hi(e,r,t):[]},jn.unset=function(e,t){return null==e||di(e,t)},jn.unzip=ss,jn.unzipWith=as,jn.update=function(e,t,n){return null==e?e:fi(e,t,_i(n))},jn.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,_i(n),i)},jn.values=Wa,jn.valuesIn=function(e){return null==e?[]:Zt(e,La(e))},jn.without=ls,jn.words=Za,jn.wrap=function(e,t){return Bs(_i(t),e)},jn.xor=cs,jn.xorBy=us,jn.xorWith=hs,jn.zip=ds,jn.zipObject=function(e,t){return yi(e||[],t||[],nr)},jn.zipObjectDeep=function(e,t){return yi(e||[],t||[],ei)},jn.zipWith=fs,jn.entries=Ua,jn.entriesIn=ja,jn.extend=xa,jn.extendWith=ka,cl(jn,jn),jn.add=_l,jn.attempt=el,jn.camelCase=qa,jn.capitalize=Ha,jn.ceil=bl,jn.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=va(n))==n?n:0),t!==r&&(t=(t=va(t))==t?t:0),lr(va(e),t,n)},jn.clone=function(e){return cr(e,4)},jn.cloneDeep=function(e){return cr(e,5)},jn.cloneDeepWith=function(e,t){return cr(e,5,t="function"==typeof t?t:r)},jn.cloneWith=function(e,t){return cr(e,4,t="function"==typeof t?t:r)},jn.conformsTo=function(e,t){return null==t||ur(e,t,Oa(t))},jn.deburr=Va,jn.defaultTo=function(e,t){return null==e||e!=e?t:e},jn.divide=wl,jn.endsWith=function(e,t,n){e=ba(e),t=ui(t);var i=e.length,o=n=n===r?i:lr(ga(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},jn.eq=Ws,jn.escape=function(e){return(e=ba(e))&&Y.test(e)?e.replace(G,sn):e},jn.escapeRegExp=function(e){return(e=ba(e))&&ie.test(e)?e.replace(re,"\\$&"):e},jn.every=function(e,t,n){var i=$s(e)?Rt:mr;return n&&wo(e,t,n)&&(t=r),i(e,co(t,3))},jn.find=vs,jn.findIndex=Vo,jn.findKey=function(e,t){return Ut(e,co(t,3),wr)},jn.findLast=_s,jn.findLastIndex=$o,jn.findLastKey=function(e,t){return Ut(e,co(t,3),xr)},jn.floor=xl,jn.forEach=bs,jn.forEachRight=ws,jn.forIn=function(e,t){return null==e?e:_r(e,co(t,3),La)},jn.forInRight=function(e,t){return null==e?e:br(e,co(t,3),La)},jn.forOwn=function(e,t){return e&&wr(e,co(t,3))},jn.forOwnRight=function(e,t){return e&&xr(e,co(t,3))},jn.get=Na,jn.gt=qs,jn.gte=Hs,jn.has=function(e,t){return null!=e&&yo(e,t,Nr)},jn.hasIn=Sa,jn.head=Go,jn.identity=ol,jn.includes=function(e,t,n,r){e=Gs(e)?e:Wa(e),n=n&&!r?ga(n):0;var i=e.length;return n<0&&(n=_n(i+n,0)),ca(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Wt(e,t,n)>-1},jn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ga(n);return i<0&&(i=_n(r+i,0)),Wt(e,t,i)},jn.inRange=function(e,t,n){return t=ma(t),n===r?(n=t,t=0):n=ma(n),function(e,t,n){return e>=bn(t,n)&&e<_n(t,n)}(e=va(e),t,n)},jn.invoke=Pa,jn.isArguments=Vs,jn.isArray=$s,jn.isArrayBuffer=Ks,jn.isArrayLike=Gs,jn.isArrayLikeObject=Xs,jn.isBoolean=function(e){return!0===e||!1===e||ra(e)&&Er(e)==_},jn.isBuffer=Ys,jn.isDate=Js,jn.isElement=function(e){return ra(e)&&1===e.nodeType&&!sa(e)},jn.isEmpty=function(e){if(null==e)return!0;if(Gs(e)&&($s(e)||"string"==typeof e||"function"==typeof e.splice||Ys(e)||ha(e)||Vs(e)))return!e.length;var t=go(e);if(t==C||t==S)return!e.size;if(Io(e))return!Fr(e).length;for(var n in e)if(Me.call(e,n))return!1;return!0},jn.isEqual=function(e,t){return Or(e,t)},jn.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?Or(e,t,r,n):!!i},jn.isError=Qs,jn.isFinite=function(e){return"number"==typeof e&&Bt(e)},jn.isFunction=Zs,jn.isInteger=ea,jn.isLength=ta,jn.isMap=ia,jn.isMatch=function(e,t){return e===t||Lr(e,t,ho(t))},jn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Lr(e,t,ho(t),n)},jn.isNaN=function(e){return oa(e)&&e!=+e},jn.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Dr(e)},jn.isNil=function(e){return null==e},jn.isNull=function(e){return null===e},jn.isNumber=oa,jn.isObject=na,jn.isObjectLike=ra,jn.isPlainObject=sa,jn.isRegExp=aa,jn.isSafeInteger=function(e){return ea(e)&&e>=-9007199254740991&&e<=f},jn.isSet=la,jn.isString=ca,jn.isSymbol=ua,jn.isTypedArray=ha,jn.isUndefined=function(e){return e===r},jn.isWeakMap=function(e){return ra(e)&&go(e)==P},jn.isWeakSet=function(e){return ra(e)&&"[object WeakSet]"==Er(e)},jn.join=function(e,t){return null==e?"":Kt.call(e,t)},jn.kebabCase=$a,jn.last=Qo,jn.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ga(n))<0?_n(i+o,0):bn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):jt(e,Ht,o,!0)},jn.lowerCase=Ka,jn.lowerFirst=Ga,jn.lt=da,jn.lte=fa,jn.max=function(e){return e&&e.length?gr(e,ol,Tr):r},jn.maxBy=function(e,t){return e&&e.length?gr(e,co(t,2),Tr):r},jn.mean=function(e){return Vt(e,ol)},jn.meanBy=function(e,t){return Vt(e,co(t,2))},jn.min=function(e){return e&&e.length?gr(e,ol,Br):r},jn.minBy=function(e,t){return e&&e.length?gr(e,co(t,2),Br):r},jn.stubArray=yl,jn.stubFalse=vl,jn.stubObject=function(){return{}},jn.stubString=function(){return""},jn.stubTrue=function(){return!0},jn.multiply=Cl,jn.nth=function(e,t){return e&&e.length?Hr(e,ga(t)):r},jn.noConflict=function(){return pt._===this&&(pt._=je),this},jn.noop=ul,jn.now=Ns,jn.pad=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(gt(i),n)+e+Vi(mt(i),n)},jn.padEnd=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;return t&&r<t?e+Vi(t-r,n):e},jn.padStart=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;return t&&r<t?Vi(t-r,n)+e:e},jn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),xn(ba(e).replace(oe,""),t||0)},jn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&wo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=ma(e),t===r?(t=e,e=0):t=ma(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=kn();return bn(e+o*(t-e+ut("1e-"+((o+"").length-1))),t)}return Xr(e,t)},jn.reduce=function(e,t,n){var r=$s(e)?Mt:Gt,i=arguments.length<3;return r(e,co(t,4),n,i,fr)},jn.reduceRight=function(e,t,n){var r=$s(e)?Ft:Gt,i=arguments.length<3;return r(e,co(t,4),n,i,pr)},jn.repeat=function(e,t,n){return t=(n?wo(e,t,n):t===r)?1:ga(t),Yr(ba(e),t)},jn.replace=function(){var e=arguments,t=ba(e[0]);return e.length<3?t:t.replace(e[1],e[2])},jn.result=function(e,t,n){var i=-1,o=(t=bi(t,e)).length;for(o||(o=1,e=r);++i<o;){var s=null==e?r:e[Bo(t[i])];s===r&&(i=o,s=n),e=Zs(s)?s.call(e):s}return e},jn.round=Il,jn.runInContext=e,jn.sample=function(e){return($s(e)?Qn:Qr)(e)},jn.size=function(e){if(null==e)return 0;if(Gs(e))return ca(e)?fn(e):e.length;var t=go(e);return t==C||t==S?e.size:Fr(e).length},jn.snakeCase=Xa,jn.some=function(e,t,n){var i=$s(e)?zt:oi;return n&&wo(e,t,n)&&(t=r),i(e,co(t,3))},jn.sortedIndex=function(e,t){return si(e,t)},jn.sortedIndexBy=function(e,t,n){return ai(e,t,co(n,2))},jn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=si(e,t);if(r<n&&Ws(e[r],t))return r}return-1},jn.sortedLastIndex=function(e,t){return si(e,t,!0)},jn.sortedLastIndexBy=function(e,t,n){return ai(e,t,co(n,2),!0)},jn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=si(e,t,!0)-1;if(Ws(e[n],t))return n}return-1},jn.startCase=Ya,jn.startsWith=function(e,t,n){return e=ba(e),n=null==n?0:lr(ga(n),0,e.length),t=ui(t),e.slice(n,n+t.length)==t},jn.subtract=El,jn.sum=function(e){return e&&e.length?Xt(e,ol):0},jn.sumBy=function(e,t){return e&&e.length?Xt(e,co(t,2)):0},jn.template=function(e,t,n){var i=jn.templateSettings;n&&wo(e,t,n)&&(t=r),e=ba(e),t=ka({},t,i,Zi);var o,s,a=ka({},t.imports,i.imports,Zi),l=Oa(a),c=Zt(a,l),u=0,h=t.interpolate||we,d="__p += '",f=Ne((t.escape||we).source+"|"+h.source+"|"+(h===Z?fe:we).source+"|"+(t.evaluate||we).source+"|$","g"),p="//# sourceURL="+(Me.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++st+"]")+"\n";e.replace(f,(function(t,n,r,i,a,l){return r||(r=i),d+=e.slice(u,l).replace(xe,an),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),a&&(s=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=l+t.length,t})),d+="';\n";var m=Me.call(t,"variable")&&t.variable;if(m){if(he.test(m))throw new Ce("Invalid `variable` option passed into `_.template`")}else d="with (obj) {\n"+d+"\n}\n";d=(s?d.replace(H,""):d).replace(V,"$1").replace($,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var g=el((function(){return Ie(l,p+"return "+d).apply(r,c)}));if(g.source=d,Qs(g))throw g;return g},jn.times=function(e,t){if((e=ga(e))<1||e>f)return[];var n=m,r=bn(e,m);t=co(t),e-=m;for(var i=Yt(r,t);++n<e;)t(n);return i},jn.toFinite=ma,jn.toInteger=ga,jn.toLength=ya,jn.toLower=function(e){return ba(e).toLowerCase()},jn.toNumber=va,jn.toSafeInteger=function(e){return e?lr(ga(e),-9007199254740991,f):0===e?e:0},jn.toString=ba,jn.toUpper=function(e){return ba(e).toUpperCase()},jn.trim=function(e,t,n){if((e=ba(e))&&(n||t===r))return Jt(e);if(!e||!(t=ui(t)))return e;var i=pn(e),o=pn(t);return xi(i,tn(i,o),nn(i,o)+1).join("")},jn.trimEnd=function(e,t,n){if((e=ba(e))&&(n||t===r))return e.slice(0,mn(e)+1);if(!e||!(t=ui(t)))return e;var i=pn(e);return xi(i,0,nn(i,pn(t))+1).join("")},jn.trimStart=function(e,t,n){if((e=ba(e))&&(n||t===r))return e.replace(oe,"");if(!e||!(t=ui(t)))return e;var i=pn(e);return xi(i,tn(i,pn(t))).join("")},jn.truncate=function(e,t){var n=30,i="...";if(na(t)){var o="separator"in t?t.separator:o;n="length"in t?ga(t.length):n,i="omission"in t?ui(t.omission):i}var s=(e=ba(e)).length;if(ln(e)){var a=pn(e);s=a.length}if(n>=s)return e;var l=n-fn(i);if(l<1)return i;var c=a?xi(a,0,l).join(""):e.slice(0,l);if(o===r)return c+i;if(a&&(l+=c.length-l),aa(o)){if(e.slice(l).search(o)){var u,h=c;for(o.global||(o=Ne(o.source,ba(pe.exec(o))+"g")),o.lastIndex=0;u=o.exec(h);)var d=u.index;c=c.slice(0,d===r?l:d)}}else if(e.indexOf(ui(o),l)!=l){var f=c.lastIndexOf(o);f>-1&&(c=c.slice(0,f))}return c+i},jn.unescape=function(e){return(e=ba(e))&&X.test(e)?e.replace(K,gn):e},jn.uniqueId=function(e){var t=++Fe;return ba(e)+t},jn.upperCase=Ja,jn.upperFirst=Qa,jn.each=bs,jn.eachRight=ws,jn.first=Go,cl(jn,(kl={},wr(jn,(function(e,t){Me.call(jn.prototype,t)||(kl[t]=e)})),kl),{chain:!1}),jn.VERSION="4.17.21",Nt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){jn[e].placeholder=jn})),Nt(["drop","take"],(function(e,t){Vn.prototype[e]=function(n){n=n===r?1:_n(ga(n),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=bn(n,i.__takeCount__):i.__views__.push({size:bn(n,m),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Nt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:co(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Nt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Nt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(ol)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Jr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return Ar(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Fs(co(e)))},Vn.prototype.slice=function(e,t){e=ga(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Vn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ga(t))<0?n.dropRight(-t):n.take(t-e)),n)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(m)},wr(Vn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=jn[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&(jn.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,l=t instanceof Vn,c=a[0],u=l||$s(t),h=function(e){var t=o.apply(jn,Dt([e],a));return i&&d?t[0]:t};u&&n&&"function"==typeof c&&1!=c.length&&(l=u=!1);var d=this.__chain__,f=!!this.__actions__.length,p=s&&!d,m=l&&!f;if(!s&&u){t=m?t:new Vn(this);var g=e.apply(t,a);return g.__actions__.push({func:ms,args:[h],thisArg:r}),new Hn(g,d)}return p&&m?e.apply(this,a):(g=this.thru(h),p?i?g.value()[0]:g.value():g)})})),Nt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ae[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);jn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply($s(i)?i:[],e)}return this[n]((function(n){return t.apply($s(n)?n:[],e)}))}})),wr(Vn.prototype,(function(e,t){var n=jn[t];if(n){var r=n.name+"";Me.call(Pn,r)||(Pn[r]=[]),Pn[r].push({name:t,func:n})}})),Pn[ji(r,2).name]=[{name:"wrapper",func:r}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Ri(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ri(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ri(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=$s(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=bn(t,e+s);break;case"takeRight":e=_n(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,l=a-s,c=r?a:s-1,u=this.__iteratees__,h=u.length,d=0,f=bn(l,this.__takeCount__);if(!n||!r&&i==l&&f==l)return mi(e,this.__actions__);var p=[];e:for(;l--&&d<f;){for(var m=-1,g=e[c+=t];++m<h;){var y=u[m],v=y.iteratee,_=y.type,b=v(g);if(2==_)g=b;else if(!b){if(1==_)continue e;break e}}p[d++]=g}return p},jn.prototype.at=gs,jn.prototype.chain=function(){return ps(this)},jn.prototype.commit=function(){return new Hn(this.value(),this.__chain__)},jn.prototype.next=function(){this.__values__===r&&(this.__values__=pa(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},jn.prototype.plant=function(e){for(var t,n=this;n instanceof qn;){var i=jo(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},jn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:ms,args:[ns],thisArg:r}),new Hn(t,this.__chain__)}return this.thru(ns)},jn.prototype.toJSON=jn.prototype.valueOf=jn.prototype.value=function(){return mi(this.__wrapped__,this.__actions__)},jn.prototype.first=jn.prototype.head,Qe&&(jn.prototype[Qe]=function(){return this}),jn}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(pt._=yn,define((function(){return yn}))):gt?((gt.exports=yn)._=yn,mt._=yn):pt._=yn}).call(this)})),o.register("eRFtV",(function(t,n){e(t.exports,"searchMovies",(()=>s));var r=o("c7JiP");o("BGpcc"),o("jzriA");document.getElementById("end-of-results"),document.getElementById("posters");const i=document.querySelector(".search__not-found"),s=async({query:e,page:t=1})=>{if(""!==e)try{const n=await(0,r.fetchMoviesWithQuery)(e,t);return 0===n.data.results.length?i.style.visibility="visible":i.style.visibility="hidden",n}catch(e){console.error("Error searching movies:",e)}}})),o("ifJdc").register(JSON.parse('{"huz6b":"index.90c7ddeb.js","dNSLY":"play-icon.9215c470.png","ez63D":"video-placeholder.018de80f.jpg","jPrqb":"placeholder.b82de925.jpg","kA4fy":"search-icon.082eef79.svg","d80zT":"film.3dbd7ff4.svg"}'));
//# sourceMappingURL=index.90c7ddeb.js.map
