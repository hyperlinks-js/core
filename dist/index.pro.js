// sdkVersion: 1.0.0
var c=t=>Promise.all(t.map(e=>fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(e)}`).then(r=>r.json())));var l=()=>{let t=document.querySelectorAll("a.hyperlinks"),e=new Set;return Promise.resolve(Array.from(t).filter(({href:r})=>!e.has(r)&&e.add(r)))};var p=t=>{let r=new DOMParser().parseFromString(t,"text/html");return Promise.resolve(r)},h=(t,e)=>{typeof window<"u"&&localStorage.setItem(t,JSON.stringify(e))},f=(t,e,r)=>{let o={};return Array.from(t.querySelectorAll("meta")).forEach(n=>{let i=n.getAttribute("name")||n.getAttribute("property");if(e.includes(i))o[i]=n.getAttribute("content")||"Not available";else if(!i){let a=n.getAttribute("itemprop");e.includes(a)&&(o[a]=n.getAttribute("content")||"Not available")}}),e.forEach(n=>{o[n]||(o[n]="Not available")}),h(r,o),o},m=t=>Promise.resolve(t.filter(u));function u(t){return localStorage.getItem(t)===null}var g=new MutationObserver(t=>{t.forEach(e=>{if(e.type==="childList"){let r=e.addedNodes;for(let o=0;o<r.length;o++){let n=r[o];n.tagName==="A"&&n.classList.contains("hyperlinks")&&s()}}else if(e.type==="attributes"&&e.attributeName==="href"){let r=e.target;r.tagName==="A"&&r.classList.contains("hyperlinks")&&s()}})});var d=["og:image","og:url","og:title","og:description"];async function s(){let t=await l(),e=await m(t),r=await c(e);for(let o of r){let n=await p(o.contents);f(n,d,o.status.url)}}s();g.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href"]});var y={};y.theme=document.querySelector("head").getAttribute("hyperlinksTheme");export{s as runner};