import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import Index from "./CreatePost-102d18ba.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@material-tailwind/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/24/solid";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
import "./PrimaryButton-96f9bcc8.mjs";
import "./InputError-475c5bd7.mjs";
import "./InputLabel-02e96af9.mjs";
import "./TextInput-7de1ee02.mjs";
/* empty css                            */import "react-drag-drop-files";
import "@tinymce/tinymce-react";
import "./TableBerita-b278dbca.mjs";
import "ag-grid-react";
import "./CardLink-497b77c1.mjs";
function BuatBerita({ kampanyes }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Buat Berita" }),
    /* @__PURE__ */ jsx(Index, { kampanyes })
  ] });
}
BuatBerita.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  BuatBerita as default
};
