
/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require("./notesView.js");
const Model = require("./notesModel.js");

describe ('NotesView class', ()=>{

  beforeEach(()=>{
    document.body.innerHTML = fs.readFileSync('./index.html')
  });

  it('displays notes', () => {
    const model = new Model();
    model.addNotes('Buy milk');
    model.addNotes('Go to the GYM');

    const notesView = new NotesView(model);
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);

  })

})
