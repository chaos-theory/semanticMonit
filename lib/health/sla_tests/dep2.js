var assert = require('assert');

describe('Array', function() {
	var self = this;
	self.result = {info: {}, tests: []};

	before(function() {
		self.result = {info: {}, tests: []};
	});

	after(function() {
		// Save the title in the result json object so we can recover it later.
		self.result.title = self.title;
		self.title = JSON.stringify(self.result);
	});

	describe('#indexOf()', function() {

		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
			self.result.info = {name: "Telemetry DB", setting: "PRD", build: "1.0.68.197", version: "v1"};
		});

		it('should return the index value when the value is present', function() {
			self.result.tests.push("fail");
			assert.equal(0, [1,2,3].indexOf(1));
			assert.equal(2, [1,2,3].indexOf(3));
			self.result.tests.pop();
			self.result.tests.push("pass");
		});

		it('should return the index value when the value is present', function() {
			self.result.tests.push("fail");
			assert.equal(0, [1,2,3].indexOf(1));
			assert.equal(2, [1,2,3].indexOf(3));
			self.result.tests.pop();
			self.result.tests.push("pass");
		});

		it('should return the index value when the value is present', function() {
			self.result.tests.push("fail");
			assert.equal(0, [1,2,3].indexOf(1));
			assert.equal(2, [1,2,3].indexOf(3));
			self.result.tests.pop();
			self.result.tests.push("pass");
		});

		it('should return the index value when the value is present', function() {
			self.result.tests.push("fail");
			assert.equal(0, [1,2,3].indexOf(1));
			assert.equal(2, [1,2,3].indexOf(3));
			self.result.tests.pop();
			self.result.tests.push("pass");
		});
	});
});