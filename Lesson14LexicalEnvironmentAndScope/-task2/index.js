"use strict";

/**
 * @return {object}
 */
let message = "Just learn it";
let sender = "Gromcode";

function createMessenger() {
  function sendMessage(name) {
    console.log(
      `Hello, ${name}! ${message}! This message was sent by ${sender}`
    );
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text1) {
    sender = text1;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// const messenger = createMessenger();
// messenger.sendMessage("Man");

// messenger.setMessage("look at this");

// messenger.setSender("ROMAN");
