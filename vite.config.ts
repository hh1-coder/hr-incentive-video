import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hr-incentive-video/",
  plugins: [react()],
  build: { outDir: "docs" },
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
});
