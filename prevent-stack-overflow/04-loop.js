/**
 * 这里演示的是A/B函数调用，通过循环的方式
 * 防止循环调用导致堆栈溢出4：使用循环
 * { ct: 100000, runtime: 0.00264254 }
 * @type {number}
 */
let ct = 0;
const MAX = 100_000
const A = () => {
    fp = B;
}
const B = () => {
    fp = A;
}
let fp = B;
const then = process.hrtime.bigint();
for (; ;) {
    if (++ct > MAX) {
        const now = process.hrtime.bigint();
        const nanos = now - then;
        const runtime = Number(nanos) / 1_000_000_000
        ct--
        console.log({ ct, runtime });
        break;
    }
    fp()
    continue;
}
/**
 * 设定循环；退出条件；继续循环
 */