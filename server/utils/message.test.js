var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {

    const from = 'Bob'
    const text = 'Hello there!'
    // store res in variable
    const res = generateMessage(from, text);
    // assert from match
    expect(res.from).toBe('Bob')
    // assert text match
    expect(res.text).toBe('Hello there!');
    // assert createdAt is a number
    expect(res.createdAt).toBeA('number');

    // alternative assertion for 'from' and 'text':
    // expect(res).toInclude({ from, text })
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {

    const from  = 'Deb';
    const latitude = 1;
    const longitude = 1;
    const url = 'https://www.google.com/maps?q=1,1';

    const res = generateLocationMessage(from, latitude, longitude);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from, url});
  });
});

