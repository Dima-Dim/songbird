const path = require("path");
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const config = (argv) => {
  let buildHash = "";
  let buildTimestamp = "";
  let domainForMainData = "";
  let commitSHA = "";

  if (argv.env) {
    buildHash = "BUILD_HASH" in argv.env ? argv.env.BUILD_HASH : "";
    buildTimestamp = "BUILD_TIMESTAMP" in argv.env ? argv.env.BUILD_TIMESTAMP : "";
    domainForMainData = "DOMAIN_FOR_MAIN_DATA" in argv.env ? argv.env.DOMAIN_FOR_MAIN_DATA : "";
    commitSHA = "COMMIT_SHA" in argv.env ? argv.env.COMMIT_SHA : "";
  }

  const envKeys = {
    NODE_ENV: JSON.stringify(`production`),
    BACK_ENV: JSON.stringify(`production`),
    BUILD_HASH: JSON.stringify(buildHash),
    BUILD_TIMESTAMP: JSON.stringify(buildTimestamp),
    DOMAIN_FOR_MAIN_DATA: JSON.stringify(domainForMainData),
    COMMIT_SHA: JSON.stringify(commitSHA),
  };

  return {
    mode: "production",
    output: {
      path: path.join(__dirname, "prod"),
      filename: `bundle-${buildHash}.js`,
      publicPath: "",
    },
    plugins: [
      new webpack.DefinePlugin(
        {
          "process.env": envKeys,
        }
      ),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(
        {
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          },
          template: path.join(__dirname, "src", "index.html"),
        },
      ),
      new MiniCssExtractPlugin(
        {
          filename: `main-${buildHash}.css`,
        },
      ),
      new SpriteLoaderPlugin(
        {
          plainSprite: true,
        },
      )
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
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader", // translates CSS into CommonJS modules
            },
            {
              loader: "postcss-loader", // Run postcss actions
              options: {
                plugins: [require("autoprefixer")],
              },
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ]
        },
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(
          {
            exclude: /node_modules/,
            parallel: true,
            sourceMap: false,
            extractComments: false,
            terserOptions: {
              output: {
                comments: false,
              }
            }
          }
        ),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  }
};

module.exports = (env, argv) => {
  return merge(baseConfig(), config(argv));
};
