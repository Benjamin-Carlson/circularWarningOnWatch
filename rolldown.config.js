import { defineConfig } from "rolldown";

export const baseOptions = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  checks: {
    circularDependency: true
  },
};

export default defineConfig(baseOptions);
