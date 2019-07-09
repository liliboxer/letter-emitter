const {LetterEmitter} = require('./letter-emitter');

describe('letter emitter', () => {
  let letterEmitter;

  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  })

  it('splits string', done => {
    const str = 'Max is the best kitty';
    // 1. subscribe 
    // listening for emitter and is creating letterObj
    letterEmitter.on('item', letterObj => {
      // 3. checking that the letter will match the index
      expect(str[letterObj.offset]).toEqual(letterObj.letter)
    })
    letterEmitter.on('end', () => {
      done();
    })
    letterEmitter.read(str);
  })
});