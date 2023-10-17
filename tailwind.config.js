/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#22283b",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(0, 0, 0, 0.2)",
        },
        white: "#fff",
        lavender: "#cadbf5",
        lightslategray: "#8b9bb4",
        steelblue: "#0571ad",
      },
      spacing: {},
      fontFamily: {
        "baloo-bhai-2": "'Baloo Bhai 2'",
        "baloo-2": "'Baloo 2'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      xs: "12px",
      base: "16px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
