const helpers = require('./helpers'),
  webpackConfig = require('./webpack.config.base'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');

webpackConfig.module.rules = [
  ...webpackConfig.module.rules,
  {
    test: /\.(scss|css)$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ]
  },

  /* Not using 
   {
        test: /\.html$/,
        loader: 'vue-template-loader',
       options: {
          transformToRequire: {
            // The key should be an element name
            // The value should be an attribute name or an array of attribute names
            //img: 'src'
          }
         }
      },*/
  {
    test: /\.vue$/,
    loader: 'vue-loader'

  },
  {
    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
  },
  {
    test: /\.(json)$/,
    loader: 'file-loader'
  }

];


webpackConfig.plugins = [
  ...webpackConfig.plugins,

  // Simplifies creation of HTML files to serve your webpack bundles.
  // https://github.com/jantimon/html-webpack-plugin
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),

    /*Not using
    favicon: helpers.root('/src/favicon.ico')
    */
  }),
  new DefinePlugin({
    'process.env': env
  })
];

// https://webpack.js.org/configuration/dev-server/
webpackConfig.devServer = {
  port: 8080,
  host: 'localhost',
  historyApiFallback: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  contentBase: './src',
  open: true
};

module.exports = webpackConfig;
