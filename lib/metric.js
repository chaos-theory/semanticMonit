'use strict'

var Base = require('mocha/lib/reporters/base'),
	EventEmitter = require('events').EventEmitter;

module.exports = function(logger) {

	function Metric(runner) {
		var passes = 0;
		var failures = 0;
		var metadata = {};

		// One test suite per dependency.
		// Return dependency status on Suite end via the passed in reporter function.
		// var 

		runner.on('pass', function(test) {
			passes++;
			console.log('pass: %s', test.fullTitle());
			// console.log('blob: %s', test.blob);
		});

		runner.on('fail', function(test, err) {
			failures++;
			console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
		});

		runner.on('suite', function(suite) {
			console.log('suite: %s', suite.title);
		});

		runner.on('suite end', function(suite) {
			try {

				// Extract the metadata. Recover the suite title.
				metadata = JSON.parse(suite.fullTitle(), function(key, value) {
					if (key === 'title') {suite.title = value; return;}
					return value;
				});
				
				console.log(metadata);
			} catch(e) {
				console.log('--- ' + suite.fullTitle());
			}			
		});

		runner.on('end', function() {
			console.log('end: %d/%d', passes, passes + failures);
			logger(passes, failures, metadata);
			passes = 0;
			failures = 0;
			metadata = {};
		});
	}

	return Metric;	
}

