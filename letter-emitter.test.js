const {LetterEmitter} = require('./letter-emitter');

describe('letter emitter', () => {
  let letterEmitter;

  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  })

  it('splits string', done => {
    const str = 'Max is great';
    const mockCallback = jest.fn();
    // 1. subscribe 
    // listening for emitter and is creating letterObj
    letterEmitter.on('onLetterObj', letterObj => {
      // 3. checking that the letter will match the index
      mockCallback();
      expect(str[letterObj.offset]).toEqual(letterObj.letter)
    })
    letterEmitter.once('end', () => {
      done();
    })
    letterEmitter.read(str);
    expect(mockCallback.mock.calls.length).toBe(12);
  })
});