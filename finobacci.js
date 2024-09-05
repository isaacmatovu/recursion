function fibonacci(n) {
    if (n <= 1) {
      return [n];
    }
  
    const prevFibonacci = fibonacci(n - 1);
    const nextFibonacci = prevFibonacci[prevFibonacci.length - 1] + (prevFibonacci.length > 1 ? prevFibonacci[prevFibonacci.length - 2] : 0);
    return [...prevFibonacci, nextFibonacci];
  }
  
  const n = [6]
  const fibonacciSeries = fibonacci(n);
  console.log(`The Fibonacci series up to the ${n}th term is: ${fibonacciSeries}`);

