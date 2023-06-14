import { j as jsxs, a as jsx } from "../ssr.mjs";
import { useState, useEffect } from "react";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { I as InputError } from "./InputError-475c5bd7.mjs";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { useForm, Head } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-02e96af9.mjs";
import "./TextInput-7de1ee02.mjs";
/* empty css                            */import { NumericFormat } from "react-number-format";
import "react-drag-drop-files";
import "@tinymce/tinymce-react";
import { C as Checkbox } from "./Checkbox-e4450f74.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
function Index({ auth, kampanye }) {
  const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
    jumlah: "",
    nama: auth.user.name,
    doa: "",
    kampanye_id: kampanye.id
  });
  console.log(data);
  const submit = (e) => {
    e.preventDefault();
    post(route("donasi.store"), { onSuccess: () => reset() });
  };
  const [anonim, setAnonim] = useState(false);
  console.log(anonim);
  useEffect(() => {
    if (anonim) {
      setData("nama", "Orang Baik");
    } else {
      setData("nama", auth.user.name);
    }
  }, [anonim]);
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Donasi" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-200", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "jumlah", value: "Jumlah Donasi" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-stretch w-full relative mt-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex -mr-px", children: /* @__PURE__ */ jsx("span", { className: "flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm", children: "Rp" }) }),
          /* @__PURE__ */ jsx("div", { className: "grow", children: /* @__PURE__ */ jsx(
            NumericFormat,
            {
              name: "jumlah",
              id: "jumlah",
              thousandSeparator: true,
              valueIsNumericString: true,
              value: data.jumlah,
              onValueChange: (values) => {
                setData("jumlah", values.value);
              },
              className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-l-none rounded-md shadow-sm w-full",
              autoComplete: "off",
              placeholder: "Jumlah Donasi ..."
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.jumlah, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "nama", value: "Nama Donatur", className: "mt-4" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-700 text-2xl", children: auth.user.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-700 text-sm", children: auth.user.email }),
        /* @__PURE__ */ jsx("div", { className: "block mt-3", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              name: "anonim",
              value: data.anonim,
              handleChange: () => {
                setAnonim(!anonim);
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ml-2 text-lg text-gray-700", children: "Donasi Secara Anonim" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "doa",
            value: "Doa (Opsional)",
            className: "mt-4"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: data.doa,
            placeholder: "Masukkan Doa ...",
            className: "block w-full h-36 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 resize-none",
            onChange: (e) => setData("doa", e.target.value),
            id: "doa"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.doa, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", disabled: processing, children: "Checkout" })
    ] }) })
  ] });
}
export {
  Index as default
};
