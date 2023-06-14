import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { A as AdminLayout } from "./AdminLayout-70989619.mjs";
import { C as CardLink } from "./CardLink-497b77c1.mjs";
import { useState, Fragment as Fragment$1 } from "react";
import { Link, router, Head } from "@inertiajs/react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@heroicons/react/24/outline";
import "@heroicons/react/24/solid";
import "./PrimaryButton-96f9bcc8.mjs";
function PostPreview({ post }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return (
    // <div className="flex flex-col justify-center">
    // <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    //     <div className="w-full md:w-1/3 bg-white grid place-items-center">
    //         <img src={"/storage/"+post.gambar} alt="gambar" className="rounded-xl" />
    //     </div>
    //         <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
    //             <h3 className="font-black text-gray-800 md:text-3xl text-xl">{post.judul}</h3>
    //             <p className="md:text-lg text-gray-500 text-base">{post.excerpt}</p>
    //             <p className="text-xl font-black text-gray-800">
    //             Tanggal Dibuat : {new Date(post.created_at).toLocaleString()}
    //             </p>
    //             <Link href={post.show_url}>
    //                 <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
    //                     Selengkapnya
    //                 </button>
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { style: { backgroundColor: "rgb(245 245 245)" }, className: "rounded-md", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-2 lg:space-y-0 rounded-md", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "h-52 lg:min-w-full w-96 lg:h-48 rounded-md", src: "/storage/" + post.gambar, alt: "Featured Photo" }) }),
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-2xl leading-6 font-bold font-sans", children: post.judul }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: post.excerpt }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-normal text-skin-base leading-5", children: new Date(post.created_at).toLocaleString("id-ID", options) }),
        /* @__PURE__ */ jsx(Link, { href: post.show_url, children: /* @__PURE__ */ jsx("button", { type: "button", className: "inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 ", children: "Selengkapnya" }) }),
        /* @__PURE__ */ jsx(Link, { href: post.edit_url, children: /* @__PURE__ */ jsx("button", { type: "button", className: "inline-block rounded bg-yellow-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black hover:bg-yellow-800 focus:ring focus:ring-yellow-900 ms-2", children: "Edit" }) })
      ] }) })
    ] }) }) })
  );
}
function LihatBerita({ posts }) {
  const [beritaId, setBeritaId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  console.log(beritaId);
  function onConfirm(e) {
    e.preventDefault();
    router.delete(`/admin/post/delete/${beritaId.id}`, { onSuccess: () => {
      setConfirmOpen(false);
    } });
  }
  const handleOpen = () => setConfirmOpen(!confirmOpen);
  router.on("finish", (event) => {
    setConfirmOpen(false);
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Index Berita" }),
    /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(Dialog, { open: confirmOpen, handler: handleOpen, children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: "Konfirmasi Hapus ?" }),
      /* @__PURE__ */ jsxs(DialogBody, { divider: true, className: "text-gray-800", children: [
        "Apakah Anda yakin akan menghapus ",
        /* @__PURE__ */ jsx("span", { className: "font-black", children: beritaId == null ? void 0 : beritaId.judul }),
        " ?, Data yang telah dihapus tidak dapat dikembalikan lagi !"
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
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center", children: !posts.length == 0 ? posts.map((post, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-8", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-7", children: /* @__PURE__ */ jsx(PostPreview, { post }, index) }),
        /* @__PURE__ */ jsx(Button, { onClick: () => {
          setBeritaId(post);
          setConfirmOpen(true);
        }, variant: "gradient", color: "red", children: "Delete" })
      ] }, index);
    }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada post ..." }),
      /* @__PURE__ */ jsx(
        CardLink,
        {
          href: route("post.create"),
          children: "Buat Post"
        }
      )
    ] }) })
  ] });
}
LihatBerita.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  LihatBerita as default
};
