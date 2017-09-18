const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = process.env.PORT || 3000;

config.entry.app.push(
  'webpack-dev-server/client?http://0.0.0.0:' + port,
  'webpack/hot/only-dev-server'
);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  disableHostCheck: true,
  hot: true,
  stats: {
    colors: true,
  },
}).listen(port, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
