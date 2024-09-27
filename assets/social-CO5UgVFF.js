import{K as L,d as $,n as I,p as G,I as P,q as O,L as U,v as z,M as H,y as V,O as F,P as M,Q as K,R as W,S as q,o as E,c as B,f as S,_ as Q,b as J,h as s,w as i,i as l,g as w,N as X,k as x}from"./index-CTWkUgdy.js";import{i as Y,B as _}from"./Button-An8raC-0.js";import{L as Z,B as ee}from"./LogoGithub-D0GNWuqZ.js";import{N as te}from"./Divider-DEmhxLqs.js";import{N as ae}from"./headers-DlwR7Za7.js";function ne(e,t="default",o=[]){const r=e.$slots[t];return r===void 0?o:r()}function oe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function re(){return L}const se={name:"Space",self:re};let D;function le(){if(!Y)return!0;if(D===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),D=t}return D}const ie=Object.assign(Object.assign({},I.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ce=$({name:"Space",props:ie,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=G(e),u=I("Space","-space",void 0,se,e,t),r=P("Space",o,t);return{useGap:le(),rtlEnabled:r,mergedClsPrefix:t,margin:O(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[V("gap",n)]:c}}=u.value,{row:a,col:m}=F(c);return{horizontal:M(m),vertical:M(a)}})}},render(){const{vertical:e,reverse:t,align:o,inline:u,justify:r,itemClass:n,itemStyle:c,margin:a,wrap:m,mergedClsPrefix:v,rtlEnabled:d,useGap:p,wrapItem:A,internalUseGap:T}=this,h=U(ne(this),!1);if(!h.length)return null;const R=`${a.horizontal}px`,b=`${a.horizontal/2}px`,j=`${a.vertical}px`,g=`${a.vertical/2}px`,y=h.length-1,C=r.startsWith("space-");return z("div",{role:"none",class:[`${v}-space`,d&&`${v}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(r)?`flex-${r}`:r,flexWrap:!m||e?"nowrap":"wrap",marginTop:p||e?"":`-${g}`,marginBottom:p||e?"":`-${g}`,alignItems:o,gap:p?`${a.vertical}px ${a.horizontal}px`:""}},!A&&(p||T)?h:h.map((k,f)=>k.type===H?k:z("div",{role:"none",class:n,style:[c,{maxWidth:"100%"},p?"":e?{marginBottom:f!==y?j:""}:d?{marginLeft:C?r==="space-between"&&f===y?"":b:f!==y?R:"",marginRight:C?r==="space-between"&&f===0?"":b:"",paddingTop:g,paddingBottom:g}:{marginRight:C?r==="space-between"&&f===y?"":b:f!==y?R:"",marginLeft:C?r==="space-between"&&f===0?"":b:"",paddingTop:g,paddingBottom:g}]},k)))}});function ue(){const e=K(q,null);return e===null&&W("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pe=S("path",{d:"M478.8 208.2a36 36 0 1 1-36-36a36 36 0 0 1 36 36zM442.6 139a69.42 69.42 0 0 0-69.4 68.7l-43.2 62a48.86 48.86 0 0 0-5.4-.3a51.27 51.27 0 0 0-26.4 7.3L102.4 198a51.8 51.8 0 1 0-50.6 62.9a51.27 51.27 0 0 0 26.4-7.3L274 332.2a51.76 51.76 0 0 0 102.1-5.9l66.5-48.6a69.35 69.35 0 1 0 0-138.7zm0 22.9a46.45 46.45 0 1 1-46.5 46.5a46.54 46.54 0 0 1 46.5-46.5zm-390.8 9a38.18 38.18 0 0 1 33.7 20.2l-18.9-7.6v.1a30.21 30.21 0 0 0-22.6 56v.1l16.1 6.4a36.8 36.8 0 0 1-8.2.9a38.05 38.05 0 0 1-.1-76.1zm272.8 112.2a38.1 38.1 0 1 1-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1 0 22.5-56.2l-15.9-6.4a46.83 46.83 0 0 1 8.3-.9z",fill:"currentColor"},null,-1),me=[pe],fe=$({name:"LogoSteam",render:function(t,o){return E(),B("svg",de,me)}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},we=S("rect",{x:"48",y:"96",width:"416",height:"320",rx:"40",ry:"40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ye=S("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M112 160l144 112l144-112"},null,-1),ve=[we,ye],he=$({name:"MailOutline",render:function(t,o){return E(),B("svg",ge,ve)}});var be=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],u=0;u<e.rangeCount;u++)o.push(e.getRangeAt(u));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),t&&t.focus()}},Ce=be,N={"text/plain":"Text","text/html":"Url",default:"Text"},xe="Copy to clipboard: #{key}, Enter";function _e(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Se(e,t){var o,u,r,n,c,a,m=!1;t||(t={}),o=t.debug||!1;try{r=Ce(),n=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(d){if(d.stopPropagation(),t.format)if(d.preventDefault(),typeof d.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=N[t.format]||N.default;window.clipboardData.setData(p,e)}else d.clipboardData.clearData(),d.clipboardData.setData(t.format,e);t.onCopy&&(d.preventDefault(),t.onCopy(d.clipboardData))}),document.body.appendChild(a),n.selectNodeContents(a),c.addRange(n);var v=document.execCommand("copy");if(!v)throw new Error("copy command was unsuccessful");m=!0}catch(d){o&&console.error("unable to copy using execCommand: ",d),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),u=_e("message"in t?t.message:xe),window.prompt(u,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(n):c.removeAllRanges()),a&&document.body.removeChild(a),r()}return m}var ke=Se;const De=oe(ke),$e={id:"main_content"},Ee={__name:"social",setup(e){const t=ue();J(()=>{window.tabsHandler.showTabs("social"),window.updateCursorAnim()});const o=r=>{window.open(r,"_blank")},u=()=>{De("1214934043"),t.success("Copied Steam ID to clipboard!")};return(r,n)=>(E(),B("div",$e,[s(l(ae),{prefix:"bar"},{default:i(()=>[w("Social")]),_:1}),S("div",null,[s(l(X),{class:"content_overwrite"},{default:i(()=>[w("You can find me there.")]),_:1}),s(l(ce),{vertical:""},{default:i(()=>[s(l(_),{round:"",onClick:n[0]||(n[0]=c=>o("https://github.com/5dbwat4"))},{icon:i(()=>[s(l(x),null,{default:i(()=>[s(l(Z))]),_:1})]),default:i(()=>[w(" Github @5dbwat4")]),_:1}),s(l(_),{round:"",onClick:n[1]||(n[1]=c=>o("https://blog.5dbwat4.top"))},{icon:i(()=>[s(l(x),null,{default:i(()=>[s(l(ee))]),_:1})]),default:i(()=>[w(" My blog")]),_:1}),s(l(_),{round:"",onClick:n[2]||(n[2]=c=>o("mailto:me@5dbwat4.top"))},{icon:i(()=>[s(l(x),null,{default:i(()=>[s(l(he))]),_:1})]),default:i(()=>[w(" Email me")]),_:1}),s(l(te)),s(l(_),{round:"",onClick:n[3]||(n[3]=c=>u())},{icon:i(()=>[s(l(x),null,{default:i(()=>[s(l(fe))]),_:1})]),default:i(()=>[w(" Steam @5dbwat4")]),_:1})]),_:1})])]))}},Ie=Q(Ee,[["__scopeId","data-v-7b59ac98"]]);export{Ie as default};