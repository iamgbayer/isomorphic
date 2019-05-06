const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const PATH = require("./path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/",
    contentBase: PATH.build,
    historyApiFallback: true,
    port: 9000
  }
});
