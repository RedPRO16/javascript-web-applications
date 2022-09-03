const NotesView = require("./notesView.js");
const NotesModel = require('./notesModel.js');
const NotesApi = require('./notesApi');

const notesApi = new NotesApi
const model = new NotesModel
const notesView = new NotesView(model, notesApi)



model.addNotes('Buy milk');
model.addNotes('Go to the GYM');
notesView.displayNotes();

console.log(model.getNotes())

notesView.displayNotesFromApi();