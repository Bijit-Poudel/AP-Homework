function fibonacci(n) {
    let fib = [0, 1];
    let i = 2;
    while (fib[i - 1] + fib[i - 2] <= n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }
    return fib;
}

let n = prompt("Enter a number: ");
n = parseInt(n);

const result = fibonacci(n);
console.log("Fibonacci series up to", n, ":", result.join(", "));
