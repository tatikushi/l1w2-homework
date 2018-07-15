function fib(n) {
    a = b = 1;
    var fib = [1, 1];
    for (var i = 2; i <= n; i++) {
        var c = a + b;
        fib[i] = c;
        a = b;
        b = c;
    }
    return fib.join(',');
}

console.log(fib(12));
