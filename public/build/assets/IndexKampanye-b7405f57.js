import{j as e,a as r,n as o,F as p}from"./app-1e50fc25.js";import{A as n}from"./AuthenticatedLayout-98726e4f.js";import"./Editor-9ba3f569.js";import{C as s}from"./CardLink-16af74d6.js";import{K as l}from"./KampanyePreview-792b1546.js";import"./ApplicationLogo-39fb6c53.js";import"./Dropdown-cde00935.js";import"./transition-1dc21d7e.js";import"./PrimaryButton-14b933fc.js";import"./index-d3a0d218.js";import"./index-fea706aa.js";function v({auth:a,kampanyes:t,posts:c}){return console.log(t),e(n,{auth:a,children:[r(o,{title:"Kampanye"}),e("div",{className:"max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center",children:[!t.length==0?t.map((i,m)=>r(l,{kampanye:i},m)):e(p,{children:[r("p",{className:"text-lg text-gray-800",children:"Belum Ada kampanye ..."}),!route().current("kampanye.diikuti")&&r(s,{href:route("kampanye.create"),children:"Buat Kampanye"})]}),r("div",{})]})]})}export{v as default};