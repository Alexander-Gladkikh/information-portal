"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[77],{8791:function(e,t,n){n.d(t,{I:function(){return d}});var a=n(7294),s=n(3007),o=n(5893);const d=(0,a.memo)((e=>{const{className:t,value:n,onChange:d,type:r="text",placeholder:l,autofocus:c,readonly:u,...i}=e,m=(0,a.useRef)(null),[x,p]=(0,a.useState)(!1),[h,f]=(0,a.useState)(0),j=x&&!u;(0,a.useEffect)((()=>{c&&(p(!0),m.current?.focus())}),[c]);const g={sFcbjx23:u};return(0,o.jsxs)("div",{className:(0,s.A)("p_6dRLUG",g,[t]),children:[l&&(0,o.jsx)("div",{className:"uWIRRz2O",children:`${l}>`}),(0,o.jsxs)("div",{className:"tDY7ayAp",children:[(0,o.jsx)("input",{ref:m,type:r,value:n,onChange:e=>{d?.(e.target.value),f(e.target.value.length)},className:"Z6IBiNl_",onFocus:()=>{p(!0)},onBlur:()=>{p(!1)},onSelect:e=>{f(e?.target?.selectionStart||0)},readOnly:u,...i}),j&&(0,o.jsx)("span",{className:"Y3U88xm_",style:{left:9*h+"px"}})]})]})}))},169:function(e,t,n){n.d(t,{I:function(){return c}});var a=n(7294),s=n(3007),o={InputWrapper:"ZyI7rxIe",s:"mKldd7L_",m:"IyQiG8hL",l:"j7JcqtN4",addonLeft:"OqwwYwm8",addonRight:"o_xLYaZC",withAddonLeft:"zVArqqw4",withAddonRight:"HxXya_r8",input:"L2BiQ3jT",focused:"jUzuVRdk",readonly:"xspqW3a0"},d=n(9244),r=n(8969),l=n(5893);const c=(0,a.memo)((e=>{const{className:t,value:n,onChange:c,type:u="text",placeholder:i,autofocus:m,readonly:x,addonLeft:p,addonRight:h,label:f,size:j="m",...g}=e,v=(0,a.useRef)(null),[C,N]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m&&(N(!0),v.current?.focus())}),[m]);const y={[o.readonly]:x,[o.focused]:C,[o.withAddonLeft]:Boolean(p),[o.withAddonRight]:Boolean(h)},A=(0,l.jsxs)("div",{className:(0,s.A)(o.InputWrapper,y,[t,o[j]]),children:[(0,l.jsx)("div",{className:o.addonLeft,children:p}),(0,l.jsx)("input",{ref:v,type:u,value:n,onChange:e=>{c?.(e.target.value)},className:o.input,onFocus:()=>{N(!0)},onBlur:()=>{N(!1)},placeholder:i,readOnly:x,...g}),(0,l.jsx)("div",{className:o.addonRight,children:h})]});return f?(0,l.jsxs)(d.U,{max:!0,gap:"8",children:[(0,l.jsx)(r.x,{text:f}),A]}):A}))},8077:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(2327),s=n(7294),o=n(743),d=n(3007),r=n(8791),l=n(7702),c=n(5401),u=n(1233),i=n(9244);const m=(0,n(4268).oM)({name:"addCommentForm",initialState:{text:""},reducers:{setText:(e,t)=>{e.text=t.payload}}}),{actions:x}=m,{reducer:p}=m,h=e=>e.addCommentForm?.text??"",f=e=>e.addCommentForm?.error;var j={AddCommentForm:"ZrfoeB3H",input:"gxRAkJ0f"},g=n(7499),v=n(169),C=n(8190),N=n(7231),y=n(5893);const A={addCommentForm:p};var R=(0,s.memo)((e=>{const{className:t,onSendComment:n}=e,{t:m}=(0,a.$)(),p=(0,o.v9)(h),R=((0,o.v9)(f),(0,c.T)()),w=(0,s.useCallback)((e=>{R(x.setText(e))}),[R]),I=(0,s.useCallback)((()=>{n(p||""),w("")}),[w,n,p]);return(0,y.jsx)(u.W,{reducers:A,children:(0,y.jsx)(g.zJ,{features:"isAppRedesigned",on:(0,y.jsx)(N.Z,{padding:"24",border:"round",max:!0,children:(0,y.jsxs)(i.U,{justify:"between",max:!0,gap:"16",className:(0,d.A)(j.AddCommentFormRedesigned,{},[t]),children:[(0,y.jsx)(v.I,{className:j.input,placeholder:m("Введите текст комментария"),value:p,onChange:w}),(0,y.jsx)(C.z,{onClick:I,children:m("Отправить")})]})}),off:(0,y.jsxs)(i.U,{justify:"between",max:!0,className:(0,d.A)(j.AddCommentForm,{},[t]),children:[(0,y.jsx)(r.I,{className:j.input,placeholder:m("Введите текст комментария"),value:p,onChange:w}),(0,y.jsx)(l.zx,{theme:l.bn.OUTLINE,onClick:I,children:m("Отправить")})]})})})}))}}]);