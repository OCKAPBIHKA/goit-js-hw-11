import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p=o=>o.reduce((r,{tags:t,webformatURL:i,largeImageURL:e,likes:s,views:a,comments:u,downloads:d})=>r+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${i}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${a}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${u}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${d}</span>
        </div>
    </div>
</li>
    `,""),m="43762394-e72429fa5e3e409aeb4eb6170",h="https://pixabay.com/api/",y=o=>{const r=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/?${r}`).then(t=>{if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return t.json()})},n=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(o){o.preventDefault();const r=o.target.elements.searchKeyword.value.trim();if(n.innerHTML="",r==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"});n.innerHTML="",l.classList.remove("is-hidden"),y(r).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"}),n.innerHTML=p(t.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>console.log(t)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
