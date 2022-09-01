class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = 'This is message';

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;