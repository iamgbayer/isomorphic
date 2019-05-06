const webpack = require("webpack");

const PATH = require("./path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: `${PATH.source}/index.js`
  },

  output: {
    publicPath: "/",
    path: PATH.build
  },

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".css"],
    symlinks: true,
    alias: {
      "react-native$": "react-native-web",
      "@web": PATH.source,
      "@components": PATH.components
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              {
                plugins: ["@babel/plugin-syntax-dynamic-import"]
              }
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
              mimetype: "application/font-woff",
              name: "./fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`
    })
  ]
};
