class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    // this.buttonEl.addEventListener('click', () => {
    //   this.model.addNote(this.note.value);
    //   this.note.value = "";
    //   this.displayNotes();
    // });
  }

  displayNotes() {

    this.model.getNotes().forEach((note) => {
      let newDiv = null;

      newDiv = document.createElement('div');
      newDiv.textContent = note;
      newDiv.className = "note";
      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NotesView;