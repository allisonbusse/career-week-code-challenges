const dateAdder = require('../date-adder');

describe('Date Adder Function', () => {

  it('can add seconds to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10s';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1986, 7, 17, 12, 33, 32, 45));
  });

  it('can add minutes to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10m';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1986, 7, 17, 12, 43, 22, 45));
  });

  it('can add hours to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10h';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1986, 7, 17, 22, 33, 22, 45));
  });

  it('can add days to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10d';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1986, 7, 27, 12, 33, 22, 45));
  });

  it('can add weeks to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10w';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1986, 9, 26, 12, 33, 22, 45));
  });

  it('can add months to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10M';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1987, 5, 17, 12, 33, 22, 45));
  });

  it('can add years to a date', () => {
    const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diffTest = '10y';
    const result = dateAdder(newDate, diffTest);
    expect(result).toEqual(new Date(1996, 7, 17, 12, 33, 22, 45));
  });



});