var webpack = require('webpack');

module.exports = {
    entry: [
		'./src/index.js',
		'webpack-dev-server/client?http://0.0.0.0:4001',
	],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /mode_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
			{
				test: /\.png$/,
				loader: 'url-loader'
			}	
        ]
    },

	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
