/**
 * 递归实现阶乘
 */
const f = n => {
    if (n === 0) {
        return 1;
    }
    return n * f(n-1);
}

for (let i = 0; i < 100000; i++) {
    i%1000 === 0 && console.log({ i, f: f(i)});
}
/**
 * 1. 这个实现也受限于maximum call stack size，只能运行到13958次
 * 2. 如果在支持尾递归优化TCO的环境下，可以改写成尾递归版本，参见factorial/tco.js
 */