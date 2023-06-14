import { a as jsx, j as jsxs } from "../ssr.mjs";
import { forwardRef, useState, useRef, useEffect } from "react";
import { A as Authenticated } from "./AuthenticatedLayout-a2b93657.mjs";
import { I as InputError } from "./InputError-475c5bd7.mjs";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { useForm, Head } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-02e96af9.mjs";
import { T as TextInput } from "./TextInput-7de1ee02.mjs";
import DatePicker from "react-datepicker";
/* empty css                            */import { NumericFormat } from "react-number-format";
import { FileUploader } from "react-drag-drop-files";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-107c42b0.mjs";
import "./Dropdown-633d2380.mjs";
import "@headlessui/react";
function Index({ auth }) {
  const ButtonTglMulai = forwardRef(({ value, onClick }, ref) => /* @__PURE__ */ jsx("button", { type: "button", className: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-150", onClick, ref, children: value }));
  const [startDate] = useState(new Date());
  const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
    deskripsi: "<p>Masukan Deskripsi Kampanye.</p>",
    judul: "",
    target: "",
    tgl_berakhir: startDate,
    tgl_mulai: new Date(),
    gambar: "",
    kategori: ""
  });
  console.log(data);
  const editorRef = useRef(null);
  transform((data2) => ({
    ...data2,
    tgl_berakhir: data2.tgl_berakhir.toISOString().slice(0, 19).replace("T", " "),
    tgl_mulai: data2.tgl_mulai.toISOString().slice(0, 19).replace("T", " ")
  }));
  const submit = (e) => {
    e.preventDefault();
    post(route("kampanye.store"), { onSuccess: () => reset() });
  };
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const handleFilePicker = (callback, value, meta) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const id = "blobid" + new Date().getTime();
        const blobCache = editorRef.current.editorUpload.blobCache;
        const base64 = reader.result.split(",")[1];
        const blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        callback(blobInfo.blobUri(), { title: file.name });
      };
    };
    input.click();
  };
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!data.gambar) {
      setPreview(void 0);
      return;
    }
    const objectUrl = URL.createObjectURL(data.gambar);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [data.gambar]);
  const options = [
    { value: "Pendidikan", label: "Pendidikan" },
    { value: "Kemanusiaan", label: "Kemanusiaan" }
  ];
  return /* @__PURE__ */ jsxs(Authenticated, { auth, children: [
    /* @__PURE__ */ jsx(Head, { title: "Kampanye" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-200", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "judul", value: "Judul Kampanye" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            placeholder: "Judul Kampanye ...",
            id: "judul",
            name: "judul",
            value: data.judul,
            className: "mt-1 block w-full",
            autoComplete: "off",
            isFocused: true,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.judul, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "deskkampanye",
            value: "Deskripsi Singkat Kampanye",
            className: "mt-4"
          }
        ),
        /* @__PURE__ */ jsx(
          Editor,
          {
            id: "deskkampanye",
            tinymceScriptSrc: "../tinymce/tinymce.min.js",
            onInit: (evt, editor) => editorRef.current = editor,
            value: data.deskripsi,
            onEditorChange: (newValue, editor) => setData("deskripsi", newValue),
            image_uploadtab: true,
            init: {
              setup: (editor) => {
                editor.on("init change", () => {
                  editor.save();
                });
              },
              content_css: "default",
              height: 800,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
                "preview",
                "visualblocks"
              ],
              toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter  alignjustify | bullist numlist outdent indent | image | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              image_title: true,
              automatic_uploads: true,
              images_upload_url: "/upload",
              file_picker_types: "image",
              file_picker_callback: handleFilePicker,
              image_dimensions: false,
              image_class_list: [
                { title: "Responsive", value: "img-responsive" }
              ]
            }
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.deskripsi, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "target", value: "Target Dana", className: "mt-4" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-stretch w-full relative mt-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex -mr-px", children: /* @__PURE__ */ jsx("span", { className: "flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm", children: "Rp" }) }),
          /* @__PURE__ */ jsx(
            NumericFormat,
            {
              name: "target",
              id: "target",
              thousandSeparator: true,
              valueIsNumericString: true,
              value: data.target,
              onValueChange: (values) => {
                setData("target", values.value);
              },
              className: "focus:border-indigo-500 focus:ring-indigo-500 rounded-l-none rounded-md shadow-sm",
              autoComplete: "off",
              placeholder: "Target Dana ..."
            }
          )
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.target, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "tgl_berakhir", value: "Tanggal Akhir Kampanye", className: "mt-4" }),
        /* @__PURE__ */ jsx(
          DatePicker,
          {
            id: "tgl_berakhir",
            selected: data.tgl_berakhir,
            minDate: new Date(),
            className: "rounded max-w-sm w-full mt-1 ",
            autoComplete: "off",
            placeholderText: "Pilih Tanggal",
            startDate: data.tgl_berakhir,
            customInput: /* @__PURE__ */ jsx(ButtonTglMulai, {}),
            onChange: (date) => setData("tgl_berakhir", date),
            popperModifiers: [
              {
                name: "arrow",
                options: {
                  padding: ({ popper, reference }) => ({
                    right: Math.min(popper.width, reference.width) - 24
                  })
                }
              }
            ]
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.tgl_mulai, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "kategori",
            value: "Kategori Kampanye",
            className: "mt-4"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            options,
            isSearchable: false,
            onChange: (e) => setData("kategori", e.value),
            placeholder: "Pilih Kategori ..."
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.kategori, className: "mt-1" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            forInput: "gambar",
            value: "Gambar Berita",
            className: "mt-4"
          }
        ),
        /* @__PURE__ */ jsx(
          FileUploader,
          {
            handleChange: (file) => {
              setData("gambar", file);
            },
            name: "file",
            types: ["JPG", "PNG", "JPEG"],
            hoverTitle: " ",
            children: /* @__PURE__ */ jsx("div", { className: "bg-white grid place-content-center h-48 rounded-lg", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: data.gambar ? `File ${data.gambar.name}` : `Unggah / Tarik File Kesini` }) }) })
          }
        ),
        data.gambar ? /* @__PURE__ */ jsx("button", { type: "button", className: "border border-white bg-slate-400", onClick: () => {
          reset("gambar");
        }, children: "Clear" }) : null,
        /* @__PURE__ */ jsx(InputError, { message: errors.gambar, className: "mt-1" }),
        data.gambar && /* @__PURE__ */ jsx("img", { src: preview, className: "w-full h-56 md:h-96 rounded-md object-fill" })
      ] }),
      /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", disabled: processing, children: "Buat Kampanye" })
    ] }) })
  ] });
}
export {
  Index as default
};
