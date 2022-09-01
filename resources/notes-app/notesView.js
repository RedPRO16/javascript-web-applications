class NotesView {

  constructor(model) {
    this.model = model;
    this.note = document.querySelector('#input-note');
    this.buttonEl = document.querySelector('#add-note');
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {

    // 1. Remove all previous notes
      document.querySelectorAll('.note').forEach(element => {
      element.remove();
      })

    const notes = this.model.getNotes()

    // For each note, create and append a new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })

    addNewNote(newNote) {
      this.model.addNote(newNote);
      this.displayNotes();
      }
  }
}


module.exports = NotesView;