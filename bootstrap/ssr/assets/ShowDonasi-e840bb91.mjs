import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { Head } from "@inertiajs/react";
import "react";
import "@tinymce/tinymce-react";
import { K as Kampanye } from "./KampanyePreviewPost-27c9f68a.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/24/solid";
import "date-fns/differenceInDays";
import "./PrimaryButton-96f9bcc8.mjs";
function Donasi({ donasi, kampanye, show_url }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return /* @__PURE__ */ jsx("div", { class: "max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-2 bg-white rounded-md", children: [
    /* @__PURE__ */ jsx("p", { className: "text-md text-black", children: "Kampanye Terkait : " }),
    /* @__PURE__ */ jsx(Kampanye, { kampanye, show_url }),
    /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Nama : ",
      donasi.nama
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Jumlah Donasi : ",
      donasi.jumlah
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Status : ",
      donasi.status
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Tanggal Pemesanan : ",
      new Date(donasi.created_at).toLocaleString("id-ID", options),
      ", ",
      new Date(donasi.created_at).toLocaleTimeString("id-ID")
    ] }),
    donasi.status === "Paid" && /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Tanggal Pembayaran : ",
      new Date(donasi.updated_at).toLocaleString("id-ID", options),
      ", ",
      new Date(donasi.updated_at).toLocaleTimeString("id-ID")
    ] }),
    donasi.doa && /* @__PURE__ */ jsxs("p", { className: "text-md text-black", children: [
      "Doa : ",
      donasi.doa
    ] })
  ] }) });
}
function ShowDonasi({ donasi, show_url, kampanye }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Lihat Berita" }),
    /* @__PURE__ */ jsx(Donasi, { donasi, show_url, kampanye })
  ] });
}
ShowDonasi.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ShowDonasi as default
};
