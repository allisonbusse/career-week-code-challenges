const oopsfile = require('../oops-files');
const fs = require('fs').promises;

fs.readdir.promises = jest.fn();
fs.readFile.promises = jest.fn();
fs.stat.promises = jest.fn();
fs.rename.promises = jest.fn();


describe('Renaming File Function', () => {

  it('renames a file to a certain format', () => {
    const folder = './data/';
    oopsfile(folder);

    expect(fs.readdir.promises.mock.calls).toBe('hi');
    expect(fs.readFile.promises.mock.calls).toBe('hi');
  });
});
