import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      }),
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
