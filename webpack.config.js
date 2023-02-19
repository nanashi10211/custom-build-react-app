/**
 * Configure webpack
 */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry point of apps
    entry: "./src/index.js", 
    // build output of apps
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './src/bundle.js',
    },
    // html taplating
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}