import { Abril_Fatface, Charis_SIL } from "next/font/google";

export const abril = Abril_Fatface({
  weight: ["400"],
  variable: "--heading",
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
});

export const charis = Charis_SIL({
  weight: ["400", "700"],
  variable: "--body",
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
});
