/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@axelarjs/ui/preset")],
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/compounds/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
};