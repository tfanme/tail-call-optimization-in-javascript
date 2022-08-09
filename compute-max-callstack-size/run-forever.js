/**
 * 使用了尾调用从而可以一直运行下去的代码，而不会抛出堆栈溢出
 * 条件：使用strict模式，在Safari浏览器下运行，因为只有safari实现了TCO支持）
 */
'use strict';
function computeMaxCallStackSize(size) {
    size = size || 1;
    if (size%10000 === 0) console.log('size = ', size);
    return computeMaxCallStackSize(size + 1);
}

computeMaxCallStackSize(1);
