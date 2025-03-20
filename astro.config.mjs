// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  output: "static", // Importante para GitHub Pages
  base: "/WebActi/", // ⚠️ Cambia "WebActi" por el nombre de tu repo en GitHub
  site: "https://ivanramirezz.github.io/WebActi/", // ⚠️ Cambia esto por tu URL de GitHub Pages

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }


});
