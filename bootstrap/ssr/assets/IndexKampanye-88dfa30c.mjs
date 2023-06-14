import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { K as Kampanye } from "./KampanyePreview-443c39b7.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/24/solid";
import "date-fns/differenceInDays";
import "./PrimaryButton-96f9bcc8.mjs";
function IndexKampanye({ kampanyes }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Index Kampanye" }),
    !kampanyes.length == 0 ? kampanyes.map((kampanye, index) => {
      return /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Kampanye, { kampanye }, index) }, index);
    }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada kampanye ..." }) })
  ] });
}
IndexKampanye.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  IndexKampanye as default
};
