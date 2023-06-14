import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { D as Donasi } from "./DonasiPreview-5ec4dcb3.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/24/solid";
function IndexDonasi({ donasis }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Index Donasi" }),
    !donasis.length == 0 ? donasis.map((donasi, index) => {
      return /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Donasi, { donasi }, index) });
    }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada Donasi ..." }) })
  ] });
}
IndexDonasi.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  IndexDonasi as default
};
