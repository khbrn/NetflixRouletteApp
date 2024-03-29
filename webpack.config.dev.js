const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  watch: true,
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, "dev"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    allowedHosts: path.join(__dirname, "./dev"),
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
