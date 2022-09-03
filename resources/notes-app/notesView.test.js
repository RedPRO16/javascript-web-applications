
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

    const model = new Model;
    const mockApi = { createNote: jest.fn(), loadNotes: (callback) => callback(['note']) }
    const notesView = new NotesView(model, mockApi);
    const inputEl = document.querySelector('#input-note');
    const buttonEl = document.querySelector('#add-note');

    inputEl.value = 'My new amazing test note?';
    const check = inputEl.value
    buttonEl.click();
    expect(document.querySelector('div.note').textContent).toBe(check);
  });

  it('clear the list of previous notes before displaying', () => {
    const model = new Model;
    const mockApi = { createNote: jest.fn(), loadNotes: (callback) => callback(['note']) }

    const notesView = new NotesView(model, mockApi);
    const inputEl = document.querySelector('#input-note');
    const buttonEl = document.querySelector('#add-note');

    inputEl.value = 'Will this work?';
    buttonEl.click();
    expect(inputEl.value).toBe("")
  });

  it('displays notes from api', () => {
    const model = new Model;
    const mockApi = { loadNotes: (callback) => callback(['note one', 'note two']) }
    const notesView = new NotesView(model, mockApi);
    notesView.displayNotesFromApi();
    const results = document.querySelectorAll('div.note');
    expect(results.length).toBe(2);
    expect(results[0].textContent).toBe('note one')
    expect(results[1].textContent).toBe('note two')
  })


})
