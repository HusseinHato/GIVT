import{_ as x,b as i,j as a,a as e,n as N}from"./app-1e50fc25.js";import{A as v}from"./AuthenticatedLayout-98726e4f.js";import{I as d}from"./InputError-86de2c2f.js";import{P as b}from"./PrimaryButton-14b933fc.js";import{I as t}from"./InputLabel-8b396008.js";import"./TextInput-88979409.js";import"./react-drag-drop-files.esm-4042037f.js";import{N as w}from"./react-number-format.es-48c6768b.js";import"./Editor-9ba3f569.js";import{C as y}from"./Checkbox-d8745328.js";import"./ApplicationLogo-39fb6c53.js";import"./Dropdown-cde00935.js";import"./transition-1dc21d7e.js";function L({auth:r,kampanye:c}){const{data:s,setData:n,post:u,processing:p,reset:h,errors:l,transform:j,progress:k}=x({jumlah:"",nama:r.user.name,doa:"",kampanye_id:c.id});console.log(s);const f=o=>{o.preventDefault(),u(route("donasi.store"),{onSuccess:()=>h()})},[m,g]=i.useState(!1);return console.log(m),i.useEffect(()=>{m?n("nama","Orang Baik"):n("nama",r.user.name)},[m]),a(v,{auth:r,children:[e(N,{title:"Donasi"}),e("div",{className:"max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-200",children:a("form",{onSubmit:f,children:[a("div",{children:[e(t,{forInput:"jumlah",value:"Jumlah Donasi"}),a("div",{className:"flex flex-wrap items-stretch w-full relative mt-1",children:[e("div",{className:"flex -mr-px",children:e("span",{className:"flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm",children:"Rp"})}),e("div",{className:"grow",children:e(w,{name:"jumlah",id:"jumlah",thousandSeparator:!0,valueIsNumericString:!0,value:s.jumlah,onValueChange:o=>{n("jumlah",o.value)},className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-l-none rounded-md shadow-sm w-full",autoComplete:"off",placeholder:"Jumlah Donasi ..."})})]}),e(d,{message:l.jumlah,className:"mt-1"})]}),a("div",{children:[e(t,{forInput:"nama",value:"Nama Donatur",className:"mt-4"}),e("p",{className:"mt-1 text-gray-700 text-2xl",children:r.user.name}),e("p",{className:"mt-1 text-gray-700 text-sm",children:r.user.email}),e("div",{className:"block mt-3",children:a("label",{className:"flex items-center",children:[e(y,{name:"anonim",value:s.anonim,handleChange:()=>{g(!m)}}),e("span",{className:"ml-2 text-lg text-gray-700",children:"Donasi Secara Anonim"})]})})]}),a("div",{children:[e(t,{forInput:"doa",value:"Doa (Opsional)",className:"mt-4"}),e("textarea",{value:s.doa,placeholder:"Masukkan Doa ...",className:"block w-full h-36 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 resize-none",onChange:o=>n("doa",o.target.value),id:"doa"}),e(d,{message:l.doa,className:"mt-1"})]}),e(b,{className:"mt-4",disabled:p,children:"Checkout"})]})})]})}export{L as default};