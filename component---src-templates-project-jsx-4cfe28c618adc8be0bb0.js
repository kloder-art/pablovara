(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{bGHK:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return E}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),l=n("L6Je"),o=n("hYuR");var c=i.a.div.withConfig({displayName:"Image__StyledImage",componentId:"sc-1p38nmz-0"})(["cursor:pointer;img{max-height:80vh;}@media (max-width:980px){&{align-self:center;justify-self:center;img{max-width:100%;}}}"]),m=i.a.div.withConfig({displayName:"Gif__StyledGif",componentId:"vesasj-0"})(["cursor:pointer;img{max-height:80vh;}@media (max-width:980px){&{align-self:center;justify-self:center;img{max-width:100%;}}}"]),d=i.a.div.withConfig({displayName:"Youtube__StyledYoutube",componentId:"sc-1bo2kxl-0"})(["position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:750px;iframe{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:980px){&{width:100%;}}"]),u={youtube:function(e){var t=e.id,n=e.text;return r.a.createElement(d,null,r.a.createElement("iframe",{allowFullScreen:!0,width:750,height:500,src:"https://www.youtube.com/embed/"+t+"?fs=1&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},image:function(e){var t=e.src,n=e.text,a=e.onClick;return r.a.createElement(c,{onClick:a},r.a.createElement("img",{src:t&&t.childImageSharp?t.childImageSharp.original.src:null}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},gif:function(e){var t=e.src,n=e.text;return r.a.createElement(m,null,r.a.createElement("img",{src:t&&t.publicURL?t.publicURL:null}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}},h=function(e){var t=e.type,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["type"]),a=u[t];return r.a.createElement(a,n)},p=n("YwZP"),s=n("Tgqd"),g=n("v7au"),f=n("ma3e"),w=i.a.div.withConfig({displayName:"Social__StyledSocial",componentId:"sc-12brss7-0"})(["display:grid;grid-auto-flow:column;grid-auto-columns:1rem;"]),y=[{Icon:s.a,title:"Facebook",link:function(e,t){return"https://www.facebook.com/sharer.php?u="+e}},{Icon:s.e,title:"Twitter",link:function(e,t){return"https://twitter.com/share?url="+e+"&text="+t}},{Icon:s.c,title:"LinkedIn",link:function(e,t){return"https://www.linkedin.com/shareArticle?url="+e+"&title="+t}},{Icon:g.a,title:"WhatsApp",link:function(e,t){return"https://api.whatsapp.com/send?text="+t+" "+e}},{Icon:f.a,title:"Telegram",link:function(e,t){return"https://t.me/share/url?url="+e+"&text="+t}}],v=function(){var e=Object(p.useLocation)();return r.a.createElement(w,null,y.map((function(t,n){var a=t.Icon,i=t.title,l=t.link;return r.a.createElement("a",{key:n,href:encodeURI(l(e.href,i)),title:"Compartir en "+i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(a,null))})))},k=i.a.div.withConfig({displayName:"Text__StyledText",componentId:"sc-18fe39o-0"})(["white-space:normal;width:33vw;height:89vh;.content{padding-right:1rem;overflow:hidden;overflow-y:auto;height:100%;}@media (max-width:980px){&{width:auto;height:auto;.content{padding-right:0;}}}"]),x=function(e){var t=e.title,n=e.html;return r.a.createElement(k,null,r.a.createElement("h2",null,t),r.a.createElement(v,null),r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:n}}))},_=i.a.article.withConfig({displayName:"Project__StyledProjectPage",componentId:"rjk2uf-0"})(["display:inline-block;padding-right:1rem;@media (max-width:980px){&{padding-right:0;}}"]),I=i.a.div.withConfig({displayName:"Project__StyledLayout",componentId:"rjk2uf-1"})(["display:grid;grid-template-rows:1fr;grid-gap:2rem;grid-auto-flow:column;@media (max-width:980px){&{grid-auto-flow:row;}}"]),E=(t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,i=t.html,c=Object(a.useRef)(),m=function(e){var t=e.currentTarget.getBoundingClientRect()-250;c.current.scrollLeft=c.current.scrollLeft-t,console.log(c.current.scrollLeft,e.currentTarget.getBoundingClientRect())};return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:n.title}),r.a.createElement(_,{ref:c},r.a.createElement(I,null,r.a.createElement(x,{title:n.title,html:i}),n.artwork&&n.artwork.map((function(e,t){return r.a.createElement(h,Object.assign({},e,{key:t,onClick:m}))})))))},"2940253802")}}]);
//# sourceMappingURL=component---src-templates-project-jsx-4cfe28c618adc8be0bb0.js.map