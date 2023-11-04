"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[679],{8791:function(e,t,s){s.d(t,{I:function(){return l}});var a=s(7294),n=s(3007),r=s(5893);const l=(0,a.memo)((e=>{const{className:t,value:s,onChange:l,type:i="text",placeholder:c,autofocus:o,readonly:d,...u}=e,h=(0,a.useRef)(null),[x,p]=(0,a.useState)(!1),[f,j]=(0,a.useState)(0),m=x&&!d;(0,a.useEffect)((()=>{o&&(p(!0),h.current?.focus())}),[o]);const g={sFcbjx23:d};return(0,r.jsxs)("div",{className:(0,n.A)("p_6dRLUG",g,[t]),children:[c&&(0,r.jsx)("div",{className:"uWIRRz2O",children:`${c}>`}),(0,r.jsxs)("div",{className:"tDY7ayAp",children:[(0,r.jsx)("input",{ref:h,type:i,value:s,onChange:e=>{l?.(e.target.value),j(e.target.value.length)},className:"Z6IBiNl_",onFocus:()=>{p(!0)},onBlur:()=>{p(!1)},onSelect:e=>{j(e?.target?.selectionStart||0)},readOnly:d,...u}),m&&(0,r.jsx)("span",{className:"Y3U88xm_",style:{left:9*f+"px"}})]})]})}))},169:function(e,t,s){s.d(t,{I:function(){return o}});var a=s(7294),n=s(3007),r={InputWrapper:"ZyI7rxIe",s:"mKldd7L_",m:"IyQiG8hL",l:"j7JcqtN4",addonLeft:"OqwwYwm8",addonRight:"o_xLYaZC",withAddonLeft:"zVArqqw4",withAddonRight:"HxXya_r8",input:"L2BiQ3jT",focused:"jUzuVRdk",readonly:"xspqW3a0"},l=s(9244),i=s(8969),c=s(5893);const o=(0,a.memo)((e=>{const{className:t,value:s,onChange:o,type:d="text",placeholder:u,autofocus:h,readonly:x,addonLeft:p,addonRight:f,label:j,size:m="m",...g}=e,C=(0,a.useRef)(null),[v,k]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h&&(k(!0),C.current?.focus())}),[h]);const y={[r.readonly]:x,[r.focused]:v,[r.withAddonLeft]:Boolean(p),[r.withAddonRight]:Boolean(f)},L=(0,c.jsxs)("div",{className:(0,n.A)(r.InputWrapper,y,[t,r[m]]),children:[(0,c.jsx)("div",{className:r.addonLeft,children:p}),(0,c.jsx)("input",{ref:C,type:d,value:s,onChange:e=>{o?.(e.target.value)},className:r.input,onFocus:()=>{k(!0)},onBlur:()=>{k(!1)},placeholder:u,readOnly:x,...g}),(0,c.jsx)("div",{className:r.addonRight,children:f})]});return j?(0,c.jsxs)(l.U,{max:!0,gap:"8",children:[(0,c.jsx)(i.x,{text:j}),L]}):L}))},4679:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a,n=s(2327),r=s(7294),l=s(743),i=s(5518),c=s(7647),o=s(9244),d=s(526),u=s(8969),h=s(3007),x=s(5635);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},p.apply(this,arguments)}var f=e=>r.createElement("svg",p({width:"1em",height:"1em",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=r.createElement("path",{d:"M11.0746 1.633C11.3946 0.789 12.6056 0.789 12.9266 1.633L14.9966 7.367C15.0688 7.55379 15.1959 7.71428 15.3613 7.8273C15.5266 7.94031 15.7223 8.00053 15.9226 8H21.0096C21.9496 8 22.3596 9.17 21.6206 9.743L18.0006 13C17.8384 13.1247 17.7199 13.2975 17.6621 13.4937C17.6042 13.6898 17.61 13.8993 17.6786 14.092L19.0006 19.695C19.3226 20.595 18.2806 21.368 17.4926 20.814L12.5756 17.694C12.4072 17.5757 12.2064 17.5122 12.0006 17.5122C11.7948 17.5122 11.594 17.5757 11.4256 17.694L6.50856 20.814C5.72156 21.368 4.67856 20.594 5.00056 19.695L6.32257 14.092C6.39114 13.8993 6.39692 13.6898 6.33907 13.4937C6.28122 13.2975 6.16272 13.1247 6.00057 13L2.38056 9.743C1.64056 9.17 2.05256 8 2.99056 8H8.07756C8.27786 8.00067 8.47363 7.9405 8.63898 7.82747C8.80433 7.71444 8.93147 7.55387 9.00357 7.367L11.0736 1.633H11.0746Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),j=s(7499),m=s(7650),g=s(5893);const C=[1,2,3,4,5],v=(0,r.memo)((e=>{const{className:t,size:s=30,selectedStars:a=0,onSelect:n}=e,[l,i]=(0,r.useState)(a),[c,o]=(0,r.useState)(Boolean(a)),d=()=>{c||i(0)},u=e=>()=>{c||(n?.(e),i(e),o(!0))};return(0,g.jsx)("div",{className:(0,h.A)((0,j.tn)({name:"isAppRedesigned",off:()=>"kxtOyXZf",on:()=>"DJmR4hmO"}),{},[t]),children:C.map((e=>{const t={className:(0,h.A)("_at8s_rB",{LIFf2ipz:c},[l>=e?"tJW47b5h":"KwJSFqOR"]),Svg:f,key:e,width:s,height:s,onMouseLeave:d,onMouseEnter:(a=e,()=>{c||i(a)}),onClick:u(e),"data-testid":`StarRating.${e}`,"data-selected":l>=e};var a;return(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsx)(m.J,{clickable:!c,...t}),off:(0,g.jsx)(x.J,{...t})})}))})}));var k=s(5301),y=s(8791),L=s(7702),R=s(5806),b=s(169),z=s(8190),A=s(7231);const I=(0,r.memo)((e=>{const{className:t,onAccept:s,feedbackTitle:a,hasFeedback:l,onCancel:h,title:x,rate:p=0}=e,{t:f}=(0,n.$)(),[m,C]=(0,r.useState)(!1),[I,N]=(0,r.useState)(p),[w,S]=(0,r.useState)(""),O=(0,r.useCallback)((e=>{N(e),l?C(!0):s?.(e)}),[l,s]),J=(0,r.useCallback)((()=>{C(!1),s?.(I,w)}),[w,s,I]),_=(0,r.useCallback)((()=>{C(!1),h?.(I)}),[h,I]),q=(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.x,{title:a}),(0,g.jsx)(b.I,{value:w,onChange:S,placeholder:f("Ваш отзыв")})]}),off:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.xv,{title:a}),(0,g.jsx)(y.I,{value:w,onChange:S,placeholder:f("Ваш отзыв")})]})}),F=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(o.g,{align:"center",gap:"8",max:!0,children:[(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsx)(u.x,{title:I?f("Спасибо за оценку!"):x}),off:(0,g.jsx)(d.xv,{title:I?f("Спасибо за оценку!"):x})}),(0,g.jsx)(v,{selectedStars:I,size:40,onSelect:O})]}),(0,g.jsx)(i.I3,{children:(0,g.jsx)(k.u,{isOpen:m,lazy:!0,children:(0,g.jsxs)(o.g,{max:!0,gap:"32",children:[q,(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsxs)(o.U,{max:!0,gap:"16",justify:"end",children:[(0,g.jsx)(z.z,{onClick:_,children:f("Закрыть")}),(0,g.jsx)(z.z,{onClick:J,children:f("Отправить")})]}),off:(0,g.jsxs)(o.U,{max:!0,gap:"16",justify:"end",children:[(0,g.jsx)(L.zx,{onClick:_,theme:L.bn.OUTLINE_RED,children:f("Закрыть")}),(0,g.jsx)(L.zx,{onClick:J,children:f("Отправить")})]})})]})})}),(0,g.jsx)(i.$,{children:(0,g.jsx)(R.d,{isOpen:m,lazy:!0,onClose:_,children:(0,g.jsxs)(o.g,{gap:"32",children:[q,(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsx)(z.z,{fullWidth:!0,onClick:J,size:"l",children:f("Отправить")}),off:(0,g.jsx)(L.zx,{fullWidth:!0,onClick:J,size:L.qE.L,children:f("Отправить")})})]})})})]});return(0,g.jsx)(j.zJ,{features:"isAppRedesigned",on:(0,g.jsx)(A.Z,{max:!0,border:"round",padding:"24",children:F}),off:(0,g.jsx)(c.Z,{className:t,max:!0,children:F})})})),N=s(6628).p.injectEndpoints({endpoints:e=>({getArticleRating:e.query({query:e=>{let{articleId:t,userId:s}=e;return{url:"/article-ratings",params:{userId:s,articleId:t}}}}),rateArticle:e.mutation({query:e=>({url:"/article-ratings",method:"POST",body:e})})})}),w=N.useGetArticleRatingQuery,S=N.useRateArticleMutation;var O=s(3733),J=s(8281),_=(0,r.memo)((e=>{const{className:t,articleId:s}=e,{t:a}=(0,n.$)(),i=(0,l.v9)(O.m5),{data:c,isLoading:o}=w({articleId:s,userId:i?.id??""}),[d]=S(),u=(0,r.useCallback)(((e,t)=>{try{d({userId:i?.id??"",articleId:s,rate:e,feedback:t})}catch(e){console.log(e)}}),[s,d,i?.id]),h=(0,r.useCallback)(((e,t)=>{u(e,t)}),[u]),x=(0,r.useCallback)((e=>{u(e)}),[u]);if(o)return(0,g.jsx)(J.O,{width:"100%",height:120});const p=c?.[0];return(0,g.jsx)(I,{onCancel:x,onAccept:h,rate:p?.rate,className:t,title:a("Оцените статью"),feedbackTitle:a("Оставьте свой отзыв о статье, это поможет улучшить качество"),hasFeedback:!0})}))}}]);