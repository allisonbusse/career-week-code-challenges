const folder = './data/';
const fs = require('fs').promises;

function oopsfile(folder) {
  return fs.readdir(folder)
    .then(filenames => {
      filenames.forEach(file => {
        return fs.readFile(`${folder}${file}`)
          .then(contents => {
            console.log(contents.toString());
          });
      });
    });
}

oopsfile(folder);
