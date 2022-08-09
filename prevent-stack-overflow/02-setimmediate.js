/**
 * 防止循环调用出现stackoverflow的第二种方法：使用setImmediate()
 * 来源：https://levelup.gitconnected.com/the-call-stack-is-not-an-infinite-resource-d530df0041bc
 * 运行结果：{ ct: 100000, runtime: 1.750674488 }
 * Note: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
 * 根据MDN的描述，这个方法只在nodejs中实现了，在浏览器内核的Gecko和Webkit中都遭到了抵制，也就是说在浏览器里面是用不了的
 * setImmediate()快是因为IO处理完了以后会立即执行，而不是稍后调度
 *
 * 如果是在nodejs里面的话，nextTick()比setImmediate()更快，因为nextTick()跳过了事件消息队列，以第一优先级来执行该函数
 * @type {number}
 */
let ct = 0;
const MAX = 100_000
const recurse = (cb) => {
    if (++ct > MAX) {
        return cb(ct)
    }
    setImmediate(() => recurse(cb))
}
try {
    const then = process.hrtime.bigint();
    recurse((ct) => {
        const now = process.hrtime.bigint();
        const nanos = now - then
        const runtime = Number(nanos) / 1_000_000_000
        ct--
        console.log({ ct, runtime });
    })
} catch (e) {
    console.error({ ct, e })
}
