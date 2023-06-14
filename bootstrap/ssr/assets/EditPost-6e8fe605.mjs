import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import { useRef, useState, useEffect, useCallback } from "react";
import { I as InputError } from "./InputError-475c5bd7.mjs";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
import { useForm } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-02e96af9.mjs";
import { T as TextInput } from "./TextInput-7de1ee02.mjs";
/* empty css                            */import { FileUploader } from "react-drag-drop-files";
import { Editor } from "@tinymce/tinymce-react";
import { T as TableBerita } from "./TableBerita-b278dbca.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "ag-grid-react";
function Index({ kampanyes, berita }) {
  const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
    body: berita.body,
    judul: berita.judul,
    gambar: "",
    kampanye_id: "",
    _method: "post"
  });
  console.log(data);
  const editorRef = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    post(route("post.update", berita));
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
  console.log(preview);
  useEffect(() => {
    if (!data.gambar) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(data.gambar);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [data.gambar]);
  const [judulKampanye, setJudulKampanye] = useState();
  const gridRef = useRef();
  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows[0]) {
      setJudulKampanye(selectedRows[0].judul);
    }
  }, []);
  const onRowClicked = (e) => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows[0]) {
      setData("kampanye_id", selectedRows[0].id);
    }
  };
  const resetSelect = () => {
    gridRef.current.api.deselectAll();
    reset("kampanye_id");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8", children: !kampanyes.length == 0 ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { forInput: "gambarnow", value: "Gambar Berita" }),
      /* @__PURE__ */ jsx("img", { src: "/storage/" + berita.gambar, id: "gambarnow", className: "w-full h-56 md:h-96 rounded-md object-fill" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { forInput: "judul", value: "Judul Berita", className: "mt-4" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          placeholder: "Judul Berita ...",
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
          forInput: "isiberita",
          value: "Isi Berita",
          className: "mt-4"
        }
      ),
      /* @__PURE__ */ jsx(
        Editor,
        {
          id: "isiberita",
          tinymceScriptSrc: "../../../tinymce/tinymce.min.js",
          onInit: (evt, editor) => editorRef.current = editor,
          value: data.body,
          onEditorChange: (newValue, editor) => setData("body", newValue),
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
      /* @__PURE__ */ jsx(InputError, { message: errors.body, className: "mt-1" })
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
          id: "gambar",
          handleChange: (file) => {
            setData("gambar", file);
          },
          name: "file",
          types: ["JPG", "PNG", "JPEG"],
          hoverTitle: " ",
          children: /* @__PURE__ */ jsx("div", { className: "bg-white grid place-content-center h-48 rounded-lg", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: data.gambar ? `File ${data.gambar.name}` : `Klik untuk Unggah / Tarik File Kesini` }) }) })
        }
      ),
      data.gambar ? /* @__PURE__ */ jsx("button", { type: "button", className: "border border-white bg-slate-400", onClick: () => {
        reset("gambar");
      }, children: "Clear" }) : null,
      /* @__PURE__ */ jsx(InputError, { message: errors.gambar, className: "mt-1" }),
      data.gambar && /* @__PURE__ */ jsx("img", { src: preview, className: "w-full h-56 md:h-96 rounded-md object-fill" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-black", children: [
      "Kampanye Sekarang : ",
      berita.kampanye.judul
    ] }) }),
    /* @__PURE__ */ jsx(
      InputLabel,
      {
        forInput: "kampanye",
        value: "Pilih Kampanye",
        className: "mt-4"
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      TableBerita,
      {
        rowData: kampanyes,
        onSelectionChanged,
        gridRef,
        onRowClicked
      }
    ) }),
    /* @__PURE__ */ jsx(InputError, { message: errors.kampanye_id, className: "mt-1" }),
    data.kampanye_id && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-black", children: [
        "Kampanye Akan diubah menjadi : ",
        judulKampanye
      ] }),
      /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => resetSelect(), type: "button", children: "Reset Selection" })
    ] }),
    /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4", disabled: processing, children: "Ubah Berita" })
  ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-800 mb-4", children: "Belum Ada kampanye ..." }) }) }) }) });
}
export {
  Index as default
};
