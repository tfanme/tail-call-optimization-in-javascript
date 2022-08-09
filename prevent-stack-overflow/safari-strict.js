'use strict';

let ct = 0;
const MAX = 100_000
const recurse = (cb) => {
    if (++ct > MAX) {
        return cb(ct)
    }
    recurse(cb);
}
try {
    const then = new Date().getTime();
    recurse((ct) => {
        const now = new Date().getTime();
        const nanos = now - then
        const runtime = nanos / 1000
        ct--
        console.log({ ct, runtime });
    })
} catch (e) {
    console.error({ ct, e })
}