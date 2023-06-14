import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import "react";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { Head } from "@inertiajs/react";
import { D as Donasi } from "./DonasiPreview-5ec4dcb3.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
import "./PrimaryButton-96f9bcc8.mjs";
function Index({ auth, donasis }) {
  console.log(donasis);
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Donasi" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center", children: !donasis.length == 0 ? donasis.map((donasi, index) => {
      return /* @__PURE__ */ jsx(Donasi, { donasi }, index);
    }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada Donasi ..." }) }) })
  ] });
}
export {
  Index as default
};
