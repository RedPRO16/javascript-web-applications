class ParagraphView {
  display(newParagraph) {
    document.querySelector('#paragraph').innerText = newParagraph;
  }

};

module.exports = ParagraphView