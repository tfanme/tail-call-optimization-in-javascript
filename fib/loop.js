/**
 * 使用循环来实现斐波那契数列的计算
 * （就是把前面的递归实现改写成循环，循环条件控制调用次数和退出条件，循环体控制）
 */
const fib = (n) => {
    // let result = 0;
    if (n <= 0) {
        return 0;
    }

    let n1 = 1;
    if (n === 1) {
        return n1
    }

    let n2 = 2;
    if (n === 2) {
        return n2;
    }

    let current = n1 + n2;
    // n1, n2, current
    for (let idx = 3; idx <= n; idx++) {
        current = n1 + n2;
        n1 = n2;
        n2 = current;
    }
    return current;
}

// 同时打印log，看一下计算的数值
// for (let n = 1; n < 100; n++) {
//     console.log({n, fib: fib(n)});
// }
let n = 100000;
const then = process.hrtime.bigint();
fib(n);
const now = process.hrtime.bigint();
const nanos = now - then
const runtime = Number(nanos) / 1_000_000_000
console.log({ runtime });
// 使用循环的实现是真的快：{ runtime: 0.004840334 }

/**
 * 还有一种使用数组+循环的实现
 */