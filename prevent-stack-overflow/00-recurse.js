/**
 * 这是一个极简单的递归，因为call stack有限制，因此循环调用次数太大的时候会导致堆栈溢出
 *  ct: 13959
 * @type {number}
 */
let ct = 0;
const MAX = 100_000
const recurse = () => {
    if (++ct > MAX) return
    return recurse()
}
try {
    recurse()
} catch (e) {
    console.error({ ct, e })
}
/**
 * 要解决这个问题有四种方法，setTimeout, setImmediate, nextTick, 以及loop。
 * setTimeout(), setImmediate(), nextTick()都是利用了异步的机制，但是性能上后面的要更好；
 * loop()则应该是当前版本答案，是正解。
 * 具体可以参见对应的代码示例
 *
 * note：在safari下面可以跑45624次，而且不管本地变量有多少个，应该是对tco进行了优化，但是超过了其他东西的限制
 */