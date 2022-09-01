class CounterView {
  increment(newCounter) {
    document.querySelector('#counter').innerText = newCounter;
  }

}

module.exports = CounterView