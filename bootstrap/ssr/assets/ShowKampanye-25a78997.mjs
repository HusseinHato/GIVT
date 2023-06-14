import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import "react";
import { Editor } from "@tinymce/tinymce-react";
import differenceInDays from "date-fns/differenceInDays";
import { P as PostPreview } from "./PostPreview-c9bad449.mjs";
import { usePage, Link, Head } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { D as DonasiKampanye } from "./DonasiKampanye-6457c886.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
function Kampanye$1({ kampanye, posts, dana_terkumpul }) {
  usePage().props;
  const numberFormat = (value) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
  const days = differenceInDays(
    new Date(kampanye.tgl_berakhir),
    new Date()
  );
  return /* @__PURE__ */ jsx("div", { class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-md", children: [
    /* @__PURE__ */ jsx("img", { src: "/storage/" + kampanye.gambar, alt: "", className: "w-full h-48 md:h-96 rounded-md object-fill" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-6xl text-black", children: kampanye.judul }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Gambar Header :" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Deskripsi : " }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Editor,
      {
        tinymceScriptSrc: "../tinymce/tinymce.min.js",
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
      "Sisa Hari : ",
      days > 0 ? days + " Hari" : "Selesai"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-black", children: [
      "Kategori : ",
      kampanye.kategori
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 mb-4 text-lg text-black", children: "Berita Terkait : " }),
    !posts.length == 0 ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      posts.slice(0, 2).map((post, index) => {
        return /* @__PURE__ */ jsx(PostPreview, { post }, index);
      }),
      /* @__PURE__ */ jsx(Link, { href: route("kampanye.showbt", kampanye), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", children: "Berita Terkait Lainnya ..." }) })
    ] }) : /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Belum Ada Berita Terkait Kampanye ..." }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("donasi.create", kampanye), children: /* @__PURE__ */ jsx(PrimaryButton, { type: "button", className: "mt-4", children: "Donasi Sekarang" }) }) })
  ] }) });
}
function Kampanye({ kampanye, posts, dana_terkumpul }) {
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
  return /* @__PURE__ */ jsx("div", { class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6 space-x-2 bg-white rounded-md", children: [
    /* @__PURE__ */ jsx("img", { src: "/storage/" + kampanye.gambar, alt: "", className: "w-full h-48 md:h-96 rounded-md object-fill" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-6xl text-black", children: kampanye.judul }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Gambar Header :" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Deskripsi : " }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Editor,
      {
        tinymceScriptSrc: "../tinymce/tinymce.min.js",
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
    /* @__PURE__ */ jsx("div", { className: "h-1 w-full bg-gray-200 rounded-md", children: /* @__PURE__ */ jsx("div", { className: "h-1 bg-blue-700 rounded-md", style: { width: dana_terkumpul / kampanye.target * 100 < 100 ? dana_terkumpul / kampanye.target * 100 + "%" : 100 + "%" } }) }),
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
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 mb-4 text-lg text-black", children: "Berita Terkait : " }),
    !posts.length == 0 ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      posts.slice(0, 2).map((post, index) => {
        return /* @__PURE__ */ jsx(PostPreview, { post }, index);
      }),
      /* @__PURE__ */ jsx(Link, { href: route("kampanye.showbt", kampanye), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", children: "Berita Terkait Lainnya ..." }) })
    ] }) : /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Belum Ada Berita Terkait Kampanye ..." }),
    /* @__PURE__ */ jsx(Link, { href: route("kampanye.edit", kampanye), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", children: "Edit" }) })
  ] }) });
}
function Index({ auth, kampanye, posts, dana_terkumpul, donasis }) {
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Kampanye" }),
    auth.user && auth.user.id == kampanye.user_id ? /* @__PURE__ */ jsx(Kampanye, { kampanye, posts, dana_terkumpul }) : /* @__PURE__ */ jsx(Kampanye$1, { kampanye, posts, dana_terkumpul }),
    /* @__PURE__ */ jsxs("div", { class: "max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-black mb-2", children: "Donasi : " }),
      !donasis.length == 0 ? donasis.map((donasi, index) => {
        return /* @__PURE__ */ jsx(DonasiKampanye, { donasi }, index);
      }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada Donasi ..." }) })
    ] })
  ] });
}
export {
  Index as default
};
