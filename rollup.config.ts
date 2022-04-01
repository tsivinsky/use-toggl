import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
});
