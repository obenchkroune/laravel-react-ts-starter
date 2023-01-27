/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{ts,tsx,js,jsx,blade.php}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
