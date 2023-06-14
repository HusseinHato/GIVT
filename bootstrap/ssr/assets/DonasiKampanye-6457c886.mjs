import { a as jsx, j as jsxs } from "../ssr.mjs";
import { Card, CardBody, Typography } from "@material-tailwind/react";
function DonasiKampanye({ donasi }) {
  const numberFormat = (value) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
  return /* @__PURE__ */ jsx(Card, { className: "w-full mb-2", children: /* @__PURE__ */ jsxs(CardBody, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h5", color: "blue-gray", className: "mb-2", children: donasi.nama }),
    /* @__PURE__ */ jsxs(Typography, { children: [
      "Jumlah : ",
      numberFormat(donasi.jumlah)
    ] }),
    donasi.doa && /* @__PURE__ */ jsxs(Typography, { variant: "h6", children: [
      "Doa : ",
      donasi.doa,
      "s"
    ] })
  ] }) });
}
export {
  DonasiKampanye as D
};
