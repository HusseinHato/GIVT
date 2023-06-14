import { a as jsx, j as jsxs } from "../ssr.mjs";
import "react";
import { Link } from "@inertiajs/react";
import "@material-tailwind/react";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
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
    /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "rounded-md bg-white shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "h-52 w-full rounded-md", src: "/storage/" + post.gambar, alt: "Featured Photo" }) }),
      /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-2xl leading-6 font-bold font-sans", children: post.judul }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-md font-normal text-skin-base leading-5", children: post.excerpt }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-normal text-skin-base leading-5", children: new Date(post.created_at).toLocaleString("id-ID", options) }),
        /* @__PURE__ */ jsx(Link, { href: post.show_url, children: /* @__PURE__ */ jsx(PrimaryButton, { children: "Selengkapnya" }) })
      ] }) })
    ] }) }) })
  );
}
export {
  PostPreview as P
};
