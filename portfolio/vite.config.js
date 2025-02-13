import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite looks in the correct directory
  build: {
    rollupOptions: {
      input: "./index.html", // Explicitly point to index.html
    },
    outDir: "dist",
  },
});
