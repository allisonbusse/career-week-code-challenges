const folder = './data/';
const fs = require('fs').promises;

function oopsfile(folder) {
  return fs.readdir(folder)
    .then(filenames => {
      console.log(filenames);
    });
}
oopsfile(folder);
