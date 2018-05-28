const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

dotenv.config();

const host = 'localhost';
const port = 8000;
const sourcePath = path.join(__dirname, './src');
const buildDirectory = path.join(__dirname, './build');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = (env) => {
  const mode = env || 'development';
  const htmlTemplate = 'index.ejs';

  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: htmlTemplate,
      inject: true,
      production: false,
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      new UglifyJsPlugin(),
      new CompressionPlugin(),
      new BundleAnalyzerPlugin()
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  const cssLoader = [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        module: true,
        localIdentName: '[path][name]-[local]',
      }
    },
    {
      loader: 'sass-loader',
      options: {
        outputStyle: 'expanded',
        sourceMap: false,
        includePaths: [sourcePath],
      }
    }
  ];

  const entryPoint = mode === 'development' ?
    [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${host}:${port}`,
      'webpack/hot/only-dev-server',
      './index.js',
    ] :
    './index.js';

  return {
    mode,
    devtool: mode === 'development' ? 'cheap-module-source-map' : '',
    context: sourcePath,
    entry: {
      main: entryPoint,
      vendor: ['babel-polyfill', 'react', 'react-dom', 'redux']
    },
    output: {
      path: buildDirectory,
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.png$/,
          exclude: /node_modules/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]'
            },
          },
        },
        {
          test: /\.(html|svg|jpe?g|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        }
      ]
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
    },

    plugins,

    stats,
    performance: {
      hints: false
    },

    devServer: {
      contentBase: './src',
      publicPath: '/',
      historyApiFallback: true,
      port,
      host,
      hot: true,
      compress: false,
      stats,
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300
      }
    },
  };
};
