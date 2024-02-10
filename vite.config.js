import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // pass process.env to the client-side code
    "process.env": process.env,
  },
});

dotenv.config();
