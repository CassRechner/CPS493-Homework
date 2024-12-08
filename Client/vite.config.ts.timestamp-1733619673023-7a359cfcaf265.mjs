// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueRouter from "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.24.0_vue-router@4.4.5_vue@3.5.12_typescript@5.5.4___vue@3.5.12_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/node_modules/.pnpm/vite@5.4.9_@types+node@20.16.13_sass@1.80.3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.9_@types+node@20.16.13_sass@1.80.3__vue@3.5.12_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.9_@types+node@20.16.13_sass@1.80.3__vue@3.5.12_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/node_modules/.pnpm/vite-plugin-vue-devtools@7.5.2_rollup@4.24.0_vite@5.4.9_@types+node@20.16.13_sass@1.80.3__vue@3.5.12_typescript@5.5.4_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/epicd/Documents/Fall2024/CPS493/GitHub/CPS493-Homework/Client/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      logs: true,
      routesFolder: [
        {
          src: "src/pages"
        }
      ]
    }),
    vue(),
    vueJsx(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: "./",
  build: {
    outDir: "../Server/dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxlcGljZFxcXFxEb2N1bWVudHNcXFxcRmFsbDIwMjRcXFxcQ1BTNDkzXFxcXEdpdEh1YlxcXFxDUFM0OTMtSG9tZXdvcmtcXFxcQ2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxlcGljZFxcXFxEb2N1bWVudHNcXFxcRmFsbDIwMjRcXFxcQ1BTNDkzXFxcXEdpdEh1YlxcXFxDUFM0OTMtSG9tZXdvcmtcXFxcQ2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9lcGljZC9Eb2N1bWVudHMvRmFsbDIwMjQvQ1BTNDkzL0dpdEh1Yi9DUFM0OTMtSG9tZXdvcmsvQ2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGxvZ3M6IHRydWUsXG4gICAgICByb3V0ZXNGb2xkZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJ3NyYy9wYWdlcycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJhc2U6ICcuLycsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vU2VydmVyL2Rpc3QnXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNaLFNBQVMsZUFBZSxXQUFXO0FBRXpiLE9BQU8sZUFBZTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBTjZPLElBQU0sMkNBQTJDO0FBU3RULElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxRQUNaO0FBQUEsVUFDRSxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
