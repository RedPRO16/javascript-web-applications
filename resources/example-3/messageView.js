class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.inputEl = document.querySelector('#message-input');


    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {

    const message = document.querySelector('#message-input').value;
    console.log(message);

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message;

    document.querySelector('#message-input').value = '';

    document.querySelector('#main-container').append(messageElement);

    //console.log(#main-container);

  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;