import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite looks in the correct directory
  build: {
    outDir: "dist", // Set the output directory to 'dist'
  },
});
