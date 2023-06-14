import { a as jsx, j as jsxs } from "../ssr.mjs";
import { Link, Head } from "@inertiajs/react";
import "react";
import differenceInDays from "date-fns/differenceInDays";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
function Kampanye({ kampanye }) {
  const numberFormat = (value) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
  const days = differenceInDays(
    new Date(kampanye.tgl_berakhir),
    new Date()
  );
  return (
    // <div className="flex flex-col justify-center">
    //     <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-md shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    //         <div className="w-full md:w-1/3 bg-white grid place-items-center">
    //             <img src={"/storage/"+kampanye.gambar} alt="gambar" className="rounded-md"/>
    //         </div>
    //         <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
    //             <h3 className="font-black text-gray-800 md:text-3xl text-xl">{kampanye.judul}</h3>
    //             <p className="text-xl font-black text-gray-800">
    //             Kategori : {kampanye.kategori}
    //             </p>
    //             <p className="md:text-lg text-gray-500 text-base">Dana Terkumpul : {numberFormat(kampanye.dana_terkumpul)}</p>
    //             <p className="md:text-lg text-gray-500 text-base">Target : {numberFormat(kampanye.target)}</p>
    //             <div className="h-1 w-full bg-neutral-200 rounded-md">
    //                 <div className="h-1 bg-blue-700 rounded-md" style={{ width: (((kampanye.dana_terkumpul/kampanye.target)*100) < 100) ? (kampanye.dana_terkumpul/kampanye.target)*100 +'%' : 100 +'%'}} ></div>
    //             </div>
    //             <p className="md:text-lg text-gray-500 text-base">Sisa Hari : {(days > 0) ? days + " Hari" : 'Selesai'}</p>
    //             <Link href={kampanye.show_url}>
    //                 <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
    //                     Selengkapnya
    //                 </button>
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "rounded-md shadow-lg bg-white", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "h-72 w-full rounded-md", src: "/storage/" + kampanye.gambar, alt: "Featured Photo" }) }),
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-2xl leading-6 font-bold font-sans", children: kampanye.judul }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
          "Kategori : ",
          kampanye.kategori
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
          "Dana Terkumpul : ",
          numberFormat(kampanye.dana_terkumpul)
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
          "Target : ",
          numberFormat(kampanye.target)
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-1 w-full bg-gray-200 rounded-md", children: /* @__PURE__ */ jsx("div", { className: "h-1 bg-blue-700 rounded-md", style: { width: kampanye.dana_terkumpul / kampanye.target * 100 < 100 ? kampanye.dana_terkumpul / kampanye.target * 100 + "%" : 100 + "%" } }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
          "Sisa Hari : ",
          days > 0 ? days + " Hari" : "Selesai"
        ] }),
        /* @__PURE__ */ jsx(Link, { href: kampanye.show_url, children: /* @__PURE__ */ jsx(PrimaryButton, { children: "Selengkapnya" }) })
      ] }) })
    ] }) }) })
  );
}
function Welcome(props) {
  return /* @__PURE__ */ jsxs(Authenticated, { auth: props.auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center", children: props.kampanyes.map((kampanye, index) => {
      return /* @__PURE__ */ jsx(Kampanye, { kampanye }, index);
    }) })
  ] });
}
export {
  Welcome as default
};
