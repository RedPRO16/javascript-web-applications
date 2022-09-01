const fs = require('fs');
const ParagraphView = require('./titleView');


it('displays paragraph', () => {
  // 1. Arrange - load the HTML so Jest can build its own DOM tree
  // and instantiate our View class
  document.body.innerHTML = fs.readFileSync('./index.html');
  const view = new ParagraphView();

  // 2. Act - ask the view to display the new title (the DOM tree will change)
  view.display('This is my new paragraph!');

  // 3. Assert - using querySelector,
  // we get the DOM element and assert its content changed
  const paragraphEl = document.querySelector('#paragraph');
  expect(paragraphEl.innerText).toBe('This is my new paragraph!')
});