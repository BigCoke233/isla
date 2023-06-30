/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app.html',
    './src/**/*.{html,js,svelte,ts,md}',
    './src/routes/blog/posts.*.{md,js,svelte}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};