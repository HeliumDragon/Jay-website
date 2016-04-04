module.exports = {
  entry: [ 'bootstrap-loader', './src/main.js' ],
  output: {
    path: './src/',
    filename: './dist/main.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3232
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: "raw"
      }
    ]
  }
};
