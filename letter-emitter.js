const EventListener = require('events');

class LetterEmitter extends EventListener {
  read(str) {
    console.log(str);
    str
      .split('')
      .forEach((letter, offset) => {
        // 2. publish
        // where we are creating the content of letterObj
        this.emit('onLetterObj', { letter, offset });
      });
    this.emit('end');
  }
}


module.exports = { LetterEmitter };