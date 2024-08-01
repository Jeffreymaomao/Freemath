const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|otf|eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name][ext][query]'
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/js/jquery-3.7.1.min.js', to: 'js/jquery-3.7.1.min.js' },
                { from: 'src/js/mathquill-0.10.1.min.js', to: 'js/mathquill-0.10.1.min.js' }
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    },
    performance: {
        hints: false,
    },
};
