import * as esbuild from "esbuild";

// production build

let resultPro = await esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outfile: "./dist/index.pro.js",
  minify: true,
  format: "esm",
  platform: "browser",
  banner: {
    js: `// sdkVersion: ${process.env.npm_package_version}`,
  },
  drop: ["console", "debugger"],
  metafile: true,
});
console.log(await esbuild.analyzeMetafile(resultPro.metafile));

// development build

let resultDev = await esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  outfile: "./dist/index.dev.js",
  minify: false,
  format: "esm",
  platform: "browser",
  banner: {
    js: `// sdkVersion: ${process.env.npm_package_version}`,
  },
  sourcemap: true,
  metafile: true,
});
console.log(await esbuild.analyzeMetafile(resultDev.metafile));