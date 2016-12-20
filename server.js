var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var ENV = require('./env');

console.log("server", ENV);


var server;


try {

	server = new WebpackDevServer(webpack(webpackConfig), {
		publicPath: webpackConfig.output.publicPath,
		hot: true,
		historyApiFallback: true,
		// It suppress error shown in console, so it has to be set to false.
		quiet: false,
		// It suppress everything except error, so it has to be set to false as well
		// to see success build.
		noInfo: false,
		stats: {
			// Config for minimal console.log mess.
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}).listen(3000, 'localhost', function (err) {
		if (err) {
			console.log(err);
		}

		console.log('Listening at localhost:3000');
	});

	console.log(server);
} catch(err){
	console.log("web server failed");
};

