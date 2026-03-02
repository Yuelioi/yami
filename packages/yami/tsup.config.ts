import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "plugins/index": "src/plugins/index.ts",
    "plugins/dropdown": "src/plugins/dropdown.ts",
    "plugins/modal": "src/plugins/modal.ts",
    "plugins/popover": "src/plugins/popover.ts",
    "plugins/sidebar": "src/plugins/sidebar.ts",
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
});
