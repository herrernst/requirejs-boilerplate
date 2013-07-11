define(["backbone", "jquery", "router"], function (Backbone, $, Router) {
	var router = new Router();
	$("#main").text("Hello");
    Backbone.history.start();
});