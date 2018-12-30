module.exports = {
    entry: {
        main: [
            './src/index.js',
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        '@polymer/lit-element': 'LitElement'
    }
};
