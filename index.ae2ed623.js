function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequire9267;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequire9267=a),a("7QdEN"),a("g1uI7");var o,d=a("c7JiP");o=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var r=n=>e(o).genres.find((e=>e.id===n)).name;function s(e,n,t){n.innerHTML="";const i=e.map((({id:e,title:n,poster_path:i,vote_average:a,release_date:o,genre_ids:d})=>`\n        <figure\n          class="posters__box"\n          tabindex="0"\n          role="button"\n          aria-label="${n}"\n          data-id="${e}"\n        >\n          <img src="https://image.tmdb.org/t/p/w500/${i}" alt="placeholder" class="posters__img" />\n          <figcaption>\n            <h3 id="poster-title" class="posters__title">${n}</h3>\n            <p class="posters__details">\n              ${d.map((e=>` ${r(e)}`))}\n              |\n              ${new Date(o).getFullYear()}\n              ${t?`<span class="posters__ranking">${a}</span>`:""}\n            </p>\n          </figcaption>\n        </figure>\n      `)).join("");n.insertAdjacentHTML("beforeend",i)}const l=document.getElementById("footer-dialog"),c=document.getElementById("hide"),m=document.getElementById("show"),u=document.querySelector("body");m.addEventListener("click",(()=>{u.style.overflow="hidden",l.showModal()}));const p=()=>{u.style.overflow="auto",l.close()};c.addEventListener("click",p),l.addEventListener("close",p);const f=document.getElementById("posters");(async e=>{try{const n=await d.default.fetchTrendingMovies(e);s(n.data.results,f,!0)}catch(e){console.log(e)}})(1),a("g1uI7");
//# sourceMappingURL=index.ae2ed623.js.map
