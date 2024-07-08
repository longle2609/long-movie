/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/banner.jpg')",
        container: {
          center: true,
        },
        colors: {
          form: "rgba(255, 255, 255, 255, 0.5)",
        },
      },
    },
    plugins: [],
  },
};
