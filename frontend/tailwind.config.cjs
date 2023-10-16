/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "serif"],
      "roboto-slab": ["Roboto Slab", "sans-serif"],
      inter: ["Inter", "serif"],
      "sf-mono": [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
      monospace: ["monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      semibold: "500",
      extrabold: "600",
      bold: "700",
    },
    extend: {
      colors: {
        "cluster-list": "#3d4048",
        body: "#3d4048",
        dark: "#3d4048",
        "tab-color": "#3B3D45",
        primary: "#76b900",
        secondary: "#ECEFF2",
        muted: "#707583",
        error: {
          "border-color": "#DC3545",
          background: "#F9D7DA",
          color: "#842029",
        },
        failed: "#FC1683",
        deployed: "#76b900",
        superseded: "#9195A1",
        pending: "#5AB0FF",
        danger: "#ff0072",
        "text-danger": "#FC1683",
        "text-warning": "#ffc107",
        "text-success": "#A4F8D7",
        upgradable: "#76b900",
        warning: "#ffa800",
        success: "#76b900",
        "border-deployed": "#76b900",
        "revision-light": "#DCDDDF",
        "revision-dark": "#007bff",
        "installed-charts-filter": "#dad8ce",
        dropdown: "#E9ECEF",
        "chart-values": "#ECEFF2",
        "add-repo": "#0b5ed7",
        "link-color": "#0D6EFD ",
        "body-background": "#F4F7FA",
        repository: "#D6EFFE",
        revision: "#D6EFFE",
        "header-install": "#ebf3da",
        "upgrade-color": "#FC1683",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],

  fontFamily: {
    sans: ["Roboto", "Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
};
