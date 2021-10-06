module.exports = (env) => {
  return {
    mode: env.mode,
    devServer: {
      static: {
        directory: __dirname
      },
      devMiddleware: {
        publicPath: '/dist',
      }
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
}
