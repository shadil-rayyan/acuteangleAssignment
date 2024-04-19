/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "colors-bluedark": "#0a84ff",
        cornflowerblue: "#249eff",
        black: "#000",
        "gradient-blue-gradient-19": "#00d2ff",
        "gradient-orange-gradient-10": "#e65c00",
        "gradient-red-gradient-9": "#ec008c",
        lightskyblue: {
          "100": "#94bffd",
          "200": "#94befd",
        },
        steelblue: {
          "100": "#549cd1",
          "200": "#3b83b7",
        },
        gray: {
          "100": "#838383",
          "200": "#7e7e7e",
          "300": "#202224",
          "400": "#111827",
        },
        darkslategray: "#253d4e",
        royalblue: "#0d6efd",
        dodgerblue: "#3394ff",
        whitesmoke: {
          "100": "#f9f9fa",
          "200": "#f8f8f8",
          "300": "#ececec",
        },
        darkgray: "#adadad",
        silver: "#b6b6b6",
        hotpink: "#f74b81",
        mediumseagreen: "#3bb77e",
        honeydew: "#def9ec",
        ghostwhite: "#f4f6fa",
        paleturquoise: "#bce3c9",
        "font-subtext": "#7d7d7d",
        lightgray: "#d5d5d5",
        crimson: "#ea0234",
        "typography-2": "#555f7e",
        "typography-3": "#8e95a9",
        "typography-1": "#1c2a53",
        "brand-color-3": "#ff392b",
        "essential-5": "#2f80ed",
        "line-2": "#cdd1de",
        "essential-4": "#00c3f8",
        brown: "#9b2828",
        red: "#ff2424",
        lightsteelblue: "#a0aec0",
      },
      spacing: {},
      fontFamily: {
        "table-field": "Roboto",
        quicksand: "Quicksand",
        lato: "Lato",
        "nunito-sans": "'Nunito Sans'",
        inter: "Inter",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
        "31xl": "50px",
        "3xs": "10px",
        "11xl": "30px",
        "3xl-5": "22.5px",
        "8xs": "5px",
        sm: "14px",
        "45xl": "64px",
        "29xl": "48px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xs: "12px",
      lgi: "19px",
      sm: "14px",
      "7xl": "26px",
      "11xl": "30px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      mini: "15px",
      smi: "13px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
