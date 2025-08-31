var K=Object.defineProperty;var ee=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>ee(e,typeof t!="symbol"?t+"":t,n);var R="__framer_force_showing_editorbar_since",E="2147483647";var _=12,P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",v="__framer-editorbar-container",h="__framer-editorbar-label",y="__framer-editorbar-button",S="__framer-editorbar-loading-spinner",T="__framer-editorbar-button-tooltip-visible",te=`
#${v} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    z-index: calc(${E});
}

#${h} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${y} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${h}.${T} {
    opacity: 1;
}

#${h}, #${y} {
    backdrop-filter: blur(10px);
    background-color: rgba(34, 34, 34, 0.8);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
    color: #fff;
}

#${S} {
    width: ${_}px;
    height: ${_}px;
    -webkit-mask: url(${P});
    mask: url(${P});
    -webkit-mask-size: ${_}px;
    mask-size: ${_}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,D=document.createElement("style");D.innerHTML=te;document.head.appendChild(D);var L;(s=>(s.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,s.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),s.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),s.isSafari=s.isWebKit&&!s.isChrome,s.isSafariDesktop=s.isSafari&&!s.isTouch,s.isWindows=/Win/u.test(navigator.platform),s.isMacOS=/Mac/u.test(navigator.platform),s.isAndroidWebView=s.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),s.isIosWebView=s.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),s.isWebView=s.isAndroidWebView||s.isIosWebView))(L||={});var I=class extends Promise{constructor(){let n,i;super((o,r)=>{n=o,i=r});x(this,"_state","initial");x(this,"resolve");x(this,"reject");this.resolve=o=>{this._state="fulfilled",n(o)},this.reject=o=>{this._state="rejected",i(o)}}get state(){return this._state}pending(){return this._state="pending",this}isResolved(){return this._state==="fulfilled"||this._state==="rejected"}};I.prototype.constructor=Promise;var O="framer_",f="editSite";function w(e){let t=window.__framer_editorBarDependencies;if(!t)throw new Error("Dependencies not found");if(t.__version<1||t.__version>2)throw new Error("Unsupported version");let n=t[e];if(!n)throw new Error("Dependency not found");return n}var{createElement:C,memo:F,useCallback:M,useEffect:p,useRef:N,useState:c}=w("react");var{createPortal:B}=w("react-dom");function d(e,t,n){let{children:i,...o}=t??{};return C(e,n?{...o,key:n}:o,i)}var k=d;function U({isLoading:e,isEditorVisible:t,onClick:n}){let[i,o]=c(!1),[r,a]=c(t);return r!==t&&(a(t),t||o(!1)),k("div",{id:v,children:[d("span",{"aria-label":"Edit Framer Content",id:h,className:i?T:void 0,children:"Edit Content"}),d("button",{type:"button","aria-labelledby":h,id:y,onClick:n,onMouseMove:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:e?d(oe,{}):d(ne,{})})]})}function ne(){return k("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"none",children:[d("path",{d:"M8.75 2.25a1.77 1.77 0 0 1 2.5 0h0c.69.69.69 1.81 0 2.5l-7 7h-2.5v-2.5Z",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M8 11.75h3.75",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function oe(){return d("div",{id:S})}var b="data-original-href",V="link[rel*='icon']",re=`${V}:not([${b}])`,ie="/sites/icons/writing-hand-favicon.png";function W(){document.querySelectorAll(re).forEach(e=>{e instanceof HTMLLinkElement&&(e.setAttribute(b,e.href),e.setAttribute("href",ie))})}function z(){document.querySelectorAll(V).forEach(e=>{e instanceof HTMLLinkElement&&e.getAttribute(b)&&(e.setAttribute("href",e.getAttribute(b)??""),e.removeAttribute(b))})}function j(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function H(e,t){let[n,i]=c(!1);return p(()=>{let o=r=>{if(r.origin!==e||!j(r.data))return;let{apiVersion:a,type:l,component:u}=r.data;a===1&&l==="initializeComponent"&&u===t&&i(!0)};return window.addEventListener("message",o),()=>{window.removeEventListener("message",o)}},[e,t]),n}var{useCurrentRoute:X,useLocaleInfo:Y,useRouter:Z}=w("framer");function G(){let e=X(),t=Y()?.activeLocale??void 0,{collectionUtils:n}=Z(),[i,o]=c(),r=e?.id,a=e?.collectionId,l=e?.pathVariables;return p(()=>{if(!r)return;let u=!1;return se(t,a,n,l).then(g=>{u||o({collectionItemNodeId:g,webPageNodeId:r})}).catch(()=>{u||o({collectionItemNodeId:void 0,webPageNodeId:r})}),()=>{u=!0}},[t,a,n,l,r]),i}async function se(e,t,n,i){if(!t)return;let o=Object.values(i??{}),[r]=o;if(o.length!==1||!r||typeof r!="string")return;let a=n?.[t];return(await a?.())?.getRecordIdBySlug(r,e)}function $(e,t){let n=G(),i=H(t,"OnPageActiveRouteStore");p(()=>{i&&e.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:n},t)},[e,n,t,i])}var ue=Date.now();function ce(){return window.self!==window.top}var de=`
#__framer-editorbar {
    /* https://sergeyski.com/css-color-scheme-and-iframes-lessons-learned-from-disqus-background-bug */
    color-scheme: light dark;
    overflow: hidden;
    position: fixed;
    border: none;
    z-index: calc(${E});
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    touch-action: manipulation;
}

@supports (height: 100dvh) {
    #__framer-editorbar {
        height: 100dvh;
    }
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_visually_hidden {
    clip-path: circle(1px at calc(100% - 20px) calc(50% + 4px));
    z-index: calc(${E} - 1);
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}
`,Q=document.createElement("style");Q.innerHTML=de;document.head.appendChild(Q);var A=new URL(import.meta.url).origin;function le(){if(localStorage.getItem(R)!==null)return J(),!0;let e=new URL(window.location.href),t=e.searchParams.has(f),n=e.searchParams.has(f.toLowerCase());if(!t&&!n)return!1;let i=t?f:f.toLowerCase(),o=e.searchParams.get(i);if(o!==""&&o!==null)return!1;for(let r of e.searchParams.keys())if(r!==f&&r!==f.toLowerCase()&&!r.startsWith(O))return!1;return J(),localStorage.setItem(R,new Date().toString()),!0}function J(){let e=new URL(window.location.href);e.searchParams.has(f)&&(e.searchParams.delete(f),e.searchParams.delete(f.toLowerCase()),window.history.replaceState({},"",e.toString()))}var fe=le();function q(){return null}function pe(){let e=document.getElementsByClassName("lenis-scrolling");for(let t of e)t.classList.remove("lenis-scrolling")}function me(){let[e,t]=c(!1),n=M(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{t(!0)}):setTimeout(()=>{t(!0)},300)},[]);return p(()=>{document.readyState==="complete"?n():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&n()},{once:!0})},[n]),e}function ge(e){let[t,n]=c(!1),[i,o]=c(!0),[r,a]=c(!1),[l,u]=c("hidden"),g=N();return g.current??=new I,p(()=>{function s(m){m.origin===A&&typeof m.data=="object"&&m.data?.apiVersion===1&&(m.data.type==="accessResult"&&m.data.data.status==="success"?n(!0):m.data.type==="exitFullscreen"?(document.body.style.overflow="auto",window.scrollTo({behavior:"instant",top:m.data.position?.top??0}),u("hidden")):m.data.type==="sandboxReadyState"&&m.data.data.status==="ready"&&(o(!1),setTimeout(()=>{g.current?.resolve()},50)))}return window.addEventListener("message",s),()=>{window.removeEventListener("message",s)}},[n,o,u]),{showEntrypointButton:t,entrypointButtonLoading:r?i:!1,iframeState:l,onEditContent:()=>{e.current?.contentWindow?.postMessage({apiVersion:1,type:"enterOnPageEditing"},A),u("fullscreen"),a(!0),g.current?.then(()=>{e.current?.contentWindow?.postMessage({apiVersion:1,type:"showCanvas",position:{top:window.scrollY}},A),setTimeout(()=>{document.body.style.overflow="hidden"},300),a(!1)}),pe()}}}function he({framerSiteId:e,features:t,iframeRef:n,className:i}){$(n,A);let o=new URL(import.meta.url),r=o.pathname.lastIndexOf("/");if(r<0)throw new Error("Invalid pathname");let a=t?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return o.pathname=o.pathname.slice(0,r),o.searchParams.set("framerSiteId",e),o.searchParams.set("source",a),o.searchParams.set("features",JSON.stringify(t||{})),o.searchParams.set("loadStart",ue.toString()),fe&&o.searchParams.set("forceShow","true"),d("iframe",{id:"__framer-editorbar",ref:n,src:o.href,"aria-hidden":"true",tabIndex:-1,className:i})}function we({framerSiteId:e,features:t}){let n=N(null),i=me(),{showEntrypointButton:o,entrypointButtonLoading:r,iframeState:a,onEditContent:l}=ge(n);if(p(()=>{if(a!=="fullscreen")return;let g=document.title;return document.title="Editing Page...",W(),()=>{document.title=g,z()}},[a]),!i)return null;let u;return a==="fullscreen"?u="fullscreen":o?u="status_visually_hidden":u="status_hidden",B([o?d(U,{isLoading:r,onClick:l,isEditorVisible:a==="fullscreen"},"button"):null,d(he,{framerSiteId:e,features:t,iframeRef:n,className:u},"iframe")],document.body)}function at(){return ce()?(console.log("[Framer Editor Bar] Unavailable because site is embedded in iframe"),q):L.isWebView?(console.log("[Framer Editor Bar] Unavailable because running in WebView"),q):F(we)}export{at as createEditorBar};
//# sourceMappingURL=https://app.framerstatic.com/editorbar-initializer.7232YEJ7.mjs.map
