import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/queue-statistics-compact.ts',
      name: 'QueueStatisticsCompact',
      fileName: () => 'index.js',
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
        format: 'iife',
        name: 'QueueStatisticsCompact',
        globals: {},
        extend: true
      }
    },
    sourcemap: false,
    minify: 'terser'
  }
});