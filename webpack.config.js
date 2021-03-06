const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/bundle.js",
    },

    devServer: {
        contentBase: "./dist",
    },

    //plugins

    plugins: [
        new HtmlWebpackPlugin({
            title: "Forkify",
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],

    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss?$/,
                use: ["style-loader"],
            },
        ],
    },
};