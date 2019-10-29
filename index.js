const fsPromises = require('fs').promises;
//remove capitals
//capitalize everything
//reverse

function transform(src) {
  return fsPromises.readFile(src, 'utf-8')
    .then(str => removeCapitalLetters(str))
    .then(str => capitalize(str))
    .then(str => reverseStr(str)); 
}

function removeCapitalLetters(str) {
  return str.replace(/[A-Z]/g, '');
}

function capitalize(str) {
  return str.toUpperCase();
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}



// console.log(removeCapitalLetters('Hi There'));

transform('./srcfile.txt')
  .then(contents => {
    console.log(contents);
  });