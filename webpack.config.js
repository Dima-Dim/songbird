const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: path.join(__dirname, "src", "index.jsx"),
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.woff2$/,
          exclude: /node_modules/,
          use: {
            loader: "file-loader",
            options: {
              outputPatch: "fonts",
              name: `[name].[ext]`,
            },
          },
        },
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
    },
  }
};
