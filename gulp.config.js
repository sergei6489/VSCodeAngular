module.exports = function() {
	var config = {
		systemjs:'./Scripts/systemjs.config.js',
		css:'./css/*',
		allTs: './Scripts/**/*.ts',
		partials:'./Scripts/partials/*.html',
		tsOutputPath: './debug/client/'
	};
	
	return config;
}