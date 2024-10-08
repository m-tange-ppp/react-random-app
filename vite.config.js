import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: process.env.GITHUB_PAGES
        ? "react-random-app" // リポジトリ名
        : "./",
    plugins: [react()],
});