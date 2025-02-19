// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Simula un navegador
    setupFiles: "./src/test/setup.ts", // Archivo de configuración opcional
    coverage: {
      provider: "v8", // Usa c8 para el reporte de cobertura
      reporter: ["text", "lcov"], // Muestra en consola y genera un archivo HTML
    },
  },
});
