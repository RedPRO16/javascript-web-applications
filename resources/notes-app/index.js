const NotesView = require("./notesView.js");
const NotesModel = require('./notesModel.js');

const model = new NotesModel;
const notesView = new NotesView(model);



model.addNotes('Buy milk');
model.addNotes('Go to the GYM');
notesView.displayNotes();

console.log(model.getNotes())