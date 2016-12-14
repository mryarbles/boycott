const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'www'),
};

console.log("ENV:",  ENV);


process.env.BABEL_ENV = ENV;

const common = {
	entry: PATHS.src,
	output: {
		path: PATHS.build,
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap',"sass?sourceMap"],
				include: PATHS.src,
			},
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: PATHS.src,
				exclude:/node_modules/,
				query: {
					presets: ["es2015","react"]
				}
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./node_modules")]
	}
};

if (ENV === 'development') {
	module.exports = merge(common, {
		devServer: {
			contentBase: PATHS.build,

			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			// Display only errors to reduce the amount of output.
			stats: 'errors-only',

			// Parse host and port from env so this is easy to customize.
			host: process.env.HOST,
			port: process.env.PORT,
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
		],
	});
} else {
	// config can be added here for minifying / etc
	module.exports = merge(common, {});
}
