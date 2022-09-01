
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

  });

  it('adds a new note', () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();

    const view = new NotesView(model);

    // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

  // 2. Click the button
    const button = document.querySelector('#add-note-btn');
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  });

  it('clear the list of previous notes before displaying', () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });


})
