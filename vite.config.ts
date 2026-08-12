import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/queue-statistics-modern.ts',
      name: 'QueueStatisticsModern',
      fileName: () => 'index.js',
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
        format: 'iife',
        name: 'QueueStatisticsModern',
        globals: {},
        extend: true
      }
    },
    sourcemap: false,
    minify: 'terser'
  }
});