module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-mocha-cli');
	grunt.initConfig({
		express: {
			dev: {
			  options: {
				script: 'app/server.js'
			  }
			}
		},
		mochacli: {
			options: {
				require: ['chai', './spec/support/helper'],
				reporter: 'nyan'
			},
			all: ['spec/unit/**/**.spec.js'],

		}
	});
	grunt.registerTask('server', ['express:dev']);
	grunt.registerTask('test', ['mochacli']);
};
