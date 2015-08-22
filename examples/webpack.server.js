const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const port = process.env.PORT || 3000;

config.entry.app.push(
  'webpack-dev-server/client?http://0.0.0.0:' + port,
  'webpack/hot/only-dev-server'
);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './',
  hot: true,
  quiet: false,
  stats: {
    colors: true,
  },
}).listen(port, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
