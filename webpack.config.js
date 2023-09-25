const path = require("path");
const MediaQueryPlugin = require("media-query-plugin");

module.exports = {
    mode: "development",
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        historyApiFallback: true,
        open: true,
        hot: true,
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
                exclude: /node_modules|\.d\.ts$/, // this line as well
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false, // this option will solve the issue
                        },
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    MediaQueryPlugin.loader,
                    "sass-loader",
                ],
                include: /\.module\.scss$/,
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
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
};
