/**
 * factorial 的尾递归实现
 * 把尾调用的表达式中的其他变量放到参数里面
 *
 * 改写成尾递归为消除stack frame提供了可能，但是虽然ES6标准包括了TCO，但是只有Safari实现了（同样需要严格模式）
 * @param n
 * @param accu 累计值
 * @returns {number}
 */
// "use strict";

const f = (n, accu = 1) => {
    if (n === 0) {
        return accu * 1;
    }
    return f(n-1, n * accu);
}

for (let i = 0; i < 20000; i++) {
    if (i % 1000 === 0) {
        console.log({ i, f: f(i)});
    }
}

// 下面代码可以测试javascript的实现是否支持TCO
"use strict";

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