const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const port = process.env.PORT || 3000;

config.entry.push(
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server'
);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './',
  hot: true,
  quiet: false,
}).listen(port, function(err) {
  console.log(err ? err : 'Listening at localhost:' + port);
});
