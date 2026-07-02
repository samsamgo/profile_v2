import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/profile_v2/",
  plugins: [react()],
});
