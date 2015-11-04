'use strict'

var Mocha = require('mocha');
var path = require('path');
var Metric = require('../metric')(function(pass, fail, metadata) {
	console.log("Pass: %d / Fail: %d", pass, fail);
	result.pass = pass;
	result.fail = fail;
	result.metadata = metadata;
});

var result = {
	pass: 0,
	fail: 0,
	metadata: {}
};

var clear = function() {
		result.pass = 0;
		result.fail = 0;
		result.metadata = {};
};

// One test file per dependency
// One Suite for the targeted micro service - One test per attribute to collect
// - kind
// - name
// - isHealthy
// - currentSetting
// - build
// - version
// One Suite per attribute to collect for the dependency
// - name
// - status
// - currentSetting
// - type
// - version

let dep1 = new Mocha({reporter: Metric});
dep1.addFile(path.join('lib/health/sla_tests', 'dep1.js'));

let dep2 = new Mocha({reporter: Metric});
dep2.addFile(path.join('lib/health/sla_tests', 'dep2.js'));

const sla = function() {

}

exports.run = function(callback) {
	
	//TODO run the tests for all the dependencies and consolidate the results before calling the callback.
	//TODO compile the status/isHealthy status based on the test results. (is isHealthy a function of the status of the dependencies ?)
	//TODO generate the proper json reply.
	//TODO add the local checks, read values from config options.

	dep1.run(function(){
		callback(result);
		clear();
	});

	dep2.run();
}

exports.sla = sla;

