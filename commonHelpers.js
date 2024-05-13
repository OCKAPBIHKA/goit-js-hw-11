import{i as n,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=o=>o.reduce((s,{tags:t,webformatURL:i,largeImageURL:e,likes:r,views:a,comments:d,downloads:u})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${i}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${a}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${u}</span>
        </div>
    </div>
</li>
    `,""),m="43762394-e72429fa5e3e409aeb4eb6170",h="https://pixabay.com/api/",y=o=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/?${s}`).then(t=>{if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return t.json()})},c=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(c.innerHTML&&(c.innerHTML=""),s===""){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"});return}l.classList.remove("is-hidden"),y(s).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}c.innerHTML=p(t.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>{n.error({message:"Error load images"+t.message,position:"topCenter",color:"red"})}).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
