import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { Head } from "@inertiajs/react";
import "react";
import { Editor } from "@tinymce/tinymce-react";
import { K as Kampanye } from "./KampanyePreviewPost-27c9f68a.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/24/solid";
import "date-fns/differenceInDays";
import "./PrimaryButton-96f9bcc8.mjs";
function PostAdmin({ post, show_url }) {
  console.log(post);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return /* @__PURE__ */ jsx("div", { className: "max-w-4xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-md", children: [
    /* @__PURE__ */ jsx("img", { src: "/storage/" + post.gambar, alt: "", className: "w-full h-56 md:h-96 rounded-md object-fill" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-6xl text-black", children: post.judul }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-md text-black", children: new Date(post.created_at).toLocaleString("id-ID", options) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-1 text-md text-black", children: [
      "Dibuat Oleh : ",
      post.admin.name
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      Editor,
      {
        tinymceScriptSrc: "../../tinymce/tinymce.min.js",
        initialValue: post.body,
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
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-black", children: "Kampanye Terkait : " }),
    /* @__PURE__ */ jsx(Kampanye, { kampanye: post.kampanye, show_url })
  ] }) });
}
function ShowBerita({ post, show_url }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Lihat Berita" }),
    /* @__PURE__ */ jsx(PostAdmin, { post, show_url })
  ] });
}
ShowBerita.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ShowBerita as default
};
