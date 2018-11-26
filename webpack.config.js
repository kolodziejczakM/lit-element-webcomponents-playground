module.exports = {
    entry: {
        main: [
            '@polymer/lit-element/lit-element',
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
    }
};
