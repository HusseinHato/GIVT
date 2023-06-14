import { a as jsx, j as jsxs } from "../ssr.mjs";
import { useEffect } from "react";
import "@tinymce/tinymce-react";
import { Head } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { K as Kampanye } from "./KampanyePreviewPost-27c9f68a.mjs";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "date-fns/differenceInDays";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
function Donasi({ donasi, kampanye, show_url }) {
  console.log(donasi);
  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    const myMidtransClientKey = "SB-Mid-client-irk0fOcXAPUjH88H";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
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
    ] }),
    /* @__PURE__ */ jsx(
      PrimaryButton,
      {
        type: "button",
        onClick: () => snap.pay(donasi.snaptoken, {
          onSuccess: function(result) {
            alert("payment success!");
            console.log(result);
          },
          onPending: function(result) {
            alert("wating your payment!");
            console.log(result);
          },
          onError: function(result) {
            alert("payment failed!");
            console.log(result);
          },
          onClose: function() {
            alert("you closed the popup without finishing the payment");
          }
        }),
        children: "Bayar Sekarang"
      }
    )
  ] }) });
}
function Index({ auth, donasi, kampanye, show_url }) {
  console.log(kampanye);
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Donasi" }),
    /* @__PURE__ */ jsx(Donasi, { donasi, kampanye, show_url })
  ] });
}
export {
  Index as default
};
