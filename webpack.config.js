const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            test: /\.css$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    query: {
                        modules: true,
                    }
                }]
          }
        ]
      },
      resolve: { 
          extensions: ["*", ".js", ".jsx"], 
          alias: {
			Components: path.resolve(__dirname, "src/components"),
			Styles: path.resolve(__dirname, "src/styles"),
			Layouts: path.resolve(__dirname, "src/layouts")
		}},
      output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "main.bundle.js"
      },
      devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
      },
      plugins: [new webpack.HotModuleReplacementPlugin()]
}