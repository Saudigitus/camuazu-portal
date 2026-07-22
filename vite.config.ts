import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetPlugin() {
  const prefix = 'figma:asset/'
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith(prefix)) {
        const filename = id.slice(prefix.length)
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
    load(id: string) {
      if (!id.startsWith(prefix)) return null
      const source = fs.readFileSync(id)
      const refId = this.emitFile({
        type: 'asset',
        name: path.basename(id),
        source,
      })
      return `export default import.meta.ROLLUP_FILE_ASSET_REFERENCE_URL_${refId}`
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  base: '/camuazo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion'],
        },
      },
    },
  },
})
