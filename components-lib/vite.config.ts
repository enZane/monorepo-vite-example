// packages/components/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es"],
      fileName: (_, filename) => `${filename}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
