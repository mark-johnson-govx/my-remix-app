import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import remixConfig from "./remix.config";

export default defineConfig({
  plugins: [remixConfig, tsconfigPaths()],
});
