const path = require("path");
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config");

const config = () => {
  const envKeys = {
    NODE_ENV: JSON.stringify("development"),
    BACK_ENV: JSON.stringify("development"),
  };

  return {
    mode: "development",
    output: {
      path: path.join(__dirname, "public"),
      filename: `[name].bundle.js`,
      sourceMapFilename: `[file].map`,
      publicPath: "/",
    },
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 8081,
      compress: false,
      watchContentBase: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin(
        {
          "process.env": envKeys,
        },
      ),
    ],
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-sprite-loader",
            },
            "svg-transform-loader",
            "svgo-loader",
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: "style-loader", // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS modules
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader", // Run postcss actions
              options: {
                plugins: [
                  require("autoprefixer"),
                ],
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  }
};

module.exports = (env, argv) => {
  return merge(baseConfig(), config(argv));
};
