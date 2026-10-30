import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // A port of its own: browsers key favicons, cache and storage by address,
  // so sharing Vite's default 5173 with other projects mixes them up.
  server: { port: 5280, strictPort: true },
  preview: { port: 5281, strictPort: true },
  build: {
    // Keep router/vendor code in its own chunk so page navigations
    // reuse the cached bundle instead of re-downloading React.
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
