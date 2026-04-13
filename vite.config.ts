import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * figmaAssetPlugin — resolves virtual "figma:asset/FILENAME" imports
 * to actual files inside /src/assets/.
 *
 * Place every image referenced in the code into /src/assets/
 * using the exact filename shown in each import.
 * See /src/assets/IMAGES.md for the full list.
 */
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
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  base: '/camuazu-portal',
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
