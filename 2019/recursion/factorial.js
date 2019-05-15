const factorial = (n) => {
  console.log(n);
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


const value = factorial(30);
console.log(value);