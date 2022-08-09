// 最大运行次数取决于call stack 和stack frame的大小。函数参数和本地变量越多
var counter = 0;
try {
    function computeMaxCallStackSize() {
        // 增加本地变量
        // var local = 1;
        // var local2 = 2;
        // var local3 = 3;
        counter += 1;
        computeMaxCallStackSize();
    }

    computeMaxCallStackSize();
} catch (e) {
    console.log(e);
    console.log('counter = ', counter);
}
/**
 * output：
 * RangeError: Maximum call stack size exceeded
 * ...
 * counter =  13959
 */