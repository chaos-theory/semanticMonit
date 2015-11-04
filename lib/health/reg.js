'use strict'

var Mocha = require('mocha');
var path = require('path');
var Metric = require('../metric')(function(pass, fail) {
	console.log("Pass: %d / Fail: %d", pass, fail);
	result.pass = pass;
	result.fail = fail;
});

var result = {
	pass: 0,
	fail: 0
};

let mocha = new Mocha({reporter: Metric});
mocha.addFile(path.join('lib/health/reg_tests', 'test.js'));

const reg = function() {

}

exports.run = function(callback) {
	mocha.run(function(){
		callback(result);
	});		
}

exports.reg = reg;

