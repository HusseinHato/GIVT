import{r as i,_ as g,j as a,a as s}from"./app-1e35f730.js";import{T as d,I as c}from"./TextInput-d8ca77b5.js";import{I as p}from"./InputLabel-39ed44eb.js";import{P as v}from"./PrimaryButton-80d025d6.js";import{Y as y}from"./transition-b60f4b35.js";function k({className:m}){const l=i.useRef(),u=i.useRef(),{data:t,setData:o,errors:e,put:w,reset:n,processing:f,recentlySuccessful:h}=g({current_password:"",password:"",password_confirmation:""});return a("section",{className:m,children:[a("header",{children:[s("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Update Password"}),s("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Ensure your account is using a long, random password to stay secure."})]}),a("form",{onSubmit:r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>{e.password&&(n("password","password_confirmation"),l.current.focus()),e.current_password&&(n("current_password"),u.current.focus())}})},className:"mt-6 space-y-6",children:[a("div",{children:[s(p,{for:"current_password",value:"Current Password"}),s(d,{id:"current_password",ref:u,value:t.current_password,handleChange:r=>o("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:e.current_password,className:"mt-2"})]}),a("div",{children:[s(p,{for:"password",value:"New Password"}),s(d,{id:"password",ref:l,value:t.password,handleChange:r=>o("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:e.password,className:"mt-2"})]}),a("div",{children:[s(p,{for:"password_confirmation",value:"Confirm Password"}),s(d,{id:"password_confirmation",value:t.password_confirmation,handleChange:r=>o("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:e.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[s(v,{processing:f,children:"Save"}),s(y,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:s("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{k as default};
