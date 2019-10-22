function multiply(numOne, numTwo) {
  let total = 0;
  for(let i = 1; i <= numTwo; i++) {
    total += numOne;
  }
  return total;
}

console.log(multiply(8, 8));