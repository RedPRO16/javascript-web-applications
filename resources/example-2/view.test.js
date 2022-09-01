/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');


describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a new paragraph', () => {

    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();

    //Act
    view.addParagraph();
    view.addParagraph();

    //Assert
    expect(document.querySelectorAll('p').length).toBe(4);

  })

  it('clears all paragraphs in the document', ()=>{
    //Arrange
    document.body.innerHTML =fs.readFileSync('./index.html');
    const view = new View

    //Act
    view.clearParagraphs();

    //Assert
    expect(document.querySelectorAll('p').length).toBe(0);
  })

});