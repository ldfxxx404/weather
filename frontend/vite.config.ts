import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env.VITE_WEATHER_API_KEY": JSON.stringify(
      process.env.VITE_WEATHER_API_KEY,
    ),
  },
});
