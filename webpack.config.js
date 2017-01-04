const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let percentage = 0;
/**
 * ENVIRONMENT
 */
const ENV = require('./env');

process.env.BABEL_ENV = ENV;

/**
 * PLUGINS
 */
let pluginsArr = [
	new HtmlWebpackPlugin({
		template: './index.tpl.html',
		inject: 'body',
		filename: 'index.html'
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.ProgressPlugin(function(per, msg){
		if(per - percentage >= .1) {
			percentage = per;
			console.log("completed:", Math.round(percentage * 100) + "%");
		} else if(per === 1) {
			console.log("build complete");
		}

	}),
	new ExtractTextPlugin('css/[name]-[hash:6].css')
];
if(ENV === 'production') {
	pluginsArr.push(new webpack.optimize.DedupePlugin()); // strips out duplicate code
	pluginsArr.push(new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: true})); // uglify
} else {
	pluginsArr.push(new webpack.HotModuleReplacementPlugin());
	pluginsArr.push(new webpack.NoErrorsPlugin());
	pluginsArr.push(new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}));
}

/**
 * LOADERS
 */

let loadersConfig = {
	js:{
		test: /\.jsx?$/,
		loaders: ['babel'],
		exclude: /node_modules/
	},
	json: {
		test: /\.json?$/,
		loader: 'json'
	},
	sass: {
		dev: {
			test: /\.scss$/,
			exclude: [/node_modules/], // sassLoader will include node_modules explicitly.
			loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
		},
		prod:{
			test: /\.scss$/,
			exclude: [/node_modules/], // sassLoader will include node_modules explicitly.
			// we extract the styles into their own .css file instead of having
			// them inside the js.
			loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
		}
	},
	woff: {
		test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
		loader: 'url?limit=10000&mimetype=application/font-woff'
	},
	img:  {
		test: /\.(png|jpg)(\?[a-z0-9#=&.]+)?$/,
		loader: 'url?limit=10000&name=img-[hash:6].[ext]'
	},
	favicon:{
		test: /favicon\.ico$/,
		loader: 'url?limit=1&name=[name].[ext]'
	},
	fonts:{
		test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
		loader: 'file'
	}

};

let loadersArr;

if(ENV === 'production') {
	loadersArr = [loadersConfig.js, loadersConfig.json, loadersConfig.sass.prod, loadersConfig.woff, loadersConfig.img,loadersConfig.fonts, loadersConfig.favicon];
} else {
	loadersArr = [loadersConfig.js, loadersConfig.json, loadersConfig.sass.dev, loadersConfig.woff, loadersConfig.img,loadersConfig.fonts, loadersConfig.favicon];
}

/**
 * CONFIGURATION
 */
const common = {
	context: path.join(__dirname, 'src'),
	devtool: ENV !== 'production' ? 'eval-source-map': null,
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		'./index.jsx'
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: '[name]-[hash:6].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
	},
	plugins: pluginsArr,
	module: {
		loaders: loadersArr
	},
	watch: true,
	postcss: [
		require('autoprefixer')
	],
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./node_modules")]
	}
};


module.exports = common;