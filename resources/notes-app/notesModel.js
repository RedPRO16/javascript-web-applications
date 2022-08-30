class NotesModel {

  constructor () {
    this.items = [];
  }

  getNotes() {
    return this.items;
  }

  addNotes(note) {
    this.items.push(note);
  }

  reset() {
    this.items = [];
  }

}

module.exports = NotesModel;