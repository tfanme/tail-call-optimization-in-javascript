// 在浏览器里面运行可以获得13883
// version 1
// window.counter = 0;
// function stackOverflow() {
//     window.counter++;
//     stackOverflow();
// }
// setTimeout(function() {console.log(counter);}, 1000);
// stackOverflow();

// version 2
// 来源：https://levelup.gitconnected.com/the-call-stack-is-not-an-infinite-resource-d530df0041bc
// 这里是把递归调用放到了一个setTimeout()里面，这样递归调用就不是一个subroutin的call，而是在event loop里面进行调用，
// 外层的函数调用是立即返回的，因此不存在stack overflow的问题
// 但是setTimeout()在这里的速度太慢了，使用setImmediate()替代的话可以带来指数级的提升
// runtime: 122.505990139
let ct = 0;
const MAX = 100_000
const recurse = (cb) => {
    if (++ct > MAX) {
        return cb(ct)
    }
    setTimeout(() => recurse(cb), 0)
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