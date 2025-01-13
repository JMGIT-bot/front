import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { API_URL, LOCAL_API_URL } from "./src/constants/common";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    css: {
        postcss: "./postcss.config.cjs", // 명시적으로 설정 경로를 지정
    },
    plugins: [vue()],
    server: {
        proxy: {
            "/api": {
                target: API_URL, // 로컬 서버 주소
                changeOrigin: true,
                secure: false, // 자체 서명된 인증서가 있는 경우 false로 설정
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            output: {
                // Set the location for JS files in the 'assets/js' folder
                entryFileNames: "js/[name]-[hash].js",
                chunkFileNames: "js/[name]-[hash].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        return "css/[name]-[hash][extname]"; // CSS files in the 'assets/css' folder
                    }
                    return "images/[name]-[hash][extname]"; // Images in the 'assets/images' folder
                },
            },
        },
    },
});
