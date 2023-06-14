import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { Alert, Card, CardHeader, Typography, CardBody, Input, CardFooter, Button } from "@material-tailwind/react";
import { useForm, usePage, Head } from "@inertiajs/react";
import { useEffect } from "react";
import { I as InputError } from "./InputError-475c5bd7.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function SignIn() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("adminLoginPost"));
  };
  const { flash } = usePage().props;
  console.log(flash);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Login" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 h-full w-full bg-black/20" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-4", children: [
      flash.message && /* @__PURE__ */ jsx(Alert, { color: "blue", children: flash.message }),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs(Card, { className: "absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4", children: [
        /* @__PURE__ */ jsx(
          CardHeader,
          {
            variant: "gradient",
            color: "blue",
            className: "mb-4 grid h-28 place-items-center",
            children: /* @__PURE__ */ jsx(Typography, { variant: "h3", color: "white", children: "Admin Log In" })
          }
        ),
        /* @__PURE__ */ jsxs(CardBody, { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx(Input, { onChange: (e) => onHandleChange(e), className: "focus:ring-0", type: "email", label: "Email", size: "lg", name: "email" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
          /* @__PURE__ */ jsx(Input, { onChange: (e) => onHandleChange(e), className: "focus:ring-0", type: "password", label: "Password", size: "lg", name: "password" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "pt-0", children: /* @__PURE__ */ jsx(Button, { type: "submit", onClick: (e) => submit(e), variant: "gradient", fullWidth: true, children: "Log In" }) })
      ] }) })
    ] })
  ] });
}
export {
  SignIn as default
};
