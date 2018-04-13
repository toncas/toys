/**
 * Write a function fib() that takes an integer nn and returns the nnth Fibonacci number
 */

const fib = (n) => {
  if (n < 0) {
    return;
  }else if (n === 0 || n === 1) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;

}

console.log(fib(12));