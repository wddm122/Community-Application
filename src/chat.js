import React from 'react';
import './chat.css';

class Chat extends React.Component {
  render() {
    return (
      <div id="chat-container">
      <h2>Web Chat</h2>
      <div id="chat-window">
        <div id="output"></div>
        <div id="feedback"></div>
      </div>
      <input id="handle" type="text" placeholder="Name" class="name" />
      <div class="message-send">
        <textarea placeholder="Message" class="message" id="message"></textarea>
        <button id="send" class="send">Send</button>
      </div>
    </div>
    );
  }
}

export default Chat;