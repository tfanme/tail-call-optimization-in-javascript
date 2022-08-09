TCO - Tail Call Optimization In JavaScript

翻转链表的实现通常可以使用递归(recursion)或者循环(loop)两种方案。
递归实现依赖于程序语言的stack机制，优点是代码的实现看起来比较直观容易理解，缺点是嵌套层次多的时候速度很慢，在嵌套层次非常多的时候还会堆栈溢出。
因此使用循环往往是更优的方案。

但是递归通过优化也可以实现很高的性能和不受max callstack size的限制，主要是通过改变原有的控制流程从而消除尾调用（递归）的方式，
可以是放到异步流程里面执行后续调用，或者对原方法进行trampolined改造。

* computer-max-callback-size - 计算callback的最大值
  * max-callback-size.js - 用一个计数器来记录当一个递归函数抛出RangeError的异常前运行的最大次数
  * es6.js - es6写法的max-callback-size.js
  * promise.js - 使用promise实现的compute-max-callstack-size
  * run-forever.js - 以为支持尾调用优化的ES6可以一直运行下去，实际是跟JavaScript引擎的实现对TCO的支持有关（详细参见strict-safari相关的代码示例）
* factorial - 计算阶乘的不同实现
  * recursion.js - 简单递归实现的阶乘计算，受限于maximum call stack size
  * tail-recursion.js - 把简单递归改写成尾递归，以便引擎可以优化
  * safari-strict.js - Safari下支持尾递归优化的代码示例
  * loop.js - 使用循环实现的阶乘计算，速度快还不存在堆栈溢出的问题
  * trampoline.js - 使用trampoline实现的阶乘计算
* fib - 计算斐波那契数列的不同实现，并计算耗时
  * fib.js - 简单直观的斐波那契计算，没有优化，复杂度很高，耗时巨长
  * cache.js - 对计算结果进行了缓存，速度提高了，但是跟简单实现一样因为使用了递归会堆栈溢出
  * loop.js - 使用循环实现，速度更快，还没有堆栈溢出问题
  * loop-arr.js - 跟loop.js一样使用循环，不过还使用了一个数组来暂存前面的中间计算结果
  * safari-strict.js - 使用尾递归的实现，严格模式下safari会对尾递归进行优化
* prevent-stack-overflow - 避免堆栈溢出的几种方法
  * 00-recurse.js - 一个测试递归导致堆栈溢出的示例
  * 01-settimeout.js - 把递归调用用setTimeout()包起来会让异步流程处理来处理函数调用，从而避免了堆栈溢出
  * 02-setimmediate.js - 原理同上，setImmediate()速度更快，不过不是标准API
  * 03-nexttick.js - 原理同上，速度更快，不过nextTick()只在Node.js环境生效
  * 04-loop.js - 使用循环，不使用尾调用，而是通过变更循环条件实现调用不同的函数
  * safari-strict.js - 仅演示作用，和setImmediate(), nextTick()一样都不能用于生产环境
* reverse-list - 翻转链表
  * recurse.js - 使用递归实现
  * loop.js - 使用循环实现
