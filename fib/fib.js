/**
 * 最简单原始的斐波那契数列的实现，使用递归，速度贼慢
 * 比如42需要3秒，43需要5秒，44需要8秒，计算到45就需要13秒
 * 复杂度和耗时也是斐波那契数列 :(
 *
 * 能想到的第一个优化方法就是使用缓存，把前面计算出来的数值使用缓存保存起来，避免后面的重复计算；参见cache.js
 * @param n
 * @returns {*}
 */
function fib(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

const then = process.hrtime.bigint();
fib(45);
const now = process.hrtime.bigint();
const nanos = now - then
const runtime = Number(nanos) / 1_000_000_000
console.log({ runtime });

// 1 2 3 5 8