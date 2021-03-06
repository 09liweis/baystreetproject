module.exports = {
  context: __dirname + "/src",
  entry: {
    index: "./index.js",
    login: "./login.js",
    detail: "./detail.js",
    stats: "./stats.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}