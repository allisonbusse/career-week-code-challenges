function add(date, diff) {
  let result;
  const diffOperator = diff.slice(diff.length - 1);
  const diffNumber = Number(diff.slice(0, diff.length - 1));

  if(diffOperator === 's') result = new Date(date.setSeconds(date.getSeconds() + diffNumber));
  if(diffOperator === 'm') result = new Date(date.setMinutes(date.getMinutes() + diffNumber));
  if(diffOperator === 'h') result = new Date(date.setHours(date.getHours() + diffNumber));
  if(diffOperator === 'd') result = new Date(date.setDate(date.getDate() + diffNumber));
  if(diffOperator === 'w') result = new Date(date.setDate(date.getDate() + diffNumber * 7));
  if(diffOperator === 'M') result = new Date(date.setMonth(date.getMonth() + diffNumber));
  if(diffOperator === 'y') result = new Date(date.setFullYear(date.getFullYear() + diffNumber));

  return result;
}

module.exports = add;

const newDate = new Date(1986, 7, 17, 12, 33, 22, 45);
const diffTest = '10d';
console.log(newDate);
console.log(add(newDate, diffTest));