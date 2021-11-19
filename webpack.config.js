// Generated using webpack-cli https://github.com/webpack/webpack-cli
const PackageJSON = require('./package.json');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { resolve } = require('path');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;
const distDir = path.resolve(__dirname, `dist/${PackageJSON.primo.institution}-${PackageJSON.primo.vidId}`);

const config = {
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, `${distDir}/js`),
    filename: 'custom.js',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {from: "resources/general", to: distDir},
        {from: `resources/${PackageJSON.primo.institution}-${PackageJSON.primo.vidId}`, to: distDir}
      ]
    }),    

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            "plugins": [
              "import-directory",
              "@babel/plugin-transform-runtime"
            ],
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": "defaults"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(html)$/i,
        loader: "html-loader",
      },
      {
        test: /eth-openurl-interlibrary\.config/,
        use: [{
        loader: 'file-replace-loader',
        options: {
          condition: 'if-replacement-exists',
          replacement: path.resolve(__dirname, 'src/components/openUrlILL/openurl-ill.config.js'),
          async: true,
          progress: true
        }
      }]
      },
      
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};