module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
    },
    optimization: {
        minimize: false,
      },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // css
            {
                test: /\.(scss|css)$/,
                use: ['css-loader', 'sass-loader'],
              },
        ],
    }
}