import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  // Configure the development server to proxy API requests to the backend server
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Adjust the path as needed
        changeOrigin: true,
      },
      "/auth": {
        target: "http://localhost:3000", // Adjust the path as needed
        changeOrigin: true,
      },
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
