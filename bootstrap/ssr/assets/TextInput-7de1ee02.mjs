import { a as jsx } from "../ssr.mjs";
import { forwardRef, useRef, useEffect } from "react";
const TextInput = forwardRef(function TextInput2({ type = "text", name, id, value, className, autoComplete, required, isFocused, placeholder, handleChange, disabled }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      placeholder,
      type,
      name,
      id,
      value,
      className: `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className,
      ref: input,
      autoComplete,
      required,
      disabled,
      onChange: (e) => handleChange(e)
    }
  ) });
});
export {
  TextInput as T
};
