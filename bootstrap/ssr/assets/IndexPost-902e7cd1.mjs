import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import "react";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { Head } from "@inertiajs/react";
import { C as CardLink } from "./CardLink-497b77c1.mjs";
import { P as PostPreview } from "./PostPreview-c9bad449.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
import "./PrimaryButton-96f9bcc8.mjs";
import "@material-tailwind/react";
function Index({ auth, posts }) {
  console.log(posts);
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Berita" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center", children: [
      !posts.length == 0 ? posts.map((post, index) => {
        return /* @__PURE__ */ jsx(PostPreview, { post }, index);
      }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800", children: "Belum Ada post ..." }),
        /* @__PURE__ */ jsx(
          CardLink,
          {
            href: route("post.create"),
            children: "Buat Post"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", {})
    ] })
  ] });
}
export {
  Index as default
};
