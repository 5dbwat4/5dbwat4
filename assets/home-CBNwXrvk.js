/* empty css                                                               */import{l as S,m as c,d as z,n as p,p as N,q as b,s as V,t as R,v as u,x as I,y as P,_ as j,b as A,r as H,o as M,c as D,h as i,w as l,i as d,g as o,N as h,f as m,z as K,A as O}from"./index-BAbmbn7A.js";import{N as E}from"./headers-L5UBgUTS.js";const L=S("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[c("strong",`
 font-weight: var(--n-font-weight-strong);
 `),c("italic",{fontStyle:"italic"}),c("underline",{textDecoration:"underline"}),c("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),W=Object.assign(Object.assign({},p.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),q=z({name:"Text",props:W,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:n}=N(e),s=p("Typography","-text",L,I,e,a),r=b(()=>{const{depth:f,type:g}=e,x=g==="default"?f===void 0?"textColor":`textColor${f}Depth`:P("textColor",g),{common:{fontWeightStrong:_,fontFamilyMono:y,cubicBezierEaseInOut:C},self:{codeTextColor:w,codeBorderRadius:k,codeColor:B,codeBorder:T,[x]:$}}=s.value;return{"--n-bezier":C,"--n-text-color":$,"--n-font-weight-strong":_,"--n-font-famliy-mono":y,"--n-code-border-radius":k,"--n-code-text-color":w,"--n-code-color":B,"--n-code-border":T}}),t=n?V("text",b(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:a,compitableTag:R(e,["as","tag"]),cssVars:n?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,a,n;const{mergedClsPrefix:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${s}-text`,this.themeClass,{[`${s}-text--code`]:this.code,[`${s}-text--delete`]:this.delete,[`${s}-text--strong`]:this.strong,[`${s}-text--italic`]:this.italic,[`${s}-text--underline`]:this.underline}],t=(n=(a=this.$slots).default)===null||n===void 0?void 0:n.call(a);return this.code?u("code",{class:r,style:this.cssVars},this.delete?u("del",null,t):t):this.delete?u("del",{class:r,style:this.cssVars},t):u(this.compitableTag||"span",{class:r,style:this.cssVars},t)}}),v=e=>(K("data-v-4b2f2f9a"),e=e(),O(),e),F={id:"main_content"},J=v(()=>m("a",{href:"http://ckc.zju.edu.cn/ckcen/main.htm",target:"_blank",class:"magic-underline"},"Chu Kochen Honors College, Zhejiang University",-1)),U=v(()=>m("a",{href:"https://blog.5dbwat4.top/",target:"_blank",class:"magic-underline"},"Blog",-1)),Z={__name:"home",setup(e){return A(()=>{window.updateCursorAnim(),window.tabsHandler.showTabs()}),H({header:!0,ContentMain:!1}),(a,n)=>(M(),D("div",F,[i(d(E),{prefix:"bar"},{default:l(()=>[o("About me")]),_:1}),i(d(h),{class:"content_overwrite"},{default:l(()=>[o("I'm "),i(d(q),{code:""},{default:l(()=>[o("5dbwat4")]),_:1}),o(",")]),_:1}),i(d(h),{class:"content_overwrite"},{default:l(()=>[o("An undergraduare majoring Computer Science and Technology in "),J,o(".")]),_:1}),i(d(h),{class:"content_overwrite"},{default:l(()=>[o("Skilled in Javascript, especially front-end. Also good at Python and C++.")]),_:1}),i(d(h),{class:"content_overwrite"},{default:l(()=>[o("Why not take a glance at my "),U,o(", or look through some "),m("a",{onClick:n[0]||(n[0]=s=>a.$router.push("/labs")),class:"magic-underline"},"Labs"),o(". ")]),_:1})]))}},Y=j(Z,[["__scopeId","data-v-4b2f2f9a"]]);export{Y as default};
