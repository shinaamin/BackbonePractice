
var Student = Backbone.Model.extend({
	 initialize: function () {
		// this.name = "shina";
 },
	
	idAttribute:"name",
       urlRoot: 'http://localhost:8080/FirstRestAPI/webapi/myresource/result/'

});

//Read
var student = new Student({"xyz":"shina"});
student.fetch({
    error: function (response) {
       console.log("Something went wrong while saving the model");
    },
	 success: function (res, options) {
        console.log("rollno: " + res.get("rollNo"));
    }
});

//save student @Path("/result")
var student1 = new Student({"rollNo":"3"});
student1.save({},{
    error: function (response) {
        console.log("Something went wrong while saving the model");
    },
	 success: function (res, options) {
        console.log("rollno: " + res.get("rollNo"));
    }
});

