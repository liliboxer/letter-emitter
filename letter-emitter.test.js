const {LetterEmitter} = require('./letter-emitter');

describe('letter emitter', done => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  })
  it('splits string', () => {
    const str = 'Max is the best kitty';
    // letterEmitter = new LetterEmitter;
    letterEmitter.on('item', letter => {
      expect(str).toContainEqual(letter)
    })
    letterEmitter.on('end', () => {
      done();
    })
    letterEmitter.read(str);
  })
});