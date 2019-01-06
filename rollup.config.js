import { terser } from "rollup-plugin-terser";

export default {
    input: 'public/build/index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm'
    },
    external: ['@polymer/lit-element'],
    plugins: [terser()]
};
