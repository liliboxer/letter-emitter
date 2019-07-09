const EventListener = require('events');

class LetterEmitter extends EventListener {
  read(str) {
    console.log(str);
    str
      .split('')
      .forEach((item, index) => {
        // 2. publish
        // where we are creating the content of letterObj
        this.emit('onLetterObj', {
          // letter is naming the event 
          letter: item,
          offset: index
        })
      })
    this.emit('end');
  }
}


module.exports = { LetterEmitter };