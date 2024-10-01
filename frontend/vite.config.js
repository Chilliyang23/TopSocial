import { defineConfig } from 'vite'
import path from 'path'
// The path module is a built-in Node.js module that provides 
// utilities for working with file and directory paths.

export default defineConfig({
  // ...
  server: {
    port: 3000
  },
  resolve: {
    alias: {
        "@": path.resolve(__dirname, '/src') 
    }
    // alias: { "@": path.resolve(__dirname, '/src') } defines an alias @ 
    // that points to the /src directory in your project. When you import 
    // a module using @/someModule, Vite will resolve it to the full path 
    // of the /src/someModule.
  }
})