const EventListener = require('events');

class LetterEmitter extends EventListener {
  read(str) {
    str
      .split('')
      .forEach(item => {
        this.emit()
      })
  }
}

module.exports = { LetterEmitter };