const path = require("path");
const MediaQueryPlugin = require("media-query-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [
        path.resolve(__dirname, 'index.tsx')
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name][contenthash].js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    target: "web",
    devServer: {
        port: "3000",
        historyApiFallback: true,
        static: path.join(__dirname, "public"),
        open: true,
        hot: true,
        compress: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules|\.d\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        },
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    MediaQueryPlugin.loader,
                    "sass-loader",
                ],
                exclude: /\.module\.scss$/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Cocktails",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};
