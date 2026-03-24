const buildOptions = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
};

export default [buildOptions];
