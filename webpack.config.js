const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: { 
        bundle: [
            path.resolve(srcPath, 'index.tsx'),
            'url-search-params-polyfill',
        ]
    }, 
    target: !isProd ? 'web' : 'browserslist',
    devtool: isProd? 'hidden-source-map' : 'eval-source-map',
    output: {
        path: buildPath,
        filename: isProd ? "bundle-[hash].js" : "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        !isProd && new ReactRefreshWebpackPlugin(),
        isProd && new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
        }),
        new TsCheckerPlugin ()
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', 
                    'postcss-loader'
                ],
            },
            {
                test: /\.[tj]sx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
        alias: {
            '@components': path.join(srcPath, 'components'),
            '@containers': path.join(srcPath, 'containers'),
            '@pages': path.join(srcPath, 'pages'),
            '@store': path.join(srcPath, 'store'),
            '@utils': path.join(srcPath, 'utils'),
            '@assets': path.join(srcPath, 'assets'),
            '@api': path.join(srcPath, 'api')
        }
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        historyApiFallback: true
    }
}