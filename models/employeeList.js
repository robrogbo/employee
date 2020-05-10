exports.myDateTime = function () {
  return Date();
};


exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };

//------------------------------------------------

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  Eid: String,
  Efname: String,
  Elname: String
});


// Compile model from schema
var EmpModel = mongoose.model('EmpModel',  EmployeeSchema);





