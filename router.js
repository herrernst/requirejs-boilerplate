define(['backbone'], function (Backbone) {
   return Backbone.Router.extend({
     routes: {
       "*action": function (path) {
		   console.log("navigated to " + path);
       }
     }
   });
})