import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { Head } from "@inertiajs/react";
import { C as CardLink } from "./CardLink-497b77c1.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
import "./PrimaryButton-96f9bcc8.mjs";
function Dashboard(props) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth: props.auth,
      errors: props.errors,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center", children: [
          /* @__PURE__ */ jsx(
            CardLink,
            {
              href: route("kampanye.index"),
              children: "Lihat Kampanye Saya"
            }
          ),
          /* @__PURE__ */ jsx(
            CardLink,
            {
              href: route("kampanye.create"),
              children: "Buat Kampanye"
            }
          ),
          /* @__PURE__ */ jsx(
            CardLink,
            {
              href: route("donasi.index"),
              children: "Lihat Riwayat Transaksi"
            }
          ),
          /* @__PURE__ */ jsx(
            CardLink,
            {
              href: route("kampanye.diikuti"),
              children: "Lihat Kampanye yang diikuti"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Dashboard as default
};
