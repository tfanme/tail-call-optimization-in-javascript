/**
 * 使用循环实现阶乘计算
 */
const f = n => {
    let result = 1;
    if (n === 0) {
        return result;
    }
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log('factorial(100) = ', f(100));

// 使用BigInt
const fn = n => {
    let result = 1n;
    if (n === 0) {
        return result;
    }
    for (let i = 1n; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log('factorial(10_0000) = ', fn(10_0000)); // 一个非常巨大的数字。使用循环速度快还不需要担心堆栈溢出
