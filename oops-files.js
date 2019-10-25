const folder = './data/';
const fs = require('fs').promises;

function oopsfile(folder) {
  return fs.readdir(folder)
    .then(filenames => {
      filenames.forEach(file => {
        return fs.readFile(`${folder}${file}`)
          .then(contents => {
            return fs.stat(`${folder}${file}`)
              .then(stats => {
                console.log(stats.mtime);
              });
          });
      });
    });
}

oopsfile(folder);
