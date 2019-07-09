const {LetterEmitter} = require('./letter-emitter');

describe('letter emitter', () => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  })
  it('splits string', () => {
    const str = 'Max is the best kitty';
    letterEmitter = new LetterEmitter;
    letterEmitter.on('letter', letter => {
      expect(letter)
    })
    letterEmitter.on('end', () => {
      done();
    })
    letterEmitter.read(str);
  })
});