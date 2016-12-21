const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = require('./env');
const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'www'),
};

console.log("ENV:",  ENV);
console.log("PATHS:",   PATHS);


process.env.BABEL_ENV = ENV;

const common = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(PATHS.src, './index.jsx')
	],
	output: {
		path: PATHS.build,
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.json?$/,
				loader: 'json'
			},
			{
				test: /\.scss$/,
				exclude: [/node_modules/], // sassLoader will include node_modules explicitly.
				loaders: ['style', 'css?sourceMap',"sass?sourceMap"],
				include: PATHS.src,
			},
			{
				test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			}, {
				test: /\.(png|jpg)(\?[a-z0-9#=&.]+)?$/,
				loader: 'url?limit=10000&name=img-[hash:6].[ext]'
			}, {
				test: /favicon\.ico$/,
				loader: 'url?limit=1&name=[name].[ext]'
			}, {
				test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
				loader: 'file'
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./node_modules")]
	}
};


module.exports = common;