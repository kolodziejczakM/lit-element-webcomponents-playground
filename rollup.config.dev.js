import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'build/index.js',
    output: {
        name: `bundleWs${Date.now()}`,
        file: 'public/assets/index.js',
        format: 'iife'
    },
    plugins: [resolve()]
};
