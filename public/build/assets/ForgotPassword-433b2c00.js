import{_ as d,j as s,a as e,n as u}from"./app-1e50fc25.js";import{G as c}from"./GuestLayout-8c756959.js";import{I as p}from"./InputError-86de2c2f.js";import{P as w}from"./PrimaryButton-14b933fc.js";import{T as f}from"./TextInput-88979409.js";import"./ApplicationLogo-39fb6c53.js";function v({status:t}){const{data:r,setData:o,post:m,processing:l,errors:i}=d({email:""}),n=a=>{o(a.target.name,a.target.value)};return s(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(f,{id:"password",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(p,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{v as default};
