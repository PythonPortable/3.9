var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,u,l,s,d,f,p,c,h,v,b,y,g,m,w,j={},S={};function k(e){if(S[e])return S[e].exports;var r=S[e]={id:e,exports:{}};return j[e](r,r.exports,k),r.exports}k.m=j,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{776:"5a65bd8d418bae34dfbf",925:"454db0615e72f3847e2a"}[e]+".js?v="+{776:"5a65bd8d418bae34dfbf",925:"454db0615e72f3847e2a"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@voila-dashboards/jupyterlab-preview:",k.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="@voila-dashboards/jupyterlab-preview",u=[];switch(t){case"default":((e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(1!=!u.eager?n:i>u.from))&&(a[r]={get:()=>k.e(925).then((()=>()=>k(925))),from:i,eager:!1})})("@voila-dashboards/jupyterlab-preview","2.0.2")}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return r}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,d,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!l||("u"==f?u>n&&!a:""==f!=a);if("u"==d){if(!l||"u"!=f)return!1}else if(l)if(f==d)if(u<=n){if(s!=e[u])return!1}else{if(a?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||d<f!=a)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",d=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,a,n)),h(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},p=(e,r,t,n)=>{var o=e[t];return"No satisfying version ("+a(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},c=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(p(e,r,t,n))},h=e=>(e.loaded=1,e.get()),b=(v=e=>function(r,t,n,a){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,n,a)):e(r,k.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||c(r,e,t,n)||u(r,t))))),y=v(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),g={},m={83:()=>y("default","@jupyterlab/mainmenu",[1,3,0,7]),120:()=>y("default","@jupyterlab/apputils",[1,3,0,7]),168:()=>y("default","@lumino/signaling",[1,1,4,3]),241:()=>b("default","@jupyterlab/docregistry",[1,3,0,9]),271:()=>y("default","react",[1,17,0,1]),331:()=>y("default","@jupyterlab/coreutils",[1,5,0,5]),669:()=>y("default","@jupyterlab/ui-components",[1,3,0,6]),730:()=>y("default","@jupyterlab/application",[1,3,0,9]),751:()=>y("default","@jupyterlab/notebook",[1,3,0,9]),797:()=>y("default","@lumino/coreutils",[1,1,5,3]),879:()=>y("default","@jupyterlab/settingregistry",[1,3,0,5])},w={925:[83,120,168,241,271,331,669,730,751,797,879]},k.f.consumes=(e,r)=>{k.o(w,e)&&w[e].forEach((e=>{if(k.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,j[e]=t=>{delete S[e],t.exports=r()}},n=r=>{delete g[e],j[e]=t=>{throw delete S[e],r}};try{var a=m[e]();a.then?r.push(g[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={329:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,i,u]=t,l=0,s=[];l<o.length;l++)a=o[l],k.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(n in i)k.o(i,n)&&(k.m[n]=i[n]);for(u&&u(k),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_voila_dashboards_jupyterlab_preview=self.webpackChunk_voila_dashboards_jupyterlab_preview||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E={};(()=>{var e=E,r={"./index":()=>k.e(925).then((()=>()=>k(925))),"./extension":()=>k.e(925).then((()=>()=>k(925))),"./style":()=>k.e(776).then((()=>()=>k(776)))},t=(e,t)=>(k.R=t,t=k.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),k.R=void 0,t),n=(e,r)=>{if(k.S){var t=k.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return k.S[n]=e,k.I(n,r)}};k.d(e,{get:()=>t,init:()=>n})})(),(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@voila-dashboards/jupyterlab-preview"]=E})();