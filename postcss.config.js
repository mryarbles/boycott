module.exports = (ctx) => ({
	parser: ctx.sugar ? 'sugarss' : false,
	map: ctx.env === 'development' ? ctx.map : false,
	plugins: {
		'postcss-import': {},
		'postcss-nested': {},
		cssnano: ctx.env === 'production' ? {} : false
	}
});