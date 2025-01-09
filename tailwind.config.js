/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "hsla(var(--primary-color), var(--tw-bg-opacity))",
        "primary-color-light": "hsla(var(--primary-color-light), var(--tw-bg-opacity))",
        "primary-color-medium": "hsla(var(--primary-color-medium), var(--tw-bg-opacity))",
        "accent-color": "hsla(var(--accent-color), var(--tw-bg-opacity))",
        
      },
    },
  },
  plugins: [],
}

