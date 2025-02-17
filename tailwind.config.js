/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e02e88",
        iconBg: "#f0f2f5",
        bgPrimary: "#f5f7fa",
        grayText: "#b1b1b1",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
    },
  },
  plugins: [],
};
