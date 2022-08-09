/**
 * 增加缓存提高效率
 * Note: 虽然效率提高了很多，但是还是没有解决循环次数过多的话堆栈溢出的问题。因此版本答案还得是使用循环，参见：fib/loop.js
 * @type {{}}
 */
let cache = {};
let ct = 0;

function fib(n) {
    ct++;
    if (n < 3) {
        return n;
    }
    if (cache[n]) {
        return cache[n];
    }
    let result = fib(n-1) + fib(n-2);
    cache[n] = result;
    return result;
}

try {
    const then = process.hrtime.bigint();
    fib(10000);
    const now = process.hrtime.bigint();
    const nanos = now - then
    const runtime = Number(nanos) / 1_000_000_000
    console.log({ runtime });
} catch (e) {
    console.log({ ct, e })
}
