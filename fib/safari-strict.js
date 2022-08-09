/**
 * 在strict模式下，safari支持tco，需要把普通递归改写成尾递归模式
 */
'use strict';

let ct = 0;
function fib(n, r = 1, k = 1) {
    ct++;
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return r + k;
    }
    return fib(n-1, k, r + k);
}

// for (let i = 1; i < 10; i++) {
//     console.log({ i, fib: fib(i)});
// }
try {
    const then = new Date().getTime();
    fib(100000);
    const now = new Date().getTime();
    const nanos = now - then
    const runtime = nanos / 1000
    console.log({ ct, runtime });
} catch (e) {
    console.log({ ct, e })
}
// {ct: 99998, runtime: 0.012}

/**
 * 更多信息可以参考：https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0
 * The Art of Computer ProgrammingArt of Computer Programming, Volume 1: Fundamental Algorithms, Third Edition. Addison-Wesley. Chapter 1.2.8.
 */