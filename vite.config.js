import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Lets Vite read JSX inside .js files (App.js, Home.js, ...).
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
});
