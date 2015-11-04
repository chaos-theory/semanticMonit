"use strict"

var express = require('express');
var health = express.Router();
var sla = require('../lib/health/sla');
var reg = require('../lib/health/reg');


// TODO define the 'result' json object that is returned by the monitoring class

/* GET sla health listing. */
health.get('/sla', function(req, res) {

	sla.run(function(result) {
		res.setHeader('Content-Type', 'application/json');
	  	res.send(JSON.stringify(result));
	  });
});

/* GET reg health listing. */
health.get('/reg', function(req, res) {

	reg.run(function(result) {
		res.setHeader('Content-Type', 'application/json');
	  	res.send(JSON.stringify(result));
	  });
});

module.exports = health;