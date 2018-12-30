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
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    },
    externals: {
        '@polymer/lit-element': 'LitElement'
    },
    output: {
        libraryTarget: 'commonjs2',
    }
};
