import{b as c,a,_ as P,j as r,n as R}from"./app-1e50fc25.js";import{A as E}from"./AuthenticatedLayout-98726e4f.js";import{I as s}from"./InputError-86de2c2f.js";import{P as U}from"./PrimaryButton-14b933fc.js";import{I as o}from"./InputLabel-8b396008.js";import{T as A}from"./TextInput-88979409.js";import{H as F,S as L}from"./react-select.esm-0deeb9cb.js";import{E as B}from"./react-drag-drop-files.esm-4042037f.js";import{N as G}from"./react-number-format.es-48c6768b.js";import{E as H}from"./Editor-9ba3f569.js";import"./ApplicationLogo-39fb6c53.js";import"./Dropdown-cde00935.js";import"./transition-1dc21d7e.js";import"./index-fea706aa.js";function re({auth:v}){const y=c.forwardRef(({value:e,onClick:i},h)=>a("button",{type:"button",className:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-150",onClick:i,ref:h,children:e})),[w]=c.useState(new Date),{data:t,setData:l,post:N,processing:_,reset:g,errors:n,transform:x,progress:J}=P({deskripsi:"<p>Masukan Deskripsi Kampanye.</p>",judul:"",target:"",tgl_berakhir:w,tgl_mulai:new Date,gambar:"",kategori:""});console.log(t);const p=c.useRef(null);x(e=>({...e,tgl_berakhir:e.tgl_berakhir.toISOString().slice(0,19).replace("T"," "),tgl_mulai:e.tgl_mulai.toISOString().slice(0,19).replace("T"," ")}));const I=e=>{e.preventDefault(),N(route("kampanye.store"),{onSuccess:()=>g()})},S=e=>{l(e.target.name,e.target.type==="checkbox"?e.target.checked:e.target.value)},j=(e,i,h)=>{const m=document.createElement("input");m.setAttribute("type","file"),m.setAttribute("accept","image/*"),m.onchange=()=>{const d=m.files[0],u=new FileReader;u.readAsDataURL(d),u.onload=()=>{const K="blobid"+new Date().getTime(),f=p.current.editorUpload.blobCache,T=u.result.split(",")[1],k=f.create(K,d,T);f.add(k),e(k.blobUri(),{title:d.name})}},m.click()},[C,b]=c.useState();c.useEffect(()=>{if(!t.gambar){b(void 0);return}const e=URL.createObjectURL(t.gambar);return b(e),()=>URL.revokeObjectURL(e)},[t.gambar]);const D=[{value:"Pendidikan",label:"Pendidikan"},{value:"Kemanusiaan",label:"Kemanusiaan"}];return r(E,{auth:v,children:[a(R,{title:"Kampanye"}),a("div",{className:"max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-200",children:r("form",{onSubmit:I,children:[r("div",{children:[a(o,{forInput:"judul",value:"Judul Kampanye"}),a(A,{placeholder:"Judul Kampanye ...",id:"judul",name:"judul",value:t.judul,className:"mt-1 block w-full",autoComplete:"off",isFocused:!0,handleChange:S}),a(s,{message:n.judul,className:"mt-1"})]}),r("div",{children:[a(o,{forInput:"deskkampanye",value:"Deskripsi Singkat Kampanye",className:"mt-4"}),a(H,{id:"deskkampanye",tinymceScriptSrc:"../tinymce/tinymce.min.js",onInit:(e,i)=>p.current=i,value:t.deskripsi,onEditorChange:(e,i)=>l("deskripsi",e),image_uploadtab:!0,init:{setup:e=>{e.on("init change",()=>{e.save()})},content_css:"default",height:800,menubar:!1,plugins:["advlist","autolink","lists","link","image","charmap","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","preview","help","wordcount","preview","visualblocks"],toolbar:"undo redo | blocks | bold italic forecolor | alignleft aligncenter  alignjustify | bullist numlist outdent indent | image | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:j,image_dimensions:!1,image_class_list:[{title:"Responsive",value:"img-responsive"}]}}),a(s,{message:n.deskripsi,className:"mt-1"})]}),r("div",{children:[a(o,{forInput:"target",value:"Target Dana",className:"mt-4"}),r("div",{className:"flex flex-wrap items-stretch w-full relative mt-1",children:[a("div",{className:"flex -mr-px",children:a("span",{className:"flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm",children:"Rp"})}),a(G,{name:"target",id:"target",thousandSeparator:!0,valueIsNumericString:!0,value:t.target,onValueChange:e=>{l("target",e.value)},className:"focus:border-indigo-500 focus:ring-indigo-500 rounded-l-none rounded-md shadow-sm",autoComplete:"off",placeholder:"Target Dana ..."})]}),a(s,{message:n.target,className:"mt-1"})]}),r("div",{children:[a(o,{forInput:"tgl_berakhir",value:"Tanggal Akhir Kampanye",className:"mt-4"}),a(F,{id:"tgl_berakhir",selected:t.tgl_berakhir,minDate:new Date,className:"rounded max-w-sm w-full mt-1 ",autoComplete:"off",placeholderText:"Pilih Tanggal",startDate:t.tgl_berakhir,customInput:a(y,{}),onChange:e=>l("tgl_berakhir",e),popperModifiers:[{name:"arrow",options:{padding:({popper:e,reference:i})=>({right:Math.min(e.width,i.width)-24})}}]}),a(s,{message:n.tgl_mulai,className:"mt-1"})]}),r("div",{children:[a(o,{forInput:"kategori",value:"Kategori Kampanye",className:"mt-4"}),a(L,{options:D,isSearchable:!1,onChange:e=>l("kategori",e.value),placeholder:"Pilih Kategori ..."}),a(s,{message:n.kategori,className:"mt-1"})]}),r("div",{children:[a(o,{forInput:"gambar",value:"Gambar Berita",className:"mt-4"}),a(B,{handleChange:e=>{l("gambar",e)},name:"file",types:["JPG","PNG","JPEG"],hoverTitle:" ",children:a("div",{className:"bg-white grid place-content-center h-48 rounded-lg",children:a("div",{children:a("p",{children:t.gambar?`File ${t.gambar.name}`:"Unggah / Tarik File Kesini"})})})}),t.gambar?a("button",{type:"button",className:"border border-white bg-slate-400",onClick:()=>{g("gambar")},children:"Clear"}):null,a(s,{message:n.gambar,className:"mt-1"}),t.gambar&&a("img",{src:C,className:"w-full h-56 md:h-96 rounded-md object-fill"})]}),a(U,{className:"mt-4",disabled:_,children:"Buat Kampanye"})]})})]})}export{re as default};