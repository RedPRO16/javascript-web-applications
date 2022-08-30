console.log('The notes app is running');

const NotesModel = require('./notesModel');

const model = new NotesModel();

model.addNotes('Some notes - urgent!!!')

console.log(model.getNotes());