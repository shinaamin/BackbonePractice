
var Student = Backbone.Model.extend({
	 initialize: function () {
		// this.name = "shina";
 },
	
	idAttribute:"rollNo"
       //urlRoot: 'http://localhost:8080/FirstRestAPI/webapi/myresource/result/'

});


//Collections

var Students = Backbone.Collection.extend({
	model:Student
});

var students = new Students([
	new Student({"name":"shina","address":"av","rollNo":1}),
	new Student({"name":"tarak","address":"av","rollNo":2}),
]);
students.add(new Student({"name":"shina1","address":"av","rollNo":3}));

students.on("add",function(student){
	alert("name is "+ student.get(name));
});
//var findStudent = students.filter(function(student){
//	return student.get("name") === "shina";
//})