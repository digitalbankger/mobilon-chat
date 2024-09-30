const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm-bundler.js",
    },
    extensions: [".js", ".vue"],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
  },
};
