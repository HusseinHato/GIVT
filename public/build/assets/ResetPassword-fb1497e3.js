import{_ as f,b as h,j as a,a as s,n as v}from"./app-1e50fc25.js";import{G as g}from"./GuestLayout-8c756959.js";import{I as m}from"./InputError-86de2c2f.js";import{I as n}from"./InputLabel-8b396008.js";import{P as N}from"./PrimaryButton-14b933fc.js";import{T as l}from"./TextInput-88979409.js";import"./ApplicationLogo-39fb6c53.js";function E({token:i,email:d}){const{data:r,setData:p,post:c,processing:u,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:u,children:"Reset Password"})})]})]})}export{E as default};
