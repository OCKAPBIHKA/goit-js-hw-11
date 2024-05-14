import{i as n,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=o=>o.reduce((s,{tags:r,webformatURL:a,largeImageURL:e,likes:t,views:i,comments:u,downloads:d})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${t}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
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
    `,""),m="43762394-e72429fa5e3e409aeb4eb6170",h="https://pixabay.com/api/",y=o=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/?${s}`).then(r=>{if(!r.ok)throw new Error(`Error ${r.status}: ${r.statusText}`);return r.json()}).catch(r=>{iziToast.error({title:"Error load images"})})},c=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(c.innerHTML&&(c.innerHTML=""),s===""){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"});return}l.classList.remove("is-hidden"),y(s).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}c.innerHTML=p(r.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(r=>{const a="Error load images";console.error(a),n.error({message:a,position:"center",color:"blue"})}).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
