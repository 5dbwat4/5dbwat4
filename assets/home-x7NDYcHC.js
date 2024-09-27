/* empty css                                                               */import{l as $,m as d,d as z,n as b,p as N,q as p,s as V,t as R,v as u,x as A,y as I,_ as P,b as j,r as H,o as M,c as O,h as i,w as l,i as c,g as o,N as h,f as m,z as D,A as K}from"./index-CTWkUgdy.js";import{N as L}from"./headers-DlwR7Za7.js";const E=$("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("strong",`
 font-weight: var(--n-font-weight-strong);
 `),d("italic",{fontStyle:"italic"}),d("underline",{textDecoration:"underline"}),d("code",`
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
 `)]),W=Object.assign(Object.assign({},b.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),q=z({name:"Text",props:W,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:n}=N(e),s=b("Typography","-text",E,A,e,a),r=p(()=>{const{depth:g,type:f}=e,x=f==="default"?g===void 0?"textColor":`textColor${g}Depth`:I("textColor",f),{common:{fontWeightStrong:_,fontFamilyMono:y,cubicBezierEaseInOut:C},self:{codeTextColor:w,codeBorderRadius:B,codeColor:k,codeBorder:S,[x]:T}}=s.value;return{"--n-bezier":C,"--n-text-color":T,"--n-font-weight-strong":_,"--n-font-famliy-mono":y,"--n-code-border-radius":B,"--n-code-text-color":w,"--n-code-color":k,"--n-code-border":S}}),t=n?V("text",p(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:a,compitableTag:R(e,["as","tag"]),cssVars:n?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,a,n;const{mergedClsPrefix:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${s}-text`,this.themeClass,{[`${s}-text--code`]:this.code,[`${s}-text--delete`]:this.delete,[`${s}-text--strong`]:this.strong,[`${s}-text--italic`]:this.italic,[`${s}-text--underline`]:this.underline}],t=(n=(a=this.$slots).default)===null||n===void 0?void 0:n.call(a);return this.code?u("code",{class:r,style:this.cssVars},this.delete?u("del",null,t):t):this.delete?u("del",{class:r,style:this.cssVars},t):u(this.compitableTag||"span",{class:r,style:this.cssVars},t)}}),v=e=>(D("data-v-dccc782a"),e=e(),K(),e),F={id:"main_content"},G=v(()=>m("a",{href:"http://ckc.zju.edu.cn/ckcen/main.htm",target:"_blank",class:"magic-underline"},"Chu Kochen Honors College, Zhejiang University",-1)),J=v(()=>m("a",{href:"https://blog.5dbwat4.top/",target:"_blank",class:"magic-underline"},"BLOG",-1)),U={__name:"home",setup(e){return j(()=>{window.updateCursorAnim(),window.tabsHandler.showTabs()}),H({header:!0,ContentMain:!1}),(a,n)=>(M(),O("div",F,[i(c(L),{prefix:"bar"},{default:l(()=>[o("About me")]),_:1}),i(c(h),{class:"content_overwrite"},{default:l(()=>[o("I'm "),i(c(q),{code:""},{default:l(()=>[o("5dbwat4")]),_:1}),o(",")]),_:1}),i(c(h),{class:"content_overwrite"},{default:l(()=>[o("An undergraduare majoring Computer Science and Technology in "),G,o(".")]),_:1}),i(c(h),{class:"content_overwrite"},{default:l(()=>[o("Skilled in Javascript, especially front-end. Also good at Python and C++.")]),_:1}),i(c(h),{class:"content_overwrite"},{default:l(()=>[o("Why not take a glance at my "),J,o(", or look through some "),m("a",{onClick:n[0]||(n[0]=s=>a.$router.push("/labs")),class:"magic-underline"},"LABS"),o(". ")]),_:1})]))}},Y=P(U,[["__scopeId","data-v-dccc782a"]]);export{Y as default};
