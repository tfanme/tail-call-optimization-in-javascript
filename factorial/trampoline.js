/**
 * 使用trampoline实现的阶乘计算
 * @param n
 * @returns {*}
 */
function factorial(n) {
    var _factorial = trampoline(function myself(accu, n) {
        // 注意这里返回的是一个无参数的匿名函数（thunk），而不是对函数的调用
        // 参考wikipedia里面thunk的javascript demo，这是个典型的thunk（https://en.wikipedia.org/wiki/Thunk）
        return n ? function () {
            return myself(accu * n, n - 1n);
        } : accu;
    });
    return _factorial(1n, n);
}

// 普通函数和箭头函数的区别，以及apply，call，bind在箭头函数里面的应用
function trampoline(fn) {
    return (...args) => {
        var result = fn.call(fn, ...args);

        while (result instanceof Function) {
            result = result();
        }
        return result;
    }
}

console.log(factorial(10n));
console.log(factorial(100n));
console.log(factorial(100000n));

/**
 * trampoline()的参数是一个thunk，thunk是一个无参数的匿名函数，执行的时候内部会有运算
 * trampolined的过程相当于是生成了一个高阶函数，业务使用trampoline()生成的函数替代原函数，因此：
 * 1. trampoline()返回的一定是个函数
 * 2. 这个函数可以把参数传递给被包装的函数(这里我们用了es6的rest parameters特性）
 */