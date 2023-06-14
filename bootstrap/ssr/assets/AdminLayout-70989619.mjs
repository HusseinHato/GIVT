import { j as jsxs, a as jsx } from "../ssr.mjs";
import { Card, Typography, IconButton, List, Button, Accordion, ListItem, AccordionHeader, AccordionBody, Navbar, Input, Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Bars3Icon, BellIcon, ClockIcon, CreditCardIcon } from "@heroicons/react/24/solid";
function SidebarAdmin({ showSideNav, setShowSideNav }) {
  const handleLogout = () => {
    router.post(route("admin.logout"));
  };
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return /* @__PURE__ */ jsxs(Card, { className: `
        ${showSideNav ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl shadow-xl transition-transform duration-300 xl:translate-x-0 shadow-blue-gray-900/5 bg-gradient-to-br from-blue-gray-800 to-blue-gray-900`, children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2 p-4", children: /* @__PURE__ */ jsx(Typography, { variant: "h5", color: "white", children: "Admin" }) }),
    /* @__PURE__ */ jsx(
      IconButton,
      {
        variant: "text",
        color: "white",
        size: "sm",
        ripple: false,
        className: "absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden",
        onClick: setShowSideNav,
        children: /* @__PURE__ */ jsx(XMarkIcon, { strokeWidth: 2.5, className: "h-5 w-5 text-white" })
      }
    ),
    /* @__PURE__ */ jsxs(List, { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Link, { href: route("adminDashboard"), className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: route().current("adminDashboard") ? "gradient" : "text", color: route().current("adminDashboard") ? "blue" : "white", className: "grow", children: "Home" }) }),
      /* @__PURE__ */ jsx(Link, { href: route("admin.kampanye.index"), className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: route().current("admin.kampanye.index") ? "gradient" : "text", color: route().current("admin.kampanye.index") ? "blue" : "white", className: "grow", children: "Kampanye" }) }),
      /* @__PURE__ */ jsxs(
        Accordion,
        {
          open: open === 1,
          icon: /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              strokeWidth: 2.5,
              color: "white",
              className: `mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`
            }
          ),
          children: [
            /* @__PURE__ */ jsx(ListItem, { className: "p-0 bg-blue-gray-700 active:bg-blue-gray-700 hover:bg-blue-gray-700", selected: open === 1, children: /* @__PURE__ */ jsx(AccordionHeader, { onClick: () => handleOpen(1), className: "border-b-0 p-3", children: /* @__PURE__ */ jsx(Typography, { color: "white", className: "mr-auto font-normal", children: "Berita" }) }) }),
            /* @__PURE__ */ jsx(AccordionBody, { className: "py-1", children: /* @__PURE__ */ jsxs(List, { className: "p-0", children: [
              /* @__PURE__ */ jsx(Link, { href: route("post.index"), className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: route().current("post.index") ? "gradient" : "text", color: route().current("post.index") ? "blue" : "white", className: "grow", children: "Index Berita" }) }),
              /* @__PURE__ */ jsx(Link, { href: route("post.create"), className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: route().current("post.create") ? "gradient" : "text", color: route().current("post.create") ? "blue" : "white", className: "grow", children: "Buat Berita" }) })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Link, { href: route("admin.donasi.index"), className: "flex", children: /* @__PURE__ */ jsx(Button, { variant: route().current("adminTransaksi") ? "gradient" : "text", color: route().current("adminTransaksi") ? "blue" : "white", className: "grow", children: "Transaksi" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(Button, { onClick: handleLogout, variant: "gradient", color: "white", className: "grow", children: "Logout" }) })
    ] })
  ] });
}
function NavbarAdmin({ setShowSideNav }) {
  return /* @__PURE__ */ jsx(
    Navbar,
    {
      className: "rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5",
      fullWidth: true,
      blurred: true,
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-row xl:flex-col-reverse gap-6 justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mr-2 md:mr-4 md:w-56", children: /* @__PURE__ */ jsx(Input, { label: "Type here" }) }),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            variant: "text",
            color: "blue-gray",
            className: "grid xl:hidden",
            onClick: setShowSideNav,
            children: /* @__PURE__ */ jsx(Bars3Icon, { strokeWidth: 3, className: "h-6 w-6 text-blue-gray-500" })
          }
        ),
        /* @__PURE__ */ jsxs(Menu, { children: [
          /* @__PURE__ */ jsx(MenuHandler, { children: /* @__PURE__ */ jsx(IconButton, { variant: "text", color: "blue-gray", children: /* @__PURE__ */ jsx(BellIcon, { className: "h-5 w-5 text-blue-gray-500" }) }) }),
          /* @__PURE__ */ jsxs(MenuList, { className: "w-max border-0", children: [
            /* @__PURE__ */ jsxs(MenuItem, { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  src: "https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg",
                  alt: "item-1",
                  size: "sm",
                  variant: "circular"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "mb-1 font-normal",
                    children: [
                      /* @__PURE__ */ jsx("strong", { children: "New message" }),
                      " from Laur"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "flex items-center gap-1 text-xs font-normal opacity-60",
                    children: [
                      /* @__PURE__ */ jsx(ClockIcon, { className: "h-3.5 w-3.5" }),
                      " 13 minutes ago"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(MenuItem, { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  src: "https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg",
                  alt: "item-1",
                  size: "sm",
                  variant: "circular"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "mb-1 font-normal",
                    children: [
                      /* @__PURE__ */ jsx("strong", { children: "New album" }),
                      " by Travis Scott"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "flex items-center gap-1 text-xs font-normal opacity-60",
                    children: [
                      /* @__PURE__ */ jsx(ClockIcon, { className: "h-3.5 w-3.5" }),
                      " 1 day ago"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(MenuItem, { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900", children: /* @__PURE__ */ jsx(CreditCardIcon, { className: "h-4 w-4 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "mb-1 font-normal",
                    children: "Payment successfully completed"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "flex items-center gap-1 text-xs font-normal opacity-60",
                    children: [
                      /* @__PURE__ */ jsx(ClockIcon, { className: "h-3.5 w-3.5" }),
                      " 2 days ago"
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }) })
    }
  );
}
function AdminLayout({ children }) {
  const [showSideNav, setShowSideNav] = useState(true);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-blue-gray-50/50", children: [
    /* @__PURE__ */ jsx(SidebarAdmin, { showSideNav, setShowSideNav: () => setShowSideNav(!showSideNav) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 xl:ml-80 z-0", children: [
      /* @__PURE__ */ jsx(NavbarAdmin, { setShowSideNav: () => setShowSideNav(!showSideNav) }),
      /* @__PURE__ */ jsx("main", { children })
    ] })
  ] });
}
export {
  AdminLayout as A
};
