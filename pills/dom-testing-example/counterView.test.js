
const fs = require('fs');
const CounterView = require('./titleView');

it('displays counterview', () => {
  // 1. Arrange - load the HTML so Jest can build its own DOM tree
  // and instantiate our View class
  document.body.innerHTML = fs.readFileSync('./index.html');
  const view = new CounterView();

  // 2. Act - ask the view to display the new title (the DOM tree will change)
  view.increment('This is my new counter!');

  // 3. Assert - using querySelector,
  // we get the DOM element and assert its content changed
  const counterEl = document.querySelector('#counter');
  expect(counterEl.increment).toBe('1')
});