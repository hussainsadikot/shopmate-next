/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 ફેરફાર અહીં છે (નવું નામ)
    autoprefixer: {},
  },
};

export default config;