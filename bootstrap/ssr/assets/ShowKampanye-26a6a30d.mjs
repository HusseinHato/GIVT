import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { usePage, router, Head } from "@inertiajs/react";
import { useState, Fragment as Fragment$1 } from "react";
import { Editor } from "@tinymce/tinymce-react";
import differenceInDays from "date-fns/differenceInDays";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { D as DonasiKampanye } from "./DonasiKampanye-6457c886.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@heroicons/react/24/outline";
import "@heroicons/react/24/solid";
function KampanyeAdmin({ kampanye, posts, dana_terkumpul }) {
  console.log(kampanye);
  console.log(posts);
  usePage().props;
  const numberFormat = (value) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
  const days = differenceInDays(
    new Date(kampanye.tgl_berakhir),
    new Date()
  );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return /* @__PURE__ */ jsx("div", { className: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-md", children: [
    /* @__PURE__ */ jsx("img", { src: "/storage/" + kampanye.gambar, alt: "", className: "w-full h-48 md:h-96 rounded-md object-fill" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-6xl text-black", children: kampanye.judul }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Gambar Header :" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Deskripsi : " }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Editor,
      {
        tinymceScriptSrc: "../../tinymce/tinymce.min.js",
        initialValue: kampanye.deskripsi,
        disabled: true,
        init: {
          toolbar: false,
          statusbar: false,
          menubar: false,
          readonly: true,
          plugins: "autoresize",
          content_css: "default"
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "clear-both" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Target : ",
      numberFormat(kampanye.target)
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Dana Terkumpul : ",
      numberFormat(dana_terkumpul)
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-1 w-full bg-neutral-200 rounded-md", children: /* @__PURE__ */ jsx("div", { className: "h-1 bg-blue-700 rounded-md", style: { width: dana_terkumpul / kampanye.target * 100 < 100 ? dana_terkumpul / kampanye.target * 100 + "%" : 100 + "%" } }) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Tgl Mulai : ",
      new Date(kampanye.tgl_mulai).toLocaleString("id-ID", options)
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Tgl Berakhir : ",
      new Date(kampanye.tgl_berakhir).toLocaleString("id-ID", options)
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Sisa Hari : ",
      days > 0 ? days + " Hari" : "Selesai"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Terverifikasi : ",
      kampanye.terverifikasi ? "Sudah diverifikasi" : "Belum terverifikasi"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Kategori : ",
      kampanye.kategori
    ] })
  ] }) });
}
function ShowBerita({ show_url, kampanye, posts, dana_terkumpul, donasis }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  function onConfirm(e) {
    e.preventDefault();
    router.patch(route("admin.kampanye.konfirmasi", kampanye), { terverifikasi: true }, { onSuccess: () => {
      setConfirmOpen(false);
    } });
  }
  const handleOpen = () => setConfirmOpen(!confirmOpen);
  router.on("finish", (event) => {
    setConfirmOpen(false);
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Lihat Berita" }),
    /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(Dialog, { open: confirmOpen, handler: handleOpen, children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: "Konfirmasi Verifikasi ?" }),
      /* @__PURE__ */ jsxs(DialogBody, { divider: true, className: "text-gray-800", children: [
        "Apakah Anda yakin akan memverifikasi ",
        /* @__PURE__ */ jsxs("span", { className: "font-black", children: [
          kampanye.judul,
          " ?"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "text",
            color: "red",
            onClick: handleOpen,
            className: "mr-1",
            children: /* @__PURE__ */ jsx("span", { children: "Cancel" })
          }
        ),
        /* @__PURE__ */ jsx(Button, { variant: "gradient", color: "green", onClick: (e) => onConfirm(e), children: /* @__PURE__ */ jsx("span", { children: "Confirm" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(KampanyeAdmin, { kampanye, dana_terkumpul }),
    !kampanye.terverifikasi && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Button, { onClick: handleOpen, color: "green", children: "Verifikasi Kampanye" }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-black mb-2", children: "Donasi : " }),
      !donasis.length == 0 ? donasis.map((donasi, index) => {
        return /* @__PURE__ */ jsx(DonasiKampanye, { donasi }, index);
      }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada Donasi ..." }) })
    ] })
  ] });
}
ShowBerita.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ShowBerita as default
};
