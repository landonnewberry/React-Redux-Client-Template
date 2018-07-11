var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: '/',
        sourceMapFilename: 'bundle.map'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }],
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                        loader: 'postcss-loader',
                        options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            }
       ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}