const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
     entry: './script2.js',
     output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
     },
     plugins:[
        new HTMLWebpackPlugin({
            template: './index2.html'
        })
     ],
     module:{
        rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
     },
     devServer: {
        port: 4200
     }
}