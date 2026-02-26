// Factorial
function factorial(n) {
  if (n < 0) return "Invalid input";

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}


// Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


// Fibonacci Sequence
function fibonacci(n) {
  if (n <= 0) return [];

  if (n === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}