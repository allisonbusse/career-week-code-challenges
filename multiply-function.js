
function multiply(numOne, numTwo) {
  let total = 0;
  for (let i = 1; i <= numTwo; i++) {
    total += numOne;
  }
  return total;
}



function total(arr) {
  return arr.reduce((acc, num) => acc + num);
}

function stringConcat(arr) {
  return arr.reduce((acc, num) => acc + num.toString(), '');
}




function totalVotes(arr) {
  return arr.reduce((acc, current) => {
    if (current.voted) acc++;
    return acc;
  }, 0);
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  return arr.reduce((acc, item) => acc + item.price, 0);
}

var wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  return arr.reduce((acc, item) => {
    item.forEach(thing => {
      acc.push(thing);
    });
    return acc;
  }, []);
}

var arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
  return arr.reduce((acc, person) => {
    if(person.age <= 25) acc.youth++;
    if(person.age <= 25 && person.voted) acc.youngVotes++;
    if(person.age > 25 && person.age <= 35) acc.mids++;
    if(person.age > 25 && person.age <= 35 && person.voted) acc.midVotes++;
    if(person.age > 36) acc.olds++;
    if(person.age > 36 && person.voted) acc.oldVotes++;
    return acc;
  }, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 });
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
youth: 4,
midVotes: 3,
mids: 4,
oldVotes: 3,
olds: 4
}
*/