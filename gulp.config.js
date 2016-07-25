module.exports = function() {
	var config = {
		systemjs:'./Scripts/systemjs.config.js',
		css:'./css/*',
		clientTs: './Scripts/**/*.ts',
		nodeTs:'./server/**/*.ts',
		partials:'./Scripts/partials/*.html',
		tsOutputPath: './debug/client/'
	};
	
	return config;
}