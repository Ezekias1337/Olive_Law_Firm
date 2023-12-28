/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const configObject = {
  plugins: [react()],
  base: "/",
  /* base: "/Olive_Law_Firm/", */
};

export default defineConfig(configObject);
