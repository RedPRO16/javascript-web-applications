const NotesModel =require("./notesModel.js");

describe ('NotesModel', ()=>{

  it('returns an empty list of items', () => {
  const model = new NotesModel();

  expect(model.getNotes()).toEqual([]);

  });

  it('add a new item to notes', () => {
    const model = new NotesModel();
    model.addNotes('Buy milk');

    expect(model.getNotes()).toEqual(['Buy milk']);

  })

  it('reset the list of notes', () => {
    const model = new NotesModel();
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    model.reset();

    expect(model.getNotes()).toEqual([])

  })
})