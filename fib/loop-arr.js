/**
 * 之前在cache.js里面是用数组作为缓存，然后fib本身的实现还是递归。
 * 实际更简单的代码是直接用数组，也是通过iteration的方式，但是和loop里面的实现也不一样
 *
 * Note: 这个计算里面会用到非常大的数，可以使用ES6的bigint类型以及typed arrays实现
 */
const fib = n => {
    let f = new BigUint64Array(n+1);
    f[0] = 0n;
    f[1] = 1n;
    f[2] = 2n;
    if (n === 0) {
        return f[0];
    }
    if (n === 1) {
        return f[1];
    }
    if (n === 2) {
        return f[2];
    }
    for (let i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
console.log({ i: 0, fib: fib(0)});
console.log({ i: 1, fib: fib(1)});
console.log({ i: 2, fib: fib(2)});
console.log({ i: 3, fib: fib(3)});
console.log({ i: 50, fib: fib(50)});
console.log({ i: 500, fib: fib(500)});
console.log({ i: 5000, fib: fib(5000)});

// 算下时间
let n = 100000;
const then = process.hrtime.bigint();
fib(n);
const now = process.hrtime.bigint();
const nanos = now - then
const runtime = Number(nanos) / 1_000_000_000
console.log({ runtime });
// { runtime: 0.014712334 }
// 用数组比直接循环稍微慢一点，但是好处是前面的计算结果也都记录下来了
