const paths = require('./config').paths;
const IS_PRODUCTION = require('./config').IS_PRODUCTION;

const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.source,
  historyApiFallback: true,
  port: 3000,
  //proxy: { '/': 'http://localhost:8000'},
  compress: IS_PRODUCTION,
  inline: !IS_PRODUCTION,
  hot: false,
  host: '0.0.0.0',
  disableHostCheck: true, // To enable local network testing
  overlay: true,
  //headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: true,
  },
};

module.exports = {
  devServer,
};
