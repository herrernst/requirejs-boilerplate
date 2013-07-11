require.config({
    waitSeconds: 200, /* my computer is too slow when running r.js */
	"paths": {
		jquery: "jquery-1.10.2"
	},
    // Add this map config in addition to any baseUrl or
    // paths config you may already have in the project.
	shim: {
	    backbone: {
	        deps: ["underscore", "jquery"],
	        exports: "Backbone",
			init: function(_, $) {
				//we cannot unconflict jQuery before Backbone loads, because it depends on a global jQuery
				$.noConflict(true);
				_.noConflict();
				// return this.Backbone;
				return this.Backbone.noConflict();
			}
	    },
	    underscore: {
	        exports: "_"
	    }
	},
});

require(['start']);