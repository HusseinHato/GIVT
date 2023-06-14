import { a as jsx, j as jsxs } from "../ssr.mjs";
import "react";
import { Link } from "@inertiajs/react";
function Donasi({ donasi }) {
  const numberFormat = (value) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
  console.log(donasi);
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { style: { backgroundColor: "rgb(245 245 245)" }, className: "rounded-md", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "h-72 w-full rounded-md", src: "/storage/" + donasi.gambar, alt: "Featured Photo" }) }),
    /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-2xl leading-6 font-bold font-sans", children: donasi.judul }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
        "Kategori : ",
        donasi.kategori
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
        "Jumlah Donasi : ",
        numberFormat(donasi.jumlah)
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: [
        "Status : ",
        donasi.status
      ] }),
      /* @__PURE__ */ jsx(Link, { href: donasi.show_url, children: /* @__PURE__ */ jsx("button", { type: "button", className: "inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 mt-4", children: "Selengkapnya" }) })
    ] }) })
  ] }) }) });
}
export {
  Donasi as D
};
