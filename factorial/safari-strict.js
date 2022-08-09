/**
 * 来源：https://stackoverflow.com/questions/66164128/tail-call-optimization-tco-not-working-in-safari
 * 结论：safari真的支持tco，需要满足四个条件：
 * 1. 调用函数是在严格模式下
 * 2. 调用函数可以是一个普通函数或者箭头函数
 * 3. 调用函数不能是一个generator 函数
 * 4. 被调用函数的返回值是通过调用函数返回的
 */
"use strict";

function factorial(n, r = 1n) {
    // 这个地方尾调用的改造是通过增加一个参数来存放运算表达式实现的
    return n <= 1n ? r : factorial(n - 1n, n * r);
}

console.log(factorial(36000n).toString());