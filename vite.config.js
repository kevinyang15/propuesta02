import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, copyFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const jsonFiles = ["followers.json", "post.json"];

function serveJsonFromRoot() {
  return {
    name: "serve-root-json",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const cleanUrl = req.url.split("?")[0];
        const fileName = jsonFiles.find((file) => `/${file}` === cleanUrl);
        if (!fileName) return next();

        const filePath = resolve(server.config.root, fileName);
        if (!existsSync(filePath)) return next();

        res.setHeader("Content-Type", "application/json");
        res.end(readFileSync(filePath, "utf-8"));
      });
    }
  };
}

function copyJsonToDist() {
  return {
    name: "copy-json-to-dist",
    closeBundle() {
      const distDir = resolve(process.cwd(), "dist");
      jsonFiles.forEach((file) => {
        const source = resolve(process.cwd(), file);
        const target = resolve(distDir, file);
        if (existsSync(source) && existsSync(distDir)) {
          copyFileSync(source, target);
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), serveJsonFromRoot(), copyJsonToDist()]
});
