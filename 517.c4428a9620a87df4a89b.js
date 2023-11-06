"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[517],{8791:function(e,a,s){s.d(a,{I:function(){return o}});var t=s(7294),n=s(3007),r=s(5893);const o=(0,t.memo)((e=>{const{className:a,value:s,onChange:o,type:l="text",placeholder:c,autofocus:d,readonly:u,...i}=e,m=(0,t.useRef)(null),[h,p]=(0,t.useState)(!1),[x,f]=(0,t.useState)(0),g=h&&!u;(0,t.useEffect)((()=>{d&&(p(!0),m.current?.focus())}),[d]);const j={sFcbjx23:u};return(0,r.jsxs)("div",{className:(0,n.A)("p_6dRLUG",j,[a]),children:[c&&(0,r.jsx)("div",{className:"uWIRRz2O",children:`${c}>`}),(0,r.jsxs)("div",{className:"tDY7ayAp",children:[(0,r.jsx)("input",{ref:m,type:l,value:s,onChange:e=>{o?.(e.target.value),f(e.target.value.length)},className:"Z6IBiNl_",onFocus:()=>{p(!0)},onBlur:()=>{p(!1)},onSelect:e=>{f(e?.target?.selectionStart||0)},readOnly:u,...i}),g&&(0,r.jsx)("span",{className:"Y3U88xm_",style:{left:9*x+"px"}})]})]})}))},169:function(e,a,s){s.d(a,{I:function(){return d}});var t=s(7294),n=s(3007),r={InputWrapper:"ZyI7rxIe",s:"mKldd7L_",m:"IyQiG8hL",l:"j7JcqtN4",addonLeft:"OqwwYwm8",addonRight:"o_xLYaZC",withAddonLeft:"zVArqqw4",withAddonRight:"HxXya_r8",input:"L2BiQ3jT",focused:"jUzuVRdk",readonly:"xspqW3a0"},o=s(9244),l=s(8969),c=s(5893);const d=(0,t.memo)((e=>{const{className:a,value:s,onChange:d,type:u="text",placeholder:i,autofocus:m,readonly:h,addonLeft:p,addonRight:x,label:f,size:g="m",...j}=e,v=(0,t.useRef)(null),[y,N]=(0,t.useState)(!1);(0,t.useEffect)((()=>{m&&(N(!0),v.current?.focus())}),[m]);const w={[r.readonly]:h,[r.focused]:y,[r.withAddonLeft]:Boolean(p),[r.withAddonRight]:Boolean(x)},C=(0,c.jsxs)("div",{className:(0,n.A)(r.InputWrapper,w,[a,r[g]]),children:[(0,c.jsx)("div",{className:r.addonLeft,children:p}),(0,c.jsx)("input",{ref:v,type:u,value:s,onChange:e=>{d?.(e.target.value)},className:r.input,onFocus:()=>{N(!0)},onBlur:()=>{N(!1)},placeholder:i,readOnly:h,...j}),(0,c.jsx)("div",{className:r.addonRight,children:x})]});return f?(0,c.jsxs)(o.U,{max:!0,gap:"8",children:[(0,c.jsx)(l.x,{text:f}),C]}):C}))},2517:function(e,a,s){s.r(a),s.d(a,{default:function(){return F}});var t=s(2327),n=s(743),r=s(7294),o=s(3007),l=s(7702),c=s(8791),d=s(526),u=s(8969),i=s(1233),m=s(5401);const h=e=>e?.loginForm?.username||"",p=e=>e?.loginForm?.password||"",x=e=>e?.loginForm?.isLoading||!1,f=e=>e?.loginForm?.error;var g=s(4268),j=s(3733);const v=(0,g.hg)("login/loginByUsername",(async(e,a)=>{const{extra:s,dispatch:t,rejectWithValue:n}=a;try{const a=await s.api.post("/login",e);if(!a.data)throw new Error;return t(j.hI.setAuthData(a.data)),a.data}catch(e){return console.log(e),n("error")}})),y=(0,g.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:(e,a)=>{e.username=a.payload},setPassword:(e,a)=>{e.password=a.payload}},extraReducers:e=>{e.addCase(v.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(v.fulfilled,(e=>{e.isLoading=!1})).addCase(v.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{actions:N}=y,{reducer:w}=y;var C="xYNEfcE9",R="PQPa1eB5",I="Ok_5amJo",L=s(7499),A=s(8190),b=s(169),k=s(9244),E=s(877),O=s(5893);const U={loginForm:w};var F=(0,r.memo)((e=>{let{className:a,onSuccess:s}=e;const{t:g}=(0,t.$)(),j=(0,m.T)(),y=(0,n.v9)(h),w=(0,n.v9)(p),F=(0,n.v9)(x),S=(0,n.v9)(f),_=(0,E.N)(),B=(0,r.useCallback)((e=>{j(N.setUsername(e))}),[j]),z=(0,r.useCallback)((e=>{j(N.setPassword(e))}),[j]),W=(0,r.useCallback)((async()=>{"fulfilled"===(await j(v({username:y,password:w}))).meta.requestStatus&&(s(),_())}),[j,y,w,s,_]);return(0,O.jsx)(i.W,{removeAfterUnmount:!0,reducers:U,children:(0,O.jsx)(L.zJ,{features:"isAppRedesigned",on:(0,O.jsxs)(k.g,{gap:"16",className:(0,o.A)(C,{},[a]),children:[(0,O.jsx)(u.x,{title:g("Форма авторизации")}),S&&(0,O.jsx)(u.x,{text:g("Вы ввели неверный логин или пароль"),variant:"error"}),(0,O.jsx)(b.I,{autofocus:!0,type:"text",className:R,placeholder:g("Введите username"),onChange:B,value:y}),(0,O.jsx)(b.I,{type:"text",className:R,placeholder:g("Введите пароль"),onChange:z,value:w}),(0,O.jsx)(A.z,{className:I,onClick:W,disabled:F,children:g("Войти")})]}),off:(0,O.jsxs)("div",{className:(0,o.A)(C,{},[a]),children:[(0,O.jsx)(d.xv,{title:g("Форма авторизации")}),S&&(0,O.jsx)(d.xv,{text:g("Вы ввели неверный логин или пароль"),theme:d.lg.ERROR}),(0,O.jsx)(c.I,{autofocus:!0,type:"text",className:R,placeholder:g("Введите username"),onChange:B,value:y}),(0,O.jsx)(c.I,{type:"text",className:R,placeholder:g("Введите пароль"),onChange:z,value:w}),(0,O.jsx)(l.zx,{theme:l.bn.OUTLINE,className:I,onClick:W,disabled:F,children:g("Войти")})]})})})}))},1233:function(e,a,s){s.d(a,{W:function(){return o}});var t=s(7294),n=s(743),r=s(5893);const o=e=>{const{children:a,reducers:s,removeAfterUnmount:o=!0}=e,l=(0,n.oR)(),c=(0,n.I0)();return(0,t.useEffect)((()=>{const e=l.reducerManager.getMountedReducers();return Object.entries(s).forEach((a=>{let[s,t]=a;e[s]||(l.reducerManager.add(s,t),c({type:`@INIT ${s} reducer`}))})),()=>{o&&Object.entries(s).forEach((e=>{let[a,s]=e;l.reducerManager.remove(a),c({type:`@DESTROY ${a} reducer`})}))}}),[]),(0,r.jsx)(r.Fragment,{children:a})}}}]);