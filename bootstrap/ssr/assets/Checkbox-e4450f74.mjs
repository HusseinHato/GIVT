import { a as jsx } from "../ssr.mjs";
function Checkbox({ name, value, handleChange, checked }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      name,
      value,
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500",
      onChange: (e) => handleChange(e),
      checked
    }
  );
}
export {
  Checkbox as C
};
