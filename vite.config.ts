import react from '@vitejs/plugin-react'
import { defineConfig } from "vite"
import { qrcode } from "vite-plugin-qrcode"
import path from "node:path"
import rune from "rune-sdk/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qrcode(),
    rune({
      logicPath: path.resolve("./src/logic.ts"),
      minifyLogic: false, 
      ignoredDependencies: [],
    }),
    react(),

  ],
})
