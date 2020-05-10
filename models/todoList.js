//todoList

// Create an instance of model SomeModel
var todo = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
todo.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});


// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
});