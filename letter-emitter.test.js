const {LetterEmitter} = require('./letter-emitter');

describe('letter emitter', () => {
  beforeEach(done => {
    const letterEmitter = new LetterEmitter();
    done();
  })
  it('splits string', () => {
    const str = 'Max is the best kitty';
  })
});