/**
 * nextTick() 比setImmediate()还要快60-70%
 * { ct: 100000, runtime: 0.03170385 }
 * @type {number}
 */
let ct = 0;
const MAX = 100_000
const recurse = (cb) => {
    if (++ct > MAX) {
        return cb(ct)
    }
    process.nextTick(() => recurse(cb))
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