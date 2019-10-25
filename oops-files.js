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
                return fs.rename(`${folder}${file}`, `${folder}${contents.toString()}-${file.slice(0, file.length - 4)}-${stats.mtime}.txt`);
              });
          });
      });
    });
}

oopsfile(folder);
