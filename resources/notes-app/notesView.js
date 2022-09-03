class NotesView {

  constructor(model, api) {
    this.api = api
    this.model = model;
    this.note = document.querySelector('#input-note');
    this.buttonEl = document.querySelector('#add-note');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.note.value);
      this.api.createNote(this.note.value)
      this.note.value = "";
      this.displayNotes();
    });
  }

  displayNotes() {

    // 1. Remove all previous notes
    const notes = document.querySelectorAll('div.note');
    notes.forEach((note) => {
      note.remove();
    });

    // For each note, create and append a new element on the main container
    this.model.getNotes().forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNewNote(notes) {
    this.model.addNote(notes);
    this.displayNotes();
  }


  displayNotesFromApi() {
    this.api.loadNotes((notes) => {
      this.model.setNotes(notes)
      this.displayNotes()
    })
  }
}


module.exports = NotesView;