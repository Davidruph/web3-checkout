import localFont from "next/font/local";

export const axiforma = localFont({
  src: [
    {
      path: "../public/fonts/axiforma/Axiforma-Thin.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "../public/fonts/axiforma/Axiforma-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/axiforma/Axiforma-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/axiforma/Axiforma-SemiBold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/axiforma/Axiforma-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/axiforma/Axiforma-Italic.woff2",
      weight: "400", // Or whatever weight it is
      style: "italic"
    }
  ],
  variable: "--font-axiforma",
  display: "swap"
});
