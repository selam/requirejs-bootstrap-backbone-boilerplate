/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	 baseUrl: 'js/lib',
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: [
				'jquery'
			]
		}
	},
	paths: {
		jquery: 'jquery/jquery.min',
		underscore: 'underscore/underscore-min',
		bootstrap: 'bootstrap/bootstrap.min',
		backbone: 'backbone/backbone-min',		
		text: 'requirejs-text/text',
		events: '/js/events'
	}
});

require([
	'backbone',
	'events',		
	'bootstrap'
], function (Backbone, Events) {
	/*jshint nonew:false*/
	// start Backbone.history()
	Backbone.history.start();
});
