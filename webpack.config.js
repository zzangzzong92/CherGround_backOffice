const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;

module.exports = (env, options) => {
  dotenv.config({
    path: `./env/${options.stage || "dev"}.env`,
  });

  return {
    // webpack will take the files from ./src/index
    entry: "./src/app/index",

    // and output it into /dist as bundle.js
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "bundle.js",
      publicPath: "/",
    },

    devtool: "source-map",
    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
      extensions: [".ts", ".tsx", ".js"],

      modules: [path.resolve("./node_modules"), path.resolve("./src")],
    },
    devServer: {
      historyApiFallback: true,
      host: "localhost",
      port: port,
      open: true,
    },
    module: {
      rules: [
        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.woff(2)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "./fonts/[name]-[hash].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "./fonts/[name]-[hash].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name]-[hash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                titleProp: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/app/index.html",
      }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ko/),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};
