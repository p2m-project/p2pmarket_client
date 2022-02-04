module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        c3n7lyTheme: {
          primary: "#1A56DB",
          "primary-focus": "#1C64F2",
          "primary-content": "#ffffff",

          secondary: "#f6d860",
          "secondary-focus": "#f3cc30",
          "secondary-content": "#ffffff",

          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",

          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#374151",
          "base-200": "#1F2937",
          "base-300": "#111827",
          "base-content": "#ffffff",

          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
