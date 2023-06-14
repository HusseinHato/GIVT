import { a as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-96f9bcc8.mjs";
function CardLink({ href, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      children: /* @__PURE__ */ jsx(PrimaryButton, { children })
    }
  );
}
export {
  CardLink as C
};
